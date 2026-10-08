import json
import glob
import os

def classify_question(q):
    sub = q.get('subject_code', '')
    module = q.get('module', '')
    text = q.get('question', '').lower()
    images = q.get('images', [])
    
    # 1. Determine question_type
    q_type = "theory"
    if len(images) > 0 or any(k in text for k in ["kí hiệu", "ký hiệu", "sơ đồ", "hình", "đồ thị", "time chart", "bản vẽ", "sóng"]):
        q_type = "schema"
    elif any(k in text for k in ["bao nhiêu", "giá trị", "tính", "tần số", "chu kỳ", "bước sóng", "dòng điện", "điện áp", "1005", "1003", "gấp bao nhiêu", "1km", "đơn vị", "vin"]):
        q_type = "calculation"
    elif any(k in text for k in ["sự cố", "khắc phục", "nguyên nhân", "bảo trì", "lắp đặt", "sử dụng thước", "chống bụi", "bôi trơn", "đặc tính của ssr", "ngăn bụi"]):
        q_type = "application"

    # 2. Determine topic_tag
    tag = "Kiến thức tổng hợp"
    if sub == "electric":
        if any(k in text for k in ["nguyên tử", "bán dẫn", "fermi", "dẫn điện", "kích thích"]):
            tag = "Vật lý bán dẫn & Nguyên tử"
        elif any(k in text for k in ["dao động ký", "oscilloscope", "vrms", "vp", "chu kỳ", "tần số", "bước sóng"]):
            tag = "Đo lường & Sóng dao động"
        elif any(k in text for k in ["điện trở", "tụ", "cuộn cảm", "1005", "1003", "dòng điện"]):
            tag = "Linh kiện thụ động R-L-C"
        elif any(k in text for k in ["diode", "led", "zener"]):
            tag = "Diode & Bán dẫn quang"
        elif any(k in text for k in ["transistor", "pnp", "npn", "ssr", "photo coupler"]):
            tag = "Transistor & Khóa bán dẫn"
        else:
            tag = module.split('.')[-1].strip() if '.' in module else module
    elif sub == "plc":
        if any(k in text for k in ["rom", "ram", "cpu", "cấu trúc", "quét", "scan"]):
            tag = "Phần cứng & Bộ nhớ PLC"
        elif any(k in text for k in ["timer", "counter", "time chart", "t0", "c0"]):
            tag = "Timer, Counter & Giản đồ thời gian"
        elif any(k in text for k in ["lệnh", "ld", "out", "set", "rst", "tiếp điểm"]):
            tag = "Tập lệnh Lập trình Ladder"
        elif any(k in text for k in ["gx", "developer", "cài đặt", "phần mềm", "cáp"]):
            tag = "Phần mềm GX Developer & Kết nối"
        elif any(k in text for k in ["device", "x", "y", "m", "d"]):
            tag = "Hệ thống vùng nhớ Device PLC"
        else:
            tag = module.split('.')[-1].strip() if '.' in module else module
    elif sub == "machine":
        if any(k in text for k in ["vòng bi", "bearing", "bạc đạn"]):
            tag = "Vòng bi & Ổ đỡ (Bearing)"
        elif any(k in text for k in ["khớp nối", "coupling", "then", "chốt", "trục"]):
            tag = "Trục, Then & Khớp nối cơ khí"
        elif any(k in text for k in ["spline", "thanh trượt", "lm guide", "vít me"]):
            tag = "Dẫn hướng tuyến tính & Vít me bi"
        elif any(k in text for k in ["bôi trơn", "mỡ", "dầu", "seal", "phớt"]):
            tag = "Bôi trơn & Phớt chắn bụi"
        elif any(k in text for k in ["thước", "panme", "đo", "1km", "quy đổi"]):
            tag = "Đo lường & Dụng cụ cơ khí"
        elif any(k in text for k in ["tiêu chuẩn", "bản vẽ", "dung sai"]):
            tag = "Tiêu chuẩn kỹ thuật & Bản vẽ JIS"
        else:
            tag = module.split('.')[-1].strip() if '.' in module else module
    elif sub == "pneumatics":
        if any(k in text for k in ["máy nén khí", "mnk", "boyle", "charles", "dung tích"]):
            tag = "Máy nén khí & Định luật nhiệt động"
        elif any(k in text for k in ["xilanh", "piston", "bearing", "foot", "trunnion"]):
            tag = "Xilanh & Cơ cấu chấp hành khí nén"
        elif any(k in text for k in ["van", "tiết lưu", "trì hoãn", "cửa nối"]):
            tag = "Van khí nén & Điều khiển dòng"
        elif any(k in text for k in ["bộ lọc", "frl", "hẹn giờ", "áp suất"]):
            tag = "Phụ kiện & Bộ xử lý khí FRL"
        else:
            tag = module.split('.')[-1].strip() if '.' in module else module

    return q_type, tag

