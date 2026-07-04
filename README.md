# eOffice Portal — Cổng Thông Tin Nội Bộ Doanh Nghiệp

<p align="center">
  <strong>Hệ thống truyền thông nội bộ, quản lý văn bản và phê duyệt quy trình doanh nghiệp</strong>
</p>

---

## 📋 Tổng quan

eOffice Portal là ứng dụng web truyền thông nội bộ doanh nghiệp bao gồm các module:

| Module | Mô tả |
|--------|-------|
| 🏠 **Trang chủ** | Dashboard tổng hợp KPI, tin nổi bật, lịch hôm nay, widget văn bản |
| 📅 **Lịch công ty** | Xem lịch tuần dạng bảng (Thời gian, Nội dung, Chủ trì, Tham gia, Phòng họp, Ghi chú) |
| 📰 **Tin tức & Thông báo** | Đăng tin, bình luận, like, bookmark, chia sẻ nội bộ |
| 📂 **Văn bản nội bộ** | Quy chế, quy trình, biểu mẫu, ISO — có version và tìm kiếm |
| 📝 **Đăng ký** | Đăng ký nghỉ phép, công tác, phòng họp — workflow phê duyệt |
| 📊 **Khảo sát** | Tạo khảo sát, bình chọn nội bộ |
| 👥 **Danh bạ** | Tra cứu thông tin nhân sự toàn công ty |
| 🖼️ **Album** | Gallery ảnh sự kiện công ty |
| ⚙️ **Quản trị** | Thống kê, quản lý người dùng, cấu hình, quản lý danh mục dùng chung |

## 📁 Cấu trúc dự án

```
eoffice-prototype/
├── index.html              # Entry point
├── css/
│   └── styles.css          # Toàn bộ CSS (design system + modules)
├── js/
│   └── app.js              # Toàn bộ logic (state, render, controllers)
├── scripts/
│   └── build.js            # Script build production
├── dist/                   # Thư mục output build (auto-generated)
│   ├── index.html
│   ├── css/styles.css
│   ├── js/app.js
│   └── version.json
├── package.json
├── .gitignore
├── netlify.toml            # Cấu hình Netlify
├── firebase.json           # Cấu hình Firebase Hosting
├── Dockerfile              # Docker build
├── nginx.conf              # Nginx config cho Docker
└── README.md               # File này
```

## 🚀 Bắt đầu nhanh

### Yêu cầu
- **Node.js** >= 18.x
- **npm** >= 9.x

### Chạy Development Server

```bash
# Clone repository
git clone <repository-url>
cd eoffice-prototype

# Chạy dev server (port 8000)
npm run dev
```

Mở trình duyệt tại `http://localhost:8000`

### Build Production

```bash
# Tạo bản build tối ưu trong dist/
npm run build

# Xem trước bản build (port 9000)
npm run preview
```

### Tài khoản demo

| Vai trò | Tài khoản | Mô tả |
|---------|-----------|-------|
| Admin | Nguyễn Văn An | Quyền quản trị đầy đủ |
| User | Lê Thị Bình | Tài khoản nhân viên thường |

## 🌐 Deploy

### Phương án A: Netlify

```bash
# Deploy trực tiếp
npx -y netlify-cli deploy --prod --dir=dist
```

### Phương án B: Firebase Hosting

```bash
# Cài đặt và deploy
npx -y firebase-tools login
npx -y firebase-tools deploy --only hosting
```

### Phương án C: Docker

```bash
# Build image
docker build -t eoffice-portal .

# Chạy container
docker run -d -p 80:80 --name eoffice eoffice-portal
```

### Phương án D: GitHub Pages

1. Push code lên GitHub
2. Vào Settings → Pages → Source: `main` branch, folder `/dist`
3. Trang sẽ tự động deploy

## 📦 Phiên bản

| Phiên bản | Ngày | Mô tả |
|-----------|------|-------|
| v1.0.0 | 2026-07-04 | Phiên bản đầu tiên — đầy đủ các module cơ bản |

## 📄 License

Bản quyền © 2026 ABC Corporation. Mọi quyền được bảo lưu.
Sản phẩm nội bộ — không được phân phối bên ngoài.
