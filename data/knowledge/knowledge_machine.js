// Knowledge Base for Mechanical Engineering (100 questions: WS_MCH_001 - WS_MCH_100)
// Machine elements, bearings, fits & tolerances, linear motion, lubrication, and metrology.

module.exports = {
  "WS_MCH_001": {
    why_correct: "ISO (International Organization for Standardization) là Tổ chức Tiêu chuẩn hóa Quốc tế độc lập, phi chính phủ bao gồm các cơ quan tiêu chuẩn quốc gia của hơn 160 quốc gia trên toàn thế giới.",
    why_wrong: "BS (British Standards) là tiêu chuẩn quốc gia của Vương quốc Anh; JIS (Japanese Industrial Standards) là tiêu chuẩn công nghiệp của Nhật Bản; ANSI (American National Standards Institute) là viện tiêu chuẩn quốc gia Hoa Kỳ.",
    supplementary: "💡 **Hệ thống tiêu chuẩn công nghiệp:** ISO: Toàn cầu; JIS: Nhật Bản; KS: Hàn Quốc; DIN: Đức; ASTM/ANSI: Hoa Kỳ; TCVN: Việt Nam."
  },
  "WS_MCH_002": {
    why_correct: "Theo hệ thống Tiêu chuẩn Công nghiệp Hàn Quốc (KS - Korean Industrial Standards), các tiêu chuẩn kỹ thuật được phân chia thành đúng 20 lĩnh vực ngành nghề chuyên biệt, được ký hiệu bằng các chữ cái từ KS A đến KS X (loại trừ một số chữ cái đặc thù).",
    why_wrong: "10, 15, 25 là các con số phân nhóm không chính xác theo bảng danh mục mã hóa tiêu chuẩn KS của Cơ quan Tiêu chuẩn và Công nghệ Hàn Quốc (KATS).",
    supplementary: "💡 **Ví dụ phân nhóm KS:** KS A: Cơ sở chung; KS B: Cơ khí chế tạo máy; KS C: Điện & Điện tử; KS D: Luyện kim; KS M: Hóa chất."
  },
  "WS_MCH_003": {
    why_correct: "Mặt tiếp xúc hình trụ tròn (Cylindrical Surface Contact / Mặt tiếp xúc tròn) cho phép hai bề mặt kim loại ôm khít nhau tạo thành khớp quay (Revolute Pair), cho phép chi tiết trục quay trơn tru quanh đường tâm trục cố định bên trong lỗ ổ trục.",
    why_wrong: "Mặt tiếp xúc trượt chỉ cho phép tịnh tiến dọc trục; Mặt tiếp xúc xoắn ốc biến chuyển động quay thành tịnh tiến (như bu lông - đai ốc); Mặt tiếp xúc xoay là tên gọi chung của khớp động học.",
    supplementary: "💡 **Cặp tiếp xúc động học:** Mặt trụ tròn là cặp tiếp xúc bậc 5 có 1 bậc tự do quay và 1 bậc tự do trượt; khi chặn hướng trục chỉ còn 1 bậc tự do quay tròn."
  },
  "WS_MCH_004": {
    why_correct: "Trong thiết kế chế tạo máy thông dụng, Trục đặc (Solid Shaft) được sử dụng phổ biến nhất vì quy trình chế tạo đơn giản (tiện từ phôi thép tròn cán nóng tiêu chuẩn), chi phí vật liệu và gia công thấp, khả năng chịu uốn và chịu xoắn đồng đều trên toàn bộ tiết diện.",
    why_wrong: "Trục rỗng (Hollow shaft) chỉ dùng cho các ứng dụng đòi hỏi giảm trọng lượng tối đa hoặc truyền chất lỏng bên trong; Trục cạnh (Spline/Square shaft) dùng khi cần truyền mô-men cực lớn; Trục linh hoạt (Flexible shaft) dùng truyền chuyển động uốn cong.",
    supplementary: "💡 **So sánh trục đặc và trục rỗng:** Ở cùng một đường kính ngoài d, trục đặc chịu mô-men xoắn lớn hơn; nhưng ở cùng khối lượng kim loại, trục rỗng lại có mô-men kháng xoắn Wp cao hơn."
  },
  "WS_MCH_005": {
    why_correct: "Hình ảnh thể hiện miền dung sai của lỗ (Hole) luôn nằm hoàn toàn phía trên miền dung sai của trục (Shaft), nghĩa là kích thước giới hạn nhỏ nhất của lỗ vẫn lớn hơn kích thước giới hạn lớn nhất của trục. Mối lắp luôn có khe hở dương (Clearance > 0), do đó đây là kiểu Lắp lỏng (Clearance Fit).",
    why_wrong: "Lắp chặt / Lắp độ dôi (Interference fit): kích thước trục luôn lớn hơn lỗ; Lắp khít / Lắp trung gian (Transition fit): miền dung sai của trục và lỗ giao nhau, có thể xuất hiện khe hở hoặc độ dôi.",
    supplementary: "💡 **Ký hiệu dung sai lắp lỏng chuẩn JIS:** Lỗ H7 kết hợp trục f6, g6, h6. Dùng cho các ổ trượt, trục quay tự do hoặc piston trong xi lanh."
  },
  "WS_MCH_006": {
    why_correct: "Vòng bi hướng tâm (Radial Bearing / Ổ đỡ hướng tâm) là loại vòng bi được thiết kế với phương tiếp xúc giữa các viên bi/con lăn vuông góc với đường tâm trục (hoặc góc tiếp xúc α < 45°), chuyên dùng để gánh tải trọng tác dụng vuông góc với đường trục quay.",
    why_wrong: "Thrust bearing (Ổ lăn chặn) gánh tải trọng song song dọc theo trục; Taper bearing (Ổ lăn côn) chịu lực hỗn hợp; Magneto ball bearing là vòng bi rãnh sâu có một gờ mở tháo rời được.",
    supplementary: "💡 **Quy tắc phân loại vòng bi theo hướng tải:** Góc tiếp xúc α = 0°: Vòng bi thuần hướng tâm (Radial); 0° < α ≤ 45°: Vòng bi tiếp xúc góc (Angular contact); 45° < α ≤ 90°: Vòng bi chặn hướng trục (Thrust)."
  },
  "WS_MCH_007": {
    why_correct: "Hình ảnh mô tả mối nối liên kết có bậc tự do xoay quanh một trục cố định, cho phép góc nghiêng giữa hai khâu thay đổi linh hoạt - đây là Mặt tiếp xúc xoay (Revolute Contact / Khớp xoay bản lề).",
    why_wrong: "Mặt tiếp xúc trượt chỉ cho phép trượt tịnh tiến theo đường thẳng; Mặt tiếp xúc xoắn ốc ép chuyển động theo đường ren ốc.",
    supplementary: "💡 **Ứng dụng khớp xoay:** Gặp trong các cánh tay đòn robot, thanh truyền tay quay của động cơ đốt trong, cơ cấu đòn bẩy kẹp giữ."
  },
  "WS_MCH_008": {
    why_correct: "Trục gá dao (Arbor - Trục gá máy phay) là trục truyền động lắp các dao phay đĩa, dao phay trụ có lỗ. Do bề mặt lỗ bên trong của dao tiếp xúc và ma sát trượt liên tục với thân trục dưới tải trọng cắt gọt rung động lớn, người vận hành bắt buộc phải quan tâm đến độ mòn bề mặt bên trong lỗ tiếp xúc và thân trục.",
    why_wrong: "Spindle là trục chính mang đầu kẹp dao/phôi quay tốc độ cao; Axle là trục tâm tĩnh chỉ chịu uốn (như trục bánh xe tải); Transmission là trục truyền động chung.",
    supplementary: "💡 **Bảo trì Arbor:** Phải thường xuyên vệ sinh sạch phoi vụn, bôi lớp màng dầu mỏng chống rỉ và kiểm tra độ đảo độ côn (Runout) bằng đồng hồ so."
  },
  "WS_MCH_009": {
    why_correct: "Trong Thép Cacbon (Carbon Steel), nguyên tố Cacbon (C) là nhân tố quyết định cơ tính: Khi tăng hàm lượng %C, độ cứng (Hardness) và giới hạn bền kéo (Tensile strength) của thép tăng vọt, nhưng ngược lại độ dẻo, tỷ lệ giãn dài tương đối (Elongation) và độ dai va đập sẽ bị suy giảm rõ rệt.",
    why_wrong: "Molybden, Crom, Niken là các nguyên tố hợp kim hóa đặc biệt trong thép hợp kim, giá thành đắt, không phải thép cacbon thông dụng.",
    supplementary: "💡 **Phân nhóm thép cacbon theo %C:** Thép cacbon thấp (C < 0.25%: dẻo, dễ dập hàn); Thép cacbon trung bình (0.25% - 0.6% C như S45C: độ bền cơ tính tối ưu làm trục, then); Thép cacbon cao (C > 0.6%: rất cứng, làm dao cắt, lò xo)."
  },
  "WS_MCH_010": {
    why_correct: "Khi một trục quay phải chịu tác động chủ yếu của lực nén hoặc lực kéo tác dụng song song dọc theo phương đường tâm trục (Axial load), ổ đỡ chuyên dụng bắt buộc phải dùng là Ổ lăn chặn (Thrust Bearing / Vòng bi tỳ dọc trục).",
    why_wrong: "Radial bearing chỉ chịu lực hướng tâm vuông góc trục; Flexible bearing là vòng bi biến dạng trong hộp số Harmonic.",
    supplementary: "💡 **Cấu tạo Thrust Ball Bearing:** Gồm 2 vòng đệm (vòng ôm khít trục và vòng lắp lỏng vào thân gối) kẹp giữa là vòng cách giữ các viên bi cầu, không thể chịu được lực vuông góc trục."
  },
  "WS_MCH_011": {
    why_correct: "Khớp nối Seller (Seller's Coupling / Khớp nối nón côn kép) có vỏ ngoài hình trụ tròn, bên trong chứa 2 ống lót côn xẻ rãnh đối xứng kẹp chặt lấy 2 đầu trục. Mặt ngoài của khớp nối có 3 bu lông dài siết kéo 2 ống côn ép sát vào trục và được cố định chống xoay bằng then bán nguyệt hoặc then bằng (Feather key).",
    why_wrong: "Clamp Coupling chỉ dùng 2 nửa vỏ bán nguyệt kẹp bu lông ngang; Muff coupling là một ống trụ nguyên khối; Universal Coupling là khớp các-đăng chuyển góc.",
    supplementary: "💡 **Ưu điểm Seller's Coupling:** Nhờ bề mặt côn ép chặt nên lực kẹp ma sát rất lớn, tự định tâm tốt và truyền được mô-men xoắn mạnh mà không làm trầy xước trục."
  },
  "WS_MCH_012": {
    why_correct: "Phát biểu 'Đồng thời có thể chuyển động đặc biệt' là SAI khi nói về Trục chính Spindle. Trục chính Spindle máy CNC là cơ cấu quay định hướng siêu chính xác, chỉ có duy nhất một chuyển động quay tròn quanh tâm với độ đảo cực nhỏ, không có chuyển động tự do bất thường.",
    why_wrong: "B, C, D đều là các đặc tính kỹ thuật vượt trội của Spindle: quay tốc độ cực cao (từ 10.000 đến 40.000 rpm), độ đảo và biến dạng nhiệt cực nhỏ cỡ micromét, thường đặt tại trục chính máy phay tiện CNC hoặc tua-bin.",
    supplementary: "💡 **Ổ đỡ Spindle:** Để quay 10.000 - 30.000 rpm, Spindle máy CNC sử dụng các ổ bi gốm tiếp xúc góc siêu chính xác (Ceramic Angular Contact Bearings cấp chính xác P4 hoặc P2) kết hợp làm mát bằng dầu hồi chuyển."
  },
  "WS_MCH_013": {
    why_correct: "Khớp nối Oldham (Oldham's Coupling) là loại khớp nối bù trục chuyên dụng dùng khi hai đường tâm trục hoàn toàn song song với nhau nhưng bị lệch tâm một khoảng nhỏ (Radial Misalignment). Khớp gồm hai bích gắn trên hai đầu trục và một đĩa đệm chữ thập ở giữa trượt tự do trong các rãnh vuông góc.",
    why_wrong: "Universal Coupling (Khớp các-đăng) dùng cho hai trục giao nhau tạo góc nghiêng lớn; Muff Coupling và Rigid Coupling chỉ dùng khi hai trục đồng tâm tuyệt đối.",
    supplementary: "💡 **Đặc tính truyền động Oldham:** Vận tốc góc truyền qua khớp nối Oldham luôn được giữ đồng tốc 1:1 tuyệt đối giữa trục chủ động và trục bị động."
  },
  "WS_MCH_014": {
    why_correct: "Khớp nối có cấu tạo dạng hai mặt bích tròn bằng gang hoặc thép được định vị then trên hai đầu trục rồi ghép chặt lại với nhau bằng một vòng các bu lông đai ốc siết quanh chu vi được gọi là Khớp nối bích (Flange Coupling).",
    why_wrong: "Muff coupling dùng ống bọc; Coupling Rigid là tên gọi chung của nhóm khớp nối cứng; Clamp coupling là khớp kẹp chẻ đôi.",
    supplementary: "💡 **Tiêu chuẩn Flange Coupling:** Theo tiêu chuẩn JIS B 1451, bu lông nối bích thường sử dụng bu lông định vị có thân mài chính xác (Reamed Bolt) để chịu lực cắt mô-men xoắn."
  },
  "WS_MCH_015": {
    why_correct: "Khớp nối ống bọc chẻ (Muff / Split Muff Coupling) có cấu tạo vỏ ngoài gồm hai nửa tấm thép đúc hình bán nguyệt ôm lấy hai đầu trục, sau đó đóng siết chặt bằng bu lông hoặc đai vòng giữ.",
    why_wrong: "Oldhams Coupling dùng đĩa trượt chữ thập; Coupling Rigid là danh từ chung; Coupling Clamp có vít kẹp trực tiếp.",
    supplementary: "💡 **Tiện ích:** Có thể tháo lắp và sửa chữa Muff Coupling mà không cần phải dịch chuyển vị trí của hai động cơ hoặc hộp số."
  },
  "WS_MCH_016": {
    why_correct: "Khớp nối mềm / Khớp nối đàn hồi (Flexible Coupling) sử dụng các phần tử đàn hồi phi kim loại (như đệm cao su hoa thị, đĩa polyurethane, đai da hoặc xích con lăn) xen giữa hai nửa khớp để hấp thụ rung động xoắn, giảm va đập mô-men khi khởi động và bù trừ cho các sai lệch nhỏ về góc nghiêng hay độ lệch tâm giữa hai trục.",
    why_wrong: "Seller's coupling và Rigid coupling là các khớp nối cứng tuyệt đối, không có khả năng giảm chấn đàn hồi.",
    supplementary: "💡 **Các loại Flexible Coupling phổ biến:** Khớp nối hàm đệm cao su Jaw/Spider, khớp nối đĩa kim loại Disc coupling, khớp nối lốp cao su Tire coupling."
  },
  "WS_MCH_017": {
    why_correct: "Đối với ký hiệu mã vòng bi tiêu chuẩn JIS/ISO (ví dụ vòng bi 6204): Hai chữ số cuối '04' quy định đường kính trong của vòng bi là: d = 04 × 5 = 20 mm. Do đó, cách gọi 'Đường kính trong là 8mm' là ĐÁP ÁN SAI (không phải cách gọi của ký hiệu này).",
    why_wrong: "A (Số hiệu ký hiệu vòng bi), C (Ký hiệu khe hở hướng tâm như C3, C4) và D (Cấp chính xác gia công như P0, P6, P5) đều là các thành phần cấu thành chuẩn trong chuỗi mã hiệu vòng bi lăn.",
    supplementary: "💡 **Quy tắc đọc đường kính trong (d) vòng bi:** Mã 00: d = 10mm; Mã 01: d = 12mm; Mã 02: d = 15mm; Mã 03: d = 17mm; Từ mã 04 trở đi: d = (Hai số cuối) × 5 mm."
  },
  "WS_MCH_018": {
    why_correct: "Hình ảnh thể hiện kết cấu của Vòng bi cầu đỡ một dãy rãnh sâu (Single Row Deep Groove Ball Bearing - sê-ri 6000, 6200, 6300). Đây là loại vòng bi phổ biến nhất trong cơ khí, gồm các viên bi cầu lăn trên rãnh sâu của vòng trong và vòng ngoài.",
    why_wrong: "Angular ball bearing có rãnh lệch góc; Self-aligning có 2 dãy bi tự lựa trên mặt cầu; Magneto bearing có thể tháo rời một vai chặn.",
    supplementary: "💡 **Ưu điểm Deep Groove:** Chịu tải hướng tâm tốt, chịu được một phần tải dọc trục nhẹ hai chiều, vận hành êm ở tốc độ quay rất cao và giá thành rẻ nhất."
  },
  "WS_MCH_019": {
    why_correct: "Khớp nối Seller (Seller’s Coupling) được thiết kế và phát triển chính là dạng cải tiến tối ưu hóa của Khớp nối ống bọc (Muff Coupling): thay vì chỉ kẹp ma sát hình trụ đơn giản, Seller's Coupling sử dụng hai ống lót côn đôi tạo hiệu ứng nêm chêm nón ép chặt trục khi siết 3 bu lông.",
    why_wrong: "Flange coupling là khớp bích; Flexible coupling là khớp đàn hồi.",
    supplementary: "💡 **Hiệu ứng nêm côn:** Lực ép dọc trục của bu lông được nhân lên nhiều lần thành lực hướng tâm ôm chặt lấy trục, loại bỏ hoàn toàn hiện tượng trượt trơn."
  },
  "WS_MCH_020": {
    why_correct: "Khi ghép cặp đôi các vòng bi tiếp xúc góc (Angular Contact Ball Bearings), phương án ghép nối tiếp / song song (Tandem Arrangement - ký hiệu DT - Hình D) cho phép hai vòng bi có đường tác dụng lực song song với nhau, cùng chia sẻ tải trọng để chịu được tải trọng hướng trục cực lớn theo MỘT HƯỚNG.",
    why_wrong: "Ghép lưng đối lưng (DB) và ghép mặt đối mặt (DF) dùng để gánh tải trọng hướng trục từ cả HAI PHÍA ngược nhau hoặc chịu mô-men lật.",
    supplementary: "💡 **Ký hiệu ghép cặp đôi vòng bi:** DB (Back-to-Back: chữ O, độ cứng vững lật cao); DF (Face-to-Face: chữ X, tự lựa tốt); DT (Tandem: hai mũi tên cùng hướng, tải trọng dọc trục một chiều siêu lớn)."
  },
  "WS_MCH_021": {
    why_correct: "Đặc điểm 'Là hình thái đại diện cho Rolling Bearing và có mục đích sử dụng rộng' KHÔNG PHẢI là đặc tính của vòng bi tiếp xúc góc (Angular Ball Bearing), mà đây là định nghĩa chuẩn của Vòng bi cầu rãnh sâu một dãy (Deep Groove Ball Bearing).",
    why_wrong: "A, B, D đều là các ưu điểm chính xác của Angular Contact Ball Bearing: cấp chính xác cao và quay tốc độ lớn, khả năng chịu tải trọng hướng kính và hướng trục cao hơn nhiều so với vòng bi rãnh sâu tiêu chuẩn nhờ có góc tiếp xúc (15°, 25°, 30°, hoặc 40°).",
    supplementary: "💡 **Góc tiếp xúc α:** Vòng bi góc tiếp xúc 40° (ký hiệu B) chịu tải dọc trục lớn; vòng bi góc tiếp xúc 15° (ký hiệu C) chuyên dùng cho trục chính Spindle tốc độ cao."
  },
  "WS_MCH_022": {
    why_correct: "Khi đường kính trục truyền động quá lớn hoặc trong các ứng dụng hàng không, ô tô, robot đòi hỏi trục phải có trọng lượng nhẹ để giảm mô-men quán tính quay, kỹ sư sẽ sử dụng Trục rỗng (Hollow Shaft).",
    why_wrong: "Solid shaft là trục đặc (nặng hơn đáng kể); Square là trục vuông; Hexagonal là trục lục giác.",
    supplementary: "💡 **Tối ưu hóa hình học:** Ứng suất xoắn lớn nhất tập trung ở lớp vỏ ngoài của trục, phần lõi kim loại sát tâm chịu lực rất ít. Khoét rỗng tâm giúp giảm 50% trọng lượng nhưng độ bền xoắn chỉ giảm khoảng 10% - 15%."
  },
  "WS_MCH_023": {
    why_correct: "Hình ảnh thể hiện khớp nối cứng gồm hai đĩa bích tròn có vành bắt bu lông định vị xung quanh - đây là Khớp nối bích (Flange Coupling).",
    why_wrong: "Coupling cao su có vấu đệm đàn hồi; Gear coupling có răng trong ăn khớp răng ngoài; Serration coupling có then hoa tam giác nhuyễn.",
    supplementary: "💡 **Kiểm tra lắp ráp Flange Coupling:** Phải siết bu lông đối xứng chéo cánh cung theo lực siết (Torque) tiêu chuẩn bằng cần xiết lực để tránh làm vênh mặt bích gây đảo trục."
  },
  "WS_MCH_024": {
    why_correct: "Trong các thông số kỹ thuật thiết kế khớp nối trục, 'Góc tiếp xúc của trục' KHÔNG PHẢI là hạng mục cần chú ý (vì trục cơ khí thông thường là hình trụ tròn đồng tâm, không có góc tiếp xúc như ổ bi).",
    why_wrong: "A (Độ lớn của mô-men lực truyền động), B (Độ lệch phương sai của trọng tâm hai trục - Misalignment) và C (Tốc độ quay của trục - RPM) là 3 yếu tố cốt tử bắt buộc phải tính toán khi chọn khớp nối.",
    supplementary: "💡 **3 dạng lệch tâm khi nối trục:** Lệch tâm song song (Radial offset); Lệch góc (Angular misalignment); Lệch dịch dọc trục (Axial displacement)."
  },
  "WS_MCH_025": {
    why_correct: "Khoảng cách mà đai ốc dịch chuyển tịnh tiến dọc trục được khi xoay đinh ốc trọn vẹn một vòng (360°) được định nghĩa là Bước tiến (Lead / Ký hiệu L).",
    why_wrong: "Pitch (Bước ren P) là khoảng cách giữa hai đỉnh ren kề nhau. Với ren 1 đầu mối thì Lead = Pitch, nhưng với ren nhiều đầu mối thì Lead = n × Pitch.",
    supplementary: "💡 **Công thức liên hệ:** Lead = n × Pitch (trong đó n là số đầu mối ren). Đinh ốc 2 đầu mối có bước ren 3mm thì khi quay 1 vòng sẽ tịnh tiến được bước tiến Lead = 2 × 3 = 6 mm."
  },
  "WS_MCH_026": {
    why_correct: "Để nối các mắt xích con lăn của xích xe đạp hoặc xích truyền động công nghiệp, người ta sử dụng Chốt trụ bình hành (Parallel Pin / Chốt trụ định vị) tán hai đầu để ghim chặt má xích ngoài và ống lót xích.",
    why_wrong: "Taper pin là chốt côn dùng cố định định vị gá khuôn; Knuckle pin là chốt bản lề chịu tải lớn; Spring pin là chốt đàn hồi xẻ rãnh.",
    supplementary: "💡 **Yêu cầu kỹ thuật chốt xích:** Bề mặt chốt phải được thấm cacbon tôi cứng chống mài mòn, trong khi lõi chốt phải dẻo dai để chịu lực giật va đập tuần hoàn."
  },
  "WS_MCH_027": {
    why_correct: "Then tròn (Round Key / Chốt then tròn): Sau khi gia công lỗ trên may-ơ và trục khớp khít với nhau, người ta chỉ cần khoan một lỗ tròn song song dọc theo mặt tiếp xúc giữa trục và may-ơ, sau đó đóng ép then tròn vào. Quy trình gia công bằng mũi khoan vô cùng đơn giản và nhanh chóng.",
    why_wrong: "Woodruff key cần dao phay đĩa xẻ rãnh bán nguyệt; Sunk key cần dao phay ngón phay rãnh then chìm; Sliding key cần rãnh dài trượt dọc.",
    supplementary: "💡 **Nhược điểm then tròn:** Khả năng chịu mô-men xoắn chỉ ở mức trung bình, thường dùng cho các trục truyền lực nhỏ hoặc cố định pu-li phụ."
  },
  "WS_MCH_028": {
    why_correct: "Đinh ốc ren theo quy chuẩn kỹ thuật quốc tế và ứng dụng thực tế hầu hết được sử dụng theo Hướng xoắn phải (Right-hand Thread - vặn theo chiều kim đồng hồ thì tiến vào). Tuy nhiên trong một số ứng dụng đề thi chỉ định ren ngược hoặc theo tài liệu kiểm tra gốc chỉ định phương án xoắn trái.",
    why_wrong: "Hướng đa xoắn là số đầu mối; Hướng một xoắn là ren đơn.",
    supplementary: "💡 **Quy tắc bàn tay phải cho ren:** Nắm bàn tay phải, ngón cái chỉ chiều tiến của ốc khi xoay các ngón tay theo chiều kim đồng hồ."
  },
  "WS_MCH_029": {
    why_correct: "Hình ảnh thể hiện một chốt hình nón cụt có độ thuôn côn tiêu chuẩn tỷ lệ 1:50 - đây là Chốt côn (Taper Pin).",
    why_wrong: "Knuckle pin là chốt bản lề có đầu mũ; Spring pin là ống cuộn thép có khe hở dọc; Split pin là chốt chẻ có 2 nhánh bẻ gập.",
    supplementary: "💡 **Độ côn chuẩn của Taper Pin:** Tiêu chuẩn JIS B 1352 quy định độ côn 1/50. Khi đóng vào lỗ doa côn, chốt tự định tâm tuyệt đối và có thể tháo lắp nhiều lần mà không làm mất độ chính xác vị trí."
  },
  "WS_MCH_030": {
    why_correct: "Vít me bi (Ball Screw) là cơ cấu biến đổi truyền động cơ học (biến chuyển động quay thành chuyển động tịnh tiến chính xác cao trong máy CNC), KHÔNG PHẢI là đinh ốc nối (Fastening Screw) dùng để siết chặt cố định hai chi tiết cơ khí.",
    why_wrong: "Đinh ốc Unified (ren hệ inch của Mỹ), Đinh ốc Metric (ren hệ mét tam giác 60°) và Đinh ốc ống (ren ống nước G/NPT) đều là các loại ren ghép nối liên kết cố định tiêu chuẩn.",
    supplementary: "💡 **Phân loại ren:** Ren ghép nối (Fastening thread: ren tam giác góc đỉnh 60° hoặc 55° có ma sát lớn để tự hãm); Ren truyền động (Motion/Power thread: ren vuông, ren hình thang Tr, vít me bi có ma sát nhỏ, hiệu suất cao)."
  },
  "WS_MCH_031": {
    why_correct: "Dựa vào thông số trên bản vẽ: đinh ốc có bước tiến Lead = 6 mm. Do đó khi quay đinh ốc đúng một vòng tròn 360°, khoảng cách dịch chuyển tịnh tiến dọc trục của đai ốc là đúng 6 mm.",
    why_wrong: "2mm, 3mm, 4mm là các bước ren P thành phần chưa nhân với số đầu mối của đinh ốc.",
    supplementary: "💡 **Vận tốc tịnh tiến:** V = (n_vòng/phút × Lead) / 60 (mm/giây). Lead càng lớn thì tốc độ di chuyển bàn máy càng cao ở cùng tốc độ động cơ."
  },
  "WS_MCH_032": {
    why_correct: "Đinh ốc hệ mét (Metric Screw / Ren hệ mét M) có profin ren hình tam giác đều góc đỉnh 60°, ma sát trượt lớn để đảm bảo điều kiện tự hãm không bị lỏng ốc, do đó nó là ren ghép nối cố định, KHÔNG PHẢI là đinh ốc chuyển động.",
    why_wrong: "Đinh ốc bốn cạnh (Ren vuông Square thread), Đinh ốc hình thang (Trapezoidal thread Tr30°/29°) và Đinh ốc răng cưa (Buttress thread) đều là các loại ren chuyên dùng để truyền động lực tịnh tiến trong kích vít, máy tiện và bàn trượt.",
    supplementary: "💡 **Hiệu suất truyền động:** Ren vuông và ren hình thang có góc nghiêng sườn nhỏ giúp giảm lực cản ma sát, tăng hiệu suất truyền công suất từ động cơ sang bàn máy."
  },
  "WS_MCH_033": {
    why_correct: "Điểm hạn chế lớn nhất của Đinh ốc đa xoắn (Multi-start Thread - ren nhiều đầu mối) là: Rất dễ bị tự mở lỏng ra (mất tính tự hãm). Do có nhiều đầu mối nên góc nâng ren (Lead angle λ) rất lớn, khi chịu rung động hoặc tải trọng dọc trục thì đai ốc có xu hướng tự xoay trượt ngược trở lại.",
    why_wrong: "Ren đa xoắn có số vòng xoắn nhiều và bước tiến lớn, góc lệch pha được chia đều 360°/n (2 đầu mối lệch 180°, 3 đầu mối lệch 120°).",
    supplementary: "💡 **Điều kiện tự hãm của ren:** Góc nâng ren λ phải nhỏ hơn góc ma sát tương đương ρ' (λ < ρ'). Ren đa xoắn có λ lớn nên không tự hãm được."
  },
  "WS_MCH_034": {
    why_correct: "Chi tiết được mô tả là Chốt chẻ / Chốt hãm (Split Pin / Cotter Pin): Một chốt bằng thép mềm có tiết diện hình bán nguyệt gập đôi lại. Sau khi siết đai ốc xẻ rãnh (Castellated Nut) vào bu lông, người ta xỏ chốt chẻ qua lỗ khoan trên đầu bu lông rồi dùng kìm bẻ tách hai nhánh đầu chốt gập ngược về hai phía để khóa chết đai ốc không bao giờ bị tuột do rung động.",
    why_wrong: "Taper pin là chốt côn; Parallel pin là chốt trụ; Knuckle pin là chốt khớp bản lề.",
    supplementary: "💡 **Ứng dụng an toàn cao:** Chốt chẻ bắt buộc phải sử dụng tại các vị trí cơ cấu an toàn sinh mạng như trục bánh xe ô tô, đòn phanh tàu hỏa, cơ cấu lái máy bay."
  },
  "WS_MCH_035": {
    why_correct: "Hình ảnh thể hiện Then dẫn hướng / Then trượt (Sliding Key / Feather Key bắt vít) được bắt cố định trên trục cho phép may-ơ bánh răng trượt tịnh tiến qua lại dọc theo chiều dài trục trong khi vẫn truyền mô-men xoắn.",
    why_wrong: "Parallel pin, Split pin và Spring pin đều là các dạng chốt kim loại định vị, không phải then khóa truyền mô-men xoắn.",
    supplementary: "💡 **Ứng dụng then trượt:** Sử dụng trong các hộp số cơ khí của máy công cụ để gài số thay đổi tỷ số truyền bằng cách trượt bánh răng ăn khớp."
  },
  "WS_MCH_036": {
    why_correct: "Trong quy chuẩn ghi chú và ký hiệu ren theo tiêu chuẩn JIS B 0205, các thông số đọc bao gồm: Hướng xoắn (trái/phải), Số đầu mối, Tên và đường kính danh nghĩa của ren (ví dụ M20). Thuật ngữ 'Lắp ghép đinh ốc' KHÔNG PHẢI là một thành phần trong chuỗi cách đọc ký hiệu định danh ren.",
    why_wrong: "A, B, D là các thành phần bắt buộc trong định danh ren hoàn chỉnh.",
    supplementary: "💡 **Ví dụ chuỗi ký hiệu ren chuẩn:** `M20 × 2 - 6H` (Ren hệ mét đường kính danh nghĩa 20mm, bước ren mịn 2mm, cấp dung sai lỗ ren 6H)."
  },
  "WS_MCH_037": {
    why_correct: "Phát biểu KHÔNG PHẢI đặc điểm của Then bán nguyệt (Woodruff Key) là: 'Thường dùng trong trục chính của xe ô tô'. Do rãnh then hình bán nguyệt phải khoét rất sâu vào thân trục, làm suy giảm tiết diện chịu lực và gây tập trung ứng suất nghiêm trọng làm yếu trục, nên tuyệt đối không được dùng cho trục chính chịu tải lớn của ô tô.",
    why_wrong: "A (Dễ tháo lắp tự chỉnh góc nghiêng), B (Rãnh sâu làm giảm độ bền mỏi của trục) và C (Dùng phổ biến cho các trục nhỏ d ≤ 60mm tải nhẹ) đều là các tính chất thực tế chuẩn xác của then bán nguyệt.",
    supplementary: "💡 **Ưu điểm Then bán nguyệt:** Có khả năng tự nghiêng xoay đáy trong rãnh may-ơ để tự lựa theo độ côn của đầu trục lắp bánh đai."
  },
  "WS_MCH_038": {
    why_correct: "Giải mã ký hiệu ren: 'L 2N M70×6 - 2': Chữ 'L' là ren xoắn trái (Left-hand); '2N' là ren có 2 đầu mối (Number of starts n = 2); 'M70×6' là ren hệ mét đường kính danh nghĩa 70mm, bước ren P = 6 mm. Khi xoay đinh ốc 1 vòng, khoảng cách dịch chuyển (Lead) là: Lead = n × P = 2 × 6 mm = 12 mm.",
    why_wrong: "3mm là một nửa bước ren; 6mm mới chỉ là bước ren P của 1 đầu mối; 18mm là tương ứng 3 đầu mối.",
    supplementary: "💡 **Công thức bước tiến ren nhiều đầu mối:** Lead = n × Pitch = 2 × 6 mm = 12 mm."
  },
  "WS_MCH_039": {
    why_correct: "Trong các cảnh báo thao tác vặn đinh ốc trên tấm mỏng, nhận định 'Nếu cho lực vừa, Wrench có thể bị lệch' là KHÔNG PHẢI chú ý an toàn đúng (vặn lực vừa phải đúng tiêu chuẩn mới giúp cờ-lê ôm khít đầu ốc và không bị trượt).",
    why_wrong: "A (Tuyệt đối không nối ống dài vào tay cầm cờ-lê để tăng lực đòn bẩy gây gãy ren tấm mỏng), C (Tránh dùng búa gõ vào thân cờ-lê làm móp méo tấm kim loại mỏng) và D (Phải vặn sâu đai ốc để đủ số ren chịu lực) đều là các quy tắc vàng bắt buộc trong xưởng cơ khí.",
    supplementary: "💡 **Nguy cơ vặn ốc trên tấm mỏng:** Dễ bị tuôn ren (Strip thread) hoặc làm cong vênh biến dạng bề mặt tấm kim loại nếu siết quá lực mô-men quy định."
  },
  "WS_MCH_040": {
    why_correct: "Vật liệu kim loại tiêu chuẩn được sử dụng phổ biến nhất để chế tạo then then hoa (Key) và then bằng cơ khí là Thép Cacbon kết cấu máy SM45C (theo tiêu chuẩn KS) hoặc S45C (theo tiêu chuẩn JIS), với hàm lượng cacbon khoảng 0.45%, có độ bền cắt và độ dẻo dai va đập tối ưu.",
    why_wrong: "SM45A, SF55B, SF55D là các mã mác thép rèn hoặc không đúng tiêu chuẩn chế tạo then máy.",
    supplementary: "💡 **Cơ tính mác thép S45C / SM45C:** Giới hạn bền kéo σ_b ≥ 600 MPa, giới hạn chảy σ_s ≥ 350 MPa, độ cứng sau thường hóa khoảng 200 HB, dễ nhiệt luyện tôi cải thiện."
  },
  "WS_MCH_041": {
    why_correct: "Hình ảnh thể hiện một ống trụ rỗng làm từ thép lò xo đàn hồi có một khe hở dọc suốt thân chốt - đây là Chốt đàn hồi (Spring Pin / Roll Pin).",
    why_wrong: "Knuckle pin là chốt bản lề đặc; Parallel pin là chốt trụ đặc; Split pin là chốt chẻ gập đôi.",
    supplementary: "💡 **Cơ chế giữ chặt của Spring Pin:** Đường kính ngoài tự do của chốt lớn hơn đường kính lỗ khoan một chút. Khi đóng vào lỗ, ống chốt bị bóp nhỏ lại, lực đàn hồi bung ra tạo áp lực ma sát hướng kính ép chặt vào thành lỗ chống tuột cực tốt."
  },
  "WS_MCH_042": {
    why_correct: "Chốt bản lề (Knuckle Pin / Clevis Pin) có kết cấu chịu lực cắt cực lớn, có đầu mũ chặn và lỗ xỏ chốt chẻ ở đuôi, được sử dụng rộng rãi làm khớp quay trong thanh giằng kéo (Tie-rod) của hệ thống treo, hệ thống lái và cơ cấu truyền lực phanh ô tô.",
    why_wrong: "Sliding key là then trượt truyền mô-men quay; Parallel pin và Split pin chỉ đóng vai trò phụ định vị chống trôi.",
    supplementary: "💡 **Ưu điểm Knuckle Joint:** Cho phép các thanh kéo truyền lực dọc trục lớn trong khi hai thanh vẫn có thể quay lắc tự do góc nhỏ quanh chốt."
  },
  "WS_MCH_043": {
    why_correct: "Then tròn (Round Key): Khác với then bằng chịu ứng suất dập và cắt mô-men xoắn trên toàn bộ cạnh bên, then tròn thường được dùng để khóa định vị và cố định chuyển động dịch chuyển theo hướng dọc trục của may-ơ hoặc chốt mấu lồi.",
    why_wrong: "Woodruff key là then bán nguyệt; Sunk key là then chìm chuyên chịu mô-men xoắn lớn; Sliding key là then trượt tự do dọc trục.",
    supplementary: "💡 **Lắp then tròn:** Rãnh then tròn được tạo bằng mũi khoan sau khi đã lắp ghép may-ơ vào trục, giúp định vị vị trí dọc trục cực kỳ chuẩn xác."
  },
  "WS_MCH_044": {
    why_correct: "Đặc điểm 'Backlash nhỏ' KHÔNG PHẢI là ưu điểm vốn có của Bánh răng (Gear) thông thường. Ngược lại, để tránh kẹt răng do giãn nở nhiệt và có không gian lưu giữ màng dầu bôi trơn, bộ truyền bánh răng gia công tiêu chuẩn luôn tồn tại khe hở cạnh răng (Backlash). Để triệt tiêu backlash cần gia công bánh răng mài nghiền chính xác cao hoặc dùng cơ cấu khử rơ tốn kém.",
    why_wrong: "A (Truyền lực công suất chắc chắn không trượt), C (Đảm bảo tỷ số truyền tốc độ quay chính xác tuyệt đối i = const) và D (Kết cấu nhỏ gọn độ bền hàng chục năm) đều là các ưu điểm vượt trội kinh điển của bánh răng.",
    supplementary: "💡 **Hậu quả của Backlash:** Gây va đập tiếng ồn khi đảo chiều quay và làm giảm độ chính xác định vị góc trong hệ thống servo máy công cụ."
  },
  "WS_MCH_045": {
    why_correct: "Đặc điểm 'Tỷ lệ trơn trượt cực kỳ nhỏ' KHÔNG PHẢI là ưu điểm của máy giảm tốc bánh răng (vì bộ truyền bánh răng ăn khớp cứng cơ học ăn khớp cưỡng bức, tỷ lệ trơn trượt bằng đúng 0% chứ không phải là 'nhỏ'). Thuật ngữ trơn trượt chỉ áp dụng cho bộ truyền đai ma sát.",
    why_wrong: "A (Kích thước nhỏ nhưng truyền được mô-men lực xoắn cực lớn), B (Kết cấu kín khép kín bên trong hộp dầu bôi trơn) và D (Dải tỷ số giảm tốc rất rộng từ 1:3 đến 1:1000) đều là các ưu điểm chính xác của hộp giảm tốc.",
    supplementary: "💡 **Hiệu suất hộp giảm tốc:** Hộp giảm tốc bánh răng hành tinh đạt hiệu suất 95% - 98% mỗi cấp; hộp giảm tốc trục vít bánh vít hiệu suất thấp hơn (60% - 85%) do ma sát trượt cao."
  },
  "WS_MCH_046": {
    why_correct: "Phát biểu KHÔNG PHẢI ưu điểm của Đai truyền hình chữ V (V-Belt / Đai thang) là: 'Độ dài của belt có thể thay đổi'. Đai chữ V công nghiệp là vòng đai đúc cao su liền khối kín vòng tiêu chuẩn, tuyệt đối không thể cắt nối hay thay đổi chiều dài tùy ý.",
    why_wrong: "B (Mặt cắt hình thang nêm chặt vào rãnh puli nên không lo tuột ra ngoài), C (Hiệu suất truyền động cao có thể đạt tới 95% - 98%) và D (Góc ôm nhỏ, lắp đặt được tại không gian trục gần nhau) đều là các ưu điểm nổi bật của đai V.",
    supplementary: "💡 **Hiệu ứng nêm chêm của đai V:** Nhờ góc nghiêng 40° của rãnh puli, lực ma sát tương đương giữa đai V và puli tăng gấp khoảng 3 lần so với đai dẹt phẳng ở cùng một lực căng đai ban đầu."
  },
  "WS_MCH_047": {
    why_correct: "Phát biểu 'Cần sức kéo khởi động nhỏ' KHÔNG PHẢI là đặc tính đúng của bộ truyền Xích con lăn (Chain Drive). Ngược lại, do xích có khối lượng kim loại lớn và có độ chùng dãn nên khi khởi động máy đòi hỏi lực kéo khởi động ban đầu khá lớn để thắng quán tính và giật xích.",
    why_wrong: "A (Ăn khớp răng với đĩa xích nên không có sự trượt trơn, duy trì tỷ số truyền trung bình chính xác), B (Độ dài xích có thể thay đổi tăng giảm dễ dàng bằng cách thêm bớt mắt xích) và C (Tuổi thọ cao, dễ sửa chữa thay thế mắt xích hỏng) là các đặc tính thực tế của bộ truyền xích.",
    supplementary: "💡 **Bảo dưỡng xích:** Bắt buộc phải tra dầu bôi trơn định kỳ vào khe hở giữa con lăn và ống lót để chống mòn rão xích và kiểm tra độ chùng góc 1% - 2% khoảng cách trục."
  },
  "WS_MCH_048": {
    why_correct: "Bánh răng nghiêng Helical Gear thuộc nhóm bánh răng truyền động giữa hai trục song song (trục song song nhưng đường răng nghiêng góc xoắn β để tăng độ êm). Ngược lại, các loại bánh răng Hypoid, Helicon hay Bánh răng trục vít (Screw gear) thuộc nhóm bánh răng truyền động giữa hai trục chéo nhau (Crossing shafts) trong không gian.",
    why_wrong: "Helicon, Hypoid và Screw gear đều là các bộ truyền bánh răng có hai trục không song song và không cắt nhau.",
    supplementary: "💡 **Phân loại bánh răng theo vị trí trục:** Trục song song (Spur gear, Helical gear, Herringbone gear); Trục giao nhau (Straight/Spiral Bevel gear); Trục chéo nhau (Worm gear, Hypoid gear, Screw gear)."
  },
  "WS_MCH_049": {
    why_correct: "Định nghĩa chuẩn xác nhất về Bánh răng nghiêng (Helical Gear): Là loại bánh răng có mặt trụ lăn cơ sở, nhưng đường profin răng không song song với trục mà bị uốn nghiêng góc xoắn cong (Helix angle) tạo thành đường xoắn ốc liên tục, giúp các răng vào khớp từ từ êm ái, giảm rung động và tiếng ồn.",
    why_wrong: "A là bánh răng thẳng thông thường; B là bánh răng thanh răng biến quay thành tịnh tiến (Rack & Pinion); D là bánh răng trụ răng thẳng.",
    supplementary: "💡 **Lực dọc trục của Helical Gear:** Do răng nghiêng nên sinh ra lực dọc trục Fa đẩy trượt trục. Để triệt tiêu lực này trong tải siêu nặng, người ta dùng bánh răng chữ V (Herringbone gear / Bánh răng nghiêng kép đối xứng)."
  },
  "WS_MCH_050": {
    why_correct: "Trong bảng phân loại hộp giảm tốc theo hướng bố trí không gian của các trục, các loại bao gồm: Trục đồng tâm (In-line / Coaxial), Trục giao nhau vuông góc (Right-angle / Bevel), Trục song song (Parallel shaft). Phương án 'Trục bình hành' không phải là danh mục phân loại chuẩn.",
    why_wrong: "Trục đồng tâm, trục giao nhau và trục song song là các kiểu bố trí vỏ hộp số tiêu chuẩn trong công nghiệp.",
    supplementary: "💡 **Hộp số đồng tâm:** Trục vào của động cơ và trục ra của hộp số nằm trên cùng một đường thẳng tâm (như hộp giảm tốc bánh răng hành tinh, Cyclo drive)."
  },
  "WS_MCH_051": {
    why_correct: "Hộp giảm tốc bánh răng đa hệ (Epicyclic / Planetary Gear System) có ưu điểm nổi bật là có thể thay đổi cấu hình truyền động: vừa có thể định tốc giảm tốc mô-men lớn, vừa có thể quay tăng tốc nhanh hoặc vi sai cộng tốc độ hai nguồn vào.",
    why_wrong: "Các phương án giới hạn 1 thì hay cấu tạo cồng kềnh là sai với bản chất của bộ truyền hành tinh.",
    supplementary: "💡 **Cấu tạo bộ truyền hành tinh:** Gồm 3 thành phần: Bánh răng mặt trời ở tâm (Sun gear), Các bánh răng hành tinh quay quanh (Planet gears gắn trên Cần dẫn Carrier), và Vành răng trong bao ngoài (Ring gear / Annulus)."
  },
  "WS_MCH_052": {
    why_correct: "Hộp giảm tốc bánh răng hành tinh (Planetary Gearbox) có vỏ ngoài hình trụ tròn khép kín hoàn toàn và các bánh răng ăn khớp kín bên trong, tích hợp phớt chặn dầu cao cấp nên có khả năng ngăn chặn tuyệt đối bụi bẩn và hạt kim loại từ môi trường bên ngoài xâm nhập vào.",
    why_wrong: "Hộp giảm tốc Cyclo và RV có cấu tạo chốt con lăn hở hoặc kết cấu mở phức tạp hơn; Harmonic drive có nắp flexspline biến dạng mỏng.",
    supplementary: "💡 **Ứng dụng Planetary Gearbox:** Gắn trực tiếp vào đuôi động cơ Servo trong cánh tay robot công nghiệp, máy đóng gói và bàn xoay index độ chính xác cao."
  },
  "WS_MCH_053": {
    why_correct: "Cặp bánh răng trụ ăn khớp ngoài (External Cylindrical / Spur Gear) khi làm việc thì trục chủ động và trục bị động luôn luôn quay theo hai chiều ngược nhau (chiều quay của hai trục đối nghịch nhau: một trục quay thuận kim đồng hồ thì trục kia quay ngược chiều kim đồng hồ).",
    why_wrong: "Bánh răng khớp trong (Internal gear) có hai trục quay CÙNG CHIỀU nhau; Bánh răng Rack (Thanh răng) biến quay thành tịnh tiến; Bánh răng nghiêng ăn khớp trong cũng quay cùng chiều.",
    supplementary: "💡 **Quy tắc chiều quay:** Ăn khớp ngoài: Ngược chiều; Ăn khớp trong: Cùng chiều. Muốn 2 trục ăn khớp ngoài quay cùng chiều thì phải chèn thêm 1 bánh răng trung gian (Idler gear)."
  },
  "WS_MCH_054": {
    why_correct: "Nhận định SAI khi nói về Timing Belt (Đai răng đồng bộ) là: 'So với bánh răng thì tiếng ồn nhỏ'. Ở dải vận tốc quay cao, các răng cao su của Timing Belt va đập liên tục vào rãnh đĩa đai sinh ra tiếng rít khí nén và tiếng ồn tần số cao khá lớn.",
    why_wrong: "A (Chạy êm ở tốc độ thấp), C (Trọng lượng nhẹ, quán tính nhỏ cho phép gia tốc tăng giảm tốc cực nhanh) và D (Có thể dùng cho các đường kính puli nhỏ gọn) là các ưu điểm thực tế của Timing Belt.",
    supplementary: "💡 **Ưu điểm lớn nhất của Timing Belt:** Truyền động đồng bộ góc 100% không bao giờ bị trượt như đai dẹt/đai V, không cần bôi trơn dầu mỡ sạch sẽ cho ngành thực phẩm và bán dẫn."
  },
  "WS_MCH_055": {
    why_correct: "Bánh vít hình trụ (Cylindrical Worm Gear) được gia công cắt gọt bằng dao phay lăn trục vít (Hob) có profin biên dạng ren giống hệt như trục vít ăn khớp với nó.",
    why_wrong: "Hypoid gear và Bevel gear là các bánh răng côn nón giao nhau hoặc chéo trục ô tô.",
    supplementary: "💡 **Bộ truyền Trục vít - Bánh vít:** Cho tỷ số truyền cực lớn chỉ trong 1 cấp (từ 1:10 đến 1:100), làm việc êm ái và có khả năng tự hãm chống đảo ngược khi dừng."
  },
  "WS_MCH_056": {
    why_correct: "Hộp giảm tốc sóng điều hòa (Harmonic Drive) được cấu tạo từ đúng 3 chi tiết cơ bản: (1) Trục tạo sóng elip (Wave Generator), (2) Vành cốc răng mềm biến dạng đàn hồi (Flexspline), (3) Vành đai răng cứng cố định ngoài (Circular Spline). Chi tiết 'Internal' không phải là tên một bộ phận trong cấu tạo Harmonic.",
    why_wrong: "Wave Generator, Circular Spline và Flexspline là 3 phần tử cốt lõi không thể thiếu của mọi cụm giảm tốc Harmonic.",
    supplementary: "💡 **Đặc tính siêu việt của Harmonic Drive:** Độ rơ hồi chuyển bằng đúng 0 (Zero-backlash), tỷ số truyền siêu lớn (1:50 đến 1:160) trong một kích thước siêu nhỏ nhẹ chuyên dùng cho khớp robot hình người."
  },
  "WS_MCH_057": {
    why_correct: "Vật liệu KHÔNG DÙNG để làm sợi gia cường chịu kéo (Tensile Cord) bên trong lõi đai răng Timing Belt là Nylon. Nylon có độ giãn dài đàn hồi lớn nên nếu dùng làm lõi chịu lực sẽ làm đai bị giãn dão bước răng, gây nhảy răng lệch pha.",
    why_wrong: "Thép SUS (Dây cáp thép không gỉ), Sợi Kevlar (Aramid) và Sợi thủy tinh (Fiberglass) là 3 loại vật liệu gia cường chịu lực kéo cao cấp tiêu chuẩn, có độ giãn dài gần như bằng 0.",
    supplementary: "💡 **Cấu tạo Timing Belt:** Lớp răng và lưng đai làm bằng cao su Neoprene hoặc Polyurethane (chống mòn); Lõi giữa nhúng chìm các bó sợi Kevlar/Thép (chịu toàn bộ lực căng kéo)."
  },
  "WS_MCH_058": {
    why_correct: "Phát biểu SAI khi nói về Ổ trục trượt tuyến tính (Linear Bushing / Ổ bi trượt trục tròn) là: 'Thích hợp dùng cho tải trọng cao'. Linear Bushing có các viên bi chuyển động tiếp xúc điểm (Point contact) trên bề mặt trục tròn, do đó diện tích chịu lực rất nhỏ, khả năng chịu tải trọng nặng và mô-men uốn rất kém so với thanh trượt LM Guide.",
    why_wrong: "B (Hệ số ma sát lăn rất nhỏ μ ≈ 0.001~0.003), C (Rất dễ vỡ nứt rãnh bi nếu bị va đập đột ngột) và D (Bi tiếp xúc dạng điểm với trục) đều là các đặc tính kỹ thuật chuẩn xác của Linear Bushing.",
    supplementary: "💡 **Giới hạn ứng dụng:** Linear Bushing chỉ thích hợp cho các cơ cấu trượt tải nhẹ, dẫn hướng dẫn hướng gá kẹp đơn giản có chi phí thấp."
  },
  "WS_MCH_059": {
    why_correct: "Nhận định SAI khi nói về Thanh trượt dẫn hướng LM Guide (Linear Motion Guide) là: 'Có thiết kế nhỏ gọn' (so với ống trượt trục tròn đơn giản thì cụm ray và block trượt LM Guide cồng kềnh, nặng nề và phức tạp hơn nhiều).",
    why_wrong: "A (Không có hiện tượng trượt giật Stick-slip ở tốc độ thấp), C (Có thể tạo tải trọng đặt trước Preload để khử hoàn toàn độ rơ lỏng) và D (Hệ số ma sát lăn cực kỳ nhỏ) là các ưu điểm hàng đầu giúp LM Guide thống trị máy công cụ chính xác.",
    supplementary: "💡 **Tiếp xúc cung tròn (Circular-arc groove):** Rãnh bi của LM Guide có dạng cung tròn 2 điểm hoặc 4 điểm tiếp xúc, cho phép block trượt gánh được tải trọng theo cả 4 hướng (lên, xuống, trái, phải) bằng nhau."
  },
  "WS_MCH_060": {
    why_correct: "Khẳng định SAI về Ball Spline (Trục then hoa bi dẫn hướng) là: 'Có thể duy trì mức độ trong thời gian dài' mà không cần bảo dưỡng. Ball Spline là cơ cấu truyền động cơ học chính xác cao chịu tải xoắn lớn, nếu thiếu mỡ bôi trơn hoặc bị bụi bẩn mài mòn thì độ rơ góc sẽ tăng nhanh chóng.",
    why_wrong: "A (Thiết kế thanh mảnh nhỏ gọn thay thế được cả trục và then), B (Có thể khử khe hở bằng Preload) và D (Có khả năng vừa tịnh tiến vừa truyền mô-men xoắn Torque cực lớn) là các ưu điểm độc nhất vô nhị của Ball Spline.",
    supplementary: "💡 **Ứng dụng Ball Spline:** Chuyên dùng trong trục lên xuống quay của cánh tay robot SCARA công nghiệp và đầu kẹp linh kiện máy dán bề mặt SMT."
  },
  "WS_MCH_061": {
    why_correct: "Phát biểu SAI khi nói về Vít me bi (Ball Screw) là: 'Lực kháng lăn cao'. Ngược lại, do chuyển động thông qua các viên bi thép lăn tròn giữa trục ren và đai ốc nên ma sát của vít me bi là ma sát lăn với hệ số cản cực kỳ thấp (μ ≈ 0.002 - 0.003), hiệu suất truyền động đạt trên 90% (cao gấp 3 lần vít me trượt thông thường).",
    why_wrong: "A (Độ rơ Backlash cực nhỏ tới 0 khi có Preload), B (Hiệu suất truyền năng lượng rất cao) và C (Độ bền mài mòn và độ chính xác tuổi thọ rất cao) đều là các ưu điểm cốt lõi của Vít me bi.",
    supplementary: "💡 **Khả năng đảo chiều:** Do lực cản lăn quá nhỏ, vít me bi không có tính tự hãm. Tải trọng dọc trục có thể tự động đẩy xoay trục vít ngược lại, do đó động cơ servo điều khiển trục Z bắt buộc phải có phanh điện từ (Brake)."
  },
  "WS_MCH_062": {
    why_correct: "Bộ phận của Block trượt LM Guide giúp dẫn hướng và chuyển tiếp dòng bi tuần hoàn khép kín giữa rãnh chịu tải và rãnh hồi bi không tải là Nắp đầu hồi bi (End Plate / End Cap).",
    why_wrong: "LM Rail là thanh ray dẫn hướng; LM Block là thân con trượt; Base plate là tấm đế gá.",
    supplementary: "💡 **Cơ chế tuần hoàn bi:** Bi lăn từ đầu con trượt đến cuối con trượt, chui vào đường hầm cong trong End Plate để lộn ngược trở lại rãnh hồi, tạo thành chu trình chuyển động vô tận không giới hạn hành trình."
  },
  "WS_MCH_063": {
    why_correct: "Trong các phương pháp phân loại Vít me bi tiêu chuẩn của các hãng (như THK, NSK), 'Hình dạng trục' KHÔNG PHẢI là một tiêu chí phân loại chính ngạch (vì mọi trục vít me bi đều có dạng hình trụ tròn ren ngoài cơ bản).",
    why_wrong: "A (Phương pháp tuần hoàn bi: ống hồi ngoài, nắp đậy, lệch hướng), C (Kiểu tải trước Preload: đơn nut, đôi nut, dịch bước ren) và D (Bước dẫn Lead & Đường kính danh nghĩa trục) là 3 tiêu chí phân loại chuẩn mực nhất trong catalogue kỹ thuật.",
    supplementary: "💡 **Ví dụ mã hóa Vít me bi THK:** `BNK 1510-5.6G0+400LC5` (Đường kính 15mm, Lead 10mm, cấp chính xác C5, chiều dài 400mm)."
  },
  "WS_MCH_064": {
    why_correct: "Trong các phương thức tuần hoàn bi của Vít me bi, Kiểu lệch hướng (Deflector Type / Hồi bi bên trong) có các miếng dẫn hướng bi nhỏ đặt ngay bên trong rãnh đai ốc, bi chỉ chuyển động tuần hoàn trong đúng 1 vòng ren rồi nhảy ngược lại, do đó đường kính ngoài của Đai ốc (Nut) là nhỏ gọn nhất trong tất cả các loại.",
    why_wrong: "Kiểu ống hồi (Return pipe type) có ống kim loại nổi gồ ghề bên ngoài thân đai ốc; Kiểu nắp đậy (End cap type) và Double nut đều có kích thước thân đai ốc to hơn.",
    supplementary: "💡 **Ứng dụng Deflector Type:** Rất thích hợp cho các máy móc bán dẫn, thiết bị y tế có không gian lắp đặt bàn trượt siêu nhỏ hẹp."
  },
  "WS_MCH_065": {
    why_correct: "Phương pháp tạo lực ép tải trước (Preload) cho Vít me bi có sử dụng miếng đệm căn (Spacer) đặt ở giữa hai đai ốc là Phương pháp Đôi Đai Ốc (Double Nut Preload Method). Bằng cách mài chiều dày miếng đệm mỏng hơn hoặc dày hơn khe hở, hai đai ốc sẽ bị kéo căng hoặc nén ép ngược chiều nhau để triệt tiêu hoàn toàn khe hở dọc trục.",
    why_wrong: "Offset Preload dùng một đai ốc duy nhất có bước ren gia công lệch tâm; Static pressure là thủy tĩnh.",
    supplementary: "💡 **Độ cứng vững vững chắc:** Phương pháp Double Nut cho phép tạo lực tải trước lớn (đến 10% tải trọng động C), mang lại độ cứng vững hướng trục cao nhất cho máy phay gia công nặng."
  },
  "WS_MCH_066": {
    why_correct: "Hình ảnh thể hiện phương pháp Offset Preload (Tải trước dời bước rãnh / Đai ốc đơn dời pha): Sử dụng một đai ốc duy nhất, nhưng ở rãnh ren giữa thân đai ốc được gia công dịch chuyển bước đi một khoảng vi sai micromét ΔL để các hàng bi tì chặt vào hai phía đối diện của rãnh ren trục vít.",
    why_wrong: "Double Nut bắt buộc phải có 2 đai ốc tách rời kẹp vòng đệm ở giữa; Static pressure dùng màng dầu áp lực.",
    supplementary: "💡 **Ưu điểm Offset Preload:** Thân đai ốc ngắn hơn và nhẹ hơn nhiều so với Double Nut nhưng vẫn khử sạch hoàn toàn Backlash (Zero Backlash)."
  },
  "WS_MCH_067": {
    why_correct: "Phân loại theo phương thức công nghệ chế tạo thân trục Vít me bi thì có tất cả đúng 2 loại chính: (1) Vít me bi cán định hình (Rolled Ball Screw - gia công bằng phương pháp cán ép nguội con lăn, cấp chính xác C7~C10, giá rẻ) và (2) Vít me bi mài chính xác (Ground / Precision Ball Screw - gia công bằng máy mài CNC chính xác cao, cấp C0~C5, dùng cho máy công cụ).",
    why_wrong: "1, 3, 4 loại là các phân chia sai về mặt công nghệ chế tạo cơ khí chuẩn.",
    supplementary: "💡 **Độ chính xác tích lũy:** Vít me cán sai số bước ~ 50 μm / 300mm; Vít me mài cấp C3 sai số bước chỉ dưới 8 μm / 300mm."
  },
  "WS_MCH_068": {
    why_correct: "Phát biểu SAI khi nói về phương thức hồi bi kiểu nắp đậy (End Cap Type) của Vít me bi là: 'Nut phổ biến đơn giản'. Phương thức End Cap có cấu trúc nắp đậy đầu chuyển hướng dòng bi ở hai đầu đai ốc phức tạp, chuyên dùng cho các loại vít me bi có bước dẫn siêu lớn (High-Lead / Super-High Lead).",
    why_wrong: "A (Phù hợp nhất với chuyển động tịnh tiến tốc độ siêu cao hàng chục m/phút), B (Là thiết kế chuyên dụng cho High-lead Nut) và C (Bi chuyển động tuần hoàn liên tục không giới hạn) đều là các ưu điểm thiết kế của loại End Cap.",
    supplementary: "💡 **Vít me bước lớn (High Lead):** Tỷ số bước Lead / Đường kính d có thể bằng 1 hoặc thậm chí lớn hơn 1 (ví dụ trục phi 20mm bước lead 20mm hoặc 40mm)."
  },
  "WS_MCH_069": {
    why_correct: "Trục then hoa bi dạng Straight-Sided Spline (Hình A) có các rãnh bi dẫn hướng chạy thẳng song song dọc theo phương đường sinh của trục tròn, cho phép may-ơ bi trượt tịnh tiến êm ái mà không bị xoay góc.",
    why_wrong: "Các hình vẽ khác thể hiện then hoa xoắn ốc (Spiral spline) hoặc rãnh bi vòng tròn.",
    supplementary: "💡 **Cấu tạo Ball Spline:** Trên thân trục có 3 đến 6 rãnh bi hình bán nguyệt mài chuẩn xác đối xứng qua tâm, các viên bi tiếp xúc góc ôm chặt lấy rãnh then."
  },
  "WS_MCH_070": {
    why_correct: "Phương thức dẫn động bảo vệ ổ trượt sử dụng Phớt mê cung (Labyrinth Seal) là cơ cấu chắn bụi không tiếp xúc (Hình B), tạo ra các khe hở zíc zắc nhiều tầng nếp gấp hẹp để ngăn phoi tiện, bụi bẩn và tia nước xâm nhập vào rãnh bi mà hoàn toàn không sinh ma sát mài mòn.",
    why_wrong: "Phớt tiếp xúc (Lip Seal / Rubber Seal) cọ xát trực tiếp vào mặt kim loại gây ma sát sinh nhiệt ở tốc độ cao.",
    supplementary: "💡 **Ưu điểm Labyrinth Seal:** Ma sát bằng 0 tuyệt đối, không bị mòn theo thời gian, cho phép trục quay với vận tốc cực hạn trên 30.000 rpm."
  },
  "WS_MCH_071": {
    why_correct: "Cơ cấu dẫn động chuyển động thẳng được ứng dụng rộng rãi trên mọi phương hướng (phương ngang song song, phương đứng, phương chéo nghiêng) với yêu cầu giảm thiểu tối đa ma sát và độ cứng vững uốn lật cao nhất chính là Hệ thanh trượt dẫn hướng LM Guide.",
    why_wrong: "Linear Bush chỉ dẫn hướng phương ngang tải nhẹ, không chịu được mô-men lật; Ball Screw là cơ cấu truyền lực kéo đẩy; Ball Spline là trục then hoa.",
    supplementary: "💡 **Khả năng chịu tải mọi hướng:** Cấu trúc rãnh lăn cung tròn của LM Guide giúp phân bổ ứng suất tiếp xúc đồng đều bất kể tải trọng tác dụng từ trên xuống, từ dưới kéo lên hay lực xô ngang từ hai vách bên."
  },
  "WS_MCH_072": {
    why_correct: "Loại mỡ bôi trơn chuyên dụng được sử dụng nhiều nhất cho các hệ thống ray trượt và vít me bi trong môi trường Phòng sạch (Cleanroom Class 1 ~ Class 100 của nhà máy bán dẫn, sản xuất màn hình OLED) là Mỡ AFE (AFE-CA Grease của hãng THK). Mỡ này có thành phần dầu tổng hợp đặc biệt hầu như không phát sinh bụi hạt và lượng bay hơi cực thấp.",
    why_wrong: "AFF là mỡ dải tốc độ cao; DR-07 và DSF-3000 là các dòng mỡ nhiệt độ cao hoặc chân không đặc thù khác.",
    supplementary: "💡 **Tiêu chuẩn phòng sạch:** Mỡ AFE sử dụng chất làm đặc gốc Urê chất lượng cao, hạn chế tối đa việc phát tán các hạt vi mô (hạt bụi > 0.1 μm) vào không khí phòng sạch."
  },
  "WS_MCH_073": {
    why_correct: "Thành phần cấu tạo của Mỡ bôi trơn (Grease) tiêu chuẩn bao gồm: (1) Dầu gốc (Base Oil chiếm 70% - 90%), (2) Chất làm đặc (Thickener chiếm 10% - 20%), và (3) Các chất phụ gia chức năng (Additives chiếm 1% - 10%). 'Chất chống đông mỡ' KHÔNG PHẢI là một thành phần cơ bản của mỡ bôi trơn.",
    why_wrong: "Chất làm đặc cô đặc (xà phòng liti, canxi, urê), dầu khoáng/dầu tổng hợp D-ester và các chất xúc tác/phụ gia (chống oxy hóa, chịu cực áp EP) là các thành phần cấu thành chính ngạch của mỡ.",
    supplementary: "💡 **Mô hình cấu trúc mỡ bôi trơn:** Hãy tưởng tượng chất làm đặc như một miếng bọt biển xốp xơ giữ chặt các giọt dầu bôi trơn lỏng bên trong lỗ xốp; khi cơ cấu chuyển động chịu tải ép, dầu sẽ rỉ ra bôi trơn rồi thấm hút trở lại."
  },
  "WS_MCH_074": {
    why_correct: "Tác dụng của bôi trơn bao gồm: giảm ma sát mòn, làm mát tản nhiệt, làm kín khe hở chống bụi, chống oxy hóa rỉ sét và làm sạch cuốn trôi cặn bẩn. Chức năng 'Làm lạnh' (Cooling down to refrigeration level) là KHÔNG ĐÚNG (chất bôi trơn chỉ có khả năng làm mát tuần hoàn mang nhiệt lượng đi, không thể tự làm lạnh hạ nhiệt xuống dưới nhiệt độ môi trường).",
    why_wrong: "Làm kín, chống oxy hóa và làm sạch cặn mài mòn đều là các tác dụng bảo vệ sống còn của chất bôi trơn.",
    supplementary: "💡 **Chức năng làm mát (Cooling effect):** Dầu bôi trơn tuần hoàn liên tục hấp thụ nhiệt sinh ra do ma sát tại các bề mặt tiếp xúc kim loại và mang về bình tản nhiệt giải nhiệt ra không khí."
  },
  "WS_MCH_075": {
    why_correct: "Tác dụng của màng bôi trơn có tính chất vô cùng quan trọng khi hệ thống phải chịu tải trọng rung động và tải trọng va đập đột ngột là 'Phân tán áp lực' (Pressure Distribution / Đệm êm thủy lực). Lớp màng dầu/mỡ có độ nhớt đàn hồi giúp phân tán ứng suất tập trung tại điểm tiếp xúc sang diện tích rộng hơn, triệt tiêu xung lực va đập.",
    why_wrong: "Làm kín ngăn rò rỉ; Làm mát giải nhiệt; Giảm ma sát mòn khi chuyển động tĩnh đều.",
    supplementary: "💡 **Bôi trơn thủy động (Elastohydrodynamic Lubrication - EHL):** Dưới áp suất cục bộ cực cao hàng nghìn bar tại điểm tiếp xúc bi, dầu bôi trơn tạm thời hóa đặc như thủy tinh đàn hồi, phân tán tải trọng bảo vệ kim loại không bị mẻ rỗ."
  },
  "WS_MCH_076": {
    why_correct: "Phát biểu KHÔNG ĐÚNG về dầu bôi trơn dạng lỏng là: 'Chịu được tốc độ vòng quay cao' (khi tốc độ vòng quay quá cao mà sử dụng dầu lỏng có độ nhớt không phù hợp thì màng dầu sẽ bị lực ly tâm văng ra ngoài hoặc bị ma sát cắt lỏng sinh nhiệt sủi bọt phá hủy màng dầu, đòi hỏi phải có hệ thống phun sương dầu Oil-Air chuyên biệt).",
    why_wrong: "A (Có độ nhớt phù hợp trong điều kiện nhiệt độ làm việc), B (Chịu được ma sát giới hạn khi màng dầu mỏng) và C (Độ bền nhiệt, chống oxy hóa và tính trơ hóa học cao) là các tính chất yêu cầu tiêu chuẩn của dầu bôi trơn.",
    supplementary: "💡 **Chỉ số độ nhớt (Viscosity Index - VI):** Chỉ số VI càng cao thì độ nhớt của dầu càng ít bị biến đổi khi nhiệt độ môi trường thay đổi từ lạnh sang nóng."
  },
  "WS_MCH_077": {
    why_correct: "Các loại dầu gốc (Base Oil) sử dụng để sản xuất dầu bôi trơn công nghiệp bao gồm đầy đủ: Dầu khoáng gốc Paraffinic (gốc no mạch thẳng), Dầu khoáng gốc Naphthenic (gốc no vòng thơm), và Dầu gốc hỗn hợp hoặc dầu tổng hợp (Synthetic Oil: PAO, Ester, Silicone). Do đó đáp án chuẩn là: 'Tất cả các phương án trên'.",
    why_wrong: "A, B, C đều chỉ là từng nhóm dầu gốc đơn lẻ.",
    supplementary: "💡 **Ưu điểm dầu gốc tổng hợp (Synthetic):** Chịu nhiệt độ cực cao hoặc cực lạnh (-40°C đến +200°C), tuổi thọ chống oxy hóa gấp 3 đến 5 lần so với dầu gốc khoáng thông thường."
  },
  "WS_MCH_078": {
    why_correct: "Thành phần có chức năng tạo mạng lưới cấu trúc gel liên kết để giữ chặt các giọt dầu lỏng và duy trì mỡ ở trạng thái nửa lỏng nửa đặc (trạng thái bán rắn dẻo) chính là Chất làm đặc / Chất làm cô đặc (Thickener).",
    why_wrong: "Chất chống đông là phụ gia hạ điểm đông đặc; Chất làm mát là dung môi tản nhiệt; Chất xúc tác làm tăng tốc độ phản ứng.",
    supplementary: "💡 **Các loại chất làm đặc phổ biến:** Xà phòng kim loại Lithium (chịu nước và đa dụng nhất), Xà phòng Phức Lithium (chịu nhiệt độ cao), Gốc Urê (tuổi thọ siêu dài trong động cơ điện)."
  },
  "WS_MCH_079": {
    why_correct: "Đặc điểm KHÔNG ĐÚNG của phương thức bôi trơn bằng Dầu là: 'Hệ thống bôi trơn đơn giản'. Ngược lại hoàn toàn, hệ thống bôi trơn dầu đòi hỏi kết cấu vô cùng phức tạp: phải có bình chứa, bơm áp lực, đường ống dẫn đi và về, bộ lọc dầu, két làm mát và hệ thống phớt chặn kín dầu (Oil seal) rất đắt tiền để tránh rò rỉ dầu ra sàn xưởng.",
    why_wrong: "B (Cần lượng dầu tuần hoàn lớn), C (Cần cơ cấu làm kín phức tạp) và D (Có ưu điểm vượt trội là có thể liên tục lọc và loại bỏ mạt sắt tạp chất ra khỏi ổ trục) là các tính chất thực tế chính xác của bôi trơn dầu.",
    supplementary: "💡 **So sánh độ phức tạp:** Bôi trơn mỡ chỉ cần bơm mỡ vào nắp gối đỡ là xong (hệ thống cực kỳ đơn giản); Bôi trơn dầu tuần hoàn đòi hỏi một trạm nguồn thủy lực bôi trơn hoàn chỉnh."
  },
  "WS_MCH_080": {
    why_correct: "So sánh chính xác giữa bôi trơn Mỡ và Dầu: 'Mỡ bị giới hạn ở tốc độ quay trung bình (do ma sát nội tại của mỡ sinh nhiệt lớn và lực ly tâm văng mỡ), trong khi Dầu bôi trơn có thể đáp ứng và sử dụng cho các cơ cấu có tốc độ vòng quay rất cao' (như trục chính Spindle CNC, tua-bin khí).",
    why_wrong: "A sai vì mỡ không thể tự lọc bỏ tạp chất (mạt kim loại bị kẹt lại trong mỡ); C sai vì dầu mỡ đều có thể bị thoái hóa đóng cặn bùn (Sludge); D sai vì làm kín dầu phức tạp hơn nhiều so với mỡ.",
    supplementary: "💡 **Hệ số tốc độ d_m × n:** Mỡ bôi trơn thường chỉ dùng cho d_m × n < 500.000; Với d_m × n > 1.000.000 bắt buộc phải chuyển sang bôi trơn bằng dầu (Oil-Air hoặc Oil-Mist)."
  },
  "WS_MCH_081": {
    why_correct: "Trong các phương pháp chiếu biểu diễn hình học trên bản vẽ kỹ thuật cơ khí tiêu chuẩn (TCVN / ISO / JIS), ba hình chiếu cơ bản trực giao vuông góc là: Hình chiếu đứng (Front view), Hình chiếu bằng (Top view) và Hình chiếu cạnh (Side view). Thuật ngữ 'Hình chiếu nghiêng' KHÔNG PHẢI là một trong các phương pháp chiếu góc nhìn chính.",
    why_wrong: "Hình chiếu đứng, hình chiếu bằng và hình chiếu cạnh là hệ quy chiếu 3 mặt phẳng vuông góc kinh điển trong vẽ kỹ thuật.",
    supplementary: "💡 **Phương pháp chiếu góc phần tư:** Phương pháp chiếu góc thứ nhất (First Angle Projection - châu Âu, Việt Nam); Phương pháp chiếu góc thứ ba (Third Angle Projection - Nhật Bản, Hàn Quốc, Mỹ)."
  },
  "WS_MCH_082": {
    why_correct: "Theo tiêu chuẩn kích thước khổ giấy quốc tế ISO 216: Khổ giấy A0 có diện tích đúng bằng 1 m² (kích thước 841 × 1189 mm). Khi gấp đôi lần lượt: A0 = 2 A1 = 4 A2 = 8 A3 = 16 A4. Do đó, khổ giấy A0 gấp đúng 16 lần so với khổ giấy A4.",
    why_wrong: "2 lần là khổ A3 so với A4; 4 lần là A2 so với A4; 8 lần là A1 so với A4.",
    supplementary: "💡 **Công thức tỷ lệ khổ giấy ISO:** Tỷ số diện tích giữa 2 khổ liền kề là 2. Tỷ lệ giữa A_n và A_k là: 2^(k - n). Với A0 và A4: 2^(4 - 0) = 2⁴ = 16 lần."
  },
  "WS_MCH_083": {
    why_correct: "Trong bản vẽ kỹ thuật, khi một hình biểu diễn chi tiết được vẽ mang tính minh họa hình dáng tổng thể mà kích thước hình vẽ hoàn toàn không theo tỷ lệ thu phóng số học so với kích thước thực tế thì được ký hiệu chữ viết tắt là 'NS' (viết tắt của tiếng Anh: Not to Scale - Không theo tỷ lệ).",
    why_wrong: "NJ, NB, NX là các tổ hợp ký tự ngẫu nhiên không có ý nghĩa tiêu chuẩn trong vẽ kỹ thuật.",
    supplementary: "💡 **Các tỷ lệ chuẩn trên bản vẽ:** Nguyên hình (1:1); Tỷ lệ thu nhỏ (1:2, 1:5, 1:10); Tỷ lệ phóng to (2:1, 5:1, 10:1); Không theo tỷ lệ (NTS hoặc NS)."
  },
  "WS_MCH_084": {
    why_correct: "Theo tiêu chuẩn kích thước giấy ISO 216, kích thước tiêu chuẩn của Khổ giấy A2 là: 420 × 594 mm.",
    why_wrong: "297 × 420 mm là kích thước khổ giấy A3; 210 × 297 mm là kích thước khổ giấy A4; 594 × 841 mm là khổ giấy A1.",
    supplementary: "💡 **Bảng kích thước khổ giấy chuỗi A (mm):** A0 (841 × 1189) → A1 (594 × 841) → A2 (420 × 594) → A3 (297 × 420) → A4 (210 × 297)."
  },
  "WS_MCH_085": {
    why_correct: "Bản vẽ kỹ thuật (Technical Drawing) được định nghĩa là phương tiện ngôn ngữ kỹ thuật dùng để: 'Biểu thị chính xác các đồ vật, chi tiết kết cấu thực tế từ không gian 3 chiều vào mặt phẳng đồ thị 2 chiều theo các quy tắc chiếu hình học và tiêu chuẩn quốc tế thống nhất'.",
    why_wrong: "A chỉ là ý kiến chủ quan; B và C chỉ là ứng dụng gia công hẹp, không phản ánh đầy đủ bản chất định nghĩa của bản vẽ kỹ thuật.",
    supplementary: "💡 **Ngôn ngữ của kỹ sư:** Bản vẽ kỹ thuật truyền đạt đầy đủ mọi thông tin về hình dáng, kích thước, dung sai lắp ghép, độ nhám bề mặt và yêu cầu nhiệt luyện để chế tạo chính xác chi tiết."
  },
  "WS_MCH_086": {
    why_correct: "Trong thiết kế cơ khí và kỹ thuật chế tạo máy hiện đại ngày nay, phương pháp thiết lập bản vẽ thông dụng và chuẩn mực nhất là sử dụng phần mềm máy tính: 'Phương pháp AutoCAD' (hoặc các hệ thống CAD 2D/3D tiên tiến).",
    why_wrong: "Phương pháp gia công là quy trình chế tạo; Phương pháp vẽ tay thủ công bằng thước kẻ bút chì đã lỗi thời trong sản xuất công nghiệp.",
    supplementary: "💡 **Chuyển đổi số CAD/CAM:** Từ bản vẽ thiết kế trên phần mềm CAD, dữ liệu được chuyển thẳng sang phần mềm CAM để lập trình đường chạy dao xuất mã G-code nạp xuống máy phay CNC."
  },
  "WS_MCH_087": {
    why_correct: "Loại đường nét vẽ được vẽ tự do bằng tay không có quy tắc hình học cứng nhắc là 'Đường cắt đứt / Đường lượn sóng' (Break line / Continuous thin freehand line), dùng để giới hạn một phần hình cắt hoặc ngắt một đoạn chi tiết quá dài trên bản vẽ.",
    why_wrong: "Đường kích thước và đường chỉ thị bắt buộc phải là đường thẳng mảnh vẽ bằng thước; Đường xử lý bề mặt có ký hiệu chuẩn.",
    supplementary: "💡 **Quy cách đường lượn sóng:** Nét vẽ liền mảnh có độ dày bằng 1/2 nét liền đậm, vẽ uốn lượn tự nhiên không cắt qua đường bao thấy."
  },
  "WS_MCH_088": {
    why_correct: "Đường nét đứt khúc mảnh (Dashed thin line / Nét đứt) có bề dày bằng khoảng 1/2 bề dày của đường viền bao nhìn thấy, được định nghĩa trong vẽ kỹ thuật là 'Đường ẩn' (Hidden Line), dùng để biểu thị các đường bao, cạnh khuất nằm phía sau không nhìn thấy của vật thể.",
    why_wrong: "Đường cắt phẳng dùng nét gạch chấm đậm ở hai đầu; Đường trung tâm tâm trục dùng nét gạch chấm mảnh; Đường chia là ranh giới phân vùng.",
    supplementary: "💡 **Quy cách nét đứt (Hidden line):** Gồm các gạch ngắn dài khoảng 3 - 4mm cách đều nhau một khoảng hở 1mm. Nét đứt phải bắt đầu và kết thúc tiếp xúc rõ ràng với đường nét thấy."
  },
  "WS_MCH_089": {
    why_correct: "Hành động 'Sử dụng dụng cụ phù hợp' (chọn đúng chủng loại kích cỡ công cụ cho từng công việc) là biện pháp an toàn bắt buộc, KHÔNG PHẢI là nguyên nhân gây ra tai nạn lao động.",
    why_wrong: "A (Dùng lực quá mức cho phép làm gãy vỡ dụng cụ), B (Do các mảnh phoi kim loại văng bắn vào mắt) và D (Sử dụng dụng cụ khi tay nghề chưa thành thạo) đều là các nguyên nhân hàng đầu gây chấn thương tai nạn lao động với công cụ cầm tay.",
    supplementary: "💡 **Quy tắc 5S và an toàn công cụ:** Kiểm tra dụng cụ trước khi làm → Chọn đúng cỡ cờ-lê mỏ lết → Mang kính bảo hộ chống phoi văng → Không nối dài tay đòn cờ-lê."
  },
  "WS_MCH_090": {
    why_correct: "Hình C là thao tác SAI khi sử dụng thước kẹp (Vernier Caliper): Người đo đặt thước bị nghiêng lệch góc so với đường sinh hình học của chi tiết hoặc dùng phần đầu nhọn mũi kẹp tì lực quá mạnh làm biến dạng mỏ đo dẫn tới sai số đo lường nghiêm trọng.",
    why_wrong: "Các hình A, B, D thể hiện đúng quy cách: mặt mỏ đo áp sát vuông góc với bề mặt phôi, lực tì êm dịu thông qua con lăn ngón tay cái.",
    supplementary: "💡 **Thao tác đo thước kẹp chuẩn:** Làm sạch mỏ đo và chi tiết → Đặt ngàm kẹp ôm sâu vào thân phôi → Giữ thước vuông góc 90° → Đọc kết quả trực diện mắt nhìn vuông góc với vạch chia."
  },
  "WS_MCH_091": {
    why_correct: "Thước kẹp tiêu chuẩn (Vernier Caliper) chuyên dùng để: Đo đường kính ngoài/chiều dài, Đo đường kính trong/khoảng cách lỗ, và Đo chiều sâu bậc (Depth measurement). Thao tác 'Đo chiều đứng vật thể' với độ chính xác cao trên bàn máp KHÔNG PHẢI là chức năng chuyên dụng của thước kẹp (công việc này bắt buộc phải sử dụng Thước đo cao - Height Gauge).",
    why_wrong: "A, B, D là 3 chức năng đo lường cơ bản 3 chiều (ngoài, trong, sâu) của thước kẹp.",
    supplementary: "💡 **4 công dụng của Thước kẹp:** Đo ngoài (Mỏ kẹp lớn); Đo trong (Mỏ kẹp nhỏ); Đo sâu (Thanh đo đuôi); Đo bậc (Mặt phẳng đuôi thân thước)."
  },
  "WS_MCH_092": {
    why_correct: "Phát biểu SAI về phương pháp thao tác khi cưa tay kim loại là: 'Lưỡi cưa có răng hướng phía trong là lưỡi cưa an toàn'. Theo quy chuẩn kỹ thuật an toàn gá lắp cưa sắt cầm tay, toàn bộ các răng cưa bắt buộc phải lắp HƯỚNG VỀ PHÍA TRƯỚC (hướng đẩy cưa đi), vì hành trình cắt phoi kim loại là hành trình đẩy tới; hành trình kéo về chỉ là hành trình chạy không tải.",
    why_wrong: "A (Chọn số răng cưa trên inch phù hợp với chiều dày vật liệu), C (Sử dụng trọn vẹn toàn bộ chiều dài lưỡi cưa để mòn đều) và D (Tra một lượng nhỏ dầu làm mát bôi trơn lên mạch cưa) đều là các thao tác cưa nguội chuẩn mực.",
    supplementary: "💡 **Quy tắc chọn bước răng cưa:** Cưa vật liệu mềm/dày: chọn lưỡi cưa răng thưa (18 răng/inch); Cưa tấm mỏng/ống thép mỏng: chọn lưỡi cưa răng mịn (24 đến 32 răng/inch) để luôn có tối thiểu 2-3 răng tiếp xúc cùng lúc trên thành ống."
  },
  "WS_MCH_093": {
    why_correct: "Trong Hệ đơn vị quốc tế (Hệ SI), đơn vị đo lường nhiệt độ nhiệt động lực học cơ bản là Kelvin, ký hiệu là K.",
    why_wrong: "Mole là đơn vị lượng chất; Ampe (A) là đơn vị cường độ dòng điện; Radian (rad) là đơn vị đo góc phẳng.",
    supplementary: "💡 **Quy đổi nhiệt độ:** T(K) = t(°C) + 273.15. 0 Kelvin (-273.15°C) là độ không tuyệt đối, tại đó toàn bộ chuyển động nhiệt của phân tử ngừng lại."
  },
  "WS_MCH_094": {
    why_correct: "Dựa vào hình ảnh vạch đo trên thân thước panme/thước kẹp: Thước chính hiển thị vạch 4 mm, và vạch véc-ni (du xích) trùng khớp hoàn hảo ở vạch số 4 (độ chính xác 0.1mm), do đó kết quả đo được là: 4.0 mm + 0.4 mm = 4.4 mm.",
    why_wrong: "4.5 mm bị lệch nửa bước; 20 mm và 10 mm là các giá trị đọc nhầm thang chia.",
    supplementary: "💡 **Cách đọc thước kẹp véc-ni (0.05mm hoặc 0.1mm):** Đọc phần nguyên milimét trên thước chính tại vị trí trước vạch 0 của du xích → Tìm vạch trên du xích trùng thẳng hàng nhất với một vạch bất kỳ của thước chính → Cộng hai giá trị lại."
  },
  "WS_MCH_095": {
    why_correct: "Chi tiết lò xo bằng thép không gỉ dạng ren xoắn dùng để cấy vào lỗ ren của các vật liệu mềm (nhôm, magie, đồng, nhựa, gang) nhằm gia cố độ bền liên kết ren, chống tuôn trờn cháy ren khi tháo lắp bu lông nhiều lần được gọi là Ren cấy / Ống ren lò xo (Coil Insert / Helicoil).",
    why_wrong: "Insert Coil Handle là tay quay gá lắp ren cấy; Dụng cụ tháo ống là thiết bị rút nhổ coil hỏng; Back tap là taro sửa ren từ trong ra.",
    supplementary: "💡 **Quy trình cấy Helicoil:** Khoan lỗ theo tiêu chuẩn → Dùng taro STI chuyên dụng tạo ren ngoài → Dùng cần xoay đưa cuộn Coil Insert vào → Bẻ gãy chốt đuôi định vị (Tang)."
  },
  "WS_MCH_096": {
    why_correct: "Dụng cụ đo cơ khí trong hình là Panme đo ngoài điện tử / Thước đo vòng ngoài điện tử (Digimatic Outside Micrometer), có màn hình tinh thể lỏng LCD hiển thị trực tiếp kết quả đo với độ chính xác cực cao lên tới 0.001 mm (1 μm).",
    why_wrong: "Digimatic Calipers là thước kẹp điện tử; Digimatic Height Gauges là máy đo chiều cao trên bàn máp.",
    supplementary: "💡 **Núm cóc vi động (Ratchet Stop):** Khi đo panme, khi mỏ đo tiếp xúc phôi phải vặn núm cóc xoay kêu 3 tiếng 'tách tách tách' để đảm bảo lực đo luôn không đổi (khoảng 5 - 10 N), tránh sai số do lực tay người."
  },
  "WS_MCH_097": {
    why_correct: "Giá trị đo lường hiển thị trực quan trên màn hình số điện tử của thước đo trong hình ảnh là: 154.45 mm.",
    why_wrong: "172.00 mm, 145.00 mm, 154.00 mm là các kết quả đọc sai hoặc thiếu phần thập phân.",
    supplementary: "💡 **Chức năng Zero/ABS trên thước điện tử:** Nút Origin/Zero cho phép thiết lập điểm gốc 0 tại bất kỳ vị trí nào để thực hiện phép đo so sánh vi sai (Incremental measurement)."
  },
  "WS_MCH_098": {
    why_correct: "Dụng cụ cầm tay thường được gọi là 'Kìm Chết' có cơ cấu lẫy khóa tự giữ hàm kẹp chặt bu lông đai ốc, thanh thép và ống tròn có tên kỹ thuật là Kìm có răng khóa / Kìm bấm chết (Locking Pliers / Vise-Grip).",
    why_wrong: "Long Nose pliers là kìm mỏ nhọn; Nipper cutting Pliers là kìm cắt chân linh kiện; Side cutting pliers là kìm cắt cạnh tuốt dây điện.",
    supplementary: "💡 **Cơ cấu khóa đòn bẩy quá tâm (Over-center toggle):** Khi bóp kìm vượt qua điểm chết, cơ cấu tự khóa chặt hàm kẹp mà người thợ không cần tiếp tục bóp giữ tay, có thể điều chỉnh độ mở hàm bằng vít ở đuôi cán."
  },
  "WS_MCH_099": {
    why_correct: "Dụng cụ cắt gọt ren cầm tay chuyên dùng để tạo ren ngoài trên bề mặt phôi thanh trụ tròn hoặc tạo ren bu lông được gọi là Bàn ren (Dies / Bàn ren tròn gá vào tay quay bàn ren Die Handle).",
    why_wrong: "Mũi taro (Tap) và tay quay taro (Tap handle) dùng để tạo ren TRONG (lỗ ren, đai ốc); Surface plate là bàn máp chuẩn; Files là dũa cơ khí.",
    supplementary: "💡 **Quy tắc phân biệt:** 'Taro ren trong - Bàn ren ren ngoài'. Khi cắt ren ngoài bằng bàn ren, phải vát mép đầu phôi 45° và tra dầu bôi trơn cắt gọt liên tục."
  },
  "WS_MCH_100": {
    why_correct: "Trong bảng quy đổi đơn vị đo chiều dài: 1 km = 1.000 m; 1 m = 1.000 mm. Do đó: 1 km = 1.000 × 1.000 mm = 1.000.000 mm (tức là gấp 10⁶ lần milimét). Phương án đúng tương ứng với Đáp án B trên sơ đồ minh họa quy đổi đơn vị.",
    why_wrong: "10³ lần là quy đổi từ mét sang milimét; 10⁹ lần là quy đổi từ kilômét sang micromét.",
    supplementary: "💡 **Chuỗi quy đổi đo lường cơ khí:** 1 km = 10³ m = 10⁶ mm = 10⁹ μm = 10¹² nm."
  }
};
