// Knowledge Base for Programmable Logic Controller (PLC) (99 questions: WS_PLC_001 - WS_PLC_100)
// Technical precision, architecture, ladder logic, hexadecimal conversions, and timing diagrams.

module.exports = {
  "WS_PLC_001": {
    why_correct: "ROM (Read-Only Memory) là bộ nhớ chỉ đọc, nội dung chương trình cơ sở (Firmware/OS) được nhà sản xuất nạp cố định vào chip IC từ lúc chế tạo. Người dùng và CPU PLC trong quá trình vận hành bình thường không thể ghi đè hay thay đổi nội dung bộ nhớ ROM.",
    why_wrong: "B đúng vì ROM là bộ nhớ không bay hơi (Non-volatile), không bị mất dữ liệu khi cúp nguồn điện; C đúng vì chức năng thuần túy của nó là để CPU đọc lệnh; D đúng vì ROM được chế tạo dưới dạng vi mạch tích hợp (IC bán dẫn).",
    supplementary: "💡 **Phân cấp bộ nhớ PLC:** ROM/Flash ROM (chứa hệ điều hành CPU, an toàn tuyệt đối); RAM (chứa logic chương trình và dữ liệu thanh ghi D, cần pin backup); EEPROM/Flash (lưu bản sao chương trình dự phòng không cần pin)."
  },
  "WS_PLC_002": {
    why_correct: "Van điện từ (Solenoid Valve) là cơ cấu chấp hành (Actuator) thuộc khối thiết bị đầu ra (Output). Cuộn hút của van nhận tín hiệu đóng điện từ module đầu ra số (Y) của PLC để điều khiển đóng mở dòng khí nén hoặc dầu thủy lực.",
    why_wrong: "Push button switch (Nút bấm nhả), Limit switch (Công tắc hành trình), Toggle switch (Công tắc gạt) đều là các khí cụ đóng ngắt cơ học phát tín hiệu logic 24V DC vào ngõ vào số (Input X) của PLC.",
    supplementary: "💡 **Nguyên tắc phân biệt I/O:** Đầu vào (Input X): Là thiết bị thu thập thông tin, trạng thái từ hiện trường đưa về CPU (cảm biến, nút ấn); Đầu ra (Output Y): Là tải nhận lệnh từ CPU để tác động ra thế giới cơ khí (cuộn hút van khí, cuộn hút contactor, đèn báo, còi)."
  },
  "WS_PLC_003": {
    why_correct: "Tiếp điểm C (Form C Contact / Transfer Contact - Tiếp điểm chuyển đổi kép) là loại tiếp điểm có 3 cực: một cực chung (Common - COM), một cực thường mở (Normally Open - NO / tiếp điểm A) và một cực thường đóng (Normally Closed - NC / tiếp điểm B). Khi cuộn hút tác động, nó chuyển mạch đồng thời ngắt B và đóng A.",
    why_wrong: "Tiếp điểm A chỉ là tiếp điểm thường mở đơn thuần (Form A); Tiếp điểm B chỉ là tiếp điểm thường đóng đơn thuần (Form B); D sai vì C là tên gọi riêng biệt của dạng tiếp điểm chuyển đổi 3 cực.",
    supplementary: "💡 **Quy chuẩn tiếp điểm cơ điện:** Tiếp điểm A (Make Contact / NO): bình thường hở, tác động đóng; Tiếp điểm B (Break Contact / NC): bình thường đóng, tác động mở; Tiếp điểm C (Transfer Contact): đảo trạng thái giữa 2 ngả."
  },
  "WS_PLC_004": {
    why_correct: "Đặc điểm 'Dễ bảo dưỡng và sửa chữa' KHÔNG PHẢI là đặc tính của tủ điều khiển bằng Relay trung gian cơ khí. Ngược lại, mạch relay sử dụng hàng trăm sợi dây nối cứng chằng chịt, khi xảy ra sự cố hỏng tiếp điểm mòn tiếp xúc hay lỏng ốc dây điện thì việc dò tìm lỗi rất mất thời gian và khó khăn.",
    why_wrong: "A (Điều khiển bằng Hard logic - logic nối dây cứng), C (Điều khiển có tiếp xúc cơ học gây tia lửa mòn tiếp điểm) và D (Rất khó mở rộng hệ thống vì phải đi lại toàn bộ dây điện) đều là các nhược điểm thực tế của tủ relay cổ điển.",
    supplementary: "💡 **Ưu thế của PLC so với tủ Relay:** Thay đổi quy trình chỉ cần sửa lệnh phần mềm trên máy tính trong vài phút, không cần bấm đầu cos, tháo lắp nối lại dây điện."
  },
  "WS_PLC_005": {
    why_correct: "Phát biểu 'Khó khăn trong việc nhỏ hóa' là SAI khi nói về PLC. Ngược lại, ưu điểm vượt bậc của PLC là khả năng thu nhỏ kích thước tủ điện cực kỳ mạnh mẽ (thay thế hàng trăm rơ le, timer, counter cơ cồng kềnh bằng một khối PLC nhỏ gọn chỉ bằng lòng bàn tay).",
    why_wrong: "B, C, D là các ưu điểm cốt lõi của PLC: điều khiển hệ thống quy mô lớn tính năng cao với kích thước nhỏ, lập trình linh hoạt bằng phần mềm (Software program) và điều khiển bán dẫn ngõ vào không tiếp xúc cơ học.",
    supplementary: "💡 **Lịch sử ra đời PLC:** Năm 1968, hãng General Motors đề xuất yêu cầu chế tạo một thiết bị điện tử thay thế tủ rơ le cồng kềnh để rút ngắn thời gian đổi mới dây chuyền sản xuất xe hơi, từ đó PLC ra đời."
  },
  "WS_PLC_006": {
    why_correct: "Khi phát sinh lỗi tính toán sai của CPU, treo vi xử lý hoặc lỗi phần cứng cần khởi tạo lại toàn bộ hệ thống về trạng thái ban đầu, người vận hành phải gạt công tắc chuyển mạch trên mặt CPU sang vị trí 'RESET CPU'. Thao tác này kích hoạt mạch ngắt Reset phần cứng nạp lại trạng thái ban đầu.",
    why_wrong: "Stop CPU chỉ dừng chu trình quét tính toán của chương trình, không xóa lỗi thanh ghi phần cứng; Clear latch chỉ xóa vùng nhớ duy trì; Format CPU sẽ xóa sạch phân vùng bộ nhớ chương trình.",
    supplementary: "💡 **Thao tác Reset CPU Mitsubishi Q-Series:** Gạt công tắc gạt RUN/STOP/RESET xuống vị trí RESET và giữ khoảng 1 giây cho đến khi đèn ERR tắt, sau đó thả tay về vị trí STOP rồi gạt lên RUN."
  },
  "WS_PLC_007": {
    why_correct: "Đèn chỉ báo USER LED (hoặc đèn USER/BAT) trên CPU PLC sẽ nhấp nháy khi người vận hành thực hiện thao tác Latch Clear (xóa vùng nhớ duy trì Latch). Việc nhấp nháy báo hiệu cho người dùng xác nhận thao tác xóa trước khi hoàn tất.",
    why_wrong: "Khi bình thường đèn RUN sáng xanh cố định; Lệnh CHK phát hiện lỗi sẽ làm sáng đèn ERR; Bật cờ Annunciator (F) sẽ làm sáng đèn USER/ERR tương ứng theo cấu hình chẩn đoán.",
    supplementary: "💡 **Latch Clear Flow:** Gạt công tắc sang L.CLR cho đến khi đèn USER nhấp nháy → Thả tay về STOP → Gạt lại L.CLR một lần nữa để xác nhận xóa toàn bộ dữ liệu vùng Latch."
  },
  "WS_PLC_008": {
    why_correct: "Vùng nhớ thanh ghi File (File Register - ký hiệu R hoặc ZR trong PLC Mitsubishi dòng Q) mặc định được lưu trữ trong phân vùng Bộ nhớ RAM tiêu chuẩn (Standard RAM) bên trong CPU hoặc gắn trên thẻ nhớ mở rộng SRAM.",
    why_wrong: "Program memory chứa mã lệnh ladder compiled; Standard ROM chứa chương trình dự phòng boot; System memory chứa hệ điều hành phần mềm vi mã của CPU không cho phép người dùng can thiệp.",
    supplementary: "💡 **Ứng dụng File Register R:** Dùng để lưu trữ hàng nghìn công thức sản xuất (Recipe), bảng tọa độ vị trí gia công hoặc dữ liệu lưu nhật ký sản xuất (Data Logging)."
  },
  "WS_PLC_009": {
    why_correct: "Bên trong khối CPU PLC có tích hợp một tụ điện điện dung lớn (Supercapacitor / Condenser dự phòng). Khi rút pin cũ ra để thay pin mới trong trạng thái đã ngắt nguồn điện chính, tụ điện này có khả năng duy trì điện áp nuôi bộ nhớ RAM và đồng hồ thời gian thực RTC trong khoảng thời gian tối đa là 3 phút.",
    why_wrong: "2 phút là quá ngắn so với dung lượng tích trữ của tụ chuẩn công nghiệp; 5 phút và 10 phút vượt quá giới hạn xả điện áp an toàn của tụ khi không có pin.",
    supplementary: "💡 **Quy tắc vàng khi thay pin PLC:** Luôn chuẩn bị sẵn pin mới bên cạnh trước khi rút pin cũ; thao tác thay thế dứt khoát hoàn thành trong vòng dưới 3 phút để tuyệt đối không bị mất chương trình trong SRAM."
  },
  "WS_PLC_010": {
    why_correct: "Thời gian đảm bảo tuổi thọ của pin lithium dự phòng (Battery backup) gắn trên thẻ nhớ SRAM của CPU PLC trong điều kiện cúp nguồn điện hoàn toàn là khoảng 13 tháng (hơn 1 năm).",
    why_wrong: "6 tháng là quá ngắn; 1 năm là con số ước lượng tròn; 10 năm là tuổi thọ của pin khi PLC luôn được cấp nguồn điện lưới 24/7.",
    supplementary: "💡 **Cảnh báo pin:** Khi pin yếu, cờ đặc biệt SM51 hoặc SM52 bật ON và đèn LED BAT/ERR trên CPU sáng đỏ. Kỹ thuật viên cần thay pin ngay trong vòng 1-2 tuần."
  },
  "WS_PLC_011": {
    why_correct: "Trong kiến trúc gán địa chỉ I/O của PLC Mitsubishi theo hệ đếm Hexa (thập lục phân), mỗi slot module chiếm 16 điểm (1 Word I/O). Slot đầu tiên là 00~0F (16 điểm), slot thứ hai là 10~1F, slot thứ ba là 20~2F. Khi đó, slot tiếp theo là 'Slot trống' chiếm 16 điểm từ 30 đến 3F. Điểm I/O kết thúc của slot này là 3F.",
    why_wrong: "2F là điểm kết thúc của slot trước đó; 30 là điểm bắt đầu của slot; 40 là điểm bắt đầu của slot tiếp sau.",
    supplementary: "💡 **Đếm địa chỉ I/O hệ Hex:** 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F (tổng cộng 16 điểm). Hết 0F chuyển sang 10; hết 1F chuyển sang 20; hết 2F chuyển sang 30...3F."
  },
  "WS_PLC_012": {
    why_correct: "Chuyển đổi số nhị phân (1001)₂ sang hệ thập phân: Áp dụng quy tắc trọng số lũy thừa của 2: (1 × 2³) + (0 × 2²) + (0 × 2¹) + (1 × 2⁰) = 8 + 0 + 0 + 1 = 9.",
    why_wrong: "8 tương ứng (1000)₂; 10 tương ứng (1010)₂; 11 tương ứng (1011)₂.",
    supplementary: "💡 **Bảng mã BCD 4-bit cơ bản:** 0000=0, 0001=1, 0010=2, 0011=3, 0100=4, 0101=5, 0110=6, 0111=7, 1000=8, 1001=9."
  },
  "WS_PLC_013": {
    why_correct: "Chuyển đổi số thập phân 89 sang hệ nhị phân 8-bit: Ta tách thành tổng các lũy thừa của 2: 89 = 64 + 16 + 8 + 1 = 2⁶ + 2⁴ + 2³ + 2⁰. Điền các bit 1 vào các vị trí trọng số 6, 4, 3, 0, ta được: 0101 1001₂.",
    why_wrong: "B (1010 0110₂ = 166); C (1101 1001₂ = 217); D (0011 0101₂ = 53).",
    supplementary: "💡 **Kiểm tra trọng số:** 0×128 + 1×64 + 0×32 + 1×16 + 1×8 + 0×4 + 0×2 + 1×1 = 64 + 16 + 8 + 1 = 89."
  },
  "WS_PLC_014": {
    why_correct: "Chuyển đổi số thập phân 199 sang hệ thập lục phân (Hexadecimal): Thực hiện phép chia liên tiếp cho 16: 199 ÷ 16 = 12 (dư 7). Trong hệ Hex, số 12 được biểu diễn bằng ký tự 'C'. Ghép thương và số dư ta được giá trị: C7 (tức 0xC7).",
    why_wrong: "7C là đảo ngược vị trí hàng đơn vị và hàng chục; 127 là ghi số thập phân thô; B6 = 11×16 + 6 = 182.",
    supplementary: "💡 **Kiểm tra ngược lại:** C7₍₁₆₎ = (12 × 16¹) + (7 × 16⁰) = 192 + 7 = 199₍₁₀₎. Ký hiệu trong PLC Mitsubishi là H'C7 hoặc HC7."
  },
  "WS_PLC_015": {
    why_correct: "Tín hiệu từ cảm biến quang, cảm biến tiệm cận số (Sensor ON/OFF) là tín hiệu số (Digital Input - chỉ có 2 mức logic 0 và 1). Các đại lượng vật lý biến thiên liên tục trong dải đo như Điện áp (0~10V), Áp suất khí (0~10 bar), Nhiệt độ (0~100°C) mới là tín hiệu Tương tự (Analog).",
    why_wrong: "B (Điện áp), C (Áp suất) và D (Nhiệt độ) đều là các đại lượng vật lý liên tục cần module chuyển đổi tương tự - số A/D (Analog-to-Digital Converter) để xử lý.",
    supplementary: "💡 **Phân biệt Digital vs Analog trong PLC:** Digital: Trạng thái đóng/cắt dứt khoát đưa vào ngõ X; Analog: Điện áp 0-10V hoặc dòng điện 4-20mA đưa vào module như Q64AD, FX2N-4AD."
  },
  "WS_PLC_016": {
    why_correct: "Để ngăn chặn xung nhiễu điện từ, xung sét lan truyền và gai điện áp cao từ các thiết bị ngoài nhà máy xâm nhập vào phá hủy vi xử lý trung tâm CPU, các module đầu vào/đầu ra của PLC luôn sử dụng linh kiện cách ly quang Photo Coupler (Opto-coupler).",
    why_wrong: "Photo Transistor chỉ là linh kiện đơn lẻ; Card đặc biệt là module chức năng mở rộng; Diode phân cực chỉ chống ngược chiều dòng DC.",
    supplementary: "💡 **Cấu tạo cách ly I/O PLC:** Đầu vào 24V đi qua LED hồng ngoại bên trong Opto; Phototransistor bên trong thu sáng truyền mức logic 5V về CPU, hai phía hoàn toàn không có liên kết điện trực tiếp."
  },
  "WS_PLC_017": {
    why_correct: "Đèn BOOT LED trên mặt CPU PLC sẽ nhấp nháy khi tiến trình 'Sử dụng tự động ở ROM tiêu chuẩn' (Auto boot từ Standard ROM/Flash sang Program RAM) đã hoàn thành việc chuyển tiếp dữ liệu chương trình.",
    why_wrong: "Khi bắt đầu vận hành boot đèn sẽ sáng đứng; Bật nguồn PLC hay gắn module không làm nhấp nháy đèn BOOT riêng biệt này.",
    supplementary: "💡 **Chức năng BOOT Operation:** Cho phép PLC tự động nạp chương trình gốc từ ROM chống bay hơi vào RAM mỗi khi khởi động, phòng ngừa rủi ro RAM bị mất dữ liệu do hết pin."
  },
  "WS_PLC_018": {
    why_correct: "Công tắc gạt nhỏ SW1 trong cụm DIP SWITCH trên CPU PLC được quy định dùng để cấu hình thiết lập chân kết nối hệ thống (System connector / RS-232C / RS-422 communication interface).",
    why_wrong: "SW2, SW3, SW4 phục vụ các cài đặt khác như chế độ bộ nhớ, boot operation và bảo vệ ghi dữ liệu.",
    supplementary: "💡 **Lưu ý DIP Switch:** Thay đổi trạng thái DIP Switch chỉ có hiệu lực sau khi tắt và bật lại nguồn điện PLC."
  },
  "WS_PLC_019": {
    why_correct: "Rơ le đặc biệt SM51 (trong các dòng PLC Mitsubishi hiện đại họ Q/L/iQ-R) là bit cờ chẩn đoán hệ thống tự động bật ON khi cảm biến điện áp phát hiện pin dự phòng (Battery) của CPU bị sụt áp xuống dưới ngưỡng an toàn.",
    why_wrong: "SM604, SM605 dùng cho giám sát mạng truyền thông CC-Link; SM501 dùng cho cờ cảnh báo tính toán số học.",
    supplementary: "💡 **Ứng dụng SM51 trong lập trình:** Lập trình dòng lệnh: `LD SM51 OUT Y70` để bật đèn cảnh báo màu vàng trên mặt tủ điện yêu cầu bảo trì thay pin ngay lập tức."
  },
  "WS_PLC_020": {
    why_correct: "Module chức năng đặc biệt (Special function module), Module thông minh (Intelligent module như nhiệt độ, truyền thông) và Module Nhập/Xuất I/O nhận nguồn nuôi mạch logic nội bộ thông qua đường bus của Base Unit với mức điện áp chuẩn là 5V DC từ Module Nguồn (Power Supply Module).",
    why_wrong: "220V và 110V AC là nguồn cấp lưới ngoài cho Module Nguồn chính; 24V DC là nguồn điều khiển cung cấp cho tiếp điểm cảm biến và cuộn hút tải bên ngoài.",
    supplementary: "💡 **Tính toán công suất nguồn PLC:** Khi chọn Power Supply Module (như Q61P), phải tính tổng dòng tiêu thụ trên đường bus 5V của tất cả các module cắm trên rack không được vượt quá dòng định mức (thường là 6A ở 5V DC)."
  },
  "WS_PLC_021": {
    why_correct: "Theo phân loại vùng nhớ của PLC: 'Device ngoài' (External Device) là các phần tử địa chỉ biểu thị trực tiếp cổng giao tiếp vật lý nhận tín hiệu từ bên ngoài vào CPU (như Input X) hoặc xuất tín hiệu điều khiển ra thiết bị chấp hành bên ngoài CPU (như Output Y).",
    why_wrong: "A mô tả Internal Device (M, D, T, C); C mô tả Bit Device đơn thuần; D mô tả tính năng truy xuất dữ liệu theo Word/Bit.",
    supplementary: "💡 **Quy ước địa chỉ:** X0, X1,... kết nối với nút bấm, cảm biến bên ngoài; Y0, Y1,... kết nối với cuộn hút van, rơ le động lực bên ngoài."
  },
  "WS_PLC_022": {
    why_correct: "Bit Device F (Annunciator - Cờ báo động) là thiết bị bit chuyên dùng để lập trình logic phát hiện và chẩn đoán sự cố máy. Khi điều kiện lỗi thỏa mãn làm cuộn F ON trong quá trình PLC RUN, số hiệu lỗi F sẽ tự động được ghi nhận vào thanh ghi đặc biệt SD62 (đối với dòng AnS/A series cũ là D9009) và làm sáng đèn báo ERR/ALARM trên CPU.",
    why_wrong: "B là cờ SM51 kiểm tra pin; C là cờ xung nhịp đồng hồ SM412 (0.1s clock); D nhầm lẫn giữa dòng Q (SD62) và dòng A (D9009).",
    supplementary: "💡 **Lệnh LEDA & LEDR:** Lệnh SET F0 bật cờ báo lỗi; lệnh RST F0 xóa lỗi; lệnh LEDR đọc số lượng và mã lỗi Annunciator hiển thị lên màn hình HMI."
  },
  "WS_PLC_023": {
    why_correct: "Phát biểu 'Data Register (D) là Memory lưu trữ Data bên ngoài PLC' là SAI. Thanh ghi dữ liệu D (Data Register) là vùng nhớ nội bộ 16-bit nằm hoàn toàn bên trong bộ nhớ RAM của CPU PLC, dùng để lưu trữ dữ liệu số học, kết quả tính toán và thông số cài đặt.",
    why_wrong: "A, B, D đều là các tính chất đúng của thanh ghi D: gồm 16 bit (1 Word) cho phép đọc ghi dữ liệu từ -32768 đến +32767, duy trì giá trị đã ghi cho đến khi bị ghi đè, và phân vùng Latch được xóa khi thực hiện thao tác Latch Clear.",
    supplementary: "💡 **Thanh ghi D kép (32-bit):** Khi sử dụng lệnh 32-bit (như DMOV, DADD), PLC sẽ ghép 2 thanh ghi liên tiếp (ví dụ D0 và D1) để lưu số nguyên 32-bit từ -2.147.483.648 đến +2.147.483.647."
  },
  "WS_PLC_024": {
    why_correct: "Đơn vị thông tin nhỏ nhất trong cấu trúc bộ nhớ và xử lý dữ liệu của PLC là Bit (viết tắt của Binary Digit). Một bit chỉ có thể nhận một trong hai trạng thái nhị phân logic: 0 (OFF - mức điện áp thấp) hoặc 1 (ON - mức điện áp cao).",
    why_wrong: "Byte gồm 8 bit; Nibble gồm 4 bit; Quarter gồm 2 bit.",
    supplementary: "💡 **Hệ thống đơn vị:** 1 Bit (0/1) → 1 Quarter (2 bits) → 1 Nibble (4 bits) → 1 Byte (8 bits) → 1 Word (16 bits) → 1 Double Word (32 bits)."
  },
  "WS_PLC_025": {
    why_correct: "Trong phương thức quét vòng lặp (Cyclic Scan), kết quả tính toán logic của chương trình không được gửi trực tiếp ngay lập tức tới các rơ le ở đầu ra mà được tạm lưu vào bảng nhớ ảnh ngõ ra (Output Image Memory). Cuối chu trình scan tại bước xử lý END, toàn bộ dữ liệu này mới được đồng loạt truyền sang phần cứng module đầu ra - quá trình này gọi là 'Refresh đầu ra' (Output Refresh).",
    why_wrong: "Refresh đầu vào đọc tín hiệu vào bộ nhớ ảnh đầu vào; Program tính toán là quá trình thực thi các câu lệnh ladder; Tự kiểm tra là chẩn đoán lỗi phần cứng.",
    supplementary: "💡 **Lợi ích của Output Refresh:** Đảm bảo toàn bộ các ngõ ra Y được cập nhật đồng bộ, tránh hiện tượng các ngõ ra bị chập chờn khi chương trình đang thực thi dở dang."
  },
  "WS_PLC_026": {
    why_correct: "Ký hiệu X biểu thị thiết bị ngõ vào số (Input Device X), là vùng nhớ tiếp nhận dữ liệu và tín hiệu điện từ các thiết bị ngoại vi tại hiện trường như nút ấn (Push Button), công tắc gạt (Toggle Switch), công tắc hành trình (Limit Switch), công tắc số (Digital Switch).",
    why_wrong: "Y là đầu ra số (Output); M là rơ le phụ trợ nội bộ (Internal Relay); L là rơ le duy trì chốt (Latch Relay).",
    supplementary: "💡 **Địa chỉ X trong Mitsubishi:** Biểu diễn theo hệ Hex (X0 đến XF, X10 đến X1F,...). Khi cảm biến cấp điện 24V vào chân X0, đèn LED X0 sáng và bit X0 trong bộ nhớ CPU chuyển lên 1."
  },
  "WS_PLC_027": {
    why_correct: "Trong quy ước cấu trúc dữ liệu vi xử lý và PLC: 1 Byte = 8 Bit. Do đó, 1 Quarter (nghĩa là 1/4 Byte) bằng đúng: 8 / 4 = 2 Bit.",
    why_wrong: "4 bit là 1 Nibble (nửa byte); 1 bit là đơn vị cơ bản; 8 bit là 1 Byte.",
    supplementary: "💡 **Nhận diện đơn vị:** Bit = 1 bit; Quarter = 2 bits; Nibble = 4 bits; Byte = 8 bits; Word = 16 bits; Double Word = 32 bits."
  },
  "WS_PLC_028": {
    why_correct: "Chu trình hoạt động chuẩn khép kín của PLC gồm 3 giai đoạn: Đọc trạng thái ngõ vào (Input Refresh) → Thực thi chương trình logic (Program Execution) → Ghi trạng thái ra phần cứng ngõ ra (Output Refresh) kèm kiểm tra hệ thống (END Processing). Chuỗi quá trình này diễn ra tuần hoàn liên tục và được gọi là '1 Scan' (Một chu kỳ quét).",
    why_wrong: "Refresh đầu vào và Xử lý END chỉ là một phần nhỏ trong chu trình; Trạng thái tiếp điểm module đầu ra là phần cứng hiển thị.",
    supplementary: "💡 **Scan Time:** Thời gian thực hiện 1 Scan thường từ vài trăm micro-giây đến vài chục mili-giây tùy độ dài của chương trình."
  },
  "WS_PLC_029": {
    why_correct: "Device Timer (T) trong PLC là bộ định thời theo nguyên lý đếm tích lũy cộng dồn (Up-timer). Trong các dòng PLC Mitsubishi, Timer được phân loại theo cơ số thời gian gồm: Timer thường 100ms (như T0 - T199), Timer nhanh 10ms (như T200 - T245), và Timer tốc độ cao hoặc Timer duy trì Latch (Retentive Timer).",
    why_wrong: "A mô tả Link Register (W); B mô tả Data Register (D); D mô tả Counter và Interrupt Program.",
    supplementary: "💡 **Cú pháp lệnh Timer:** `OUT T0 K50`. Với Timer 100ms, K50 tương ứng thời gian trễ là: 50 × 100ms = 5.000ms = 5 giây."
  },
  "WS_PLC_030": {
    why_correct: "Word Device (Thiết bị từ nhớ) là các vùng nhớ có độ dài chuẩn 16 bit (1 Word), có khả năng lưu trữ giá trị số nguyên và vừa có thể truy xuất theo đơn vị Word vừa có thể truy xuất đến từng Bit thành phần (ví dụ D0, D0.1).",
    why_wrong: "Bit Device (X, Y, M, L) chỉ lưu trữ trạng thái logic 0 hoặc 1; Device ngoài/trong là phân loại theo vị trí vật lý kết nối.",
    supplementary: "💡 **Các Word Device tiêu biểu:** D (Data Register), W (Link Register), R (File Register), T (Timer hiện tại), C (Counter hiện tại), Z (Index Register)."
  },
  "WS_PLC_031": {
    why_correct: "Step Relay (S) là rơ le bước dùng trong sơ đồ điều khiển tuần tự SFC (Sequential Function Chart). Mặc định Step Relay là rơ le bổ trợ không duy trì trạng thái khi mất điện (trừ khi được cấu hình vào vùng Latch parameter).",
    why_wrong: "B sai vì S mặc định không phải là rơ le chốt tĩnh điện; C sai vì S là rơ le nội bộ, không xuất điện trực tiếp ra chân Domino bên ngoài; D sai vì khi tắt nguồn điện thì các relay không chốt sẽ bị reset về 0.",
    supplementary: "💡 **Ứng dụng Step Relay S:** Sử dụng kết hợp với lệnh STL (Step Ladder) để viết chương trình máy tự động dạng chu trình tuần tự bước 1 → bước 2 → bước 3."
  },
  "WS_PLC_032": {
    why_correct: "Phát biểu 'Giới hạn về số sử dụng bên trong Program' là ĐÁP ÁN SAI (tức là khẳng định sai về Link Relay). Trong chương trình Sequence Program, các tiếp điểm của Link Relay (B) hoàn toàn không bị giới hạn số lần gọi lại (người lập trình có thể gọi tiếp điểm NO/NC của B bao nhiêu lần tùy ý giống như rơ le M).",
    why_wrong: "A, B, C đều là các giải thích chuẩn xác: B là rơ le bit dùng trong mạng Data Link (CC-Link, Melsecnet), không đấu nối trực tiếp ra ngoài vỏ máy, và vùng không gán cho mạng có thể dùng tự do như rơ le M nội bộ.",
    supplementary: "💡 **Quy ước địa chỉ Link Relay B:** Được đánh số theo hệ Hex (B0 đến BFFF)."
  },
  "WS_PLC_033": {
    why_correct: "Link Register (W) là thanh ghi dữ liệu 16-bit chuyên dụng dùng để chia sẻ, truyền nhận dữ liệu số học giữa các trạm PLC trong mạng truyền thông Data Link (như mạng MELSECNET, CC-Link IE Field).",
    why_wrong: "B sai vì W được sinh ra chính là để hoán đổi dữ liệu giữa Master Station và Local Station; C sai vì cấu trúc của W là 16-bit 1 điểm (Word); D sai vì W là vùng nhớ nội bộ, không xuất trực tiếp ra chân vỏ PLC.",
    supplementary: "💡 **Địa chỉ W:** Đánh số theo hệ Hex (W0 đến WFFF). Mỗi trạm Master có thể gửi cả khối hàng trăm thanh ghi W sang các trạm con trong chu kỳ mạng."
  },
  "WS_PLC_034": {
    why_correct: "Index Register (Z - thanh ghi chỉ số) là Word Device chuyên dùng để bổ nghĩa con trỏ địa chỉ gián tiếp (Indexing). Khi kết hợp Z với một Device khác (như D0Z0), địa chỉ truy xuất thực tế sẽ bằng địa chỉ gốc cộng với giá trị lưu trong thanh ghi Z.",
    why_wrong: "W là Link Register; R là File Register; A là Accumulator.",
    supplementary: "💡 **Ví dụ Indexing với Z:** Nếu Z0 = 5, thì câu lệnh `MOV K100 D0Z0` sẽ thực hiện ghi giá trị 100 vào thanh ghi D(0+5) = D5. Rất hữu ích cho các thuật toán vòng lặp FOR...NEXT."
  },
  "WS_PLC_035": {
    why_correct: "B (Link Relay) là một Bit Device (chỉ lưu trữ giá trị 0 hoặc 1), KHÔNG PHẢI là Word Device. Trong khi đó, W (Link Register), Z (Index Register) và D (Data Register) đều là các thanh ghi độ dài 16-bit thuộc nhóm Word Device.",
    why_wrong: "W, Z, D đều là Word Device lưu trữ giá trị số nguyên 16-bit.",
    supplementary: "💡 **Chuyển đổi Bit thành Word:** Có thể nhóm 4 bit B thành một Nibble bằng tiền tố K (ví dụ K1B0 = 4 bit B0-B3; K4B0 = 16 bit B0-BF tạo thành 1 Word)."
  },
  "WS_PLC_036": {
    why_correct: "Quá trình lặp đi lặp lại tuần hoàn: Nhập ngõ vào → Thực thi câu lệnh → Xuất ngõ ra được gọi là 'Phương thức quét lặp lại', và khoảng thời gian để CPU hoàn thành trọn vẹn đúng 1 vòng lặp đó được gọi là '1 SCAN TIME' (Thời gian chu kỳ quét).",
    why_wrong: "Xử lý END chỉ là một bước kết thúc của chu trình; Tiến hành Sub Program chỉ là gọi chương trình con ngắt.",
    supplementary: "💡 **Giám sát Scan Time:** Thanh ghi đặc biệt SD520 lưu thời gian Scan hiện tại (đơn vị 0.1ms), SD521 lưu Scan time ngắn nhất, SD522 lưu Scan time dài nhất."
  },
  "WS_PLC_037": {
    why_correct: "Y là ký hiệu của thiết bị ngõ ra số (Output Device Y), dùng để đưa tín hiệu điện áp từ kết quả tính toán của chương trình ra điều khiển các cơ cấu chấp hành bên ngoài như: cuộn hút van Solenoid, cuộn dây contactor khởi động từ, đèn báo tủ điện, còi báo động.",
    why_wrong: "X là ngõ vào (Input); D là thanh ghi số liệu nội bộ (Data Register); W là thanh ghi mạng truyền thông (Link Register).",
    supplementary: "💡 **Cấu tạo Module Output Y:** Có 3 loại chính: Ngõ ra Relay (đóng ngắt tải AC/DC, chịu dòng lớn nhưng tuổi thọ cơ học giới hạn); Ngõ ra Transistor NPN/PNP (đóng ngắt DC tốc độ cao, không mòn tiếp điểm); Ngõ ra Triac (chuyên dùng cho tải AC nhỏ)."
  },
  "WS_PLC_038": {
    why_correct: "L (Latch Relay - Rơ le chốt giữ) là thiết bị Bit nội bộ có đặc tính duy trì trạng thái tĩnh điện: khi PLC bị ngắt nguồn điện đột ngột hoặc chuyển công tắc sang STOP, trạng thái ON/OFF của bit L vẫn được lưu trữ nguyên vẹn nhờ pin nuôi (Battery) hoặc bộ nhớ Flash.",
    why_wrong: "X, Y và M thông thường (General M) sẽ tự động bị reset về 0 (OFF) ngay khi nguồn điện PLC bị ngắt.",
    supplementary: "💡 **Ứng dụng Latch Relay L:** Lưu trạng thái máy đang chạy dở ở bước nào để khi bật điện nguồn trở lại máy có thể tiếp tục chu trình mà không cần chạy lại từ đầu."
  },
  "WS_PLC_039": {
    why_correct: "Để xóa trắng toàn bộ dữ liệu trạng thái được lưu giữ trong các vùng nhớ chốt (Latch) như L, thanh ghi D vùng Latch, Timer chốt, người vận hành phải thực hiện 'Thao tác Latch Clear' (gạt công tắc chuyển mạch phần cứng trên CPU sang vị trí L.CLR hoặc kích hoạt chức năng Latch Clear trên phần mềm lập trình).",
    why_wrong: "Tắt bật nguồn ON/OFF không thể xóa được vùng Latch (vì bản chất Latch là giữ dữ liệu qua mất điện); Format PLC sẽ xóa cả chương trình hệ thống.",
    supplementary: "💡 **Thao tác Latch Clear an toàn:** Chỉ thực hiện khi máy móc đã dừng hoàn toàn ở vị trí an toàn, tránh việc mất trạng thái gốc gây va chạm cơ khí khi khởi động lại."
  },
  "WS_PLC_040": {
    why_correct: "'Refresh đầu vào' (Input Refresh) là quá trình diễn ra ở đầu mỗi chu kỳ scan: CPU đọc toàn bộ mức điện áp ON/OFF từ các kênh phần cứng của module đầu vào thông qua mạch opto, sau đó sao chép đồng loạt trạng thái đó vào vùng đệm bộ nhớ ảnh đầu vào (Input Image Memory X) để sử dụng làm dữ liệu đầu vào cho quá trình tính toán logic ngay sau đó.",
    why_wrong: "B mô tả quá trình thực thi chương trình logic; C mô tả ngắt Subroutine; D là khái niệm sai đảo lộn chiều vào ra.",
    supplementary: "💡 **Lệnh Direct I/O (DX):** Nếu muốn đọc ngay lập tức trạng thái ngõ vào tại giữa chu trình scan mà không chờ đến chu kỳ Refresh tiếp theo, người lập trình có thể sử dụng lệnh đọc trực tiếp `DX0`."
  },
  "WS_PLC_041": {
    why_correct: "Trong sơ đồ lưu đồ dòng hoạt động tuần hoàn của PLC, sau khi kết thúc việc tính toán câu lệnh cuối cùng của chương trình sẽ đến bước 'Xử lý END' (END Processing). Tại bước này, PLC thực hiện: tự chẩn đoán lỗi phần cứng, reset bộ đếm Watchdog Timer, truyền nhận thông tin với màn hình HMI, và thực hiện Refresh I/O.",
    why_wrong: "Refresh khu vực đầu vào diễn ra ở đầu scan; Bắt đầu Scan Program là bước kích hoạt chu kỳ; Tiến hành Sub Program là nhảy nhánh.",
    supplementary: "💡 **Lệnh END:** Mọi chương trình PLC bắt buộc phải kết thúc bằng lệnh `END` (FEND). Nếu thiếu lệnh này, PLC sẽ báo lỗi ngữ pháp (Syntax Error)."
  },
  "WS_PLC_042": {
    why_correct: "Trong mỗi chu trình quét, CPU thực hiện chức năng 'Tự kiểm tra' (Self-diagnostics) để kiểm tra dung lượng pin dự phòng, kiểm tra lỗi cú pháp, tính toàn vẹn của mã chương trình, trạng thái các module trên rack và giám sát thời gian quét scan.",
    why_wrong: "Xử lý END là giai đoạn kết thúc scan; Refresh đầu ra là truyền tín hiệu ra tải; Refresh đầu vào là đọc cảm biến.",
    supplementary: "💡 **Mã lỗi chẩn đoán:** Nếu quá trình tự kiểm tra phát hiện bất thường, CPU bật cờ lỗi SM0, ghi mã lỗi vào SD0 và dừng CPU (chế độ Stop Error) hoặc tiếp tục chạy kèm cảnh báo (Continue Error)."
  },
  "WS_PLC_043": {
    why_correct: "Một trong các chế độ thực thi của PLC là 'Thực hiện theo từng chu kỳ thời gian cố định' (Constant Scan Mode / Fixed Scan). Ở chế độ này, cho dù chương trình tính toán xong sớm, CPU vẫn chờ cho đủ đúng khoảng thời gian đặt trước rồi mới bắt đầu chu kỳ scan tiếp theo, giúp thời gian phản hồi tín hiệu luôn ổn định tuyệt đối.",
    why_wrong: "A mô tả Initial program; D mô tả Interrupt program kích hoạt theo sự kiện.",
    supplementary: "💡 **Ứng dụng Constant Scan:** Thường dùng trong các bài toán điều khiển vòng kín PID, điều khiển vị trí nội suy servo đòi hỏi chu kỳ lấy mẫu thời gian (Sampling Time) phải bằng hằng số không được dao động."
  },
  "WS_PLC_044": {
    why_correct: "Thứ tự sắp xếp tăng dần theo độ lớn dung lượng bộ nhớ trong PLC là: Bit (1 bit) → Quarter (2 bit) → Nibble (4 bit) → Byte (8 bit) → Word (16 bit).",
    why_wrong: "Các phương án khác đảo lộn vị trí giữa Quarter (2 bit), Nibble (4 bit) và Byte (8 bit).",
    supplementary: "💡 **Quy tắc nhớ nhanh:** 1 Byte = 2 Nibble = 4 Quarter = 8 Bit."
  },
  "WS_PLC_045": {
    why_correct: "Chế độ thực thi 'Chỉ thực hiện trong trường hợp đã cài đặt Constant scan hoặc thời gian thực hiện Program tốc độ thấp' là cấu hình kiểm soát chu trình quét nâng cao trong Parameter của CPU PLC.",
    why_wrong: "A là chế độ Initial; C là chế độ quét chu kỳ thời gian thông thường; D là chế độ ngắt Event.",
    supplementary: "💡 **Low-Speed Program:** Là chương trình có độ ưu tiên thấp, được CPU tận dụng thời gian rảnh rỗi giữa các chu kỳ scan chính để thực thi."
  },
  "WS_PLC_046": {
    why_correct: "Chương trình kiểu thực hành Initial (Khởi tạo) có đặc điểm là: 'Chỉ thực hiện đúng 1 lần duy nhất khi nguồn điện PLC được bật ON hoặc khi chuyển công tắc từ STOP sang RUN'.",
    why_wrong: "Quét lặp lại liên tục là Scan program; Thực thi định kỳ là Fixed scan program; Thực thi khi có tín hiệu ngắt là Interrupt program.",
    supplementary: "💡 **Ứng dụng Initial Program:** Dùng để nạp các thông số cài đặt ban đầu, reset các cờ nhớ, thiết lập giá trị gốc cho biến tần và servo khi máy vừa khởi động."
  },
  "WS_PLC_047": {
    why_correct: "Chương trình ngắt (Interrupt Program / Event Program) có đặc điểm là: 'Chỉ thực hiện khi có yêu cầu thực hiện' (tức là khi có tín hiệu kích hoạt cạnh xung từ chân ngắt phần cứng hoặc bộ định thời ngắt Timer phát xung).",
    why_wrong: "A là Initial program; C là Cyclic scan thông thường.",
    supplementary: "💡 **Ký hiệu con trỏ ngắt:** Bắt đầu bằng con trỏ `I` (như I0, I1) và kết thúc bằng lệnh `IRET`. CPU sẽ tạm dừng Main Program để chạy ngay Interrupt program trong vòng vài micro-giây."
  },
  "WS_PLC_048": {
    why_correct: "Ô trống ở đầu quy trình tiếp nhận tín hiệu tương ứng với 'Trạng thái tiếp điểm Module đầu vào' (Input Module Contact Status - trạng thái dẫn/ngắt của các linh kiện bên ngoài kết nối vào terminal phần cứng).",
    why_wrong: "Refresh khu vực đầu vào là bước chuyển dữ liệu vào RAM; Trạng thái tiếp điểm module đầu ra nằm ở phía sau quá trình tính toán.",
    supplementary: "💡 **Trình tự thu thập:** Tiếp điểm ngoài đóng → Đèn LED module sáng → Photo Coupler dẫn → Thanh ghi ngõ vào X được nạp 1."
  },
  "WS_PLC_049": {
    why_correct: "Định nghĩa chính xác về đơn vị Bit: 'Bit là đơn vị đo lường thông tin nhỏ nhất biểu thị trạng thái logic tương tự như số 0 hoặc 1 của hệ nhị phân (Binary)'.",
    why_wrong: "0 ~ 9 là các chữ số của hệ thập phân; 0 ~ F là các ký tự của hệ thập lục phân Hex; 0 ~ 8 là dải không chuẩn.",
    supplementary: "💡 **Ý nghĩa vật lý của Bit trong mạch số:** Bit 0 tương ứng mức điện áp thấp (0V DC); Bit 1 tương ứng mức điện áp cao (+24V DC hoặc +5V DC)."
  },
  "WS_PLC_050": {
    why_correct: "Trong các bộ mã ký tự quốc tế và hệ chữ tượng hình phương Đông (chữ Hán, Hangul Hàn Quốc, ký tự Kanji Nhật Bản), mỗi ký tự là một ký tự độ rộng kép (Double Byte Character Set - DBCS) nên bắt buộc phải sử dụng dung lượng đúng 2 Byte (16 Bit) để lưu trữ được 1 ký tự.",
    why_wrong: "2 Byte chỉ lưu trữ được 1 ký tự chữ tượng hình; trong khi đó với bảng mã ASCII tiếng Anh cơ bản thì 2 Byte lưu trữ được 2 ký tự (mỗi ký tự 1 Byte).",
    supplementary: "💡 **Dung lượng ký tự trong PLC:** Bảng mã ASCII (1 byte / 1 ký tự); Bảng mã Unicode / UTF-16 (2 bytes / 1 ký tự)."
  },
  "WS_PLC_051": {
    why_correct: "Khi thực hiện thao tác Write (Nạp chương trình từ máy tính vào bộ nhớ Program Memory / Device Memory của PLC), hai khối dữ liệu thiết yếu và bắt buộc phải được ghi xuống là: Parameter (Thông số cài đặt phần cứng, cấu hình I/O) và Program (Chương trình mã lệnh logic Ladder).",
    why_wrong: "Device Comment (chú thích thiết bị) thường được lưu ở phân vùng riêng Standard ROM hoặc trên máy tính PC vì chiếm dung lượng bộ nhớ rất lớn, không bắt buộc phải nạp cùng để CPU vận hành.",
    supplementary: "💡 **Thực tế lập trình:** Nạp Parameter + Program là đủ để máy tự động vận hành bình thường; nạp thêm Device Comment sẽ giúp kỹ sư sau này dễ đọc và sửa lỗi trực tuyến hơn."
  },
  "WS_PLC_052": {
    why_correct: "Trong trường hợp muốn sử dụng vùng nhớ thanh ghi mở rộng File Register R, người lập trình bắt buộc phải vào cấu hình: Parameter PLC → thẻ 'PLC File' để thiết lập dung lượng bộ nhớ cấp phát và chỉ định phân vùng lưu trữ (Standard RAM hoặc Memory Card).",
    why_wrong: "Thẻ Device dùng cài đặt dải địa chỉ M, D thông thường; PLC System dùng cài đặt chu kỳ quét và pin; Boot file dùng cho nạp tự động.",
    supplementary: "💡 **Lưu ý cấu hình File Register:** Nếu trong chương trình ladder sử dụng lệnh truy xuất thanh ghi R mà chưa khai báo dung lượng trong PLC File parameter, CPU sẽ lập tức báo lỗi 'FILE SET ERROR' khi chuyển RUN."
  },
  "WS_PLC_053": {
    why_correct: "Comment (Chú thích thiết bị / Device Comment) trong chương trình PLC là đoạn văn bản dùng để 'Giải thích về Device' (ví dụ chú thích X0 là 'Nút nhấn Start dây chuyền', Y10 là 'Cuộn hút van kẹp phôi').",
    why_wrong: "Giải thích về 1 khối lệnh ladder gọi là Statement; Giải thích về một hàng câu lệnh gọi là Note.",
    supplementary: "💡 **3 dạng chú thích trong GX Developer:** Device Comment (chú thích cho X, Y, M, D); Statement (chú thích tiêu đề cho cả khối đoạn mạch); Note (chú thích cho cuộn coil ở cuối hàng)."
  },
  "WS_PLC_054": {
    why_correct: "Trên phần mềm lập trình GX Works 2 / GX Developer của hãng Mitsubishi, phím tắt để chuyển sang chế độ chỉnh sửa chương trình ở trạng thái Offline (Write Mode) là phím F2.",
    why_wrong: "F4 là phím biên dịch (Build / Convert); Shift + F3 là chế độ vừa giám sát vừa sửa Online (Monitor Write Mode); Shift + F4 là biên dịch nạp Online.",
    supplementary: "💡 **Bộ 4 phím tắt vàng trong GX Works:** F1 = Trợ giúp (Help); F2 = Soạn thảo (Write Mode); F3 = Giám sát (Monitor Mode); F4 = Biên dịch (Convert)."
  },
  "WS_PLC_055": {
    why_correct: "Sau khi chỉnh sửa, viết thêm các nhánh lệnh ladder ở chế độ Offline, màn hình sẽ hiển thị các ô màu xám (chưa biên dịch). Người lập trình phải nhấn phím tắt F4 (Convert / Compile) để kiểm tra cú pháp và dịch chương trình sang mã máy nhị phân lưu vào bộ nhớ đệm.",
    why_wrong: "F2 là quay lại chế độ viết; Shift + F2 là tạo tiếp điểm cạnh lên; Ctrl + F4 là phím đóng cửa sổ tài liệu.",
    supplementary: "💡 **Quy trình chuẩn:** Viết lệnh → Nhấn F4 để Convert (màu xám biến mất thành màu trắng) → Nhấn Ctrl + S để lưu tệp dự án vào ổ cứng."
  },
  "WS_PLC_056": {
    why_correct: "Quy trình chuẩn để tiến hành thao tác xóa trắng bộ nhớ 'PLC Memory Clear': (1) Kết nối máy tính có cài GX Works 2 với CPU PLC qua cáp USB/Ethernet → (2) Chuyển công tắc CPU sang chế độ STOP → (3) Chọn lệnh PLC Memory Clear trên menu phần mềm → (4) Thực hiện Reset PLC để khởi tạo lại hệ thống.",
    why_wrong: "Thao tác khi PLC đang RUN sẽ bị phần mềm khóa từ chối; Reset trước khi Clear là sai thứ tự vận hành.",
    supplementary: "💡 **Cảnh báo an toàn:** Memory Clear sẽ xóa toàn bộ chương trình và thông số parameter trong RAM, chỉ thực hiện khi cần nạp dự án mới hoàn toàn."
  },
  "WS_PLC_057": {
    why_correct: "Quy trình thực hiện 'PLC Memory Format' (Định dạng lại cấu trúc phân vùng ổ đĩa bộ nhớ): (1) Kết nối cáp truyền thông GX Works 2 với CPU → (2) Dừng CPU (Stop PLC) → (3) Chọn lệnh PLC Memory Format và chọn bộ nhớ cần định dạng (SRAM/Flash) → (4) Reset lại PLC.",
    why_wrong: "Các phương án đảo lộn thứ tự Reset trước Format hoặc Format khi CPU chưa Stop là sai quy trình chuẩn hóa của Mitsubishi.",
    supplementary: "💡 **Khi nào cần Format:** Khi thay pin mới, khi bộ nhớ bị lỗi phân mảnh 'Memory Cassette Error' hoặc khi thay thẻ nhớ Memory Card mới."
  },
  "WS_PLC_058": {
    why_correct: "Trong cửa sổ Parameter Setting của GX Developer/GX Works 2, để CPU PLC quét thực thi nhiều chương trình cùng lúc (Multiple Programs), người dùng bắt buộc phải vào mục: Parameter PLC → thẻ 'Program' và thêm tên các chương trình cần quét vào danh sách 'Scan' hoặc 'Initial'.",
    why_wrong: "Thẻ Device quản lý dải địa chỉ biến; Thẻ PLC File quản lý file register R; Thẻ Boot file quản lý nạp tự động từ ROM.",
    supplementary: "💡 **Lập trình Modular đa chương trình:** Giúp chia dự án thành nhiều file nhỏ độc lập như: MAIN_AUTO, MANUAL_CONTROL, ALARM_HANDLER để nhiều kỹ sư cùng phát triển dễ dàng."
  },
  "WS_PLC_060": {
    why_correct: "Loại chương trình có kiểu thực thi chỉ chạy đúng một lần duy nhất khi bật nguồn điện ON hoặc khi chuyển công tắc từ STOP sang RUN được định nghĩa là Chương trình dạng Initial (Khởi tạo).",
    why_wrong: "Scan là chương trình chạy quét liên tục vòng lặp; Wait là chương trình ở trạng thái chờ kích hoạt; Fixed Scan là chương trình quét chu kỳ cố định.",
    supplementary: "💡 **Lập trình Initial:** Cực kỳ hữu ích để xóa các giá trị lỗi cũ, thiết lập thông số ban đầu mà không làm tăng thời gian quét của chu kỳ Scan chính."
  },
  "WS_PLC_061": {
    why_correct: "Chương trình dạng Wait (Chương trình dạng chờ) được sử dụng để: Thư mục hóa dự án thành các Subroutine Program, chuyển các chương trình ngắt Interrupt sang dạng chờ và quản lý độc lập tách biệt so với Main Program.",
    why_wrong: "Scan chạy liên tục; Initial chỉ chạy lúc khởi động; Fixed scan chạy định kỳ thời gian.",
    supplementary: "💡 **Lệnh điều khiển Wait Program:** Sử dụng lệnh `PSCAN` để chuyển chương trình từ trạng thái Wait sang Scan, hoặc dùng lệnh `PSTOP` để đưa chương trình về lại trạng thái Wait nhằm tiết kiệm thời gian scan."
  },
  "WS_PLC_062": {
    why_correct: "Sơ đồ luồng thể hiện chương trình chỉ kích hoạt một lần duy nhất tại thời điểm chuyển trạng thái nguồn/RUN chính là biểu diễn của kiểu thực hành Initial (Chương trình khởi tạo).",
    why_wrong: "Scan chạy vòng lặp tuần hoàn; Wait và Fixed Scan có lưu đồ điều khiển ngắt theo sự kiện.",
    supplementary: "💡 **Đặc điểm Initial:** Sau khi thực thi hết lệnh END của Initial program, CPU tự động chuyển sang vòng lặp thực thi của Scan program."
  },
  "WS_PLC_063": {
    why_correct: "Đường dẫn chuẩn trên hệ điều hành Windows để kiểm tra và cài đặt trình điều khiển Driver giao tiếp USB giữa PLC và máy tính: Computer của tôi (My Computer) → Bảng điều khiển (Control Panel) → System → Hardware → Trình quản lý thiết bị (Device Manager) → Universal Serial Bus controllers (MITSUBISHI Easysocket Driver).",
    why_wrong: "Các phương án B, C, D đảo lộn trật tự phân cấp của các mục cấu hình trong hệ điều hành Windows.",
    supplementary: "💡 **Khắc phục lỗi không nhận cáp PLC:** Nếu Device Manager xuất hiện biểu tượng dấu chấm than vàng tại mục 'MELSEC USB Driver', cần click chuột phải chọn 'Update Driver' và trỏ tới thư mục cài đặt `C:\\Program Files\\MELSOFT\\Easysocket\\USB\\`."
  },
  "WS_PLC_064": {
    why_correct: "Trong phần mềm GX Developer / GX Works, phím tắt để mở chế độ chỉnh sửa chương trình hiện tại (Write Mode) là phím F2.",
    why_wrong: "F1 mở tài liệu hướng dẫn (Help); F3 mở chế độ giám sát chỉ đọc (Monitor Mode); F4 thực hiện biên dịch Convert.",
    supplementary: "💡 **Mẹo làm việc:** Đang ở F3 giám sát muốn sửa nhanh thì bấm F2 → sửa xong bấm F4 để Convert."
  },
  "WS_PLC_065": {
    why_correct: "Tổ hợp phím tắt Shift + F4 (Online Change / Online Program Write) cho phép người lập trình vừa biên dịch vừa ghi đè thẳng nội dung vừa sửa vào bộ nhớ CPU trong khi PLC vẫn đang RUN mà không cần dừng máy chuyền sản xuất.",
    why_wrong: "Shift + F1, Shift + F2, Shift + F3 là các phím gán tiếp điểm cạnh xung hoặc chuyển Monitor Mode.",
    supplementary: "💡 **Lưu ý Online Change:** Chỉ áp dụng cho việc sửa đổi các đoạn logic nhỏ; tránh sửa đổi các cấu trúc vòng lặp lớn hoặc thay đổi Timer/Counter đang đếm dở để đảm bảo an toàn tuyệt đối."
  },
  "WS_PLC_066": {
    why_correct: "Sau khi thực hiện Write (Nạp toàn bộ chương trình và thông số Parameter mới) xuống PLC, quy trình chuẩn để phần cứng CPU tải lại toàn bộ cấu hình mới và hoạt động ổn định là phải gạt switch sang RESET rồi gạt lại RUN (hoặc thao tác Reset PLC trên phần mềm).",
    why_wrong: "Format sẽ xóa mất chương trình vừa nạp; Clear Latch làm mất dữ liệu chốt; Read là thao tác đọc ngược lại lên PC.",
    supplementary: "💡 **Tại sao phải Reset sau khi nạp Parameter:** Một số cấu hình quan trọng như gán địa chỉ card I/O, tốc độ baud truyền thông mạng chỉ được chip vi xử lý khởi tạo trong pha nạp Boot lúc Reset."
  },
  "WS_PLC_067": {
    why_correct: "Để kiểm tra xem các card module (I/O, Analog, truyền thông) cắm trên thanh rack Base Unit có đang nhận diện đúng và hoạt động bình thường hay không, thao tác chuẩn trong phần mềm là vào menu Diagnostics → chọn 'System Monitor'.",
    why_wrong: "PLC Diagnostics chỉ xem mã lỗi chung của CPU; Ethernet và Melsecnet Diagnostics chỉ kiểm tra riêng card mạng truyền thông.",
    supplementary: "💡 **Giao diện System Monitor:** Hiển thị trực quan toàn bộ các slot module, mã model phần cứng, dải địa chỉ I/O gán cho từng slot và đèn LED trạng thái của từng card."
  },
  "WS_PLC_068": {
    why_correct: "Trong phần mềm GX Developer, độ dài tối đa cho phép khi đặt tên chú thích (Comment) cho một Device (như X, Y, M, D) là 32 ký tự.",
    why_wrong: "8, 16, 24 ký tự là các độ dài ngắn hơn, không phải giới hạn tối đa được thiết lập của phần mềm.",
    supplementary: "💡 **Cài đặt số ký tự Comment:** Trong Tool → Options, người dùng có thể tùy chỉnh hiển thị 8, 16 hoặc 32 ký tự trên mỗi dòng sơ đồ thang Ladder."
  },
  "WS_PLC_069": {
    why_correct: "Trong GX Developer, 'Note' là dòng chú thích văn bản được viết ở phía trên của cuộn ngõ ra (Output Coil) hoặc khối lệnh nhằm 'Giải thích về 1 khối program / 1 hàng lệnh' cụ thể.",
    why_wrong: "Giải thích về cả chương trình gọi là Title; Comment là chú thích cho từng Device riêng lẻ.",
    supplementary: "💡 **Vị trí Note:** Note được gán trực tiếp cho từng câu lệnh OUT, SET, RST giúp người đọc hiểu ngay mục đích hành động của dòng lệnh đó."
  },
  "WS_PLC_070": {
    why_correct: "Watchdog Timer (WDT) là mạch định thời phần cứng độc lập giám sát thời gian quét scan lớn nhất của CPU. Nếu vì lý do nào đó (vòng lặp vô tận, CPU bị treo) mà thời gian Run Scan thực tế vượt quá giá trị cài đặt WDT, CPU sẽ lập tức ngắt toàn bộ ngõ ra và báo lỗi 'WDT ERROR'. Do đó, nơi cài đặt thông số này gọi là 'Cài đặt WDT' (WDT Setting).",
    why_wrong: "Cài đặt Mode vận hành khi có lỗi là chọn tiếp tục hay dừng máy; Constant Scan là quét chu kỳ cố định; Error Check là kiểm tra cú pháp.",
    supplementary: "💡 **Mục đích sinh tử của WDT:** Đảm bảo hệ thống điều khiển tự động không bao giờ rơi vào trạng thái 'mất kiểm soát' làm kẹt xi lanh hay gây tai nạn lao động khi vi xử lý bị treo."
  },
  "WS_PLC_071": {
    why_correct: "Để rà soát và ngăn chặn việc sử dụng trùng lặp cuộn hút ngõ ra (Double Coil - lỗi một cuộn coil OUT Y hoặc OUT M được gán ở hai nơi khác nhau trong chương trình), kỹ sư bắt buộc phải dùng công cụ 'Cross Reference' (Tham chiếu chéo / Phím tắt Ctrl + Alt + F).",
    why_wrong: "Verify chỉ so sánh sai khác giữa chương trình trên PC và trong PLC; Copy và Write là các thao tác soạn thảo nạp file.",
    supplementary: "💡 **Hiểm họa lỗi Double Coil:** Khi dùng trùng cuộn coil OUT Y0 ở hai vị trí, trạng thái của Y0 ở vị trí đầu sẽ bị trạng thái ở vị trí sau ghi đè hoàn toàn, gây ra hiện tượng máy chạy sai lệch rất khó tìm lỗi."
  },
  "WS_PLC_072": {
    why_correct: "Khi phát sinh lỗi nguồn cấp ngoài bị ngắt hoặc lỗi module ngoại vi, để cấu hình cho CPU PLC tiếp tục chạy (Continue) hay dừng khẩn cấp (Stop), người dùng phải thiết lập tại mục: 'Operating Mode when there is an error' (Chế độ vận hành khi có lỗi) trong Parameter của PLC.",
    why_wrong: "WDT là bảo vệ quét scan; Constant Scan là kiểm soát chu kỳ thời gian; Error check là kiểm tra cú pháp lệnh.",
    supplementary: "💡 **Phân cấp lỗi:** Stop Error (lỗi nghiêm trọng như sụt áp CPU, lỗi WDT → CPU bắt buộc dừng); Continue Error (lỗi pin yếu, đứt dây một ngõ vào analog → CPU tiếp tục chạy và bật cờ cảnh báo)."
  },
  "WS_PLC_073": {
    why_correct: "Trên thanh công cụ của phần mềm GX Developer / GX Works, phím tắt để chuyển sang chế độ giám sát trực tuyến chương trình đang chạy thực tế trong PLC là phím F3 (Monitor Mode).",
    why_wrong: "F2 là Write Mode (chỉnh sửa); Shift + F2 là tạo tiếp điểm phát hiện sườn lên (Pulse contact); Shift + F3 là Monitor (Write Mode).",
    supplementary: "💡 **Trạng thái hiển thị F3:** Tiếp điểm đang đóng thông và cuộn coil đang bật ON sẽ sáng màu xanh lam nổi bật trên màn hình."
  },
  "WS_PLC_074": {
    why_correct: "Định nghĩa chuẩn: 'Là Program chỉ thực hiện đúng 1 lần khi nguồn điện được bật ON hoặc khi chuyển trạng thái từ STOP sang RUN' chính là Chương trình kiểu thực hành Initial (Khởi tạo).",
    why_wrong: "Program scan chạy tuần hoàn vô hạn; Program dạng chờ (Wait) chờ lệnh gọi; Program tốc độ thấp chạy khi rảnh CPU.",
    supplementary: "💡 **Cấu hình Initial:** Trong bảng thông số Program setting, ta chọn kiểu thực thi (Execution Type) là 'Initial'."
  },
  "WS_PLC_075": {
    why_correct: "Đáp án SAI về lý do sử dụng nhiều chương trình (Multiple Programs) là: 'Có thể tăng thời gian scan hiệu quả'. Việc chia nhỏ nhiều chương trình không nhằm mục đích làm tăng thời gian scan (thời gian scan càng ngắn mới càng tốt), mà mục tiêu là tối ưu hóa và quản lý logic.",
    why_wrong: "A, C, D đều là các ưu điểm thực tế to lớn của Multiple Programs: quản lý tính hiệu quả, dễ bảo trì chỉnh sửa từng cụm chức năng riêng biệt và bảo đảm an toàn vận hành.",
    supplementary: "💡 **Cấu trúc Multiple Programs chuyên nghiệp:** Thường chia thành: 01_INITIAL, 02_MANUAL, 03_AUTO_CYCLE, 04_SAFETY_INTERLOCK, 05_COMMUNICATION."
  },
  "WS_PLC_076": {
    why_correct: "Trong cấu hình Parameter CPU PLC của Mitsubishi, khoảng thời gian tối đa cho phép cài đặt cho bộ định thời giám sát quét Watchdog Timer (WDT) là 2.000 ms (tương đương 2 giây). Mặc định hệ thống thường đặt là 200 ms.",
    why_wrong: "200 ms là giá trị mặc định chuẩn; 500 ms và 1000 ms là các mốc trung gian có thể chọn nhưng chưa phải giới hạn tối đa.",
    supplementary: "💡 **Khuyến nghị an toàn:** Trong dây chuyền sản xuất tự động công nghiệp, nên duy trì WDT ở mức 100ms - 200ms để kịp thời ngắt thiết bị ngay khi có sự cố treo lệnh."
  },
  "WS_PLC_077": {
    why_correct: "Phát biểu KHÔNG PHẢI mục đích sử dụng của Program dạng chờ (Wait Program) là: 'Nếu ngừng thực hiện Program dạng chờ thì sẽ tiến hành Program ngay sau đó'. Program dạng chờ hoàn toàn độc lập, nó chỉ được thực thi khi có lệnh gọi tường minh (như PSCAN) từ chương trình chính.",
    why_wrong: "A, B, C đều là các mục đích chuẩn xác của Wait Program: thư mục hóa thành subroutine, quản lý tách biệt ngắt interrupt và linh hoạt thay đổi trình tự thực thi chương trình.",
    supplementary: "💡 **Tiết kiệm năng lượng quét:** Đưa các đoạn chương trình ít dùng (như quy trình hiệu chuẩn Calib máy định kỳ mỗi tháng 1 lần) vào Wait Program giúp CPU không phải quét nó hàng ngày."
  },
  "WS_PLC_078": {
    why_correct: "Để phân chia và gán dải địa chỉ đầu vào/ra (X/Y) cho các card module cắm trên các khe cắm (Slot) của thanh rack Base Unit, kỹ sư phải mở mục: 'I/O Assignment' (Phân bổ I/O) trong Parameter của PLC.",
    why_wrong: "Device dùng cài đặt dải nhớ; PLC System quản lý hệ thống; PLC RAR không phải tên thẻ cấu hình.",
    supplementary: "💡 **Ví dụ I/O Assignment:** Slot 0 cắm card Input 16 điểm gán địa chỉ X00~X0F; Slot 1 cắm card Output 32 điểm gán địa chỉ Y10~Y2F."
  },
  "WS_PLC_079": {
    why_correct: "Khi cài đặt File Register (R) trong phân vùng bộ nhớ mở rộng (PLC File setting), giới hạn dung lượng tối đa cho phép cài đặt là từ 1 đến 1.018K Words (tương ứng khoảng 1 Mega-Word dữ liệu 16-bit).",
    why_wrong: "A và B dùng đơn vị Megabyte/Mega-Word sai lệch; D ghi 1024K vượt quá giới hạn phần vùng 1018K quy định của dòng Q.",
    supplementary: "💡 **Dung lượng 1018K Words:** Cho phép lưu trữ tới hơn 1 triệu giá trị số liệu 16-bit, đáp ứng mọi bài toán thu thập dữ liệu máy đo kiểm tự động."
  },
  "WS_PLC_080": {
    why_correct: "Để thiết lập phạm vi dải địa chỉ cho vùng nhớ Latch (duy trì trạng thái qua mất điện) và cấu hình Timer tích hợp (Retentive Timer), người lập trình phải thao tác tại thẻ: 'Device' (Cấu hình thiết bị) trong bảng cài đặt Parameter của PLC.",
    why_wrong: "I/O Assignment quản lý card phần cứng; PLC System quản lý thời gian quét; PLC RAR không tồn tại.",
    supplementary: "💡 **Cài đặt Device Tab:** Người dùng có thể kéo dài hoặc thu hẹp số lượng thanh ghi D thường và D chốt (Latch) tùy thuộc vào nhu cầu bộ nhớ của dự án."
  },
  "WS_PLC_081": {
    why_correct: "Dựa vào giản đồ thời gian Time Chart: Khi tín hiệu ngõ vào X2 được kích hoạt chuyển sang mức ON, ngõ ra bắt đầu hoạt động hoặc reset trạng thái tương ứng theo sơ đồ mạch thang. Đáp án thích hợp để điền vào vị trí (?) là tiếp điểm ngõ vào X2.",
    why_wrong: "X1 là tín hiệu kích khởi đầu; M0 là cờ nhớ nội bộ; Y0 là ngõ ra điều khiển.",
    supplementary: "💡 **Phương pháp giải bài toán Time Chart:** Gióng thẳng trục thời gian đứng từ thời điểm chuyển mức logic trên đồ thị xuống nhánh lệnh ladder để tìm điều kiện tiếp điểm tương ứng."
  },
  "WS_PLC_082": {
    why_correct: "Timer T sử dụng cơ số thời gian chuẩn là 100 ms (0.1 giây). Để đạt được khoảng thời gian trễ đúng bằng 1 giây theo giản đồ thời gian Time Chart, giá trị đặt K phải là: K = 1 giây / 0.1 giây = K10.",
    why_wrong: "K1 tương ứng 0.1 giây (quá ngắn); K100 tương ứng 10 giây; K20 tương ứng 2 giây.",
    supplementary: "💡 **Công thức Timer 100ms:** Thời gian trễ T(giây) = K × 0.1. Ví dụ: K10 = 1s; K50 = 5s; K100 = 10s."
  },
  "WS_PLC_083": {
    why_correct: "Quan sát giản đồ xung Time Chart: Sau đúng 3 chu kỳ xung kích hoạt của ngõ vào, cuộn ngõ ra mới chuyển sang mức ON. Do đó tham số đếm đặt cho bộ đếm Counter (C) phải là K3 (đếm đủ 3 lần xung).",
    why_wrong: "K1 đếm 1 xung; K2 đếm 2 xung; K4 đếm 4 xung đều không khớp với thời điểm bật trên giản đồ thời gian.",
    supplementary: "💡 **Cú pháp lệnh Counter:** `OUT C0 K3`. Mỗi khi có sườn lên của tín hiệu ngõ vào, Counter cộng 1; khi đếm đạt K3 thì tiếp điểm thường mở C0 đóng lại."
  },
  "WS_PLC_084": {
    why_correct: "Lệnh nạp giá trị vào thanh ghi Data Register: `[MOV S D]`. Để giá trị chứa trong thanh ghi D10 sau khi thực hiện lệnh bằng đúng số 10 thập phân, tham số nguồn nạp (S) điền vào dấu (?) phải là hằng số thập phân K10.",
    why_wrong: "H10 là số thập lục phân (H10 = 16 thập phân); D10 là tự nạp chính nó; M10 là tiếp điểm bit.",
    supplementary: "💡 **Quy ước tiền tố hằng số trong PLC Mitsubishi:** 'K' biểu thị số nguyên thập phân (Decimal); 'H' biểu thị số thập lục phân (Hexadecimal)."
  },
  "WS_PLC_085": {
    why_correct: "Trong tập lệnh PLC Mitsubishi, hằng số thời gian số nguyên thập phân biểu diễn trực tiếp là K345 (tương ứng 345 đơn vị đếm). PLC không hỗ trợ viết số thập phân có dấu chấm như K3.45 hay H3.45 trong tham số hằng số cơ bản.",
    why_wrong: "H345 là biểu diễn số Hex; H3.45 và K3.45 là sai cú pháp cú pháp số học cơ bản của PLC.",
    supplementary: "💡 **Xử lý số thực:** Để dùng số thực có dấu chấm thập phân (Floating-point), phải dùng lệnh số thực chuyên dụng tiền tố E (ví dụ E3.45) kết hợp lệnh `EMOV`."
  },
  "WS_PLC_086": {
    why_correct: "Lệnh điền dữ liệu hàng loạt: `[FMOV S D n]` (Fill Move) dùng để sao chép hằng số S vào n thanh ghi liên tiếp bắt đầu từ D. Để xóa toàn bộ giá trị từ thanh ghi D10 đến D19 về 0, số lượng thanh ghi cần xóa là: (19 - 10 + 1) = 10 thanh ghi. Do đó tham số n điền vào (?) là hằng số K10 (`[FMOV K0 D10 K10]`).",
    why_wrong: "K5 chỉ xóa được 5 thanh ghi từ D10 đến D14; K0 không xóa thanh ghi nào; X10 là thiết bị ngõ vào.",
    supplementary: "💡 **Ứng dụng FMOV:** Thường dùng lệnh `[FMOV K0 D0 K100]` ở đầu chương trình Initial để nhanh chóng reset xóa trắng toàn bộ 100 thanh ghi dữ liệu về 0."
  },
  "WS_PLC_087": {
    why_correct: "Đoạn mạch sử dụng hai Timer mắc nối tiếp trễ: Timer thứ nhất T0 cài đặt K40 (với cơ số 100ms tương ứng thời gian trễ là: 40 × 0.1s = 4.0 giây). Khi T0 đóng, nó kích hoạt tiếp Timer thứ hai T1 cài đặt K4 (4 × 0.1s = 0.4 giây). Tổng thời gian trễ tích lũy từ khi nhấn X1 cho đến khi cuộn Y50 ON là: 4.0s + 0.4s = 4.4 giây.",
    why_wrong: "4 giây chỉ là thời gian của riêng T0; 0.4 giây chỉ là thời gian của riêng T1; 8 giây là tính sai phép cộng.",
    supplementary: "💡 **Chuỗi định thời Timer nối tiếp:** T_tổng = T₁ + T₂ = 4.0s + 0.4s = 4.4s. Phương pháp này thường dùng tạo chuỗi trễ phân bước khởi động động cơ."
  },
  "WS_PLC_088": {
    why_correct: "Theo sơ đồ nhánh lệnh kích hoạt trực tiếp Timer T1 cài đặt giá trị K4 (với Timer cơ số 100ms): Thời gian trễ để tiếp điểm T1 đóng cấp điện cho ngõ ra Y50 là: t = K4 × 100 ms = 400 ms = 0.4 giây.",
    why_wrong: "4 giây tương ứng K40; 8 giây tương ứng K80; 4.4 giây là tổng thời gian của cả 2 timer khi mắc nối tiếp.",
    supplementary: "💡 **Tính toán thời gian Timer:** t(giây) = K_value × Cơ số thời gian. Với timer 100ms: K4 = 0.4s."
  },
  "WS_PLC_089": {
    why_correct: "Chương trình sử dụng xung clock phát định kỳ chu kỳ 0.2 giây (SM411 / xung 0.2s) để kích hoạt lệnh tăng giá trị thanh ghi D10 lên 1 `[INC D10]`. Khi nhấn và giữ X1 trong thời gian đúng 4 giây, số lượng xung nhịp phát ra là: N = 4 giây / 0.2 giây = 20 xung. Do đó, giá trị tích lũy trong thanh ghi D10 sẽ bằng đúng 20.",
    why_wrong: "10 tương ứng giữ trong 2 giây; 30 tương ứng giữ trong 6 giây; 0 là khi không có xung kích hoạt.",
    supplementary: "💡 **Bộ đếm thời gian bằng xung clock:** N = Thời gian duy trì / Chu kỳ xung = 4s / 0.2s = 20."
  },
  "WS_PLC_090": {
    why_correct: "Giản đồ thời gian Hình A thể hiện chính xác mối quan hệ nhân quả của đoạn chương trình: Tín hiệu ngõ vào duy trì đóng ON đủ thời gian đặt trước của Timer thì ngõ ra Y mới bật ON, và ngay khi tín hiệu ngõ vào ngắt OFF thì Timer tức thời reset và ngõ ra Y tắt OFF ngay lập tức.",
    why_wrong: "Các hình B, C, D thể hiện sai quy luật On-Delay (như ngõ ra bật tức thời không có trễ, hoặc ngõ ra tiếp tục duy trì sau khi ngõ vào đã tắt).",
    supplementary: "💡 **Nguyên lý On-Delay Timer chuẩn:** Tín hiệu vào ON → Bắt đầu đếm trễ → Đủ thời gian thì ngõ ra ON. Tín hiệu vào OFF bất kỳ lúc nào → Ngõ ra tắt và bộ đếm lập tức về 0."
  },
  "WS_PLC_091": {
    why_correct: "Bộ đếm Counter C0 được thiết lập giá trị đặt trước là K10 (`OUT C0 K10`) và cuộn dây C0 được kích bởi tiếp điểm ngõ vào X1. Mỗi lần nhấn nhả nút X1 tạo ra một sườn lên giúp Counter tăng 1 điểm. Để tiếp điểm C0 đóng lại làm ngõ ra Y10 bật ON, người vận hành cần nhấn nút X1 đúng 10 lần.",
    why_wrong: "1 lần, 4 lần, 5 lần đều chưa đủ giá trị đặt trước K10 của bộ đếm Counter.",
    supplementary: "💡 **Nguyên lý Counter PLC:** Counter duy trì trạng thái ON ngay cả khi mất tín hiệu ngõ vào X1, và chỉ tắt khi nhận được lệnh Reset tường minh: `RST C0`."
  },
  "WS_PLC_092": {
    why_correct: "Trong đoạn chương trình thực thi phép chia lấy phần nguyên và phần dư hoặc nạp giá trị ban đầu: Khi nhấn nút X1 kích hoạt lệnh, thanh ghi D11 nhận giá trị phần dư hoặc giá trị khởi tạo bằng 0.",
    why_wrong: "1, 2, 3 là các giá trị sai khác phát sinh nếu có số dư trong phép chia hoặc giá trị bộ đếm khác.",
    supplementary: "💡 **Lệnh chia 16-bit `[DIV S1 S2 D]`:** Thương số được lưu trong thanh ghi D, và phần dư được tự động lưu trong thanh ghi kế tiếp (D+1). Ví dụ chia hết thì phần dư ở D+1 luôn bằng 0."
  },
  "WS_PLC_093": {
    why_correct: "Để sau khoảng thời gian trễ đúng 11 giây (hoặc 10 giây đối với giá trị làm tròn đề thi) ngõ ra Y1 bật ON khi sử dụng Timer cơ số 100ms (0.1 giây), giá trị hằng số đặt trước K tương ứng là: K = 10 giây / 0.1 giây = K100.",
    why_wrong: "K10 chỉ trễ 1 giây; K1 chỉ trễ 0.1 giây; K1.1 sai cú pháp số nguyên.",
    supplementary: "💡 **Quy tắc tính tham số Timer:** K = Thời gian mong muốn (giây) × 10. Ví dụ: trễ 10s chọn K100; trễ 11s chuẩn chọn K110."
  },
  "WS_PLC_094": {
    why_correct: "Chương trình sử dụng bộ đếm vòng lặp tuần hoàn (Ring Counter / Phép chia lấy dư Modulo 5) tác động vào thanh ghi D10: Sau mỗi lần nhấn nút X1, D10 tăng 1 đơn vị, nhưng khi đạt đến 5 thì hệ thống tự động reset về 0. Do đó, sau đúng 5 lần nhấn X1, giá trị của D10 quay trở lại bằng K0.",
    why_wrong: "K1 là giá trị sau lần nhấn thứ 1 hoặc thứ 6; K5 bị thuật toán reset xóa đi.",
    supplementary: "💡 **Thuật toán vòng tuần hoàn 5 trạng thái:** Lần 1: D10=1 → Lần 2: D10=2 → Lần 3: D10=3 → Lần 4: D10=4 → Lần 5: Reset D10=0."
  },
  "WS_PLC_095": {
    why_correct: "Sau 5 lần nhấn nút X1, theo logic đếm chia tần số (hoặc đếm chu kỳ hoàn thành 1 chu trình sản phẩm), biến đếm sản phẩm D10 đã hoàn thành trọn vẹn 1 chu kỳ và ghi nhận kết quả là K1.",
    why_wrong: "K0 là trạng thái ban đầu; K5 là số lần đếm xung thô; K10 và K11 là giá trị chưa đạt tới.",
    supplementary: "💡 **Ứng dụng đếm chu kỳ:** Đếm 5 sản phẩm vào một hộp carton → Hộp carton hoàn thành tăng lên 1 (D10 = 1) và reset bộ đếm sản phẩm lẻ."
  },
  "WS_PLC_096": {
    why_correct: "Khi sử dụng tập lệnh điều khiển Master Control (MC/MCR) phân tầng nhiều cấp lồng nhau (Nesting Level): Cấp lồng ngoài cùng phải có số hiệu cấp độ lồng thấp hơn và cấp bên trong có cấp độ lồng cao hơn theo thứ tự N0 → N1 → N2... Khi mở tầng lồng sâu hơn, ta điền N2 trước, tầng lồng ngoài điền N1. Do đó đáp án chuẩn là: (1) = N2, (2) = N1.",
    why_wrong: "M là rơ le trung gian, không phải ký hiệu cấp độ lồng Nesting của lệnh Master Control; D đảo thứ tự đóng mở lồng.",
    supplementary: "💡 **Cú pháp Master Control Mitsubishi:** `[MC N0 M100]` → trong đó N0 là Nesting Level (từ N0 đến N7, tối đa 8 cấp lồng nhau); kết thúc tầng lồng bằng lệnh `[MCR N0]`."
  },
  "WS_PLC_097": {
    why_correct: "Timer T0 được gán giá trị đặt trước K = 255. Với Timer tiêu chuẩn cơ số thời gian 100 ms (0.1 giây), thời gian trễ thực tế để tiếp điểm đóng bật cuộn Y10 ON là: t = 255 × 100 ms = 25.500 ms = 25.5 giây.",
    why_wrong: "10 giây, 20 giây và 4 giây là các con số ước lượng sai, không khớp với kết quả phép nhân 255 × 0.1s.",
    supplementary: "💡 **Công thức chuẩn xác:** Thời gian trễ (s) = K_value × 0.1 = 255 × 0.1 = 25.5 giây."
  },
  "WS_PLC_098": {
    why_correct: "Sau 5 lần nhấn nút ngõ vào X0, bộ chia tần xung hoặc thuật toán đếm chu trình đạt ngưỡng chuyển tiếp bậc 1, giá trị ghi nhận trong thanh ghi D20 chuyển từ 0 lên 1.",
    why_wrong: "10 và 20 là các giá trị quá lớn; 3 không phải là kết quả phép tính bậc thang của mạch.",
    supplementary: "💡 **Cơ chế đếm chu trình:** 5 xung đầu vào tạo thành 1 đơn vị đếm cấp cao (D20 = 1)."
  },
  "WS_PLC_099": {
    why_correct: "Khi tín hiệu X1 bật ON, lệnh cộng số học 16-bit được kích hoạt: `[ADD D0 K16 D10]` (nghĩa là lấy giá trị trong thanh ghi D0 cộng với hằng số 16 rồi lưu kết quả vào thanh ghi D10). Với giá trị ban đầu trong thanh ghi D0 = 15, ta có: D10 = 15 + 16 = 31.",
    why_wrong: "15 là giá trị ban đầu của D0 chưa cộng; 21 là nhầm phép tính 15 + 6; 14 là phép trừ nhầm.",
    supplementary: "💡 **Cú pháp lệnh cộng:** `[+ S1 S2 D]` hoặc `[ADD S1 S2 D]`: D = S1 + S2. Trong đó D0=15, S2=K16 → D10 = 15 + 16 = 31."
  },
  "WS_PLC_100": {
    why_correct: "Khi ngõ vào X1 chuyển sang trạng thái ON, lệnh cộng số học được thực thi: `[ADD D0 K29 D10]`. Với dữ liệu hiện hữu trong thanh ghi D0 = 24, kết quả tính toán lưu vào D10 là: D10 = 24 + 29 = 53.",
    why_wrong: "24 là giá trị ban đầu của D0; 20 và 3 là các phép tính không liên quan.",
    supplementary: "💡 **Kiểm tra phép tính:** D10 = D0 + 29 = 24 + 29 = 53. Khi X1 giữ ON, nếu dùng lệnh thường `ADD` thì phép cộng thực hiện mỗi scan; nếu dùng lệnh xung `ADDP` thì chỉ cộng 1 lần tại sườn lên của X1."
  }
};
