# Thực hành: Tạo mixins & biến để tối ưu CSS của website mẫu

## Cấu trúc
- `scss/abstracts/_variables.scss`: tập trung các biến màu sắc, kích thước, khoảng cách.
- `scss/abstracts/_mixins.scss`: mixin dùng lại cho nút và thẻ nội dung.
- `scss/base/_typography.scss`: kiểu chữ và tiêu đề.
- `scss/base/_global.scss`: thiết lập toàn cục và bố cục.
- `scss/components/_buttons.scss`: áp dụng `button-style`.
- `scss/components/_cards.scss`: áp dụng `box-style`.
- `scss/main.scss`: file SCSS đầu vào.
- `css/main.css`: CSS đã biên dịch để mở trang ngay.

## Chạy thử
1. Cài Node.js nếu máy chưa có.
2. Mở terminal tại thư mục dự án.
3. Chạy `npm install`.
4. Chạy `npm run sass` để biên dịch một lần.
5. Chạy `npm run watch` để tự biên dịch khi sửa SCSS.
6. Mở `index.html` bằng trình duyệt.

## Đưa lên GitHub
Tạo repository trên GitHub, sau đó tại terminal trong thư mục dự án chạy:
```bash
git init
git add .
git commit -m "Complete SASS variables and mixins practice"
git branch -M main
git remote add origin https://github.com/TEN_TAI_KHOAN/TEN_REPOSITORY.git
git push -u origin main
```
Thay URL mẫu bằng URL repository thật của bạn. Các lệnh trên chỉ đẩy mã nguồn khi bạn tự chạy trên máy.
