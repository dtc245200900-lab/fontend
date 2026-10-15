# Bài tập: Tạo giao diện giản lược của trang chủ

## Tệp trong dự án
- `index.html`: header, sidebar trái, nội dung chính và sidebar phải.
- `style.css`: header cố định bằng `position: fixed`, `z-index` và bố cục ba cột bằng Flexbox.

## Chạy thử
1. Giải nén file ZIP.
2. Mở thư mục bằng Visual Studio Code.
3. Mở `index.html` trong trình duyệt hoặc chạy bằng Live Server.
4. Cuộn trang để kiểm tra header vẫn cố định phía trên.

## Đẩy lên GitHub
Mở Terminal trong thư mục dự án và chạy:

```bash
git init
git add .
git commit -m "Create simplified homepage layout"
git branch -M main
git remote add origin https://github.com/TEN_TAI_KHOAN/TEN_REPOSITORY.git
git push -u origin main
```

Thay URL mẫu bằng URL repository của bạn. Nếu đã có remote `origin`, bỏ qua lệnh `git remote add origin`.
