# Bài tập: Tái cấu trúc mã CSS sang SASS

Bài làm tái cấu trúc phần CSS của mã nguồn `codegym-vn/responsive-grid` thành các file SCSS, sử dụng biến và mixins để giảm lặp lại.

## Cấu trúc thư mục
- `responsive_grid.htm`: trang HTML mẫu, liên kết tới CSS đã biên dịch.
- `scss/abstracts/_variables.scss`: các biến màu sắc, kích thước, khoảng cách.
- `scss/abstracts/_mixins.scss`: mixin cho grid wrapper, grid column và dải màu toàn chiều ngang.
- `scss/base/_global.scss`: quy tắc toàn cục.
- `scss/layout/_grid.scss`: quy tắc bố cục grid.
- `scss/main.scss`: file SCSS đầu vào.
- `css/main.css`: CSS biên dịch sẵn để xem trang ngay.

## Chạy thử
1. Cài Node.js nếu máy chưa có.
2. Mở terminal ở thư mục dự án.
3. Chạy `npm install`.
4. Chạy `npm run sass` để biên dịch SCSS sang CSS.
5. Chạy `npm run watch` nếu muốn tự biên dịch sau mỗi lần lưu SCSS.
6. Mở `responsive_grid.htm` bằng trình duyệt.

## Đưa lên GitHub
Tạo một repository mới trên tài khoản GitHub của bạn, rồi chạy tại thư mục dự án:
```bash
git init
git add .
git commit -m "Refactor responsive grid CSS to SASS"
git branch -M main
git remote add origin https://github.com/TEN_TAI_KHOAN/TEN_REPOSITORY.git
git push -u origin main
```
Thay URL ví dụ bằng URL repository thực tế. Nếu thư mục đã có remote, không chạy lại `git remote add origin`.

Mã nguồn gốc tham khảo: https://github.com/codegym-vn/responsive-grid
