# Ứng Dụng Ôn Thi Trắc Nghiệm Kỹ Thuật White Star (Tech WS App v3.0 Pro)

Nền tảng web học tập, ôn luyện và thi thử trắc nghiệm kỹ thuật toàn diện, được chuẩn hóa từ bộ tài liệu và ngân hàng câu hỏi chính thức White Star. Bao gồm **834 câu hỏi Master**, **330+ sơ đồ kỹ thuật minh họa**, hệ thống **giải thích đáp án chuyên sâu 3 tầng**, cùng **6 đề thi thử tiêu chuẩn** và **hệ thống thẻ ghi nhớ Leitner 3D**.

---

## 🚀 Hướng Dẫn Khởi Chạy (Đặc Biệt Dành Cho Máy Không Cài Python / Node.js)

Ứng dụng được thiết kế dạng **Static Web Application thuần (Zero-Dependency)**, đã được đóng gói sẵn toàn bộ cơ sở dữ liệu qua các script độc lập. Vì vậy, **bạn hoàn toàn không bắt buộc phải cài Python hay Node.js để sử dụng!**

---

### 👉 Cách 1: Sử Dụng Trực Tuyến Qua GitHub Pages (Khuyến Nghị Cao Nhất)
> **Không cần tải file về máy, không cần cài đặt bất kỳ phần mềm nào.**

- Truy cập trực tiếp link web: **[https://longphamduc-vn.github.io/tech-ws-app/](https://longphamduc-vn.github.io/tech-ws-app/)**
- Hoạt động mượt mà trên mọi thiết bị: Máy tính văn phòng (kể cả máy bị khóa quyền Administrator), Laptop, MacBook, Điện thoại Android, iPhone, iPad.
- Dữ liệu làm bài, lịch sử thi, thẻ ghi nhớ và câu hỏi đã đánh dấu được tự động lưu trong `localStorage` riêng của từng thiết bị.

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
  python -m http.server 8080
  # Mở trình duyệt tại: http://localhost:8080
  ```
- **Với Node.js (npx):**
  ```bash
  npx serve .
  ```

---

## ✨ 8 Phân Hệ Tính Năng Nổi Bật Của Phiên Bản v3.0 Pro

1. **📊 Dashboard Thông Minh & Bậc Năng Lực Học Viên:**
   - Thống kê toàn diện 834 câu Master, 6 đề thi, 330+ sơ đồ mạch.
   - Thước đo cấp bậc năng lực: Kỹ thuật viên tập sự → Bậc 1 → Bậc 2 → White Star Master.
   - Thanh tiến độ trực quan theo từng môn: Điện (282 câu), PLC (202 câu), Linh kiện máy (192 câu), Khí nén (158 câu).

2. **🎯 Chế Độ Luyện Tập Đa Chiều (Smart Practice):**
   - Bộ lọc linh hoạt: Môn học, Chuyên đề (Module), Dạng câu (Lý thuyết, Sơ đồ, Tính toán, Sự cố), Độ khó, Trạng thái (Chưa làm, Đã làm đúng, Đã làm sai, Bookmark).
   - Tùy chọn **Phản hồi tức thì** (Instant Feedback) hoặc Tự kiểm tra.
   - **Xáo trộn ngẫu nhiên đáp án (A, B, C, D)** chống học vẹt vị trí.
   - Giải thích chuyên sâu 3 tầng: *Tại sao đúng*, *Phân tích bẫy thi*, *Kiến thức cốt lõi*.

3. **🗂️ Thẻ Ghi Nhớ Flashcard 3D (Phương Pháp Leitner):**
   - Thẻ lật 3 chiều (Mặt trước: Câu hỏi + sơ đồ ⇄ Mặt sau: Đáp án + công thức).
   - 3 Hộp ghi nhớ thông minh: 🔴 Chưa nhớ → 🟡 Đang nhớ → 🟢 Đã thuộc.
   - Hỗ trợ lọc flashcard theo từng môn hoặc riêng các câu trong sổ tay câu sai.

4. **❌ Sổ Tay Câu Sai (Mistake Notebook & Remedial Training):**
   - Tự động gom lại tất cả các câu làm sai từ cả Luyện tập và Thi thử.
   - Đếm tần suất sai của từng câu và cung cấp chế độ "Luyện lại câu sai" chuyên biệt để xóa sạch lỗi sai trước khi thi thật.

5. **⏱️ Phòng Thi Thử Chuẩn Hóa (Standard Exam Simulation):**
   - 6 Đề thi gốc White Star + 4 Chế độ sinh đề thông minh (Đề chuẩn 80 câu, 40 câu, 20 câu, đề 1 môn).
   - Đồng hồ đếm ngược có cảnh báo nhấp nháy khi còn dưới 5 phút.
   - Tính năng **Cắm cờ câu hỏi phân vân (🚩 Flag for Review)**.
   - **Hỗ trợ phím tắt bàn phím**: Phím `1-4` / `A-D` chọn đáp án, `← / →` chuyển câu, `F` cắm cờ.
   - Bảng phân tích năng lực 4 môn & xem lại chi tiết từng câu sau khi nộp bài.

6. **📖 Sổ Tay Tra Cứu Ký Hiệu & Công Thức Trọng Tâm (Cheatsheet):**
   - Bảng tra cứu ký hiệu van khí nén (3/2, 5/2, tiết lưu), tiếp điểm PLC Mitsubishi/Siemens.
   - Bảng công thức trọng tâm: Định luật Ohm, RLC, lực xi lanh khí nén, tỉ số truyền bánh răng, mã ổ lăn.

7. **🖼️ Thư Viện Sơ Đồ Lightbox Pan & Zoom:**
   - Tra cứu hơn 330 hình ảnh sơ đồ mạch điện, bản vẽ kỹ thuật.
   - Trình Lightbox tương tác: lăn chuột phóng to/thu nhỏ, kéo rê (Pan/Drag) soi rõ từng đường dây vi mạch.

8. **📜 Lịch Sử, Hồ Sơ & Sao Lưu Dữ Liệu (Backup & Restore):**
   - Lưu trữ toàn bộ điểm số, thời gian và đánh giá các lượt thi.
   - **Sao lưu (Export JSON)** & **Khôi phục (Import JSON)** giúp chuyển đổi dữ liệu dễ dàng giữa điện thoại và máy tính mà không sợ mất tiến độ.
   - 4 Bộ chủ đề giao diện: Midnight Pro, Cyber Neon, Emerald Tech, Clean Day.

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
