# TÀI LIỆU DỮ LIỆU CÂU HỎI TRẮC NGHIỆM WHITE STAR (WS)

Bộ dữ liệu này được trích xuất tự động từ toàn bộ tài liệu ôn thi và đề thi White Star (gồm bảng Excel chính thức, các file slide bài giảng lý thuyết, ngân hàng ôn tập có đáp án, bài test theo môn và các bộ đề thi thử).

---

## 1. Cấu Trúc Thư Mục Dữ Liệu (`data/`)

```
data/
├── questions_master.json          # Ngân hàng câu hỏi chuẩn hóa (398 câu)
├── summary.json                   # Báo cáo thống kê tổng quan metadata
├── mock_exams.json                # Tổng hợp 5 bộ đề thi thử chuẩn (70-80 câu/đề)
├── questions_review_bank.json     # Ngân hàng 486 câu ôn tập trích xuất từ slide PPTX
├── questions_by_subject/          # Phân tách câu hỏi theo từng môn học
│   ├── electric.json              # 99 câu - Môn Điện & Điện tử cơ bản
│   ├── plc.json                   # 99 câu - Môn PLC cơ bản
│   ├── machine.json               # 100 câu - Môn Linh kiện máy cơ bản
│   └── pneumatics.json            # 100 câu - Môn Khí nén cơ bản
├── exams/                         # Các file JSON đề thi độc lập
│   ├── exam_de_01.json            # Đề thi thử số 01 (78 câu)
│   ├── exam_test_01.json          # Đề thi thử Test 01 (80 câu)
│   ├── exam_test_02.json          # Đề thi thử Test 02 (77 câu)
│   ├── exam_test_03.json          # Đề thi thử Test 03 (69 câu)
│   └── exam_test_04.json          # Đề thi thử Test 04 (76 câu)
└── images/                        # 213 hình ảnh kỹ thuật minh họa
    ├── electric/                  # Sơ đồ mạch, ký hiệu linh kiện điện tử (q_003.png, q_040.png...)
    ├── plc/                       # Sơ đồ khối, timing chart, ladder logic PLC
    ├── machine/                   # Bản vẽ vòng bi, dung sai, then trục cơ khí
    ├── pneumatics/                # Sơ đồ van khí nén, xi lanh, bộ lọc FRL
    ├── exams/                     # Hình ảnh sơ đồ trong các đề thi thử
    └── review_bank/               # Hình ảnh trích xuất từ slide ôn tập
```

---

## 2. Đặc Tả Cấu Trúc Dữ Liệu (JSON Schema)

### 2.1. Master Question Bank (`data/questions_master.json`)

Mỗi phần tử đại diện cho 1 câu hỏi trắc nghiệm hoàn chỉnh:

```json
{
  "id": "WS_ELE_003",
  "source": "Bang diem dao tao va on thi White Star.xlsx",
  "subject": "Điện - Điện tử cơ bản",
  "subject_code": "electric",
  "module": "1.Điện-Điện tử cơ bản",
  "difficulty": "Dễ",
  "question_number": 3,
  "question": "Dựa vào hình ảnh về sự kích thích và phóng xạ của nguyên tử, đâu không phải là hiện tượng được thể hiện?",
  "options": [
    { "key": "A", "text": "Kích thích(excitation)" },
    { "key": "B", "text": "I-ôn hóa(ionization)(Điện ly)" },
    { "key": "C", "text": "Phóng xung điện" },
    { "key": "D", "text": "Lượng tử ánh sáng(Proton)" }
  ],
  "correct_answer": "C",
  "images": [
    "images/electric/q_003.png"
  ],
  "author": "Tran Van Dai",
  "note": ""
}
```

### 2.2. Đề Thi Thử (`data/exams/exam_test_01.json`)

```json
{
  "id": "EXAM_TEST_01",
  "title": "Đề thi thử White Star - Test 01",
  "total_questions": 80,
  "questions": [
    {
      "id": "EXAM_TEST_01_Q01",
      "exam_id": "EXAM_TEST_01",
      "section": "Đánh giá WS – Điện tử điện cơ",
      "question_number": 1,
      "question": "Giải thích nào không đúng về cấu tạo của nguyên tử?...",
      "options": [
        { "key": "A", "text": "Hạt nhân nguyên tử: Cấu thành bởi hạt proton và hạt neutron" },
        ...
      ],
      "correct_answer": "B",
      "images": []
    }
  ]
}
```

---

## 3. Thống Kê Dữ Liệu

| Hạng mục | Số lượng | Ghi chú |
| :--- | :--- | :--- |
| **Tổng câu hỏi Master** | **398 câu** | Đã chuẩn hóa 100% đầy đủ đáp án & mức độ |
| • Điện - Điện tử | 99 câu | Bao gồm lý thuyết nguyên tử, linh kiện bán dẫn, đo lường sóng |
| • PLC | 99 câu | Cấu trúc PLC, lệnh Ladder, Timer/Counter, GX Works/Developer |
| • Linh kiện máy | 100 câu | Vòng bi, trục, then chốt, dung sai ghép nối, bôi trơn |
| • Khí nén | 100 câu | Van đảo chiều, van tiết lưu, xi lanh, máy nén khí, FRL |
| **Phân bổ độ khó** | | |
| • Dễ | 112 câu (28.1%) | Nhận biết khái niệm, công thức cơ bản |
| • Trung bình | 198 câu (49.7%) | Tính toán, đọc ký hiệu, nguyên lý hoạt động |
| • Khó | 88 câu (22.2%) | Phân tích mạch, giải mã timing chart, troubleshooting |
| **Ngân hàng ôn tập PPTX** | **486 câu** | Đầy đủ 64 slide kèm đáp án bôi đỏ |
| **Bộ đề thi thử White Star** | **5 bộ đề** | Đề 01, Test 01, Test 02, Test 03, Test 04 |
| **Hình ảnh sơ đồ minh họa** | **213 ảnh** | Tách rời theo thư mục môn và đề thi |

---

## 4. Chạy Lại Pipeline Trích Xuất (Tái Lập Dữ Liệu)

Nếu có tài liệu mới hoặc cần trích xuất lại toàn bộ:

```bash
python3 extract_all.py
```
Script sẽ tự động đọc tài liệu trong `WS/`, giải mã các file PPTX được bảo vệ bằng mật khẩu, trích xuất ảnh và tạo lại toàn bộ cấu trúc thư mục `data/`.
