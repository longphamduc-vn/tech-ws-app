import json
import os

UPDATES = {
    'WS_EXAM_PLC_117': {
        'images': ['images/exams/exam_de_01_q37_1.png'],
        'options': [
            {'key': 'A', 'text': 'Chương trình ①: Tiếp điểm X0 điều khiển trực tiếp cuộn Timer T0 K30, ngõ ra Y40 kích hoạt bởi tiếp điểm T0 (không có mạch tự giữ)'},
            {'key': 'B', 'text': 'Chương trình ②: Mạch tự giữ qua tiếp điểm phụ M0 duy trì kích hoạt Timer T0 K30 và cấp điện cho đầu ra Y40 duy trì ON trong 3 giây'},
            {'key': 'C', 'text': 'Chương trình ③: Mạch sử dụng tiếp điểm thường đóng cắt cuộn dây Y40 ngay khi tín hiệu X0 ngắt'},
            {'key': 'D', 'text': 'Chương trình ④: Mạch ngắt xung và không duy trì kích hoạt cho cuộn Timer T0 sau khi nhả nút X0'}
        ],
        'explanation': {
            'overview': 'Câu hỏi thuộc chuyên đề **Lập trình & Điều khiển PLC**. Đáp án chính xác là **B** (Chương trình ②).',
            'correct_answer': 'B',
            'correct_text': 'Chương trình ②: Mạch tự giữ qua tiếp điểm phụ M0 duy trì kích hoạt Timer T0 K30 và cấp điện cho đầu ra Y40 duy trì ON trong 3 giây',
            'why_correct': 'Khi tín hiệu X0 chỉ ON rồi OFF trong 1 giây (nhấn nhả nút bấm), nếu không có mạch tự giữ, Timer T0 (được cài đặt K30 = 3 giây) chỉ đếm được 1 giây rồi bị reset về 0 ngay khi X0 ngắt, cuộn Y40 sẽ không bao giờ được bật. Ở chương trình ②, tiếp điểm phụ M0 tạo mạch tự giữ (self-holding), duy trì kích hoạt cuộn dây và cho phép Timer T0 hoàn thành chu kỳ đếm 3 giây tiếp theo để đóng tiếp điểm bật ngõ ra Y40.',
            'why_wrong': 'Phương án A không có mạch tự giữ nên khi X0 OFF sau 1s, timer bị reset; Phương án C và D cấu hình tiếp điểm không duy trì chu trình đếm thời gian trễ theo yêu cầu.',
            'supplementary_knowledge': '💡 **Mạch tự giữ (Self-holding circuit):** Trong lập trình PLC, khi tín hiệu kích hoạt là nút nhấn nhả (push button), bắt buộc phải mắc song song một tiếp điểm thường mở của cuộn dây phụ (ví dụ M0) với tiếp điểm đầu vào X để duy trì trạng thái hoạt động.'
        }
    },
    'WS_EXAM_PNE_105': {
        'images': ['images/exams/exam_de_01_q45_1.png'],
        'options': [
            {'key': 'A', 'text': 'Máy nén khí trục vít (Screw Compressor) - Cấp khí liên tục, độ rung và tiếng ồn nhỏ, kích thước nhỏ gọn'},
            {'key': 'B', 'text': 'Máy nén khí Piston (Reciprocating Compressor) - Cấp khí theo chu kỳ tịnh tiến, tạo xung áp suất lớn'},
            {'key': 'C', 'text': 'Máy nén khí cánh gạt (Rotary Vane Compressor) - Cấp khí qua rãnh cánh gạt trượt lệch tâm'},
            {'key': 'D', 'text': 'Máy nén khí ly tâm (Centrifugal Compressor) - Lưu lượng rất lớn nhưng kích thước cồng kềnh'}
        ],
        'explanation': {
            'overview': 'Câu hỏi thuộc chuyên đề **Nguồn khí nén & Máy nén khí**. Đáp án chính xác là **A** (Máy nén khí trục vít).',
            'correct_answer': 'A',
            'correct_text': 'Máy nén khí trục vít (Screw Compressor) - Cấp khí liên tục, độ rung và tiếng ồn nhỏ, kích thước nhỏ gọn',
            'why_correct': 'Máy nén khí trục vít sử dụng hai trục vít xoắn (rôto đực và cái) quay ăn khớp để nén khí. Quá trình hút và đẩy khí diễn ra liên tục, đều đặn nên không sinh ra xung áp suất dao động mạnh như máy piston, độ ồn và độ rung thấp, kết cấu gọn gàng, rất thích hợp làm nguồn cấp ổn định cho động cơ khí nén.',
            'why_wrong': 'Máy nén piston (B) có xung áp suất lớn do chuyển động tịnh tiến; Máy nén cánh gạt (C) và ly tâm (D) có đặc tính dòng chảy và dải áp suất không tối ưu bằng cho ứng dụng mô tơ khí nén công nghiệp nhỏ gọn.',
            'supplementary_knowledge': '💡 **Phân loại máy nén khí White Star:** Máy nén thể tích gồm máy piston (áp suất cao, xung lớn) và máy trục vít (lưu lượng ổn định, êm ái, hoạt động liên tục 100% chu kỳ tải).'
        }
    },
    'WS_EXAM_PNE_116': {
        'images': ['images/exams/exam_de_01_q56_1.png'],
        'options': [
            {'key': 'A', 'text': 'Van một chiều (Check Valve / Non-Return Valve) - Cho dòng khí qua một chiều và ngăn dòng chảy ngược'},
            {'key': 'B', 'text': 'Van tiết lưu (Throttle Valve) - Điều chỉnh lưu lượng và tốc độ dòng khí'},
            {'key': 'C', 'text': 'Van xả nhanh (Quick Exhaust Valve) - Xả nhanh khí nén ra ngoài khí quyển'},
            {'key': 'D', 'text': 'Van con thoi (Shuttle Valve / Van OR) - Điều khiển từ hai vị trí độc lập'}
        ],
        'explanation': {
            'overview': 'Câu hỏi thuộc chuyên đề **Van khí nén cơ bản**. Đáp án chính xác là **A** (Van một chiều).',
            'correct_answer': 'A',
            'correct_text': 'Van một chiều (Check Valve / Non-Return Valve) - Cho dòng khí qua một chiều và ngăn dòng chảy ngược',
            'why_correct': 'Van một chiều (Check valve) có cấu tạo gồm bi cầu hoặc nón đệm tì lên đế van nhờ lực ép lò xo nhẹ. Khí đi theo chiều thuận sẽ đẩy mở bi; khí đi theo chiều ngược lại sẽ ép chặt bi vào đế van, ngăn chặn hoàn toàn dòng chảy ngược.',
            'why_wrong': 'Van tiết lưu (B) dùng chỉnh tốc độ xilanh; Van xả nhanh (C) giúp tăng tốc xilanh; Van con thoi (D) thực hiện hàm logic OR giữa 2 ngõ vào.',
            'supplementary_knowledge': '💡 **Ký hiệu van một chiều:** Ký hiệu gồm một quả cầu tròn nằm trong hình nón tam giác, có hoặc không có lò xo phụ trợ.'
        }
    },
    'WS_EXAM_PLC_136': {
        'images': ['images/exams/exam_test_01_q36_1.png'],
        'options': [
            {'key': 'A', 'text': 'Sơ đồ ①: Lệnh PLS M0 - Tạo xung 1 scan khi X5 chuyển từ OFF sang ON (Xung sườn lên)'},
            {'key': 'B', 'text': 'Sơ đồ ②: Tiếp điểm sườn xuống (MEF / nghịch) - Tạo xung 1 scan khi X5 chuyển từ ON sang OFF (Sườn xuống - Khác biệt nhất)'},
            {'key': 'C', 'text': 'Sơ đồ ③: Tiếp điểm sườn lên LDP X5 - Tạo xung 1 scan khi X5 chuyển từ OFF sang ON'},
            {'key': 'D', 'text': 'Sơ đồ ④: Lệnh xung sườn lên MEP - Tạo xung 1 scan khi X5 chuyển từ OFF sang ON'}
        ],
        'explanation': {
            'overview': 'Câu hỏi thuộc chuyên đề **Lập trình PLC - Xử lý xung sườn tín hiệu**. Đáp án chính xác là **B** (Sơ đồ ②).',
            'correct_answer': 'B',
            'correct_text': 'Sơ đồ ②: Tiếp điểm sườn xuống (MEF / nghịch) - Tạo xung 1 scan khi X5 chuyển từ ON sang OFF (Sườn xuống - Khác biệt nhất)',
            'why_correct': 'Theo biểu đồ thời gian, đầu vào X5 bật ON rồi tắt OFF. Các sơ đồ ① (lệnh PLS), ③ (tiếp điểm LDP sườn lên), và ④ (lệnh MEP sườn lên) đều phát hiện thời điểm chuyển trạng thái từ OFF sang ON (Rising Edge) để kích hoạt đầu ra M0 trong 1 chu kỳ scan. Riêng sơ đồ ② là lệnh phát hiện sườn XUỐNG (Falling Edge - khi X5 chuyển từ ON sang OFF), do đó M0 xuất xung ở thời điểm hoàn toàn ngược lại so với 3 phương án còn lại.',
            'why_wrong': 'Các phương án A, C, D đều có chung bản chất logic là bắt xung sườn lên (Rising edge pulse: OFF -> ON) của tín hiệu X5 trong 1 chu kỳ quét, không tạo ra sự khác biệt.',
            'supplementary_knowledge': '💡 **Lệnh xung trong Mitsubishi FX/Q:** Lệnh PLS và tiếp điểm LDP kích hoạt xung 1 scan tại sườn lên (OFF -> ON). Lệnh PLF và tiếp điểm LDF kích hoạt xung 1 scan tại sườn xuống (ON -> OFF).'
        }
    },
    'WS_EXAM_ELE_139': {
        'options': [
            {'key': 'A', 'text': 'Phương án ①: Van xả áp / Van an toàn (Pressure Relief Valve) - Tự động xả khí khi vượt quá áp suất đặt'},
            {'key': 'B', 'text': 'Phương án ②: Van tuần tự (Sequence Valve) - Đóng mở đường khí khi đạt áp suất định mức'},
            {'key': 'C', 'text': 'Phương án ③: Van điều áp (Pressure Regulator) - Duy trì ổn định áp suất làm việc đầu ra'},
            {'key': 'D', 'text': 'Phương án ④: Van tiết lưu một chiều (One-way Flow Control Valve) - Điều chỉnh lưu lượng khí nén'}
        ],
        'explanation': {
            'overview': 'Câu hỏi thuộc chuyên đề **Van điều chỉnh áp suất khí nén**. Đáp án chính xác là **A** (Van xả áp / Van an toàn).',
            'correct_answer': 'A',
            'correct_text': 'Phương án ①: Van xả áp / Van an toàn (Pressure Relief Valve) - Tự động xả khí khi vượt quá áp suất đặt',
            'why_correct': 'Van xả áp (Relief Valve / Safety Valve) là thiết bị an toàn bảo vệ mạch khí nén. Khi áp suất trong đường ống vượt ngưỡng áp suất lò xo cài đặt, bi van bị đẩy lùi mở cửa xả khí nén ra ngoài khí quyển để đưa áp suất mạch trở lại mức an toàn.',
            'why_wrong': 'Van tuần tự (B) dùng để chuyển tiếp thứ tự hoạt động của các xilanh; Van điều áp (C) dùng để ổn định áp suất thứ cấp; Van tiết lưu (D) dùng để điều chỉnh vận tốc.',
            'supplementary_knowledge': '💡 **Các loại van áp suất:** Van xả áp (Relief/Safety valve), Van giảm áp/điều áp (Regulator), Van tuần tự (Sequence valve), Rơle áp suất (Pressure switch).'
        }
    },
    'WS_EXAM_ELE_146': {
        'options': [
            {'key': 'A', 'text': 'Phương án ①: Van tác động trực tiếp bằng cơ khí (Direct Mechanical Acting)'},
            {'key': 'B', 'text': 'Phương án ②: Van điều khiển thủ công bằng tay gạt / nút nhấn (Manual Acting)'},
            {'key': 'C', 'text': 'Phương án ③: Van tác động bằng cữ hành trình bánh xe (Roller Lever Acting)'},
            {'key': 'D', 'text': 'Phương án ④: Van tác động gián tiếp bằng tín hiệu khí nén / Solenoid Pilot (Pilot Operated - Khác biệt nhất)'}
        ],
        'explanation': {
            'overview': 'Câu hỏi thuộc chuyên đề **Phương thức tác động của van đảo chiều khí nén**. Đáp án chính xác là **D** (Van tác động gián tiếp Pilot).',
            'correct_answer': 'D',
            'correct_text': 'Phương án ④: Van tác động gián tiếp bằng tín hiệu khí nén / Solenoid Pilot (Pilot Operated - Khác biệt nhất)',
            'why_correct': 'Xét theo nguyên lý điều khiển: Các phương án ①, ②, ③ đều là loại tác động TRỰC TIẾP (Direct acting - dùng lực cơ bắp, cơ khí để di chuyển con trượt bên trong). Riêng phương án ④ là loại tác động GIÁN TIẾP (Pilot operated - dùng một luồng khí nén phụ trợ hoặc cuộn hút điện từ phụ trợ để mở van chính), do đó khác biệt nhất về phương thức vận hành.',
            'why_wrong': 'Các van cơ khí và thủ công (A, B, C) đều thuộc nhóm van tác động cơ học trực tiếp, không sử dụng đường khí điều khiển phụ trợ (pilot).',
            'supplementary_knowledge': '💡 **Van tác động gián tiếp (Pilot operated):** Được dùng khi cần điều khiển van lưu lượng lớn mà lực hút điện từ hoặc lực cơ khí trực tiếp không đủ mạnh để thắng lực cản của lò xo và áp suất khí.'
        }
    },
    'WS_EXAM_PNE_123': {
        'options': [
            {'key': 'A', 'text': 'Phương án ①: Van hai áp suất (Two-Pressure Valve - Thực hiện chức năng logic AND)'},
            {'key': 'B', 'text': 'Phương án ②: Van xả nhanh (Quick Exhaust Valve - Xả khí tức thời)'},
            {'key': 'C', 'text': 'Phương án ③: Van một chiều đơn (Single Non-Return Check Valve)'},
            {'key': 'D', 'text': 'Phương án ④: Van con thoi / Van kiểm tra đôi (Shuttle Valve / Double Check Valve - Thực hiện chức năng logic OR)'}
        ],
        'explanation': {
            'overview': 'Câu hỏi thuộc chuyên đề **Van logic & Điều khiển khí nén**. Đáp án chính xác là **D** (Van con thoi / Van kiểm tra đôi).',
            'correct_answer': 'D',
            'correct_text': 'Phương án ④: Van con thoi / Van kiểm tra đôi (Shuttle Valve / Double Check Valve - Thực hiện chức năng logic OR)',
            'why_correct': 'Van con thoi (Shuttle valve) có 2 cửa vào (X, Y) và 1 cửa ra (A). Nó còn được gọi là van kiểm tra đôi (Double check valve). Khi có khí ở cửa X hoặc cửa Y, quả con thoi sẽ đóng cửa còn lại và cho khí thông ra cửa A. Nhờ đó, xilanh có thể được điều khiển độc lập từ 2 hoặc nhiều vị trí khác nhau.',
            'why_wrong': 'Van hai áp suất (A) chỉ cho khí ra khi CẢ HAI cửa đều có áp (logic AND); Van xả nhanh (B) dùng tăng tốc xilanh; Van một chiều đơn (C) chỉ có 1 cửa vào và 1 cửa ra.',
            'supplementary_knowledge': '💡 **Phân biệt Van OR và Van AND:** Van con thoi (Shuttle valve) = Logic OR (X hoặc Y -> A). Van 2 áp suất (Dual pressure valve) = Logic AND (X và Y -> A).'
        }
    },
    'WS_EXAM_PNE_126': {
        'options': [
            {'key': 'A', 'text': 'Phương án ①: Xilanh không trục (Rodless Cylinder) - Tiết kiệm không gian, lực tiến/lùi cân bằng, dừng giữa tốt'},
            {'key': 'B', 'text': 'Phương án ②: Xilanh tác động đơn (Single-acting Cylinder)'},
            {'key': 'C', 'text': 'Phương án ③: Xilanh tác động kép tiêu chuẩn có cần (Standard Double-acting Cylinder)'},
            {'key': 'D', 'text': 'Phương án ④: Xilanh xoay cánh gạt (Vane Rotary Actuator)'}
        ],
        'explanation': {
            'overview': 'Câu hỏi thuộc chuyên đề **Cơ cấu chấp hành khí nén (Actuator)**. Đáp án chính xác là **A** (Xilanh không trục).',
            'correct_answer': 'A',
            'correct_text': 'Phương án ①: Xilanh không trục (Rodless Cylinder) - Tiết kiệm không gian, lực tiến/lùi cân bằng, dừng giữa tốt',
            'why_correct': 'Xilanh không trục (Rodless cylinder) truyền chuyển động thông qua khớp nối từ tính hoặc đai cơ khí ngoài thân xilanh mà không có cần piston nhô ra ngoài, giúp tiết kiệm 50% diện tích lắp đặt so với xilanh có cần cùng hành trình. Đồng thời, do diện tích hai mặt piston bằng nhau (không bị trừ diện tích tiết diện cần), lực đẩy tiến và lực lùi hoàn toàn bằng nhau, rất lý tưởng cho các ứng dụng dừng chính xác ở vị trí giữa hành trình.',
            'why_wrong': 'Xilanh tiêu chuẩn (C) có lực tiến lớn hơn lực lùi do có cần piston chiếm diện tích; Xilanh đơn (B) có hành trình ngắn và lực lùi phụ thuộc lò xo.',
            'supplementary_knowledge': '💡 **Xilanh không trục:** Gồm loại nối cơ khí (slot type) và loại ghép nối từ tính (magnetic coupling), phổ biến trong các tay gắp robot, bàn trượt tự động hóa.'
        }
    },
    'WS_EXAM_PNE_127': {
        'options': [
            {'key': 'A', 'text': 'Phương án ①: Cấu trúc van 3/2 thường đóng (NC) - Cổng cấp P và cửa ra A khớp đúng với ký hiệu'},
            {'key': 'B', 'text': 'Phương án ②: Cấu trúc van 3/2 thường mở (NO) - Trạng thái nghỉ xả A về R đúng ký hiệu'},
            {'key': 'C', 'text': 'Phương án ③: Cấu trúc đường cấp khí P và cổng xả R bị đấu ngược so với sơ đồ ký hiệu quy ước'},
            {'key': 'D', 'text': 'Phương án ④: Cấu trúc van 5/2 điều khiển khí nén hai đầu - Các cửa 1, 2, 3, 4, 5 bố trí đúng chuẩn'}
        ],
        'explanation': {
            'overview': 'Câu hỏi thuộc chuyên đề **Ký hiệu & Cấu tạo van điều khiển hướng**. Đáp án chính xác là **C** (Phương án ③).',
            'correct_answer': 'C',
            'correct_text': 'Phương án ③: Cấu trúc đường cấp khí P và cổng xả R bị đấu ngược so với sơ đồ ký hiệu quy ước',
            'why_correct': 'Theo quy chuẩn ký hiệu van khí nén (ISO 1219 / DIN), cổng cấp nguồn luôn là P (hoặc số 1), cổng làm việc là A, B (hoặc số 2, 4), cổng xả là R, S (hoặc số 3, 5). Ở phương án C, cấu trúc cơ khí bên trong van mở thông cổng xả ra cổng làm việc khi có tín hiệu, ngược hoàn toàn với ký hiệu van đang biểu diễn trạng thái cấp nguồn, do đó cấu trúc và ký hiệu không khớp nhau.',
            'why_wrong': 'Các phương án A, B, D đều biểu diễn chính xác mối quan hệ giữa vị trí con trượt cơ khí và trạng thái các ô chuyển mạch trên ký hiệu tiêu chuẩn.',
            'supplementary_knowledge': '💡 **Ký hiệu cổng van theo ISO 5599:** 1/P: Nguồn cấp khí nén; 2/A, 4/B: Cửa công tác; 3/R, 5/S: Cửa xả khí; 12/Z, 14/Y: Cửa tín hiệu điều khiển.'
        }
    },
    'WS_EXAM_PNE_129': {
        'options': [
            {'key': 'A', 'text': 'Sơ đồ ①: Mạch chỉ gồm van 3/2 và van một chiều trực tiếp không có bình tích áp'},
            {'key': 'B', 'text': 'Sơ đồ ②: Mạch chuẩn gồm Van tiết lưu một chiều kết hợp Bình tích áp (Air Reservoir) và Van đảo chiều 3/2'},
            {'key': 'C', 'text': 'Sơ đồ ③: Mạch van xả nhanh kết hợp van điều áp hai cổng'},
            {'key': 'D', 'text': 'Sơ đồ ④: Mạch van tuần tự kết nối van con thoi không có buồng trễ tích khí'}
        ],
        'explanation': {
            'overview': 'Câu hỏi thuộc chuyên đề **Mạch định thì khí nén (Pneumatic Time Delay Valve)**. Đáp án chính xác là **B** (Sơ đồ ②).',
            'correct_answer': 'B',
            'correct_text': 'Sơ đồ ②: Mạch chuẩn gồm Van tiết lưu một chiều kết hợp Bình tích áp (Air Reservoir) và Van đảo chiều 3/2',
            'why_correct': 'Van trễ thời gian khí nén (Time Delay Valve) là cụm van tích hợp gồm 3 phần: (1) Van tiết lưu một chiều điều chỉnh lưu lượng nạp, (2) Bình tích khí dung tích cố định (Air reservoir), và (3) Van điều khiển hướng 3/2 đóng vai trò công tắc đóng ngắt. Khi khí nạp từ từ qua van tiết lưu vào bình tích khí đến khi đạt áp suất ngưỡng chuyển mạch của van 3/2 thì van mới đóng mở, tạo ra khoảng thời gian trễ t xác định.',
            'why_wrong': 'Các sơ đồ A, C, D thiếu bình tích áp hoặc bố trí chiều van tiết lưu sai, không thể tạo được đặc tính trễ thời gian điều chỉnh được.',
            'supplementary_knowledge': '💡 **Công thức thời gian trễ khí nén:** Thời gian trễ t ≈ R × C, trong đó R là độ cản của van tiết lưu, C là thể tích bình chứa khí.'
        }
    },
    'WS_EXAM_ELE_173': {
        'options': [
            {'key': 'A', 'text': 'Ký hiệu ①: Van 3/2 thường đóng (NC - 3 cửa 2 vị trí)'},
            {'key': 'B', 'text': 'Ký hiệu ②: Van 3/2 thường mở (NO - 3 cửa 2 vị trí)'},
            {'key': 'C', 'text': 'Ký hiệu ③: Van 4/2 điều khiển cơ khí hồi vị lò xo'},
            {'key': 'D', 'text': 'Ký hiệu ④: Van 5/2 (5 cửa 2 vị trí) điều khiển bằng khí nén hai đầu / lò xo hồi vị'}
        ],
        'explanation': {
            'overview': 'Câu hỏi thuộc chuyên đề **Ký hiệu van đảo chiều khí nén**. Đáp án chính xác là **D** (Ký hiệu ④).',
            'correct_answer': 'D',
            'correct_text': 'Ký hiệu ④: Van 5/2 (5 cửa 2 vị trí) điều khiển bằng khí nén hai đầu / lò xo hồi vị',
            'why_correct': 'Cấu tạo cắt dọc của van trên hình có 5 cổng khí (cổng P cấp nguồn, 2 cổng làm việc A, B, và 2 cổng xả R, S) cùng 2 vị trí làm việc của con trượt trượt ngang. Đây là cấu trúc tiêu chuẩn của van phân phối 5 cửa 2 vị trí (5/2 Way Directional Valve). Ký hiệu tương ứng chuẩn ISO là ký hiệu có 2 ô vuông với 5 đầu cổng ở phương án ④.',
            'why_wrong': 'Các phương án A và B là van 3/2 (chỉ có 3 cổng); Phương án C là van 4/2 (chỉ có 1 cửa xả chung), không khớp với cấu tạo 5 cửa trên hình.',
            'supplementary_knowledge': '💡 **Ứng dụng van 5/2:** Thường được sử dụng để điều khiển trực tiếp xilanh tác động kép, cho phép đảo chiều tiến và lùi của piston.'
        }
    },
    'WS_EXAM_PNE_133': {
        'options': [
            {'key': 'A', 'text': 'Van an toàn (Safety / Relief Valve) - Tự động xả khí khi quá áp để bảo vệ hệ thống'},
            {'key': 'B', 'text': 'Van điều áp / giảm áp (Pressure Regulator / Pressure Reducing Valve) - Giảm áp suất nguồn và duy trì áp suất ổn định'},
            {'key': 'C', 'text': 'Van tuần tự (Sequence Valve) - Kích hoạt đóng mở nhánh mạch tiếp theo khi đạt áp suất định mức'},
            {'key': 'D', 'text': 'Van một chiều có tải lò xo (Check Valve with Spring)'}
        ],
        'explanation': {
            'overview': 'Câu hỏi thuộc chuyên đề **Van điều khiển áp suất khí nén**. Đáp án chính xác là **B** (Van điều áp / giảm áp).',
            'correct_answer': 'B',
            'correct_text': 'Van điều áp / giảm áp (Pressure Regulator / Pressure Reducing Valve) - Giảm áp suất nguồn và duy trì áp suất ổn định',
            'why_correct': 'Van điều áp (Pressure Regulator / Reducing Valve) nằm trong bộ lọc điều áp bôi trơn (FRL). Chức năng cốt lõi của nó là hạ áp suất sơ cấp từ nguồn (thường 0.7 - 0.9 MPa) xuống áp suất công tác yêu cầu (0.4 - 0.6 MPa) và duy trì không đổi giá trị áp suất này ở ngõ ra dù áp suất nguồn hoặc lưu lượng tiêu thụ có biến động.',
            'why_wrong': 'Van an toàn (A) chỉ xả áp khi vượt ngưỡng nguy hiểm; Van tuần tự (C) dùng để kích hoạt tín hiệu bước tiếp theo theo chu trình áp suất.',
            'supplementary_knowledge': '💡 **Cụm thiết bị FRL:** Filter (Bộ lọc tách nước) + Regulator (Van điều áp) + Lubricator (Bộ tra dầu bôi trơn).'
        }
    },
    'WS_EXAM_PNE_134': {
        'options': [
            {'key': 'A', 'text': 'Xilanh Tandem (Tandem Cylinder) - Nối tiếp nhiều piston đồng trục để tăng lực đẩy mà không tăng đường kính nòng'},
            {'key': 'B', 'text': 'Xilanh màng mỏng (Diaphragm Cylinder) - Hành trình rất ngắn, tiết diện lớn'},
            {'key': 'C', 'text': 'Xilanh không trục (Rodless Cylinder) - Tiết kiệm không gian dọc theo hành trình'},
            {'key': 'D', 'text': 'Xilanh tác động đơn (Single-acting Cylinder) - Lực đẩy nhỏ do cản trở bởi lò xo hoàn vị'}
        ],
        'explanation': {
            'overview': 'Câu hỏi thuộc chuyên đề **Cơ cấu chấp hành khí nén (Actuator)**. Đáp án chính xác là **A** (Xilanh Tandem).',
            'correct_answer': 'A',
            'correct_text': 'Xilanh Tandem (Tandem Cylinder) - Nối tiếp nhiều piston đồng trục để tăng lực đẩy mà không tăng đường kính nòng',
            'why_correct': 'Lực đẩy của xilanh được tính theo công thức F = P × A. Khi đường kính nòng xilanh bị giới hạn bởi không gian lắp đặt hẹp (không thể tăng A), người ta dùng Xilanh Tandem. Xilanh này gồm 2 hoặc nhiều piston bố trí nối tiếp trên cùng một cần piston. Khí nén được cấp đồng thời vào các buồng piston, tạo ra lực đẩy tổng hợp F = P × (A1 + A2) ≈ 2F, tăng gấp đôi lực mà đường kính ngoài không đổi.',
            'why_wrong': 'Xilanh màng (B) yêu cầu đường kính rất lớn; Xilanh không trục (C) chỉ tối ưu chiều dài; Xilanh đơn (D) lực đẩy bị giảm bởi lò xo.',
            'supplementary_knowledge': '💡 **Xilanh Tandem vs Xilanh đa vị trí:** Xilanh Tandem nối chung 1 cần để tăng lực. Xilanh đa vị trí nối các xilanh có hành trình khác nhau để dừng ở nhiều điểm.'
        }
    },
    'WS_EXAM_PNE_135': {
        'options': [
            {'key': 'A', 'text': 'Van tiết lưu điều chỉnh lưu lượng dòng khí (Flow Control Valve)'},
            {'key': 'B', 'text': 'Van một chiều có điều khiển / Khóa an toàn (Pilot Controlled Check Valve) - Kiểm soát an toàn và giữ vị trí tải'},
            {'key': 'C', 'text': 'Van điều áp sơ cấp (Primary Pressure Regulator)'},
            {'key': 'D', 'text': 'Van xả nhanh khí nén (Quick Exhaust Valve)'}
        ],
        'explanation': {
            'overview': 'Câu hỏi thuộc chuyên đề **Chức năng an toàn trong mạch khí nén**. Đáp án chính xác là **B** (Van một chiều có điều khiển).',
            'correct_answer': 'B',
            'correct_text': 'Van một chiều có điều khiển / Khóa an toàn (Pilot Controlled Check Valve) - Kiểm soát an toàn và giữ vị trí tải',
            'why_correct': 'Van một chiều có điều khiển (Pilot operated check valve) đóng vai trò là van khóa an toàn trong hệ thống khí nén. Khi không có tín hiệu điều khiển pilot, van chặn hoàn toàn dòng khí xả từ buồng xilanh, khóa cứng vị trí piston khi mất nguồn áp suất hoặc dừng khẩn cấp (chức năng kiểm soát an toàn và kiểm tra). Khi có tín hiệu pilot, bi van được nâng lên cho phép dòng khí đi qua tự do.',
            'why_wrong': 'Van tiết lưu (A) chỉ chỉnh tốc độ; Van điều áp (C) chỉnh áp; Van xả nhanh (D) chỉ hỗ trợ thoát khí nhanh.',
            'supplementary_knowledge': '💡 **Van khóa an toàn (Lock-up Valve):** Được bắt buộc lắp ở các cơ cấu nâng hạ thẳng đứng để chống rơi tải trọng khi đường ống khí bị vỡ hoặc nguồn khí bị sụt áp.'
        }
    },
    'WS_EXAM_PNE_136': {
        'options': [
            {'key': 'A', 'text': 'Phương án ①: Cấu trúc van 2/2 thường đóng (NC) khớp đúng với ký hiệu mở khi có lực tác động'},
            {'key': 'B', 'text': 'Phương án ②: Cấu trúc van 3/2 thường đóng (NC) với cổng cấp P bị chặn và cổng làm việc A xả về R'},
            {'key': 'C', 'text': 'Phương án ③: Cấu trúc bên trong mở thông cửa cấp P nhưng ký hiệu lại biểu diễn trạng thái đóng ngắt dòng khí'},
            {'key': 'D', 'text': 'Phương án ④: Cấu trúc van 5/2 hai vị trí chuyển đổi khớp đúng với ký hiệu logic điều khiển'}
        ],
        'explanation': {
            'overview': 'Câu hỏi thuộc chuyên đề **Cấu trúc cơ khí và Ký hiệu van khí nén**. Đáp án chính xác là **C** (Phương án ③).',
            'correct_answer': 'C',
            'correct_text': 'Phương án ③: Cấu trúc bên trong mở thông cửa cấp P nhưng ký hiệu lại biểu diễn trạng thái đóng ngắt dòng khí',
            'why_correct': 'Đối chiếu giữa bản vẽ mặt cắt cấu tạo cơ khí và ký hiệu theo tiêu chuẩn ISO 1219: Ở phương án C, lò xo và nón van ở trạng thái nghỉ cho phép dòng khí từ cổng cấp P đi thông lên cổng A (van thường mở NO), nhưng trên sơ đồ ký hiệu lại vẽ ô chuyển mạch ở trạng thái thường đóng (NC - cổng P bị chặn mũi tên), dẫn đến sự sai lệch không khớp nhau.',
            'why_wrong': 'Các phương án A, B, D đều có cấu trúc con trượt và cổng kết nối trùng khớp hoàn toàn với vị trí nghỉ ban đầu trên ký hiệu quy ước.',
            'supplementary_knowledge': '💡 **Quy tắc đọc van khí nén:** Luôn quan sát vị trí ô vuông gắn với lò xo hồi vị (vị trí ban đầu) để xác định van là thường đóng (NC) hay thường mở (NO).'
        }
    },
    'WS_EXAM_PNE_148': {
        'options': [
            {'key': 'A', 'text': 'Sơ đồ ①: Mạch On-Delay tiêu chuẩn (khi cấp tín hiệu thì trễ đóng qua bình tích khí)'},
            {'key': 'B', 'text': 'Sơ đồ ②: Mạch định thì không có van một chiều song song với van tiết lưu'},
            {'key': 'C', 'text': 'Sơ đồ ③: Mạch van xả nhanh xả tức thời không tạo được thời gian trễ duy trì'},
            {'key': 'D', 'text': 'Sơ đồ ④: Mạch Off-Delay chuẩn (khí xả qua khe tiết lưu mở 20% tạo độ trễ ngắt tín hiệu khi mất nguồn điều khiển)'}
        ],
        'explanation': {
            'overview': 'Câu hỏi thuộc chuyên đề **Mạch định thì khí nén Off-Delay**. Đáp án chính xác là **D** (Sơ đồ ④).',
            'correct_answer': 'D',
            'correct_text': 'Sơ đồ ④: Mạch Off-Delay chuẩn (khí xả qua khe tiết lưu mở 20% tạo độ trễ ngắt tín hiệu khi mất nguồn điều khiển)',
            'why_correct': 'Van rơle trễ ngắt (Off-Delay Timer): Khi cấp tín hiệu điều khiển, khí nén đi qua van một chiều nạp tức thời vào buồng điều khiển của van 3/2, van tác động bật ON ngay lập tức. Khi cắt tín hiệu điều khiển, van một chiều đóng lại, lượng khí trong buồng chỉ có thể thoát từ từ qua khe van tiết lưu (mở 20%), làm cho van duy trì trạng thái đóng/mở thêm một khoảng thời gian trễ trước khi ngắt hoàn toàn.',
            'why_wrong': 'Sơ đồ A là On-Delay (trễ khi cấp khí, xả nhanh khi ngắt); Sơ đồ B và C cấu hình van một chiều sai hướng hoặc thiếu buồng trễ.',
            'supplementary_knowledge': '💡 **Phân biệt On-Delay và Off-Delay:** On-delay trễ lúc bật ON (nạp qua tiết lưu, xả qua van một chiều). Off-delay trễ lúc ngắt OFF (nạp qua van một chiều tức thì, xả qua van tiết lưu).'
        }
    },
    'WS_EXAM_MCH_170': {
        'options': [
            {'key': 'A', 'text': 'Mạch ①: Mạch trễ đóng On-Delay (nạp áp qua tiết lưu vào bình chứa để kích hoạt sau khoảng trễ t)'},
            {'key': 'B', 'text': 'Mạch ②: Mạch trễ ngắt Off-Delay (tác động tức thời và duy trì sau khi ngắt)'},
            {'key': 'C', 'text': 'Mạch ③: Mạch tạo xung đơn chu kỳ (One-shot pulse timer)'},
            {'key': 'D', 'text': 'Mạch ④: Mạch tự dao động đa hài nhấp nháy liên tục'}
        ],
        'explanation': {
            'overview': 'Câu hỏi thuộc chuyên đề **Đặc tính thời gian của bộ hẹn giờ khí nén**. Đáp án chính xác là **A** (Mạch ①).',
            'correct_answer': 'A',
            'correct_text': 'Mạch ①: Mạch trễ đóng On-Delay (nạp áp qua tiết lưu vào bình chứa để kích hoạt sau khoảng trễ t)',
            'why_correct': 'Trên biểu đồ thời gian (Timing Chart), tín hiệu đầu vào Start chuyển sang mức ON, nhưng tín hiệu đầu ra Out phải sau khoảng thời gian t mới chuyển sang mức ON. Đây chính là biểu đồ đặc tuyến của rơle thời gian On-Delay (trễ tác động). Mạch điện và khí nén ① cấu hình đúng van tiết lưu nạp chậm vào bình tích để kích hoạt cuộn điều khiển sau khoảng trễ t.',
            'why_wrong': 'Mạch Off-Delay (B) cho ngõ ra ON ngay lập tức và chỉ trễ khi ngắt; Mạch tạo xung (C) có thời gian ON rất ngắn rồi tự tắt.',
            'supplementary_knowledge': '💡 **Điều chỉnh thời gian trễ:** Thời gian trễ t được điều chỉnh bằng vít chỉnh độ mở của van tiết lưu (mở càng nhỏ thì thời gian trễ càng dài).'
        }
    },
    'WS_EXAM_ELE_234': {
        'options': [
            {'key': 'A', 'text': 'Hình ①: Vòng bi cầu đỡ chặn / rãnh sâu một dãy (Deep Groove Ball Bearing)'},
            {'key': 'B', 'text': 'Hình ②: Vòng bi côn (Tapered Roller Bearing - Chịu tải hướng tâm và hướng trục lớn)'},
            {'key': 'C', 'text': 'Hình ③: Vòng bi đũa trụ (Cylindrical Roller Bearing - Chịu tải trọng hướng tâm lớn)'},
            {'key': 'D', 'text': 'Hình ④: Vòng bi cầu tự lựa (Self-aligning Ball Bearing - 2 dãy bi với vòng ngoài mặt cầu tự khử độ lệch tâm trục)'}
        ],
        'explanation': {
            'overview': 'Câu hỏi thuộc chuyên đề **Ổ lăn & Vòng bi công nghiệp (Bearing)**. Đáp án chính xác là **D** (Hình ④).',
            'correct_answer': 'D',
            'correct_text': 'Hình ④: Vòng bi cầu tự lựa (Self-aligning Ball Bearing - 2 dãy bi với vòng ngoài mặt cầu tự khử độ lệch tâm trục)',
            'why_correct': 'Vòng bi cầu tự lựa (Self-aligning ball bearing) có đặc điểm nhận dạng đặc trưng gồm 2 dãy bi cầu lăn trên một rãnh lăn chung ở vòng ngoài có biên dạng hình cầu liền khối. Tâm mặt cầu trùng với tâm của ổ lăn, cho phép cụm vòng trong và bi có thể tự xoay nghiêng một góc nhỏ quanh tâm để bù trừ độ võng trục hoặc độ lệch tâm giữa gối đỡ và trục quay mà không gây kẹt bi.',
            'why_wrong': 'Hình ① là vòng bi cầu rãnh sâu 1 dãy tiêu chuẩn; Hình ② là vòng bi côn với con lăn hình nón; Hình ③ là vòng bi đũa với con lăn hình trụ.',
            'supplementary_knowledge': '💡 **Mã ký hiệu vòng bi tự lựa:** Trong hệ thống ký hiệu tiêu chuẩn ISO/JIS, vòng bi cầu tự lựa bắt đầu bằng số 1xxx hoặc 2xxx (ví dụ: 1205, 2206).'
        }
    },
    'WS_EXAM_ELE_263': {
        'images': ['images/exams/exam_jan_2021_q20_1.png'],
        'options': [
            {'key': 'A', 'text': 'Ký hiệu ①: Diode chỉnh lưu thường (vạch cathode thẳng đứng)'},
            {'key': 'B', 'text': 'Ký hiệu ②: Diode Schottky (vạch cathode uốn cong đối xứng hình chữ S, tốc độ chuyển mạch cực nhanh)'},
            {'key': 'C', 'text': 'Ký hiệu ③: Diode Zener (vạch cathode có hai nét gạch bẻ góc hình chữ Z)'},
            {'key': 'D', 'text': 'Ký hiệu ④: Diode phát quang - LED (có hai mũi tên phát xạ ánh sáng ra ngoài)'}
        ],
        'explanation': {
            'overview': 'Câu hỏi thuộc chuyên đề **Linh kiện bán dẫn & Diode đặc biệt**. Đáp án chính xác là **B** (Ký hiệu ②).',
            'correct_answer': 'B',
            'correct_text': 'Ký hiệu ②: Diode Schottky (vạch cathode uốn cong đối xứng hình chữ S, tốc độ chuyển mạch cực nhanh)',
            'why_correct': 'Ký hiệu tiêu chuẩn quốc tế của Diode Schottky có vạch cực âm (Cathode) uốn cong hoặc bẻ góc hai đầu đối xứng tạo thành hình chữ S (viết tắt của Schottky). Diode Schottky được tạo thành từ mối tiếp giáp kim loại - bán dẫn, có điện áp rơi thuận rất thấp (0.15V - 0.45V) và thời gian phục hồi ngược cực ngắn, chuyên dùng cho các mạch nguồn xung cao tần.',
            'why_wrong': 'Ký hiệu A là diode P-N thông thường; Ký hiệu C là diode Zener ổn áp; Ký hiệu D là LED phát quang.',
            'supplementary_knowledge': '💡 **Ưu điểm diode Schottky:** Thời gian chuyển mạch nano giây (ns), tổn hao công suất thấp, nhưng điện áp đánh thủng ngược thấp hơn diode tiếp giáp P-N.'
        }
    },
    'WS_EXAM_PLC_199': {
        'options': [
            {'key': 'A', 'text': 'Chương trình ①: Điều khiển tuần tự dùng tiếp điểm thường mở không có khoá chéo liên động'},
            {'key': 'B', 'text': 'Chương trình ②: Sử dụng cuộn Timer T0 độc lập không tự ngắt chu kỳ lặp'},
            {'key': 'C', 'text': 'Chương trình ③: Mạch dùng lệnh SET không có điều kiện Reset gây tràn chu kỳ'},
            {'key': 'D', 'text': 'Chương trình ④: Mạch điều khiển Timer kết hợp tiếp điểm tự giữ và khoá liên động tạo đúng giản đồ xung thời gian'}
        ],
        'explanation': {
            'overview': 'Câu hỏi thuộc chuyên đề **Lập trình PLC - Mạch tuần tự theo thời gian**. Đáp án chính xác là **D** (Chương trình ④).',
            'correct_answer': 'D',
            'correct_text': 'Chương trình ④: Mạch điều khiển Timer kết hợp tiếp điểm tự giữ và khoá liên động tạo đúng giản đồ xung thời gian',
            'why_correct': 'Chương trình ④ thiết lập đúng trình tự kích hoạt và ngắt của các ngõ ra theo chu kỳ thời gian được mô tả trên Time Chart. Mạch sử dụng cuộn Timer phối hợp với các tiếp điểm tự giữ và tiếp điểm liên động phụ, đảm bảo khi kết thúc giai đoạn này thì giai đoạn kế tiếp được kích hoạt chính xác theo đúng giản đồ dạng sóng.',
            'why_wrong': 'Các chương trình A, B, C thiếu tiếp điểm tự ngắt hoặc không duy trì đúng thời gian trễ của từng bước trong chu trình.',
            'supplementary_knowledge': '💡 **Phương pháp giải bài toán Time Chart:** Phân tích từng mốc thời gian chuyển trạng thái (bước kích hoạt, bước duy trì, bước ngắt) và gán các cờ trạng thái bit nội bộ M tương ứng.'
        }
    }
}

