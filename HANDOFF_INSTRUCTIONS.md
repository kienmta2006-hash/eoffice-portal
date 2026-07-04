# HƯỚNG DẪN BÀN GIAO & PHÁT TRIỂN TIẾP THEO (HANDOFF & DEVELOPMENT GUIDE)
## Dự án: eOffice Portal — Cổng Thông Tin Nội Bộ Doanh Nghiệp

Tài liệu này được biên soạn chi tiết nhằm giúp **Claude** (hoặc bất kỳ AI Coding Assistant nào) nắm bắt toàn bộ kiến trúc, cách thức hoạt động và luồng dữ liệu của ứng dụng **eOffice Portal**, từ đó có thể tiếp quản và phát triển thêm các tính năng mới một cách chính xác mà không phá vỡ cấu trúc hiện tại.

---

## 1. TỔNG QUAN HỆ THỐNG & CÔNG NGHỆ

*   **Bản chất dự án**: Đây là một ứng dụng Web tĩnh Single Page Application (SPA) chạy hoàn toàn ở phía client (Client-side 100%).
*   **Mục đích**: Làm cổng thông tin nội bộ tích hợp truyền thông, quản lý văn bản, đăng ký thủ tục hành chính, quy trình phê duyệt động và khảo sát lấy ý kiến.
*   **Công nghệ cốt lõi**:
    1.  **HTML5**: Cấu trúc ngữ nghĩa, các hộp thoại Modals, các container động nạp bằng JS.
    2.  **Vanilla CSS**: Thiết kế giao diện sang trọng (vibrant colors, Sleek Dark-like Mode, Glassmorphism, CSS variables linh hoạt). Không sử dụng Tailwind hay Bootstrap.
    3.  **Vanilla Javascript (ES6+)**: Xử lý toàn bộ logic ứng dụng, định tuyến (Routing), vẽ biểu đồ và quản lý dữ liệu. Không dùng React/Vue/Angular hay thư viện ngoài.
    4.  **LocalStorage**: Đóng vai trò là Cơ sở dữ liệu tạm thời để lưu trữ và duy trì trạng thái ứng dụng (`state`) giữa các phiên làm việc của người dùng.
*   **Môi trường Deploy**: Đã cấu hình chạy trên **GitHub Pages** phục vụ trực tiếp từ thư mục gốc (Root) của nhánh `gh-pages` dưới dạng các file tĩnh.

---

## 2. CẤU TRÚC THƯ MỤC DỰ ÁN

```bash
eoffice-prototype/
├── index.html            # File HTML chính chứa toàn bộ giao diện và Modals
├── css/
│   └── styles.css        # Hệ thống CSS styles từ layouts, components đến biểu đồ và hiệu ứng
├── js/
│   └── app.js            # Trái tim điều khiển toàn bộ logic, dữ liệu và vẽ giao diện động
├── scripts/
│   └── build.js          # Script build Node.js dùng để nén sản phẩm HTML/CSS trước khi deploy
├── package.json          # Cấu hình dự án và các lệnh run script
├── HANDOFF_INSTRUCTIONS.md # File hướng dẫn này (tài liệu bàn giao)
└── dist/                 # Thư mục chứa sản phẩm sau khi chạy build (được bỏ qua trong Git chính)
```

---

## 3. CƠ CHẾ QUẢN LÝ TRẠNG THÁI (STATE MANAGEMENT)

Toàn bộ dữ liệu của ứng dụng được tập trung tại một đối tượng toàn cục duy nhất là `state` định nghĩa ở đầu file `js/app.js`:

```javascript
const state = {
  currentUser: null,       // Người dùng đang đăng nhập hiện tại
  users: {},              // Danh sách tài khoản nhân sự (đồng bộ từ localStorage)
  news: [],               // Bài viết bảng tin, thông báo và tin tức video
  documents: [],          // Kho văn bản nội bộ
  calendar: [],           // Lịch sự kiện doanh nghiệp
  requests: [],           // Đơn đăng ký / Đề xuất quy trình
  surveys: [],            // Khảo sát truyền thống
  albums: [],             // Album ảnh truyền thông
  notifications: [],      // Thông báo đẩy hệ thống
  departments: [],        // Danh mục phòng ban dùng chung (Động)
  procedureTypes: [],     // Danh mục thủ tục đăng ký dùng chung (Động)
  procedureWorkflows: {}, // Luồng phê duyệt cấu hình cho từng thủ tục (Động)
  activeTabs: {},         // Cấu hình bật/tắt hiển thị của các Tab chính (Động)
  dynamicForms: []        // Danh sách eForm khảo sát do Admin thiết kế (Động)
};
```

