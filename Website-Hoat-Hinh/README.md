# Góc Hoạt Hình — Bài tập HTML/CSS

## Tệp dự án
- `index.html`: header, menu liên kết, danh sách phim, iframe video, phần giới thiệu và footer.
- `style.css`: bố cục, màu sắc, header cố định, hover, responsive.
- `script.js`: chọn phim, tìm kiếm theo tên và sắp xếp danh sách.

## Cách chạy
1. Giải nén ZIP.
2. Mở thư mục `Website-Hoat-Hinh` bằng VS Code.
3. Mở `index.html` bằng trình duyệt hoặc tiện ích Live Server.
4. Chọn phim trong danh sách, thử ô tìm kiếm và lựa chọn sắp xếp.
5. Cần có kết nối Internet để tải font và video iframe mẫu.

## Lưu ý về video
Đây là giao diện minh họa cho bài học. Các mục phim dùng video nhúng mẫu công khai, không phải thư viện phim hoạt hình tiếng Việt đã xác minh. Nội dung nhúng từ bên thứ ba có thể thay đổi, bị giới hạn khu vực hoặc có quảng cáo theo chính sách của nhà cung cấp. Không nên tuyên bố website đáp ứng được điều kiện “thuyết minh tiếng Việt, 720p–1080p, không quảng cáo” nếu chưa tự kiểm tra nguồn video thực tế. Không có video file riêng trong ZIP.

## Đẩy lên GitHub
Mở Terminal trong thư mục dự án:

```bash
git init
git add .
git commit -m "Build responsive cartoon website"
git branch -M main
git remote add origin https://github.com/TEN_TAI_KHOAN/TEN_REPOSITORY.git
git push -u origin main
```

Thay URL mẫu bằng repository thật của bạn. Nếu đã cấu hình remote `origin`, bỏ qua lệnh `git remote add origin`.