def main():
    with open('data/questions_master.json', 'r', encoding='utf-8') as f:
        master = json.load(f)

    updated_count = 0
    for q in master:
        qid = q['id']
        if qid in UPDATES:
            u = UPDATES[qid]
            if 'images' in u:
                q['images'] = u['images']
            if 'options' in u:
                q['options'] = u['options']
            if 'explanation' in u:
                q['explanation'] = u['explanation']
            updated_count += 1

    print(f'Updated {updated_count} questions in memory.')

    empty_left = [q['id'] for q in master if any(not o.get('text', '').strip() for o in q.get('options', []))]
    print(f'Empty options left: {len(empty_left)}')
    if empty_left:
        print('Remaining empty:', empty_left)
        return

    with open('data/questions_master.json', 'w', encoding='utf-8') as f:
        json.dump(master, f, indent=2, ensure_ascii=False)

    with open('data/questions_master.js', 'w', encoding='utf-8') as f:
        f.write('// Master Question Bank for Tech WS App\n')
        f.write('// Auto-generated & audited\n')
        f.write('window.QUESTIONS_MASTER = ')
        json.dump(master, f, indent=2, ensure_ascii=False)
        f.write(';\n')

    subj_files = {
        'electric': 'data/questions_by_subject/electric.json',
        'plc': 'data/questions_by_subject/plc.json',
        'pneumatics': 'data/questions_by_subject/pneumatics.json',
        'machine': 'data/questions_by_subject/machine.json'
    }
    for scode, path in subj_files.items():
        sub_qs = [q for q in master if q.get('subject_code') == scode]
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(sub_qs, f, indent=2, ensure_ascii=False)

    if os.path.exists('data/mock_exams.json'):
        with open('data/mock_exams.json', 'r', encoding='utf-8') as f:
            mock_exams = json.load(f)

        for exam in mock_exams:
            for q in exam.get('questions', []):
                qid = q.get('id')
                if qid in UPDATES:
                    u = UPDATES[qid]
                    if 'images' in u: q['images'] = u['images']
                    if 'options' in u: q['options'] = u['options']
                    if 'explanation' in u: q['explanation'] = u['explanation']

        with open('data/mock_exams.json', 'w', encoding='utf-8') as f:
            json.dump(mock_exams, f, indent=2, ensure_ascii=False)

        with open('data/mock_exams.js', 'w', encoding='utf-8') as f:
            f.write('// Official Mock Exams for Tech WS App\n')
            f.write('window.MOCK_EXAMS_DATA = ')
            json.dump(mock_exams, f, indent=2, ensure_ascii=False)
            f.write(';\n')

    print('ALL 20 QUESTIONS AND SYSTEM FILES SUCCESSFULLY UPDATED AND SYNCED!')

if __name__ == '__main__':
    main()