### Cách thức đọc/ghi dữ liệu:
*   Khi khởi chạy (`initApp()`), ứng dụng sẽ nạp trạng thái mặc định từ dữ liệu tĩnh (`USERS`, `NEWS`, `DOCUMENTS`, v.v.) rồi ghi đè bằng dữ liệu cập nhật lưu trong `localStorage` thông qua hàm `loadState(key)`.
*   Khi có bất kỳ thay đổi nào (thêm tin, sửa đơn, duyệt đơn, cấu hình danh mục), lập tức gọi hàm `saveState(key, data)` để đồng bộ lại vào `localStorage`.

---

## 4. CHI TIẾT CÁC PHÂN HỆ TÍNH NĂNG NÂNG CAO

### A. Phân Quyền Người Dùng Động (Role-Based Access Control)
*   **Đăng nhập**: Được bypass mật khẩu. Người dùng chọn tài khoản muốn đăng nhập từ dropdown ở màn hình login.
*   **Hệ thống Quyền**: Mỗi tài khoản có một đối tượng `permissions` trong `state.users`:
    *   `isAdmin`: Toàn quyền quản trị (hiển thị Tab "Quản trị").
    *   `canPostNews`: Quyền đăng/xóa bài viết, thông báo và video.
    *   `canUploadDocs`: Quyền tải lên và ban hành Văn bản nội bộ.
    *   `canManageProcedures`: Quyền phê duyệt và cấu hình luồng các thủ tục hành chính.
*   Quyền hạn được kiểm tra động khi render giao diện (ví dụ: ẩn/hiện nút "Đăng tin mới", "Tải lên văn bản mới", v.v.).

### B. Upload Banner Ảnh Thật & Đính Kèm File Chuẩn Blob
Để ứng dụng không phụ thuộc backend mà vẫn hoạt động thật:
1.  **FileReader & Base64**: Khi chọn ảnh banner bài viết (`#newPostImageFile`) hoặc tệp đính kèm (`#newPostFile`, `#newDocFile`), JS sử dụng `FileReader.readAsDataURL()` để đọc nội dung file sang chuỗi Base64 Data URL và lưu tạm vào `dataset` của thẻ input đó.
2.  **Lưu Database**: Khi nhấn Submit, chuỗi Base64 này được đóng gói trực tiếp vào thuộc tính của đối tượng bài viết/tài liệu và lưu vào `localStorage`.
3.  **Tải xuống An Toàn (Blob Object URL)**:
    *   Để tránh lỗi trình duyệt giới hạn độ dài URL của chuỗi Base64 (khiến file tải xuống bị hỏng), hàm `downloadFileSimulate(fileName, dataUrl)` sẽ gọi hàm `dataURLtoBlob(dataUrl)` để giải mã chuỗi Base64 thành mảng byte nhị phân `Uint8Array` và tạo đối tượng `Blob` thật.
    *   Sau đó tạo Object URL thông qua `URL.createObjectURL(blob)` để kích hoạt sự kiện tải file thật xuống máy người dùng.

### C. Thiết Kế Luồng Phê Duyệt Động (Approval Workflows Designer)
*   **Thiết kế (Admin)**: Trong Tab **Quản trị** -> **Luồng phê duyệt**, Admin chọn loại thủ tục (đọc động từ `state.procedureTypes`), thêm các bước phê duyệt tuần tự, chọn chức danh và gán nhân sự chịu trách nhiệm duyệt cụ thể.
*   **Lập hồ sơ (User)**: Khi nhân viên gửi yêu cầu mới trong tab **Đăng ký**, hệ thống sẽ nhân bản cấu hình luồng duyệt hiện tại vào yêu cầu đó dưới dạng một danh sách các bước duyệt trạng thái `pending`.
*   **Tiến trình duyệt**: Hệ thống lọc các đơn cần duyệt dựa trên người duyệt của bước `pending` hiện tại. Chỉ khi người đó đăng nhập, đơn mới hiển thị trong phần "Cần tôi phê duyệt". Khi được duyệt, đơn chuyển sang bước tiếp theo, cho đến khi hoàn thành toàn bộ.

### D. Cấu Trúc Tab Động (Dynamic Tabs Switch)
*   Menu ngang chính hiển thị thông qua `<div id="mainNavbarTabs"></div>`.
*   Trong Tab **Quản trị** -> **Cấu trúc Tab**, hiển thị danh sách các tab kèm nút trượt bật/tắt (Switch toggle).
*   Khi Admin thay đổi trạng thái bật/tắt, giá trị trong `state.activeTabs` được cập nhật, và hàm `updateNavbarTabs()` sẽ render lại thanh menu ngang tức thì.

