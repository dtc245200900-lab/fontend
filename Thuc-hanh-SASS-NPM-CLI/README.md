# Thực hành cài đặt SASS bằng npm & SASS CLI

## Cấu trúc
- `index.html`: trang demo sử dụng CSS đã biên dịch.
- `scss/styles.scss`: SCSS chính, dùng `@use` để nhập biến và mixin.
- `scss/_variables.scss`: các biến màu.
- `scss/_mixins.scss`: mixin dùng chung.
- `scss/extra.scss`: tệp SCSS phụ để thử biên dịch nhiều tệp.
- `css/styles.css`, `css/extra.css`: CSS đầu ra đã biên dịch.
- `package.json`: script npm hỗ trợ biên dịch và watch.

## 1. Kiểm tra Node.js và npm
Mở terminal trong VS Code hoặc Command Prompt:
```bash
node -v
npm -v
```
Nếu chưa có, cài Node.js từ https://nodejs.org/en/download/ rồi mở terminal mới.

## 2. Cài SASS
Cài toàn cục:
```bash
npm install -g sass
sass --version
```
Hoặc dùng SASS cục bộ trong dự án:
```bash
npm install
npm run sass
```

## 3. Biên dịch một tệp
Chạy tại thư mục dự án:
```bash
sass scss/styles.scss css/styles.css
```

## 4. Theo dõi thay đổi (watch)
```bash
sass --watch scss/styles.scss:css/styles.css
```
Giữ terminal đang chạy. Khi sửa SCSS và lưu, Sass sẽ tự cập nhật CSS. Dừng bằng `Ctrl + C`.

## 5. Biên dịch nhiều tệp cùng lúc
```bash
sass --watch scss:css
```
Sass sẽ theo dõi thư mục `scss` và biên dịch các tệp SCSS tương ứng sang `css`. Các tệp bắt đầu bằng `_` là partials, được nhập bằng `@use` và không biên dịch thành CSS đầu ra riêng.

## 6. Dùng npm scripts
```bash
npm install
npm run sass
npm run watch
```

## Lưu ý PowerShell
Không nên chạy `Set-ExecutionPolicy Unrestricted` một cách rộng rãi chỉ để sửa lỗi npm. Nếu PowerShell chặn `npm.ps1`, có thể dùng Command Prompt/terminal CMD, hoặc xử lý chính sách thực thi ở phạm vi phù hợp theo hướng dẫn của quản trị viên.

## Đẩy lên GitHub
```bash
git init
git add .
git commit -m "Practice Sass CLI"
git branch -M main
git remote add origin https://github.com/TEN_TAI_KHOAN/TEN_REPOSITORY.git
git push -u origin main
```
Thay URL mẫu bằng repository thật của bạn. Nếu đã cấu hình `origin`, bỏ qua lệnh `git remote add origin`.
