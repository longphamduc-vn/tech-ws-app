# Ứng Dụng Ôn Thi Trắc Nghiệm Kỹ Thuật White Star (Tech WS App)

Ứng dụng web ôn tập và thi thử trắc nghiệm kỹ thuật toàn diện, được chuẩn hóa từ bộ tài liệu và ngân hàng câu hỏi chính thức White Star. Bao gồm **398 câu hỏi Master**, **213 sơ đồ kỹ thuật minh họa**, hệ thống **giải thích đáp án chuyên sâu**, cùng **5 đề thi thử tiêu chuẩn** (80 câu/đề).

---

## 🚀 Hướng Dẫn Khởi Chạy (Đặc Biệt Dành Cho Máy Không Cài Python / Node.js)

Ứng dụng được thiết kế dạng **Static Web Application thuần (Zero-Dependency)**, đã được đóng gói sẵn toàn bộ cơ sở dữ liệu qua các script độc lập. Vì vậy, **bạn hoàn toàn không bắt buộc phải cài Python hay Node.js để sử dụng!**

---

### 👉 Cách 1: Sử Dụng Trực Tuyến Qua GitHub Pages (Khuyến Nghị Cao Nhất)
> **Không cần tải file về máy, không cần cài đặt bất kỳ phần mềm nào.**

