# Chuyển đổi CSS có sẵn sang SASS/SCSS theo chuẩn

## Cấu trúc thư mục
```text
Chuyen-CSS-Sang-SCSS-Chuan/
├── index.html
├── package.json
├── README.md
├── scss/
│   ├── main.scss
│   ├── abstracts/
│   │   ├── _variables.scss
│   │   └── _mixins.scss
│   ├── base/
│   │   └── _global.scss
│   ├── layout/
│   │   └── _container.scss
│   └── components/
│       ├── _buttons.scss
│       └── _cards.scss
└── css/
    └── main.css
```

## Cách chạy
1. Cài Node.js nếu máy chưa có: https://nodejs.org/en/download/
2. Mở Terminal tại thư mục dự án.
3. Cài Sass:
   ```bash
   npm install
   ```
4. Biên dịch SCSS sang CSS:
   ```bash
   npm run sass
   ```
5. Tự động biên dịch khi sửa SCSS:
   ```bash
   npm run watch
   ```
6. Mở `index.html` bằng trình duyệt.

## Những kỹ thuật đã dùng
- Biến trong `scss/abstracts/_variables.scss`.
- Mixin trong `scss/abstracts/_mixins.scss`.
- Nesting trong `scss/components/_buttons.scss` và `_cards.scss`.
- Partial theo nhóm `abstracts`, `base`, `layout`, `components`.
- `scss/main.scss` dùng `@use` để nạp các module theo cú pháp Sass hiện đại.

## Lệnh biên dịch thủ công
```bash
sass scss/main.scss css/main.css
sass --watch scss:css
```

## Đẩy lên GitHub
```bash
git init
git add .
git commit -m "Refactor CSS into SCSS architecture"
git branch -M main
git remote add origin https://github.com/TEN_TAI_KHOAN/TEN_REPOSITORY.git
git push -u origin main
```
Thay URL mẫu bằng URL repository của bạn. Nếu `origin` đã được cấu hình, bỏ qua lệnh `git remote add origin`.
