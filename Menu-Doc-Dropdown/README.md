# Thực hành: Tạo menu dọc Dropdown

## File
- `index.html`: cấu trúc menu nhiều cấp.
- `style.css`: định dạng menu và hiệu ứng hover.

## Cách chạy
1. Giải nén ZIP.
2. Mở thư mục bằng VS Code.
3. Mở `index.html` trên trình duyệt hoặc Live Server.
4. Rê chuột vào **Khóa học** hoặc **Tài nguyên** để hiện menu con.
5. Rê chuột vào **Backend** để xem menu cấp tiếp theo.

## CSS quan trọng
- `list-style: none`: bỏ bullet.
- `position: relative`: làm mốc định vị menu con.
- `position: absolute`: đặt menu con bên cạnh mục cha.
- `visibility: hidden`: ẩn menu con mặc định.
- `li:hover > ul`: hiện menu con khi rê chuột.
- `z-index`: đảm bảo menu con nằm trên nội dung khác.

## Nộp GitHub
Tạo repository mới, mở Terminal tại thư mục dự án và chạy:
```bash
git init
git add .
git commit -m "Create vertical dropdown menu"
git branch -M main
git remote add origin https://github.com/TEN_TAI_KHOAN/TEN_REPOSITORY.git
git push -u origin main
```
Thay URL ví dụ bằng repository thật của bạn. Nếu đã có remote `origin`, không chạy lại lệnh `git remote add origin`.
