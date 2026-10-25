# Portfolio sinh viên CNTT

Website Portfolio cá nhân sử dụng HTML5, CSS3 và JavaScript thuần, theo phong cách Dark Mode hiện đại.

## Cấu trúc thư mục

```text
portfolio_sinh_vien_cntt/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── (thêm ảnh đại diện/dự án của bạn tại đây)
└── README.md
```

## Cách chạy bằng VS Code

1. Giải nén thư mục `portfolio_sinh_vien_cntt`.
2. Mở Visual Studio Code.
3. Chọn **File → Open Folder...** rồi chọn thư mục vừa giải nén.
4. Mở file `index.html`.
5. Có thể mở trực tiếp `index.html` trên trình duyệt. Khuyến nghị cài extension **Live Server** trong VS Code, nhấp chuột phải vào `index.html` → **Open with Live Server**.
6. Sửa nội dung trong `index.html`, giao diện trong `css/style.css`, chức năng trong `js/script.js`.

## Những chức năng đã có

- Điều hướng đến các section.
- Menu thu gọn cho màn hình điện thoại.
- Chuyển Dark Mode / Light Mode, lưu lựa chọn trong `localStorage`.
- Lọc dự án: Tất cả, Web, Python.
- Hiệu ứng xuất hiện khi cuộn trang.
- Nút cuộn lên đầu trang.
- Form liên hệ kiểm tra họ tên, email và nội dung bằng JavaScript.
- Responsive cho desktop, tablet và mobile.
- Năm hiện tại tự cập nhật.

## Việc cần cá nhân hóa trước khi nộp

- Kiểm tra tên, ngành học, trường, năm học và mục tiêu nghề nghiệp.
- Thay email `your.email@example.com`, GitHub và LinkedIn bằng thông tin thật.
- Thay avatar minh họa bằng ảnh cá nhân. Có thể đặt ảnh trong `images/` và chỉnh phần `.avatar-placeholder` trong HTML/CSS.
- Thay dự án mẫu bằng dự án đã thực sự thực hiện; thêm link GitHub hoặc bản demo.
- Điều chỉnh mức kỹ năng theo đúng năng lực hiện tại.
- Nếu cần form gửi email thật, kết nối backend hoặc dịch vụ nhận form. Form hiện tại chỉ kiểm tra dữ liệu trên trình duyệt.

## Đối chiếu tiêu chí chấm điểm

| Tiêu chí | Vị trí/đáp ứng |
|---|---|
| Header / Navbar / Banner | Header sticky, menu và hero ở đầu trang |
| Giới thiệu bản thân | Section `#about` |
| Mục tiêu nghề nghiệp | Section `#goals` |
| Kỹ năng | Section `#skills` |
| Học vấn / kinh nghiệm / hoạt động | Section `#education` |
| Ít nhất 2 dự án | Section `#projects`, có 3 dự án mẫu |
| Chứng chỉ / giải thưởng / sở thích | Timeline, ghi chú chứng chỉ và sở thích |
| Cấu trúc HTML | HTML5 semantic: `header`, `nav`, `main`, `section`, `article`, `footer`, `form` |
| Layout | CSS Grid và Flexbox |
| Thẩm mỹ | Bảng màu, typography, khoảng cách, thẻ và hiệu ứng nhất quán |
| Responsive | Media queries cho màn hình nhỏ và lớn |
| CSS3 | Hover, transition, animation, transform |
| JavaScript | DOM, event listener, localStorage, IntersectionObserver |
| Tối thiểu 2 tương tác | Menu mobile, theme toggle, lọc dự án, back-to-top |
| Form liên hệ | Kiểm tra họ tên, email và nội dung |
| Clean code | Tách HTML/CSS/JS, đặt tên dễ hiểu, có chú thích |
| Tổ chức source | CSS trong `css/`, JavaScript trong `js/`, ảnh trong `images/` |
| Cá nhân hóa | Có nội dung mẫu để thay bằng thông tin thật |
| Sáng tạo | Code window, thẻ nổi, project artwork, hiệu ứng cuộn |

**Lưu ý:** Nội dung dự án và hồ sơ là ví dụ minh họa. Hãy cá nhân hóa trước khi nộp bài. Điểm số cuối cùng tùy thuộc vào giảng viên đánh giá và mức độ hoàn thiện thực tế.