def build_detailed_explanation(q, q_type, tag):
    ans_key = q.get('correct_answer', '').strip().upper()
    q_text = q.get('question', '').strip()
    sub_name = q.get('subject', 'Kỹ thuật')
    opts = q.get('options', [])
    correct_opt_text = ""
    for opt in opts:
        if opt.get('key') == ans_key:
            correct_opt_text = opt.get('text', '')
            break

    overview = f"Câu hỏi kiểm tra kiến thức về chuyên đề **{tag}** ({sub_name}). Đáp án chuẩn xác là **{ans_key}**."
    t_lower = q_text.lower()
    
    # 1. Electric topics
    if "light-emitting diode" in t_lower or "led" in t_lower:
        why_correct = "Đáp án A là ký hiệu chính xác của Diode phát quang (LED - Light-Emitting Diode). Ký hiệu LED gồm tam giác biểu diễn chiều thuận dòng điện từ Anode sang Cathode kèm hai mũi tên hướng ra ngoài biểu thị sự phát xạ ánh sáng khi có dòng chạy qua."
        why_wrong = "Các phương án khác thể hiện các loại diode khác: Diode Zener (có móc gãy góc ở cực Cathode để ghim áp ổn áp), Photodiode (mũi tên hướng vào trong để nhận quang thông), hoặc Diode chỉnh lưu thường (chỉ có vạch ngang không có mũi tên)."
        supp = "💡 **Ghi nhớ:** LED phát quang khi được phân cực thuận (VD xấp xỉ 1.8V - 3.2V tùy màu). Chân dài là Anode (+), chân ngắn hoặc mép vát trên thân là Cathode (-)."
    
    elif "ssr" in t_lower:
        why_correct = f"Đáp án {ans_key} là chính xác. Rơ le bán dẫn (Solid State Relay - SSR) sử dụng linh kiện bán dẫn (Triac/Opto-coupler) để đóng ngắt mạch điện công suất cao mà hoàn toàn không có tiếp điểm cơ khí."
        why_wrong = "Các phương án còn lại là ưu điểm nổi bật của SSR: hoạt động êm ái hoàn toàn không tiếng ồn, không sinh tia lửa điện gây cháy nổ, tốc độ đóng cắt micro-giây và độ tin cậy tuổi thọ cực cao."
        supp = "💡 **Cẩm nang SSR:** Do không có tiếp điểm cơ khí nên SSR không bị mòn tiếp điểm, tuy nhiên khi dẫn điện sẽ có điện áp sụt nhỏ sinh nhiệt, cần trang bị nhôm tản nhiệt."

    elif "photo coupler" in t_lower:
        why_correct = f"Đáp án {ans_key} là chính xác. Photo Coupler (Opto-isolator) là linh kiện cách ly quang học bao gồm một LED phát quang và một Phototransistor thu quang tích hợp trong một vỏ kín."
        why_wrong = "Photo Coupler truyền tín hiệu hoàn toàn bằng ánh sáng nên có khả năng cách ly điện áp rất cao (hàng ngàn Volt) giữa mạch điều khiển MCU/PLC và mạch động lực, chống nhiễu vượt trội."
        supp = "💡 **Ứng dụng thực tế:** Được sử dụng tại tất cả các ngõ vào/ra số (Digital Input/Output) của PLC Mitsubishi, Omron để chống xung điện áp cảm ứng phá hủy CPU."

    elif "1005" in t_lower:
        why_correct = "Đáp án C (10 MΩ) là chính xác. Giải mã điện trở dán SMD 4 chữ số: 3 chữ số đầu là giá trị có nghĩa (100), chữ số thứ tư là số mũ cơ số 10 (10^5). Ta có: R = 100 x 10^5 Ω = 10.000.000 Ω = 10 MΩ."
        why_wrong = "1005 Ω là nhầm lẫn do đọc trực tiếp con số in trên lưng; 100 kΩ tương ứng với mã 1003 (100 x 10^3 Ω); 100 MΩ tương ứng với mã 1006."
        supp = "💡 **Quy tắc giải mã điện trở dán:** Mã 4 số ABCD -> R = ABC x 10^D Ω. Mã 3 số ABC -> R = AB x 10^C Ω."

    elif "1003" in t_lower:
        why_correct = "Đáp án B (100 KΩ) là chính xác. Ta có: 3 số đầu là 100, số nhân là 10^3. Vậy R = 100 x 10^3 Ω = 100.000 Ω = 100 kΩ."
        why_wrong = "1003 Ω là đọc nhầm giá trị số học; 10 MΩ là mã 1005 (100 x 10^5 Ω); 100 MΩ là mã 1006."
        supp = "💡 **Bảng quy đổi đơn vị điện trở:** 1 kΩ = 1.000 Ω (10^3 Ω); 1 MΩ = 1.000.000 Ω (10^6 Ω)."

    elif "vin =100v" in t_lower or ("vin" in t_lower and "5k" in t_lower):
        why_correct = f"Đáp án {ans_key} là chính xác. Áp dụng định luật Ohm: I = V / R = 100V / 5.000Ω = 0.02 A. Đổi sang miliampe (mA): I = 0.02 x 1000 = 20 mA."
        why_wrong = "Các phương án 0.02mA, 0.2mA, 2mA là do nhầm lẫn thứ nguyên khi đổi đơn vị từ Ampe sang miliampe (1 A = 1000 mA)."
        supp = "💡 **Định luật Ohm cơ bản:** I = U / R; U = I x R; R = U / I. Luôn chú ý đổi kΩ sang Ω trước khi tính."

    elif "vrms" in t_lower or "0.707" in t_lower:
        why_correct = f"Đáp án {ans_key} là chính xác. Với sóng xoay chiều hình sin có biên độ đỉnh Vp = 3V, giá trị điện áp hiệu dụng Vrms được tính: Vrms = Vp / căn(2) ≈ 0.707 x Vp = 0.707 x 3V ≈ 2.121 V."
        why_wrong = "Giá trị đỉnh - đỉnh là Vp-p = 2 x Vp = 6V; Giá trị trung bình là Vavg ≈ 0.637 x Vp = 1.911 V."
        supp = "💡 **Công thức sóng hình sin:** Vrms = 0.707 x Vp; Vavg = 0.637 x Vp; Vp-p = 2 x Vp."

    elif "500μs" in t_lower or "chu kỳ sóng" in t_lower:
        why_correct = f"Đáp án {ans_key} là chính xác. Chu kỳ T = (Số ô một chu kỳ) x (Hệ số thời gian Time/Div) = 4 ô x 500 μs/ô = 2.000 μs = 2 ms."
        why_wrong = "Các phương án khác đếm sai số ô của một chu kỳ sóng hoặc đổi nhầm đơn vị micro-giây sang mili-giây (1 ms = 1000 μs)."
        supp = "💡 **Đo kiểm dao động ký:** Chu kỳ T = Delta_X x Time/Div; Tần số f = 1 / T."

    elif "bước sóng" in t_lower or "v = 3×10" in t_lower:
        why_correct = f"Đáp án {ans_key} là chính xác. Bước sóng được tính theo công thức: lambda = v / f = (3 x 10^8 m/s) / 500 Hz = 600.000 m = 600 km."
        why_wrong = "Nhầm lẫn nhân v x f thay vì chia, hoặc tính sai số mũ luỹ thừa cơ số 10."
        supp = "💡 **Công thức truyền sóng:** lambda = v / f (trong đó v là vận tốc truyền sóng m/s, f là tần số Hz, lambda là bước sóng m)."

    elif "nguyên tử" in t_lower:
        why_correct = f"Đáp án {ans_key} là chính xác. Trong nguyên tử trung hòa về điện tích, số hạt proton mang điện tích dương luôn bằng số electron mang điện tích âm (Z = p = e)."
        why_wrong = "Các phương án khẳng định số proton có thể thay đổi tùy ý là sai vì số proton chính là số hiệu nguyên tử cố định đặc trưng cho nguyên tố."
        supp = "💡 **Cấu tạo nguyên tử:** Hạt nhân gồm Proton (+1) và Neutron (0); Lớp vỏ gồm các Electron (-1) quay quanh quỹ đạo."

    elif "pnp" in t_lower or ("transistor" in t_lower and "kí hiệu" in t_lower):
        why_correct = f"Đáp án {ans_key} là chính xác. Transistor PNP có mũi tên ở cực phát E (Emitter) hướng vào trong cực gốc B (Base). Điều này thể hiện chiều dòng điện quy ước chảy từ E vào B."
        why_wrong = "Transistor NPN có mũi tên ở cực E hướng ra ngoài (chảy từ B ra E)."
        supp = "💡 **Mẹo phân biệt BJT:** PNP = 'Point iN' (mũi tên đâm vào); NPN = 'Not Point iN' (mũi tên đâm ra ngoài)."

    # 2. PLC topics
    elif "rom" in t_lower:
        why_correct = f"Đáp án {ans_key} là chính xác. ROM (Read-Only Memory) là bộ nhớ cố định không bay hơi (Non-volatile), dữ liệu không bị mất khi ngắt nguồn điện."
        why_wrong = "RAM (Random Access Memory) mới là bộ nhớ tạm thời bị xóa sạch khi mất nguồn (trừ khi có pin nuôi backup)."
        supp = "💡 **Phân loại bộ nhớ PLC:** ROM chứa Firmware hệ thống; RAM/EEPROM chứa chương trình điều khiển và bảng trạng thái I/O."

    elif "time chart" in t_lower or ("timer" in t_lower and "đoạn chương trình" in t_lower):
        why_correct = f"Đáp án {ans_key} là chính xác. Dựa vào giản đồ thời gian Time Chart và mã lệnh Ladder, cuộn Timer chỉ kích hoạt đếm khi tiếp điểm ngõ vào duy trì trạng thái ON liên tục đủ thời gian đặt trước."
        why_wrong = "Các phương án sai do bỏ qua điều kiện duy trì (ngõ vào ngắt giữa chừng làm Timer reset về 0) hoặc cho tiếp điểm đóng tức thời."
        supp = "💡 **Nguyên lý On-Delay Timer:** Tiếp điểm của Timer chỉ đóng lại sau khoảng trễ T = K x cơ số thời gian (ví dụ K50 với Timer 100ms tương ứng trễ 5 giây)."

    elif "gx developer" in t_lower or "write mode" in t_lower:
        why_correct = f"Đáp án {ans_key} là chính xác. Trong phần mềm GX Developer/GX Works, để soạn thảo chỉnh sửa chương trình phải vào chế độ Write Mode (F2), sau đó Compile/Convert (F4) trước khi nạp xuống PLC."
        why_wrong = "Read Mode (F1) chỉ đọc không sửa được; Monitor Mode (F3) dùng để giám sát trực tuyến trạng thái biến."
        supp = "💡 **Phím tắt GX Works chuẩn:** F2 = Write Mode; F3 = Monitor Mode; Shift+F3 = Monitor (Write Mode); F4 = Convert."

    # 3. Machine topics
    elif "vòng bi" in t_lower or "bearing" in t_lower:
        why_correct = f"Đáp án {ans_key} là chính xác. Khi ghép cặp đôi vòng bi tiếp xúc góc (Angular Contact Ball Bearing), kiểu ghép nối tiếp (Tandem - DT) cho phép cả hai vòng bi cùng chia sẻ và chịu tải trọng dọc trục cực lớn theo một hướng."
        why_wrong = "Kiểu ghép lưng đối lưng (DB) và mặt đối mặt (DF) dùng để chịu tải trọng hướng trục hai phía hoặc chịu mô-men lật."
        supp = "💡 **Ký hiệu ghép cặp vòng bi:** DB (Lưng đối lưng); DF (Mặt đối mặt); DT (Ghép song song/Nối tiếp một chiều)."

    elif "ball spline" in t_lower:
        why_correct = f"Đáp án {ans_key} là chính xác. Ball Spline dạng Straight-sided spline có các rãnh bi thẳng song song dọc theo thân trục, cho phép truyền mô-men xoắn trong khi vẫn chuyển động trượt tịnh tiến với độ ma sát cực nhỏ."
        why_wrong = "Các dạng khác có rãnh then hoa cơ học không bi hoặc dạng rãnh xoắn ốc (Spiral)."
        supp = "💡 **Ưu điểm Ball Spline:** Không có độ rơ góc (Zero backlash), chịu tải gấp nhiều lần ống trượt thông thường."

    elif "labyrinth seal" in t_lower:
        why_correct = f"Đáp án {ans_key} là chính xác. Phớt mê cung (Labyrinth Seal) là cơ cấu chắn bụi không tiếp xúc, tạo khe hở zíc zắc nhiều nếp gấp để triệt tiêu áp suất và ngăn phoi, bụi bẩn, chất lỏng lọt vào ổ đỡ."
        why_wrong = "Phớt tiếp xúc (Lip seal) có ma sát sinh nhiệt ở tốc độ cao; Labyrinth Seal không tiếp xúc nên ma sát bằng 0, thích hợp với trục quay tốc độ cao."
        supp = "💡 **Ứng dụng:** Trục chính máy phay CNC, máy tiện tốc độ cao thường dùng Labyrinth Seal kết hợp bôi trơn khí nén."

    elif "1km" in t_lower:
        why_correct = "Đáp án B (10^6 lần) là chính xác. Ta có: 1 km = 1.000 m = 1.000 x 1.000 mm = 1.000.000 mm (10^6 mm). Vậy 1 km gấp 10^6 lần 1 mm."
        why_wrong = "10^3 là đổi từ mét sang milimét; 10^9 là đổi sang micromét."
        supp = "💡 **Bảng quy đổi cơ khí:** 1 m = 10^3 mm; 1 km = 10^3 m = 10^6 mm; 1 mm = 1000 μm."

    elif "thước" in t_lower or "panme" in t_lower:
        why_correct = f"Đáp án {ans_key} là chính xác. Quy tắc an toàn và chính xác khi đo: tuyệt đối không đo chi tiết khi trục máy đang quay, không dùng lực tì quá mạnh làm mẻ mỏ đo và phải đặt thước vuông góc với đường sinh chi tiết."
        why_wrong = "Các phương án mô tả thao tác đo sai góc nghiêng, đo khi phôi chưa vệ sinh sạch phoi bavia hoặc chưa hiệu chuẩn điểm 0."
        supp = "💡 **Quy tắc 5S trong đo lường:** Vệ sinh phôi -> Kiểm tra vạch 0 -> Đặt thước vuông góc -> Đọc kết quả trực diện -> Siết vít hãm."

    # 4. Pneumatics topics
    elif "boyle" in t_lower:
        why_correct = f"Đáp án {ans_key} là chính xác. Định luật Boyle-Mariotte (quá trình đẳng nhiệt T = const): Áp suất của một khối khí tỷ lệ nghịch với thể tích của nó. Công thức: P1 x V1 = P2 x V2 = Hằng số."
        why_wrong = "Định luật Charles là quá trình đẳng áp (V/T = const); Định luật Gay-Lussac là quá trình đẳng tích (P/T = const)."
        supp = "💡 **Ghi nhớ định luật Boyle:** Khi thể tích nén giảm một nửa thì áp suất khí tăng lên gấp đôi (P ~ 1/V)."

    elif "charles" in t_lower:
        why_correct = f"Đáp án {ans_key} là chính xác. Định luật Charles (quá trình đẳng áp P = const): Thể tích của một lượng khí tỷ lệ thuận với nhiệt độ tuyệt đối của nó: V1 / T1 = V2 / T2."
        why_wrong = "Định luật Boyle xét áp suất và thể tích; Định luật khí lý tưởng tổng quát: (P x V) / T = const."
        supp = "💡 **Lưu ý nhiệt độ:** Trong tính toán nhiệt động lực học, nhiệt độ T bắt buộc tính bằng độ Kelvin (K): T(K) = t(°C) + 273.15."

    elif "van" in t_lower or "khí nén" in t_lower or "xilanh" in t_lower:
        why_correct = f"Đáp án {ans_key} là phương án đúng theo quy chuẩn khí nén ISO 1219. Phương án này thể hiện chính xác chức năng, trạng thái làm việc và phương thức tác động của phần tử khí nén."
        why_wrong = "Các phương án khác nhầm lẫn giữa vị trí thường đóng (NC) và thường mở (NO), hoặc sai quy cách cửa xả và phương thức kích hoạt."
        supp = "💡 **Quy chuẩn cửa van ISO 1219:** Cửa 1 (P) = Cửa nguồn khí cấp; Cửa 2, 4 (A, B) = Cửa công tác ra xilanh; Cửa 3, 5 (R, S) = Cửa xả khí."

    else:
        why_correct = f"Đáp án {ans_key} là phương án chính xác theo tài liệu chuẩn hóa kỹ thuật White Star. Nội dung thể hiện đúng quy chuẩn và nguyên lý vận hành của thiết bị."
        why_wrong = "Các phương án còn lại chưa đầy đủ hoặc chứa thông tin sai lệch so với giáo trình kỹ thuật chính thức."
        supp = f"💡 **Kiến thức cốt lõi:** Luôn đối chiếu với bảng thông số kỹ thuật (Datasheet) và tuân thủ quy trình an toàn trong xưởng sản xuất White Star."

    return {
        "overview": overview,
        "correct_answer": ans_key,
        "correct_text": correct_opt_text,
        "why_correct": why_correct,
        "why_wrong": why_wrong,
        "supplementary_knowledge": supp
    }

