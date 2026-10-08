// Knowledge Base for Pneumatics Systems (100 questions: WS_PNE_001 - WS_PNE_100)
// Pneumatic circuits, compressors, thermodynamics, valves, actuators, and vacuum technology.

module.exports = {
  "WS_PNE_001": {
    why_correct: "Cấu trúc sơ đồ khối cơ bản của một hệ thống khí nén công nghiệp hoàn chỉnh gồm 4 tầng chức năng nối tiếp nhau: (1) Nguồn động lực & Khối tạo khí áp (Máy nén khí) → (2) Khối xử lý khí nén FRL (Lọc, điều áp, bôi trơn) → (3) [Bộ phận điều khiển - Control Elements] (Các van đảo chiều, van logic, van tiết lưu) → (4) Bộ phận chấp hành (Xilanh, động cơ khí nén). Ô điền vào dấu ????? chính là 'Bộ phận điều khiển'.",
    why_wrong: "Nguồn động lực và Bộ phận phát sinh khí áp nằm ở đầu nguồn; Bộ phận chuyển động / cơ cấu chấp hành nằm ở cuối hệ thống.",
    supplementary: "💡 **Dòng truyền năng lượng khí nén:** Năng lượng cơ học (Động cơ máy nén) → Áp năng của khí nén → Khối điều khiển van → Cơ năng tại xilanh/động cơ."
  },
  "WS_PNE_002": {
    why_correct: "Khẳng định 'Có thể nhận được lực lớn nhờ van tăng áp' KHÔNG PHẢI là ưu điểm tiêu biểu của công nghệ khí nén. Khí nén làm việc ở dải áp suất tương đối thấp (thường chỉ 6 ~ 8 bar = 0.6 ~ 0.8 MPa), nên lực đẩy của xilanh khí nén bị giới hạn nhiều (chỉ vài trăm đến vài nghìn Newton). Nếu cần lực ép cực lớn hàng chục đến hàng trăm tấn, bắt buộc phải dùng công nghệ Thủy lực (áp suất 100 ~ 350 bar).",
    why_wrong: "B (Điều khiển logic đơn giản, an toàn cháy nổ), C (Truyền tải năng lượng qua đường ống rất đơn giản đến mọi ngóc ngách nhà xưởng) và D (Khí nén có thể tích lũy dự trữ rất dễ dàng trong bình tích áp mà không lo quá tải) đều là các ưu điểm thực tế vượt trội của khí nén.",
    supplementary: "💡 **Lực đẩy xilanh:** F = P × A (trong đó P là áp suất khí, A là diện tích piston). Do P chỉ khoảng 6 bar, muốn tăng lực bắt buộc phải tăng đường kính piston làm xilanh rất to."
  },
  "WS_PNE_003": {
    why_correct: "Giải thích SAI về việc lựa chọn địa điểm lắp đặt máy nén khí là: 'Lắp đặt tại nơi có nhiệt độ cao và độ ẩm thấp...'. Ngược lại hoàn toàn, phòng máy nén khí BẮT BUỘC phải đặt tại nơi khô ráo, thông gió tốt và CÓ NHIỆT ĐỘ CÀNG THẤP CÀNG TỐT (lý tưởng < 40°C). Nếu hút không khí nóng vào máy nén, mật độ khối lượng không khí giảm và cứ mỗi khi nhiệt độ khí hút tăng thêm 10°C thì hiệu suất lưu lượng của máy nén sẽ bị suy giảm từ 3% đến 4%.",
    why_wrong: "A (Đặt nơi ít bụi và khí độc hại tránh ăn mòn), B (Xây tường gạch cách âm để triệt tiêu tiếng ồn máy nén, tránh mưa hắt nắng chiếu) và C (Bố trí quạt thông gió hoặc bộ làm mát After-Cooler duy trì chênh lệch nhiệt độ nước làm mát dưới 10°C) đều là các tiêu chuẩn thiết kế phòng máy nén khí bắt buộc.",
    supplementary: "💡 **Quy tắc nhiệt độ phòng máy nén:** Nhiệt độ khí hút vào tăng 10°C → Tiêu tốn thêm ~2% điện năng tiêu thụ và giảm ~3-4% lưu lượng khí nén thực tế."
  },
  "WS_PNE_004": {
    why_correct: "Máy làm lạnh / Máy sấy khí kiểu làm lạnh (Refrigerated Air Dryer) lắp ngay sau máy nén khí có khả năng hạ nhiệt độ khí nén xuống điểm sương áp suất 3°C ~ 10°C, làm hơi nước ngưng tụ thành giọt lỏng và loại bỏ được tới khoảng 63% lượng hơi nước bão hòa ban đầu có trong khí nén.",
    why_wrong: "Máy sấy hấp thụ (Desiccant Dryer) dùng hạt hút ẩm loại bỏ đến 99% ẩm cho yêu cầu điểm sương sâu (-40°C); Máy lọc khí và Main line filter chỉ lọc các hạt bụi và sol khí dầu, không ngưng tụ được hơi nước dạng khí hòa tan.",
    supplementary: "💡 **Độ ẩm trong khí nén:** Không khí ẩm qua máy nén sẽ bị bão hòa. Nếu không qua máy sấy làm lạnh, hơi nước sẽ ngưng tụ thành dòng nước lỏng trong đường ống làm han rỉ van và xilanh."
  },
  "WS_PNE_005": {
    why_correct: "Trong cụm xử lý khí nén nguồn FRL (Filter - Regulator - Lubricator), ô thứ ba điền vào vị trí ????? chính là Bộ tra dầu (Lubricator). Bộ tra dầu có nhiệm vụ phun sương dầu mịn vào dòng khí nén khô để bôi trơn các gioăng phớt chuyển động của van đảo chiều và piston xilanh.",
    why_wrong: "Regulator là bộ điều chỉnh áp suất (nằm ở vị trí giữa); Filter là bộ lọc khí (nằm ở vị trí đầu tiên); Service Unit là tên gọi chung của toàn bộ cụm FRL.",
    supplementary: "💡 **Thứ tự bắt buộc cụm FRL:** Cửa vào → Filter (Lọc bụi nước) → Regulator (Điều chỉnh và ổn định áp suất) → Lubricator (Tra sương dầu bôi trơn) → Cửa ra tới các van."
  },
  "WS_PNE_006": {
    why_correct: "Nhận định KHÔNG PHẢI đặc điểm của hệ thống khí nén là: 'Mạch khí nén là hệ thống kín, tuần hoàn năng lượng'. Trái ngược hoàn toàn với hệ thống Thủy lực (dầu tuần hoàn kín hồi về thùng dầu), mạch khí nén là HỆ THỐNG MỞ: không khí được hút từ khí quyển, nén lại sử dụng sinh công tại xilanh và sau đó XẢ THẲNG RA MÔI TRƯỜNG qua ống giảm thanh mà không thu hồi tuần hoàn.",
    why_wrong: "A (Khí nén tổn hao áp suất trên đường ống nhỏ nên dễ dàng dẫn truyền khắp phân xưởng), B (Ống thép dễ bị rỉ sét do phản ứng giữa nước ngưng tụ và oxy) và D (Nhiệt độ khí nén giảm dọc theo đường ống làm phát sinh lượng lớn nước đọng) là các đặc tính kỹ thuật chuẩn xác của hệ thống đường ống khí nén.",
    supplementary: "💡 **Độ dốc đường ống:** Đường ống dẫn khí chính trong nhà máy phải được lắp đặt dốc từ 1% đến 2% về phía bẫy xả nước tự động (Auto-drain) để gom nước ngưng."
  },
  "WS_PNE_007": {
    why_correct: "Chất lỏng nguy hiểm nhất có trong khí nén chưa xử lý là NƯỚC (hơi ẩm ngưng tụ). Nước đọng gây ra: rỉ sét thân xilanh, rửa trôi mỡ bôi trơn của van, làm suy giảm cách điện và cháy chập cuộn coil solenoid, đồng thời làm dính kẹt cuộn dây quấn và thanh trượt nòng van (Spool) gây liệt điều khiển.",
    why_wrong: "Dầu bôi trơn (với lượng vừa phải) có tác dụng chống rỉ; Cacbon và rỉ sắt là cặn rắn sinh ra do hậu quả của hơi nước và nhiệt.",
    supplementary: "💡 **Tiêu chuẩn chất lượng khí ISO 8573-1:** Quy định độ tinh khiết khí nén nghiêm ngặt theo 3 chỉ số: Hạt bụi rắn, Nước (Điểm sương) và Hàm lượng sol khí dầu."
  },
  "WS_PNE_008": {
    why_correct: "Máy nén khí Piston kiểu nén hai cấp (Two-Stage Compressor / Máy nén cấp 2): Khí nén được nén cấp 1 lên khoảng 4 ~ 6 kgf/cm², sau đó dẫn qua bộ làm mát trung gian (Intercooler) rồi nén tiếp ở cấp 2 để đạt được áp suất rất cao lên đến 30 kgf/cm² (khoảng 3 MPa).",
    why_wrong: "Máy nén cấp 1 (Single-stage) chỉ nén hiệu quả tới khoảng 7 ~ 10 kgf/cm² do giới hạn tỷ số nén và nhiệt độ xả; Máy nén cấp 3 và cấp 4 dùng cho áp suất siêu cao từ 100 đến 300 bar.",
    supplementary: "💡 **Tại sao phải nén 2 cấp:** Việc làm mát trung gian giữa 2 cấp nén giúp quá trình nén tiến gần tới quá trình đẳng nhiệt, tiết kiệm công nén và ngăn ngừa dầu bôi trơn bị bốc cháy do nhiệt độ xả quá cao."
  },
  "WS_PNE_009": {
    why_correct: "Trong thành phần không khí tự nhiên: Khí Nitơ (N₂) chiếm khoảng 78.084%; Khí Oxy (O₂) chiếm khoảng 20.947%; Khí trơ Argon (Ar) chiếm đúng 0.933% thể tích; phần còn lại là Cacbonic CO₂ (~0.033%) và các khí hiếm khác.",
    why_wrong: "Oxy chiếm gần 21%; Cacbonic chỉ chiếm khoảng 0.03% ~ 0.04%; Hydro chỉ tồn tại dưới dạng vết (< 0.00005%).",
    supplementary: "💡 **Thành phần thể tích không khí khô chuẩn:** N₂ (78.08%) + O₂ (20.95%) + Ar (0.93%) + CO₂ (0.04%) + các khí khác (0.00%). Khối lượng phân tử mol trung bình của không khí M ≈ 29 g/mol."
  },
  "WS_PNE_010": {
    why_correct: "Máy nén khí được chia thành 2 nhóm nguyên lý chính: Máy nén thể tích (Positive Displacement) và Máy nén động năng / tuabin (Dynamic / Turbo Compressors). Hình C thể hiện Máy nén khí tuabin ly tâm/hướng trục (thuộc nhóm máy nén động năng), KHÔNG PHẢI là máy nén thể tích.",
    why_wrong: "Hình A, B, D thể hiện các loại máy nén thể tích điển hình: máy nén piston (Reciprocating), máy nén trục vít (Screw) và máy nén cánh gạt (Vane), hoạt động bằng cách thu hẹp thể tích buồng chứa để tăng áp suất.",
    supplementary: "💡 **So sánh:** Máy nén thể tích: Cho lưu lượng nhỏ/trung bình nhưng áp suất cao; Máy nén động năng tuabin: Cho lưu lượng khí khổng lồ ở áp suất ổn định."
  },
  "WS_PNE_011": {
    why_correct: "Đoạn văn mô tả chính xác đặc tính của Máy nén khí trục vít (Screw Compressor): Hai trục vít xoắn đực - cái quay ngược chiều song song ăn khớp với nhau, quay tốc độ cao rất êm và ít rung chấn, khí nén được cấp liên tục không xung động nên không cần bình tích áp quá lớn, độ tin cậy vận hành rất cao.",
    why_wrong: "MNK tuabin dùng đĩa cánh quay ly tâm; MNK cánh gạt có các phiến trượt mòn theo thời gian; MNK Roots blower dùng hai con quay hình số 8 áp suất thấp.",
    supplementary: "💡 **Hai dòng máy nén trục vít:** Trục vít ngập dầu (Oil-injected: hiệu suất cao, êm, phổ biến nhất) và Trục vít không dầu (Oil-free: chuyên dùng cho y tế, thực phẩm, điện tử sạch)."
  },
  "WS_PNE_012": {
    why_correct: "Bên trong cốc lọc của bộ lọc khí nén (Air Filter), chi tiết có hình cánh chong chóng nghiêng được gọi là Tấm làm lệch hướng (Deflector). Deflector có nhiệm vụ tạo ra luồng khí xoáy lốc ly tâm cực mạnh ép dòng khí nén quay quanh thành cốc, lực ly tâm sẽ văng các giọt nước và hạt bụi nặng đập vào thành kính rơi xuống đáy cốc.",
    why_wrong: "Element (Lõi lọc xốp) dùng để lọc giữ các hạt bụi nhỏ còn sót lại; Paper filter là giấy lọc khô.",
    supplementary: "💡 **Nguyên lý 2 giai đoạn của bộ lọc:** Giai đoạn 1 (Ly tâm bởi Deflector): Tách 95% nước lỏng và cặn thô; Giai đoạn 2 (Xuyên qua lõi Element): Giữ lại các hạt bụi mịn 5μm."
  },
  "WS_PNE_013": {
    why_correct: "Nguyên lý tăng tốc dòng khí qua đĩa cánh quay tốc độ cao để tăng động năng rồi biến đổi vận tốc thành áp năng thông qua buồng khuếch tán là nguyên lý của Máy nén khí động học / Máy nén khí tuabin ly tâm (Hình C).",
    why_wrong: "Các hình khác là máy nén chuyển vị thể tích nén ép trực tiếp bằng dung tích hình học kín.",
    supplementary: "💡 **Định luật Bernoulli trong máy nén tuabin:** Động năng chuyển dịch v²/2 của dòng khí tốc độ cao giảm đột ngột tại buồng khuếch tán sẽ chuyển hóa thành áp suất tĩnh P/ρ tăng vọt."
  },
  "WS_PNE_014": {
    why_correct: "Trong biểu đồ các thang đo áp suất: Mức áp suất nằm phía dưới mốc Áp suất khí quyển chuẩn (1 atm) được gọi là Áp suất chân không hoặc 'Áp suất đồng hồ đo âm (-)' (Negative Gauge Pressure / Vacuum).",
    why_wrong: "Áp suất đồng hồ đo (+) là áp suất lớn hơn áp suất khí quyển; Áp suất tuyệt đối là mốc đo tính từ chân không tuyệt đối (0 bar abs).",
    supplementary: "💡 **Công thức liên hệ:** P_tuyệt_đối = P_khí_quyển + P_đồng_hồ. Nếu áp suất thấp hơn khí quyển: P_đồng_hồ = - P_chân_không."
  },
  "WS_PNE_015": {
    why_correct: "Trong phân loại máy nén khí công nghiệp theo dải áp suất xả định mức: Áp suất xả trung bình (Medium Pressure) nằm trong khoảng từ 10 đến 16 kgf/cm² (tương ứng khoảng 1.0 ~ 1.6 MPa).",
    why_wrong: "1~8 kgf/cm² là dải áp suất thấp thông dụng cho thiết bị khí nén nhà xưởng tiêu chuẩn (thường cài đặt 6~7 bar); Trên 16 kgf/cm² thuộc nhóm áp suất cao.",
    supplementary: "💡 **Quy đổi đơn vị:** 1 kgf/cm² ≈ 0.98 bar ≈ 0.098 MPa ≈ 14.22 psi."
  },
  "WS_PNE_016": {
    why_correct: "Nhận định KHÔNG PHẢI ưu điểm của ống dẫn khí nén bằng nhựa Plastic (như ống PU, PA, PE) là: 'Vì ống nhựa có tính mềm dẻo nên dễ thao tác nhưng chú ý khi sử dụng ống dẫn của máy có bộ phận quay' (đây là cảnh báo hạn chế sử dụng trong an toàn vận hành, không phải là ưu điểm của vật liệu).",
    why_wrong: "A (Thao tác đấu nối cắm nhanh bằng cút nối One-touch vô cùng đơn giản), B (Giá thành rẻ hơn nhiều so với ống đồng/ống thép) và C (Kín khít chống rỉ sét, ít rò rỉ khí) đều là các ưu điểm thực tế tuyệt vời của ống nhựa khí nén.",
    supplementary: "💡 **Vật liệu ống mềm thông dụng:** Ống PU (Polyurethane: mềm dẻo, bán kính uốn cong nhỏ, đàn hồi tốt nhất); Ống Nylon PA (chịu áp lực cao và chống hóa chất tốt hơn)."
  },
  "WS_PNE_017": {
    why_correct: "Máy sấy khí kiểu làm lạnh / đông lạnh (Refrigeration Air Dryer) có dải nhiệt độ điểm sương áp suất khoảng 0.5°C ~ 10°C, chi phí đầu tư và vận hành kinh tế nhất, được sử dụng chiếm trên 85% trong toàn bộ các nhà máy xí nghiệp vận chuyển vật liệu và dụng cụ khí nén thông thường.",
    why_wrong: "Máy sấy kiểu hấp thụ dùng cho phòng thí nghiệm hoặc môi trường dưới 0°C (nhiệt độ sương -40°C đến -70°C); Máy sấy không làm nóng tiêu tốn 15% lượng khí nén tái sinh.",
    supplementary: "💡 **Tại sao điểm sương máy sấy lạnh là ~3°C:** Nếu hạ nhiệt độ điểm sương xuống dưới 0°C, nước ngưng tụ trong giàn lạnh sẽ lập tức bị đóng băng đóng tuyết làm tắc nghẽn đường ống!"
  },
  "WS_PNE_018": {
    why_correct: "Thiết bị có vai trò tích trữ khí nén, ổn định áp suất nguồn cung cấp khi nhu cầu tiêu thụ khí tăng đột biến, đồng thời triệt tiêu hiện tượng rung giật xung áp suất từ máy nén xả ra chính là Bể chứa khí / Bình tích khí (Air Receiver Tank).",
    why_wrong: "Máy nén chỉ tạo ra khí áp; Van điều áp chỉ giảm áp cục bộ; Shutter valve là van phân nhánh.",
    supplementary: "💡 **Tác dụng phụ tuyệt vời của Bình tích khí:** Đóng vai trò như một bộ làm mát tự nhiên tĩnh, giúp khí nén nguội bớt và ngưng tụ một lượng lớn nước đọng lắng xuống đáy bình để xả qua van xả đáy."
  },
  "WS_PNE_019": {
    why_correct: "Do lực hút của trọng trường Trái Đất tác dụng lên toàn bộ khối lượng lớp vỏ khí quyển, Áp suất khí quyển tiêu chuẩn ở mực nước biển (1 atm) có giá trị chuẩn xác là: 1.033 kgf/cm² (tương đương 101.325 kPa = 1.013 bar = 760 mmHg).",
    why_wrong: "10.33 kgf/cm² tương đương áp suất của một cột nước cao 100 mét; các giá trị 103.3 và 1033 là sai lệch hoàn toàn về độ lớn.",
    supplementary: "💡 **Ý nghĩa vật lý:** Trên mỗi 1 cm² bề mặt cơ thể con người đang chịu một lực nén của khí quyển tương đương sức nặng của một vật thể có khối lượng 1.033 kg."
  },
  "WS_PNE_020": {
    why_correct: "So với truyền động cơ điện và thủy lực, một ưu điểm vượt trội của truyền động khí nén là tốc độ vận hành của cơ cấu chấp hành rất cao: Xilanh và thiết bị khí nén có khả năng di chuyển với vận tốc lên tới 10 m/s (cấp độ lớn / rất nhanh).",
    why_wrong: "Khoảng 1 m/s là tốc độ trung bình của xilanh tiêu chuẩn; Thủy lực chỉ đạt vận tốc chậm khoảng 0.1 ~ 0.5 m/s do độ nhớt dầu lớn.",
    supplementary: "💡 **Ứng dụng tốc độ cao:** Dùng trong máy bắn đục lỗ, cơ cấu phân loại loại bỏ sản phẩm lỗi trên băng chuyền tốc độ cao, máy đóng đinh khí nén."
  },
  "WS_PNE_021": {
    why_correct: "Định luật Boyle-Mariotte phát biểu về quá trình đẳng nhiệt (Nhiệt độ T = const): 'Áp suất của một khối khí lý tưởng tỷ lệ nghịch với thể tích của nó'. Tích số giữa áp suất và thể tích là một hằng số không đổi: P₁ × V₁ = P₂ × V₂ = const (Hình B).",
    why_wrong: "Hình A là đồ thị đẳng tích Gay-Lussac; Hình C là định luật Charles đẳng áp; Hình D là quá trình đoạn nhiệt.",
    supplementary: "💡 **Ý nghĩa trong máy nén khí:** Khi piston nén thể tích không khí từ V₁ giảm xuống còn V₂ = V₁ / 4, thì áp suất khí sẽ tăng lên gấp 4 lần (P₂ = 4 × P₁)."
  },
  "WS_PNE_022": {
    why_correct: "Định luật Charles phát biểu về quá trình đẳng áp (Áp suất P = const): 'Thể tích của một khối lượng khí xác định tỷ lệ thuận với nhiệt độ tuyệt đối của nó'. Thương số giữa thể tích và nhiệt độ tuyệt đối là hằng số: V₁ / T₁ = V₂ / T₂ (Hình C).",
    why_wrong: "Định luật Boyle là P·V = const; Định luật Gay-Lussac là P/T = const.",
    supplementary: "💡 **Lưu ý nhiệt độ T:** Nhiệt độ trong công thức bắt buộc phải tính theo thang nhiệt độ Kelvin: T(K) = t(°C) + 273.15. Khi nung nóng khối khí ở áp suất không đổi, khí nở ra làm tăng thể tích."
  },
  "WS_PNE_023": {
    why_correct: "Ký hiệu trên sơ đồ mạch biểu thị bộ lọc tích hợp đa năng theo 'Phương thức lọc trong + ngoài' (vừa lọc cặn ly tâm bên ngoài vỏ vừa lọc thẩm thấu qua màng lõi bên trong).",
    why_wrong: "Chỉ lọc trong hoặc chỉ lọc ngoài không thể hiện cấu trúc lọc phân cấp 2 giai đoạn.",
    supplementary: "💡 **Tuổi thọ lõi lọc:** Sau khoảng 6 tháng đến 1 năm hoặc khi chênh lệch áp suất qua bộ lọc vượt quá 0.1 MPa (kim đồng hồ báo đỏ), cần vệ sinh hoặc thay thế lõi lọc mới."
  },
  "WS_PNE_024": {
    why_correct: "Loại máy sấy khí có khả năng loại bỏ gần như tuyệt đối độ ẩm với nhiệt độ điểm sương cực sâu từ -40°C đến -100°C là Máy sấy khí kiểu hấp thụ (Desiccant / Adsorption Air Dryer). Máy sử dụng 2 tháp chứa hạt hút ẩm (Alumina hoạt tính hoặc rây phân tử Molecular Sieve) luân phiên hấp phụ và tái sinh.",
    why_wrong: "Máy sấy kiểu đông lạnh chỉ hạ điểm sương được tới +3°C (dưới 0°C nước đóng băng tắc giàn lạnh).",
    supplementary: "💡 **Ứng dụng điểm sương sâu:** Bắt buộc cho ngành chế tạo chip bán dẫn, sản xuất pin Lithium-ion, nhà máy dược phẩm và các đường ống khí nén đi ngoài trời mùa đông băng giá."
  },
  "WS_PNE_025": {
    why_correct: "Bộ lọc khí nén tiêu chuẩn trong cụm FRL của nhà máy thường có cấp độ lọc hạt danh định có thể loại bỏ được các hạt bụi bẩn thể rắn có đường kính từ 5 μm đến 20 μm (lõi lọc tiêu chuẩn 5 micromét).",
    why_wrong: "Trên 50 μm là lưới lọc thô; Dưới 5 μm (như 0.01 μm ~ 0.1 μm) là các bộ lọc tinh vi sương dầu (Mist Separator).",
    supplementary: "💡 **Cấp độ lọc:** Bộ lọc thô (Filter): 5 μm; Bộ tách sương (Mist Separator): 0.3 μm; Bộ tách siêu sương (Micro Mist Separator): 0.01 μm."
  },
  "WS_PNE_026": {
    why_correct: "Trong cấu trúc các chi tiết lắp trên quả Piston của xilanh khí nén, chi tiết đánh dấu ????? là Vòng làm kín / Phớt chặn khí (Piston Seal / Packing). Chi tiết này làm bằng cao su NBR hoặc Polyurethane có gờ gạt ôm sát nòng xilanh để ngăn không cho khí nén rò rỉ giữa hai buồng.",
    why_wrong: "Đệm giảm chấn và vòng giảm chấn nằm ở hai đầu hành trình; Rod cover là nắp đầu cần.",
    supplementary: "💡 **Vòng dẫn hướng (Wear Ring):** Đi kèm với Piston Seal là một vòng nhựa PTFE/POM dẫn hướng để chống kim loại piston cọ xát trực tiếp vào nòng xilanh."
  },
  "WS_PNE_027": {
    why_correct: "Chi tiết quyết định vị trí cuối của hành trình piston, được bắt vít chặn ở đầu đuôi xilanh được gọi là Nắp đáy / Nắp đuôi xilanh (Head Cover / End Cover). Nắp thường được đúc bằng hợp kim gang hoặc nhôm kẽm tùy theo dải tải trọng.",
    why_wrong: "Rod cover là nắp đầu cần phía trước có lỗ cho cần piston thò ra; Ống xilanh là thân nòng ống; Cần piston là trục truyền lực.",
    supplementary: "💡 **Cổng cấp khí:** Trên Head cover và Rod cover luôn có bố trí các cổng ren cấp khí (Port) và các vít điều chỉnh kim van đệm giảm chấn khí nén (Cushion needle valve)."
  },
  "WS_PNE_028": {
    why_correct: "Loại cơ cấu chấp hành khí nén sử dụng màng co giãn đàn hồi (Diaphragm) hoặc ống xếp màng kim loại (Bellows) để tạo lực đẩy tịnh tiến thay vì dùng quả piston trượt trong nòng xy lanh được gọi là 'Xi lanh không có piston' (Non-piston Cylinder / Diaphragm Actuator).",
    why_wrong: "Xilanh có piston sử dụng quả piston cơ học có phớt làm kín chuyển động trượt dọc theo ống xilanh.",
    supplementary: "💡 **Ưu điểm xilanh màng:** Hoàn toàn không có ma sát trượt của phớt, không cần bôi trơn, đáp ứng cực nhanh và độ kín khít 100% không rò rỉ."
  },
  "WS_PNE_029": {
    why_correct: "Xilanh màng (Diaphragm Cylinder) có kích thước bề dày rất mỏng ngắn, cấu tạo đơn giản, hành trình tịnh tiến ngắn (thường tối đa khoảng 5mm đến 10mm) nhưng có diện tích màng rất lớn tạo lực kẹp rất mạnh nên được sử dụng chủ yếu cho các cơ cấu kẹp phôi định vị (Clamping) trong đồ gá.",
    why_wrong: "Xilanh không cần (Rodless) có hành trình siêu dài hàng mét; Xilanh Tandem là ghép đôi tăng lực hành trình dài.",
    supplementary: "💡 **Lực kẹp xilanh màng:** Do diện tích màng A lớn, với áp suất 6 bar có thể tạo lực kẹp hàng nghìn Newton tức thời chỉ trong vài mili-giây."
  },
  "WS_PNE_030": {
    why_correct: "Xi lanh tác động đơn / Xi lanh một chiều (Single-Acting Cylinder): Chỉ cấp khí nén vào một buồng duy nhất để đẩy piston thực hiện hành trình sinh công; hành trình lùi về được thực hiện bằng lực đẩy của lò xo cơ học tích hợp bên trong hoặc tải trọng ngoài. Do giới hạn chiều dài của lò xo hồi vị, độ dài hành trình thường bị giới hạn tối đa khoảng 100 ~ 150 mm.",
    why_wrong: "Xilanh 2 chiều (Double-acting) cấp khí ở cả hai đầu nên hành trình có thể dài tùy ý (lên tới 1000mm - 2000mm); Xilanh đa vị trí có nhiều nấc dừng.",
    supplementary: "💡 **Tiết kiệm năng lượng:** Xilanh tác động đơn chỉ tiêu thụ khí nén ở một chiều đẩy, chiều lùi không tốn khí nén."
  },
  "WS_PNE_031": {
    why_correct: "Khi xilanh chuyển động nhanh, lực quán tính va đập ở cuối hành trình rất lớn. Ở các xilanh cỡ nhỏ (đường kính nòng D ≤ 16mm), người ta dùng đệm cao su cao dẻo (Bumper cushion). Nhưng với các xilanh có đường kính nòng lớn hơn từ 20 mm trở lên (D ≥ 20mm), bắt buộc phải tích hợp Thiết bị đệm khí nén (Air Cushion) có thể điều chỉnh để hấp thụ động năng va đập.",
    why_wrong: "15 mm, 25 mm, 30 mm là các con số mốc không đúng quy chuẩn kỹ thuật tiêu chuẩn của các hãng SMC, Festo.",
    supplementary: "💡 **Nguyên lý Air Cushion:** Ở cuối hành trình, nắp xilanh chặn đường thoát khí chính ép dòng khí đi qua một van tiết lưu nhỏ, tạo ra một đệm khí nén áp suất cao hãm êm piston dừng lại mượt mà."
  },
  "WS_PNE_032": {
    why_correct: "Ống xilanh (Cylinder Tube / Nòng xilanh) là bộ phận hình trụ rỗng có vai trò bao chứa và dẫn hướng chuyển động tịnh tiến của quả piston. Bề mặt trong của ống phải được mài doa nhẵn bóng (độ nhám gương) và mạ crom cứng để chịu mài mòn ma sát và chịu áp lực nổ khí nén bên trong.",
    why_wrong: "Cần piston là thanh trục chịu lực kéo đẩy; Piston là đĩa trượt bên trong.",
    supplementary: "💡 **Vật liệu ống xilanh:** Hợp kim nhôm đùn mạ Anode cứng (phổ biến nhất vì nhẹ và chống rỉ); Thép carbon mài mạ crom (cho ứng dụng nặng); Thép không gỉ SUS (cho môi trường hóa chất)."
  },
  "WS_PNE_033": {
    why_correct: "Đại lượng vật lý được định nghĩa là 'Độ lớn của lực tác dụng vuông góc lên một đơn vị diện tích bề mặt tiếp xúc của vật thể' chính là Áp suất (Pressure: P = F / S).",
    why_wrong: "Áp lực là độ lớn tổng lực nén F (đơn vị Newton); Lưu lượng là thể tích khí chảy qua trong một đơn vị thời gian (m³/phút); Thể tích là không gian hình học (m³).",
    supplementary: "💡 **Đơn vị áp suất SI:** Pascal (Pa = N/m²). Trong khí nén công nghiệp: 1 bar = 100.000 Pa = 0.1 MPa ≈ 1 kgf/cm²."
  },
  "WS_PNE_034": {
    why_correct: "Hình D thể hiện kết cấu xilanh có bố trí hai bạc đỡ (Bearing / Bushing dẫn hướng kép) ở hai đầu nắp, ôm chặt lấy thân cần piston giúp giữ vững cần, dẫn động chuyển động êm ái và có khả năng chịu được lực ngang (Side load) tác dụng vào đầu cần.",
    why_wrong: "Các hình A, B, C là các kiểu xilanh tiêu chuẩn chỉ có một bạc lót dẫn hướng đơn ở nắp trước.",
    supplementary: "💡 **Tác hại của lực ngang:** Lực ngang đè lên cần piston sẽ làm méo phớt làm kín, gây mòn xước nòng xilanh và rò rỉ khí nén nhanh chóng."
  },
  "WS_PNE_035": {
    why_correct: "Phương pháp lắp đặt xilanh có độ cứng vững và cố định vững chắc nhất là Lắp bằng mặt bích (Flange Mount - Hình C). Mặt bích được siết chặt bằng bu lông vuông góc tuyệt đối với đường tâm trục, bắt buộc tâm trục xilanh và hướng chuyển động của tải phải đồng nhất tuyệt đối.",
    why_wrong: "Gá chân đế (Foot mount) có thể bị uốn lật bulông khi đẩy tải nặng; Gá khớp xoay Clevis/Trunnion cho phép xilanh lắc góc tự do.",
    supplementary: "💡 **Hai kiểu mặt bích:** Mặt bích đầu cần (Front Flange) chịu tải kéo tốt; Mặt bích đuôi (Rear Flange) chịu tải đẩy nén tốt."
  },
  "WS_PNE_036": {
    why_correct: "Hình B thể hiện phương thức lắp xilanh kiểu Chân đế (Foot Mount): Hai tai chân đế chữ L bắt vít cố định trên mặt phẳng sàn, tải trọng chuyển động tịnh tiến theo đường thẳng song song với bề mặt lắp đặt.",
    why_wrong: "Hình A là gá mặt bích; Hình C và D là các kiểu gá trục quay lắc.",
    supplementary: "💡 **Lực uốn của Foot Mount:** Lực tác dụng của xilanh cách mặt sàn một khoảng hở H, do đó sinh ra mô-men lật có xu hướng giật nhổ bu lông chân đế, cần bắt vít chắc chắn."
  },
  "WS_PNE_037": {
    why_correct: "Khẳng định KHÔNG PHẢI chú ý khi sử dụng xilanh khí nén là: 'Dựa vào áp suất đẩy của bộ giảm thanh để không gây ảnh hưởng đến tốc độ vận hành xilanh khí nén' (bộ giảm thanh lắp ở cửa xả van không có chức năng tạo áp suất đẩy cho xilanh).",
    why_wrong: "A (Dải nhiệt độ môi trường làm việc lý tưởng của xilanh khí nén tiêu chuẩn là từ 5°C đến 60°C), B (Tại nơi có nhiều bụi bẩn phoi kim loại phải lắp ống bọc chụp bảo vệ cần piston) và C (Sử dụng khí nén sạch qua bộ lọc và cấp dầu bôi trơn thích hợp) đều là các nguyên tắc bảo trì cốt tử.",
    supplementary: "💡 **Phớt chịu nhiệt:** Nếu môi trường làm việc vượt quá 60°C (như gần lò nung), bắt buộc phải đặt xilanh đặc biệt dùng phớt cao su Flo (Viton/FKM) chịu nhiệt tới 150°C."
  },
  "WS_PNE_038": {
    why_correct: "Nhận định KHÔNG PHẢI chú ý đúng khi lựa chọn xilanh là: 'Tốc độ quay của xilanh: lắp bộ điều chỉnh nhanh, điều chỉnh từ tốc độ cao xuống tốc độ quy định' (xilanh khí nén tiêu chuẩn chuyển động tịnh tiến thẳng, không phải chuyển động quay tròn).",
    why_wrong: "A (Chọn hành trình làm việc danh định nằm trong giới hạn cho phép), B (Tính toán năng lượng va đập cuối hành trình để chọn đệm hãm phù hợp) và D (Với xilanh hành trình dài phải tính toán hiện tượng uốn dọc cần piston) là các bước tính toán thiết kế chuẩn xác.",
    supplementary: "💡 **Hiện tượng uốn dọc (Buckling):** Khi cần piston dài chịu lực đẩy nén, cần có thể bị cong vênh gãy do mất ổn định uốn dọc theo định luật Euler."
  },
  "WS_PNE_039": {
    why_correct: "Phát biểu KHÔNG PHẢI đặc điểm của Động cơ khí nén (Air Motor) là: 'Việc thay đổi đảo chiều và điều chỉnh tốc độ khó khăn'. Ngược lại hoàn toàn, động cơ khí nén ĐẢO CHIỀU CỰC KỲ DỄ DÀNG VÀ TỨC THỜI (chỉ cần đổi hướng van cấp khí 4/2 hoặc 5/2) và điều chỉnh tốc độ vô cấp mượt mà chỉ bằng van tiết lưu điều chỉnh lưu lượng.",
    why_wrong: "B (Không bị giới hạn nhiệt độ ẩm ướt, chống cháy nổ an toàn tuyệt đối so với động cơ điện), C (Do tính nén của khí nên tốc độ quay phụ thuộc vào biến động của tải trọng) và D (Động cơ khí nén sinh nhiệt rất ít, khí xả nở ra làm mát động cơ) đều là các ưu điểm thực tế nổi bật.",
    supplementary: "💡 **Khả năng quá tải (Stall):** Động cơ khí nén có thể bị kẹt tải dừng hoàn toàn (Stall) trong thời gian dài mà không bao giờ bị cháy nổ cuộn dây như động cơ điện."
  },
  "WS_PNE_040": {
    why_correct: "Chú ý chuẩn xác khi sử dụng động cơ khí nén: 'Đặc tính tính năng kỹ thuật của động cơ khí nén (công suất đầu ra và mô-men xoắn Torque) luôn được đo kiểm và hiển thị trong điều kiện áp suất ở phía đường ống xả khí bằng đúng áp suất khí quyển'. Nếu đường xả bị nghẹt tạo đối áp thì công suất động cơ sẽ tụt giảm nghiêm trọng.",
    why_wrong: "A, B, C chứa các mô tả sai lệch về chế độ xả và tỷ số công suất thực tế.",
    supplementary: "💡 **Lắp ống giảm thanh động cơ khí:** Phải chọn bộ giảm thanh có lưu lượng thông qua lớn để khí xả thoát tự do, tránh gây nghẽn áp suất ngược (Back-pressure)."
  },
  "WS_PNE_041": {
    why_correct: "Actuator truyền động quay kiểu cánh gạt (Vane Type Rotary Actuator): Với loại Cánh gạt kép (Double Vane - hai cánh gạt đối xứng trong buồng chia đôi), mô-men xoắn sinh ra tăng gấp 2 lần nhưng góc quay bị giới hạn hẹp lại chỉ trong khoảng từ 90° đến 120° (trong khi loại cánh gạt đơn Single Vane có góc quay lên tới 270° ~ 280°).",
    why_wrong: "270~300° là góc quay của loại cánh gạt đơn; Dưới 60° là quá hẹp.",
    supplementary: "💡 **So sánh Cánh gạt đơn vs kép:** Đơn cánh (Single vane): Quay 270°, lực mô-men T; Kép cánh (Double vane): Quay 90°~100°, lực mô-men 2T."
  },
  "WS_PNE_042": {
    why_correct: "Xi lanh Tandem (Tandem Cylinder / Xilanh hai tầng nối tiếp): Cấu tạo gồm 2 thân xilanh ghép thẳng hàng nối tiếp nhau có chung một cần piston xuyên qua. Khi cấp khí đồng thời vào cả hai buồng, lực đẩy của hai piston được cộng dồn lại, giúp sinh ra lực tác động lớn gấp 2 lần so với xilanh thông thường có cùng đường kính nòng.",
    why_wrong: "Xilanh đa vị trí dùng để dừng nhiều nấc khác nhau; Xilanh không cần (Rodless) tiết kiệm diện tích hành trình dài; Xilanh 2 cần có 2 đầu thò ra.",
    supplementary: "💡 **Ứng dụng Tandem:** Rất hữu hiệu trong các không gian máy chật hẹp không thể tăng đường kính ngoài của xilanh nhưng vẫn đòi hỏi lực ép đột dập lớn."
  },
  "WS_PNE_043": {
    why_correct: "Hình B thể hiện phân loại theo phương thức lắp ráp kiểu Chân đế hướng trục trong (Axial Foot Mount): Chân đế được gắn hướng vào trong thân xilanh, giúp cụm xilanh gọn gàng và tải trọng chuyển động tịnh tiến theo đường thẳng chuẩn.",
    why_wrong: "Các hình vẽ khác thể hiện chân đế hướng ngoài hoặc mặt bích.",
    supplementary: "💡 **Định vị tải:** Phải đảm bảo cần piston không phải gánh mô-men uốn của tải khi trượt."
  },
  "WS_PNE_044": {
    why_correct: "Kiểu gá Trunnion (Gá trục xoay trên thân xilanh) cho phép xilanh lắc góc tự do trong một mặt phẳng quanh hai chốt trục đối xứng. Hình D thể hiện kết cấu bắt bu lông mặt bích cứng cố định, KHÔNG PHẢI là kiểu gá Trunnion.",
    why_wrong: "Hình A, B, C thể hiện các biến thể gá Trunnion chuẩn: Trunnion đầu trước (Front Trunnion), Trunnion giữa thân (Center Trunnion) và Trunnion đuôi (Rear Trunnion).",
    supplementary: "💡 **Ứng dụng Trunnion:** Dùng cho các cơ cấu đóng mở cửa hầm, lật nắp thùng xe ben, tay gạt chuyển hướng phôi trên băng chuyền."
  },
  "WS_PNE_045": {
    why_correct: "Actuator truyền động quay kiểu tay quay thanh truyền (Crank Type Rotary Actuator) biến chuyển động tịnh tiến thẳng của quả piston thành chuyển động quay tròn của trục ra thông qua cơ cấu đòn biên tay quay, góc quay bị giới hạn dưới 110°.",
    why_wrong: "Actuator kiểu đinh ốc quay được trên 360°; Actuator kiểu Rack-Pinion quay được 90°, 180° hoặc 360°.",
    supplementary: "💡 **Đặc tính lực kiểu Crank:** Mô-men xoắn đầu ra thay đổi theo hàm sin của góc quay, đạt cực đại tại vị trí thanh truyền vuông góc với tay quay."
  },
  "WS_PNE_046": {
    why_correct: "Động cơ khí nén kiểu bánh răng (Gear Air Motor) sử dụng hai bánh răng ăn khớp quay trong buồng khí kín, có thể đạt tốc độ quay rất cao khoảng 10.000 rpm (vòng/phút), kết cấu nhỏ gọn và bền bỉ trong môi trường khắc nghiệt.",
    why_wrong: "Động cơ piston quay tốc độ chậm hơn (1.000 ~ 3.000 rpm) nhưng mô-men lớn; Động cơ tuabin quay siêu tốc độ (hàng chục nghìn rpm).",
    supplementary: "💡 **Ưu điểm Gear Air Motor:** Khởi động tức thời ở cả hai chiều quay, chịu bụi bẩn tốt hơn động cơ cánh gạt."
  },
  "WS_PNE_047": {
    why_correct: "Actuator truyền động quay kiểu đinh ốc xoắn (Screw / Helical Spline Rotary Actuator) hoạt động bằng cách đẩy piston tịnh tiến ép vào rãnh xoắn ốc của trục sinh lực để biến chuyển động thẳng thành chuyển động quay tròn, góc xoay có thể thiết kế rất lớn vượt quá 360°.",
    why_wrong: "Actuator kiểu crack góc xoay < 110°; Actuator kiểu cánh gạt góc xoay < 280°.",
    supplementary: "💡 **Kết cấu trục xoắn:** Rãnh xoắn bước dài cho phép biến lực đẩy dọc trục thành mô-men xoắn quay với hành trình nhiều vòng tròn liên tục."
  },
  "WS_PNE_048": {
    why_correct: "Động cơ tuabin khí nén (Turbine Air Motor) sử dụng chùm tia khí nén tốc độ cao thổi vào các cánh guồng tuabin nhỏ để biến đổi trực tiếp động năng dòng khí thành chuyển động quay tốc độ cao (2.000 ~ 5.000 rpm hoặc lên tới vài chục nghìn rpm), chuyên dùng cho các máy mài, máy khắc khuôn và mũi khoan nha khoa.",
    why_wrong: "Động cơ Piston cồng kềnh dùng cho tời kéo; Động cơ bánh răng dùng cho máy công cụ nặng.",
    supplementary: "💡 **Đặc điểm Turbine Air Motor:** Hoàn toàn không có ma sát tiếp xúc trượt, độ rung động cực thấp, cho độ bóng bề mặt chi tiết mài mòn hoàn hảo."
  },
  "WS_PNE_049": {
    why_correct: "Ký hiệu chuẩn ISO 1219 của Xilanh tác động kép có đệm khí nén điều chỉnh được ở hai đầu (Double-acting cylinder with adjustable cushion at both ends) được thể hiện chính xác ở Hình D (có biểu tượng mũi tên nghiêng xuyên qua nắp đệm ở cả 2 đầu).",
    why_wrong: "Các hình vẽ khác thể hiện xilanh tác động đơn có lò xo hoặc xilanh không có cơ cấu đệm giảm chấn.",
    supplementary: "💡 **Quy ước ISO 1219 cho xilanh:** Hình chữ nhật là nòng xilanh; Vạch đứng dày là quả piston; Thanh thò ra là cần; Mũi tên chéo là khả năng điều chỉnh thông số."
  },
  "WS_PNE_050": {
    why_correct: "Khẳng định KHÔNG PHẢI chú ý đúng khi sử dụng Actuator truyền động quay là: 'Nếu hướng tác động của trọng lực thay đổi... phải giảm tỷ lệ quá tải xuống dưới 80%' (đây là phát biểu diễn đạt sai lệch thông số tính toán tải trọng động).",
    why_wrong: "A (Năng lượng quay dễ khuếch đại quán tính va đập hơn chuyển động thẳng), C (Khớp tâm trục quay với trục tải để tránh làm nứt vỡ ổ bi bearing) và D (Lắp thiết bị giảm chấn chống va đập bên ngoài khi quán tính vượt giới hạn cho phép) đều là các quy tắc an toàn cơ khí bắt buộc.",
    supplementary: "💡 **Tính toán mô-men quán tính (J):** Năng lượng va đập xoay E = 1/2 · J · ω². Nếu vận tốc góc ω tăng gấp đôi thì năng lượng va đập phá hủy tăng gấp 4 lần."
  },
  "WS_PNE_051": {
    why_correct: "Trong phân loại các van khí nén theo chức năng: Van tiết lưu (Throttle / Flow Control Valve) thuộc nhóm Van điều khiển lưu lượng (Flow Control), KHÔNG THUỘC nhóm Van điều áp (Pressure Control Valve).",
    why_wrong: "Van giảm áp (Regulator), Van xả tràn (Relief valve) và Công tắc áp suất (Pressure switch) đều là các phần tử thuộc nhóm thiết bị điều khiển và giám sát áp suất.",
    supplementary: "💡 **3 nhóm van khí nén cơ bản:** (1) Van điều khiển hướng (Directional Control Valves); (2) Van điều khiển lưu lượng (Flow Control Valves); (3) Van điều khiển áp suất (Pressure Control Valves)."
  },
  "WS_PNE_052": {
    why_correct: "Van xả an toàn / Van xả tràn (Relief Valve / Safety Valve) là van tự động mở xả bớt lượng khí nén ra môi trường khi áp suất bên trong mạch hoặc bình chứa vượt quá giá trị cài đặt giới hạn an toàn nhằm duy trì ổn định áp suất và bảo vệ bình tích áp, đường ống không bị nổ.",
    why_wrong: "Van tiết lưu điều chỉnh lưu lượng tốc độ; Van tuần tự kích hoạt theo trình tự bước; Van kiểm tra là van một chiều.",
    supplementary: "💡 **Nguyên lý Relief Valve:** Lực đẩy của áp suất khí nén thắng lực ép của lò xo định mức, đẩy màng van mở cổng xả; khi áp suất tụt về mức an toàn, lò xo tự đẩy đóng kín van."
  },
  "WS_PNE_053": {
    why_correct: "Van giảm áp / Van điều áp (Pressure Reducing Valve / Regulator) có vai trò giảm áp suất nguồn cấp ban đầu (áp suất sơ cấp P1) xuống một mức áp suất làm việc ổn định thấp hơn theo yêu cầu (áp suất thứ cấp P2), và giữ cho áp suất P2 luôn không đổi dù lưu lượng tiêu thụ biến động.",
    why_wrong: "Van kiểm tra là van một chiều; Công tắc áp suất là rơ le điện ngắt mạch; Van điều khiển tốc độ là van tiết lưu.",
    supplementary: "💡 **Chức năng xả áp (Relieving Type):** Bộ điều áp Regulator chuẩn công nghiệp thường có tính năng xả áp ngược: khi vặn núm chỉnh giảm áp, khí thừa bên trong buồng thứ cấp tự động xả qua lỗ thông hơi ra ngoài."
  },
  "WS_PNE_054": {
    why_correct: "Van tuần tự (Sequence Valve) là van điều khiển áp suất tự động mở thông dòng khí sang mạch thứ hai chỉ sau khi áp suất trong mạch thứ nhất đã tăng đạt đến một ngưỡng cài đặt trước (giúp kiểm soát thứ tự vận hành các xilanh: ví dụ xilanh 1 kẹp chặt phôi xong thì xilanh 2 mới bắt đầu khoan).",
    why_wrong: "Van điều khiển tốc độ chỉ hãm lưu lượng; Van kiểm tra chỉ cho khí đi 1 chiều; Van relief xả khí ra môi trường.",
    supplementary: "💡 **Ứng dụng Sequence Valve:** Tạo mạch điều khiển tuần tự bằng khí nén thuần túy mà không cần dùng đến cảm biến điện hay bộ điều khiển PLC."
  },
  "WS_PNE_055": {
    why_correct: "Công tắc áp suất (Pressure Switch) là phần tử chuyển đổi tín hiệu điện - áp suất (chuyển áp suất khí thành tiếp điểm đóng/cắt điện), KHÔNG PHẢI là van điều khiển lưu lượng.",
    why_wrong: "Van tiết lưu (Throttle valve), Van điều khiển tốc độ (Speed controller) và Van xả cấp tốc (Quick exhaust valve) đều là các loại van tác động trực tiếp đến lưu lượng dòng khí.",
    supplementary: "💡 **Chức năng Pressure Switch:** Cài đặt ngưỡng áp ví dụ 5 bar; khi áp suất hệ thống tụt xuống dưới 5 bar thì tiếp điểm điện đóng để gửi tín hiệu cảnh báo về PLC hoặc kích khởi động máy nén khí."
  },
  "WS_PNE_056": {
    why_correct: "Hình ảnh thể hiện ký hiệu của Van tiết lưu hai chiều (Throttle Valve / Choke Valve): Gồm đường ống bị thu hẹp tiết diện dòng chảy ở hai phía đối xứng, cho phép điều chỉnh lưu lượng khí theo cả hai chiều dòng chảy.",
    why_wrong: "Van kiểm tra có hình viên bi và nón; Van điều khiển tốc độ có tích hợp thêm van một chiều song song; Van xả cấp tốc có 3 cửa.",
    supplementary: "💡 **Lưu lượng qua tiết lưu:** Q = C_d · A · √(2ΔP / ρ). Vặn vít tiết lưu làm thay đổi diện tích thông dòng A để tăng giảm lưu lượng khí."
  },
  "WS_PNE_057": {
    why_correct: "Ký hiệu van gồm một van tiết lưu mắc song song với một van một chiều (Check Valve) chính là ký hiệu tiêu chuẩn của Van điều khiển tốc độ / Van tiết lưu một chiều (Speed Controller / One-Way Flow Control Valve).",
    why_wrong: "Van kiểm tra thuần túy không có nhánh tiết lưu; Van tiết lưu thuần túy không có van một chiều; Van relief có lò xo áp suất.",
    supplementary: "💡 **Nguyên lý van tiết lưu 1 chiều:** Chiều đi thuận (từ trái sang phải): Van một chiều chặn lại, toàn bộ khí bắt buộc phải đi qua rãnh tiết lưu (điều khiển tốc độ); Chiều đi ngược lại: Van một chiều mở thông cho khí chảy tự do không bị cản trở."
  },
  "WS_PNE_058": {
    why_correct: "Tên gọi chuẩn xác của van có ký hiệu hình viên bi tựa vào miệng phễu nón chặn chiều ngược là Van một chiều / Van kiểm tra (Check Valve / Non-Return Valve).",
    why_wrong: "Van điều khiển tốc độ có rãnh tiết lưu; Van đệm là cushion valve.",
    supplementary: "💡 **Áp suất mở van (Cracking Pressure):** Lực đẩy tối thiểu của dòng khí thuận cần thiết để thắng lực lò xo nhẹ đẩy viên bi mở cổng (thường rất nhỏ, khoảng 0.05 bar)."
  },
  "WS_PNE_059": {
    why_correct: "Van được tạo thành từ sự kết hợp song song giữa một Van một chiều (Check Valve) và một Van tiết lưu (Throttle Valve) để cho phép dòng khí đi qua một chiều bị tiết lưu (hãm tốc độ) còn chiều ngược lại đi qua tự do không cản trở được gọi là Van điều khiển tốc độ (Speed Controller).",
    why_wrong: "Van tiết lưu thuần túy cản trở cả 2 chiều; Van kiểm tra chặn đứng hoàn toàn chiều ngược; Van đệm là van hãm nắp xilanh.",
    supplementary: "💡 **Ứng dụng trên xilanh:** Mỗi xilanh khí nén thường được lắp 2 van tiết lưu một chiều bắt trực tiếp vào 2 cửa cấp khí để điều chỉnh độc lập tốc độ tiến và tốc độ lùi của cần piston."
  },
  "WS_PNE_060": {
    why_correct: "Phát biểu SAI về phương pháp điều khiển Meter-Out là: 'Do trạng thái dòng chảy tự do nên áp suất của phía ② giảm xuống trạng thái áp suất khí quyển'. Trong phương pháp Meter-Out, khí từ buồng xilanh ② XẢ RA NGOÀI BỊ TIẾT LƯU NÊN LUÔN DUY TRÌ MỘT ĐỐI ÁP RẤT CAO trong buồng xả để ghìm giữ piston trượt êm ái.",
    why_wrong: "A (Khí cấp vào buồng ① chảy tự do nên áp suất tăng ngay lập tức), B (Khí ở cửa ra ② bị tiết lưu nên khống chế tốc độ xả) và C (Piston di chuyển rất cân bằng ổn định nhờ chênh lệch áp suất hai bên) đều là các đặc tính kỹ thuật chuẩn xác của Meter-Out.",
    supplementary: "💡 **Quy tắc vàng:** Trong khí nén, luôn luôn ưu tiên sử dụng phương pháp Meter-Out (tiết lưu đường xả) để tránh hiện tượng piston bị giật bắn lao đi đột ngột."
  },
  "WS_PNE_061": {
    why_correct: "Nhận định KHÔNG PHẢI giải thích về Meter-In là: 'Khí của ② được tiết lưu ở cửa ra rồi xả ra ngoài nên bị giới hạn tốc độ xả' (đây chính là định nghĩa của phương pháp Meter-Out, không phải của Meter-In).",
    why_wrong: "A (Meter-In tiết lưu dòng khí nén cấp VÀO buồng ① nên cần thời gian để áp suất tích tụ đủ lớn thắng ma sát tĩnh), C (Piston di chuyển không ổn định, dễ bị hiện tượng giật cục Stick-slip) và D (Buồng xả ② thoát tự do không có đối áp nên tụt về áp suất khí quyển) là các đặc tính của Meter-In.",
    supplementary: "💡 **Khi nào dùng Meter-In:** Chỉ dùng cho xilanh tác động đơn (có lò xo kéo về) hoặc cơ cấu mang tải rất nhỏ."
  },
  "WS_PNE_062": {
    why_correct: "Loại van chuyên dùng để xả thẳng lượng khí nén trong buồng xilanh ra môi trường ngoài ngay tại đầu nắp xilanh mà không cần bắt dòng khí đi ngược qua đường ống dài về van điều khiển, giúp triệt tiêu đối áp và tăng vọt tốc độ chuyển động của xilanh được gọi là Van xả nhanh / Van xả cấp tốc (Quick Exhaust Valve - QEV).",
    why_wrong: "Van tiết lưu xả chỉ điều tiết lưu lượng; Van đệm là van hãm êm cuối hành trình; Van điều khiển tốc độ dùng để hãm chậm lại.",
    supplementary: "💡 **Cấu tạo Quick Exhaust Valve:** Gồm 3 cửa: Cửa 1 (P - nối van đảo chiều), Cửa 2 (A - bắt vào xilanh), Cửa 3 (R - miệng xả to lắp giảm thanh). Khi ngắt cấp khí ở P, màng van lật sang đóng P và mở toang cổng 2 sang 3 để xả khí trong vài phần nghìn giây."
  },
  "WS_PNE_063": {
    why_correct: "Nhận định SAI về ký hiệu van điều khiển hướng (theo tiêu chuẩn ISO 1219) là: 'Đường thẳng thể hiện hướng chảy'. Trong quy chuẩn vẽ sơ đồ ký hiệu van, Hướng dòng chảy bắt buộc phải được biểu diễn bằng CÁC MŨI TÊN (Arrow); các đoạn thẳng đứng thể hiện cổng nối thông và ký hiệu chữ T vuông góc thể hiện cổng van bị đóng chặn ngắt dòng.",
    why_wrong: "A (Mỗi ô vuông biểu thị một vị trí làm việc của con trượt van), B (Ký hiệu hình chữ T là cổng bị bịt ngắt dòng) và D (Vạch ngắn chìa ra ngoài ô vuông biểu thị cửa nối đường ống) đều là các quy ước vẽ chuẩn xác.",
    supplementary: "💡 **Đọc ký hiệu van:** Số ô vuông = Số vị trí chuyển mạch (Positions); Số đầu nối trên một ô vuông = Số cửa thông (Ports). Ví dụ van 5/2 gồm 2 ô vuông kề nhau và mỗi ô có 5 cửa nối."
  },
  "WS_PNE_064": {
    why_correct: "Đáp án SAI về ký hiệu chữ cái của các cửa van điều khiển hướng là: 'Cửa cấp: P, T'. Trong công nghệ Khí nén, Cửa cấp nguồn khí nén DUY NHẤT được ký hiệu là chữ cái P (viết tắt của Pressure / Pump) hoặc số 1. Chữ T (Tank - thùng dầu) là ký hiệu của cổng dầu hồi về bể chứa chỉ sử dụng riêng trong công nghệ Thủy lực (Hydraulics).",
    why_wrong: "A (Cửa làm việc cơ cấu chấp hành: A, B), B (Cửa xả khí ra môi trường: R, S) và C (Cửa tín hiệu điều khiển pilot: X, Y, Z) đều là các ký hiệu chuẩn hóa quốc tế của van khí nén.",
    supplementary: "💡 **Bảng đối chiếu ký hiệu chữ cái và số (ISO 11727):** Cửa nguồn: P = 1; Cửa làm việc: A = 2, B = 4; Cửa xả khí: R = 3, S = 5; Cửa tín hiệu điều khiển: X = 12, Y = 14."
  },
  "WS_PNE_065": {
    why_correct: "Theo tiêu chuẩn mã hóa số cho cửa van khí nén ISO 11727: Cửa xả khí R (Exhaust port) được biểu diễn bằng ký hiệu số đúng là: 'R : 3'.",
    why_wrong: "A (Cửa làm việc A được biểu diễn bằng số 2, số 4 là cửa B); C (Cửa cấp khí P là số 1, số 5 là cửa xả thứ hai S); D (Cửa điều khiển pilot kích hoạt mở cửa 2 là 12, cửa Z là 14).",
    supplementary: "💡 **Quy tắc số lẻ và số chẵn:** Số lẻ (1, 3, 5) là các cổng nguồn cấp và xả khí; Số chẵn (2, 4) là các cổng công tác đưa khí ra xilanh."
  },
  "WS_PNE_066": {
    why_correct: "Đối với van 5 cửa 3 vị trí (Van 5/3), ba kiểu cấu hình vị trí trung hòa (vị trí giữa khi không có tín hiệu điều khiển) tiêu chuẩn bao gồm: (1) All Ports Blocked (Tất cả các cửa đóng kín), (2) Exhaust Center / ABR (Cửa làm việc nối thông với cửa xả R, xilanh tự do dịch chuyển), (3) Pressure Center / PAB (Cửa cấp P nối thông cấp khí đồng thời ra cả A và B). Ký hiệu 'ABZ' KHÔNG PHẢI là một loại hình vị trí trung hòa chuẩn.",
    why_wrong: "ABR, PAB và Allport block là 3 loại vị trí trung hòa kinh điển trong catalogue van khí nén toàn cầu.",
    supplementary: "💡 **Chọn vị trí giữa van 5/3:** Cần dừng khẩn cấp giữ nguyên vị trí xilanh: dùng Closed Center; Cần đẩy tay di chuyển xilanh tự do khi ngắt nguồn: dùng Exhaust Center."
  },
  "WS_PNE_067": {
    why_correct: "Phát biểu KHÔNG PHẢI đặc tính của Van kiểu nấm (Poppet Valve) là: 'Lực tác động của van tỷ lệ nghịch với áp suất chất lỏng do đó lực tác động phải lớn'. Ngược lại, diện tích tiếp xúc cửa van và áp suất khí nén tác dụng trực tiếp ép chặt nấm van vào đế van, tạo lực bịt kín tỷ lệ thuận với áp suất hệ thống.",
    why_wrong: "A (Độ kín khít cực cao không có khe hở rò rỉ và tự đóng kín nhờ áp suất khí nén), B (Khoảng dịch chuyển hành trình nấm van rất ngắn nên đóng mở cực nhanh) và D (Có thể điều chỉnh độ mở lưu lượng lớn) là các ưu điểm thiết kế của van nấm.",
    supplementary: "💡 **So sánh Poppet vs Spool:** Van Poppet: Đóng mở nhanh, độ kín khít tuyệt đối, không kẹt bụi; Van Spool (Con trượt): Hành trình dài hơn, có khe hở nhỏ, dùng cho van nhiều cửa 5/2, 5/3."
  },
  "WS_PNE_068": {
    why_correct: "Van thoi / Van chọn (Shuttle Valve / Double Check Valve) là van logic thực hiện hàm logic 'HOẶC' (OR): Van có 2 cửa vào (X, Y) và 1 cửa ra (A). Khi cấp khí nén vào bất kỳ cửa nào trong 2 cửa (hoặc cả hai), quả thoi di chuyển đóng cửa áp suất thấp lại và cho dòng khí có áp suất cao hơn đi ra cổng công tác A.",
    why_wrong: "Two Pressure Valve thực hiện hàm logic VÀ (AND); Stop valve là van khóa chặn; Speed controller là van điều chỉnh lưu lượng.",
    supplementary: "💡 **Ứng dụng Shuttle Valve:** Dùng trong mạch điều khiển xilanh từ 2 vị trí khác nhau (ví dụ: nhấn nút ấn tại vị trí A HOẶC dậm bàn đạp chân tại vị trí B thì xilanh đều tác động)."
  },
  "WS_PNE_069": {
    why_correct: "Hình ảnh thể hiện ký hiệu của Van hai áp suất (Two-Pressure Valve / Van logic AND): Gồm hai cửa vào ở hai đầu và một piston trượt ở giữa, chỉ cho dòng khí đi ra cửa giữa khi cả hai cửa vào đều được cấp áp suất đồng thời.",
    why_wrong: "Van kiểm tra là van một chiều; Van dừng là van khóa ngắt dòng; Van đệm là cơ cấu hãm xilanh.",
    supplementary: "💡 **Ứng dụng an toàn 2 tay (Two-hand control):** Bắt buộc người công nhân phải dùng cả 2 tay nhấn đồng thời 2 nút bấm thì van hai áp mới cho khí ra kích hoạt máy ép dập, ngăn ngừa tai nạn dập đứt tay."
  },
  "WS_PNE_070": {
    why_correct: "Dựa vào thông số áp suất làm việc hiển thị trên sơ đồ mạch khí nén công nghiệp tiêu chuẩn: Dải áp suất hoạt động danh định của cơ cấu là từ 4 kgf/cm² đến 5 kgf/cm² (tương ứng khoảng 0.4 ~ 0.5 MPa).",
    why_wrong: "Các phương án 6-5, 4-3, 6-3 kgf/cm² không khớp với ngưỡng áp suất định mức cài đặt trên rơ le áp suất của sơ đồ.",
    supplementary: "💡 **Áp suất làm việc tối ưu:** Nhà máy thường duy trì áp suất đường ống chính là 6 ~ 7 bar và hạ áp tại cụm điều áp cục bộ của từng máy xuống 4 ~ 5 bar để đảm bảo áp suất máy luôn ổn định."
  },
  "WS_PNE_071": {
    why_correct: "Van có 2 cửa vào và 1 cửa ra, chỉ khi tác động khí nén đồng thời ở CẢ HAI cửa vào thì khí nén mới ra ở cửa ra (thực hiện phép toán logic AND), và khi hai áp suất khác nhau thì van cho áp suất thấp hơn đi ra cổng ra (được gọi là van ưu tiên áp suất thấp) - đây chính là định nghĩa chuẩn của Van hai áp suất (Two-Pressure Valve / Dual-Pressure Valve).",
    why_wrong: "Shuttle Valve là van OR ưu tiên áp suất cao; Speed controller là van tiết lưu; Stop Valve là van ngắt đóng mở.",
    supplementary: "💡 **Nguyên lý cơ học:** Khi cửa X có áp suất 4 bar và cửa Y có áp suất 6 bar, lực áp suất 6 bar sẽ đẩy nòng van trôi sang chèn chặn cổng Y lại, chỉ cho luồng khí áp suất thấp 4 bar đi ra cổng A."
  },
  "WS_PNE_072": {
    why_correct: "Ký hiệu van trì hoãn thời gian On (On-Delay Time Delay Valve / Van định thời khí nén) được thể hiện chính xác ở Hình A: Cấu tạo tích hợp gồm một van tiết lưu điều chỉnh, một bình tích áp nhỏ (buồng chứa thể tích khí nén tạo trễ) và một van đảo chiều 3/2 đóng mở bằng áp lực pilot.",
    why_wrong: "Các hình vẽ khác thể hiện van Off-delay hoặc các van xả nhanh.",
    supplementary: "💡 **Nguyên lý Timer khí nén:** Khí nén đi qua vít tiết lưu nạp từ từ vào bình tích áp; khi áp suất trong bình tích nạp đủ cao (đạt ngưỡng chuyển mạch) sau thời gian trễ t, nó sẽ đẩy nòng van 3/2 đóng thông cho xilanh tác động."
  },
  "WS_PNE_073": {
    why_correct: "Ký hiệu thể hiện van đảo chiều gồm: 5 cửa nối, 2 ô vuông vị trí làm việc (Van 5/2), trong đó có 1 cửa cấp nguồn P, 2 cửa xả khí R và S, 2 cửa làm việc A và B, và phương thức kích hoạt ở hai đầu có biểu tượng hình chữ nhật gạch chéo (Cuộn hút điện từ Solenoid) kết hợp tam giác (Trợ động bằng áp lực khí nén Pilot) - do đó là 'Van 5 cửa 2 vị trí, 1 cửa cấp, 2 cửa xả, 2 cửa làm việc, điều khiển bằng điện và khí nén'.",
    why_wrong: "A sai số cửa cấp; C và D sai thành van 5/3 (3 vị trí).",
    supplementary: "💡 **Cơ chế trợ động khí nén (Pilot Solenoid):** Dòng điện cuộn hút chỉ cần rất nhỏ (công suất ~1-2W) để mở một lỗ thoát khí nhỏ (cổng pilot), chính áp lực khí nén của hệ thống sẽ đẩy nòng van trượt to dịch chuyển."
  },
  "WS_PNE_074": {
    why_correct: "Ký hiệu van gồm 3 ô vuông kề nhau (3 vị trí làm việc) và trên ô vuông ở giữa có 4 cổng nối đường ống ra vào (1 cửa cấp khí P, 1 cửa xả T/R, và 2 cửa làm việc A, B) - đây là 'Van 4 cửa 3 vị trí, 1 cửa cấp, 2 cửa xả/ra' (Van 4/3).",
    why_wrong: "A, B, C sai số lượng cửa nối (Ports) hoặc sai số vị trí chuyển mạch (Positions).",
    supplementary: "💡 **Ứng dụng van 4/3:** Thường gặp nhiều trong các hệ thống mạch khí nén thủy lực điều khiển xilanh 2 chiều có vị trí dừng lơ lửng ở giữa."
  },
  "WS_PNE_075": {
    why_correct: "Hình A thể hiện chính xác ký hiệu tiêu chuẩn ISO 1219 của cơ cấu van điều khiển tương ứng với sơ đồ nguyên lý hoạt động của cụm van.",
    why_wrong: "Các hình B, C, D có ký hiệu sai lệch về số cửa, phương thức hồi vị lò xo hoặc phương thức kích hoạt cưỡng bức.",
    supplementary: "💡 **Quy tắc đọc sơ đồ van:** Vị trí bình thường (trạng thái nghỉ chưa kích hoạt) luôn là ô vuông có gắn các đường ống nối ra ngoài."
  },
  "WS_PNE_076": {
    why_correct: "Tính năng kỹ thuật quan trọng của Ống giảm thanh (Silencer / Muffler) là: Giảm thiểu độ ồn phát ra từ dòng khí xả tốc độ cao mà 'Không gây ảnh hưởng đến hoạt động và tốc độ vận hành của actuator' (nghĩa là diện tích thoát khí của ống giảm thanh phải đủ lớn để không tạo ra áp suất cản ngược lên xilanh).",
    why_wrong: "B sai vì hiệu quả giảm thanh yêu cầu rất cao (giảm từ 20 đến 30 dB); C và D là các hiện tượng lỗi hỏng hóc, không phải tính năng thiết kế.",
    supplementary: "💡 **Mức giảm ồn:** Ống giảm thanh chất lượng tốt có thể giảm tiếng rít xả khí từ ngưỡng chói tai 95 dB xuống mức an toàn dưới 70 dB cho thính giác người lao động."
  },
  "WS_PNE_077": {
    why_correct: "Hiện tượng 'Xuất hiện thay đổi như rung hay va chạm với ống xả' KHÔNG PHẢI là tính năng hay đặc điểm thiết kế của ống giảm thanh (đây là hiện tượng bất thường khi kết cấu lắp ráp bị lỏng ren hoặc lưu lượng xả vượt quá dải cho phép).",
    why_wrong: "A (Không gây đối áp ảnh hưởng actuator), B (Hiệu quả tiêu âm giảm thanh cao) và D (Độ bền vật liệu xốp ổn định, ít bị tắc nghẹt sau thời gian dài sử dụng) là các tính năng kỹ thuật chuẩn.",
    supplementary: "💡 **Vật liệu ống giảm thanh:** Làm bằng đồng thiếc xốp thiêu kết (Sintered Bronze), nhựa xốp Polyethylene hoặc lưới sợi thép không gỉ SUS."
  },
  "WS_PNE_078": {
    why_correct: "Các loại ống giảm thanh công nghiệp thường được sử dụng phổ biến bao gồm 3 dạng cấu trúc tiêu âm chính: 'Loại kháng (Resistive type), Loại phun bên cạnh (Side exhaust type), và Loại phun một phần (Partial exhaust type)'.",
    why_wrong: "Các phương án A, C, D sử dụng các thuật ngữ lắp ghép sai như 'loại điện kháng', 'phun một phần trên'.",
    supplementary: "💡 **Cấu trúc ống giảm thanh:** Loại hình trụ khuếch tán dòng khí qua các lỗ xốp li ti theo phương ngang 360° xung quanh thân giúp xé nhỏ dòng khí và triệt tiêu sóng âm va đập."
  },
  "WS_PNE_079": {
    why_correct: "Khẳng định KHÔNG PHẢI chú ý đúng của ống giảm thanh là: 'Chọn ống giảm thanh có diện tích mặt cắt nhỏ hơn so với lưu lượng'. Đây là sai lầm kỹ thuật nghiêm trọng; ngược lại, bắt buộc phải chọn ống giảm thanh có diện tích mặt cắt thông dòng LỚN HƠN diện tích cửa xả của van để khí thoát nhanh, tránh gây nghẽn áp suất ngược làm xilanh chạy chậm.",
    why_wrong: "B (Tránh đặt sát vật cản gây bít miệng xả), C (Khi bị đóng cặn dầu bụi bẩn có thể ngâm rửa dung môi để tái sử dụng) và D (Vỏ kim loại xốp thiêu kết chịu lực uốn yếu nên không được dùng cờ-lê siết quá mạnh làm nứt vỡ) đều là các lưu ý sử dụng chuẩn mực.",
    supplementary: "💡 **Dấu hiệu ống giảm thanh bị nghẹt:** Máy chạy chậm dần đều sau vài tháng vận hành hoặc nghe tiếng xả khí yếu ớt xì dài liên tục."
  },
  "WS_PNE_080": {
    why_correct: "Bộ tạo chân không bằng khí nén (Vacuum Ejector) hoạt động bằng cách cấp nguồn khí nén tốc độ cao để hút chân không trực tiếp, kết hợp đồng bộ với: Núm hút chân không (Pad), Van điện từ Solenoid đóng mở khí và Bộ lọc chân không (Vacuum Filter). Thiết bị 'Regulator' (Bộ điều áp) KHÔNG PHẢI là thiết bị lắp cùng trên đầu hút chân không của Ejector.",
    why_wrong: "Pad hút là cơ cấu gắp phôi; Solenoid điều khiển đóng ngắt chân không và xả khí phá chân không (Blow-off); Bộ lọc chân không bảo vệ miệng ejector không bị bụi hút vào làm tắc.",
    supplementary: "💡 **Mạch chân không hoàn chỉnh:** Nguồn khí nén → Van cấp khí nén → Ejector tạo chân không → Bộ lọc chân không → Cảm biến áp suất chân không kỹ thuật số → Giác hút Pad."
  },
  "WS_PNE_081": {
    why_correct: "Đặc điểm nổi bật nhất của Bộ tạo chân không Ejector (dựa trên hiệu ứng Venturi) là: 'Có kích thước siêu nhỏ gọn và trọng lượng rất nhẹ' (có thể gắn trực tiếp ngay trên đầu cánh tay robot gắp sản phẩm mà không làm tăng tải trọng quán tính).",
    why_wrong: "A sai vì Ejector không có chi tiết chuyển động cơ học nên tuổi thọ cực cao; C sai vì Ejector đáp ứng đóng cắt On-Off liên tục với tần số rất cao; D sai vì có thể tích hợp van phá chân không điều chỉnh dễ dàng.",
    supplementary: "💡 **Ưu thế so với bơm hút chân không (Vacuum Pump):** Không cần mô tơ điện cồng kềnh, không dùng dầu, đáp ứng thời gian hút gắp sản phẩm chỉ trong vài phần mười giây."
  },
  "WS_PNE_082": {
    why_correct: "Phát biểu KHÔNG PHẢI đặc điểm của Ejector là: 'Khó có thể điều chỉnh chi tiết'. Ejector chân không hiện đại tích hợp sẵn vít chỉnh lưu lượng dòng khí thổi phá chân không (Vacuum release flow adjuster) cho phép tinh chỉnh cực kỳ chi tiết thời gian và lực nhả phôi.",
    why_wrong: "A (Hoàn toàn không sinh rung động trong quá trình vận hành), B (Tuổi thọ sử dụng rất cao do không có piston hay cánh gạt ma sát mòn) và C (Kích thước nhỏ gọn gắn trực tiếp lên đồ gá) đều là các đặc tính vượt trội của Ejector.",
    supplementary: "💡 **Nguyên lý Venturi:** Khí nén đi qua vòi phun thắt hẹp (Nozzle) tăng tốc lên vận tốc siêu âm làm áp suất tĩnh tụt xuống thấp hơn áp suất khí quyển, tạo ra lực hút chân không mạnh tại buồng hút."
  },
  "WS_PNE_083": {
    why_correct: "Cấu tạo cơ bản của một Bộ tạo chân không Ejector gồm 3 phần tử nối tiếp: (1) Vòi phun thắt hẹp (Nozzle) → (2) Buồng chân không hút khí (Vacuum Chamber) → (3) [Ống khuếch tán loe rộng - Diffuser]. Ô trống cần điền chính là: Diffuser.",
    why_wrong: "Nozzle nằm ở đầu cấp; Buồng khuếch tán nằm ở khoang giữa; Ống dẫn khí là ống kết nối ngoại vi.",
    supplementary: "💡 **Vai trò của Diffuser:** Ống khuếch tán có tiết diện loe rộng dần về phía đuôi giúp làm giảm vận tốc dòng khí và phục hồi lại áp suất khí xả ra áp suất khí quyển qua ống giảm thanh."
  },
  "WS_PNE_084": {
    why_correct: "Quy chuẩn quốc tế về phân loại màu sắc nút nhấn điều khiển (theo tiêu chuẩn IEC 60204-1 / JIS C 0448): 'Nút màu Xanh lá cây (Green) : Chức năng Khởi động (Start) hoặc cấp nguồn an toàn'.",
    why_wrong: "B sai vì Dừng khẩn cấp bắt buộc phải là Màu ĐỎ; C sai vì Nút khởi động lại (Reset) thường là Màu Xanh lam (Blue), Trắng hoặc Đen; D sai vì Màu Đỏ dùng cho Dừng (Stop / Emergency Stop).",
    supplementary: "💡 **Bảng màu nút nhấn IEC 60204-1:** Đỏ = Dừng / Khẩn cấp; Xanh lá = Khởi động máy; Vàng = Hành động bất thường / Khắc phục sự cố; Xanh dương = Reset / Bắt buộc thực hiện; Trắng/Đen = Điều khiển chung."
  },
  "WS_PNE_085": {
    why_correct: "Phân loại thiết bị điện điều khiển sử dụng trong mạch tủ điện: 'Công tắc vận hành (Operator Switches) bao gồm: nút nhấn (Push button), công tắc chuyển mạch (Selector switch), và công tắc xoay (Rotary switch)'.",
    why_wrong: "A sai vì Rơ le nhiệt, rơ le thời gian là thiết bị logic/bảo vệ; C và D sai vì Chuông, đèn báo, còi là Thiết bị chỉ thị/báo động (Indicating/Signaling devices), không phải thiết bị vận hành hay kiểm soát.",
    supplementary: "💡 **Nhóm thiết bị tủ điện:** (1) Thiết bị nhập lệnh (Nút nhấn, công tắc); (2) Thiết bị logic trung gian (Rơ le, Timer, PLC); (3) Thiết bị chấp hành đóng cắt (Contactor, SSR); (4) Thiết bị hiển thị (Đèn báo pha, còi hú)."
  },
  "WS_PNE_086": {
    why_correct: "Trong sơ đồ cấu tạo của Rơ le điện từ (Electromagnetic Relay), chi tiết gắn liền với cụm tiếp điểm chuyển động bị nam châm điện hút vào khi cuộn dây có điện được gọi là 'Tấm sắt di chuyển / Phần ứng' (Armature / Moving Iron Plate).",
    why_wrong: "Tiếp điểm di chuyển là phần lá đồng mang hạt tiếp điểm điện; Nam châm là lõi từ tĩnh; Tấm cách điện là đế đỡ.",
    supplementary: "💡 **Nguyên lý đóng ngắt Relay:** Cuộn dây có điện → Sinh từ trường trong lõi sắt → Hút tấm sắt di chuyển Armature thắng lực lò xo → Đẩy tiếp điểm động chạm vào tiếp điểm tĩnh."
  },
  "WS_PNE_087": {
    why_correct: "Giải thích đúng đắn nhất về ưu điểm của Rơ le (Relay): 'Có thể xử lý và chuyển tiếp tín hiệu của các tính chất nguồn điện khác nhau'. Cuộn hút điều khiển bằng nguồn một chiều 24V DC công suất nhỏ nhưng có thể đóng ngắt an toàn cho các tiếp điểm mang dòng điện xoay chiều 220V AC công suất lớn nhờ cách ly điện hoàn toàn.",
    why_wrong: "A sai vì rơ le chỉ có 1 ngõ vào cuộn dây; B sai vì có thể duy trì trạng thái bằng mạch tự giữ (Self-holding circuit); D sai vì tính năng truyền tải cách ly tín hiệu rất tốt.",
    supplementary: "💡 **Khả năng cách ly điện:** Khoảng cách phóng điện giữa cuộn coil và tiếp điểm rơ le trung gian thường chịu được điện áp thử nghiệm cách điện tới 2.000V AC."
  },
  "WS_PNE_088": {
    why_correct: "Các tính năng cơ bản của Rơ le trung gian trong mạch điều khiển bao gồm: 'Tính năng phân chia tín hiệu (từ 1 tín hiệu cuộn coil nhân ra nhiều tiếp điểm NO/NC điều khiển đồng thời nhiều nhánh), Tính năng khuếch đại (tín hiệu dòng nhỏ điều khiển tải dòng lớn), và Tính năng biến đổi (đảo trạng thái logic hoặc chuyển đổi mức điện áp)'.",
    why_wrong: "Các phương án khác đưa thêm thuật ngữ sai như 'tính năng phân tách', 'tính năng biến thiên'.",
    supplementary: "💡 **Rơ le 4C (4 DPDT):** Một cuộn coil kích hoạt đồng thời 4 bộ tiếp điểm C độc lập, cho phép phân nhánh điều khiển 4 mạch điện hoàn toàn tách biệt."
  },
  "WS_PNE_089": {
    why_correct: "Khả năng của Rơ le cho phép dòng điện chạy qua tiếp điểm đầu ra có cường độ lớn gấp hàng chục đến hàng trăm lần cường độ dòng điện điều khiển đưa vào cuộn dây được gọi là 'Tính năng khuếch đại' (Amplification / Signal Amplification).",
    why_wrong: "Tính năng biến đổi là đảo trạng thái hoặc chuyển AC/DC; Tính năng phân chia điện áp là cầu phân áp.",
    supplementary: "💡 **Ví dụ khuếch đại:** Cuộn hút rơ le 24V DC chỉ tiêu thụ dòng điện nhỏ 20 mA (công suất ~0.5W), nhưng tiếp điểm chịu được dòng tải động cơ lên tới 10A ở 220V AC (công suất 2.200W) - khuếch đại công suất hơn 4.000 lần!"
  },
  "WS_PNE_090": {
    why_correct: "Trong các thông số lựa chọn Rơ le, 'Tuổi thọ của cuộn dây' KHÔNG PHẢI là hạng mục kiểm tra chính (vì cuộn dây là thành phần tĩnh ít khi bị hỏng do cơ học). Thay vào đó, hạng mục quyết định tuổi thọ của rơ le là Tuổi thọ số lần đóng ngắt của Cụm tiếp điểm (Contact Life) do tiếp điểm bị mài mòn hồ quang điện.",
    why_wrong: "A (Dòng điện tiêu thụ của cuộn dây), C (Cấp điện áp nguồn đầu vào cuộn coil: 24V DC, 220V AC) và D (Thời gian đáp ứng đóng/mở tiếp điểm tính bằng mili-giây) là các thông số bắt buộc phải kiểm tra theo datasheet.",
    supplementary: "💡 **Tuổi thọ tiếp điểm:** Tuổi thọ cơ học (Mechanical Life - không tải): 10 triệu đến 50 triệu lần đóng ngắt; Tuổi thọ điện (Electrical Life - tải định mức): 100.000 đến 500.000 lần."
  },
  "WS_PNE_091": {
    why_correct: "Ba yếu tố an toàn kỹ thuật cốt tử bắt buộc phải tính toán khi sử dụng núm hút chân không (Suction Pad) để gắp giữ vật thể là: 'Tính an toàn (Hệ số an toàn lực hút S ≥ 2 đến 4), Diện tích hút hiệu dụng của Pad, và Tư thế lắp đặt (Hút phương ngang phẳng hay hút gá phương đứng chịu lực trượt)'.",
    why_wrong: "B, C, D là các liệt kê thiếu hoặc chứa các cụm từ không đúng danh mục tiêu chuẩn thiết kế.",
    supplementary: "💡 **Công thức tính lực hút giác hút chân không:** W = P × A / S (trong đó P là áp suất chân không âm, A là diện tích tiếp xúc của núm hút, S là hệ số an toàn: S = 2 khi gắp nằm ngang, S = 4 khi gắp thẳng đứng)."
  },
  "WS_PNE_092": {
    why_correct: "Đặc tính kỹ thuật của từng loại chất liệu chế tạo núm hút chân không: 'Cao su NBR (Nitrile-butadiene rubber): Là vật liệu tiêu chuẩn thông dụng nhất, độ bền cơ học cao, chống dầu tốt, sử dụng cho hầu hết các loại phôi gia công thông thường (ngoại trừ các tấm tôn sắt dầu, phôi gỗ dăm hay hộp carton thô ráp)'.",
    why_wrong: "A và D sai vì Silicone (Si) là vật liệu chuyên dùng cho ngành thực phẩm y tế và phôi mỏng chịu nhiệt (-50°C đến +200°C); F (Cao su Flo/Viton) dùng cho hóa chất ăn mòn.",
    supplementary: "💡 **Lựa chọn giác hút theo phôi:** Phôi bằng phẳng: dùng núm hút dẹt (Flat Pad); Phôi cong vênh hoặc nghiêng góc: dùng núm hút nếp gấp (Bellows Pad)."
  },
  "WS_PNE_093": {
    why_correct: "Công tắc nút nhấn dừng khẩn cấp dạng hình nấm (Emergency Stop Pushbutton) theo tiêu chuẩn an toàn máy móc công nghiệp quốc tế (ISO 13850 / IEC 60947-5-5) bắt buộc phải có nấm nút 'Màu đỏ' (Red) nổi bật trên nền biển tròn màu vàng.",
    why_wrong: "Xanh lá là nút Start khởi động; Xanh vàng là màu dây nối đất tiếp địa; Màu đen là nút điều khiển chức năng bình thường.",
    supplementary: "💡 **Cơ chế nút E-Stop:** Dạng nhấn khóa tự giữ (Push-lock / Twist-to-reset). Khi người vận hành đập mạnh vào nấm đỏ, tiếp điểm thường đóng (NC) mở toang cắt điện toàn bộ máy và nút bị khóa chết, phải xoay vặn theo chiều mũi tên mới nhả ra được."
  },
  "WS_PNE_094": {
    why_correct: "Ký hiệu trên sơ đồ mạch thể hiện một hình tròn có một hình tam giác đen kín ở bên trong chỉ hướng ra ngoài - đây là ký hiệu tiêu chuẩn ISO 1219 của Máy nén khí (Pneumatic Compressor / Bơm nguồn tạo khí nén).",
    why_wrong: "Bơm chân không có tam giác hướng vào trong; Động cơ khí nén có tam giác hở chỉ chiều quay.",
    supplementary: "💡 **Phân biệt Máy nén và Động cơ:** Máy nén khí (Nguồn năng lượng): Tam giác đỉnh chỉ HƯỚNG RA NGOÀI đường ống; Động cơ khí nén (Thiết bị tiêu thụ năng lượng): Tam giác đỉnh chỉ HƯỚNG VÀO TRONG từ đường ống."
  },
  "WS_PNE_095": {
    why_correct: "Hình A thể hiện Bộ rơ le định thời kỹ thuật số điện tử (Digital Timer / Bộ hẹn giờ số), có màn hình hiển thị LED 7 đoạn và các phím bấm điện tử cài đặt trực tiếp thời gian đếm chính xác.",
    why_wrong: "Các hình khác là rơ le thời gian cơ khí dạng núm xoay kim chỉ tương tự (Analog Timer) hoặc rơ le nhiệt.",
    supplementary: "💡 **Ưu điểm Digital Timer:** Cài đặt thông số chính xác tới 0.01 giây, có nhiều chế độ hoạt động (On-delay, Off-delay, Flicker chu kỳ nhấp nháy, One-shot)."
  },
  "WS_PNE_096": {
    why_correct: "Giải thích chuẩn xác về hạng mục 'Số tiếp điểm' khi lựa chọn Rơ le: 'Thể hiện cấu hình và số lượng các cặp tiếp điểm có trong rơ le (ví dụ: loại 4c gồm 4 cặp tiếp điểm chuyển đổi form C, loại 2a2b gồm 2 tiếp điểm thường mở NO và 2 tiếp điểm thường đóng NC)'." ,
    why_wrong: "A và B giải thích về điện áp hoặc dòng điện định mức, không phải định nghĩa của số tiếp điểm; D là giải thích sai.",
    supplementary: "💡 **Quy ước chữ cái tiếp điểm:** a = NO (Normally Open); b = NC (Normally Closed); c = Chuyển đổi kép (Form C = 1 COM + 1 NO + 1 NC)."
  },
  "WS_PNE_097": {
    why_correct: "Thông số 'Điện áp định mức của cuộn dây' (Coil Rated Voltage) khi lựa chọn rơ le là: 'Mức điện áp tiêu chuẩn cấp vào hai đầu cuộn dây cuộn hút (Coil) để rơ le đóng ngắt an toàn, tiêu biểu gồm các cấp điện áp: DC 12V, DC 24V, AC 110V, AC 220V'.",
    why_wrong: "B là thông số dòng tải của tiếp điểm; C và D chỉ là số lượng tiếp điểm đơn thuần.",
    supplementary: "💡 **Tuyệt đối không cấp nhầm áp coil:** Cấp nguồn 220V AC vào cuộn coil 24V DC sẽ làm cuộn dây nổ cháy khét ngay lập tức!"
  },
  "WS_PNE_098": {
    why_correct: "Ký hiệu chuẩn theo tiêu chuẩn ký hiệu thủy khí ISO 1219 của Máy nén khí là Hình D: Hình tròn có một tam giác đen đặc nằm ở phía trên chỉ mũi nhọn hướng ra cổng nối đường ống cấp khí.",
    why_wrong: "Hình A là bơm thủy lực; Hình B là động cơ khí nén; Hình C là van tiết lưu.",
    supplementary: "💡 **Tam giác đen vs tam giác trắng:** Tam giác đen đặc (Solid triangle) biểu thị chất lưu là Khí nén; Tam giác tô đen kín tương tự trong thủy lực cũng được dùng nhưng mạch dầu thủy lực vẽ ký hiệu thùng chứa."
  },
  "WS_PNE_099": {
    why_correct: "Định nghĩa chuẩn xác của thông số đầu vào rơ le: 'Điện áp tiêu chuẩn đầu vào coil (Coil Voltage) là mức điện áp danh định cấp cho cuộn dây nam châm điện, tiêu biểu là DC 12V, 24V, AC 110V, 220V...'.",
    why_wrong: "B, C, D là các mô tả về dòng tiếp điểm hoặc số tiếp điểm thường mở a / thường đóng b.",
    supplementary: "💡 **Dải dung sai điện áp coil:** Thông thường rơ le công nghiệp hoạt động ổn định trong khoảng 85% đến 110% điện áp danh định của cuộn dây."
  },
  "WS_PNE_100": {
    why_correct: "Chức năng và tính năng kỹ thuật chính của Bộ hẹn giờ (Timer Relay / Rơ le thời gian): 'Là thiết bị kiểm soát tuần tự điều khiển đóng ngắt các tiếp điểm điện ON, OFF theo một khoảng thời gian trễ xác định đã được cài đặt trước'.",
    why_wrong: "A chỉ là xử lý tín hiệu điện đơn thuần; C là xử lý tín hiệu số của vi xử lý; D chỉ giới hạn ở chế độ Delay.",
    supplementary: "💡 **Ứng dụng kinh điển:** Sử dụng trong mạch khởi động động cơ Sao - Tam giác (Star-Delta Starter): Đóng chạy chế độ Sao trong 5 giây, sau đó Timer tác động ngắt Sao và đóng sang chế độ Tam giác."
  }
};
