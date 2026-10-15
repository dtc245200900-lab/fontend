# Thực hành: Fixed Header và Fixed Footer

## File trong dự án
- `index.html`: cấu trúc HTML.
- `style.css`: giao diện và các thuộc tính fixed.

## Cách chạy
1. Giải nén ZIP.
2. Mở thư mục bằng VS Code.
3. Mở `index.html` bằng trình duyệt hoặc Live Server.
4. Cuộn trang để kiểm tra: header luôn ở phía trên, footer luôn ở phía dưới.

## Thuộc tính chính
- Header: `position: fixed; top: 0; width: 100%;`
- Footer: `position: fixed; bottom: 0; width: 100%;`
- `z-index` giúp hai thanh nằm phía trên nội dung.
- `padding-top` và `padding-bottom` trên `body` giúp nội dung không bị che khuất.

## Đưa lên GitHub
Tạo repository mới, mở Terminal tại thư mục dự án rồi chạy:
```bash
git init
git add .
git commit -m "Create fixed header and footer layout"
git branch -M main
git remote add origin https://github.com/TEN_TAI_KHOAN/TEN_REPOSITORY.git
git push -u origin main
```
Thay URL mẫu bằng URL repository của bạn. Nếu đã có remote `origin`, không chạy lại lệnh `git remote add origin`.
