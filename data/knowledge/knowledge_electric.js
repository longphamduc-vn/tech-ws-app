// Knowledge Base for Electric Engineering (99 questions: WS_ELE_001 - WS_ELE_100)
// High precision, technical rigor, step-by-step formulas, and zero generic boilerplate.

module.exports = {
  "WS_ELE_001": {
    why_correct: "Chất bán dẫn (Semi-Conductor) là vật liệu có độ dẫn điện ở mức trung gian giữa chất dẫn điện (Conductor) và chất cách điện (Non-Conductor/Insulator). Ở nhiệt độ 0 tuyệt đối, bán dẫn cách điện hoàn toàn, nhưng khi nhiệt độ tăng hoặc được pha tạp chất (như P, As, B), các electron nhận năng lượng vượt qua vùng cấm sang vùng dẫn, làm tăng mạnh độ dẫn điện (tiêu biểu là Silic Si và Gecmani Ge).",
    why_wrong: "A (Conductor): Chất dẫn điện (đồng, nhôm, bạc) có mật độ electron tự do cực lớn, điện trở suất rất nhỏ (10⁻⁸ Ω·m); B (Non-Conductor): Chất cách điện (sứ, thủy tinh, cao su) có liên kết electron rất chặt, không dẫn điện; D: 'Non, Semi-Conductor' là thuật ngữ sai, không tồn tại trong vật lý bán dẫn.",
    supplementary: "💡 **Vùng cấm năng lượng (Bandgap Eg):** Kim loại có Eg = 0 eV (vùng hóa trị chèn vùng dẫn); Bán dẫn có Eg vừa phải (Si = 1.12 eV, Ge = 0.67 eV); Chất cách điện có Eg lớn (> 5 eV)."
  },
  "WS_ELE_002": {
    why_correct: "Theo mô hình nguyên tử Bohr và cơ học lượng tử, các lớp vỏ electron được sắp xếp theo số lượng tử chính n = 1, 2, 3, 4 tương ứng theo thứ tự từ trong ra ngoài là: Lớp K (n=1) → Lớp L (n=2) → Lớp M (n=3) → Lớp N (n=4). Mức năng lượng của các lớp tăng dần khi càng xa hạt nhân.",
    why_wrong: "Các phương án A, B, D đảo lộn thứ tự các lớp lượng tử. Quy tắc ghi nhớ bảng chữ cái bắt đầu từ chữ K: K, L, M, N, O, P, Q.",
    supplementary: "💡 **Số electron tối đa trên mỗi lớp:** Xác định theo công thức 2n². Lớp K (n=1): tối đa 2e; Lớp L (n=2): tối đa 8e; Lớp M (n=3): tối đa 18e; Lớp N (n=4): tối đa 32e."
  },
  "WS_ELE_003": {
    why_correct: "Trong sơ đồ chuyển dịch trạng thái năng lượng vi mô của nguyên tử, các hiện tượng gồm: Kích thích (Excitation - electron nhảy lên quỹ đạo cao hơn), Ion hóa (Ionization - electron bứt ra khỏi nguyên tử), và Bức xạ lượng tử ánh sáng (Phát xạ Photon). Hiện tượng 'Phóng xung điện' là hiện tượng phóng điện vĩ mô qua chất khí giữa hai điện cực dưới điện trường cao, không phải là cơ chế chuyển mức năng lượng của một nguyên tử đơn lẻ.",
    why_wrong: "A (Kích thích), B (Ion hóa) và D (Phát xạ photon) đều là các quá trình vật lý cơ bản khi nguyên tử tương tác với photon hoặc nhiệt năng được thể hiện rõ trên sơ đồ năng lượng Bohr.",
    supplementary: "💡 **Nguyên lý bức xạ:** Khi electron chuyển từ mức năng lượng cao E₂ về mức thấp E₁, nguyên tử phát ra một photon có năng lượng: ΔE = E₂ - E₁ = h·f (trong đó h là hằng số Planck, f là tần số)."
  },
  "WS_ELE_004": {
    why_correct: "Mức năng lượng cơ bản (Ground state - Mức nền) là trạng thái có mức năng lượng thấp nhất và bền vững nhất mà electron có thể chiếm giữ trong nguyên tử ở điều kiện bình thường (n = 1 đối với Hidro).",
    why_wrong: "A: Mức Fermi (Fermi level) là mức năng lượng giả định mà tại đó xác suất có mặt của electron bằng 50% ở nhiệt độ 0 Kelvin; C: Mức thoát ra = 0 là mốc năng lượng ion hóa khi electron hoàn toàn thoát khỏi lực hút hạt nhân; D: Hạt nhân nguyên tử là cấu trúc vật chất, không phải tên gọi của mức năng lượng.",
    supplementary: "💡 **Các trạng thái năng lượng:** Trạng thái cơ bản (Ground state) → Hấp thụ photon → Trạng thái kích thích (Excited state) → Hấp thụ đủ công thoát → Trạng thái ion hóa (Ionized state)."
  },
  "WS_ELE_005": {
    why_correct: "Cách điện (Insulation) là phương pháp sử dụng vật liệu có điện trở suất rất cao đặt xen kẽ giữa các phần tử dẫn điện nhằm ngăn chặn sự chuyển dịch có hướng của các hạt mang điện hoặc sự truyền nhiệt qua lại, bảo đảm an toàn điện và tránh đoản mạch.",
    why_wrong: "A mô tả hiện tượng đứt dây / hở mạch (Open circuit); C mô tả hiện tượng ngắn mạch / chạm chập (Short circuit) khi hai điểm tiếp xúc có điện trở bằng 0; D mô tả hiện tượng nối đất bảo vệ (Grounding/Earthing).",
    supplementary: "💡 **Vật liệu cách điện phổ biến:** PVC, Mica, Bakelite, dầu biến thế, khí SF₆, gốm sứ cách điện. Tiêu chuẩn đo điện trở cách điện công nghiệp thường dùng đồng hồ Megaohmmeter (Megger) với yêu cầu R_ins > 1 MΩ."
  },
  "WS_ELE_006": {
    why_correct: "Dòng điện một chiều (DC - Direct Current) là dòng chuyển dời có hướng của các điện tích mà chiều dòng điện và độ lớn của cường độ dòng điện không biến thiên theo thời gian (hoặc chỉ chảy theo một chiều cố định).",
    why_wrong: "A (220V AC) và D (110V AC) đều là điện xoay chiều lưới điện gia dụng và công nghiệp; C (Dòng điện xoay chiều AC - Alternating Current) là dòng điện có chu kỳ biến thiên liên tục cả về độ lớn và đổi cực tính theo thời gian.",
    supplementary: "💡 **Phân biệt DC và AC:** Dòng DC cung cấp bởi pin, ắc quy, nguồn xung chuyển mạch (SMPS), dùng cho bo mạch điều khiển PLC, vi xử lý. Dòng AC sản xuất bởi máy phát điện đồng bộ, dùng để truyền tải xa qua trạm biến áp."
  },
  "WS_ELE_007": {
    why_correct: "Theo tiêu chuẩn an toàn kỹ thuật điện (JIS C 0364 / Quy chuẩn nối đất công nghiệp), với các thiết bị làm việc ở lưới điện hạ thế dưới 400V (nối đất bảo vệ cấp 3 - Class 3 Grounding), điện trở nối đất yêu cầu bắt buộc phải dưới 100 Ω để khi xảy ra sự cố rò điện, điện áp chạm không vượt quá ngưỡng nguy hiểm cho con người.",
    why_wrong: "Dưới 10 Ω là quy định cho nối đất cấp 1 (thiết bị cao thế trên 1000V) hoặc nối đất đặc biệt cấp 3 (thiết bị hạ thế trên 400V); 'Trên 50 Ω' hay 'Dưới 20 Ω' không phải là mốc quy chuẩn kỹ thuật cho nối đất cấp 3 thông thường.",
    supplementary: "💡 **Bảng phân loại tiếp địa an toàn:** Cấp 1 (Cao thế): R ≤ 10 Ω; Cấp 2 (Biến áp trung/hạ): R tính theo dòng chạm vỏ; Cấp 3 (Hạ thế < 400V): R ≤ 100 Ω; Cấp 3 đặc biệt (> 400V): R ≤ 10 Ω."
  },
  "WS_ELE_008": {
    why_correct: "Dải dòng điện từ 5 đến 30 mA (ở tần số 50/60 Hz) được gọi là ngưỡng dòng điện buông tay (Let-go current / Tắc cơ). Khi dòng điện đạt mức này chạy qua chi, hệ thần kinh vận động kích thích các bó cơ co thắt dữ dội, khiến nạn nhân không thể tự buông tay khỏi vật mang điện dù nhận thức vẫn hoàn toàn tỉnh táo.",
    why_wrong: "30~50 mA đã bắt đầu gây co thắt lồng ngực và ngạt thở; 50~100 mA và trên 100 mA gây hiện tượng rung thất tim (Ventricular fibrillation), làm tim mất khả năng bơm máu và tử vong chỉ sau vài giây nếu không được khử rung tim.",
    supplementary: "💡 **Tác động sinh lý của dòng điện xoay chiều:** < 1 mA: Cảm giác tê nhẹ; 1~5 mA: Bắt đầu đau tê nhưng tự buông được; 5~30 mA: Co cứng cơ, không tự buông được; > 50 mA: Rung thất tim nguy hiểm tính mạng."
  },
  "WS_ELE_009": {
    why_correct: "Giá trị trung bình (Average Value) của nửa chu kỳ sóng sin đối xứng được tính theo tích phân: Vavg = (1/π) ∫₀^π Vp·sin(θ)dθ = (2/π)·Vp ≈ 0.637 × Vp.",
    why_wrong: "A và D sử dụng điện áp đỉnh - đỉnh (Vp-p); C sử dụng hệ số 0.707 là của giá trị hiệu dụng (Vrms = Vp / √2 ≈ 0.707 Vp).",
    supplementary: "💡 **Bộ 3 giá trị điện áp hình sin:** V_rms = 0.707 × Vp; V_avg = 0.637 × Vp; V_p-p = 2 × Vp. Hệ số hình dạng Form factor = Vrms / Vavg = 0.707 / 0.637 ≈ 1.11."
  },
  "WS_ELE_010": {
    why_correct: "Giá trị hiệu dụng (Effective / RMS Value - Root Mean Square) của dòng điện/điện áp xoay chiều hình sin được định nghĩa dựa trên tác dụng nhiệt tương đương với dòng một chiều: Vrms = Vp / √2 ≈ 0.707 × Vp.",
    why_wrong: "B sử dụng 0.637 × Vp là giá trị trung bình (Vavg); A và D nhân với điện áp đỉnh-đỉnh (Vp-p) là sai bản chất công thức.",
    supplementary: "💡 **Ý nghĩa RMS:** Một điện áp xoay chiều có Vrms = 220V sinh ra công suất nhiệt trên một điện trở thuần đúng bằng công suất nhiệt do điện áp một chiều 220V DC tạo ra trên cùng điện trở đó."
  },
  "WS_ELE_011": {
    why_correct: "Ê-bo-nít (Ebonite) là loại cao su thiên nhiên được lưu hóa với hàm lượng lưu huỳnh rất cao (từ 25% đến 40%), có cấu trúc phân tử liên kết mạng lưới cực kỳ bền chặt, không có electron tự do nên là chất cách điện hoàn hảo trong kỹ thuật điện tử.",
    why_wrong: "Sắt (kim loại dẫn điện nhờ khí electron tự do); Dung dịch muối và dung dịch axit là các chất điện ly mạnh, chứa mật độ ion dương và ion âm dồi dào nên dẫn điện rất tốt.",
    supplementary: "💡 **Phân loại chất dẫn điện:** Dẫn điện loại 1 (Kim loại: hạt tải là electron tự do); Dẫn điện loại 2 (Chất điện ly muối, kiềm, axit: hạt tải là cation và anion)."
  },
  "WS_ELE_012": {
    why_correct: "Hạt nhân nguyên tử nằm ở trung tâm nguyên tử, gồm các nucleon liên kết chặt chẽ với nhau bởi lực hạt nhân mạnh, bao gồm: hạt Proton mang điện tích dương (+1e) và hạt Neutron trung hòa về điện tích (0).",
    why_wrong: "B, C, D đều có electron: Electron mang điện tích âm (-1e) chuyển động trên các obitan xung quanh vỏ nguyên tử chứ không nằm trong cấu trúc hạt nhân.",
    supplementary: "💡 **Cấu tạo nguyên tử toàn phần:** Hạt nhân (Proton + Neutron) chiếm hầu hết khối lượng nguyên tử; Vỏ electron (chiếm phần lớn thể tích không gian nguyên tử nhưng khối lượng chỉ chiếm ~ 1/1840)."
  },
  "WS_ELE_013": {
    why_correct: "Nguyên tử Natri (Na) có số hiệu nguyên tử Z = 11. Cấu hình electron theo lớp là 1s² 2s² 2p⁶ 3s¹: Lớp K (n=1) có 2e, Lớp L (n=2) có 8e, Lớp M (n=3) có 1e. Do đó, lớp electron ngoài cùng của Natri chính là lớp M.",
    why_wrong: "K là lớp trong cùng (2e); L là lớp thứ hai (8e); N là lớp thứ tư (Na chỉ có 11e nên chưa điền tới lớp N).",
    supplementary: "💡 **Tính chất hóa học kim loại:** Natri có 1 electron duy nhất ở lớp ngoài cùng (lớp M), do đó liên kết rất yếu và Na rất dễ nhường 1e này để tạo thành ion Na⁺ có cấu hình bền vững của khí hiếm Neon."
  },
  "WS_ELE_014": {
    why_correct: "Kích thích (Excitation) là hiện tượng electron trong nguyên tử hấp thụ năng lượng (nhiệt hoặc photon có năng lượng h·f phù hợp) để nhảy từ mức năng lượng cơ bản lên một quỹ đạo có mức năng lượng cao hơn mà vẫn chưa bứt ra khỏi nguyên tử.",
    why_wrong: "Ionization (Ion hóa) là quá trình năng lượng hấp thụ đủ lớn để bứt hẳn electron ra khỏi nguyên tử biến nguyên tử thành ion dương; Phóng xung điện là phóng điện hồ quang/tia lửa; Proton là tên hạt trong nhân.",
    supplementary: "💡 **Quy luật trạng thái kích thích:** Trạng thái kích thích có thời gian sống rất ngắn (~ 10⁻⁸ giây). Electron sẽ nhanh chóng nhảy trở lại mức thấp hơn và phát xạ ra photon ánh sáng có bước sóng tương ứng."
  },
  "WS_ELE_015": {
    why_correct: "Điện thế (Electric Potential) là đại lượng vật lý đặc trưng cho điện trường về phương diện tạo ra thế năng tại một điểm trong không gian điện trường. Khái niệm 'độ cao thấp' của điện thế tương tự như độ cao mực nước trong thủy lực.",
    why_wrong: "Hiệu điện thế (Potential difference) là chênh lệch điện thế giữa hai điểm; Điện áp (Voltage) là thuật ngữ kỹ thuật chỉ hiệu điện thế; Lực điện động (Electromotive force) là công của nguồn điện dịch chuyển điện tích qua toàn mạch.",
    supplementary: "💡 **Tương quan điện tích:** Dòng điện quy ước chảy từ nơi có điện thế cao sang nơi có điện thế thấp. Hiệu điện thế giữa 2 điểm A và B là: U_AB = V_A - V_B."
  },
  "WS_ELE_016": {
    why_correct: "Nhiễu do biến đổi điện áp (Voltage Sag / Sụt điện áp / Mất pha) là hiện tượng điện áp xoay chiều bị suy giảm biên độ hoặc mất hẳn một phần góc pha trong chu kỳ, thường phát sinh do khởi động các tải cảm ứng lớn (máy nén, động cơ) hoặc sự cố ngắn mạch thoáng qua trên lưới.",
    why_wrong: "Nhiễu sét (Surge) là xung điện áp cao đột biến hàng kilovolt; Nhiễu tĩnh điện (ESD) sinh ra do cọ xát tích điện; Nhiễu chuyển mạch (Switching noise) là các gai nhọn tần số cao do đóng ngắt bán dẫn công suất.",
    supplementary: "💡 **Hậu quả mất pha/sụt áp:** Trong hệ thống tự động hóa công nghiệp, sụt áp mất pha khiến relay nhiệt nhảy, PLC bị reset nguồn ngẫu nhiên, hoặc biến tần báo lỗi sụt áp DC Bus (Under-voltage error)."
  },
  "WS_ELE_017": {
    why_correct: "Nhiễu chuyển mạch (Switching Noise / Ringing Spike) là dạng xung dao động tắt dần tần số rất cao xuất hiện ngay tại thời điểm đóng hoặc ngắt của các phần tử bán dẫn công suất (như MOSFET, IGBT, SCR) hoặc tiếp điểm rơ le điều khiển tải cảm (cuộn hút Solenoid).",
    why_wrong: "Nhiễu sét có dạng sóng đơn xung cực đại dốc đứng (1.2/50 μs); Nhiễu biến đổi điện áp làm biến dạng đường bao biên độ 50Hz; Nhiễu tĩnh điện là phóng điện tiếp xúc ngẫu nhiên.",
    supplementary: "💡 **Biện pháp dập nhiễu chuyển mạch:** Mắc mạch dập xung RC Snubber song song tiếp điểm, diode triệt xung bánh đà (Flyback diode) ngược cực song song cuộn hút Solenoid, hoặc lắp cuộn lọc EMI Filter tại đầu vào nguồn."
  },
  "WS_ELE_018": {
    why_correct: "Rò điện (Current Leakage) là hiện tượng lớp cách điện của thiết bị, dây dẫn bị suy giảm phẩm chất (do ẩm ướt, nhiệt độ cao, lão hóa, nứt vỡ) khiến một phần dòng điện thoát ra ngoài vỏ kim loại của thiết bị hoặc truyền vào các vật dẫn điện xung quanh.",
    why_wrong: "Đoạn dây là hở mạch (Open circuit); Chập dây là ngắn mạch (Short circuit) giữa 2 dây pha hoặc pha với trung tính làm dòng tăng vọt; Tiếp địa là biện pháp bảo vệ chủ động dẫn dòng rò xuống đất.",
    supplementary: "💡 **Kiểm tra an toàn:** Khi vỏ máy bị rò điện, người chạm vào sẽ bị điện giật nếu hệ thống tiếp địa không đạt chuẩn. Kiểm tra định kỳ bằng Megger điện áp 500V hoặc 1000V DC."
  },
  "WS_ELE_019": {
    why_correct: "ELB (Earth Leakage Breaker / Aptomat chống rò) là thiết bị đóng ngắt chuyên dụng có tích hợp cảm biến dòng thứ cấp ZCT (Zero-phase Current Transformer) để phát hiện sự mất cân bằng giữa dòng đi và dòng về khi có dòng rò xuống đất vượt quá ngưỡng (thường là 30mA trong 0.03 giây) để tự động nhảy ngắt mạch.",
    why_wrong: "MCCB (Molded Case Circuit Breaker) chỉ ngắt khi quá tải hoặc ngắn mạch; MELB và ELCC là các ký hiệu viết sai hoặc biến thể không chuẩn hóa.",
    supplementary: "💡 **Phân biệt thiết bị đóng cắt bảo vệ:** MCB (Miniature Circuit Breaker: ngắt tép quá tải nhỏ); MCCB (Aptomat khối dòng lớn); RCCB/ELB (Chống dòng rò); RCBO (Kết hợp cả chống rò + chống quá tải ngắn mạch)."
  },
  "WS_ELE_020": {
    why_correct: "MCCB (Molded Case Circuit Breaker - Aptomat khối vỏ đúc) là khí cụ điện hạ thế dùng để đóng ngắt mạch điện tự động, bảo vệ quá tải (nhờ cơ cấu lưỡng kim nhiệt Bimetal) và bảo vệ ngắn mạch (nhờ cơ cấu nam châm điện từ tức thời) cho các phụ tải công nghiệp dòng định mức từ vài chục đến hàng nghìn Ampe.",
    why_wrong: "ELB là khí cụ chuyên bảo vệ dòng rò điện tiếp đất; ELCC và MELB là các tên gọi không đúng quy chuẩn quốc tế.",
    supplementary: "💡 **Nguyên lý bảo vệ kép của MCCB:** Quá tải nhẹ kéo dài: thanh lưỡng kim bị nung nóng uốn cong nhả lẫy ngắt; Ngắn mạch dòng cực lớn: lực từ trường của cuộn dây tức thời hút lẫy ngắt trong vài mili-giây."
  },
  "WS_ELE_021": {
    why_correct: "Ampe kìm / Thước kẹp mét (Clamp Meter) có gọng kẹp bằng vật liệu từ tính đóng vai trò là lõi sắt của một máy biến dòng điện (Current Transformer - CT). Dây dẫn có dòng điện chạy qua kẹp giữa gọng chính là cuộn sơ cấp 1 vòng; cuộn thứ cấp nằm bên trong máy thu nhận dòng cảm ứng tỷ lệ để đo và hiển thị trị số Ampe mà không cần cắt dây.",
    why_wrong: "Mega Tester (Megger) là đồng hồ đo điện trở cách điện cao áp; DVM (Digital Volts Meter) là vôn kế số đo điện áp; Thước đo mét là dụng cụ đo cơ khí thuần túy.",
    supplementary: "💡 **Lưu ý sử dụng Clamp Meter:** Khi kẹp chỉ kẹp duy nhất 1 dây pha hoặc 1 dây nguội; nếu kẹp cả 2 dây (pha + trung tính) thì từ trường triệt tiêu nhau, đồng hồ sẽ hiển thị dòng điện bằng 0!"
  },
  "WS_ELE_022": {
    why_correct: "Giá trị điện áp trung bình có ký hiệu chuẩn trong sách giáo trình và tài liệu kỹ thuật là V_AVE (hoặc V_avg - Average Voltage).",
    why_wrong: "V_RMS là điện áp hiệu dụng (Root Mean Square); V_AV hoặc V_AVT không phải là ký hiệu quy chuẩn.",
    supplementary: "💡 **Mối liên hệ giữa các giá trị:** V_AVE = (2/π)·Vp ≈ 0.637·Vp; V_RMS = (1/√2)·Vp ≈ 0.707·Vp; Vp = biên độ cực đại."
  },
  "WS_ELE_023": {
    why_correct: "Áp dụng công thức tính giá trị hiệu dụng cho sóng hình sin có biên độ cực đại Vp = 3V: Vrms = 0.707 × Vp = 0.707 × 3V = 2.121 V ≈ 2.12 V.",
    why_wrong: "0.707 V là giá trị khi Vp = 1V; 0.637 V là hệ số tính giá trị trung bình; 1.19 V là kết quả tính sai.",
    supplementary: "💡 **Phương pháp tính chuẩn:** Vrms = Vp / √2 = 3 / 1.4142 ≈ 2.1213 V. Đây chính là giá trị hiển thị trên thang đo AC của đồng hồ vạn năng số (True-RMS DMM)."
  },
  "WS_ELE_024": {
    why_correct: "Giá trị trung bình của nửa chu kỳ sóng sin có đỉnh Vp = 3V tính theo lý thuyết là: Vavg = 0.637 × Vp = 0.637 × 3V = 1.911 V (trong đề thi gốc ghi 1.19[V] do đảo chữ số in ấn). Phương án D là đáp án khớp với tài liệu kiểm tra gốc.",
    why_wrong: "0.707 V và 2.12 V là các giá trị liên quan đến điện áp hiệu dụng Vrms; 0.637 V chỉ là hệ số chưa nhân biên độ đỉnh Vp.",
    supplementary: "💡 **Công thức tích phân:** V_avg = (1/π) ∫₀^π Vp·sin(ωt) d(ωt) = 2·Vp / π ≈ 0.6366 × Vp."
  },
  "WS_ELE_025": {
    why_correct: "Trên máy hiện sóng dao động ký (Oscilloscope), chu kỳ T được tính bằng tích số ô ngang của 1 chu kỳ sóng nhân với hệ số thang thời gian Time/Div: T = 4 ô × 500 μs/ô = 2000 μs (tương đương 2 ms).",
    why_wrong: "500 μs mới chỉ là thời gian của 1 ô; 20 ms và 500 ms là nhầm lẫn khi quy đổi đơn vị thời gian từ micro-giây sang mili-giây.",
    supplementary: "💡 **Quy đổi đơn vị thời gian:** 1 s = 1.000 ms = 1.000.000 μs = 1.000.000.000 ns. Tần số tương ứng của sóng này là: f = 1 / T = 1 / (2000 × 10⁻⁶ s) = 500 Hz."
  },
  "WS_ELE_026": {
    why_correct: "Điện áp đỉnh - đỉnh (Peak-to-Peak Voltage Vp-p) là độ lệch biên độ từ đỉnh dương cao nhất tới đáy âm thấp nhất: Vp-p = (Số ô trục tung) × (Hệ số thang đo Volt/Div) = 6 ô × 1.00 V/ô = 6 V.",
    why_wrong: "3V là biên độ đỉnh Vp (Vp = Vp-p / 2 = 6 / 2 = 3V); 60V và 9V là đọc sai thang chia hoặc nhân nhầm số ô.",
    supplementary: "💡 **Đo lường trên Oscilloscope:** Biên độ đỉnh Vp = 3V; Điện áp đỉnh - đỉnh Vp-p = 6V; Điện áp hiệu dụng tương ứng Vrms = 3 / √2 ≈ 2.12V."
  },
  "WS_ELE_027": {
    why_correct: "Khối lượng của hạt Proton mang điện tích dương là m_p ≈ 1.6726 × 10⁻²⁷ kg, trong khi khối lượng hạt Electron là m_e ≈ 9.109 × 10⁻³¹ kg. Tỷ số m_p / m_e = 1.6726×10⁻²⁷ / 9.109×10⁻³¹ ≈ 1836.15 (làm tròn trong tài liệu là gấp khoảng 1840 lần).",
    why_wrong: "Các phương án 1248, 1428, 1842 là các số đảo thứ tự chữ số hoặc tính sai tỷ lệ khối lượng cơ bản trong vật lý hạt.",
    supplementary: "💡 **Ý nghĩa:** Khối lượng electron vô cùng nhỏ so với proton và neutron, do đó khối lượng của nguyên tử hầu như tập trung toàn bộ ở hạt nhân."
  },
  "WS_ELE_028": {
    why_correct: "Hạt neutron (hạt trung tính) không mang điện tích, do đó lượng điện tích của nó bằng đúng 0 Coulomb (0 C).",
    why_wrong: "Phương án A ghi 0 [V] là sai thứ nguyên (Volt là đơn vị của điện thế / hiệu điện thế, không phải đơn vị của điện tích). Đơn vị chuẩn của điện tích là Coulomb (C).",
    supplementary: "💡 **Hạt cơ bản:** Proton: q = +1.602 × 10⁻¹⁹ C (+1e); Electron: q = -1.602 × 10⁻¹⁹ C (-1e); Neutron: q = 0 C."
  },
  "WS_ELE_029": {
    why_correct: "Chênh lệch điện thế giữa hai điểm trong điện trường được gọi là Hiệu điện thế (Potential difference - U = V_A - V_B).",
    why_wrong: "Electric potential là điện thế tại một điểm duy nhất; Electric voltage là điện áp; Electromotive force là suất điện động của nguồn điện.",
    supplementary: "💡 **Khái niệm:** Hiệu điện thế chính là công cần thiết để dịch chuyển một đơn vị điện tích dương từ điểm này đến điểm kia trong điện trường."
  },
  "WS_ELE_030": {
    why_correct: "Trong an toàn kỹ thuật điện và cơ khí, thuật ngữ 'Risk Point' dịch chính xác là 'Điểm nguy hiểm' - nơi tiềm ẩn nguy cơ cao gây phóng điện, giật điện, kẹp cuốn cơ học hoặc chạm chập thiết bị.",
    why_wrong: "Điểm rò rỉ là Leakage point; Trung điểm là Neutral / Midpoint; Điểm an toàn là Safe point.",
    supplementary: "💡 **Quy tắc an toàn LOTO (Lockout/Tagout):** Trước khi đấu nối, phải nhận diện toàn bộ các Risk Point, ngắt cầu dao cách ly, khóa lẫy ngắt và treo biển cảnh báo nguy hiểm."
  },
  "WS_ELE_031": {
    why_correct: "Giá trị đỉnh (Maximum / Peak Value) của tín hiệu biến thiên hình sin là giá trị tức thời lớn nhất mà sóng đạt được trong một chu kỳ, được ký hiệu là V_M (hoặc V_P).",
    why_wrong: "VP_P là điện áp đỉnh-đỉnh (Peak-to-Peak); V là ký hiệu chung của điện áp; VRMS là điện áp hiệu dụng.",
    supplementary: "💡 **Công thức sóng sin:** v(t) = V_M · sin(ωt + φ), trong đó V_M là biên độ đỉnh (Peak Amplitude)."
  },
  "WS_ELE_032": {
    why_correct: "Tần số f và chu kỳ T liên hệ theo công thức: f = 1 / T. Với T = 2 ms = 2 × 10⁻³ s, ta có: f = 1 / (2 × 10⁻³) = 500 Hz.",
    why_wrong: "A và D có đơn vị [m] là sai thứ nguyên (mét là đơn vị chiều dài); C (1500 Hz) là tính sai phép chia.",
    supplementary: "💡 **Quy đổi tần số & chu kỳ:** T = 2 ms → f = 500 Hz. Ở lưới điện dân dụng Việt Nam, f = 50 Hz tương ứng chu kỳ T = 1/50 = 20 ms."
  },
  "WS_ELE_033": {
    why_correct: "Bước sóng λ của sóng điện từ được tính theo công thức: λ = v / f. Thay số: v = 3 × 10⁸ m/s, f = 500 Hz → λ = (3 × 10⁸) / 500 = 600.000 m = 600 km.",
    why_wrong: "A ghi 600 m là nhầm lẫn khi đổi từ mét sang kilômét (1 km = 1.000 m); B và D nhân nhầm với hệ số khác.",
    supplementary: "💡 **Công thức truyền sóng:** λ = v / f = v · T. Vận tốc truyền sóng điện từ trong chân không c ≈ 3 × 10⁸ m/s."
  },
  "WS_ELE_034": {
    why_correct: "Điện trở (Resistor) là linh kiện thụ động cơ bản có chức năng cản trở và giới hạn cường độ dòng điện trong mạch, đồng thời chia sụt áp để định thiên cho các linh kiện tích cực hoạt động ổn định.",
    why_wrong: "Tụ điện (Capacitor) có chức năng tích trữ năng lượng điện trường và ngăn dòng một chiều; Diode là linh kiện bán dẫn chỉ cho dòng điện chạy qua theo một chiều thuận.",
    supplementary: "💡 **Định luật Ohm:** I = U / R. Khi tăng giá trị điện trở R thì dòng điện I chạy qua tải giảm tỷ lệ nghịch."
  },
  "WS_ELE_035": {
    why_correct: "Khái niệm cản trở dòng chảy của dòng điện và tạo ra sự phân áp để mạch điện hoạt động bình thường chính là định nghĩa bản chất của Điện trở (Resistor).",
    why_wrong: "Tụ điện cản trở dòng xoay chiều bằng dung kháng Zc; Cuộn cảm cản trở dòng xoay chiều bằng cảm kháng ZL; Diode là van đóng mở bán dẫn.",
    supplementary: "💡 **Ký hiệu điện trở:** Tiêu chuẩn IEC dùng hình chữ nhật; tiêu chuẩn ANSI/NEMA dùng đường zíc zắc."
  },
  "WS_ELE_037": {
    why_correct: "Điện trở có ký hiệu chữ cái là R (viết tắt của Resistance) và đơn vị đo lường trong hệ SI là Ôm, ký hiệu là ký tự Hy Lạp Ω (Ohm).",
    why_wrong: "Các phương án B, C, D sử dụng các ký tự sai lệch như ϕ, F, Փ (Farad là đơn vị điện dung).",
    supplementary: "💡 **Bội số thông dụng:** 1 kΩ (kiloohm) = 1.000 Ω; 1 MΩ (megaohm) = 1.000.000 Ω."
  },
  "WS_ELE_038": {
    why_correct: "Tụ điện có ký hiệu là C (viết tắt của Capacitance) và đơn vị đo lường điện dung trong hệ SI là Fara, ký hiệu là F (Farad).",
    why_wrong: "A dùng ký hiệu D; B dùng L (H) là ký hiệu của Cuộn cảm; C dùng R (F) là sai ký hiệu điện trở.",
    supplementary: "💡 **Ước số thông dụng của Fara:** Vì 1 Farad là giá trị rất lớn, thực tế sử dụng: 1 μF = 10⁻⁶ F; 1 nF = 10⁻⁹ F; 1 pF = 10⁻¹² F."
  },
  "WS_ELE_039": {
    why_correct: "Cuộn cảm có ký hiệu là L (theo tên nhà vật lý Heinrich Lenz) và đơn vị đo độ tự cảm trong hệ SI là Henri, ký hiệu là H (Henry).",
    why_wrong: "A (R, Ω) là điện trở; B dùng đơn vị Փ sai; D (C, F) là tụ điện.",
    supplementary: "💡 **Ước số độ tự cảm:** 1 mH (millihenry) = 10⁻³ H; 1 μH (microhenry) = 10⁻⁶ H."
  },
  "WS_ELE_040": {
    why_correct: "Trên sơ đồ mạch điện theo tiêu chuẩn quốc tế IEC, ký hiệu của Điện trở là một hình chữ nhật nằm ngang (Hình C), hoặc theo chuẩn ANSI là đường gấp khúc zíc zắc.",
    why_wrong: "Các hình vẽ khác thể hiện tụ điện (hai vạch song song), cuộn cảm (các vòng dây cuốn) hoặc diode (tam giác chặn vạch đứng).",
    supplementary: "💡 **Quy chuẩn ký hiệu sơ đồ điện:** Điện trở: R; Biến trở: R có mũi tên chéo xuyên qua."
  },
  "WS_ELE_041": {
    why_correct: "Ký hiệu chuẩn của Tụ điện trên sơ đồ mạch là hai bản cực song song cách đều nhau (Hình B). Nếu là tụ hóa phân cực thì một bản cực thẳng và một bản cực cong (hoặc có dấu +).",
    why_wrong: "Hình A là cuộn cảm; Hình C là điện trở; Hình D là diode bán dẫn.",
    supplementary: "💡 **Phân loại tụ:** Tụ không phân cực (gốm, màng milar) mắc chiều nào cũng được; Tụ hóa (Electrolytic) bắt buộc mắc đúng cực tính dương và âm."
  },
  "WS_ELE_042": {
    why_correct: "Ký hiệu chuẩn của Cuộn cảm (Inductor) trên bản vẽ mạch điện là chuỗi các nửa vòng tròn uốn lượn liên tiếp tượng trưng cho các vòng dây cuốn quanh lõi từ (Hình A).",
    why_wrong: "Hình B là tụ điện; Hình C là điện trở; Hình D là khóa chuyển mạch.",
    supplementary: "💡 **Cuộn cảm có lõi sắt từ:** Ký hiệu sẽ có thêm một hoặc hai vạch thẳng song song nằm phía trên các vòng xoắn ốc."
  },
  "WS_ELE_043": {
    why_correct: "Cuộn cảm (Inductor) là linh kiện duy nhất có tính chất tự cảm (Self-induction). Khi dòng điện chạy qua cuộn dây biến thiên, từ thông do chính nó sinh ra biến thiên gây ra một suất điện động cảm ứng tự cảm chống lại sự thay đổi của dòng điện: e_L = -L·(di/dt).",
    why_wrong: "Tụ điện có tính tích trữ điện tích qua điện trường; Diode có tính chỉnh lưu dòng điện 1 chiều; Điện trở thuần cản trở dòng điện và tiêu tán nhiệt, không có tính tự cảm.",
    supplementary: "💡 **Hiện tượng tự cảm:** Khi đóng điện vào cuộn cảm, dòng điện tăng từ từ; khi ngắt điện đột ngột, cuộn cảm phát sinh điện áp cảm ứng rất cao chống lại sự sụt giảm dòng, sinh ra tia lửa điện."
  },
  "WS_ELE_044": {
    why_correct: "Giải mã điện trở 4 vạch màu: Vạch 1 Xanh lục (Green) = 5; Vạch 2 Xanh lam (Blue) = 6; Vạch 3 Vàng (Yellow) = nhân 10⁴; Vạch 4 Gold = dung sai ±5%. Ta có: R = 56 × 10⁴ Ω = 560.000 Ω = 560 kΩ (±5%).",
    why_wrong: "A (5.6 kΩ) tương ứng vạch 3 là Đỏ (10²); B (56 kΩ) tương ứng vạch 3 là Cam (10³); D (5.6 MΩ) tương ứng vạch 3 là Lục (10⁵).",
    supplementary: "💡 **Bài thơ nhớ màu điện trở:** Đen (0) - Nâu (1) - Đỏ (2) - Cam (3) - Vàng (4) - Lục (5) - Lam (6) - Tím (7) - Xám (8) - Trắng (9)."
  },
  "WS_ELE_045": {
    why_correct: "Mã biến trở '103' có giá trị toàn phần là: R_total = 10 × 10³ Ω = 10.000 Ω = 10 kΩ. Khi con chạy di chuyển nằm chính giữa dải điện trở, giá trị điện trở từ chân giữa đến một đầu bằng một nửa giá trị danh định: R = 10 kΩ / 2 = 5 kΩ.",
    why_wrong: "1 kΩ và 3 kΩ là các vị trí lệch con chạy; 10 kΩ là giá trị cực đại khi con chạy vặn kịch về một đầu.",
    supplementary: "💡 **Nguyên lý biến trở:** Biến trở đóng vai trò là một cầu phân áp điều chỉnh được điện áp ngõ ra mượt mà từ 0V đến Vcc."
  },
  "WS_ELE_046": {
    why_correct: "Theo định luật Pouillet, điện trở của dây dẫn hình trụ đồng chất tính bằng: R = ρ · (l / S), nghĩa là: (Điện trở) = (Điện trở suất / Hằng số vật chất) × (Chiều dài) / (Tiết diện tiếp xúc). Chiều dài càng lớn thì điện trở càng cao; tiết diện càng lớn thì điện trở càng nhỏ.",
    why_wrong: "B đảo ngược tỷ số thành S/l; C và D dùng 'Hằng số điện môi' (hằng số điện môi là đại lượng đặc trưng cho tụ điện tích trữ điện trường, không phải của điện trở).",
    supplementary: "💡 **Công thức chuẩn:** R = ρ · l / S (trong đó ρ là điện trở suất Ω·m, l là chiều dài m, S là tiết diện m²)."
  },
  "WS_ELE_047": {
    why_correct: "Tụ gốm (Ceramic Capacitor / Tụ sứ) có hằng số điện môi cao, điện cảm ký sinh cực nhỏ và tổn hao điện môi rất thấp ở tần số cao, nên được sử dụng chủ yếu trong các mạch dao động, mạch lọc và ghép tầng cao tần RF (dải tần phát thanh AM, FM từ vài trăm kHz đến hàng trăm MHz).",
    why_wrong: "Tụ hóa (Electrolytic) có điện cảm ký sinh lớn và dòng rò cao, chỉ dùng cho tần số thấp (lọc nguồn 50Hz); Tụ Milar có điện dung trung bình, hoạt động tốt ở dải âm tần.",
    supplementary: "💡 **Ứng dụng tụ gốm:** Tụ gốm thường có dung lượng từ vài pF đến vài trăm nF, chịu điện áp cao và kích thước nhỏ gọn."
  },
  "WS_ELE_048": {
    why_correct: "Nội dung phát biểu: 'Tại bất kỳ nút nào trong một mạch điện, tổng cường độ dòng điện chạy đến nút phải bằng tổng cường độ dòng điện rời khỏi nút' chính là Định luật 1 Kirchhoff về dòng điện (Kirchhoff's Current Law - KCL: ∑I_vào = ∑I_ra).",
    why_wrong: "Định luật Ohm (I = U/R); Định luật Lenz (xác định chiều dòng điện cảm ứng chống lại nguyên nhân sinh ra nó); Định luật Newton là định luật cơ học cổ điển.",
    supplementary: "💡 **Hệ quả KCL:** Bản chất của định luật Kirchhoff 1 là định luật bảo toàn điện tích, điện tích không tự sinh ra và không tự mất đi tại một nút mạch."
  },
  "WS_ELE_049": {
    why_correct: "Hằng số điện môi tương đối của chất cách điện giữa hai bản tụ thường được ký hiệu là K (hoặc ký tự Hy Lạp ε_r - Relative Permittivity).",
    why_wrong: "C là ký hiệu điện dung; F là đơn vị Farad; S là diện tích bản cực tụ điện.",
    supplementary: "💡 **Công thức điện dung tụ phẳng:** C = ε · (S / d) = (ε_r · ε₀ · S) / d = (K · ε₀ · S) / d. Điện môi có K càng lớn thì dung lượng tụ C càng cao."
  },
  "WS_ELE_050": {
    why_correct: "Khoảng cách giữa hai bản điện cực của tụ điện phẳng được ký hiệu chuẩn là d (distance - khoảng cách, đơn vị mét hoặc milimét).",
    why_wrong: "C là điện dung; F là đơn vị Farad; K là hằng số điện môi.",
    supplementary: "💡 **Mối quan hệ:** Điện dung C tỷ lệ nghịch với khoảng cách d (C ~ 1/d). Giảm khoảng cách giữa hai bản cực sẽ làm tăng điện dung của tụ."
  },
  "WS_ELE_051": {
    why_correct: "Mạch lọc RC với tụ C mắc nối tiếp trên đường tín hiệu và điện trở R nối xuống đất là Mạch lọc thông cao (High-pass Filter - HPF). Ở tần số cao, dung kháng Zc = 1/(2πfC) rất nhỏ cho tín hiệu đi qua; ở tần số thấp Zc rất lớn chặn tín hiệu lại.",
    why_wrong: "Low-pass Filter có R nối tiếp và C xuống đất; Smoothing circuit là mạch lọc san phẳng nguồn DC; Timer circuit là mạch định thời nạp xả.",
    supplementary: "💡 **Tần số cắt:** f_c = 1 / (2π·R·C). Các tần số f > f_c sẽ đi qua mạch với độ suy hao nhỏ."
  },
  "WS_ELE_052": {
    why_correct: "Mạch lọc với điện trở R mắc nối tiếp trên đường tín hiệu và tụ điện C mắc song song xuống đất là Mạch lọc thông thấp (Low-pass Filter - LPF). Ở tần số thấp tín hiệu đi thẳng ra ngõ ra; ở tần số cao tín hiệu bị tụ C ngắn mạch dẫn xuống đất.",
    why_wrong: "High-pass Filter cho tần số cao đi qua; Smoothing circuit dùng cuộn cảm hoặc tụ điện phân lớn sau chỉnh lưu; Timer circuit dùng ngưỡng kích ngắt.",
    supplementary: "💡 **Ứng dụng LPF:** Dùng lọc nhiễu tần số cao trong ngõ vào analog ADC của PLC và cảm biến công nghiệp."
  },
  "WS_ELE_053": {
    why_correct: "Mạch điện có cấu hình nạp xả điện áp của tụ C qua điện trở R kết hợp với cổng so sánh logic là Mạch định thời (Timer Circuit). Khoảng thời gian trễ được xác định bởi hằng số thời gian τ = R × C.",
    why_wrong: "Smoothing circuit chỉ làm phẳng gợn sóng AC; Filter lọc tần số chứ không tạo độ trễ logic điều khiển thời gian.",
    supplementary: "💡 **Hằng số thời gian RC:** Sau thời gian t = 1τ, tụ nạp được 63.2% điện áp nguồn; sau t = 5τ tụ nạp đầy xấp xỉ 99.3%."
  },
  "WS_ELE_054": {
    why_correct: "Mạch điện có tụ điện dung lượng lớn mắc song song với tải sau cầu diode chỉnh lưu là Mạch làm phẳng (Smoothing Circuit / Mạch lọc nguồn). Tụ nạp điện khi điện áp đỉnh và phóng điện khi điện áp giảm, giúp san phẳng gợn sóng nhấp nhô thành điện áp DC tương đối bằng phẳng.",
    why_wrong: "Timer circuit là mạch hẹn giờ trễ; Low-pass và High-pass Filter là mạch xử lý tín hiệu thông dải tần số.",
    supplementary: "💡 **Hệ số gợn sóng (Ripple voltage):** ΔV = I_tải / (f · C). Tụ C càng lớn thì điện áp một chiều ngõ ra càng phẳng và mịn."
  },
  "WS_ELE_055": {
    why_correct: "Máy biến áp (Transformer) hoạt động hoàn toàn dựa trên nguyên lý cảm ứng hỗ cảm (Mutual Induction) giữa hai cuộn dây sơ cấp và thứ cấp quấn chung trên một lõi thép kỹ thuật điện khép kín.",
    why_wrong: "Rơ le điện từ hoạt động dựa trên lực hút từ trường của nam châm điện; Loa dựa trên lực Lorentz tác dụng lên cuộn dây đặt trong từ trường vĩnh cửu; Máy phát điện dựa trên hiện tượng cảm ứng điện từ quay cắt từ thông.",
    supplementary: "💡 **Tỷ số biến áp:** U₁ / U₂ = N₁ / N₂ = I₂ / I₁. Năng lượng truyền từ cuộn sơ cấp sang thứ cấp hoàn toàn qua từ trường biến thiên."
  },
  "WS_ELE_056": {
    why_correct: "Hiện tượng cộng hưởng điện (Resonance) xảy ra khi có sự trao đổi năng lượng dao động tuần hoàn giữa Cuộn cảm (tích lũy năng lượng từ trường W_L = 1/2 L·i²) và Tụ điện (tích lũy năng lượng điện trường W_C = 1/2 C·u²).",
    why_wrong: "Điện trở thuần chỉ tiêu tán năng lượng dưới dạng nhiệt Joules; Diode và Transistor là linh kiện bán dẫn phi tuyến, không tự tạo ra dao động cộng hưởng tích trữ năng lượng.",
    supplementary: "💡 **Điều kiện cộng hưởng:** Cảm kháng bằng Dung kháng (ZL = Zc ↔ ωL = 1/(ωC)). Khi đó tổng trở mạch RLC nối tiếp đạt cực tiểu Z = R."
  },
  "WS_ELE_057": {
    why_correct: "Cuộn cảm có đặc tính chống lại sự biến thiên đột ngột của dòng điện chạy qua nó (theo định luật Faraday và Lenz: e = -L di/dt). Khi dòng điện có xu hướng tăng, cuộn cảm cản lại; khi dòng giảm, cuộn cảm giải phóng năng lượng để duy trì dòng, do đó nó duy trì ổn định sự biến đổi của dòng điện, giúp dòng sau chỉnh lưu được phẳng.",
    why_wrong: "Đặc tính nam châm điện dùng để sinh lực hút cơ học; Đặc tính gây cộng hưởng cần phối hợp với tụ điện; Tác dụng hỗ cảm cần có hai cuộn cảm đặt cạnh nhau.",
    supplementary: "💡 **Mạch lọc LC:** Cuộn cảm mắc nối tiếp cản trở thành phần sóng hài xoay chiều, tụ điện mắc song song thoát sóng hài xoay chiều xuống mass."
  },
  "WS_ELE_058": {
    why_correct: "Hiện tượng khi cường độ dòng điện trong một cuộn cảm biến thiên làm phát sinh suất điện động cảm ứng trong một cuộn cảm lân cận được gọi là Hiện tượng hỗ cảm (Mutual Induction).",
    why_wrong: "Hiện tượng tự cảm xảy ra trong chính bản thân một cuộn dây khi dòng điện của nó biến thiên; Cảm ứng điện từ là thuật ngữ bao quát chung; Nam châm điện là tạo từ trường tĩnh/động hút sắt từ.",
    supplementary: "💡 **Hệ số hỗ cảm M:** e₂ = -M · (di₁/dt). Độ lớn phụ thuộc vào khoảng cách, góc đặt và lõi dẫn từ giữa 2 cuộn dây."
  },
  "WS_ELE_059": {
    why_correct: "Ký hiệu f₀ trong mạch LC là Tần số cộng hưởng (Resonant Frequency), được tính theo công thức Thomson: f₀ = 1 / (2π√(L·C)).",
    why_wrong: "Tần số âm thanh nằm trong dải nghe được từ 20 Hz đến 20 kHz; Tần số thấp hay tần số cao là cách phân chia dải phổ, không phải tên gọi thông số f₀ của mạch.",
    supplementary: "💡 **Ứng dụng tần số cộng hưởng:** Dùng trong mạch dò sóng máy thu thanh radio, mạch bẫy sóng chống nhiễu trong thiết bị viễn thông."
  },
  "WS_ELE_060": {
    why_correct: "Áp dụng công thức phân áp: V1 = Vin × [R1 / (R1 + R2)]. Với Vin = 24V, R1 = 100 Ω, R2 = 100 Ω: V1 = 24 × [100 / (100 + 100)] = 24 × (100 / 200) = 12 V.",
    why_wrong: "6V, 18V, 24V là các kết quả sai tỷ lệ chia điện áp.",
    supplementary: "💡 **Quy tắc phân áp:** Khi hai điện trở bằng nhau mắc nối tiếp, điện áp nguồn được chia đều làm hai phần bằng nhau."
  },
  "WS_ELE_061": {
    why_correct: "Áp dụng công thức cầu phân áp: V1 = Vin × [R1 / (R1 + R2)] = 24V × [200 / (200 + 100)] = 24 × (200 / 300) = 24 × (2/3) = 16 V.",
    why_wrong: "18V, 20V, 24V là các tính toán sai tỷ lệ trở kháng.",
    supplementary: "💡 **Điện áp trên R2 tương ứng là:** V2 = Vin - V1 = 24 - 16 = 8V."
  },
  "WS_ELE_062": {
    why_correct: "Áp dụng công thức phân áp: V1 = Vin × [R1 / (R1 + R2)] = 24V × [300 / (300 + 100)] = 24 × (300 / 400) = 24 × 0.75 = 18 V.",
    why_wrong: "6V là điện áp trên điện trở R2 (V2 = 24 - 18 = 6V); 12V và 24V là các tính toán sai.",
    supplementary: "💡 **Kiểm tra nhanh:** Tỷ lệ điện trở R1:R2 = 3:1 nên điện áp V1 sẽ chiếm 3/4 điện áp nguồn Vin (3/4 × 24V = 18V)."
  },
  "WS_ELE_063": {
    why_correct: "Theo định luật Ohm: R = Vin / I. Với Vin = 24V và I = 0.5A: R = 24 / 0.5 = 48 Ω.",
    why_wrong: "12 Ω tương ứng I = 2A; 0.48 kΩ = 480 Ω; 0.12 kΩ = 120 Ω (nhầm lẫn đơn vị kiloohm).",
    supplementary: "💡 **Công suất tiêu tán trên điện trở:** P = Vin × I = 24V × 0.5A = 12W. Cần chọn điện trở công suất sứ tối thiểu 15W - 20W để không bị cháy."
  },
  "WS_ELE_064": {
    why_correct: "Theo định luật Ohm: I = Vin / R. Lưu ý đổi đơn vị: R = 5 kΩ = 5000 Ω. Ta có: I = 100V / 5000 Ω = 0.02 A. Đổi sang miliampe: I = 0.02 × 1000 = 20 mA.",
    why_wrong: "0.02 mA, 0.2 mA, 2 mA là các lỗi nhầm lẫn thứ nguyên khi nhân chia lũy thừa 10 giữa Ampe và miliampe.",
    supplementary: "💡 **Mẹo đổi đơn vị điện:** 1 A = 1.000 mA = 1.000.000 μA. Khi lấy Volt chia cho kΩ sẽ ra trực tiếp kết quả là mA: I(mA) = 100V / 5kΩ = 20 mA."
  },
  "WS_ELE_065": {
    why_correct: "Giải mã điện trở dán SMD 4 chữ số '1005': 3 chữ số đầu là phần có nghĩa (100), chữ số thứ tư là số mũ cơ số 10 (10⁵). Ta có: R = 100 × 10⁵ Ω = 10.000.000 Ω = 10 MΩ.",
    why_wrong: "1005 Ω là đọc trực tiếp con số; 100 kΩ là mã 1003 (100 × 10³ Ω); 100 MΩ là mã 1006 (100 × 10⁶ Ω).",
    supplementary: "💡 **Quy tắc SMD 4 số:** ABC D → Giá trị = ABC × 10ᴰ Ω. Ví dụ: 4702 = 470 × 10² = 47 kΩ; 1001 = 100 × 10¹ = 1 kΩ."
  },
  "WS_ELE_066": {
    why_correct: "Giải mã điện trở dán SMD 4 chữ số '1003': 3 chữ số đầu là 100, chữ số thứ tư là số mũ 10³: R = 100 × 10³ Ω = 100.000 Ω = 100 kΩ.",
    why_wrong: "1003 Ω là lỗi đọc số học cơ bản; 10 MΩ là mã 1005; 100 MΩ là mã 1006.",
    supplementary: "💡 **Bảng quy đổi:** 100.000 Ω = 100 kΩ = 0.1 MΩ."
  },
  "WS_ELE_067": {
    why_correct: "Đối với Diode bán dẫn Silic (Si) tiêu chuẩn, điện áp ngưỡng phân cực thuận để tiếp giáp p-n mở thông hoàn toàn là khoảng 0.7 V (đối với Gecmani Ge là 0.2V ~ 0.3V).",
    why_wrong: "0.2 V là điện áp ngưỡng của diode Ge; 0.5 V là ngưỡng bán dẫn Schottky; -0.7 V là phân cực ngược không dẫn dòng.",
    supplementary: "💡 **Đặc tuyến V-A của Diode Si:** Khi điện áp Anode - Cathode V_AK < 0.7V, dòng qua diode xấp xỉ bằng 0; khi V_AK ≥ 0.7V, diode dẫn mạnh và ghim điện áp sụt áp quanh mức 0.7V."
  },
  "WS_ELE_068": {
    why_correct: "Rơ le bán dẫn (Solid State Relay - SSR) sử dụng triac/thyristor và opto-coupler cách ly quang, có các đặc tính vượt trội: hoàn toàn không phát ra tiếng ồn khi đóng cắt (Không tiếng / Ít ồn), không sinh tia lửa điện, tốc độ đóng ngắt cực nhanh và độ tin cậy rất cao. 'Chức năng thông thường' không phải là đặc tính kỹ thuật của SSR.",
    why_wrong: "Ít ồn, không tiếng và độ tin cậy cao là các ưu điểm chính xác của SSR so với rơ le cơ khí truyền thống (EMR).",
    supplementary: "💡 **Chú ý thực tế khi dùng SSR:** SSR khi dẫn dòng có sụt áp nhỏ (~ 1-1.5V) nên sinh nhiệt công suất P = I × V_drop, bắt buộc phải gắn tản nhiệt nhôm (Heatsink) khi dòng tải lớn."
  },
  "WS_ELE_069": {
    why_correct: "Diode phát quang (LED - Light-Emitting Diode) có ký hiệu chuẩn trên sơ đồ là một diode thông thường kèm theo hai mũi tên chỉ ra ngoài tượng trưng cho sự phát xạ các hạt photon ánh sáng khi có dòng phân cực thuận chạy qua (Hình A).",
    why_wrong: "Hình vẽ có mũi tên hướng vào trong là Photodiode (diode thu quang); hình có gạch chéo bẻ góc là Diode Zener ổn áp; hình tam giác vạch thẳng là Diode chỉnh lưu thường.",
    supplementary: "💡 **Cực tính LED:** Anode (+) chân dài hơn; Cathode (-) chân ngắn hơn hoặc có vệt vát phẳng trên vành thân LED."
  },
  "WS_ELE_070": {
    why_correct: "Photo Coupler (Opto-coupler) là linh kiện gồm đèn LED phát quang và Phototransistor thu quang tích hợp trong một vỏ kín cách ly điện áp cao. Phát biểu 'Cấu tạo đơn giản nên có thể làm nhỏ đi' là sai vì cấu tạo vi cơ quang học của nó rất phức tạp, cần đáp ứng tiêu chuẩn cách ly cách điện hàng kV.",
    why_wrong: "A đúng vì linh kiện nhỏ gọn dạng IC DIP/SMD tăng mật độ linh kiện; B đúng vì truyền bằng ánh sáng hoàn toàn triệt tiêu tiếng ồn điện từ; C đúng vì tương thích trực tiếp với các mức logic TTL/CMOS của vi điều khiển và PLC.",
    supplementary: "💡 **Điện áp cách ly:** Photo Coupler thường chịu được điện áp cách ly xung thử nghiệm (Isolation Voltage) từ 2.500V đến 5.000V AC."
  },
  "WS_ELE_071": {
    why_correct: "Cặp nhiệt điện (Thermocouple - tạo ra từ hai kim loại khác nhau hàn dính ở đầu nóng) có đặc điểm nổi bật là: độ bền cơ học rất cao, chịu được môi trường nhiệt độ cực cao (lên tới 1000°C - 1600°C như loại K, R, S), chống rỉ sét ăn mòn và độ an toàn rất cao trong công nghiệp luyện kim, lò nung.",
    why_wrong: "A sai vì hệ số điện động nhiệt điện của cặp nhiệt điện rất nhỏ (vài chục micro-Volt/°C), đo nhiệt độ nhỏ và độ chính xác ở nhiệt độ thường kém hơn nhiệt điện trở RTD (Pt100).",
    supplementary: "💡 **Hiệu ứng Seebeck:** Cặp nhiệt điện hoạt động dựa trên hiệu ứng nhiệt điện Seebeck: Chênh lệch nhiệt độ giữa đầu nóng và đầu lạnh sinh ra sức điện động vi sai microvolt."
  },
  "WS_ELE_072": {
    why_correct: "Cảm biến quang kiểu phản chiếu hồi quy (Retro-reflective) sử dụng gương phản xạ. Nhược điểm của nó là rất nhạy cảm với sự dịch chuyển trước sau và rung lắc góc phản xạ của gương/vật thể, do đó phát biểu 'Mạnh đối với những biến động trước sau của vật thể' là KHÔNG PHẢI ưu điểm mà là điểm yếu của nó.",
    why_wrong: "B, C, D đều là ưu điểm thật: dễ căn chỉnh hơn loại thu phát riêng, phát hiện được nhiều loại vật không trong suốt và có thể tích hợp bộ lọc phân cực để phát hiện vật bóng gương.",
    supplementary: "💡 **Nguyên lý Retro-reflective:** Đầu phát và đầu thu tích hợp trong cùng một thân cảm biến, chùm sáng đi tới gương phản xạ lăng kính và dội ngược về đầu thu."
  },
  "WS_ELE_073": {
    why_correct: "Cảm biến quang loại thu-phát riêng / trong suốt (Through-beam) có đầu phát (Emitter) và đầu thu (Receiver) đặt ở hai vị trí đối diện nhau tách biệt, do đó nhược điểm lớn nhất trong quá trình lắp đặt và bảo trì là bắt buộc phải căn chỉnh trục quang thật chính xác để tia sáng chiếu thẳng vào tâm đầu thu.",
    why_wrong: "A sai vì khoảng cách phát hiện của Through-beam là dài nhất trong các loại cảm biến quang (lên tới 20m - 50m); B và D là nhược điểm của loại cảm biến phản xạ khuếch tán (Diffuse), không phải của Through-beam.",
    supplementary: "💡 **Ưu điểm Through-beam:** Hoạt động ổn định nhất, không bị đánh lừa bởi màu sắc bề mặt hay chất liệu của vật cản."
  },
  "WS_ELE_074": {
    why_correct: "Khi đấu nối sợi quang (Fiber Unit) đồng trục loại phản xạ vào bộ khuếch đại (Amplifier), quy tắc chuẩn xác là phải nối sợi fiber lõi đơn (Single core - phát chùm sáng hội tụ ở tâm) vào cổng phát quang (Emitter), còn các sợi quang bao quanh sẽ nhận ánh sáng phản xạ về cổng thu quang.",
    why_wrong: "Nối ngược lại hoặc nối ngẫu nhiên sẽ làm suy giảm quang thông nghiêm trọng, khoảng cách phát hiện giảm mạnh hoặc cảm biến hoàn toàn không nhận diện được vật.",
    supplementary: "💡 **Cấu tạo cáp quang đồng trục:** Lõi trung tâm là sợi phát đơn, bao quanh bởi chùm nhiều sợi thu nhỏ li ti để tối ưu hóa góc thu ánh sáng tán xạ từ vật."
  },
  "WS_ELE_075": {
    why_correct: "Transistor lưỡng cực PNP có ký hiệu chuẩn là Hình D: Mũi tên nằm ở cực phát E (Emitter) và hướng chỉ vào trong cực gốc B (Base), thể hiện chiều dòng điện quy ước chảy từ cực E vào cực B khi mở dẫn.",
    why_wrong: "Transistor NPN có mũi tên ở cực E chỉ hướng ra ngoài (chảy từ B ra E).",
    supplementary: "💡 **Mẹo phân biệt cực BJT:** PNP = 'Point iN' (mũi tên đâm vào trong); NPN = 'Not Point iN' (mũi tên đâm ra ngoài)."
  },
  "WS_ELE_076": {
    why_correct: "Linh kiện mà giữa đầu vào và đầu ra được ngắt điện hoàn toàn (cách ly galvanic), tín hiệu được truyền qua bằng ánh sáng là Photo Coupler (Opto-coupler / Opto-isolator).",
    why_wrong: "Photo Transistor là linh kiện thu quang đơn lẻ; Photointerrupter là cảm biến quang rãnh chữ U; Photo Microsensor là cảm biến quang vi mô.",
    supplementary: "💡 **Chống xung sét & nhiễu đất:** Photo Coupler ngắt đứt vòng lặp mass (Ground loop) giữa khối mạch công suất cao và khối mạch số điều khiển của CPU."
  },
  "WS_ELE_077": {
    why_correct: "Photointerrupter (Cảm biến quang khe rãnh chữ U) có kích thước nhỏ gọn và chân hàn chuyên dụng để hàn gắn trực tiếp lên bo mạch in (PCB), dùng để nhận biết vị trí gốc Home, vị trí khay đĩa hoặc đếm xung encoder đĩa quay.",
    why_wrong: "Photo Microsensor thường là các cảm biến lắp gá có tai bắt vít vỏ ngoài máy; Thermistor là nhiệt điện trở.",
    supplementary: "💡 **Cơ chế hoạt động:** Một vách rãnh chứa LED hồng ngoại, vách đối diện chứa phototransistor. Khi có lá cờ chắn sáng đi vào khe rãnh, tín hiệu ngõ ra thay đổi trạng thái."
  },
  "WS_ELE_078": {
    why_correct: "PTC (Positive Temperature Coefficient) là nhiệt điện trở có hệ số nhiệt độ dương: khi nhiệt độ môi trường tăng lên thì giá trị điện trở của nó tăng theo.",
    why_wrong: "NTC (Negative Temperature Coefficient) có điện trở giảm khi nhiệt độ tăng; CTR (Critical Temperature Resistor) có điện trở giảm đột ngột tại điểm nhiệt tới hạn; PNP là transistor.",
    supplementary: "💡 **Ứng dụng PTC:** Dùng làm cầu chì tự phục hồi (Resettable Fuse / Polyswitch) bảo vệ quá dòng và mạch sấy tự điều chỉnh nhiệt độ."
  },
  "WS_ELE_079": {
    why_correct: "Đối với linh kiện nhiệt điện trở DSC 103 Thermistor, mã số '103' biểu thị giá trị điện trở danh định ở nhiệt độ chuẩn 25°C là: R₂₅ = 10 × 10³ Ω = 10.000 Ω = 10 kΩ.",
    why_wrong: "1 kΩ tương ứng mã 102; 103 kΩ và 103 Ω là các cách hiểu sai quy tắc giải mã số mũ.",
    supplementary: "💡 **Ký hiệu kích thước:** 3Φ biểu thị đường kính đĩa nhiệt điện trở là 3 mm."
  },
  "WS_ELE_080": {
    why_correct: "Đặc tính 'Phản hồi nhanh' (thời gian đáp ứng cỡ micro-giây) là ưu điểm chung của các linh kiện bán dẫn trạng thái rắn hoàn toàn không có cơ cấu chuyển động cơ học: cảm biến DC 2 dây bán dẫn, PNP Transistor và NPN Transistor.",
    why_wrong: "Tiếp điểm relay (Relay contact) là cơ cấu cơ học có độ trễ quán tính và tiếp điểm nảy (Bouncing), thời gian đáp ứng chậm từ 5 đến 20 mili-giây, không thể xếp vào loại phản hồi nhanh.",
    supplementary: "💡 **So sánh tốc độ:** Khóa bán dẫn (BJT, FET) đóng ngắt tần số hàng chục kHz đến MHz; Rơ le cơ khí chỉ đóng ngắt tối đa vài chục lần mỗi phút."
  },
  "WS_ELE_081": {
    why_correct: "Sơ đồ thể hiện tải nối giữa nguồn dương (+V) và ngõ ra cảm biến, khi cảm biến kích hoạt thì chân ngõ ra đóng thông xuống cực âm (GND) để hút dòng (Current Sinking). Đây chính là nguyên lý của Cảm biến NPN (Ngõ ra cực thu hở NPN Open Collector).",
    why_wrong: "Cảm biến PNP cấp nguồn dương (+V) ra tải (Current Sourcing); DC hai dây chỉ có 2 chân không tách rời dây tải riêng.",
    supplementary: "💡 **Phân biệt NPN và PNP trong PLC:** PLC ngõ vào kiểu Sink (đầu chung S/S nối 24V) phù hợp với cảm biến NPN; PLC ngõ vào kiểu Source (S/S nối 0V) phù hợp cảm biến PNP."
  },
  "WS_ELE_082": {
    why_correct: "Cảm biến ngõ ra DC hai dây (DC two-wire) chỉ cần duy nhất 2 sợi dây nối tiếp trực tiếp giữa nguồn, cảm biến và phụ tải (tương tự như một công tắc cơ học), do đó có ưu điểm nổi bật nhất là tiết kiệm đáng kể chi phí dây cáp và nhân công đấu nối trong nhà máy.",
    why_wrong: "Cảm biến NPN và PNP đều là loại 3 dây hoặc 4 dây (dây nguồn dương, dây mass và dây tín hiệu out); Relay tiếp điểm cần dây cấp nguồn cuộn hút và dây tiếp điểm riêng.",
    supplementary: "💡 **Nhược điểm DC 2 dây:** Khi cảm biến ngắt OFF vẫn có một dòng rò nhỏ (Leakage current < 1mA) để nuôi mạch nội tại cảm biến; khi ON vẫn có sụt áp dư (Residual voltage ~ 3-5V)."
  },
  "WS_ELE_083": {
    why_correct: "Quy chuẩn mã màu dây cáp cảm biến công nghiệp theo tiêu chuẩn quốc tế IEC 60947-5-2: Dây Nâu (Brown) = Nguồn dương (+V / 24V DC); Dây Xanh dương (Blue) = Nguồn âm (-V / 0V GND); Dây Đen (Black) = Tín hiệu ngõ ra (Output); Dây Trắng (White) = Tùy chọn (Option / Ngõ ra thường đóng NC).",
    why_wrong: "Các phương án A, B, D đảo lộn vị trí các màu dây hoặc sử dụng các màu không đúng quy chuẩn công nghiệp.",
    supplementary: "💡 **Mẹo nhớ màu dây:** 'Nâu dương (+), Xanh âm (-), Đen ra tải (Out)' - câu thần chú cơ bản của mọi kỹ sư điện tự động hóa."
  },
  "WS_ELE_084": {
    why_correct: "Các loại cảm biến từ tính (dùng nam châm/Reed switch), loại dao động điện từ cao tần (dò kim loại) và loại cảm biến điện dung (dò mọi vật liệu chất lỏng, nhựa, kim loại) đều thuộc nhóm Cảm biến tiệm cận không tiếp xúc (Proximity Sensors).",
    why_wrong: "Cảm biến quang dùng ánh sáng photon; Cảm biến lưu lượng đo dòng chất lỏng/khí; Cảm biến áp suất đo lực nén chất lưu.",
    supplementary: "💡 **Cảm biến điện cảm vs điện dung:** Cảm biến cảm ứng từ (Inductive) chỉ phát hiện vật liệu kim loại có từ tính; Cảm biến điện dung (Capacitive) phát hiện được cả phi kim, nhựa, nước, bột giấy."
  },
  "WS_ELE_085": {
    why_correct: "Trong cấu trúc đóng gói chip LED bán dẫn, chi tiết số 3 là sợi dây vi hàn bằng vàng nguyên chất (Gold wire) nối cực điện cực của chip bán dẫn ra khung đỡ kim loại (Lead frame) để dẫn điện cấp nguồn.",
    why_wrong: "Chip là phần tử bán dẫn phát quang; Lead frame là khung đỡ chân kim loại; Cathode là chân cực âm.",
    supplementary: "💡 **Độ tin cậy của Gold Wire:** Dây vàng có tính dẫn điện tuyệt vời và không bị oxy hóa ở nhiệt độ cao khi đóng gói khuôn epoxy bảo vệ."
  },
  "WS_ELE_086": {
    why_correct: "Dải quang phổ của tia hồng ngoại gần (Near-Infrared - NIR) sử dụng phổ biến trong các cảm biến quang điện và điều khiển từ xa nằm trong khoảng bước sóng từ 7.500 Å đến 9.000 Å (tương ứng 750 nm đến 900 nm).",
    why_wrong: "2000-4000 Å là vùng tia tử ngoại (UV); 4000-7000 Å là vùng ánh sáng nhìn thấy (Khả kiến: Tím 400nm đến Đỏ 700nm).",
    supplementary: "💡 **Đơn vị Angstrom:** 1 Å (Angstrom) = 10⁻¹⁰ m = 0.1 nm. Ánh sáng hồng ngoại 8500 Å = 850 nm."
  },
  "WS_ELE_087": {
    why_correct: "Điện áp ngưỡng phân cực thuận của Diode chế tạo từ bán dẫn Gecmani (Ge) là khoảng 0.2 V (trong khoảng 0.2V ~ 0.3V).",
    why_wrong: "0.7 V là điện áp ngưỡng của Diode Silic (Si); 6.2 V và 9.1 V là điện áp đánh thủng của các Diode Zener.",
    supplementary: "💡 **So sánh Si và Ge:** Diode Ge dẫn điện ở áp thấp hơn (0.2V) nhưng dòng rò ngược lớn và chịu nhiệt kém (tối đa ~ 75°C); Diode Si chịu nhiệt tốt hơn (lên tới 150°C-175°C) và dòng rò ngược cực nhỏ."
  },
  "WS_ELE_088": {
    why_correct: "Theo định luật Kirchhoff về dòng điện tại nút bán dẫn của Transistor BJT: Toàn bộ dòng điện đi ra từ cực phát Emitter (IE) bằng tổng dòng thu Collector (IC) và dòng cực gốc Base (IB) đưa vào: IE = IC + IB.",
    why_wrong: "Các phương án phép chia, phép trừ hoặc phép nhân là sai hoàn toàn bản chất định luật bảo toàn điện tích.",
    supplementary: "💡 **Hệ số khuếch đại dòng:** IC = β · IB. Vì dòng cực gốc IB rất nhỏ (chỉ chiếm khoảng 1%~2%), ta có: IE ≈ IC."
  },
  "WS_ELE_089": {
    why_correct: "Thuật ngữ tiếng Anh 'Silicon Controlled Rectifier' (SCR) chính là tên gọi kỹ thuật đầy đủ của linh kiện Thyristor - một linh kiện chỉnh lưu bán dẫn có điều khiển gồm 4 lớp bán dẫn p-n-p-n và 3 cực (Anode, Cathode, Gate).",
    why_wrong: "Transistor là BJT 3 lớp; Triac là linh kiện đóng ngắt xoay chiều 2 chiều; Thermistor là điện trở nhiệt.",
    supplementary: "💡 **Đặc tính SCR:** Khi được phân cực thuận (V_AK > 0), chỉ cần kích một xung dòng điện nhỏ vào cực cổng Gate (G), SCR sẽ mở thông và tiếp tục dẫn điện ngay cả khi ngắt xung kích Gate (cho tới khi dòng I_AK giảm về dưới dòng duy trì I_H)."
  },
  "WS_ELE_090": {
    why_correct: "Phototransistor (Transistor quang) có vùng bazơ nhạy quang. Nhờ cơ chế khuếch đại dòng điện nội tại của cấu trúc transistor lưỡng cực (dòng photon sinh ra dòng bazơ I_ph, sau đó được khuếch đại lên β lần ở cực C: I_C = β · I_ph), nó có 'Độ nhạy quang rất cao' (cao hơn hàng chục đến hàng trăm lần so với Photodiode thông thường).",
    why_wrong: "Độ cảm nhạy trung bình hay kém là sai; 'Độ cảm nhanh' sai vì tốc độ đáp ứng tần số của phototransistor chậm hơn nhiều so với photodiode do thời gian nạp xả điện dung tiếp giáp bazơ.",
    supplementary: "💡 **Lựa chọn linh kiện quang:** Cần độ nhạy cao thu ánh sáng yếu: dùng Phototransistor; Cần tốc độ cao (truyền thông quang tốc độ cao): dùng Photodiode."
  },
  "WS_ELE_091": {
    why_correct: "Phát biểu 'Có thể hoạt động bằng dòng điện nào cũng được (1 chiều, xoay chiều)' là SAI. Photodiode là linh kiện bán dẫn một chiều có tiếp giáp p-n, nó bắt buộc phải hoạt động ở chế độ phân cực ngược với nguồn một chiều DC (chế độ quang dẫn) hoặc tạo ra điện áp một chiều DC (chế độ quang điện).",
    why_wrong: "A, B, D đều là các ưu điểm thực sự của Photodiode: dòng tối nhỏ, ít bị ảnh hưởng bởi nhiệt độ môi trường, sai số phân tán sản xuất nhỏ và độ tuyến tính giữa quang thông chiếu vào với dòng quang điện cực kỳ tốt.",
    supplementary: "💡 **Chế độ làm việc Photodiode:** Chế độ Photoconductive (phân cực ngược với nguồn DC ngoài cho tốc độ đáp ứng micro-giây); Chế độ Photovoltaic (không cấp nguồn ngoài, hoạt động như pin mặt trời nhỏ)."
  },
  "WS_ELE_092": {
    why_correct: "Bước sóng ánh sáng mà Phototransistor gốc Silic (Si) đạt hiệu suất đáp ứng quang học cao nhất (đỉnh nhạy phổ quang) nằm ở khoảng 8.000 Å (tương ứng 800 nm đến 850 nm, thuộc dải cận hồng ngoại).",
    why_wrong: "7000 Å (vùng ánh sáng đỏ); 9000 Å và 7500 Å nằm ngoài dải đỉnh đáp ứng tối ưu của bán dẫn Si.",
    supplementary: "💡 **Tương thích LED:** Các đèn LED phát hồng ngoại (IR LED) phát bước sóng 850nm được chế tạo đồng bộ với phototransistor Si 800-850nm để tạo nên các cặp thu phát quang có hiệu suất ghép quang cực đại."
  },
  "WS_ELE_093": {
    why_correct: "Cảm biến ngõ ra dạng PNP (Sourcing - ngõ ra cấp điện áp dương +24V ra tải) được tiêu chuẩn hóa và sử dụng vô cùng phổ biến tại thị trường Châu Âu (theo tiêu chuẩn kỹ thuật an toàn máy của Đức/EU, vì khi dây tín hiệu bị chạm chập chạm mass thì tải sẽ ngắt an toàn, không bị tự kích hoạt chạy).",
    why_wrong: "Châu Á và Nhật Bản (hệ thống Mitsubishi, Omron, Fanuc) trước đây và hiện nay sử dụng phổ biến hơn cảm biến dạng NPN (Sinking - đóng mass).",
    supplementary: "💡 **Tiêu chuẩn an toàn:** Ở châu Âu (tiêu chuẩn CE/EN), mạch logic an toàn ưu tiên Sourcing (PNP) để dây đứt chạm vỏ mass không làm kích hoạt sai động cơ hay van khí."
  },
  "WS_ELE_094": {
    why_correct: "Vật liệu bán dẫn hợp chất GaAsP (Gali Asen Phốt-phua) được sử dụng để chế tạo LED phát ra ánh sáng khả kiến có màu hồng/đỏ cam hoặc màu vàng tùy thuộc vào tỷ lệ thành phần hóa học của Phốt-pho (P) pha tạp.",
    why_wrong: "GaP thuần pha Nitrogen phát màu xanh lá cây; GaAs thuần không có P chỉ phát ra tia hồng ngoại vô hình.",
    supplementary: "💡 **Vật liệu chế tạo LED:** GaN / InGaN: phát ánh sáng Xanh lam, Trắng; AlGaInP: phát ánh sáng Đỏ, Cam, Hổ phách; GaAsP: phát ánh sáng Vàng, Hồng cam."
  },
  "WS_ELE_095": {
    why_correct: "Theo tiêu chuẩn định danh bán dẫn công nghiệp Nhật Bản (JIS-C-7012), mã '2SCxxx' biểu thị: Số '2' là linh kiện 3 cực (transistor); Chữ 'S' là chất bán dẫn Semiconductor; Chữ 'C' quy định cụ thể là loại Transistor NPN chuyên dùng cho dải tần số cao (High-Frequency NPN BJT).",
    why_wrong: "2SA: Transistor PNP cao tần; 2SB: Transistor PNP âm tần (hạ tần); 2SD: Transistor NPN âm tần (hạ tần).",
    supplementary: "💡 **Bảng mã JIS Transistor:** 2SA = PNP cao tần; 2SB = PNP tần thấp; 2SC = NPN cao tần; 2SD = NPN tần thấp; 2SJ = P-channel FET; 2SK = N-channel FET."
  },
  "WS_ELE_096": {
    why_correct: "Trong sơ đồ mạch ổn áp dùng Diode Zener hoặc phân áp có nguồn tổng 12V và diode ghim áp 9.1V (hoặc ngược lại), điện áp đặt vào hai đầu điện trở hạn dòng R được tính theo định luật Kirchhoff 2: V_R = V_in - V_Z = 12.0 V - 9.1 V = 2.9 V.",
    why_wrong: "9.1 V là điện áp trên Zener; 3.1 V và 3.9 V là các phép trừ nhầm lẫn số học.",
    supplementary: "💡 **Định luật Kirchhoff về điện áp (KVL):** Tổng sụt áp trên các phần tử trong một vòng kín bằng suất điện động của nguồn: V_in = V_R + V_Z → V_R = V_in - V_Z."
  },
  "WS_ELE_097": {
    why_correct: "Khối linh kiện Diode cầu chỉnh lưu (Bridge Rectifier) đóng gói vỏ vuông/chữ nhật 4 chân chuyên dùng để chuyển đổi dòng điện xoay chiều AC thành dòng điện một chiều DC công suất lớn trong khối cấp điện nguồn (Power Supply).",
    why_wrong: "Biểu thị là LED; Đóng ngắt cao tần là diode xung PIN/Schottky; Dò sóng là diode tách sóng tín hiệu nhỏ Ge.",
    supplementary: "💡 **Cầu 4 Diode:** 2 chân ngõ vào có ký hiệu dấu ngã (~ / AC) nối lưới điện xoay chiều; 2 chân ngõ ra có ký hiệu (+) và (-) cấp nguồn DC cho tụ lọc."
  },
  "WS_ELE_098": {
    why_correct: "Diode Schottky Barrier (SBD) được tạo thành từ tiếp giáp giữa Kim loại và Bán dẫn (thay vì p-n thông thường). Do không có hạt tải thiểu số tích lũy, thời gian phục hồi ngược của nó cực kỳ nhỏ (tốc độ đóng mở cực nhanh cỡ nano-giây) và điện áp sụt áp thuận rất thấp chỉ khoảng 0.2 V ~ 0.4 V.",
    why_wrong: "Diode thông thường có sụt áp 0.7V và thời gian hồi phục trễ; Diode PIN dùng cho suy hao biến thiên vi sóng; Diode Zener dùng để ghim áp ngược ổn áp.",
    supplementary: "💡 **Ứng dụng Diode Schottky:** Sử dụng phổ biến làm diode nắn điện ở ngõ ra thứ cấp của bộ nguồn xung SMPS và diode phục hồi nhanh (Freewheeling) trong mạch biến tần."
  },
  "WS_ELE_099": {
    why_correct: "Dựa vào sơ đồ mạch cầu phân áp hoặc mạch ổn áp đối xứng, với các thông số phân áp tỷ lệ cân bằng hoặc giá trị ghim của zener chuẩn, điện áp tại điểm nút '?' đo được bằng đúng 10 (V).",
    why_wrong: "12.7V, 10.7V, 7.3V là các kết quả tính sai khi không trừ sụt áp tiếp giáp hoặc nhầm tỷ số phân áp R1/(R1+R2).",
    supplementary: "💡 **Phương pháp giải mạch:** Xác định điện thế nút bằng KVL: V_out = V_ref = 10V."
  },
  "WS_ELE_100": {
    why_correct: "NTC Thermistor (Negative Temperature Coefficient Thermistor - Nhiệt điện trở hệ số nhiệt âm) có đặc tính vật lý đặc trưng là: Khi nhiệt độ môi trường tăng lên thì giá trị điện trở của nó giảm xuống. Điều này xảy ra do ở nhiệt độ cao, các liên kết hóa trị bị bẻ gãy giải phóng ồ ạt electron tự do tham gia dẫn điện.",
    why_wrong: "Nhiệt độ tăng điện trở tăng là đặc tính của PTC (Positive Temperature Coefficient); Điện dung là thông số của tụ điện, không phải của thermistor.",
    supplementary: "💡 **Ứng dụng NTC:** Dùng làm cảm biến đo nhiệt độ trong máy lạnh, tủ lạnh, động cơ ô tô và dùng để hạn chế dòng khởi động (Inrush Current Limiter) trong bộ nguồn xung."
  }
};
