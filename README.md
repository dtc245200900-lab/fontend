# Tái cấu trúc Landing Page bằng SASS

## Nội dung
Project minh họa việc tách giao diện landing page thành các phần header/navigation, hero, sản phẩm nổi bật, thống kê và footer. SCSS được chia theo nhóm để dễ bảo trì.

> Lưu ý: nội dung đề bài không đính kèm mã nguồn CSS đã làm ở các bài trước hoặc file thiết kế gốc. Vì vậy đây là landing page mẫu được dựng lại để minh họa cách refactor SASS, không thể bảo đảm trùng khớp từng chi tiết với template CodeGym của bạn. Nếu có mã nguồn cũ, thay phần HTML/SCSS mẫu bằng cấu trúc và nội dung gốc rồi giữ cách tổ chức SASS.

## Cấu trúc
- `scss/abstracts/_variables.scss`: biến dùng chung.
- `scss/abstracts/_mixins.scss`: mixin container, flex, button, card, responsive.
- `scss/base/_reset.scss`: CSS toàn cục.
- `scss/layout/_container.scss`: container và tiêu đề section.
- `scss/components/`: header, button, footer.
- `scss/sections/`: hero, products, statistics.
- `scss/_responsive.scss`: quy tắc responsive.
- `scss/main.scss`: file đầu vào.
- `css/main.css`: CSS biên dịch sẵn.
- `index.html`: trang demo.

## Chạy thử
1. Cài Node.js.
2. Mở Terminal tại thư mục này.
3. Chạy `npm install`.
4. Chạy `npm run sass` để biên dịch.
5. Chạy `npm run watch` để theo dõi thay đổi.
6. Mở `index.html` trong trình duyệt.

## Đưa lên GitHub
Tạo repository mới trên GitHub, rồi chạy:
```bash
git init
git add .
git commit -m "Refactor landing page CSS to SASS"
git branch -M main
git remote add origin https://github.com/TEN_TAI_KHOAN/TEN_REPOSITORY.git
git push -u origin main
```
Thay URL mẫu bằng URL repository của bạn. Nếu `origin` đã được cấu hình thì không chạy lại `git remote add origin`.