### E. eForm Khảo Sát & Báo Cáo Biểu Đồ SVG Tự Vẽ
*   **eForm Creator**: Cho phép Admin thiết kế biểu mẫu khảo sát động. Admin có thể thêm các trường câu hỏi khác nhau (chữ, số, ngày, dropdown, chọn nhiều).
*   **Vẽ biểu đồ SVG động**:
    *   Khi xem kết quả khảo sát, hệ thống sẽ tổng hợp tỷ lệ các câu trả lời.
    *   Vẽ trực tiếp biểu đồ (Hình cột - Bar Chart, Hình tròn - Pie Chart, Đường biểu diễn - Line Chart) bằng cách tạo chuỗi mã SVG động (`<rect>`, `<path>`, `<circle>`) bằng Javascript thuần. Phương pháp này giúp biểu đồ siêu nhẹ, phản hồi nhanh và hiển thị cực nét trên mọi độ phân giải màn hình.

---

## 5. QUY TẮC PHÁT TRIỂN & BẢN VÁ LỖI CẦN LƯU Ý

Khi bạn code hoặc sửa đổi dự án này, hãy tuân thủ nghiêm ngặt các quy tắc sau:

1.  **Không dùng thư viện ngoài**: Tuyệt đối không cài thêm npm packages cho giao diện (như Chart.js, Tailwind, jQuery). Hãy tiếp tục sử dụng Vanilla JS và CSS thuần.
2.  **Đảm bảo bất đồng bộ FileReader**: Việc đọc file sang Base64 cần thời gian, hãy chắc chắn nhãn hiển thị trạng thái đã chuyển sang "Đã chọn..." trước khi cho phép người dùng click Đăng/Lưu bài viết.
3.  **Tránh trùng lặp hàm**: Đã xóa bỏ hàm `submitNewDoc()` trùng lặp thứ 2 (dòng 2013 trước đó). Hãy kiểm tra kỹ file `js/app.js` trước khi viết thêm hàm để tránh ghi đè logic hiện tại.
4.  **Cập nhật các liên kết click**: Khi render tệp đính kèm trong tin tức, hãy dùng cấu trúc truyền ID bài viết và chỉ mục của tệp:
    `onclick="downloadPostAttachment(${post.id}, ${idx})"`
    Và đối với tài liệu văn bản nội bộ:
    `onclick="downloadDocumentFile(${d.id})"`
    Không truyền trực tiếp chuỗi Base64 dài vào thuộc tính onclick của HTML để tránh làm vỡ chuỗi DOM.

---

## 6. QUY TRÌNH BUILD & DEPLOY LÊN GITHUB PAGES

Mỗi khi có thay đổi mã nguồn ở nhánh `main`, bạn cần đẩy các cập nhật này lên trang trực tuyến GitHub Pages thông qua nhánh `gh-pages` theo đúng quy trình sau:

### Bước 1: Commit và đẩy lên nhánh `main`
```bash
git add .
git commit -m "feat: mô tả tính năng mới"
git push origin main
```

### Bước 2: Chuyển sang nhánh `gh-pages` và đồng bộ
```bash
# Chuyển sang nhánh gh-pages
git checkout gh-pages

# Kéo các file nguồn mới nhất từ main sang gh-pages
git checkout main -- index.html css/styles.css js/app.js package.json scripts/
```

### Bước 3: Chạy Build nén sản phẩm
```bash
# Chạy script build Node để nén tối ưu hóa HTML và CSS
node scripts/build.js
```

### Bước 4: Đưa sản phẩm ra thư mục gốc và dọn dẹp
Vì GitHub Pages của dự án host trực tiếp từ root của nhánh `gh-pages`:
```bash
# Copy đè tất cả tệp từ dist/ ra thư mục gốc
cp -r dist/* .

# Đưa các file tĩnh vào staging
git add index.html css/styles.css js/app.js version.json

# Xóa bỏ các thư mục và file tạm để nhánh gh-pages luôn sạch sẽ
rm -rf dist scripts package.json
```

### Bước 5: Commit và Push lên GitHub
```bash
# Commit bản build
git commit -m "deploy: update production build to gh-pages"

# Đẩy lên nhánh gh-pages trực tuyến
git push origin gh-pages
```

### Bước 6: Quay trở lại nhánh làm việc `main`
```bash
# Checkout về main
git checkout main

# Khôi phục lại các file build bị xóa tạm thời ở Bước 4 trên local của main
git checkout -- package.json scripts/
```

---
*Chúc bạn phát triển dự án thành công! Hệ thống này có tính tùy biến rất cao, sẵn sàng đón nhận các tính năng tiếp theo từ bạn.*