# 1. Update questions_master.json
master_path = "data/questions_master.json"
with open(master_path, "r", encoding="utf-8") as f:
    master_qs = json.load(f)

for q in master_qs:
    q_type, tag = classify_question(q)
    expl = build_detailed_explanation(q, q_type, tag)
    q["question_type"] = q_type
    q["topic_tag"] = tag
    q["explanation"] = expl

with open(master_path, "w", encoding="utf-8") as f:
    json.dump(master_qs, f, ensure_ascii=False, indent=2)
print("Updated questions_master.json:", len(master_qs))

# 2. Update by_subject files
for sub_path in glob.glob("data/questions_by_subject/*.json"):
    with open(sub_path, "r", encoding="utf-8") as f:
        sub_qs = json.load(f)
    for q in sub_qs:
        q_type, tag = classify_question(q)
        expl = build_detailed_explanation(q, q_type, tag)
        q["question_type"] = q_type
        q["topic_tag"] = tag
        q["explanation"] = expl
    with open(sub_path, "w", encoding="utf-8") as f:
        json.dump(sub_qs, f, ensure_ascii=False, indent=2)
    print("Updated", sub_path, ":", len(sub_qs))

# 3. Update mock_exams.json
exams_path = "data/mock_exams.json"
if os.path.exists(exams_path):
    with open(exams_path, "r", encoding="utf-8") as f:
        exams = json.load(f)
    for ex in exams:
        for q in ex.get("questions", []):
            q_type, tag = classify_question(q)
            expl = build_detailed_explanation(q, q_type, tag)
            q["question_type"] = q_type
            q["topic_tag"] = tag
            q["explanation"] = expl
    with open(exams_path, "w", encoding="utf-8") as f:
        json.dump(exams, f, ensure_ascii=False, indent=2)
    print("Updated mock_exams.json successfully!")

print("All question datasets have been successfully enriched!")