- Truy cập trực tiếp link web: **[https://longphamduc-vn.github.io/tech-ws-app/](https://longphamduc-vn.github.io/tech-ws-app/)**
- Hoạt động mượt mà trên mọi thiết bị: Máy tính văn phòng (kể cả máy bị khóa quyền Administrator), Laptop, MacBook, Điện thoại Android, iPhone, iPad.
- Dữ liệu làm bài, lịch sử thi và câu hỏi đã đánh dấu được tự động lưu trong `localStorage` của trình duyệt riêng của từng thiết bị.

---

### 👉 Cách 2: Chạy Offline 100% Cục Bộ (Không Cần Python, Không Cần Node.js)
> **Thích hợp khi không có mạng Internet hoặc máy tính nội bộ cô lập.**

1. Tải toàn bộ mã nguồn về máy (bấm **Code** -> **Download ZIP** trên GitHub, rồi giải nén).
2. **Khởi chạy cực nhanh:**
   - **Trên Windows:** Nhấp đúp chuột vào file **`start_app.bat`** (hoặc nhấp đúp trực tiếp vào file **`index.html`**).
   - **Trên macOS / Linux:** Nhấp đúp chuột trực tiếp vào file **`index.html`** (mở bằng Chrome, Edge, Cốc Cốc, Brave hoặc Firefox).
3. Ứng dụng sẽ tự động khởi chạy tức thì với đầy đủ 100% câu hỏi, hình ảnh sơ đồ và bài thi mà **không gặp bất kỳ lỗi CORS hay bảo mật nào!**

---

### 👉 Cách 3: Chạy Qua Local Web Server (Nếu Máy Đã Cài Sẵn Python hoặc Node.js)
Nếu máy bạn là môi trường lập trình viên và muốn chạy qua cổng localhost:

- **Với Python 3:**
  ```bash
  python -m http.server 8000
  # Mở trình duyệt tại: http://localhost:8000
  ```
- **Với Node.js (npx):**
  ```bash
  npx serve .
  ```
- **Với VS Code:** Cài extension **Live Server**, nhấp chuột phải vào `index.html` chọn *Open with Live Server*.

---

## ✨ Các Tính Năng Nổi Bật Của Ứng Dụng

1. **Bộ Ngân Hàng Câu Hỏi Chuẩn Hóa (398 Câu Master):**
   - **Điện & Điện tử cơ bản:** 99 câu (Định luật Ohm, Kirchoff, mạch RC/RLC, linh kiện bán dẫn BJT, Diode, Op-Amp, máy biến áp...).
   - **PLC cơ bản:** 99 câu (Cấu trúc phần cứng PLC, chu kỳ quét Scan Cycle, lập trình Ladder Logic, thanh ghi Timer/Counter, chuyển đổi nhị phân/thập lục phân...).
   - **Linh kiện máy cơ bản:** 100 câu (Ổ lăn, then - then hoa, bộ truyền đai/xích, bánh răng trụ/nón/trục vít, mối ghép bu lông, dung sai lắp ghép...).
   - **Khí nén cơ bản:** 100 câu (Máy nén khí, bộ lọc FRL, van đảo chiều 3/2, 5/2, van tiết lưu, xi lanh tác động đơn/kép, sơ đồ mạch khí nén...).

2. **Hệ Thống Giải Thích Chuyên Sâu Đa Tầng:**
   - **Tại sao đúng (`why_correct`):** Giải thích cặn kẽ bản chất vật lý, công thức tính toán và tiêu chuẩn kỹ thuật công nghiệp.
   - **Tại sao sai (`why_wrong`):** Phân tích từng phương án gây nhiễu, chỉ rõ bẫy đề thi hay gặp.
   - **Kiến thức cốt lõi (`supplementary`):** Tóm tắt nguyên lý then chốt giúp ghi nhớ dài hạn.

3. **Chế Độ Thi Thử Tiêu Chuẩn (Mock Exams):**
   - 5 bộ đề thi hoàn chỉnh (80 câu/đề) mô phỏng kỳ thi White Star thực tế.
   - Đồng hồ đếm ngược thời gian thực (60 phút).
   - Bảng điều hướng câu hỏi (Palette) trực quan, đổi màu theo trạng thái đã làm / chưa làm.
   - Tự động chấm điểm, tính tỷ lệ % đạt, hiển thị kết quả đậu/rớt (chuẩn 70%).
   - Xem lại chi tiết toàn bộ bài thi sau khi nộp kèm đáp án đối chiếu.
   - Lưu trữ lịch sử thi không giới hạn vào bộ nhớ trình duyệt.

4. **Bộ Lọc Đa Chiều & Công Cụ Ôn Tập Thông Minh:**
   - Lọc theo Môn học, Chuyên đề / Module chi tiết, Dạng câu hỏi (Lý thuyết, Sơ đồ, Tính toán, Sự cố), Độ khó (Dễ, Trung bình, Khó).
   - Ngân hàng câu làm sai (tự động gom các câu bạn trả lời sai để luyện tập lại đến khi thành thạo).
   - Đánh dấu câu hỏi yêu thích (Bookmark) để xem lại nhanh trước giờ thi.
   - Chế độ xáo trộn thứ tự đáp án (A, B, C, D) ngẫu nhiên để chống học vẹt.
   - Tùy chọn phản hồi đáp án ngay lập tức (Instant Feedback) hoặc chế độ làm bài tự kiểm tra.

5. **Thư Viện Sơ Đồ Kỹ Thuật (Media Gallery):**
   - Duyệt và tra cứu hơn 210 hình ảnh sơ đồ mạch, ký hiệu và bản vẽ kỹ thuật.
   - Trình phóng to ảnh chất lượng cao (Lightbox Modal) giúp soi rõ từng chi tiết mạch.

6. **Giao Diện Hiện Đại & Đa Theme:**
   - 4 bộ chủ đề màu sắc cao cấp: **Midnight Pro**, **Cyber Neon**, **Emerald Tech**, **Clean Day**.
   - Hỗ trợ đầy đủ Responsive trên máy tính để bàn, laptop, tablet và điện thoại di động.

---

## 📁 Cấu Trúc Thư Mục Dự Án

```text
tech-ws-app/
├── index.html                   # Giao diện chính của ứng dụng
├── app.css                      # Hệ thống style giao diện hiện đại & các theme
├── app.js                       # Logic xử lý ứng dụng, điều hướng & lưu trữ
├── start_app.bat                # Phím tắt mở nhanh trên Windows (không cần cài gì)
├── README.md                    # Tài liệu hướng dẫn sử dụng
│
├── data/                        # Cơ sở dữ liệu của ứng dụng
│   ├── questions_master.json    # 398 câu hỏi Master có phân tích giải thích
│   ├── questions_master.js      # Bản đóng gói JS để chạy Offline không cần server
│   ├── mock_exams.json          # 5 bộ đề thi thử White Star (80 câu/đề)
│   ├── mock_exams.js            # Bản đóng gói JS đề thi để chạy Offline
│   ├── summary.json             # Thống kê tổng thể dữ liệu
│   ├── summary.js               # Bản đóng gói JS thống kê
│   ├── questions_review_bank.json # Dữ liệu ngân hàng ôn tập gốc
│   ├── exams/                   # File JSON chi tiết từng đề thi lẻ
│   ├── questions_by_subject/    # Phân loại câu hỏi theo từng môn học
│   └── knowledge/               # Từ điển kiến thức chuyên sâu 4 môn
│
├── images/                      # 213 file hình ảnh kỹ thuật minh họa cho câu hỏi
│   ├── electric/                # Sơ đồ mạch điện & linh kiện điện tử
│   ├── plc/                     # Sơ đồ kết nối I/O & giản đồ xung PLC
│   ├── machine/                 # Bản vẽ ổ lăn, then, bánh răng, truyền động
│   ├── pneumatics/              # Sơ đồ nguyên lý van & xi lanh khí nén
│   └── exams/                   # Hình ảnh dùng trong các đề thi thử
│
└── tools/                       # Bộ công cụ ETL trích xuất dữ liệu gốc
    ├── extract_all.py           # Script trích xuất câu hỏi và hình ảnh từ PPTX
    └── enrich_questions.py      # Script làm giàu giải thích kỹ thuật
```

---

## 📜 Bản Quyền & Giấy Phép
Dữ liệu và mã nguồn phục vụ mục đích học tập, ôn luyện và nâng cao kỹ năng kỹ thuật viên.
