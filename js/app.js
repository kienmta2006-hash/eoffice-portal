/* ========================================
   eOffice Intranet Portal — Application Logic
   HTML5, CSS3, ES6 JavaScript Architecture
   ======================================== */

// ==========================================
// 1. STATE & DATA DEFINITIONS (LOCALSTORAGE SYNC)
// ==========================================

const DEPARTMENTS = [
  "Ban Giám đốc",
  "Phòng Hành chính",
  "Phòng Nhân sự",
  "Phòng Kế toán",
  "Phòng Kỹ thuật",
  "Phòng Kinh doanh"
];

const USERS = {
  admin: {
    username: "admin",
    name: "Nguyễn Văn An",
    role: "Giám đốc",
    dept: "Ban Giám đốc",
    empId: "EMP001",
    email: "an.nguyen@eoffice.company.vn",
    phone: "0901.234.567",
    ext: "101",
    initials: "NA",
    color: "#0284c7",
    permissions: {
      isAdmin: true,
      canPostNews: true,
      canUploadDocs: true,
      canManageProcedures: true
    }
  },
  hr: {
    username: "hr",
    name: "Lê Thị Hồng",
    role: "Trưởng phòng Nhân sự",
    dept: "Phòng Nhân sự",
    empId: "EMP002",
    email: "hong.le@eoffice.company.vn",
    phone: "0909.876.543",
    ext: "201",
    initials: "LH",
    color: "#7c3aed",
    permissions: {
      isAdmin: false,
      canPostNews: true,
      canUploadDocs: false,
      canManageProcedures: true
    }
  },
  staff: {
    username: "staff",
    name: "Trần Quốc Bảo",
    role: "Nhân viên Kinh doanh",
    dept: "Phòng Kinh doanh",
    empId: "EMP015",
    email: "bao.tran@eoffice.company.vn",
    phone: "0988.765.432",
    ext: "305",
    initials: "TB",
    color: "#059669",
    permissions: {
      isAdmin: false,
      canPostNews: false,
      canUploadDocs: false,
      canManageProcedures: false
    }
  }
};

const DIRECTORY = [
  { name: "Nguyễn Văn An", title: "Giám đốc", dept: "Ban Giám đốc", email: "an.nguyen@company.vn", ext: "101", phone: "0901.234.567", initials: "NA", color: "#0284c7" },
  { name: "Phạm Thị Dung", title: "Phó Giám đốc", dept: "Ban Giám đốc", email: "dung.pham@company.vn", ext: "102", phone: "0902.345.678", initials: "PD", color: "#0891b2" },
  { name: "Lê Thị Hồng", title: "Trưởng phòng Nhân sự", dept: "Phòng Nhân sự", email: "hong.le@company.vn", ext: "201", phone: "0909.876.543", initials: "LH", color: "#7c3aed" },
  { name: "Mai Văn Sơn", title: "Chuyên viên Tuyển dụng", dept: "Phòng Nhân sự", email: "son.mai@company.vn", ext: "202", phone: "0911.222.333", initials: "MS", color: "#c084fc" },
  { name: "Trần Thị Bình", title: "Trưởng phòng Hành chính", dept: "Phòng Hành chính", email: "binh.tran@company.vn", ext: "301", phone: "0934.567.890", initials: "TB", color: "#ea580c" },
  { name: "Vũ Văn F", title: "Nhân viên Hành chính", dept: "Phòng Hành chính", email: "f.vu@company.vn", ext: "302", phone: "0944.555.666", initials: "VF", color: "#f97316" },
  { name: "Lê Văn Cường", title: "Trưởng phòng Kế toán", dept: "Phòng Kế toán", email: "cuong.le@company.vn", ext: "401", phone: "0912.345.678", initials: "LC", color: "#059669" },
  { name: "Ngô Thị H", title: "Kế toán viên", dept: "Phòng Kế toán", email: "h.ngo@company.vn", ext: "402", phone: "0913.456.789", initials: "NH", color: "#34d399" },
  { name: "Hoàng Minh Đức", title: "Trưởng phòng Kỹ thuật", dept: "Phòng Kỹ thuật", email: "duc.hoang@company.vn", ext: "501", phone: "0915.678.910", initials: "HĐ", color: "#0d9488" },
  { name: "Trịnh Văn P", title: "Kỹ sư CNTT", dept: "Phòng Kỹ thuật", email: "p.trinh@company.vn", ext: "502", phone: "0916.789.012", initials: "TP", color: "#2dd4bf" },
  { name: "Đỗ Văn K", title: "Trưởng phòng Kinh doanh", dept: "Phòng Kinh doanh", email: "k.do@company.vn", ext: "601", phone: "0977.888.999", initials: "ĐK", color: "#e11d48" },
  { name: "Trần Quốc Bảo", title: "Nhân viên Kinh doanh", dept: "Phòng Kinh doanh", email: "bao.tran@company.vn", ext: "305", phone: "0988.765.432", initials: "TB", color: "#fda4af" }
];

const INITIAL_NEWS = [
  {
    id: 1,
    pinned: true,
    category: "thong-bao",
    catLabel: "📢 Thông báo",
    title: "Thông báo điều chỉnh chính sách lương và phụ cấp từ ngày 01/07/2026",
    excerpt: "Căn cứ Nghị định số 74/2026/NĐ-CP của Chính phủ về điều chỉnh mức lương tối thiểu vùng, Công ty ban hành chính sách điều chỉnh hệ số lương cơ bản và phụ cấp thâm niên. Yêu cầu toàn bộ cán bộ nhân viên xem chi tiết tài liệu đính kèm bên dưới và xác nhận.",
    content: `Kính gửi toàn thể Cán bộ Nhân viên,<br><br>
    Căn cứ tình hình hoạt động kinh doanh năm 2025 và hướng tới việc đảm bảo quyền lợi cũng như chế độ đãi ngộ tốt nhất cho người lao động, Ban Giám đốc đã quyết định thông qua phương án điều chỉnh quy chế tiền lương áp dụng chính thức từ ngày <b>01/07/2026</b>.<br><br>
    <b>Các nội dung điều chỉnh chính bao gồm:</b><br>
    1. Tăng mức lương cơ bản tối thiểu vùng thêm 6% đối với tất cả các vị trí ký hợp đồng chính thức.<br>
    2. Điều chỉnh định mức phụ cấp xăng xe từ 500,000đ lên 800,000đ/tháng.<br>
    3. Bổ sung phụ cấp chuyên cần dành riêng cho khối sản xuất và hỗ trợ kỹ thuật.<br><br>
    Chi tiết bảng hệ số lương mới được đăng tải trong văn bản số <b>TB-032/ABC</b> đính kèm dưới đây. Đề nghị CBNV ký cam kết và thực hiện đúng nội dung thông báo.`,
    author: "Nguyễn Văn An",
    authorInitials: "NA",
    role: "Giám đốc",
    date: "2026-07-03",
    time: "08:30",
    views: 310,
    likes: 24,
    likedBy: ["hr"],
    bookmarkedBy: [],
    readLaterBy: [],
    comments: [
      { author: "Lê Thị Hồng", avatar: "LH", content: "Đã nhận thông tin chỉ đạo và đang thực hiện cập nhật bảng lương cho khối văn phòng.", date: "2026-07-03", time: "09:15" }
    ],
    attachments: [
      { name: "TB-032_Chinh_sach_luong_moi_2026.pdf", size: "1.2 MB" }
    ],
    image: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=600",
    mandatory: true,
    readBy: ["admin", "hr"]
  },
  {
    id: 2,
    pinned: false,
    author: "Nguyễn Văn An",
    authorInitials: "NA",
    role: "Giám đốc",
    date: "2026-07-01",
    time: "14:00",
    views: 98,
    likes: 24,
    likedBy: [],
    bookmarkedBy: [],
    readLaterBy: [],
    comments: [
      { author: "Hoàng Minh Đức", text: "Phòng Kỹ thuật đã sẵn sàng cổng VPN phục vụ anh em WFH.", time: "14:30" }
    ],
    attachments: [{ name: "QD-045_Quy_che_lam_viec_tu_xa.pdf", size: "850 KB" }],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600",
    mandatory: true,
    readBy: ["admin"]
  },
  {
    id: 3,
    pinned: false,
    category: "tin-tuc",
    catLabel: "📰 Tin tức",
    title: "Công ty ABC đạt chứng nhận quốc tế ISO/IEC 27001:2022 về An toàn Thông tin",
    excerpt: "Trải qua 6 tháng thẩm định gắt gao từ tổ chức đánh giá uy tín TÜV SÜD, Công ty đã chính thức đạt chứng nhận an toàn thông tin ISO 27001. Đây là cột mốc khẳng định mức độ bảo mật dữ liệu hàng đầu của chúng ta.",
    content: `Đây là thành quả xứng đáng sau sự nỗ lực bền bỉ của tập thể Ban chỉ đạo ISO và sự đồng lòng tuân thủ quy trình của toàn thể cán bộ công nhân viên.<br><br>
    Đại diện tổ chức đánh giá TÜV SÜD đã trao chứng nhận cho Giám đốc Nguyễn Văn An trong buổi lễ sang trọng tổ chức tại trụ sở chính ngày 29/06 vừa qua. Việc sở hữu chứng nhận ISO 27001:2022 sẽ giúp củng cố niềm tin sâu sắc từ các khách hàng lớn và đối tác tài chính quốc tế.<br><br>
    Chúc mừng Ban dự án ISO và Phòng Kỹ thuật Công nghệ đã hoàn thành xuất sắc mục tiêu trọng điểm năm 2026!`,
    author: "Phạm Thị Dung",
    authorInitials: "PD",
    role: "Phó Giám đốc",
    date: "2026-06-30",
    time: "10:00",
    views: 312,
    likes: 45,
    likedBy: [],
    bookmarkedBy: [],
    readLaterBy: [],
    comments: [
      { author: "Trịnh Văn P", text: "Tuyệt vời quá! Nỗ lực thức đêm setup hệ thống của team IT đã được đền đáp.", time: "10:15" }
    ],
    attachments: [],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600",
    mandatory: false,
    readBy: []
  },
  {
    id: 4,
    pinned: false,
    category: "nhan-su",
    catLabel: "👥 Nhân sự",
    title: "Chào đón 3 thành viên mới gia nhập Phòng Kinh doanh trong tháng 7",
    excerpt: "Công ty nồng nhiệt chào đón anh Nguyễn Hoàng Long, chị Trần Thị Mai và anh Lê Đức Anh gia nhập mái nhà chung ABC từ ngày 01/07. Chúc các bạn công tác tốt và gặt hái nhiều doanh số.",
    content: `Phòng Kinh doanh tiếp tục mở rộng quy mô lực lượng bán hàng để chuẩn bị cho chiến dịch thúc đẩy doanh thu nửa cuối năm 2026.<br><br>
    Hôm nay, chúng ta cùng chào mừng:<br>
    1. <b>Anh Nguyễn Hoàng Long</b> - Vị trí Trưởng nhóm Kinh doanh dự án (B2B). Cựu Giám đốc dự án FPT.<br>
    2. <b>Chị Trần Thị Mai</b> - Chuyên viên Phát triển khách hàng doanh nghiệp lớn.<br>
    3. <b>Anh Lê Đức Anh</b> - Nhân sự Telesales hỗ trợ thị trường phía Nam.<br><br>
    Chúc ba bạn nhanh chóng hòa nhập và bùng nổ cùng ABC!`,
    author: "Lê Thị Hồng",
    authorInitials: "LH",
    role: "TP Nhân sự",
    date: "2026-07-02",
    time: "09:00",
    views: 189,
    likes: 31,
    likedBy: [],
    bookmarkedBy: [],
    readLaterBy: [],
    comments: [
      { author: "Đỗ Văn K", text: "Chào mừng các chiến binh mới về với đội Sales nha!", time: "09:30" }
    ],
    attachments: [],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600",
    mandatory: false,
    readBy: []
  }
];

// Fallback thumbnail for videos that have no image (uploaded videos before a
// thumbnail loads, or URL videos without one).
const VIDEO_PLACEHOLDER = "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=300";

const INITIAL_VIDEOS = [
  { id: 1, title: "Video toàn cảnh Ngày hội Gia đình ABC Family Day 2026", duration: "03:45", date: "2026-06-25", views: 245, bg: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=300", url: "https://media.w3.org/2010/05/sintel/trailer.mp4" },
  { id: 2, title: "Hành trình chinh phục đỉnh cao teambuilding Hồ Tràm", duration: "05:12", date: "2026-06-20", views: 189, bg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=300", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 3, title: "Chia sẻ của Giám đốc Nguyễn Văn An nhân dịp Kỷ niệm 10 năm thành lập", duration: "08:20", date: "2026-06-10", views: 420, bg: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=300", url: "https://download.samplelib.com/mp4/sample-5s.mp4" }
];

const INITIAL_DOCUMENTS = [
  {
    id: 1,
    code: "QC-01/HD-ABC",
    title: "Quy chế làm việc nội bộ của Công ty ABC",
    type: "Quy định & Quy chế",
    dept: "Phòng Nhân sự",
    approver: "Nguyễn Văn An (Giám đốc)",
    date: "2026-01-15",
    desc: "Quy định giờ giấc làm việc, tác phong công sở, kỷ luật và các chế độ nghỉ phép chính thức dành cho nhân viên.",
    versions: [
      { version: "v2.0", date: "2026-01-15", author: "Lê Thị Hồng", changeLog: "Cập nhật thay đổi chế độ nghỉ phép thai sản và tăng thời gian nghỉ trưa thêm 15 phút." },
      { version: "v1.0", date: "2024-05-10", author: "Lê Thị Hồng", changeLog: "Phiên bản ban hành đầu tiên." }
    ],
    file: { name: "Quy_che_lam_viec_noi_bo_v2.0.pdf", size: "2.8 MB" }
  },
  {
    id: 2,
    code: "QT-HC-03",
    title: "Quy trình đăng ký và sử dụng xe ô tô công vụ công tác",
    type: "Quy trình",
    dept: "Phòng Hành chính",
    approver: "Phạm Thị Dung (Phó GĐ)",
    date: "2026-04-10",
    desc: "Quy trình chi tiết và hướng dẫn đặt lịch xe ô tô công tác đi ngoài tỉnh hoặc tiếp đón khách hàng VIP.",
    versions: [
      { version: "v1.1", date: "2026-04-10", author: "Trần Thị Bình", changeLog: "Thêm biểu mẫu đề xuất trên cổng eOffice, không nhận đơn giấy." },
      { version: "v1.0", date: "2025-08-01", author: "Trần Thị Bình", changeLog: "Ban hành áp dụng quy trình xe công." }
    ],
    file: { name: "Quy_trinh_xe_cong_vu_v1.1.pdf", size: "1.1 MB" }
  },
  {
    id: 3,
    code: "BM-NS-12",
    title: "Biểu mẫu tờ trình xin gia hạn hợp đồng thử việc",
    type: "Biểu mẫu",
    dept: "Phòng Nhân sự",
    approver: "Lê Thị Hồng (TP Nhân sự)",
    date: "2025-11-20",
    desc: "Mẫu biểu chuẩn phục vụ việc đánh giá kết quả thử việc và đề xuất gia hạn thêm thời gian đối với nhân sự đặc thù.",
    versions: [
      { version: "v1.0", date: "2025-11-20", author: "Lê Thị Hồng", changeLog: "Ban hành biểu mẫu chuẩn hoá." }
    ],
    file: { name: "Bieu_mau_gia_han_thu_viec.docx", size: "120 KB" }
  },
  {
    id: 4,
    code: "IT-HD-09",
    title: "Hướng dẫn bảo mật mật khẩu hệ thống nội bộ ISO 27001",
    type: "Hướng dẫn & Tài liệu đào tạo",
    dept: "Phòng Kỹ thuật",
    approver: "Nguyễn Văn An (Giám đốc)",
    date: "2026-06-25",
    desc: "Quy trình bảo mật bắt buộc đối với nhân sự sử dụng các tài nguyên phần mềm và hệ thống eOffice của công ty.",
    versions: [
      { version: "v1.2", date: "2026-06-25", author: "Hoàng Minh Đức", changeLog: "Yêu cầu thay đổi mật khẩu định kỳ mỗi 90 ngày và bắt buộc xác thực 2 bước (2FA)." }
    ],
    file: { name: "ISO_Security_Password_v1.2.pdf", size: "950 KB" }
  },
  {
    id: 5,
    code: "QĐ-045/HD-ABC",
    title: "Quyết định về việc ban hành Quy chế làm việc từ xa (WFH)",
    type: "Quyết định & Văn bản chỉ đạo",
    dept: "Ban Giám đốc",
    approver: "Nguyễn Văn An (Giám đốc)",
    date: "2026-07-01",
    desc: "Quyết định chính thức ban hành cơ chế cho phép nhân viên văn phòng đăng ký làm việc tại nhà tối đa 2 ngày/tuần.",
    versions: [
      { version: "v1.0", date: "2026-07-01", author: "Nguyễn Văn An", changeLog: "Quyết định chính thức được ban hành và ký duyệt." }
    ],
    file: { name: "QD-045_Ban_hanh_WFH.pdf", size: "1.2 MB" }
  },
  {
    id: 6,
    code: "CS-03/ABC",
    title: "Chính sách bảo mật thông tin và dữ liệu doanh nghiệp",
    type: "Chính sách",
    dept: "Phòng Kỹ thuật",
    approver: "Phạm Thị Dung (Phó GĐ)",
    date: "2026-06-20",
    desc: "Chính sách quy định chi tiết về nghĩa vụ bảo vệ tài sản số và dữ liệu thông tin bảo mật của khách hàng và đối tác.",
    versions: [
      { version: "v1.0", date: "2026-06-20", author: "Hoàng Minh Đức", changeLog: "Chính sách ban hành lần đầu." }
    ],
    file: { name: "Chinh_sach_bao_mat_du_lieu_v1.0.pdf", size: "1.8 MB" }
  }
];

const INITIAL_REQUESTS = [
  {
    id: 1,
    user: "staff", // Trần Quốc Bảo
    userName: "Trần Quốc Bảo",
    dept: "Phòng Kinh doanh",
    type: "Nghỉ phép",
    date: "2026-07-02",
    content: "Đăng ký nghỉ phép năm 2 ngày từ 08/07 đến 09/07/2026. Lý do giải quyết việc cá nhân gia đình ở quê. Người bàn giao công việc: Nguyễn Hoàng Long.",
    status: "pending",
    workflow: [
      { step: "Gửi yêu cầu", actor: "Trần Quốc Bảo", action: "submit", date: "2026-07-02 10:15", comment: "Đã bàn giao hồ sơ cho anh Long." },
      { step: "Trưởng phòng duyệt", actor: "Đỗ Văn K (TP Kinh doanh)", action: "approve", date: "2026-07-02 14:00", comment: "Đồng ý, phòng Kinh doanh sắp xếp trực thay thế Bảo." },
      { step: "Nhân sự xác nhận", actor: "Lê Thị Hồng", action: "pending", date: "", comment: "Đang chờ phòng Nhân sự kiểm tra phép năm tồn đọng." }
    ],
    details: { days: 2, start: "2026-07-08", end: "2026-07-09" }
  },
  {
    id: 2,
    user: "staff", // Trần Quốc Bảo
    userName: "Trần Quốc Bảo",
    dept: "Phòng Kinh doanh",
    type: "Xe công",
    date: "2026-07-03",
    content: "Đăng ký xe ô tô 7 chỗ công tác Đồng Nai làm việc với khách hàng đại lý Long Khánh. Thời gian: 05/07/2026 đi từ 07:30 đến 17:00 về. Số lượng người đi: 3 nhân sự.",
    status: "pending",
    workflow: [
      { step: "Gửi yêu cầu", actor: "Trần Quốc Bảo", action: "submit", date: "2026-07-03 09:00", comment: "Cần xe gấp tiếp đại lý." },
      { step: "Ban Giám đốc duyệt", actor: "Nguyễn Văn An", action: "pending", date: "", comment: "Chờ phê duyệt lịch trình công tác." }
    ],
    details: { route: "TP.HCM -> Long Khánh, Đồng Nai", passengers: 3, vehicle: "Xe 7 chỗ" }
  },
  {
    id: 3,
    user: "hr", // Lê Thị Hồng
    userName: "Lê Thị Hồng",
    dept: "Phòng Nhân sự",
    type: "Phòng họp",
    date: "2026-07-03",
    content: "Đăng ký Phòng họp A tổ chức phỏng vấn vòng cuối Chuyên viên tuyển dụng mới. Giờ họp: 14:00 - 15:30 ngày 06/07/2026.",
    status: "approved",
    workflow: [
      { step: "Gửi yêu cầu", actor: "Lê Thị Hồng", action: "submit", date: "2026-07-03 11:00", comment: "Phỏng vấn ứng viên VIP." },
      { step: "Hành chính duyệt", actor: "Trần Thị Bình", action: "approve", date: "2026-07-03 11:30", comment: "Phòng họp A trống vào giờ này. Đã khóa lịch." }
    ],
    details: { room: "Phòng họp A", start_time: "14:00", end_time: "15:30" }
  }
];

const INITIAL_CALENDAR = [
  { id: 1, title: "Họp giao ban toàn bộ công ty Q3", type: "meeting", date: "2026-07-03", time: "09:00 - 11:00", location: "Phòng họp A (Lầu 1)", guests: "Ban GĐ, Trưởng phòng các đơn vị", chairman: "Ông Trần Minh Đức - TGĐ", note: "Chuẩn bị báo cáo KPI Q2" },
  { id: 2, title: "Tổ chức Team Building Hồ Tràm", type: "event", date: "2026-07-18", time: "Cả ngày", location: "Resort Melia Hồ Tràm", guests: "Toàn công ty", chairman: "Phòng Hành chính", note: "Tập trung tại sảnh lúc 6h30" },
  { id: 3, title: "Sinh nhật Trưởng phòng Kỹ thuật Đức", type: "birthday", date: "2026-07-07", time: "16:00", location: "Khu vực Pantry", guests: "Khối Văn phòng", chairman: "", note: "Chuẩn bị bánh, hoa" },
  { id: 4, title: "Lịch nghỉ lễ Quốc khánh 2/9", type: "holiday", date: "2026-09-02", time: "Cả ngày", location: "Toàn quốc", guests: "Toàn công ty", chairman: "", note: "Nghỉ từ 01/09 - 03/09" },
  { id: 5, title: "Họp rà soát quy trình tuyển dụng Q2", type: "meeting", date: "2026-07-03", time: "14:00 - 15:30", location: "Phòng họp B (Lầu 2)", guests: "Phòng Nhân sự, Phòng Pháp chế", chairman: "Bà Lê Thị Mai - TP Nhân sự", note: "Mang theo hồ sơ tuyển dụng Q2" },
  { id: 6, title: "Sinh nhật chuyên viên Mai Văn Sơn", type: "birthday", date: "2026-07-03", time: "16:30", location: "Khu vực Pantry lầu 1", guests: "Phòng Nhân sự", chairman: "", note: "" },
  { id: 7, title: "Họp Ban Giám đốc mở rộng", type: "meeting", date: "2026-07-01", time: "08:30 - 10:00", location: "Phòng họp A (Lầu 1)", guests: "Ban GĐ, Trưởng phòng", chairman: "Ông Trần Minh Đức - TGĐ", note: "Chủ đề: Kế hoạch kinh doanh H2/2026" },
  { id: 8, title: "Đào tạo nội bộ: Kỹ năng thuyết trình", type: "event", date: "2026-07-02", time: "14:00 - 16:30", location: "Phòng họp B (Lầu 2)", guests: "Nhân viên mới dưới 1 năm", chairman: "Bà Nguyễn Hoàng Anh - GĐ Nhân sự", note: "Mang laptop cá nhân" }
];

const INITIAL_SURVEYS = [
  {
    id: 1,
    title: "Khảo sát lấy ý kiến địa điểm tổ chức Gala Dinner Cuối Năm 2026",
    desc: "Phòng Hành chính và Công đoàn tổ chức lấy ý kiến bầu chọn của toàn bộ CBNV để chuẩn bị ngân sách và chọn địa điểm sớm.",
    options: ["Phú Quốc Resort (Kiên Giang)", "Đà Lạt Palace Hotel (Lâm Đồng)", "Mũi Né Beach Resort (Phan Thiết)", "Tổ chức tại Trung tâm Hội nghị TP.HCM"],
    votes: [54, 42, 28, 12],
    votedBy: ["admin", "hr"],
    endDate: "2026-07-15"
  },
  {
    id: 2,
    title: "Bạn đánh giá như thế nào về công cụ eOffice mới triển khai?",
    desc: "Chúng tôi rất muốn lắng nghe phản hồi của anh chị về mức độ tiện dụng, mượt mà và khả năng tương tác của phần mềm này.",
    options: ["Rất hài lòng, trực quan và dễ sử dụng", "Hài lòng, đáp ứng được các nhu cầu", "Bình thường, cần thời gian làm quen", "Chưa hài lòng, cần cải thiện hiệu năng"],
    votes: [18, 22, 6, 2],
    votedBy: ["hr"],
    endDate: "2026-07-20"
  }
];

const INITIAL_ALBUMS = [
  {
    id: 1,
    title: "Teambuilding Resort Hồ Tràm - Quý 3/2026",
    date: "18/07/2026",
    count: 6,
    coverUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600",
    images: [
      { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800", caption: "Đoàn chụp ảnh check-in cổng chào" },
      { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800", caption: "Hoạt động kéo co bãi biển đầy kịch tính" },
      { url: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=800", caption: "Đêm Gala dinner đầm ấm" },
      { url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800", caption: "Workshop gắn kết định hướng phát triển" }
    ]
  },
  {
    id: 2,
    title: "Chào mừng Kỷ niệm 10 năm thành lập ABC Corporation",
    date: "10/06/2026",
    count: 4,
    coverUrl: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=600",
    images: [
      { url: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=800", caption: "Khai mạc tiệc kỷ niệm trang trọng" },
      { url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800", caption: "Tri ân ban sáng lập và nhân viên cựu trào" }
    ]
  }
];

const INITIAL_NOTIFICATIONS = [
  { id: 1, title: "Thông báo chính sách lương", desc: "Giám đốc đã ký điều chỉnh chính sách lương mới từ 01/07. (Bắt buộc đọc)", time: "5 phút trước", type: "warning", unread: true, link: "announcements" },
  { id: 2, title: "Yêu cầu duyệt phép năm", desc: "Trần Quốc Bảo gửi đơn đăng ký nghỉ phép năm 2 ngày chờ bạn xử lý.", time: "1 giờ trước", type: "info", unread: true, link: "requests" },
  { id: 3, title: "Đặt phòng họp thành công", desc: "Lịch đặt Phòng họp A lúc 14:00 ngày 06/07 đã được Hành chính phê duyệt.", time: "2 giờ trước", type: "success", unread: false, link: "requests" }
];

// Load State Helper
function loadState(key, defaultData) {
  const data = localStorage.getItem("eoffice_" + key);
  return data ? JSON.parse(data) : defaultData;
}

// Save State Helper — quota-safe. localStorage caps at ~5MB per origin, so a
// failed write must never crash the flow or silently lose data. Returns true on
// success, false (with a clear toast) when the browser storage is full.
function saveState(key, data) {
  try {
    localStorage.setItem("eoffice_" + key, JSON.stringify(data));
    return true;
  } catch (e) {
    console.error("saveState failed for '" + key + "':", e);
    if (e && (e.name === "QuotaExceededError" || e.code === 22 || e.code === 1014)) {
      showToast("Bộ nhớ trình duyệt đã đầy — không thể lưu (tệp/ảnh quá lớn).", "error");
    }
    return false;
  }
}

// ---- IndexedDB storage for large binary files (attachments, documents) ----
// Base64 files stuffed into localStorage blow its ~5MB quota, which was
// corrupting downloads. IndexedDB has a far larger quota and is a native
// browser API (no external library — complies with the project's rule #1).
// Only tiny references (name/size/dataKey) stay in localStorage; the heavy
// Data URL lives here, keyed by dataKey.
const IDB_NAME = "eoffice_files";
const IDB_STORE = "files";
let _idbPromise = null;
function idbOpen() {
  if (_idbPromise) return _idbPromise;
  _idbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(IDB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(IDB_STORE)) db.createObjectStore(IDB_STORE);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return _idbPromise;
}
function idbSet(key, value) {
  return idbOpen().then(db => new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, "readwrite");
    tx.objectStore(IDB_STORE).put(value, key);
    tx.oncomplete = () => resolve(key);
    tx.onerror = () => reject(tx.error);
  }));
}
function idbGet(key) {
  return idbOpen().then(db => new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, "readonly");
    const r = tx.objectStore(IDB_STORE).get(key);
    r.onsuccess = () => resolve(r.result);
    r.onerror = () => reject(r.error);
  }));
}
function idbDel(key) {
  return idbOpen().then(db => new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, "readwrite");
    tx.objectStore(IDB_STORE).delete(key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  }));
}
function genFileKey() {
  return "f_" + Date.now() + "_" + Math.random().toString(36).slice(2, 10);
}

// Global App State Object
let state = {
  currentUser: loadState("users", USERS).admin, // Default login user
  users: loadState("users", USERS),
  news: loadState("news", INITIAL_NEWS),
  documents: loadState("documents", INITIAL_DOCUMENTS),
  requests: loadState("requests", INITIAL_REQUESTS),
  calendar: loadState("calendar", INITIAL_CALENDAR),
  surveys: loadState("surveys", INITIAL_SURVEYS),
  albums: loadState("albums", INITIAL_ALBUMS),
  videos: loadState("videos", INITIAL_VIDEOS),
  notifications: loadState("notifications", INITIAL_NOTIFICATIONS),
  rooms: loadState("rooms", [
    "Phòng họp A (Lầu 1)",
    "Phòng họp B (Lầu 2)",
    "Phòng khách VIP",
    "Google Meet trực tuyến"
  ]),
  docCategories: loadState("docCategories", [
    "Quy định & Quy chế",
    "Quy trình",
    "Biểu mẫu",
    "Chính sách",
    "Hướng dẫn & Tài liệu đào tạo",
    "Quyết định & Văn bản chỉ đạo"
  ]),
  eventTypes: loadState("eventTypes", [
    "Cuộc họp",
    "Sự kiện",
    "Sinh nhật",
    "Nghỉ lễ"
  ]),
  departments: loadState("departments", DEPARTMENTS),
  procedureTypes: loadState("procedureTypes", [
    "Nghỉ phép năm",
    "Đăng ký xe công vụ",
    "Đăng ký phòng họp",
    "Yêu cầu văn phòng phẩm"
  ]),
  procedureWorkflows: loadState("procedureWorkflows", {
    "Nghỉ phép năm": [
      { stepName: "Phê duyệt Nhân sự", approverName: "Lê Thị Hồng", approverKey: "hr" },
      { stepName: "Phê duyệt Giám đốc", approverName: "Nguyễn Văn An", approverKey: "admin" }
    ],
    "Đăng ký xe công vụ": [
      { stepName: "Phê duyệt Hành chính", approverName: "Nguyễn Văn An", approverKey: "admin" }
    ],
    "Đăng ký phòng họp": [
      { stepName: "Phê duyệt Hành chính", approverName: "Lê Thị Hồng", approverKey: "hr" }
    ],
    "Yêu cầu văn phòng phẩm": [
      { stepName: "Phê duyệt Nhân sự", approverName: "Lê Thị Hồng", approverKey: "hr" }
    ]
  }),
  // Định nghĩa TRƯỜNG dữ liệu + MÔ TẢ luồng nghiệp vụ cho từng thủ tục,
  // dùng để dựng biểu mẫu ở "Gửi đơn đăng ký mới".
  procedureDefs: loadState("procedureDefs", {
    "Nghỉ phép năm": {
      description: "Nhân viên đăng ký nghỉ phép → Nhân sự kiểm tra phép năm tồn → Giám đốc phê duyệt.",
      fields: [
        { id: "f_start", label: "Ngày bắt đầu nghỉ", type: "date", required: true },
        { id: "f_end", label: "Ngày đi làm lại", type: "date", required: true },
        { id: "f_handover", label: "Người bàn giao công việc", type: "text", required: true }
      ]
    },
    "Đăng ký xe công vụ": {
      description: "Đăng ký xe → Hành chính duyệt và điều phối xe.",
      fields: [
        { id: "f_route", label: "Lộ trình di chuyển", type: "text", required: true },
        { id: "f_date", label: "Ngày sử dụng xe", type: "date", required: true },
        { id: "f_passengers", label: "Số người đi cùng", type: "number", required: true }
      ]
    },
    "Đăng ký phòng họp": {
      description: "Đăng ký phòng họp → Hành chính xác nhận lịch phòng.",
      fields: [
        { id: "f_room", label: "Phòng họp", type: "text", required: true },
        { id: "f_date", label: "Ngày họp", type: "date", required: true },
        { id: "f_time", label: "Khung giờ (VD 09:00 - 10:30)", type: "text", required: false }
      ]
    },
    "Yêu cầu văn phòng phẩm": {
      description: "Đăng ký văn phòng phẩm → Nhân sự/Hành chính duyệt cấp phát.",
      fields: [
        { id: "f_items", label: "Danh mục vật phẩm cần cấp", type: "textarea", required: true },
        { id: "f_qty", label: "Số lượng", type: "text", required: false }
      ]
    }
  }),
  activeTabs: loadState("activeTabs", [
    "dashboard",
    "calendar",
    "news",
    "documents",
    "requests",
    "directory",
    "surveys",
    "albums",
    "eform"
  ]),
  dynamicForms: loadState("dynamicForms", [
    {
      id: "form-khao-sat-an-trua",
      name: "Khảo sát chất lượng cơm trưa văn phòng",
      description: "Nhằm nâng cao chất lượng dịch vụ ăn trưa cho nhân viên văn phòng, Ban Hành chính thân mời bạn đóng góp ý kiến đánh giá.",
      fields: [
        { label: "Chất lượng cơm trưa (1-5 sao)", type: "number", required: true, id: "field_rating" },
        { label: "Món ăn ưa thích", type: "text", required: false, id: "field_favorite" },
        { label: "Đóng góp ý kiến khác", type: "textarea", required: false, id: "field_comments" }
      ],
      submissions: [
        { username: "hr", date: "2026-07-03", data: { field_rating: 4, field_favorite: "Thịt kho tàu", field_comments: "Cơm hơi khô một chút." } },
        { username: "staff", date: "2026-07-04", data: { field_rating: 5, field_favorite: "Cá thu sốt cà", field_comments: "Rất ngon và sạch sẽ." } }
      ]
    }
  ]),
  activeView: "dashboard",
  selectedCalendarDate: "2026-07-03",
  currentCalendarMonth: 6, // July (0-indexed)
  currentCalendarYear: 2026,
  lightboxAlbum: null,
  lightboxIndex: 0,
  mediaCache: {} // dataKey -> Data URL, for media rendered synchronously (video thumbnails)
};

// ==========================================
// 2. CONTROLLER, NAVIGATION & CORE LOGIC
// ==========================================

window.addEventListener("DOMContentLoaded", () => {
  // Sync state data on boot
  initApp();
});

// Backfill a playable sample URL for older stored videos that predate the
// `url` field, so existing seed videos are watchable.
function migrateVideos() {
  const samples = [
    "https://media.w3.org/2010/05/sintel/trailer.mp4",
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://download.samplelib.com/mp4/sample-5s.mp4"
  ];
  let changed = false;
  state.videos.forEach((v, i) => {
    // Backfill missing sources, and heal the old sample bucket that now 403s.
    const dead = v.url && v.url.indexOf("gtv-videos-bucket") !== -1;
    if ((!v.url && !v.videoKey) || dead) { v.url = samples[i % samples.length]; changed = true; }
  });
  if (changed) saveState("videos", state.videos);
}

// Load IndexedDB-stored media (video thumbnails + uploaded album photos) into an
// in-memory cache so those views can render them synchronously.
function preloadMedia() {
  const keys = [];
  state.videos.forEach(v => { if (v.thumbKey) keys.push(v.thumbKey); });
  state.albums.forEach(a => (a.images || []).forEach(img => { if (img.dataKey) keys.push(img.dataKey); }));
  Object.keys(state.users).forEach(k => { const u = state.users[k]; if (u && u.avatarKey) keys.push(u.avatarKey); });
  if (!keys.length) return Promise.resolve();
  return Promise.all(keys.map(k =>
    idbGet(k).then(d => { if (d) state.mediaCache[k] = d; }).catch(() => {})
  )).then(() => {
    renderVideoNewsScroll();
    if (state.currentUser) updateUserProfileHeader();
    if (state.activeView === "albums") renderAlbums();
    if (state.activeView === "dashboard") renderDashboard();
  });
}

function initApp() {
  migrateVideos();
  // Migration 1 lần: thêm tab "Thu thập eForm" cho người dùng đã có cấu hình tab cũ.
  if (!localStorage.getItem("eoffice_migrated_eform")) {
    if (!state.activeTabs.includes("eform")) {
      state.activeTabs.push("eform");
      saveState("activeTabs", state.activeTabs);
    }
    localStorage.setItem("eoffice_migrated_eform", "1");
  }
  preloadMedia();
  updateLoginSelectOptions();
  populateTaxonomyDropdowns();
  updateNavbarTabs();
  // Hide main view if not logged in
  const loggedIn = localStorage.getItem("eoffice_logged_in");
  if (loggedIn) {
    const userKey = localStorage.getItem("eoffice_user_key") || "admin";
    state.currentUser = state.users[userKey] || USERS[userKey];
    document.getElementById("loginView").style.display = "none";
    document.getElementById("appShell").style.display = "flex";
    
    // Update user profile header info
    updateUserProfileHeader();
    // Render view
    switchView(state.activeView);
    // Check for mandatory popup
    checkMandatoryAnnouncements();
  } else {
    document.getElementById("loginView").style.display = "flex";
    document.getElementById("appShell").style.display = "none";
  }
}

function doLogin() {
  const userKey = document.getElementById("loginUser").value;
  state.currentUser = state.users[userKey] || USERS[userKey];
  localStorage.setItem("eoffice_logged_in", "true");
  localStorage.setItem("eoffice_user_key", userKey);
  
  document.getElementById("loginView").style.display = "none";
  document.getElementById("appShell").style.display = "flex";
  
  updateUserProfileHeader();
  
  // Show successful login toast
  showToast(`Đăng nhập thành công! Chào mừng ${state.currentUser.name}`, "success");
  
  // Reset view to dashboard
  switchView("dashboard");
  
  // Check for mandatory popup
  setTimeout(checkMandatoryAnnouncements, 600);
}

function doLogout() {
  localStorage.removeItem("eoffice_logged_in");
  localStorage.removeItem("eoffice_user_key");
  document.getElementById("loginView").style.display = "flex";
  document.getElementById("appShell").style.display = "none";
  closeAllDropdowns();
  showToast("Đã đăng xuất khỏi hệ thống.", "info");
}

// Hiển thị avatar: dùng ảnh cá nhân nếu có, nếu không thì chữ viết tắt + màu.
function applyAvatar(el, user) {
  if (!el) return;
  const src = user && user.avatarKey ? state.mediaCache[user.avatarKey] : null;
  if (src) {
    el.textContent = "";
    el.style.backgroundImage = `url('${src}')`;
    el.style.backgroundSize = "cover";
    el.style.backgroundPosition = "center";
  } else {
    el.style.backgroundImage = "none";
    el.textContent = (user && user.initials) || "";
    el.style.background = (user && user.color) || "var(--primary)";
  }
}

function updateUserProfileHeader() {
  applyAvatar(document.getElementById("userAvatar"), state.currentUser);
  document.getElementById("userDisplayName").textContent = state.currentUser.name;
  document.getElementById("userDisplayDept").textContent = state.currentUser.dept;
  document.getElementById("dropdownName").textContent = state.currentUser.name;
  document.getElementById("dropdownRole").textContent = `${state.currentUser.role} (${state.currentUser.dept})`;

  // Fill settings profile inputs
  document.getElementById("settingsName").value = state.currentUser.name;
  document.getElementById("settingsEmpId").value = state.currentUser.empId;
  document.getElementById("settingsRole").value = state.currentUser.role;
  document.getElementById("settingsExt").value = state.currentUser.ext;
  document.getElementById("settingsEmail").value = state.currentUser.email;
  document.getElementById("settingsPhone").value = state.currentUser.phone;

  // Cài đặt cá nhân: avatar preview, tùy chọn nhận email
  applyAvatar(document.getElementById("settingsAvatar"), state.currentUser);
  const avName = document.getElementById("settingsAvatarName");
  if (avName) avName.textContent = state.currentUser.name;
  const rmBtn = document.getElementById("removeAvatarBtn");
  if (rmBtn) rmBtn.style.display = state.currentUser.avatarKey ? "inline-flex" : "none";
  const addr = document.getElementById("settingsEmailAddr");
  if (addr) addr.textContent = state.currentUser.email ? `(${state.currentUser.email})` : "";
  const en = state.currentUser.emailNotif || { mandatory: true, approvals: true, news: false, calendar: false };
  const setChk = (id, v) => { const e = document.getElementById(id); if (e) e.checked = !!v; };
  setChk("notifMandatory", en.mandatory);
  setChk("notifApprovals", en.approvals);
  setChk("notifNews", en.news);
  setChk("notifCalendar", en.calendar);

  // Show/hide admin tab
  const adminTab = document.getElementById("tab-admin");
  if (adminTab) {
    const isUserAdmin = state.currentUser.username === "admin" || (state.currentUser.permissions && state.currentUser.permissions.isAdmin);
    if (isUserAdmin) {
      adminTab.style.display = "inline-block";
    } else {
      adminTab.style.display = "none";
      if (state.activeView === "admin") {
        switchView("dashboard");
      }
    }
  }
}

// Nav Switcher
function switchView(viewId) {
  state.activeView = viewId;
  
  // Deactivate all nav tabs
  document.querySelectorAll(".nav-tab-item").forEach(item => {
    item.classList.remove("active");
  });
  
  // Activate selected tab
  const activeTab = document.getElementById("tab-" + viewId);
  if (activeTab) activeTab.classList.add("active");
  
  // Hide all view sections
  document.querySelectorAll(".app-view").forEach(view => {
    view.classList.remove("active");
  });
  
  // Show selected view section
  const targetView = document.getElementById("view-" + viewId);
  if (targetView) targetView.classList.add("active");
  
  closeAllDropdowns();
  
  // Dispatch view renders
  switch (viewId) {
    case "dashboard":
      renderDashboard();
      break;
    case "news":
      renderNews();
      break;
    case "announcements":
      renderAnnouncements();
      break;
    case "documents":
      renderDocuments();
      break;
    case "requests":
      renderRequests();
      break;
    case "calendar":
      renderCalendar();
      break;
    case "directory":
      renderDirectory();
      break;
    case "surveys":
      renderSurveys();
      break;
    case "albums":
      renderAlbums();
      break;
    case "eform":
      renderEFormCollect();
      break;
    case "admin":
      renderAdminView();
      break;
  }
}

// UI Dropdowns Toggle
function toggleQuickCreate() {
  const drop = document.getElementById("quickCreateDropdown");
  if (!drop) return;
  const visible = drop.style.display === "block";
  closeAllDropdowns();
  if (!visible) drop.style.display = "block";
  if (window.event) window.event.stopPropagation();
}

function toggleNotificationsPanel() {
  const drop = document.getElementById("notificationPanel");
  if (!drop) return;
  const visible = drop.style.display === "block";
  closeAllDropdowns();
  if (!visible) {
    drop.style.display = "block";
    renderNotificationsPanel();
  }
  if (window.event) window.event.stopPropagation();
}

function toggleUserDropdown() {
  const drop = document.getElementById("userDropdown");
  if (!drop) return;
  const visible = drop.style.display === "block";
  closeAllDropdowns();
  if (!visible) drop.style.display = "block";
  if (window.event) window.event.stopPropagation();
}

function closeAllDropdowns() {
  const qc = document.getElementById("quickCreateDropdown");
  if (qc) qc.style.display = "none";
  const np = document.getElementById("notificationPanel");
  if (np) np.style.display = "none";
  const ud = document.getElementById("userDropdown");
  if (ud) ud.style.display = "none";
}

// Click outside dropdowns listener
document.addEventListener("click", () => {
  closeAllDropdowns();
});

// Toast Utility
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  const icons = { success: "check_circle", error: "error", info: "info", warning: "warning" };
  const toast = document.createElement("div");
  toast.className = `toast-item ${type}`;
  toast.innerHTML = `
    <span class="material-symbols-outlined">${icons[type]}</span>
    <span style="flex:1;">${message}</span>
  `;
  container.appendChild(toast);
  
  // Auto remove toast
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Modals Toggle
function openModal(id) {
  document.getElementById(id).style.display = "flex";
  document.body.style.overflow = "hidden";
  
  // Set date values on event forms
  if (id === "modalNewEvent") {
    document.getElementById("newEventDate").value = state.selectedCalendarDate;
  }
  if (id === "modalNewRequest") {
    const select = document.getElementById("newRequestType");
    if (select) {
      select.innerHTML = state.procedureTypes.map(t => `<option value="${t}">${t}</option>`).join('');
    }
    toggleRequestFormFields();
  }
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
  document.body.style.overflow = "";
}

function closeModalOutside(event, id) {
  if (event.target === event.currentTarget) {
    closeModal(id);
  }
}

// ESC key to close modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-overlay").forEach(el => {
      if (el.style.display === "flex" || el.style.display === "block") {
        el.style.display = "none";
      }
    });
    closeLightbox();
  }
});

// ==========================================
// 3. MODULE: NOTIFICATIONS & MAIN HEADER
// ==========================================

function renderNotificationsPanel() {
  const list = document.getElementById("notificationPanelList");
  const unreadCount = state.notifications.filter(n => n.unread).length;
  
  // Update bell badge
  const badge = document.getElementById("bellBadge");
  if (unreadCount > 0) {
    badge.style.display = "block";
  } else {
    badge.style.display = "none";
  }
  
  if (state.notifications.length === 0) {
    list.innerHTML = `<div style="padding: 24px; text-align:center; color: var(--text-muted);">Không có thông báo nào</div>`;
    return;
  }
  
  list.innerHTML = state.notifications.map(n => `
    <div class="notif-panel-item ${n.unread ? 'unread' : ''}" onclick="handleNotificationClick(${n.id})">
      <div class="icon ${n.type === 'warning' ? 'danger' : n.type === 'success' ? 'success' : 'info'}">
        <span class="material-symbols-outlined">
          ${n.type === 'warning' ? 'campaign' : n.type === 'success' ? 'check_circle' : 'notifications'}
        </span>
      </div>
      <div class="content-text">
        <div class="title-text">${n.title}</div>
        <div class="desc-text">${n.desc}</div>
        <div class="time-text">${n.time}</div>
      </div>
    </div>
  `).join('');
}

function handleNotificationClick(id) {
  const notif = state.notifications.find(n => n.id === id);
  if (!notif) return;
  notif.unread = false;
  saveState("notifications", state.notifications);
  renderNotificationsPanel();
  switchView(notif.link);
}

function markAllNotificationsAsRead() {
  state.notifications.forEach(n => n.unread = false);
  saveState("notifications", state.notifications);
  renderNotificationsPanel();
  showToast("Đã đánh dấu đọc toàn bộ thông báo", "success");
}

// Global search bar controller
function handleGlobalSearch(event) {
  if (event.key === "Enter") {
    const query = document.getElementById("globalSearchInput").value.trim().toLowerCase();
    if (!query) return;
    
    showToast(`Đang tìm kiếm "${query}" trên toàn hệ thống...`, "info");
    
    // Jump to the tab that contains matching objects, default to news or documents
    const docMatches = state.documents.some(d => d.title.toLowerCase().includes(query) || d.code.toLowerCase().includes(query));
    if (docMatches) {
      switchView("documents");
      document.getElementById("searchDocQuery").value = query;
      filterDocuments();
    } else {
      switchView("news");
      // Search in news feed
      renderNews(query);
    }
  }
}

// ==========================================
// 4. MODULE: TIN TỨC NỘI BỘ (NEWS)
// ==========================================

let activeNewsCategoryFilter = "all";

function renderNews(searchQuery = "") {
  const bannerEl = document.getElementById("newsFeaturedBanner");
  const gridEl = document.getElementById("newsGrid");
  
  // Toggle news creation button visibility based on admin role or post permissions
  const createBtn = document.getElementById("newsCreatePostBtn");
  const canPostNews = state.currentUser.username === 'admin' || (state.currentUser.permissions && state.currentUser.permissions.canPostNews);
  if (createBtn) {
    createBtn.style.display = canPostNews ? 'block' : 'none';
  }
  
  // Render slide banner for featured pinned news
  const pinnedPost = state.news.find(n => n.pinned);
  if (pinnedPost && activeNewsCategoryFilter === "all" && !searchQuery) {
    bannerEl.style.display = "block";
    bannerEl.innerHTML = `
      <div class="news-banner-slide" onclick="showNewsDetail(${pinnedPost.id})">
        <div class="news-banner-image" style="background-image: url('${pinnedPost.image}')">
          <div class="news-item-pinned-badge"><span class="material-symbols-outlined" style="font-size:14px">push_pin</span> ĐÃ GHIM</div>
        </div>
        <div class="news-banner-info">
          <div><span class="badge badge-danger">Tiêu điểm</span></div>
          <h2>${pinnedPost.title}</h2>
          <p>${pinnedPost.excerpt}</p>
          <div class="news-banner-meta">
            <span><div class="avatar sm" style="background:${USERS.admin.color}">${pinnedPost.authorInitials}</div> <strong>${pinnedPost.author}</strong></span>
            <span><span class="material-symbols-outlined">schedule</span> ${pinnedPost.date}</span>
            <span><span class="material-symbols-outlined">visibility</span> ${pinnedPost.views} lượt xem</span>
          </div>
        </div>
      </div>
    `;
  } else {
    bannerEl.style.display = "none";
  }
  
  // Filter news items
  let filteredNews = state.news;
  if (activeNewsCategoryFilter === "pinned") {
    filteredNews = filteredNews.filter(n => n.pinned);
  } else if (activeNewsCategoryFilter === "read-later") {
    filteredNews = filteredNews.filter(n => (n.readLaterBy || []).includes(state.currentUser.username));
  } else if (activeNewsCategoryFilter === "bookmarked") {
    filteredNews = filteredNews.filter(n => (n.bookmarkedBy || []).includes(state.currentUser.username));
  } else if (activeNewsCategoryFilter !== "all") {
    filteredNews = filteredNews.filter(n => n.category === activeNewsCategoryFilter);
  }
  
  if (searchQuery) {
    filteredNews = filteredNews.filter(n => n.title.toLowerCase().includes(searchQuery) || n.excerpt.toLowerCase().includes(searchQuery));
  }
  
  // Fill news items grid
  if (filteredNews.length === 0) {
    gridEl.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        <span class="material-symbols-outlined" style="font-size: 3rem; margin-bottom: 12px;">newspaper</span>
        <p>Không có tin tức nào phù hợp trong mục này</p>
      </div>
    `;
  } else {
    gridEl.innerHTML = filteredNews.map(n => {
      const isLiked = (n.likedBy || []).includes(state.currentUser.username);
      const isBookmarked = (n.bookmarkedBy || []).includes(state.currentUser.username);
      const isReadLater = (n.readLaterBy || []).includes(state.currentUser.username);
      
      return `
        <div class="news-item-card" onclick="showNewsDetail(${n.id})">
          <div class="news-item-image" style="background-image: url('${n.image || 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=600'}')">
            ${n.pinned ? `<div class="news-item-pinned-badge"><span class="material-symbols-outlined" style="font-size:14px">push_pin</span> GHIM</div>` : ''}
          </div>
          <div class="news-item-body">
            <div class="news-item-tags">
              <span class="badge ${n.category === 'thong-bao' ? 'badge-primary' : n.category === 'quyet-dinh' ? 'badge-purple' : n.category === 'nhan-su' ? 'badge-cyan' : 'badge-success'}">${n.catLabel}</span>
              ${n.mandatory ? `<span class="badge badge-danger">BẮT BUỘC ĐỌC</span>` : ''}
            </div>
            <h4 class="news-item-title">${n.title}</h4>
            <p class="news-item-excerpt">${n.excerpt}</p>
            <div class="news-item-meta">
              <span class="news-item-author">
                <div class="avatar sm" style="width: 22px; height: 22px; font-size: 0.65rem; background: var(--primary); color: white;">${n.authorInitials}</div>
                ${n.author}
              </span>
              <div class="news-item-stats">
                <span><span class="material-symbols-outlined" style="font-size: 14px;">visibility</span> ${n.views}</span>
                <span><span class="material-symbols-outlined" style="font-size: 14px;">chat_bubble</span> ${n.comments.length}</span>
              </div>
            </div>
          </div>
          
          <!-- Interactions Buttons Row -->
          <div class="news-item-actions" onclick="event.stopPropagation()">
            <button class="news-action-btn ${isLiked ? 'active' : ''}" onclick="toggleLikeNews(${n.id})">
              <span class="material-symbols-outlined">thumb_up</span> ${n.likes}
            </button>
            <button class="news-action-btn" onclick="showNewsDetail(${n.id}, true)">
              <span class="material-symbols-outlined">chat_bubble</span> Bình luận
            </button>
            <button class="news-action-btn ${isReadLater ? 'active' : ''}" onclick="toggleReadLaterNews(${n.id})">
              <span class="material-symbols-outlined">update</span> ${isReadLater ? 'Bỏ đọc sau' : 'Đọc sau'}
            </button>
            ${canPostNews ? `
              <button class="news-action-btn" onclick="togglePinNews(${n.id})" style="margin-left: auto; color: var(--primary); display: flex; align-items: center; gap: 4px;">
                <span class="material-symbols-outlined" style="font-size: 16px;">push_pin</span> ${n.pinned ? 'Bỏ ghim' : 'Ghim'}
              </button>
              <button class="news-action-btn danger-btn" onclick="deleteNewsPost(${n.id})" style="color: var(--danger); display: flex; align-items: center; gap: 4px; border: 1px solid transparent; background: transparent; padding: 4px 8px; border-radius: 4px;">
                <span class="material-symbols-outlined" style="font-size: 16px;">delete</span> Xóa
              </button>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');
  }
  
  // Render Video news row
  renderVideoNewsScroll();
  // Render albums row
  renderAlbumsPreviewScroll();
}

function filterNewsCategory(cat) {
  activeNewsCategoryFilter = cat;
  
  // Update class active buttons
  document.querySelectorAll(".news-cat-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  
  if (window.event && window.event.target && window.event.target.classList.contains("news-cat-btn")) {
    window.event.target.classList.add("active");
  } else {
    const btns = document.querySelectorAll(".news-cat-btn");
    for (let btn of btns) {
      if (btn.getAttribute("onclick") && btn.getAttribute("onclick").includes(cat)) {
        btn.classList.add("active");
        break;
      }
    }
  }
  
  renderNews();
}

function deleteNewsPost(id) {
  const canPostNews = state.currentUser.username === 'admin' || (state.currentUser.permissions && state.currentUser.permissions.canPostNews);
  if (!canPostNews) {
    showToast("Bạn không có quyền thực hiện chức năng này", "error");
    return;
  }
  
  if (confirm("Bạn có chắc chắn muốn xóa bài viết này không?")) {
    state.news = state.news.filter(n => n.id !== id);
    saveState("news", state.news);
    showToast("Đã xóa bài viết thành công!", "success");
    renderNews();
    renderDashboard();
  }
}

function togglePinNews(id) {
  const canPostNews = state.currentUser.username === 'admin' || (state.currentUser.permissions && state.currentUser.permissions.canPostNews);
  if (!canPostNews) {
    showToast("Bạn không có quyền thực hiện chức năng này", "error");
    return;
  }
  
  const post = state.news.find(n => n.id === id);
  if (!post) return;

  // Cho phép ghim NHIỀU tin: chỉ đảo trạng thái của tin này, không bỏ ghim tin khác.
  // Tất cả tin được ghim đều hiển thị ở "mục tin lớn" trên Trang chủ.
  post.pinned = !post.pinned;

  saveState("news", state.news);
  renderNews();
  renderDashboard();
  const pinnedCount = state.news.filter(n => n.pinned).length;
  showToast(post.pinned ? `Đã ghim lên Trang chủ (${pinnedCount} tin đang ghim)` : "Đã bỏ ghim bài viết", "success");
}

// Resolve a video's thumbnail: uploaded thumbnails live in IndexedDB (thumbKey,
// cached in state.mediaCache); otherwise it's a direct URL (bg), else a default.
function videoThumbSrc(v) {
  if (v.thumbKey) return state.mediaCache[v.thumbKey] || VIDEO_PLACEHOLDER;
  return v.bg || VIDEO_PLACEHOLDER;
}

// Resolve an album photo: uploaded photos live in IndexedDB (dataKey, cached in
// state.mediaCache); otherwise it's a direct URL.
function albumImgSrc(img) {
  if (!img) return VIDEO_PLACEHOLDER;
  if (img.dataKey) return state.mediaCache[img.dataKey] || VIDEO_PLACEHOLDER;
  return img.url || VIDEO_PLACEHOLDER;
}
// Album cover: explicit cover, else first photo, else placeholder.
function albumCoverSrc(album) {
  if (!album) return VIDEO_PLACEHOLDER;
  if (album.cover) return album.cover;
  if (album.coverUrl) return album.coverUrl;
  return (album.images && album.images[0]) ? albumImgSrc(album.images[0]) : VIDEO_PLACEHOLDER;
}

// Render Videos Row inside News view
function renderVideoNewsScroll() {
  const row = document.getElementById("videoNewsScrollRow");
  if (!row) return;
  const canPostNews = state.currentUser.username === 'admin' || (state.currentUser.permissions && state.currentUser.permissions.canPostNews);

  // Toggle the "post new video" button based on the same permission as news.
  const newVideoBtn = document.getElementById("newVideoBtn");
  if (newVideoBtn) newVideoBtn.style.display = canPostNews ? 'inline-flex' : 'none';

  row.innerHTML = state.videos.map(v => `
    <div class="video-media-card" onclick="playVideoReal(${v.id})">
      <div class="video-thumb-container" style="background-image: url('${videoThumbSrc(v)}')">
        <div class="video-play-overlay">
          <span class="material-symbols-outlined">play_arrow</span>
        </div>
        ${canPostNews ? `
          <button class="delete-video-btn" onclick="deleteVideoPost(${v.id}, event)" title="Xóa video" style="position: absolute; top: 8px; right: 8px; background: rgba(220, 38, 38, 0.85); color: white; border: none; border-radius: 4px; padding: 4px; display: flex; align-items: center; cursor: pointer; transition: 0.2s; z-index: 10;">
            <span class="material-symbols-outlined" style="font-size: 16px;">delete</span>
          </button>
        ` : ''}
      </div>
      <div class="video-media-body">
        <div class="video-media-title">${v.title}</div>
        <div class="video-media-meta">
          <span>${v.duration}</span> • <span>${v.views} lượt xem</span>
        </div>
      </div>
    </div>
  `).join('');
}

let _currentVideoBlobUrl = null;

// Extract a YouTube video id from the common URL shapes (watch, youtu.be,
// embed, shorts, live).
function getYouTubeId(url) {
  if (!url) return null;
  const patterns = [
    /youtube\.com\/watch\?[^#]*\bv=([\w-]{11})/,
    /youtu\.be\/([\w-]{11})/,
    /youtube\.com\/embed\/([\w-]{11})/,
    /youtube\.com\/shorts\/([\w-]{11})/,
    /youtube\.com\/live\/([\w-]{11})/
  ];
  for (const p of patterns) { const m = url.match(p); if (m) return m[1]; }
  return null;
}

// If the URL points to a streaming platform (YouTube/Vimeo), return an
// embeddable URL for an <iframe>. A raw <video> tag cannot play those pages.
function getEmbedUrl(url) {
  if (!url) return null;
  const yt = getYouTubeId(url);
  if (yt) return `https://www.youtube.com/embed/${yt}`;
  const vm = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vm) return `https://player.vimeo.com/video/${vm[1]}`;
  return null;
}

// A poster image we can derive automatically (YouTube only).
function autoThumbFromUrl(url) {
  const yt = getYouTubeId(url);
  return yt ? `https://img.youtube.com/vi/${yt}/hqdefault.jpg` : null;
}

async function playVideoReal(id) {
  const video = state.videos.find(v => v.id === id);
  if (!video) return;

  video.views++;
  saveState("videos", state.videos);
  renderVideoNewsScroll();

  const container = document.getElementById("videoPlayerContainer");
  if (!container) return;
  document.getElementById("videoPlayerTitle").textContent = video.title;
  container.innerHTML = "";
  if (_currentVideoBlobUrl) { URL.revokeObjectURL(_currentVideoBlobUrl); _currentVideoBlobUrl = null; }

  // Uploaded files live in IndexedDB and play from an efficient Blob URL.
  let fileSrc = null;
  if (video.videoKey) {
    try {
      const dataUrl = await idbGet(video.videoKey);
      const blob = dataUrl ? dataURLtoBlob(dataUrl) : null;
      if (blob) { _currentVideoBlobUrl = URL.createObjectURL(blob); fileSrc = _currentVideoBlobUrl; }
    } catch (e) { console.error("Không tải được video từ bộ nhớ:", e); }
    if (!fileSrc) { showToast("Không tải được video từ bộ nhớ.", "error"); return; }
  }

  const embedUrl = fileSrc ? null : getEmbedUrl(video.url || "");

  if (embedUrl) {
    // YouTube / Vimeo → <iframe> embed (a <video> tag can't play these).
    const iframe = document.createElement("iframe");
    iframe.src = embedUrl + (embedUrl.indexOf("youtube.com") !== -1 ? "?autoplay=1&rel=0" : "?autoplay=1");
    iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
    iframe.setAttribute("allowfullscreen", "");
    iframe.style.cssText = "width:100%; aspect-ratio:16/9; max-height:450px; border:0; display:block;";
    container.appendChild(iframe);
  } else {
    // Uploaded file or a direct video file URL (.mp4, .webm…) → <video>.
    const directSrc = fileSrc || video.url;
    if (!directSrc) { showToast("Video này chưa có nguồn phát.", "error"); return; }
    const videoEl = document.createElement("video");
    videoEl.id = "videoPlayerElement";
    videoEl.controls = true;
    videoEl.autoplay = true;
    videoEl.style.cssText = "width:100%; max-height:450px; display:block;";
    videoEl.src = directSrc;
    container.appendChild(videoEl);
    videoEl.play().catch(err => console.log("Auto-play prevented:", err));
  }

  openModal("modalVideoPlayer");
}

function closeVideoPlayer() {
  // Clearing the container removes the <video>/<iframe> and stops playback
  // (otherwise a YouTube embed keeps playing audio in the background).
  const container = document.getElementById("videoPlayerContainer");
  if (container) container.innerHTML = "";
  if (_currentVideoBlobUrl) { URL.revokeObjectURL(_currentVideoBlobUrl); _currentVideoBlobUrl = null; }
  closeModal("modalVideoPlayer");
}

function deleteVideoPost(id, event) {
  if (event) event.stopPropagation();
  
  if (confirm("Bạn có chắc chắn muốn xóa video tin tức này không?")) {
    state.videos = state.videos.filter(v => v.id !== id);
    saveState("videos", state.videos);
    renderVideoNewsScroll();
    showToast("Đã xóa video tin tức thành công", "success");
  }
}

// ---- Create-new-video flow ----

function toggleVideoSource() {
  const checked = document.querySelector('input[name="videoSource"]:checked');
  const src = checked ? checked.value : "file";
  const fileGroup = document.getElementById("videoFileGroup");
  const urlGroup = document.getElementById("videoUrlGroup");
  if (fileGroup) fileGroup.style.display = src === "file" ? "block" : "none";
  if (urlGroup) urlGroup.style.display = src === "url" ? "block" : "none";
}

function formatDuration(sec) {
  if (!isFinite(sec) || sec <= 0) return "";
  const m = Math.floor(sec / 60), s = Math.floor(sec % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

// Read video length from metadata and fill the (readonly) duration field.
function probeVideoDuration(src) {
  const durInput = document.getElementById("newVideoDuration");
  if (durInput) durInput.value = "Đang phát hiện...";
  const tmp = document.createElement("video");
  tmp.preload = "metadata";
  const cleanup = () => { if (src && src.startsWith("blob:")) URL.revokeObjectURL(src); };
  tmp.onloadedmetadata = () => { if (durInput) durInput.value = formatDuration(tmp.duration) || "00:00"; cleanup(); };
  tmp.onerror = () => { if (durInput) durInput.value = ""; cleanup(); };
  tmp.src = src;
}

function handleNewVideoFileChange(input) {
  const label = document.getElementById("newVideoFileLabel");
  if (!(input.files && input.files[0])) {
    if (label) label.textContent = "Chọn tệp video (.mp4, .webm)";
    delete input.dataset.videoKey;
    return;
  }
  const file = input.files[0];
  if (label) label.textContent = `Đang đọc: ${file.name}...`;
  // Detect duration quickly from a temporary object URL (no full read needed).
  probeVideoDuration(URL.createObjectURL(file));
  // Store the heavy video data in IndexedDB; keep only a reference.
  const reader = new FileReader();
  reader.onload = function(e) {
    const key = genFileKey();
    idbSet(key, e.target.result).then(() => {
      input.dataset.videoKey = key;
      if (label) label.textContent = `Đã chọn: ${file.name}`;
    }).catch(err => {
      console.error("Lưu video thất bại:", err);
      if (label) label.textContent = "Lỗi khi đọc video — vui lòng thử lại";
    });
  };
  reader.readAsDataURL(file);
}

function handleNewVideoUrlChange(input) {
  const url = input.value.trim();
  const durInput = document.getElementById("newVideoDuration");
  if (!url) return;
  if (getEmbedUrl(url)) {
    // YouTube/Vimeo expose no readable metadata here; let the user type it.
    if (durInput) durInput.value = "";
    return;
  }
  probeVideoDuration(url);
}

function handleNewVideoThumbChange(input) {
  const label = document.getElementById("newVideoThumbLabel");
  if (!(input.files && input.files[0])) {
    if (label) label.textContent = "Tải ảnh đại diện (tùy chọn)";
    delete input.dataset.thumbKey;
    return;
  }
  const file = input.files[0];
  if (label) label.textContent = `Đang đọc: ${file.name}...`;
  const reader = new FileReader();
  reader.onload = function(e) {
    const key = genFileKey();
    idbSet(key, e.target.result).then(() => {
      state.mediaCache[key] = e.target.result; // available immediately for render
      input.dataset.thumbKey = key;
      if (label) label.textContent = `Đã chọn: ${file.name}`;
    }).catch(err => {
      console.error("Lưu ảnh đại diện thất bại:", err);
      if (label) label.textContent = "Lỗi khi đọc ảnh — vui lòng thử lại";
    });
  };
  reader.readAsDataURL(file);
}

function submitNewVideo() {
  const title = document.getElementById("newVideoTitle").value.trim();
  if (!title) { showToast("Vui lòng nhập tiêu đề video", "warning"); return; }

  const checked = document.querySelector('input[name="videoSource"]:checked');
  const source = checked ? checked.value : "file";
  const fileInput = document.getElementById("newVideoFile");
  const urlInput = document.getElementById("newVideoUrl");
  const thumbInput = document.getElementById("newVideoThumb");
  const durInput = document.getElementById("newVideoDuration");

  let url = null, videoKey = null;
  if (source === "url") {
    url = urlInput.value.trim();
    if (!url) { showToast("Vui lòng nhập đường dẫn video (URL)", "warning"); return; }
  } else {
    videoKey = fileInput.dataset.videoKey;
    if (!videoKey) { showToast("Vui lòng chọn tệp video và đợi tải xong.", "warning"); return; }
  }

  const now = new Date();
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  let duration = (durInput.value || "").trim();
  if (!/^\d{1,2}:\d{2}$/.test(duration)) duration = "00:00";

  const thumbKey = thumbInput.dataset.thumbKey || null;
  const maxId = state.videos.reduce((m, v) => Math.max(m, v.id), 0);
  const newVideo = { id: maxId + 1, title: title, duration: duration, date: dateStr, views: 0 };
  if (url) newVideo.url = url;
  if (videoKey) newVideo.videoKey = videoKey;
  if (thumbKey) newVideo.thumbKey = thumbKey;
  else newVideo.bg = (url ? autoThumbFromUrl(url) : null) || VIDEO_PLACEHOLDER;

  state.videos.unshift(newVideo);
  if (!saveState("videos", state.videos)) { state.videos.shift(); return; }
  renderVideoNewsScroll();
  closeModal("modalNewVideo");
  showToast("Đã đăng video tin tức thành công!", "success");

  // Reset form + labels
  document.getElementById("formNewVideo").reset();
  delete fileInput.dataset.videoKey;
  delete thumbInput.dataset.thumbKey;
  document.getElementById("newVideoFileLabel").textContent = "Chọn tệp video (.mp4, .webm)";
  document.getElementById("newVideoThumbLabel").textContent = "Tải ảnh đại diện (tùy chọn)";
  durInput.value = "";
  toggleVideoSource();
}


// Render Albums Row preview inside News view
function renderAlbumsPreviewScroll() {
  const row = document.getElementById("albumsPreviewScrollRow");
  row.innerHTML = state.albums.map(a => `
    <div class="video-media-card" style="width: 250px;" onclick="switchView('albums')">
      <div class="video-thumb-container" style="background-image: url('${albumCoverSrc(a)}'); height: 130px;">
        <span class="badge badge-neutral" style="position: absolute; bottom: 8px; right: 8px; font-size: 0.7rem; background: rgba(0,0,0,0.6); color: white;">
          ${a.images.length} ảnh
        </span>
      </div>
      <div class="video-media-body" style="padding: 10px;">
        <div class="video-media-title" style="font-size: 0.85rem; height: 1.5em; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 700;">${a.title}</div>
        <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 2px;">Ngày: ${a.date}</div>
      </div>
    </div>
  `).join('');
}

// Interactions Handlers
function toggleLikeNews(id) {
  const post = state.news.find(n => n.id === id);
  if (!post) return;
  
  const user = state.currentUser.username;
  const idx = post.likedBy.indexOf(user);
  if (idx > -1) {
    post.likedBy.splice(idx, 1);
    post.likes--;
  } else {
    post.likedBy.push(user);
    post.likes++;
    showToast("Đã bình chọn nội dung này hữu ích!", "success");
  }
  
  saveState("news", state.news);
  renderNews();
  renderDashboard();
}

function toggleBookmarkNews(id) {
  const post = state.news.find(n => n.id === id);
  if (!post) return;
  
  const user = state.currentUser.username;
  const idx = post.bookmarkedBy.indexOf(user);
  if (idx > -1) {
    post.bookmarkedBy.splice(idx, 1);
    showToast("Đã hủy lưu trữ bài viết", "info");
  } else {
    post.bookmarkedBy.push(user);
    showToast("Đã lưu trữ bài viết vào kho cá nhân", "success");
  }
  
  saveState("news", state.news);
  renderNews();
  renderDashboard();
}

function toggleReadLaterNews(id) {
  const post = state.news.find(n => n.id === id);
  if (!post) return;
  
  const user = state.currentUser.username;
  const idx = post.readLaterBy.indexOf(user);
  if (idx > -1) {
    post.readLaterBy.splice(idx, 1);
    showToast("Đã xóa khỏi danh sách đọc sau", "info");
  } else {
    post.readLaterBy.push(user);
    showToast("Đã thêm vào danh sách đọc sau", "success");
  }
  
  saveState("news", state.news);
  renderNews();
}

// Share News Dialog Simulator
function handleShareInternal() {
  const link = window.location.href;
  navigator.clipboard.writeText(link);
  showToast("Đã sao chép liên kết chia sẻ nội bộ gửi đồng nghiệp!", "success");
}

// News Detail Modal Controller
let currentDetailNewsId = null;

function showNewsDetail(id, focusComment = false) {
  const post = state.news.find(n => n.id === id);
  if (!post) return;
  
  currentDetailNewsId = id;
  post.views++;
  saveState("news", state.news);
  
  // Fill Modal Contents
  document.getElementById("newsDetailCategoryBadge").textContent = post.catLabel;
  document.getElementById("newsDetailCategoryBadge").className = `badge ${post.category === 'thong-bao' ? 'badge-primary' : post.category === 'quyet-dinh' ? 'badge-purple' : post.category === 'nhan-su' ? 'badge-cyan' : 'badge-success'}`;
  
  document.getElementById("newsDetailTitle").textContent = post.title;
  document.getElementById("newsDetailAvatar").textContent = post.authorInitials;
  document.getElementById("newsDetailAuthor").textContent = post.author;
  document.getElementById("newsDetailRole").textContent = ` — ${post.role}`;
  document.getElementById("newsDetailDate").textContent = `${post.date} lúc ${post.time}`;
  document.getElementById("newsDetailViews").innerHTML = `<span class="material-symbols-outlined" style="font-size: 16px;">visibility</span> ${post.views} lượt xem`;
  document.getElementById("newsDetailContent").innerHTML = post.content;
  
  // Attachments
  const attachSec = document.getElementById("newsDetailAttachmentsSection");
  const attachList = document.getElementById("newsDetailAttachmentsList");
  if (post.attachments && post.attachments.length > 0) {
    attachSec.style.display = "block";
    attachList.innerHTML = post.attachments.map((file, idx) => `
      <div class="attachment-item">
        <span class="material-symbols-outlined">picture_as_pdf</span>
        <span style="font-weight: 500;">${file.name}</span>
        <span>(${file.size})</span>
        <button class="btn btn-outline btn-sm" onclick="downloadPostAttachment(${post.id}, ${idx})" style="margin-left: auto; padding: 4px 8px;"><span class="material-symbols-outlined" style="font-size: 14px;">download</span> Tải về</button>
      </div>
    `).join('');
  } else {
    attachSec.style.display = "none";
  }
  
  // Update action buttons state in modal
  updateNewsDetailActionButtons(post);
  // Render comments
  renderNewsComments(post);
  
  openModal("modalNewsDetail");
  
  if (focusComment) {
    setTimeout(() => {
      document.getElementById("newsCommentInput").focus();
    }, 300);
  }
}

function dataURLtoBlob(dataurl) {
  try {
    var arr = dataurl.split(','), 
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
  } catch (e) {
    console.error("Error converting dataURL to Blob:", e);
    return null;
  }
}

function downloadFileSimulate(fileName, dataUrl) {
  if (dataUrl && dataUrl.startsWith("data:")) {
    try {
      const blob = dataURLtoBlob(dataUrl);
      if (blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        showToast(`Đã tải xuống tệp tin ${fileName} thành công!`, "success");
        return;
      }
    } catch (err) {
      console.error("Download error:", err);
    }
  }

  // No valid file data: report honestly instead of downloading a fake file
  // (the old fallback produced an unopenable text file named like the original).
  showToast(`Không thể tải "${fileName}": dữ liệu tệp không hợp lệ hoặc đã mất.`, "error");
}

// Resolve a file's real Data URL: legacy records store it inline (data),
// new records store it in IndexedDB and keep only a reference (dataKey).
async function resolveFileData(fileMeta) {
  if (!fileMeta) return null;
  if (fileMeta.data) return fileMeta.data;
  if (fileMeta.dataKey) {
    try { return await idbGet(fileMeta.dataKey); }
    catch (e) { console.error("idbGet failed:", e); return null; }
  }
  return null;
}

async function downloadPostAttachment(postId, attIdx) {
  const post = state.news.find(n => n.id === postId);
  if (!(post && post.attachments && post.attachments[attIdx])) return;
  const file = post.attachments[attIdx];
  const data = await resolveFileData(file);
  if (!data) { showToast(`Không tìm thấy dữ liệu tệp "${file.name}".`, "error"); return; }
  downloadFileSimulate(file.name, data);
}

async function downloadDocumentFile(docId) {
  const doc = state.documents.find(d => d.id === docId);
  if (!(doc && doc.file)) return;
  const data = await resolveFileData(doc.file);
  if (!data) { showToast(`Không tìm thấy dữ liệu văn bản "${doc.file.name}".`, "error"); return; }
  downloadFileSimulate(doc.file.name, data);
}

function updateNewsDetailActionButtons(post) {
  const isLiked = (post.likedBy || []).includes(state.currentUser.username);
  const isReadLater = (post.readLaterBy || []).includes(state.currentUser.username);

  document.getElementById("newsDetailLikeCount").textContent = post.likes;

  const btnLike = document.getElementById("btnLikeDetail");
  if (isLiked) btnLike.classList.add("active"); else btnLike.classList.remove("active");

  const btnReadLater = document.getElementById("btnReadLaterDetail");
  if (isReadLater) {
    btnReadLater.classList.add("active");
    btnReadLater.innerHTML = `<span class="material-symbols-outlined">update</span> Đang chờ đọc`;
  } else {
    btnReadLater.classList.remove("active");
    btnReadLater.innerHTML = `<span class="material-symbols-outlined">update</span> Đọc sau`;
  }
}

function handleLikeDetail() {
  if (!currentDetailNewsId) return;
  toggleLikeNews(currentDetailNewsId);
  const post = state.news.find(n => n.id === currentDetailNewsId);
  updateNewsDetailActionButtons(post);
}

function handleBookmarkDetail() {
  if (!currentDetailNewsId) return;
  toggleBookmarkNews(currentDetailNewsId);
  const post = state.news.find(n => n.id === currentDetailNewsId);
  updateNewsDetailActionButtons(post);
}

function handleReadLaterDetail() {
  if (!currentDetailNewsId) return;
  toggleReadLaterNews(currentDetailNewsId);
  const post = state.news.find(n => n.id === currentDetailNewsId);
  updateNewsDetailActionButtons(post);
}

// Render comments in modal
function renderNewsComments(post) {
  document.getElementById("newsDetailCommentCount").textContent = post.comments.length;
  const list = document.getElementById("newsCommentsList");
  
  if (post.comments.length === 0) {
    list.innerHTML = `<div style="padding: 12px; text-align:center; color: var(--text-muted); font-size: 0.9rem;">Chưa có bình luận nào. Hãy gửi ý kiến của bạn.</div>`;
    return;
  }
  
  list.innerHTML = post.comments.map(c => `
    <div style="display: flex; gap: 10px; align-items: flex-start; border-bottom: 1px solid var(--border-light); padding-bottom: 10px;">
      <div class="avatar sm" style="width: 28px; height: 28px; font-size: 0.65rem; background: var(--text-secondary); color: white;">
        ${c.author.split(' ').pop().substring(0, 2).toUpperCase()}
      </div>
      <div style="flex:1; min-width:0;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <strong style="font-size: 0.88rem; color: var(--text);">${c.author}</strong>
          <span style="font-size: 0.75rem; color: var(--text-muted);">${c.time}</span>
        </div>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 2px; line-height: 1.4;">${c.text}</p>
      </div>
    </div>
  `).join('');
}

function handleCommentKeyUp(event) {
  if (event.key === "Enter") {
    submitComment();
  }
}

function submitComment() {
  const input = document.getElementById("newsCommentInput");
  const text = input.value.trim();
  if (!text || !currentDetailNewsId) return;
  
  const post = state.news.find(n => n.id === currentDetailNewsId);
  if (!post) return;
  
  // Format current time
  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  
  post.comments.push({
    author: state.currentUser.name,
    text: text,
    time: timeStr
  });
  
  saveState("news", state.news);
  input.value = "";
  
  renderNewsComments(post);
  showToast("Gửi bình luận thành công", "success");
  
  // Refresh main news feed comments count
  renderNews();
}

// Create new post form switcher (news vs announcement)
function togglePostFormFields() {
  const cat = document.getElementById("newPostCategory").value;
  const docNumGroup = document.getElementById("formGroupDocNum");
  const rulesGroup = document.getElementById("formGroupAnnounceRules");
  
  if (cat === "thong-bao" || cat === "quyet-dinh") {
    docNumGroup.style.display = "block";
    rulesGroup.style.display = "block";
  } else {
    docNumGroup.style.display = "none";
    rulesGroup.style.display = "none";
  }
}

function handleNewPostFileChange(input) {
  const label = document.getElementById("newPostFileLabel");
  if (!label) return;
  
  const attachments = [];
  if (input.files && input.files.length > 0) {
    let loadedCount = 0;
    label.textContent = `Đang đọc ${input.files.length} tệp...`;
    
    for (let i = 0; i < input.files.length; i++) {
      const file = input.files[i];
      const reader = new FileReader();
      
      reader.onload = function(e) {
        let sizeStr = "";
        if (file.size < 1024) sizeStr = file.size + " B";
        else if (file.size < 1024 * 1024) sizeStr = (file.size / 1024).toFixed(0) + " KB";
        else sizeStr = (file.size / (1024 * 1024)).toFixed(1) + " MB";

        // Store the heavy Data URL in IndexedDB; keep only a light reference.
        const dataKey = genFileKey();
        idbSet(dataKey, e.target.result).then(() => {
          attachments.push({ name: file.name, size: sizeStr, dataKey: dataKey });
          loadedCount++;
          if (loadedCount === input.files.length) {
            input.dataset.attachmentsJson = JSON.stringify(attachments);
            label.textContent = input.files.length === 1
              ? `Đã chọn: ${input.files[0].name}`
              : `Đã chọn ${input.files.length} tệp tin`;
          }
        }).catch(err => {
          console.error("Lưu tệp đính kèm thất bại:", err);
          label.textContent = "Lỗi khi đọc tệp — vui lòng thử lại";
        });
      };
      reader.readAsDataURL(file);
    }
  } else {
    label.textContent = "Click đính kèm file (PDF, DOCX)";
    delete input.dataset.attachmentsJson;
  }
}

function handleNewPostImageChange(input) {
  const label = document.getElementById("newPostImageFileLabel");
  if (!label) return;
  if (input.files && input.files.length > 0) {
    const file = input.files[0];
    label.textContent = `Đang đọc ảnh: ${file.name}...`;
    
    const reader = new FileReader();
    reader.onload = function(e) {
      input.dataset.imageDataUrl = e.target.result;
      label.textContent = `Đã chọn ảnh: ${file.name}`;
    };
    reader.readAsDataURL(file);
  } else {
    label.textContent = "Tải ảnh biểu ngữ (.jpg, .png)";
    delete input.dataset.imageDataUrl;
  }
}

function handleNewDocFileChange(input) {
  const label = document.getElementById("newDocFileLabel");
  if (!label) return;
  if (input.files && input.files.length > 0) {
    const file = input.files[0];
    label.textContent = `Đang đọc: ${file.name}...`;
    
    const reader = new FileReader();
    reader.onload = function(e) {
      let sizeStr = "";
      if (file.size < 1024) sizeStr = file.size + " B";
      else if (file.size < 1024 * 1024) sizeStr = (file.size / 1024).toFixed(0) + " KB";
      else sizeStr = (file.size / (1024 * 1024)).toFixed(1) + " MB";

      // Store the heavy Data URL in IndexedDB; keep only a light reference.
      const dataKey = genFileKey();
      idbSet(dataKey, e.target.result).then(() => {
        input.dataset.fileJson = JSON.stringify({ name: file.name, size: sizeStr, dataKey: dataKey });
        label.textContent = `Đã chọn: ${file.name}`;
      }).catch(err => {
        console.error("Lưu tệp văn bản thất bại:", err);
        label.textContent = "Lỗi khi đọc tệp — vui lòng thử lại";
      });
    };
    reader.readAsDataURL(file);
  } else {
    label.textContent = "Kéo thả file PDF văn bản hoặc Click để tải lên";
    delete input.dataset.fileJson;
  }
}

function submitNewPost() {
  const category = document.getElementById("newPostCategory").value;
  const title = document.getElementById("newPostTitle").value.trim();
  const content = document.getElementById("newPostContent").value.trim();
  const docNum = document.getElementById("newPostDocNum").value.trim();
  const mandatory = document.getElementById("newPostIsMandatory").checked;
  const priority = document.getElementById("newPostPriority").value;
  
  if (!title || !content) {
    showToast("Vui lòng điền đầy đủ tiêu đề và nội dung", "warning");
    return;
  }
  
  // Get custom uploaded image or use fallback
  const imageInput = document.getElementById("newPostImageFile");
  let image = "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=600";
  if (imageInput && imageInput.dataset.imageDataUrl) {
    image = imageInput.dataset.imageDataUrl;
  }
  
  // Get real file attachments from dataset
  const fileInput = document.getElementById("newPostFile");
  let attachments = [];
  if (fileInput && fileInput.dataset.attachmentsJson) {
    attachments = JSON.parse(fileInput.dataset.attachmentsJson);
  }
  
  const labelsMap = {
    "tin-tuc": "📰 Tin tức",
    "thong-bao": "📢 Thông báo",
    "quyet-dinh": "📋 Quyết định",
    "nhan-su": "👥 Nhân sự"
  };
  
  const now = new Date();
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  
  const newPost = {
    id: state.news.length + 1,
    pinned: priority === "urgent" || priority === "important",
    category: category,
    catLabel: labelsMap[category] || "Tin tức",
    title: title,
    excerpt: content.substring(0, 180) + (content.length > 180 ? "..." : ""),
    content: content.replace(/\n/g, "<br>"),
    author: state.currentUser.name,
    authorInitials: state.currentUser.initials,
    role: state.currentUser.role,
    date: dateStr,
    time: timeStr,
    views: 0,
    likes: 0,
    likedBy: [],
    bookmarkedBy: [],
    readLaterBy: [],
    comments: [],
    attachments: attachments,
    image: image,
    mandatory: mandatory,
    readBy: [state.currentUser.username]
  };
  
  state.news.unshift(newPost);
  if (!saveState("news", state.news)) {
    state.news.shift(); // roll back so we never show a post that wasn't persisted
    return;
  }

  // Push Notification if it is mandatory
  if (mandatory) {
    state.notifications.unshift({
      id: state.notifications.length + 1,
      title: "Thông báo khẩn cấp mới",
      desc: title,
      time: "Vừa xong",
      type: "warning",
      unread: true,
      link: "announcements"
    });
    saveState("notifications", state.notifications);
    renderNotificationsPanel();
  }
  
  closeModal("modalNewPost");
  showToast("Đã đăng bài viết thành công!", "success");
  
  // Reset form inputs
  document.getElementById("formNewPost").reset();
  
  // Clean up datasets and labels
  if (fileInput) delete fileInput.dataset.attachmentsJson;
  if (imageInput) delete imageInput.dataset.imageDataUrl;
  
  const fileLabel = document.getElementById("newPostFileLabel");
  if (fileLabel) fileLabel.textContent = "Click đính kèm file (PDF, DOCX)";
  
  const imageLabel = document.getElementById("newPostImageFileLabel");
  if (imageLabel) imageLabel.textContent = "Tải ảnh biểu ngữ (.jpg, .png)";
  
  renderNews();
}

// ==========================================
// 5. MODULE: THÔNG BÁO (ANNOUNCEMENTS)
// ==========================================

function renderAnnouncements() {
  const container = document.getElementById("announcementsListContainer");
  const filterCat = document.getElementById("filterAnnounceCategory").value;
  const filterRead = document.getElementById("filterAnnounceReadStatus").value;
  const filterMandatory = document.getElementById("filterAnnounceMandatory").checked;
  
  // Filter news items of announcement types (thong-bao or quyet-dinh)
  let list = state.news.filter(n => n.category === "thong-bao" || n.category === "quyet-dinh");
  
  if (filterCat !== "all") {
    // subcategory check
    if (filterCat === "quyet-dinh") {
      list = list.filter(n => n.category === "quyet-dinh");
    } else {
      list = list.filter(n => n.category === "thong-bao");
    }
  }
  
  if (filterRead !== "all") {
    list = list.filter(n => {
      const read = n.readBy.includes(state.currentUser.username);
      return filterRead === "read" ? read : !read;
    });
  }
  
  if (filterMandatory) {
    list = list.filter(n => n.mandatory);
  }
  
  // Update unread count badge
  const myUnreadCount = state.news.filter(n => (n.category === "thong-bao" || n.category === "quyet-dinh") && !n.readBy.includes(state.currentUser.username)).length;
  document.getElementById("announceUnreadCountBadge").textContent = myUnreadCount;
  
  const navBadge = document.getElementById("badgeAnnounceCount");
  if (myUnreadCount > 0) {
    navBadge.style.display = "inline-block";
    navBadge.textContent = myUnreadCount;
  } else {
    navBadge.style.display = "none";
  }
  
  if (list.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border);">
        <span class="material-symbols-outlined" style="font-size: 3rem; margin-bottom: 12px;">campaign</span>
        <p>Không tìm thấy thông báo nào phù hợp bộ lọc</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = list.map(n => {
    const read = n.readBy.includes(state.currentUser.username);
    const readRatioVal = Math.round((n.readBy.length / DIRECTORY.length) * 100);
    const showAdminStats = state.currentUser.username === "admin" || state.currentUser.username === "hr";
    
    return `
      <div class="announcement-item ${read ? 'read' : 'unread'} ${n.mandatory ? 'mandatory' : ''}">
        <div class="announcement-icon-badge">
          <span class="material-symbols-outlined">
            ${n.category === 'quyet-dinh' ? 'gavel' : 'campaign'}
          </span>
        </div>
        <div class="announcement-text-area">
          <div class="announcement-title-row">
            <h4 onclick="showNewsDetail(${n.id})">${n.title}</h4>
            <span class="badge ${n.category === 'quyet-dinh' ? 'badge-purple' : 'badge-primary'}">${n.catLabel}</span>
            ${n.mandatory ? `<span class="badge badge-danger">BẮT BUỘC ĐỌC</span>` : ''}
            ${read ? `<span class="badge badge-success"><span class="material-symbols-outlined" style="font-size:12px;">done</span> Đã đọc</span>` : `<span class="badge badge-neutral">Chưa đọc</span>`}
          </div>
          <p class="announcement-excerpt">${n.excerpt}</p>
          <div class="announcement-meta-row">
            <span><span class="material-symbols-outlined">person</span> Ban hành: <strong>${n.author}</strong></span>
            <span><span class="material-symbols-outlined">schedule</span> ${n.date}</span>
            ${n.attachments.length > 0 ? `<span><span class="material-symbols-outlined">attach_file</span> ${n.attachments.length} đính kèm</span>` : ''}
          </div>
        </div>
        
        <div class="announcement-actions-area">
          ${showAdminStats ? `
            <div class="read-ratio-indicator" onclick="showReadRatio(${n.id})">
              <span class="material-symbols-outlined" style="font-size:16px;">analytics</span> Tỷ lệ đọc: ${readRatioVal}%
            </div>
          ` : ''}
          <button class="btn btn-outline btn-sm" onclick="showNewsDetail(${n.id})">Đọc thông báo</button>
        </div>
      </div>
    `;
  }).join('');
}

function filterAnnouncements() {
  renderAnnouncements();
}

// Check and trigger mandatory announcement popup on view load
function checkMandatoryAnnouncements() {
  const unreadMandatory = state.news.find(n => n.mandatory && !n.readBy.includes(state.currentUser.username));
  const alertEl = document.getElementById("dashboardMandatoryAlert");
  const alertText = document.getElementById("mandatoryAlertText");
  
  if (unreadMandatory) {
    alertEl.style.display = "flex";
    alertText.textContent = `"${unreadMandatory.title}"`;
    
    // Automatically trigger popup modal for mandatory announcement
    showLatestMandatoryAnnounce(unreadMandatory.id);
  } else {
    alertEl.style.display = "none";
  }
}

let activeMandatoryAnnounceId = null;

function showLatestMandatoryAnnounce(id = null) {
  let targetPost = null;
  if (id) {
    targetPost = state.news.find(n => n.id === id);
  } else {
    targetPost = state.news.find(n => n.mandatory && !n.readBy.includes(state.currentUser.username));
  }
  
  if (!targetPost) return;
  
  activeMandatoryAnnounceId = targetPost.id;
  
  document.getElementById("mandatoryAnnounceModalBody").innerHTML = `
    <h2 style="font-size: 1.4rem; font-weight: 800; line-height: 1.35; margin-bottom: 12px; color: #e11d48;">${targetPost.title}</h2>
    <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 20px;">
      Ban hành: <strong>${targetPost.author} (${targetPost.role})</strong> — Ngày ${targetPost.date}
    </div>
    <div style="background: white; padding: 20px; border: 1px solid var(--border); border-radius: 8px; font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); max-height: 350px; overflow-y: auto;">
      ${targetPost.content}
    </div>
    ${targetPost.attachments.length > 0 ? `
      <div style="margin-top: 16px;">
        <h4 style="font-size: 0.9rem; margin-bottom: 8px;">Văn bản đính kèm bắt buộc nghiên cứu:</h4>
        <div class="attachment-item">
          <span class="material-symbols-outlined">picture_as_pdf</span>
          <span style="font-weight:600;">${targetPost.attachments[0].name}</span>
          <button class="btn btn-outline btn-sm" onclick="showToast('Đã tải tài liệu khẩn', 'success')" style="margin-left:auto;"><span class="material-symbols-outlined" style="font-size:14px;">download</span> Tải xuống</button>
        </div>
      </div>
    ` : ''}
  `;
  
  openModal("modalMandatoryAnnounce");
}

function confirmMandatoryReadAction() {
  if (!activeMandatoryAnnounceId) return;
  
  const post = state.news.find(n => n.id === activeMandatoryAnnounceId);
  if (post && !post.readBy.includes(state.currentUser.username)) {
    post.readBy.push(state.currentUser.username);
    saveState("news", state.news);
  }
  
  closeModal("modalMandatoryAnnounce");
  showToast("Bạn đã xác nhận đã đọc thông báo này thành công", "success");
  
  // Refresh views
  checkMandatoryAnnouncements();
  renderDashboard();
  renderAnnouncements();
}

// Show Read Ratio Admin Modal
function showReadRatio(newsId) {
  const post = state.news.find(n => n.id === newsId);
  if (!post) return;
  
  document.getElementById("readRatioModalTitle").textContent = post.title;
  
  const readList = document.getElementById("readRatioModalReadList");
  const unreadList = document.getElementById("readRatioModalUnreadList");
  
  const readUsers = DIRECTORY.filter(s => {
    // Match simulated username from directory
    const userObj = Object.values(USERS).find(u => u.name === s.name);
    const username = userObj ? userObj.username : s.name.toLowerCase().replace(/\s/g, '');
    return post.readBy.includes(username);
  });
  
  const unreadUsers = DIRECTORY.filter(s => {
    const userObj = Object.values(USERS).find(u => u.name === s.name);
    const username = userObj ? userObj.username : s.name.toLowerCase().replace(/\s/g, '');
    return !post.readBy.includes(username);
  });
  
  document.getElementById("readRatioModalReadCount").textContent = readUsers.length;
  document.getElementById("readRatioModalUnreadCount").textContent = unreadUsers.length;
  
  readList.innerHTML = readUsers.map(u => `
    <div class="read-user-list-item">
      <div class="avatar sm" style="width: 22px; height: 22px; font-size: 0.65rem; background: ${u.color}; color: white;">${u.initials}</div>
      <div>
        <div style="font-weight:600;">${u.name}</div>
        <div style="font-size:0.75rem; color:var(--text-muted);">${u.title} - ${u.dept}</div>
      </div>
    </div>
  `).join('');
  
  unreadList.innerHTML = unreadUsers.map(u => `
    <div class="read-user-list-item" style="opacity: 0.7;">
      <div class="avatar sm" style="width: 22px; height: 22px; font-size: 0.65rem; background: var(--text-muted); color: white;">${u.initials}</div>
      <div>
        <div style="font-weight:600; color:var(--text-secondary);">${u.name}</div>
        <div style="font-size:0.75rem; color:var(--text-muted);">${u.title} - ${u.dept}</div>
      </div>
    </div>
  `).join('');
  
  openModal("modalReadRatio");
}

// ==========================================
// 6. MODULE: VĂN BẢN NỘI BỘ (DOCUMENTS)
// ==========================================

// Quyền quản trị văn bản (được Admin cấp qua quyền "Đăng VB") — cho phép xóa VB.
function canManageDocs() {
  return !!(state.currentUser && (state.currentUser.username === "admin" ||
    (state.currentUser.permissions && (state.currentUser.permissions.isAdmin || state.currentUser.permissions.canUploadDocs))));
}

function deleteDocument(id) {
  if (!canManageDocs()) { showToast("Bạn không có quyền xóa văn bản", "error"); return; }
  const doc = state.documents.find(d => d.id === id);
  if (!doc) return;
  if (!confirm(`Xóa văn bản "${doc.title}" (${doc.code})?`)) return;
  if (doc.file && doc.file.dataKey) idbDel(doc.file.dataKey).catch(() => {}); // dọn tệp trong IndexedDB
  state.documents = state.documents.filter(d => d.id !== id);
  saveState("documents", state.documents);
  renderDocuments();
  renderDashboard();
  showToast("Đã xóa văn bản nội bộ", "success");
}

function renderDocuments() {
  const tbody = document.getElementById("documentsTableBody");
  const query = document.getElementById("searchDocQuery").value.trim().toLowerCase();
  const docType = document.getElementById("filterDocType").value;
  const docDept = document.getElementById("filterDocDept").value;

  // Show/hide upload button based on permission
  const uploadBtn = document.getElementById("docUploadBtn");
  const canManage = canManageDocs();
  if (uploadBtn) {
    const canUpload = state.currentUser.username === 'admin' || (state.currentUser.permissions && state.currentUser.permissions.canUploadDocs);
    uploadBtn.style.display = canUpload ? 'block' : 'none';
  }
  
  let list = state.documents;
  
  if (docType !== "all") {
    list = list.filter(d => d.type === docType);
  }
  if (docDept !== "all") {
    list = list.filter(d => d.dept === docDept);
  }
  if (query) {
    list = list.filter(d => d.title.toLowerCase().includes(query) || d.code.toLowerCase().includes(query) || (d.desc && d.desc.toLowerCase().includes(query)));
  }
  
  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; padding: 32px; color: var(--text-muted);">
          <span class="material-symbols-outlined" style="font-size: 2.5rem; margin-bottom: 8px;">folder_off</span>
          <p>Không tìm thấy văn bản tài liệu nào phù hợp</p>
        </td>
      </tr>
    `;
    return;
  }
  
  tbody.innerHTML = list.map(d => `
    <tr>
      <td><strong style="color:var(--primary); font-family:monospace;">${d.code}</strong></td>
      <td style="max-width:320px; font-weight:600; cursor:pointer;" onclick="showDocDetail(${d.id})">${d.title}</td>
      <td><span class="badge ${d.type === 'Quy định & Quy chế' ? 'badge-primary' : d.type === 'Quy trình' ? 'badge-success' : d.type === 'Biểu mẫu' ? 'badge-warning' : d.type === 'Chính sách' ? 'badge-purple' : d.type === 'Quyết định & Văn bản chỉ đạo' ? 'badge-danger' : 'badge-cyan'}">${d.type}</span></td>
      <td><span class="version-badge">${d.versions && d.versions[0] ? d.versions[0].version : 'v1.0'}</span></td>
      <td>${d.date}</td>
      <td>${d.dept}</td>
      <td>
        <a href="#" onclick="downloadDocumentFile(${d.id}); event.preventDefault();" style="display:flex; align-items:center; gap:4px; font-weight:500;">
          <span class="material-symbols-outlined" style="font-size:18px; color:var(--danger)">picture_as_pdf</span>
          Tải về
        </a>
      </td>
      <td>
        <div style="display:flex; gap:6px; align-items:center;">
          <button class="btn btn-outline btn-sm" onclick="showDocDetail(${d.id})">Chi tiết</button>
          ${canManage ? `<button class="btn btn-outline btn-sm" onclick="deleteDocument(${d.id})" title="Xóa văn bản" style="color:var(--danger); border-color:#fecaca; padding:4px 8px;"><span class="material-symbols-outlined" style="font-size:16px;">delete</span></button>` : ''}
        </div>
      </td>
    </tr>
  `).join('');
}

function openNewDocModal() {
  document.getElementById("formNewDoc").reset();
  
  // Populate category select options dynamically from state.docCategories
  const select = document.getElementById("newDocCategorySelect");
  if (select) {
    select.innerHTML = state.docCategories.map(c => `<option value="${c}">${c}</option>`).join('');
  }
  
  openModal("modalNewDoc");
}

function submitNewDoc() {
  const title = document.getElementById("newDocTitle").value.trim();
  const code = document.getElementById("newDocCode").value.trim();
  const type = document.getElementById("newDocCategorySelect").value;
  const version = document.getElementById("newDocVersion").value.trim() || "v1.0";
  const desc = document.getElementById("newDocDesc").value.trim();
  const fileInput = document.getElementById("newDocFile");
  
  if (!title || !code || !type) {
    showToast("Vui lòng nhập đầy đủ các trường thông tin bắt buộc", "warning");
    return;
  }
  
  let fileName = code.replace(/\//g, "_") + "_Document.pdf";
  let sizeStr = "1.2 MB";
  let fileDataKey = null;

  if (fileInput && fileInput.dataset.fileJson) {
    const fileObj = JSON.parse(fileInput.dataset.fileJson);
    fileName = fileObj.name;
    sizeStr = fileObj.size;
    fileDataKey = fileObj.dataKey; // IndexedDB reference to the real file
  } else if (fileInput && fileInput.files && fileInput.files[0]) {
    // If dataset is not ready but files are present (fallback)
    fileName = fileInput.files[0].name;
    const file = fileInput.files[0];
    if (file.size < 1024) sizeStr = file.size + " B";
    else if (file.size < 1024 * 1024) sizeStr = (file.size / 1024).toFixed(0) + " KB";
    else sizeStr = (file.size / (1024 * 1024)).toFixed(1) + " MB";
  }
  
  const now = new Date();
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  
  const newDoc = {
    id: state.documents.length + 1,
    title: title,
    code: code,
    type: type,
    versions: [{ version: version, date: dateStr, note: "Bản ban hành đầu tiên", author: state.currentUser.name }],
    date: dateStr,
    dept: state.currentUser.dept || "Ban Giám đốc",
    desc: desc,
    file: {
      name: fileName,
      size: sizeStr,
      dataKey: fileDataKey // IndexedDB reference to the real file content
    }
  };

  state.documents.unshift(newDoc);
  if (!saveState("documents", state.documents)) {
    state.documents.shift(); // roll back so we never show an unsavable document
    return;
  }
  renderDocuments();
  closeModal("modalNewDoc");
  showToast("Tải lên tài liệu mới thành công", "success");
  
  // Reset form and label state
  document.getElementById("formNewDoc").reset();
  if (fileInput) delete fileInput.dataset.fileJson;
  const docLabel = document.getElementById("newDocFileLabel");
  if (docLabel) docLabel.textContent = "Kéo thả file PDF văn bản hoặc Click để tải lên";
}

function filterDocuments() {
  renderDocuments();
}

function filterDocsByCategory(categoryKey) {
  const mapping = {
    'quyet-dinh-chi-dao': 'Quyết định & Văn bản chỉ đạo',
    'quy-dinh-quy-che': 'Quy định & Quy chế',
    'quy-trinh': 'Quy trình',
    'bieu-mau': 'Biểu mẫu',
    'chinh-sach': 'Chính sách',
    'huong-dan-dao-tao': 'Hướng dẫn & Tài liệu đào tạo'
  };
  
  const typeStr = mapping[categoryKey] || 'all';
  const filterSelect = document.getElementById("filterDocType");
  if (filterSelect) {
    filterSelect.value = typeStr;
  }
  filterDocuments();
}

function showDocDetail(id) {
  const doc = state.documents.find(d => d.id === id);
  if (!doc) return;
  
  document.getElementById("docDetailTypeBadge").textContent = doc.type;
  document.getElementById("docDetailTypeBadge").className = `badge ${doc.type === 'Quy định & Quy chế' ? 'badge-primary' : doc.type === 'Quy trình' ? 'badge-success' : doc.type === 'Biểu mẫu' ? 'badge-warning' : doc.type === 'Chính sách' ? 'badge-purple' : doc.type === 'Quyết định & Văn bản chỉ đạo' ? 'badge-danger' : 'badge-cyan'}`;
  document.getElementById("docDetailVersion").textContent = doc.versions[0].version;
  document.getElementById("docDetailTitle").textContent = doc.title;
  document.getElementById("docDetailCode").textContent = doc.code;
  document.getElementById("docDetailDate").textContent = doc.date;
  document.getElementById("docDetailApprover").textContent = doc.approver;
  document.getElementById("docDetailDept").textContent = doc.dept;
  document.getElementById("docDetailDesc").textContent = doc.desc;
  
  // Render attached file
  document.getElementById("docDetailFilesList").innerHTML = `
    <div class="attachment-item" style="background:#fff;">
      <span class="material-symbols-outlined">picture_as_pdf</span>
      <span style="font-weight:600;">${doc.file.name}</span>
      <span style="color:var(--text-muted)">(${doc.file.size})</span>
      <button class="btn btn-primary btn-sm" onclick="downloadDocumentFile(${doc.id})" style="margin-left:auto;"><span class="material-symbols-outlined" style="font-size:14px;">download</span> Tải xuống</button>
    </div>
  `;
  
  // Render version timeline tree
  const timeline = document.getElementById("docDetailVersionTimeline");
  timeline.innerHTML = doc.versions.map((v, idx) => `
    <div class="version-history-node ${idx === 0 ? 'latest' : ''}">
      <div class="version-header-row">
        <span>Phiên bản <strong>${v.version}</strong></span>
        <span style="font-size:0.75rem; color:var(--text-muted)">${v.date} — Người soạn: ${v.author}</span>
      </div>
      <div class="version-body-text">${v.changeLog}</div>
    </div>
  `).join('');
  
  openModal("modalDocDetail");
}

// Removed duplicate submitNewDoc function to prevent conflict

// ==========================================
// 7. MODULE: ĐĂNG KÝ & PHÊ DUYỆT (REGISTRATIONS)
// ==========================================

// Dựng ô nhập cho từng trường đã định nghĩa của thủ tục.
function renderProcFieldInput(f) {
  const req = f.required ? "required" : "";
  const star = f.required ? " *" : "";
  const domId = "reqfield_" + f.id;
  let input;
  if (f.type === "textarea") {
    input = `<textarea id="${domId}" rows="2" ${req}></textarea>`;
  } else if (f.type === "select") {
    const opts = (f.options || []).map(o => `<option value="${o}">${o}</option>`).join("");
    input = `<select id="${domId}" ${req}>${opts}</select>`;
  } else {
    const t = ["date", "number", "time", "text"].includes(f.type) ? f.type : "text";
    input = `<input type="${t}" id="${domId}" ${t === "number" ? 'min="0"' : ''} ${req}>`;
  }
  return `<div class="form-group"><label for="${domId}">${f.label}${star}</label>${input}</div>`;
}

function toggleRequestFormFields() {
  const type = document.getElementById("newRequestType").value;
  const container = document.getElementById("requestFieldsContainer");
  if (!container) return;

  const def = state.procedureDefs[type];
  let html = "";

  // Mô tả luồng nghiệp vụ của thủ tục (nếu có)
  if (def && def.description) {
    html += `<div style="padding:10px; background:#eff6ff; color:#1e40af; font-size:0.8rem; border-radius:6px; margin-bottom:12px; font-weight:500; display:flex; gap:6px; align-items:flex-start;">
      <span class="material-symbols-outlined" style="font-size:16px;">account_tree</span>
      <span>${def.description}</span>
    </div>`;
  }

  // Các trường được định nghĩa động
  if (def && def.fields && def.fields.length) {
    html += def.fields.map(renderProcFieldInput).join("");
  } else {
    html += `<div style="padding:10px; background:#f0fdf4; color:#166534; font-size:0.8rem; border-radius:6px; margin-bottom:12px; font-weight:500;">
      Thủ tục chưa cấu hình trường riêng. Vui lòng nhập chi tiết vào phần nội dung bên dưới.
    </div>`;
  }
  container.innerHTML = html;

  // Preview luồng phê duyệt
  const preview = document.getElementById("newRequestWorkflowPreview");
  if (preview) {
    const config = state.procedureWorkflows[type] || [];
    if (config.length > 0) {
      preview.textContent = "Bắt đầu → " + config.map(c => `${c.stepName} (${c.approverName})`).join(' → ') + " → Hoàn thành";
    } else {
      preview.textContent = "Bắt đầu → Phê duyệt Hành chính (Nguyễn Văn An) → Hoàn thành";
    }
  }
}

function renderRequests() {
  renderMyRequests();
  renderPendingApprovals();
}

function renderMyRequests() {
  const tbody = document.getElementById("myRequestsTableBody");
  const filterVal = document.getElementById("filterMyRequestStatus").value;
  
  let list = state.requests.filter(r => r.user === state.currentUser.username);
  
  if (filterVal !== "all") {
    list = list.filter(r => r.status === filterVal);
  }
  
  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 24px; color: var(--text-muted);">Bạn chưa gửi đơn đăng ký nào</td>
      </tr>
    `;
    return;
  }
  
  tbody.innerHTML = list.map(r => `
    <tr>
      <td>
        <span class="badge ${r.type === 'Nghỉ phép' ? 'badge-danger' : r.type === 'Xe công' ? 'badge-warning' : r.type === 'Phòng họp' ? 'badge-primary' : 'badge-success'}">
          ${r.type}
        </span>
        ${r.status === 'approved' && r.slipCode ? `<div style="font-size:0.7rem; color:var(--primary); font-weight:700; margin-top:4px; font-family:monospace;">${r.slipCode}</div>` : ''}
      </td>
      <td>${r.date}</td>
      <td style="max-width:260px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${r.content}</td>
      <td>
        <div class="workflow-timeline">
          ${r.workflow.map((w, idx) => `
            ${idx > 0 ? '<span class="wf-arrow">→</span>' : ''}
            <span class="wf-step ${w.action === 'approve' || w.action === 'submit' ? 'approved' : w.action === 'pending' ? 'pending' : 'rejected'}" title="${w.step}: ${w.actor}">
              ${w.step.split(' ').pop()}
            </span>
          `).join('')}
        </div>
      </td>
      <td>
        <span class="badge ${r.status === 'approved' ? 'badge-success' : r.status === 'pending' ? 'badge-warning' : 'badge-danger'}">
          ${r.status === 'approved' ? 'Đã duyệt' : r.status === 'pending' ? 'Chờ duyệt' : 'Từ chối'}
        </span>
      </td>
      <td>
        <div style="display:flex; gap:6px;">
          <button class="btn btn-outline btn-sm btn-icon-only" onclick="showRequestDetail(${r.id})" title="Xem chi tiết"><span class="material-symbols-outlined" style="font-size:16px;">visibility</span></button>
          ${r.status === 'approved' ? `<button class="btn btn-outline btn-sm btn-icon-only" onclick="printApprovalSlip(${r.id})" title="In phiếu phê duyệt" style="color:var(--primary);"><span class="material-symbols-outlined" style="font-size:16px;">print</span></button>` : ''}
        </div>
      </td>
    </tr>
  `).join('');
}

function renderPendingApprovals() {
  const container = document.getElementById("pendingApprovalsContainer");
  const navBadge = document.getElementById("badgePendingApprovalsCount");
  
  const isUserAdmin = state.currentUser.username === "admin" || (state.currentUser.permissions && state.currentUser.permissions.isAdmin);
  const canManageProcs = state.currentUser.permissions && state.currentUser.permissions.canManageProcedures;
  
  // Filter pending approvals where current user is the current active actor in workflow (or admin / canManageProcs)
  const unreadApprovals = state.requests.filter(r => {
    if (r.status !== "pending") return false;
    
    const pendingStep = r.workflow.find(w => w.action === "pending");
    if (!pendingStep) return false;
    
    if (isUserAdmin) return true;
    
    // Check if designated approver matches current user
    const matchesUser = pendingStep.approverKey === state.currentUser.username || pendingStep.actor === state.currentUser.name;
    if (matchesUser) return true;
    
    // If user has canManageProcedures permission, allow them to approve
    if (canManageProcs && pendingStep.approverKey === state.currentUser.username) return true;
    
    return false;
  });
  
  const pendingCount = unreadApprovals.length;
  const kpiPendingEl = document.getElementById("kpiPendingApprovals");
  if (kpiPendingEl) kpiPendingEl.textContent = pendingCount;

  const isUserStaff = state.currentUser.username === "staff" && (!state.currentUser.permissions || (!state.currentUser.permissions.isAdmin && !state.currentUser.permissions.canManageProcedures));
  
  if (isUserStaff && unreadApprovals.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 24px; color: var(--text-muted); font-size: 0.9rem;">
        <span class="material-symbols-outlined" style="font-size:2.5rem; display:block; margin-bottom:8px;">shield_lock</span>
        Bạn không có quyền hạn phê duyệt thủ tục đăng ký.
      </div>
    `;
    if (navBadge) navBadge.style.display = "none";
    return;
  }
  
  if (pendingCount > 0) {
    if (navBadge) {
      navBadge.style.display = "inline-block";
      navBadge.textContent = pendingCount;
    }
    const badgeHeader = document.getElementById("pendingApprovalsBadgeHeader");
    if (badgeHeader) {
      badgeHeader.style.display = "inline-flex";
      badgeHeader.textContent = `${pendingCount} đơn`;
    }
  } else {
    if (navBadge) navBadge.style.display = "none";
    const badgeHeader = document.getElementById("pendingApprovalsBadgeHeader");
    if (badgeHeader) badgeHeader.style.display = "none";
  }
  
  if (unreadApprovals.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 24px; color: var(--text-muted); font-size: 0.9rem;">
        <span class="material-symbols-outlined" style="font-size:2.5rem; display:block; margin-bottom:8px;">check_circle</span>
        Tuyệt vời! Không còn hồ sơ nào cần bạn phê duyệt.
      </div>
    `;
    return;
  }
  
  container.innerHTML = unreadApprovals.map(r => {
    const currentStep = r.workflow.find(w => w.action === "pending");
    const stepLabel = currentStep ? `[Bước: ${currentStep.step}]` : '';
    
    return `
      <div class="card" style="padding:16px; border-color:var(--warning-light);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <span class="badge ${r.type === 'Nghỉ phép' || r.type === 'Nghỉ phép năm' ? 'badge-danger' : r.type === 'Xe công' || r.type === 'Đăng ký xe công vụ' ? 'badge-warning' : r.type === 'Phòng họp' || r.type === 'Đăng ký phòng họp' ? 'badge-primary' : 'badge-success'}">${r.type}</span>
          <span style="font-size:0.75rem; color:var(--text-muted);">${r.date}</span>
        </div>
        <div style="font-size:0.9rem; font-weight:700; margin-bottom:4px;">Người gửi: ${r.userName} (${r.dept})</div>
        <div style="font-size:0.75rem; color:var(--primary); font-weight:600; margin-bottom:6px;">${stepLabel}</div>
        <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.4; margin-bottom:12px;">${r.content}</p>
        
        <div style="display:flex; gap:8px; border-top:1px solid var(--border-light); padding-top:12px;">
          <button class="btn btn-success btn-sm" onclick="approveRequest(${r.id}, 'approved')" style="flex:1;"><span class="material-symbols-outlined" style="font-size:14px;">done</span> Duyệt đơn</button>
          <button class="btn btn-danger btn-sm" onclick="approveRequest(${r.id}, 'rejected')" style="flex:1;"><span class="material-symbols-outlined" style="font-size:14px;">close</span> Từ chối</button>
        </div>
      </div>
    `;
  }).join('');
}

function showRequestDetail(id) {
  const r = state.requests.find(req => req.id === id);
  if (!r) return;
  
  document.getElementById("reqDetailType").textContent = r.type;
  document.getElementById("reqDetailUser").textContent = r.userName;
  document.getElementById("reqDetailDate").textContent = r.date;
  document.getElementById("reqDetailStatus").textContent = r.status === "approved" ? "Đã duyệt" : r.status === "pending" ? "Chờ duyệt" : "Từ chối";
  document.getElementById("reqDetailContent").textContent = r.content;

  // Mã số phiếu + nút in (chỉ khi ĐÃ DUYỆT)
  const slipBox = document.getElementById("reqDetailSlipBox");
  const printBtn = document.getElementById("btnPrintSlip");
  if (r.status === "approved") {
    if (!r.slipCode) { r.slipCode = generateSlipCode(r); saveState("requests", state.requests); }
    if (slipBox) {
      slipBox.style.display = "flex";
      document.getElementById("reqDetailSlipCode").textContent = r.slipCode;
    }
    if (printBtn) { printBtn.style.display = "inline-flex"; printBtn.onclick = () => printApprovalSlip(r.id); }
  } else {
    if (slipBox) slipBox.style.display = "none";
    if (printBtn) printBtn.style.display = "none";
  }
  
  // Render workflow detailed history
  const container = document.getElementById("reqDetailWorkflowHistory");
  container.innerHTML = r.workflow.map(w => `
    <div class="wf-history-step">
      <span class="material-symbols-outlined wf-history-status-icon ${w.action === 'approve' || w.action === 'submit' ? 'done' : w.action === 'pending' ? 'pending' : 'rejected'}">
        ${w.action === 'approve' || w.action === 'submit' ? 'check_circle' : w.action === 'pending' ? 'schedule' : 'cancel'}
      </span>
      <div class="wf-history-info">
        <div style="display:flex; justify-content:space-between;">
          <strong>${w.step}: ${w.actor}</strong>
          <span style="font-size:0.75rem; color:var(--text-muted);">${w.date || 'Đang đợi'}</span>
        </div>
        <p style="font-size:0.8rem; color:var(--text-secondary); margin-top:2px;">${w.comment || '(Không có ý kiến)'}</p>
      </div>
    </div>
  `).join('');
  
  openModal("modalRequestDetail");
}

function submitNewRequest() {
  const type = document.getElementById("newRequestType").value;
  const reason = document.getElementById("newRequestReason").value.trim();
  
  if (!reason) {
    showToast("Vui lòng nhập lý do và nội dung đề xuất đăng ký", "warning");
    return;
  }
  
  const now = new Date();
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  
  let details = {};
  const def = state.procedureDefs[type];
  const summaryParts = [];

  if (def && def.fields && def.fields.length) {
    // Thu thập giá trị các trường đã định nghĩa của thủ tục
    for (const f of def.fields) {
      const el = document.getElementById("reqfield_" + f.id);
      const val = el ? String(el.value).trim() : "";
      if (f.required && !val) {
        showToast(`Vui lòng nhập: ${f.label}`, "warning");
        return;
      }
      details[f.id] = val;
      if (val) summaryParts.push(`${f.label}: ${val}`);
    }
  }
  details.reason = reason;

  const content = `[${type}] ${summaryParts.join("; ")}${summaryParts.length ? ". " : ""}Lý do: ${reason}`;
  
  // Construct workflow steps dynamically from state.procedureWorkflows
  const workflow = [
    { step: "Gửi yêu cầu", actor: state.currentUser.name, action: "submit", date: dateStr + " " + timeStr, comment: reason }
  ];
  
  const configSteps = state.procedureWorkflows[type] || [];
  if (configSteps.length > 0) {
    configSteps.forEach(step => {
      workflow.push({
        step: step.stepName,
        actor: step.approverName,
        approverKey: step.approverKey,
        action: "pending",
        date: "",
        comment: ""
      });
    });
  } else {
    // Default fallback workflow: Admin approves
    workflow.push({
      step: "Phê duyệt Hành chính",
      actor: "Nguyễn Văn An",
      approverKey: "admin",
      action: "pending",
      date: "",
      comment: ""
    });
  }
  
  const newReq = {
    id: state.requests.length + 1,
    user: state.currentUser.username,
    userName: state.currentUser.name,
    dept: state.currentUser.dept,
    type: type,
    date: dateStr,
    content: content,
    status: "pending",
    workflow: workflow,
    details: details
  };
  
  state.requests.unshift(newReq);
  saveState("requests", state.requests);
  
  closeModal("modalNewRequest");
  showToast("Đã gửi tờ trình đăng ký phê duyệt thành công!", "success");
  
  document.getElementById("formNewRequest").reset();
  renderRequests();
  renderDashboard();
}

function approveRequest(id, actionType) {
  const req = state.requests.find(r => r.id === id);
  if (!req) return;
  
  const now = new Date();
  const timeStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  
  // Find the step currently pending
  const pendingIndex = req.workflow.findIndex(w => w.action === "pending");
  if (pendingIndex === -1) return;
  
  const pendingStep = req.workflow[pendingIndex];
  
  if (actionType === "approved") {
    pendingStep.action = "approve";
    pendingStep.actor = state.currentUser.name;
    pendingStep.date = timeStr;
    pendingStep.comment = "Đồng ý phê duyệt đề xuất.";
    
    // Check if there is a next pending step
    const hasNextStep = req.workflow.slice(pendingIndex + 1).some(w => w.action === "pending");
    if (!hasNextStep) {
      // Last step approved -> complete workflow
      req.status = "approved";
      // Cấp MÃ SỐ PHIẾU thủ tục để tra cứu / in hồ sơ (chỉ cấp 1 lần)
      if (!req.slipCode) req.slipCode = generateSlipCode(req);
      req.approvedDate = timeStr;
    } else {
      // Workflow still in progress
      req.status = "pending";
    }
  } else {
    // Rejected
    pendingStep.action = "reject";
    pendingStep.actor = state.currentUser.name;
    pendingStep.date = timeStr;
    pendingStep.comment = "Không đồng ý phê duyệt.";
    req.status = "rejected";
    
    // Cancel any subsequent pending steps
    for (let i = pendingIndex + 1; i < req.workflow.length; i++) {
      if (req.workflow[i].action === "pending") {
        req.workflow[i].action = "rejected";
        req.workflow[i].comment = "Luồng duyệt bị gián đoạn.";
      }
    }
  }
  
  saveState("requests", state.requests);
  showToast(actionType === "approved" ? "Đã phê duyệt đề xuất!" : "Đã từ chối đề xuất.", actionType === "approved" ? "success" : "danger");
  
  // Add notification to employee
  state.notifications.unshift({
    id: state.notifications.length + 1,
    title: req.status === "approved" ? "Yêu cầu đã được phê duyệt hoàn tất" : req.status === "rejected" ? "Yêu cầu bị từ chối" : "Yêu cầu đã qua bước duyệt tiếp theo",
    desc: `Yêu cầu xin ${req.type} của bạn đã được cập nhật bởi ${state.currentUser.name}.`,
    time: "Vừa xong",
    type: req.status === "approved" ? "success" : req.status === "rejected" ? "warning" : "info",
    unread: true,
    link: "requests"
  });
  saveState("notifications", state.notifications);
  renderNotificationsPanel();
  
  renderRequests();
  renderDashboard();
}

// Mã số phiếu thủ tục để tra cứu / in hồ sơ, VD: PTT-2026-0007
function generateSlipCode(req) {
  const y = new Date().getFullYear();
  return `PTT-${y}-${String(req.id).padStart(4, "0")}`;
}

function escapeHtmlBasic(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// In "Phiếu phê duyệt thủ tục" cho hồ sơ ĐÃ DUYỆT (phục vụ lưu hồ sơ, thanh toán nội bộ).
function printApprovalSlip(id) {
  const r = state.requests.find(req => req.id === id);
  if (!r) return;
  if (r.status !== "approved") { showToast("Chỉ in được phiếu cho hồ sơ ĐÃ DUYỆT.", "warning"); return; }
  if (!r.slipCode) { r.slipCode = generateSlipCode(r); saveState("requests", state.requests); }

  // Bảng thông tin trường dữ liệu (theo định nghĩa thủ tục)
  const def = state.procedureDefs[r.type];
  let rows = "";
  if (def && def.fields && r.details) {
    rows = def.fields
      .filter(f => r.details[f.id] !== undefined && r.details[f.id] !== "")
      .map(f => `<tr><td class="lbl">${escapeHtmlBasic(f.label)}</td><td>${escapeHtmlBasic(r.details[f.id])}</td></tr>`)
      .join("");
  }
  if (r.details && r.details.reason) rows += `<tr><td class="lbl">Lý do</td><td>${escapeHtmlBasic(r.details.reason)}</td></tr>`;
  if (!rows) rows = `<tr><td colspan="2">${escapeHtmlBasic(r.content)}</td></tr>`;

  const statusLabel = w => w.action === "approve" ? "Đã duyệt" : w.action === "submit" ? "Đã gửi" : w.action === "pending" ? "Chờ" : "Từ chối";
  const stepsHtml = r.workflow.map(w =>
    `<tr><td>${escapeHtmlBasic(w.step)}</td><td>${escapeHtmlBasic(w.actor)}</td><td>${statusLabel(w)}</td><td>${escapeHtmlBasic(w.date || "")}</td><td>${escapeHtmlBasic(w.comment || "")}</td></tr>`
  ).join("");

  const approvers = r.workflow.filter(w => w.action === "approve" && w.action !== "submit" && w.step !== "Gửi yêu cầu");
  const signCols = approvers.map(a => `
    <td style="text-align:center; vertical-align:top; padding:8px;">
      <div style="font-weight:700;">${escapeHtmlBasic(a.step)}</div>
      <div style="font-size:11px; color:#555;">(Ký, ghi rõ họ tên)</div>
      <div style="height:60px;"></div>
      <div style="font-weight:700;">${escapeHtmlBasic(a.actor)}</div>
      <div style="font-size:11px; color:#555;">${escapeHtmlBasic(a.date || "")}</div>
    </td>`).join("");

  const html = `<!doctype html><html lang="vi"><head><meta charset="utf-8">
    <title>Phiếu phê duyệt ${escapeHtmlBasic(r.slipCode)}</title>
    <style>
      *{box-sizing:border-box} body{font-family:'Times New Roman',serif; color:#111; margin:28px; font-size:14px;}
      .hdr{display:flex; justify-content:space-between; align-items:flex-start; border-bottom:2px solid #111; padding-bottom:10px;}
      .company{font-weight:800; font-size:15px;} .sub{font-size:12px; color:#333;}
      .code-box{border:1.5px solid #111; padding:6px 12px; text-align:center;}
      .code-box .c{font-size:18px; font-weight:800; letter-spacing:1px;}
      h1{text-align:center; font-size:20px; margin:18px 0 4px; text-transform:uppercase;}
      .center-sub{text-align:center; font-size:12px; color:#444; margin-bottom:16px;}
      table{width:100%; border-collapse:collapse; margin-bottom:14px;}
      td,th{border:1px solid #999; padding:7px 9px; font-size:13px; vertical-align:top;}
      th{background:#f0f0f0; text-align:left;}
      td.lbl{width:34%; font-weight:700; background:#fafafa;}
      .meta td{border:none; padding:2px 0;}
      .sign td{border:none;}
      .foot{margin-top:8px; font-size:11px; color:#666; text-align:center;}
      @media print { body{margin:12mm;} .noprint{display:none;} }
      .noprint{position:fixed; top:10px; right:10px;}
      .btn{padding:8px 14px; border:none; border-radius:6px; background:#0284c7; color:#fff; font-size:13px; cursor:pointer;}
    </style></head><body>
    <div class="noprint"><button class="btn" onclick="window.print()">In phiếu</button></div>
    <div class="hdr">
      <div><div class="company">CÔNG TY ABC CORPORATION</div><div class="sub">Hệ thống eOffice — Cổng thông tin nội bộ</div></div>
      <div class="code-box"><div style="font-size:11px;">MÃ SỐ PHIẾU</div><div class="c">${escapeHtmlBasic(r.slipCode)}</div></div>
    </div>
    <h1>Phiếu phê duyệt thủ tục</h1>
    <div class="center-sub">(Phục vụ lưu hồ sơ &amp; thanh toán nội bộ)</div>
    <table class="meta">
      <tr><td style="width:50%;"><b>Loại thủ tục:</b> ${escapeHtmlBasic(r.type)}</td><td><b>Ngày gửi:</b> ${escapeHtmlBasic(r.date)}</td></tr>
      <tr><td><b>Người đề xuất:</b> ${escapeHtmlBasic(r.userName)}</td><td><b>Đơn vị:</b> ${escapeHtmlBasic(r.dept || "")}</td></tr>
      <tr><td><b>Trạng thái:</b> ĐÃ DUYỆT</td><td><b>Ngày duyệt:</b> ${escapeHtmlBasic(r.approvedDate || "")}</td></tr>
    </table>
    <table><tr><th colspan="2">Thông tin chi tiết đề xuất</th></tr>${rows}</table>
    <table>
      <tr><th>Bước</th><th>Người thực hiện</th><th>Kết quả</th><th>Thời gian</th><th>Ý kiến</th></tr>
      ${stepsHtml}
    </table>
    <table class="sign"><tr>${signCols || '<td style="text-align:center; padding:8px;">Người phê duyệt</td>'}</tr></table>
    <div class="foot">Phiếu được tạo tự động từ hệ thống eOffice. Mã số phiếu dùng để tra cứu hồ sơ: <b>${escapeHtmlBasic(r.slipCode)}</b>.</div>
    </body></html>`;

  const win = window.open("", "_blank", "width=840,height=920");
  if (!win) { showToast("Trình duyệt chặn cửa sổ in. Vui lòng cho phép popup rồi thử lại.", "error"); return; }
  win.document.open();
  win.document.write(html);
  win.document.close();
  win.focus();
  setTimeout(() => { try { win.print(); } catch (e) {} }, 350);
}

// ==========================================
// 8. MODULE: LỊCH (CALENDAR)
// ==========================================

// Chỉ Admin mới được sửa/xóa lịch/sự kiện.
function canManageCalendar() {
  return !!(state.currentUser && (state.currentUser.username === "admin" ||
    (state.currentUser.permissions && state.currentUser.permissions.isAdmin)));
}

function renderCalendar() {
  const container = document.getElementById("calendarWeeklyTableContainer");
  const monthTitle = document.getElementById("calendarMonthTitle");

  if (!container || !monthTitle) return;

  const canManage = canManageCalendar();

  // Find Monday of the selected calendar date
  const selectedDateObj = new Date(state.selectedCalendarDate);
  const dayOfWeek = selectedDateObj.getDay();
  const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  
  const monday = new Date(selectedDateObj);
  monday.setDate(selectedDateObj.getDate() + diffToMonday);
  
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  
  // Format title
  const formatDateStr = (d) => `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
  monthTitle.textContent = `Tuần: ${formatDateStr(monday)} - ${formatDateStr(sunday)}`;
  
  // Filter by type
  const filterType = document.getElementById("filterCalendarType") ? document.getElementById("filterCalendarType").value : "all";
  
  const today = new Date();
  const dayNames = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
  const typeLabels = { meeting: "Cuộc họp", event: "Sự kiện", birthday: "Sinh nhật", holiday: "Nghỉ lễ" };
  
  let tableRows = "";
  
  for (let i = 0; i < 7; i++) {
    const currentDay = new Date(monday);
    currentDay.setDate(monday.getDate() + i);
    const dateStr = `${currentDay.getFullYear()}-${String(currentDay.getMonth() + 1).padStart(2, '0')}-${String(currentDay.getDate()).padStart(2, '0')}`;
    
    const isToday = today.getDate() === currentDay.getDate() && 
                    today.getMonth() === currentDay.getMonth() && 
                    today.getFullYear() === currentDay.getFullYear();
    
    let dayEvents = state.calendar.filter(e => e.date === dateStr);
    if (filterType !== "all") {
      dayEvents = dayEvents.filter(e => e.type === filterType);
    }
    
    // Sort events by time
    dayEvents.sort((a, b) => {
      const timeA = a.time.split(" ")[0] || "99:99";
      const timeB = b.time.split(" ")[0] || "99:99";
      return timeA.localeCompare(timeB);
    });
    
    // Day group header row
    const dayName = dayNames[currentDay.getDay()];
    const dayFormatted = `${dayName}, ${String(currentDay.getDate()).padStart(2, '0')}/${String(currentDay.getMonth() + 1).padStart(2, '0')}/${currentDay.getFullYear()}`;
    
    tableRows += `
      <tr class="cal-day-header-row ${isToday ? 'today-row' : ''}">
        <td colspan="${canManage ? 7 : 6}">
          <span class="day-badge">
            <span class="material-symbols-outlined" style="font-size:16px;">calendar_today</span>
            ${dayFormatted}
            ${isToday ? '<span class="today-indicator">HÔM NAY</span>' : ''}
          </span>
        </td>
      </tr>
    `;
    
    if (dayEvents.length === 0) {
      tableRows += `
        <tr class="cal-empty-day-row">
          <td style="color: var(--text-muted); text-align: center; font-style: italic;">—</td>
          <td style="color: var(--text-muted); font-style: italic;">Không có lịch họp hoặc sự kiện</td>
          <td style="color: var(--text-muted); text-align: center;">—</td>
          <td style="color: var(--text-muted); text-align: center;">—</td>
          <td style="color: var(--text-muted); text-align: center;">—</td>
          <td style="color: var(--text-muted); text-align: center;">—</td>
          ${canManage ? '<td style="color: var(--text-muted); text-align: center;">—</td>' : ''}
        </tr>
      `;
    } else {
      // Event rows for this day
      dayEvents.forEach(e => {
        tableRows += `
          <tr>
            <td><span class="cal-table-time">${e.time}</span></td>
            <td>
              <div class="cal-table-content">${e.title}</div>
              <span class="cal-table-type-badge ${e.type}">${typeLabels[e.type] || e.type}</span>
            </td>
            <td class="cal-table-chairman">${e.chairman || '—'}</td>
            <td class="cal-table-participants">${e.guests || '—'}</td>
            <td>
              <div class="cal-table-room">
                <span class="material-symbols-outlined">location_on</span>
                ${e.location}
              </div>
            </td>
            <td class="cal-table-note">${e.note || '—'}</td>
            ${canManage ? `
            <td>
              <div class="cal-event-actions">
                <button class="cal-act-btn edit" onclick="editEvent(${e.id})" title="Sửa lịch/sự kiện"><span class="material-symbols-outlined" style="font-size:18px;">edit</span></button>
                <button class="cal-act-btn del" onclick="deleteEvent(${e.id})" title="Xóa lịch/sự kiện"><span class="material-symbols-outlined" style="font-size:18px;">delete</span></button>
              </div>
            </td>` : ''}
          </tr>
        `;
      });
    }
  }
  
  container.innerHTML = `
    <table class="calendar-weekly-table">
      <thead>
        <tr>
          <th style="width: 120px;">Thời gian</th>
          <th style="min-width: 220px;">Nội dung</th>
          <th style="width: 180px;">Người chủ trì</th>
          <th style="width: 200px;">Tham gia</th>
          <th style="width: 180px;">Phòng họp</th>
          <th style="width: 180px;">Ghi chú</th>
          ${canManage ? '<th style="width: 100px;">Thao tác</th>' : ''}
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>
  `;
}

function navigateWeek(delta) {
  const refDate = new Date(state.selectedCalendarDate);
  refDate.setDate(refDate.getDate() + delta * 7);
  state.selectedCalendarDate = `${refDate.getFullYear()}-${String(refDate.getMonth() + 1).padStart(2, '0')}-${String(refDate.getDate()).padStart(2, '0')}`;
  
  state.currentCalendarMonth = refDate.getMonth();
  state.currentCalendarYear = refDate.getFullYear();
  
  renderCalendar();
}

function setCalendarToday() {
  const today = new Date();
  state.currentCalendarMonth = today.getMonth();
  state.currentCalendarYear = today.getFullYear();
  state.selectedCalendarDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  renderCalendar();
}

function selectCalendarDay(dateStr) {
  state.selectedCalendarDate = dateStr;
  renderCalendar();
}

function renderSelectedDayEvents(dateStr) {
  // No-op: sidebar has been removed. 
  // Keep function to avoid errors from any remaining callers.
}

// Mở modal ở chế độ THÊM MỚI (đặt lại form + nhãn nút).
function openAddEventModal() {
  state.editingEventId = null;
  const form = document.getElementById("formNewEvent");
  if (form) form.reset();
  const titleEl = document.getElementById("modalNewEventTitle");
  if (titleEl) titleEl.textContent = "Đăng ký Lịch làm việc / Sự kiện mới";
  const btn = document.getElementById("btnSubmitEvent");
  if (btn) btn.textContent = "Tạo sự kiện lịch";
  openModal("modalNewEvent"); // openModal tự đặt newEventDate = ngày đang chọn
}

// Mở modal ở chế độ SỬA, nạp sẵn dữ liệu sự kiện (chỉ Admin).
function editEvent(id) {
  if (!canManageCalendar()) { showToast("Bạn không có quyền chỉnh sửa lịch/sự kiện", "error"); return; }
  const ev = state.calendar.find(e => e.id === id);
  if (!ev) return;
  state.editingEventId = id;
  openModal("modalNewEvent");
  document.getElementById("newEventTitle").value = ev.title || "";
  document.getElementById("newEventDate").value = ev.date || "";
  document.getElementById("newEventTime").value = ev.time || "";
  document.getElementById("newEventChairman").value = ev.chairman || "";
  document.getElementById("newEventType").value = ev.type || "meeting";
  document.getElementById("newEventGuests").value = ev.guests || "";
  const locSel = document.getElementById("newEventLocation");
  if (locSel) {
    // Địa điểm tự do (VD sự kiện ngoài trời) có thể không có sẵn trong select → thêm option.
    if (ev.location && !Array.from(locSel.options).some(o => o.value === ev.location)) {
      const opt = document.createElement("option");
      opt.value = ev.location; opt.textContent = ev.location;
      locSel.appendChild(opt);
    }
    if (ev.location) locSel.value = ev.location;
  }
  document.getElementById("newEventNote").value = ev.note || "";
  const titleEl = document.getElementById("modalNewEventTitle");
  if (titleEl) titleEl.textContent = "Chỉnh sửa Lịch làm việc / Sự kiện";
  const btn = document.getElementById("btnSubmitEvent");
  if (btn) btn.textContent = "Lưu thay đổi";
}

function deleteEvent(id) {
  if (!canManageCalendar()) { showToast("Bạn không có quyền xóa lịch/sự kiện", "error"); return; }
  const ev = state.calendar.find(e => e.id === id);
  if (!ev) return;
  if (!confirm(`Xóa lịch/sự kiện "${ev.title}"?`)) return;
  state.calendar = state.calendar.filter(e => e.id !== id);
  saveState("calendar", state.calendar);
  renderCalendar();
  renderDashboard();
  showToast("Đã xóa lịch/sự kiện", "success");
}

function submitNewEvent() {
  const title = document.getElementById("newEventTitle").value.trim();
  const date = document.getElementById("newEventDate").value;
  const time = document.getElementById("newEventTime").value;
  const loc = document.getElementById("newEventLocation").value;
  const type = document.getElementById("newEventType").value;
  const guests = document.getElementById("newEventGuests").value.trim();
  const chairman = document.getElementById("newEventChairman") ? document.getElementById("newEventChairman").value.trim() : "";
  const note = document.getElementById("newEventNote") ? document.getElementById("newEventNote").value.trim() : "";

  if (!title || !date) {
    showToast("Vui lòng nhập tiêu đề sự kiện và chọn ngày", "warning");
    return;
  }

  // Chế độ SỬA
  if (state.editingEventId) {
    if (!canManageCalendar()) { showToast("Bạn không có quyền chỉnh sửa lịch/sự kiện", "error"); return; }
    const ev = state.calendar.find(e => e.id === state.editingEventId);
    if (ev) {
      ev.title = title; ev.type = type; ev.date = date; ev.time = time;
      ev.location = loc; ev.guests = guests || "Nội bộ phòng ban";
      ev.chairman = chairman; ev.note = note;
    }
    saveState("calendar", state.calendar);
    state.editingEventId = null;
    closeModal("modalNewEvent");
    document.getElementById("formNewEvent").reset();
    renderCalendar();
    renderDashboard();
    showToast("Đã cập nhật lịch/sự kiện thành công!", "success");
    return;
  }

  // Chế độ THÊM MỚI
  const newEv = {
    id: (state.calendar.reduce((m, e) => Math.max(m, e.id), 0)) + 1,
    title: title,
    type: type,
    date: date,
    time: time,
    location: loc,
    guests: guests || "Nội bộ phòng ban",
    chairman: chairman,
    note: note
  };

  state.calendar.push(newEv);
  saveState("calendar", state.calendar);

  closeModal("modalNewEvent");
  showToast("Đã lập lịch sự kiện thành công!", "success");

  document.getElementById("formNewEvent").reset();
  renderCalendar();
  renderDashboard();
}

// ==========================================
// 9. MODULE: DANH BẠ (DIRECTORY)
// ==========================================

let activeDirectoryDeptFilter = "all";

function renderDirectory() {
  const grid = document.getElementById("directoryGrid");
  const query = document.getElementById("searchDirectoryInput").value.trim().toLowerCase();
  
  // Render department tags row
  const tagsBar = document.getElementById("deptTagsBar");
  tagsBar.innerHTML = `<button class="news-cat-btn ${activeDirectoryDeptFilter === 'all' ? 'active' : ''}" onclick="filterDirectoryDept('all')">Tất cả phòng ban</button>` + 
    DEPARTMENTS.map(d => `
      <button class="news-cat-btn ${activeDirectoryDeptFilter === d ? 'active' : ''}" onclick="filterDirectoryDept('${d}')">${d}</button>
    `).join('');
  
  // Filter list
  let list = DIRECTORY;
  if (activeDirectoryDeptFilter !== "all") {
    list = list.filter(e => e.dept === activeDirectoryDeptFilter);
  }
  if (query) {
    list = list.filter(e => e.name.toLowerCase().includes(query) || e.title.toLowerCase().includes(query) || e.ext.includes(query));
  }
  
  if (list.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--text-muted);">
        <span class="material-symbols-outlined" style="font-size:3rem; margin-bottom:12px;">search_off</span>
        <p>Không tìm thấy nhân sự phù hợp yêu cầu</p>
      </div>
    `;
    return;
  }
  
  grid.innerHTML = list.map(e => `
    <div class="directory-card">
      <div class="directory-avatar" style="background: ${e.color};">${e.initials}</div>
      <div class="directory-info">
        <div class="directory-name">${e.name}</div>
        <div class="directory-title">${e.title}</div>
        
        <div class="directory-contact-item">
          <span class="material-symbols-outlined">alternate_email</span>
          <a href="mailto:${e.email}">${e.email}</a>
        </div>
        <div class="directory-contact-item">
          <span class="material-symbols-outlined">phone_in_talk</span>
          <span>Số máy lẻ: <strong>${e.ext}</strong></span>
        </div>
        <div class="directory-contact-item">
          <span class="material-symbols-outlined">call</span>
          <span>${e.phone}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function filterDirectoryDept(dept) {
  activeDirectoryDeptFilter = dept;
  renderDirectory();
}

function filterDirectory() {
  renderDirectory();
}

// ==========================================
// 10. MODULE: KHẢO SÁT (SURVEYS)
// ==========================================

function renderSurveys() {
  const container = document.getElementById("surveysListContainer");
  
  if (state.surveys.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:40px; color:var(--text-muted);">Không có cuộc khảo sát nào</div>`;
    return;
  }
  
  container.innerHTML = state.surveys.map(s => {
    const user = state.currentUser.username;
    const hasVoted = s.votedBy.includes(user);
    const canvasId = `surveyCanvas_${s.id}`;
    
    // Calculate total votes
    const totalVotes = s.votes.reduce((a, b) => a + b, 0);
    
    return `
      <div class="card survey-card">
        <div class="survey-vote-panel">
          <div><span class="badge badge-cyan" style="margin-bottom:8px;">Bình chọn</span></div>
          <h3>${s.title}</h3>
          <p class="survey-desc">${s.desc}</p>
          
          <div class="survey-options-list">
            ${s.options.map((opt, oIdx) => {
              const voteCount = s.votes[oIdx];
              const pct = totalVotes > 0 ? Math.round((voteCount / totalVotes) * 100) : 0;
              
              if (hasVoted) {
                return `
                  <div style="margin-bottom:8px;">
                    <div style="display:flex; justify-content:space-between; font-size:0.88rem; margin-bottom:4px;">
                      <span>${opt}</span>
                      <strong style="color:var(--primary);">${voteCount} phiếu (${pct}%)</strong>
                    </div>
                    <div class="task-progress" style="width:100%; height:8px; background:#e2e8f0; border-radius:4px;">
                      <div class="task-progress-bar" style="width:${pct}%; border-radius:4px; background:var(--primary);"></div>
                    </div>
                  </div>
                `;
              } else {
                return `
                  <div class="survey-option-item" onclick="submitVoteSurvey(${s.id}, ${oIdx})">
                    <div class="survey-radio-circle"></div>
                    <span>${opt}</span>
                  </div>
                `;
              }
            }).join('')}
          </div>
          
          <div style="font-size:0.8rem; color:var(--text-muted);">
            Tổng số CBNV bình chọn: <strong>${totalVotes} người</strong> • Hạn chót: ${s.endDate}
          </div>
        </div>
        
        <div class="survey-results-panel">
          <h4 style="margin-bottom:12px; font-weight:700; font-size:0.9rem;">Kết quả biểu đồ trực quan</h4>
          <div class="canvas-container">
            <canvas id="${canvasId}" width="260" height="200" style="width:260px; height:200px;"></canvas>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  // Render canvas charts for voted surveys
  setTimeout(() => {
    state.surveys.forEach(s => {
      drawSurveyPieChart(`surveyCanvas_${s.id}`, s.options, s.votes);
    });
  }, 100);
}

function submitVoteSurvey(surveyId, optionIndex) {
  const survey = state.surveys.find(s => s.id === surveyId);
  if (!survey) return;
  
  const user = state.currentUser.username;
  if (survey.votedBy.includes(user)) {
    showToast("Bạn đã bỏ phiếu bình chọn này rồi!", "warning");
    return;
  }
  
  survey.votes[optionIndex]++;
  survey.votedBy.push(user);
  
  saveState("surveys", state.surveys);
  showToast("Cảm ơn ý kiến bình chọn của bạn!", "success");
  
  renderSurveys();
  renderDashboard();
}

// Draw custom vector charts inside canvas (No dependency needed)
function drawSurveyPieChart(canvasId, labels, votes) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  
  // Adjust resolution for high-DPI displays
  const dpr = window.devicePixelRatio || 1;
  canvas.width = 260 * dpr;
  canvas.height = 200 * dpr;
  canvas.style.width = "260px";
  canvas.style.height = "200px";
  ctx.scale(dpr, dpr);
  
  const total = votes.reduce((a, b) => a + b, 0);
  if (total === 0) return;
  
  const colors = ["#0284c7", "#10b981", "#f59e0b", "#7c3aed"];
  
  const cx = 100;
  const cy = 100;
  const r = 70;
  
  ctx.clearRect(0, 0, 260, 200);
  
  // Draw Pie slices
  let startAngle = -Math.PI / 2;
  votes.forEach((v, i) => {
    const sliceAngle = (v / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, startAngle, startAngle + sliceAngle);
    ctx.closePath();
    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();
    startAngle += sliceAngle;
  });
  
  // Draw Inner circle (Doughnut effect)
  ctx.beginPath();
  ctx.arc(cx, cy, 45, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  
  // Center Text
  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 15px Inter, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(total, cx, cy + 2);
  ctx.font = "8px Inter, sans-serif";
  ctx.fillStyle = "#94a3b8";
  ctx.fillText("Ý kiến", cx, cy + 12);
  
  // Draw Legend right side
  let ly = 30;
  votes.forEach((v, i) => {
    const pct = Math.round((v / total) * 100);
    if (pct > 0) {
      ctx.fillStyle = colors[i % colors.length];
      ctx.fillRect(180, ly, 10, 10);
      
      ctx.fillStyle = "#475569";
      ctx.font = "bold 9px Inter, sans-serif";
      ctx.textAlign = "left";
      ctx.fillText(`${pct}%`, 196, ly + 8);
      ly += 16;
    }
  });
}

// Custom mini survey pie chart drawer
function drawMiniSurveyPieChart(canvasId, labels, votes) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  
  const dpr = window.devicePixelRatio || 1;
  canvas.width = 110 * dpr;
  canvas.height = 110 * dpr;
  canvas.style.width = "110px";
  canvas.style.height = "110px";
  ctx.scale(dpr, dpr);
  
  const total = votes.reduce((a, b) => a + b, 0);
  if (total === 0) return;
  
  const colors = ["#0284c7", "#10b981", "#f59e0b", "#7c3aed"];
  const cx = 55;
  const cy = 55;
  const r = 45;
  
  ctx.clearRect(0, 0, 110, 110);
  
  let startAngle = -Math.PI / 2;
  votes.forEach((v, i) => {
    const sliceAngle = (v / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, startAngle, startAngle + sliceAngle);
    ctx.closePath();
    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();
    startAngle += sliceAngle;
  });
  
  // Hollow doughnut center
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.55, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = "#ffffff";
  ctx.fill();
}

function submitNewSurvey() {
  const title = document.getElementById("newSurveyTitle").value.trim();
  const desc = document.getElementById("newSurveyDesc").value.trim();
  const inputs = document.querySelectorAll(".new-survey-option-input");
  
  let options = [];
  inputs.forEach(ip => {
    const val = ip.value.trim();
    if (val) options.push(val);
  });
  
  if (!title || options.length < 2) {
    showToast("Vui lòng nhập chủ đề khảo sát và tối thiểu 2 lựa chọn", "warning");
    return;
  }
  
  const newSur = {
    id: state.surveys.length + 1,
    title: title,
    desc: desc || "Khảo sát lấy ý kiến phục vụ CBNV.",
    options: options,
    votes: new Array(options.length).fill(0),
    votedBy: [],
    endDate: "2026-07-30"
  };
  
  state.surveys.unshift(newSur);
  saveState("surveys", state.surveys);
  
  closeModal("modalNewSurvey");
  showToast("Đã lập cuộc khảo sát lấy ý kiến mới!", "success");
  
  document.getElementById("formNewSurvey").reset();
  renderSurveys();
  renderDashboard();
}

// Media management (albums/photos) is allowed for admins and users with the
// communications permission (canPostNews).
function canManageMedia() {
  return !!(state.currentUser && (state.currentUser.username === "admin" ||
    (state.currentUser.permissions && state.currentUser.permissions.canPostNews)));
}

// ---- Tạo album mới ----
function openNewAlbumModal() {
  if (!canManageMedia()) { showToast("Bạn không có quyền tạo album", "error"); return; }
  const form = document.getElementById("formNewAlbum");
  if (form) form.reset();
  const photosInput = document.getElementById("newAlbumPhotos");
  if (photosInput) delete photosInput.dataset.photosJson;
  const label = document.getElementById("newAlbumPhotosLabel");
  if (label) label.textContent = "Chọn nhiều ảnh (.jpg, .png)";
  openModal("modalNewAlbum");
}

// Đọc nhiều ảnh cùng lúc → lưu vào IndexedDB, giữ tham chiếu nhẹ trong dataset.
function handleNewAlbumPhotosChange(input) {
  const label = document.getElementById("newAlbumPhotosLabel");
  if (!(input.files && input.files.length)) {
    if (label) label.textContent = "Chọn nhiều ảnh (.jpg, .png)";
    delete input.dataset.photosJson;
    return;
  }
  const files = Array.from(input.files);
  if (label) label.textContent = `Đang đọc ${files.length} ảnh...`;
  const photos = [];
  let done = 0;
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = function(e) {
      const key = genFileKey();
      idbSet(key, e.target.result).then(() => {
        state.mediaCache[key] = e.target.result;
        photos.push({ dataKey: key, caption: file.name.replace(/\.[^.]+$/, "") });
        done++;
        if (done === files.length) {
          input.dataset.photosJson = JSON.stringify(photos);
          if (label) label.textContent = `Đã chọn ${files.length} ảnh`;
        }
      }).catch(err => { console.error("Lưu ảnh thất bại:", err); if (label) label.textContent = "Lỗi khi đọc ảnh — vui lòng thử lại"; });
    };
    reader.readAsDataURL(file);
  });
}

function submitNewAlbum() {
  if (!canManageMedia()) { showToast("Bạn không có quyền tạo album", "error"); return; }
  const title = document.getElementById("newAlbumTitle").value.trim();
  if (!title) { showToast("Vui lòng nhập tên album", "warning"); return; }
  const dateStr = document.getElementById("newAlbumDate").value.trim() || new Date().toLocaleDateString("vi-VN");
  const photosInput = document.getElementById("newAlbumPhotos");
  let images = [];
  if (photosInput && photosInput.dataset.photosJson) {
    try { images = JSON.parse(photosInput.dataset.photosJson); } catch (e) { images = []; }
  }

  const maxId = state.albums.reduce((m, a) => Math.max(m, a.id), 0);
  const newAlbum = { id: maxId + 1, title: title, date: dateStr, count: images.length, images: images };

  state.albums.unshift(newAlbum);
  if (!saveState("albums", state.albums)) { state.albums.shift(); return; }
  renderAlbums();
  closeModal("modalNewAlbum");
  showToast(`Đã tạo album "${title}"${images.length ? ` với ${images.length} ảnh` : ''}.`, "success");

  document.getElementById("formNewAlbum").reset();
  if (photosInput) delete photosInput.dataset.photosJson;
  const label = document.getElementById("newAlbumPhotosLabel");
  if (label) label.textContent = "Chọn nhiều ảnh (.jpg, .png)";
}

function deleteAlbum(albumId, event) {
  if (event) event.stopPropagation();
  if (!canManageMedia()) { showToast("Bạn không có quyền xóa album", "error"); return; }
  const album = state.albums.find(a => a.id === albumId);
  if (!album) return;
  if (!confirm(`Xóa album "${album.title}" và toàn bộ ${album.images.length} ảnh trong đó?`)) return;
  // Dọn ảnh trong IndexedDB + cache bộ nhớ
  (album.images || []).forEach(img => {
    if (img.dataKey) { idbDel(img.dataKey).catch(() => {}); delete state.mediaCache[img.dataKey]; }
  });
  state.albums = state.albums.filter(a => a.id !== albumId);
  saveState("albums", state.albums);
  renderAlbums();
  showToast("Đã xóa album", "success");
}

function renderAlbums() {
  const grid = document.getElementById("albumsGrid");
  if (!grid) return;
  const canManage = canManageMedia();
  const newAlbumBtn = document.getElementById("newAlbumBtn");
  if (newAlbumBtn) newAlbumBtn.style.display = canManage ? "inline-flex" : "none";
  grid.innerHTML = state.albums.map(a => `
    <div class="album-card">
      <div class="album-cover" style="background-image: url('${albumCoverSrc(a)}')" onclick="openLightbox(${a.id}, 0)">
        <div class="album-cover-overlay">
          <div class="album-count"><span class="material-symbols-outlined" style="font-size:16px;">image</span> ${a.images.length} ảnh</div>
        </div>
        ${canManage ? `
          <button class="album-delete-btn" onclick="deleteAlbum(${a.id}, event)" title="Xóa album"><span class="material-symbols-outlined" style="font-size:18px;">delete</span></button>
          <button class="album-add-photo-btn" onclick="triggerAddAlbumPhoto(${a.id}, event)" title="Thêm ảnh vào album"><span class="material-symbols-outlined" style="font-size:18px;">add_photo_alternate</span></button>
        ` : ''}
      </div>
      <div class="album-body" onclick="openLightbox(${a.id}, 0)">
        <div class="album-title">${a.title}</div>
        <div class="album-date">Ngày sự kiện: ${a.date}</div>
      </div>
    </div>
  `).join('');
}

// ---- Add / delete album photos ----
let _addPhotoTargetAlbum = null;

function triggerAddAlbumPhoto(albumId, event) {
  if (event) event.stopPropagation();
  _addPhotoTargetAlbum = albumId;
  const input = document.getElementById("albumPhotoInput");
  if (input) { input.value = ""; input.click(); }
}

function handleAlbumPhotoUpload(input) {
  const album = state.albums.find(a => a.id === _addPhotoTargetAlbum);
  _addPhotoTargetAlbum = null;
  if (!album || !(input.files && input.files.length)) return;
  const files = Array.from(input.files);
  let done = 0;
  showToast(`Đang tải lên ${files.length} ảnh...`, "info");
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = function(e) {
      const key = genFileKey();
      // Photos can be large → store in IndexedDB, keep only a reference.
      idbSet(key, e.target.result).then(() => {
        state.mediaCache[key] = e.target.result;
        album.images.push({ dataKey: key, caption: file.name.replace(/\.[^.]+$/, "") });
        done++;
        if (done === files.length) {
          album.count = album.images.length;
          saveState("albums", state.albums);
          renderAlbums();
          showToast(`Đã thêm ${files.length} ảnh vào "${album.title}".`, "success");
        }
      }).catch(err => { console.error("Lưu ảnh thất bại:", err); showToast("Lỗi khi lưu ảnh.", "error"); });
    };
    reader.readAsDataURL(file);
  });
}

function deleteLightboxPhoto() {
  const album = state.lightboxAlbum;
  if (!album || !canManageMedia()) return;
  if (!confirm("Xóa ảnh này khỏi album?")) return;
  const idx = state.lightboxIndex;
  album.images.splice(idx, 1);
  album.count = album.images.length;
  saveState("albums", state.albums);
  renderAlbums();
  if (album.images.length === 0) {
    closeLightbox();
    showToast("Đã xóa ảnh. Album hiện đang trống.", "success");
    return;
  }
  state.lightboxIndex = Math.min(idx, album.images.length - 1);
  updateLightbox();
  showToast("Đã xóa ảnh khỏi album.", "success");
}

function openLightbox(albumId, index) {
  const album = state.albums.find(a => a.id === albumId);
  if (!album) return;
  if (!album.images || album.images.length === 0) {
    showToast("Album chưa có ảnh nào.", "info");
    return;
  }
  state.lightboxAlbum = album;
  state.lightboxIndex = Math.min(index, album.images.length - 1);

  updateLightbox();
  document.getElementById("lightboxModal").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightboxModal").style.display = "none";
}

function closeLightboxOutside(event) {
  if (event.target === event.currentTarget) {
    closeLightbox();
  }
}

function updateLightbox() {
  const album = state.lightboxAlbum;
  const idx = state.lightboxIndex;

  if (!album || !album.images[idx]) return;

  const imgEl = document.getElementById("lightboxImg");
  const captionEl = document.getElementById("lightboxCaption");

  imgEl.src = albumImgSrc(album.images[idx]);
  captionEl.textContent = `${album.title} (${idx + 1}/${album.images.length}) — ${album.images[idx].caption}`;

  const delBtn = document.getElementById("lightboxDeleteBtn");
  if (delBtn) delBtn.style.display = canManageMedia() ? "flex" : "none";
}

function navigateLightbox(delta) {
  if (!state.lightboxAlbum) return;

  const max = state.lightboxAlbum.images.length;
  state.lightboxIndex = (state.lightboxIndex + delta + max) % max;
  updateLightbox();
}

// Custom Bar Chart Drawer
function drawBarChart(canvasId, labels, datasets) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  
  const width = rect.width;
  const height = rect.height;
  
  ctx.clearRect(0, 0, width, height);
  
  // Padding
  const padLeft = 40;
  const padRight = 20;
  const padTop = 30;
  const padBottom = 35;
  
  const graphWidth = width - padLeft - padRight;
  const graphHeight = height - padTop - padBottom;
  
  // Grid and Scales
  const data = datasets[0].data;
  const maxVal = Math.max(...data, 100) * 1.1; // adding some headroom
  
  // Draw horizontal grids
  ctx.strokeStyle = "#f1f5f9";
  ctx.lineWidth = 1;
  ctx.fillStyle = "#94a3b8";
  ctx.font = "10px Inter, sans-serif";
  ctx.textAlign = "right";
  
  const gridLines = 4;
  for (let i = 0; i <= gridLines; i++) {
    const val = Math.round((maxVal / gridLines) * i);
    const y = padTop + graphHeight - (val / maxVal) * graphHeight;
    
    // Line
    ctx.beginPath();
    ctx.moveTo(padLeft, y);
    ctx.lineTo(width - padRight, y);
    ctx.stroke();
    
    // Label
    ctx.fillText(val, padLeft - 8, y + 3);
  }
  
  // Draw Bars
  const barCount = labels.length;
  const colWidth = graphWidth / barCount;
  const barWidth = colWidth * 0.6;
  const barColor = datasets[0].color || "#0284c7";
  
  labels.forEach((label, i) => {
    const val = data[i];
    const barHeight = (val / maxVal) * graphHeight;
    const x = padLeft + (i * colWidth) + (colWidth - barWidth) / 2;
    const y = padTop + graphHeight - barHeight;
    
    // Draw Bar
    ctx.fillStyle = barColor;
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(x, y, barWidth, barHeight, [4, 4, 0, 0]);
    } else {
      ctx.rect(x, y, barWidth, barHeight);
    }
    ctx.fill();
    
    // Label under axis
    ctx.fillStyle = "#475569";
    ctx.textAlign = "center";
    ctx.font = "9px Inter, sans-serif";
    ctx.fillText(label, x + barWidth / 2, padTop + graphHeight + 16);
    
    // Value on top of bar
    ctx.fillStyle = "#0f172a";
    ctx.font = "bold 9px Inter, sans-serif";
    ctx.fillText(val, x + barWidth / 2, y - 6);
  });
}

// Custom Doughnut Chart Drawer
function drawDoughnut(canvasId, labels, data, colors) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  
  const width = rect.width;
  const height = rect.height;
  
  ctx.clearRect(0, 0, width, height);
  
  const total = data.reduce((a, b) => a + b, 0);
  if (total === 0) return;
  
  const cx = width * 0.35;
  const cy = height * 0.5;
  const r = Math.min(width * 0.25, height * 0.35);
  
  // Slices
  let startAngle = -Math.PI / 2;
  data.forEach((val, i) => {
    const sliceAngle = (val / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, startAngle, startAngle + sliceAngle);
    ctx.closePath();
    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();
    startAngle += sliceAngle;
  });
  
  // Hollow center
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.6, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  
  // Center count text
  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 16px Inter, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(total, cx, cy + 2);
  ctx.font = "9px Inter, sans-serif";
  ctx.fillStyle = "#94a3b8";
  ctx.fillText("Tổng đơn", cx, cy + 12);
  
  // Draw Legends
  let ly = height * 0.2;
  const legendX = width * 0.65;
  
  labels.forEach((label, i) => {
    const val = data[i];
    const pct = Math.round((val / total) * 100);
    
    // Legend Dot
    ctx.fillStyle = colors[i % colors.length];
    ctx.beginPath();
    ctx.arc(legendX, ly + 5, 4, 0, Math.PI * 2);
    ctx.fill();
    
    // Label and values
    ctx.fillStyle = "#475569";
    ctx.font = "10px Inter, sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(`${label}: ${val} (${pct}%)`, legendX + 12, ly + 8);
    
    ly += 22;
  });
}

// Nguồn tin cho "mục tin lớn": ưu tiên các tin đã ghim; nếu không có thì lấy
// tin sự kiện, cuối cùng là tin mới nhất — để hero luôn có nội dung.
function getCarouselNews() {
  const pinned = state.news.filter(n => n.pinned);
  if (pinned.length > 0) return pinned.slice(0, 8);
  const featured = state.news.filter(n => n.category === "tin-tuc");
  if (featured.length > 0) return featured.slice(0, 5);
  return state.news.slice(0, 5);
}

function renderCarousel() {
  const carouselContainer = document.getElementById("dashCarouselContainer");
  if (!carouselContainer) return;
  const carouselNews = getCarouselNews();
  state.carouselCount = carouselNews.length;
  if (carouselNews.length === 0) { carouselContainer.innerHTML = ""; return; }
  if (state.currentCarouselIndex === undefined) state.currentCarouselIndex = 0;
  const idx = ((state.currentCarouselIndex % carouselNews.length) + carouselNews.length) % carouselNews.length;
  const currentSlide = carouselNews[idx];
  const showNav = carouselNews.length > 1;
  carouselContainer.innerHTML = `
      <div class="carousel-slide" onclick="showNewsDetail(${currentSlide.id})" style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.85) 100%), url('${currentSlide.image}');">
        <span class="carousel-badge">TIN NỔI BẬT</span>
        ${showNav ? `
        <button class="carousel-arrow prev" onclick="navigateCarousel(-1, event)">
          <span class="material-symbols-outlined">chevron_left</span>
        </button>
        <button class="carousel-arrow next" onclick="navigateCarousel(1, event)">
          <span class="material-symbols-outlined">chevron_right</span>
        </button>` : ''}

        <div class="carousel-content">
          <h2 class="carousel-title">${currentSlide.title}</h2>
          <p class="carousel-desc">${currentSlide.excerpt}</p>
          <button class="btn btn-primary carousel-btn" onclick="showNewsDetail(${currentSlide.id}); event.stopPropagation();">Xem chi tiết</button>
        </div>
        ${showNav ? `
        <div class="carousel-dots">
          ${carouselNews.map((_, i) => `
            <span class="carousel-dot ${i === idx ? 'active' : ''}" onclick="setCarouselSlide(${i}, event)"></span>
          `).join('')}
        </div>` : ''}
      </div>
    `;
}

// Bấm trái/phải để chuyển giữa các tin đã ghim (vòng lặp qua đầu/cuối).
function navigateCarousel(delta, event) {
  if (event) event.stopPropagation();
  const count = state.carouselCount || 1;
  state.currentCarouselIndex = (((state.currentCarouselIndex || 0) + delta) % count + count) % count;
  renderCarousel();
}

function setCarouselSlide(idx, event) {
  if (event) event.stopPropagation();
  state.currentCarouselIndex = idx;
  renderCarousel();
}

function renderDashboard() {
  // Initialize carousel index if not set
  if (state.currentCarouselIndex === undefined) {
    state.currentCarouselIndex = 0;
  }
  
  // 1. Render "Mục tin lớn" (các tin đã ghim; bấm trái/phải để chuyển tin)
  renderCarousel();

  // 2. Render Small News List (middle column of Row 1)
  const smallNews = state.news.slice(0, 4);
  const smallNewsList = document.getElementById("dashSmallNewsList");
  if (smallNewsList) {
    smallNewsList.innerHTML = smallNews.map((n, idx) => `
      <div class="small-news-item" onclick="showNewsDetail(${n.id})">
        <div class="small-news-img" style="background-image: url('${n.image}');"></div>
        <div class="small-news-info">
          <div class="small-news-title-row">
            ${idx === 0 ? '<span class="badge-ghim">TIN GHIM</span>' : ''}
            <span class="small-news-title">${n.title}</span>
          </div>
          <span class="small-news-meta">${n.author} • ${n.date}</span>
        </div>
      </div>
    `).join('');
  }
  
  // 3. Render Tin tức nổi bật (4 cards)
  const featuredNews = state.news.slice(0, 4);
  const featuredGrid = document.getElementById("dashFeaturedNewsGrid");
  if (featuredGrid) {
    featuredGrid.innerHTML = featuredNews.map((n, idx) => `
      <div class="featured-news-card-item card" onclick="showNewsDetail(${n.id})">
        <div class="card-img" style="background-image: url('${n.image}');">
          ${idx === 0 ? '<span class="card-badge ghim"><span class="material-symbols-outlined" style="font-size:12px;">push_pin</span> TIN GHIM</span>' : ''}
        </div>
        <div class="card-body">
          <h4 class="card-title">${n.title}</h4>
          <p class="card-excerpt">${n.excerpt}</p>
          <div class="card-meta">
            <span class="author-avatar" style="background:${idx === 0 ? 'var(--primary)' : idx === 1 ? 'var(--success)' : idx === 2 ? 'var(--warning)' : 'var(--purple)'};">${n.author.substring(0, 2).toUpperCase()}</span>
            <span class="author-name">${n.author}</span>
            <span class="dot">•</span>
            <span class="time">${n.date}</span>
          </div>
          <div class="card-actions-footer" onclick="event.stopPropagation();">
            <div class="left-actions">
              <button class="action-btn-item ${(n.likedBy && n.likedBy.includes(state.currentUser.username)) ? 'liked' : ''}" onclick="toggleLikeNews(${n.id})">
                <span class="material-symbols-outlined">thumb_up</span> 
                <span class="count">${n.likes}</span>
              </button>
              <button class="action-btn-item" onclick="showNewsDetail(${n.id})">
                <span class="material-symbols-outlined">chat_bubble</span>
                <span class="count">${n.comments.length}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }
  
  // 4. Render Survey widget (Column 2 of Row 3)
  const activeSurvey = state.surveys[0];
  const surveyWidget = document.getElementById("dashSurveyWidget");
  if (surveyWidget && activeSurvey) {
    const user = state.currentUser.username;
    const hasVoted = activeSurvey.votedBy.includes(user);
    const totalVotes = activeSurvey.votes.reduce((a, b) => a + b, 0);
    
    if (hasVoted) {
      surveyWidget.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:start; flex-direction:column; gap:4px; height:100%;">
          <h4 style="font-size:0.92rem; font-weight:700; margin-bottom:8px; line-height:1.4;">${activeSurvey.title}</h4>
          <div style="display:flex; width:100%; align-items:center; gap:8px;">
            <div style="flex:1;">
              <span style="font-size:0.8rem; color:var(--text-muted); font-weight:500;">${totalVotes} người đã tham gia</span>
              <div style="margin-top:12px;">
                <a href="#" onclick="switchView('surveys')" style="font-size:0.82rem; font-weight:700; color:var(--primary); text-decoration:none;">Xem chi tiết →</a>
              </div>
            </div>
            <div style="width:110px; height:110px; position:relative; flex-shrink:0;">
              <canvas id="dashSurveyCanvas" width="110" height="110" style="width:110px; height:110px;"></canvas>
            </div>
          </div>
        </div>
      `;
      // Draw chart
      setTimeout(() => {
        drawMiniSurveyPieChart("dashSurveyCanvas", activeSurvey.options, activeSurvey.votes);
      }, 50);
    } else {
      surveyWidget.innerHTML = `
        <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%;">
          <div>
            <h4 style="font-size:0.92rem; font-weight:700; margin-bottom:12px; line-height:1.4;">${activeSurvey.title}</h4>
            <div style="display:flex; flex-direction:column; gap:8px;">
              ${activeSurvey.options.map((opt, oIdx) => `
                <button class="btn btn-outline btn-sm" onclick="submitVoteSurvey(${activeSurvey.id}, ${oIdx})" style="text-align:left; justify-content:flex-start; font-weight:500; padding:8px 12px; border-radius:8px;">
                  <span class="material-symbols-outlined" style="font-size:14px; margin-right:6px;">check_box_outline_blank</span> ${opt}
                </button>
              `).join('')}
            </div>
          </div>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:12px; display:flex; justify-content:space-between; align-items:center;">
            <span>${totalVotes} người đã bình chọn</span>
            <a href="#" onclick="switchView('surveys')" style="font-weight:700; color:var(--primary); text-decoration:none;">Tham gia ngay →</a>
          </div>
        </div>
      `;
    }
  } else {
    if (surveyWidget) {
      surveyWidget.innerHTML = `<div style="padding:24px; text-align:center; color:var(--text-muted);">Không có khảo sát hoạt động.</div>`;
    }
  }

  // 4b. Hide the "Khảo sát nổi bật" card when the surveys tab is turned off in config.
  const surveyCard = document.getElementById("dashSurveyCard");
  if (surveyCard) {
    const surveysEnabled = Array.isArray(state.activeTabs) && state.activeTabs.indexOf("surveys") !== -1;
    surveyCard.style.display = surveysEnabled ? "" : "none";
  }

  // 4c. "Quyết định & Văn bản chỉ đạo" — 3 văn bản mới nhất
  const decisionsList = document.getElementById("dashDecisionsList");
  if (decisionsList) {
    const decisions = state.documents
      .filter(d => d.type === "Quyết định & Văn bản chỉ đạo")
      .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")))
      .slice(0, 3);
    decisionsList.innerHTML = decisions.length ? decisions.map(d => `
      <div class="dash-mini-item" onclick="showDocDetail(${d.id})">
        <span class="material-symbols-outlined dash-mini-ico blue">verified</span>
        <div class="dash-mini-info">
          <div class="dash-mini-title">${d.title}</div>
          <div class="dash-mini-meta">${d.code || d.dept || ''} • ${d.date}</div>
        </div>
        <span class="material-symbols-outlined dash-mini-chevron">chevron_right</span>
      </div>
    `).join('') : `<div class="dash-empty">Chưa có quyết định / văn bản chỉ đạo.</div>`;
  }

  // 4d. "Yêu cầu / Trình duyệt" — 3 tin mới nhất
  const reqList = document.getElementById("dashRequestsList");
  if (reqList) {
    const latestReqs = [...state.requests].sort((a, b) => String(b.date || "").localeCompare(String(a.date || ""))).slice(0, 3);
    const statusMap = { approved: ["Đã duyệt", "ok"], pending: ["Chờ duyệt", "wait"], rejected: ["Từ chối", "no"] };
    reqList.innerHTML = latestReqs.length ? latestReqs.map(r => {
      const s = statusMap[r.status] || ["—", ""];
      return `
      <div class="dash-mini-item" onclick="switchView('requests'); showRequestDetail(${r.id});">
        <span class="material-symbols-outlined dash-mini-ico orange">assignment</span>
        <div class="dash-mini-info">
          <div class="dash-mini-title">${r.type} — ${r.userName}</div>
          <div class="dash-mini-meta">${r.dept} • ${r.date}</div>
        </div>
        <span class="dash-status-badge ${s[1]}">${s[0]}</span>
      </div>`;
    }).join('') : `<div class="dash-empty">Chưa có yêu cầu nào.</div>`;
  }

  // 5. Render Albums (Column 3 of Row 3)
  const albums = state.albums.slice(0, 4);
  const albumsGrid = document.getElementById("dashAlbumsGrid");
  if (albumsGrid) {
    albumsGrid.innerHTML = albums.map(a => `
      <div class="dash-album-item" onclick="switchView('albums'); openLightbox(${a.id}, 0);">
        <div class="dash-album-cover" style="background-image: url('${albumCoverSrc(a)}');"></div>
        <div class="dash-album-title">${a.title}</div>
        <div class="dash-album-count">${a.images.length} ảnh</div>
      </div>
    `).join('');
  }
  
  // 6. Render Sidebar Card 1: Thông báo mới
  const notifyList = document.getElementById("dashNotifyList");
  const announces = state.news.filter(n => n.category === "thong-bao" || n.category === "quyet-dinh").slice(0, 4);
  if (notifyList && announces.length > 0) {
    const icons = ["campaign", "article", "home_work", "badge"];
    const colors = ["orange", "blue", "green", "pink"];
    
    notifyList.innerHTML = announces.map((a, idx) => {
      const hasRead = a.readBy.includes(state.currentUser.username);
      return `
        <div class="sidebar-notify-item" onclick="showNewsDetail(${a.id})">
          <div class="notify-icon-circle ${colors[idx % colors.length]}">
            <span class="material-symbols-outlined" style="font-size:18px;">${icons[idx % icons.length]}</span>
          </div>
          <div class="notify-info-content">
            <div class="notify-title-row">
              <span class="notify-title">${a.title}</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px; margin-top:2px;">
              <span class="notify-time-meta">${a.date}</span>
              ${a.mandatory && !hasRead ? '<span class="notify-mandatory-badge">Bắt buộc đọc</span>' : ''}
            </div>
          </div>
          ${!hasRead ? '<span class="notify-unread-dot"></span>' : ''}
        </div>
      `;
    }).join('');
    
    // Calculate read ratio
    const mandatoryAnnounces = state.news.filter(n => (n.category === "thong-bao" || n.category === "quyet-dinh") && n.mandatory);
    const totalMandatory = mandatoryAnnounces.length;
    const readMandatory = mandatoryAnnounces.filter(n => n.readBy.includes(state.currentUser.username)).length;
    const ratio = totalMandatory > 0 ? Math.round((readMandatory / totalMandatory) * 100) : 78; // Fallback to 78% from target image
    
    const ratioVal = document.getElementById("dashReadRatioValue");
    const ratioProgress = document.getElementById("dashReadRatioProgress");
    if (ratioVal) ratioVal.textContent = `${ratio}%`;
    if (ratioProgress) {
      ratioProgress.style.width = `${ratio}%`;
    }
  }
  
  // 7. Render Sidebar Card 2: Lịch hôm nay
  const timeline = document.getElementById("dashEventsTimeline");
  const events = state.calendar.slice(0, 4);
  if (timeline) {
    const bullets = ["red", "orange", "green", "purple"];
    timeline.innerHTML = events.map((e, idx) => `
      <div class="timeline-event-item" onclick="switchView('calendar')">
        <div class="timeline-bullet-connector">
          <span class="timeline-bullet ${bullets[idx % bullets.length]}"></span>
          ${idx < events.length - 1 ? '<span class="timeline-line"></span>' : ''}
        </div>
        <div class="timeline-event-content">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2px;">
            <span class="event-time">${e.time}</span>
            <span class="event-room"><span class="material-symbols-outlined" style="font-size:10px;">location_on</span> ${e.location}</span>
          </div>
          <div class="event-title">${e.title}</div>
        </div>
      </div>
    `).join('');
  }
  
  // Dynamic update of titles/kpis in other areas if they exist
  const unreadEl = document.getElementById("kpiUnreadAnnounces");
  if (unreadEl) {
    const unreadAnnounces = state.news.filter(n => (n.category === "thong-bao" || n.category === "quyet-dinh") && !n.readBy.includes(state.currentUser.username)).length;
    unreadEl.textContent = unreadAnnounces;
  }
  const pendingEl = document.getElementById("kpiPendingApprovals");
  if (pendingEl) {
    const pendingApprovals = state.requests.filter(r => r.status === "pending").length;
    pendingEl.textContent = pendingApprovals;
  }
  const totalEl = document.getElementById("kpiTotalDocs");
  if (totalEl) {
    totalEl.textContent = state.documents.length;
  }
  
  // Render user dynamic forms list
  renderDynamicFormsListUser();
}

// Save Settings Form
function saveSettings() {
  const phone = document.getElementById("settingsPhone").value.trim();
  state.currentUser.phone = phone;

  // Update mock database item
  const staffIdx = DIRECTORY.findIndex(s => s.name === state.currentUser.name);
  if (staffIdx > -1) {
    DIRECTORY[staffIdx].phone = phone;
  }

  saveState("users", state.users);
  showToast("Đã lưu thông tin hồ sơ nhân sự thành công!", "success");
}

// 1) Upload ảnh cá nhân (lưu IndexedDB, tham chiếu qua avatarKey)
function handleAvatarUpload(input) {
  if (!(input.files && input.files[0])) return;
  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    const key = "avatar_" + (state.currentUser.username || "u") + "_" + Date.now().toString(36);
    idbSet(key, e.target.result).then(() => {
      // dọn ảnh cũ
      if (state.currentUser.avatarKey && state.currentUser.avatarKey !== key) {
        idbDel(state.currentUser.avatarKey).catch(() => {});
        delete state.mediaCache[state.currentUser.avatarKey];
      }
      state.mediaCache[key] = e.target.result;
      state.currentUser.avatarKey = key;
      saveState("users", state.users);
      applyAvatar(document.getElementById("userAvatar"), state.currentUser);
      applyAvatar(document.getElementById("settingsAvatar"), state.currentUser);
      const rmBtn = document.getElementById("removeAvatarBtn");
      if (rmBtn) rmBtn.style.display = "inline-flex";
      showToast("Đã cập nhật ảnh cá nhân", "success");
    }).catch(err => { console.error("Lưu ảnh cá nhân thất bại:", err); showToast("Lỗi khi tải ảnh — vui lòng thử lại", "error"); });
  };
  reader.readAsDataURL(file);
  input.value = "";
}

function removeAvatar() {
  if (state.currentUser.avatarKey) {
    idbDel(state.currentUser.avatarKey).catch(() => {});
    delete state.mediaCache[state.currentUser.avatarKey];
    delete state.currentUser.avatarKey;
    saveState("users", state.users);
  }
  applyAvatar(document.getElementById("userAvatar"), state.currentUser);
  applyAvatar(document.getElementById("settingsAvatar"), state.currentUser);
  const rmBtn = document.getElementById("removeAvatarBtn");
  if (rmBtn) rmBtn.style.display = "none";
  showToast("Đã gỡ ảnh cá nhân, dùng lại chữ viết tắt", "success");
}

// 2) Đổi mật khẩu
function changePassword() {
  const cur = document.getElementById("pwCurrent").value;
  const nw = document.getElementById("pwNew").value;
  const cf = document.getElementById("pwConfirm").value;
  const stored = state.currentUser.password;
  if (stored && cur !== stored) { showToast("Mật khẩu hiện tại không đúng", "error"); return; }
  if (!nw || nw.length < 6) { showToast("Mật khẩu mới phải tối thiểu 6 ký tự", "warning"); return; }
  if (nw !== cf) { showToast("Xác nhận mật khẩu không khớp", "warning"); return; }
  state.currentUser.password = nw;
  saveState("users", state.users);
  document.getElementById("pwCurrent").value = "";
  document.getElementById("pwNew").value = "";
  document.getElementById("pwConfirm").value = "";
  showToast("Đã đổi mật khẩu thành công", "success");
}

// 3) Tùy chọn nhận thông báo qua email
function saveEmailNotifSettings() {
  state.currentUser.emailNotif = {
    mandatory: document.getElementById("notifMandatory").checked,
    approvals: document.getElementById("notifApprovals").checked,
    news: document.getElementById("notifNews").checked,
    calendar: document.getElementById("notifCalendar").checked
  };
  saveState("users", state.users);
  showToast("Đã lưu tùy chọn nhận thông báo qua email", "success");
}

// ==========================================
// 13. VIEW: SYSTEM ADMINISTRATION (ADMIN PANEL)
// ==========================================

let activeAdminSubtab = "analytics";

function renderAdminView() {
  const isUserAdmin = state.currentUser.username === "admin" || (state.currentUser.permissions && state.currentUser.permissions.isAdmin);
  if (!isUserAdmin) {
    switchView("dashboard");
    return;
  }
  
  // Fill department options for adding users
  const deptSelect = document.getElementById("newUserDept");
  if (deptSelect) {
    deptSelect.innerHTML = state.departments.map(d => `<option value="${d}">${d}</option>`).join('');
  }
  
  const filterDeptSelect = document.getElementById("adminFilterUserDept");
  if (filterDeptSelect && filterDeptSelect.children.length <= 1) {
    filterDeptSelect.innerHTML = `<option value="all">Tất cả phòng ban</option>` + 
      state.departments.map(d => `<option value="${d}">${d}</option>`).join('');
  }
  
  // Dispatch active sub-tab renders
  switchAdminTab(activeAdminSubtab);
}

function switchAdminTab(subTabId) {
  activeAdminSubtab = subTabId;
  
  // Update class active subtab buttons
  document.querySelectorAll("#view-admin .sub-tab-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  
  const activeBtn = document.getElementById("admin-tab-btn-" + subTabId);
  if (activeBtn) activeBtn.classList.add("active");
  
  // Hide all subviews
  document.querySelectorAll("#view-admin .admin-subview").forEach(sv => {
    sv.style.display = "none";
    sv.classList.remove("active");
  });
  
  // Show selected subview
  const targetSv = document.getElementById("admin-subview-" + subTabId);
  if (targetSv) {
    targetSv.style.display = "block";
    targetSv.classList.add("active");
  }
  
  // Render sub-view specifics
  if (subTabId === "analytics") {
    setTimeout(renderAdminCharts, 50);
  } else if (subTabId === "users") {
    renderAdminUsersTable();
  } else if (subTabId === "taxonomies") {
    renderAdminTaxonomies();
  } else if (subTabId === "announcements") {
    renderAdminAnnouncementsTable();
  } else if (subTabId === "workflows") {
    const procSelect = document.getElementById("workflowProcSelect");
    if (procSelect) {
      procSelect.innerHTML = state.procedureTypes.map(p => `<option value="${p}">${p}</option>`).join('');
      procSelect.value = selectedWorkflowProc;
    }
    changeWorkflowProc();
  } else if (subTabId === "tabs") {
    renderAdminTabs();
  } else if (subTabId === "eforms") {
    renderAdminEForms();
    if (selectedReportFormId) {
      renderEFormReportingDashboard();
    }
  }
}

// Custom Admin charts rendering using Canvas (Vanilla JS)
function renderAdminCharts() {
  // 1. Traffic Chart (Line chart/Bar Chart)
  drawBarChart("adminChartTraffic", 
    ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"],
    [
      { label: "Lượt truy cập", color: "#0284c7", data: [120, 150, 180, 142, 160, 45, 30] }
    ]
  );
  
  // 2. Approvals Metric Chart (Doughnut Chart)
  drawDoughnut("adminChartApprovals",
    ["Đã phê duyệt", "Đang xử lý", "Từ chối đề xuất"],
    [45, 12, 4],
    ["#10b981", "#f59e0b", "#e11d48"]
  );
}

// User Management Actions
function renderAdminUsersTable() {
  const tbody = document.getElementById("adminUsersTableBody");
  const query = document.getElementById("adminSearchUserInput").value.trim().toLowerCase();
  const dept = document.getElementById("adminFilterUserDept").value;
  
  let list = DIRECTORY;
  if (dept !== "all") {
    list = list.filter(u => u.dept === dept);
  }
  if (query) {
    list = list.filter(u => u.name.toLowerCase().includes(query) || u.title.toLowerCase().includes(query) || u.ext.includes(query));
  }
  
  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:20px; color:var(--text-muted);">Không tìm thấy nhân sự phù hợp</td></tr>`;
    return;
  }
  
  tbody.innerHTML = list.map((u, index) => {
    const absIndex = DIRECTORY.findIndex(x => x.email === u.email);
    const accountKey = Object.keys(state.users).find(k => state.users[k].name === u.name || state.users[k].email === u.email);
    
    let permissionsHtml = '';
    if (accountKey) {
      const userAcc = state.users[accountKey];
      if (!userAcc.permissions) {
        userAcc.permissions = { isAdmin: false, canPostNews: false, canUploadDocs: false, canManageProcedures: false };
      }
      
      const p = userAcc.permissions;
      permissionsHtml = `
        <div style="display:flex; gap:12px; font-size:0.78rem; align-items:center;">
          <label style="display:flex; align-items:center; gap:3px; margin:0;"><input type="checkbox" ${p.isAdmin ? 'checked' : ''} onclick="updateUserPermission('${accountKey}', 'isAdmin', this.checked)" ${accountKey === 'admin' ? 'disabled' : ''}> Admin</label>
          <label style="display:flex; align-items:center; gap:3px; margin:0;"><input type="checkbox" ${p.canPostNews ? 'checked' : ''} onclick="updateUserPermission('${accountKey}', 'canPostNews', this.checked)"> Đăng tin</label>
          <label style="display:flex; align-items:center; gap:3px; margin:0;"><input type="checkbox" ${p.canUploadDocs ? 'checked' : ''} onclick="updateUserPermission('${accountKey}', 'canUploadDocs', this.checked)"> Đăng VB</label>
          <label style="display:flex; align-items:center; gap:3px; margin:0;"><input type="checkbox" ${p.canManageProcedures ? 'checked' : ''} onclick="updateUserPermission('${accountKey}', 'canManageProcedures', this.checked)"> Luồng duyệt</label>
        </div>
      `;
    } else {
      permissionsHtml = `
        <button class="btn btn-outline btn-xs" onclick="createLoginAccount('${u.name}', '${u.title}', '${u.dept}', '${u.email}', '${u.phone}', '${u.initials}', '${u.color}')" style="padding: 2px 6px; font-size: 0.72rem;">Cấp tài khoản</button>
      `;
    }
    
    return `
      <tr>
        <td>
          <div style="display:flex; align-items:center; gap:8px;">
            <div class="avatar sm" style="width:24px; height:24px; font-size:0.65rem; background:${u.color}; color:white;">${u.initials}</div>
            <strong style="color:var(--text);">${u.name}</strong>
          </div>
        </td>
        <td>${u.title}</td>
        <td>${u.dept}</td>
        <td><strong>${u.ext}</strong></td>
        <td style="min-width: 250px;">${permissionsHtml}</td>
        <td>
          <button class="action-icon-btn edit" onclick="editUserAction(${absIndex})" title="Chỉnh sửa"><span class="material-symbols-outlined" style="font-size:16px;">edit</span></button>
          <button class="action-icon-btn delete" onclick="deleteUserAction(${absIndex})" title="Xóa"><span class="material-symbols-outlined" style="font-size:16px;">delete</span></button>
        </td>
      </tr>
    `;
  }).join('');
}

function updateUserPermission(accountKey, permissionKey, value) {
  if (!state.users[accountKey]) return;
  if (!state.users[accountKey].permissions) {
    state.users[accountKey].permissions = { isAdmin: false, canPostNews: false, canUploadDocs: false, canManageProcedures: false };
  }
  state.users[accountKey].permissions[permissionKey] = value;
  saveState("users", state.users);
  showToast(`Đã cập nhật quyền của tài khoản ${state.users[accountKey].name}`, "success");
  
  if (state.currentUser.username === accountKey) {
    state.currentUser = state.users[accountKey];
    updateUserProfileHeader();
    const isUserAdmin = state.currentUser.username === "admin" || (state.currentUser.permissions && state.currentUser.permissions.isAdmin);
    if (!isUserAdmin && state.activeView === "admin") {
      switchView("dashboard");
    }
  }
  
  renderAdminUsersTable();
}

function createLoginAccount(name, role, dept, email, phone, initials, color) {
  const username = email.split('@')[0].replace(/\./g, '_');
  if (state.users[username]) {
    showToast("Tài khoản đã tồn tại trên hệ thống", "warning");
    return;
  }
  
  state.users[username] = {
    username: username,
    name: name,
    role: role,
    dept: dept,
    empId: "EMP" + String(100 + Object.keys(state.users).length).padStart(3, '0'),
    email: email,
    phone: phone,
    ext: "300",
    initials: initials,
    color: color || "#0284c7",
    permissions: {
      isAdmin: false,
      canPostNews: false,
      canUploadDocs: false,
      canManageProcedures: false
    }
  };
  
  saveState("users", state.users);
  showToast(`Đã cấp tài khoản đăng nhập cho ${name}`, "success");
  updateLoginSelectOptions();
  renderAdminUsersTable();
}

function updateLoginSelectOptions() {
  const loginSelect = document.getElementById("loginUser");
  if (loginSelect) {
    loginSelect.innerHTML = Object.keys(state.users).map(k => {
      const u = state.users[k];
      const isAdm = u.username === 'admin' || (u.permissions && u.permissions.isAdmin);
      return `<option value="${u.username}">${u.name} - ${u.role} (${isAdm ? 'Admin' : 'Nhân sự'})</option>`;
    }).join('');
  }
}

function filterAdminUsersTable() {
  renderAdminUsersTable();
}

function openNewUserModal() {
  document.getElementById("formNewUser").reset();
  document.getElementById("editUserIndex").value = "-1";
  document.getElementById("modalNewUserHeader").textContent = "Thêm tài khoản nhân sự mới";
  openModal("modalNewUser");
}

function editUserAction(index) {
  const u = DIRECTORY[index];
  if (!u) return;
  
  document.getElementById("newUserName").value = u.name;
  document.getElementById("newUserRole").value = u.title;
  document.getElementById("newUserDept").value = u.dept;
  document.getElementById("newUserEmail").value = u.email;
  document.getElementById("newUserExt").value = u.ext;
  document.getElementById("newUserPhone").value = u.phone;
  
  document.getElementById("editUserIndex").value = index;
  document.getElementById("modalNewUserHeader").textContent = `Chỉnh sửa thông tin: ${u.name}`;
  openModal("modalNewUser");
}

function deleteUserAction(index) {
  const u = DIRECTORY[index];
  if (!u) return;
  
  if (confirm(`Bạn có chắc chắn muốn xóa tài khoản nhân sự "${u.name}" khỏi hệ thống?`)) {
    // Delete simulation
    DIRECTORY.splice(index, 1);
    
    // Save directory (simulate local save or variable persistence)
    showToast(`Đã xóa tài khoản nhân sự ${u.name} khỏi hệ thống`, "danger");
    renderAdminUsersTable();
    renderDirectory(); // sync general directory
  }
}

function submitNewUser() {
  const name = document.getElementById("newUserName").value.trim();
  const role = document.getElementById("newUserRole").value.trim();
  const dept = document.getElementById("newUserDept").value;
  const email = document.getElementById("newUserEmail").value.trim();
  const ext = document.getElementById("newUserExt").value.trim();
  const phone = document.getElementById("newUserPhone").value.trim();
  const editIndex = parseInt(document.getElementById("editUserIndex").value);
  
  if (!name || !role || !email || !ext || !phone) {
    showToast("Vui lòng điền đầy đủ các thông tin bắt buộc", "warning");
    return;
  }
  
  // Initials generator
  const nameParts = name.split(' ');
  const initials = nameParts.length > 1 
    ? (nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)).toUpperCase()
    : name.substring(0, 2).toUpperCase();
  
  const colors = ["#0284c7", "#7c3aed", "#059669", "#d97706", "#dc2626", "#0891b2"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  const userData = {
    name: name,
    title: role,
    dept: dept,
    email: email,
    ext: ext,
    phone: phone,
    initials: initials,
    color: randomColor
  };
  
  if (editIndex > -1) {
    // Update existing user
    userData.color = DIRECTORY[editIndex].color;
    DIRECTORY[editIndex] = userData;
    showToast(`Đã cập nhật thông tin thành sự ${name}`, "success");
  } else {
    // Create new user
    DIRECTORY.push(userData);
    showToast(`Đã thêm nhân sự mới ${name} vào hệ thống`, "success");
  }
  
  closeModal("modalNewUser");
  renderAdminUsersTable();
  renderDirectory(); // sync general directory
}

// Config Portal Action
function saveAdminConfig() {
  const portalName = document.getElementById("adminConfigPortalName").value.trim();
  const company = document.getElementById("adminConfigCompany").value.trim();
  
  if (!portalName || !company) {
    showToast("Vui lòng không để trống tên cổng thông tin và tên doanh nghiệp", "warning");
    return;
  }
  
  // Save settings simulation
  showToast("Đã lưu các thiết lập cấu hình Cổng thông tin thành công!", "success");
  
  // Dynamically update brand name at header
  const titleEls = document.querySelectorAll(".brand-info h1");
  titleEls.forEach(el => el.textContent = portalName);
  
  const descEls = document.querySelectorAll(".brand-info p");
  descEls.forEach(el => el.textContent = company);
}

// Announcements Monitoring
function renderAdminAnnouncementsTable() {
  const tbody = document.getElementById("adminAnnouncementsTableBody");
  
  // Select mandatory announcements
  const list = state.news.filter(n => n.category === "thong-bao" || n.category === "quyet-dinh");
  
  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:20px; color:var(--text-muted);">Không có thông báo nào được tìm thấy</td></tr>`;
    return;
  }
  
  tbody.innerHTML = list.map(n => {
    const totalEmployees = DIRECTORY.length;
    const readCount = n.readBy.length;
    const ratio = Math.round((readCount / totalEmployees) * 100);
    const unreadCount = totalEmployees - readCount;
    
    return `
      <tr>
        <td style="max-width:320px; font-weight:600; cursor:pointer;" onclick="showNewsDetail(${n.id})">${n.title}</td>
        <td><span class="badge ${n.category === 'quyet-dinh' ? 'badge-purple' : 'badge-primary'}">${n.catLabel}</span></td>
        <td>
          <span class="badge ${n.mandatory ? 'badge-danger' : 'badge-neutral'}">${n.mandatory ? 'BẮT BUỘC' : 'TỰ CHỌN'}</span>
        </td>
        <td><strong>${readCount}</strong> / ${totalEmployees} nhân sự</td>
        <td>
          <div style="display:flex; align-items:center; gap:8px;">
            <strong style="color:${ratio >= 80 ? 'var(--success)' : ratio >= 50 ? 'var(--warning)' : 'var(--danger)'};">${ratio}%</strong>
            <div class="task-progress" style="width:60px; height:6px;">
              <div class="task-progress-bar" style="width:${ratio}%; background:${ratio >= 80 ? 'var(--success)' : ratio >= 50 ? 'var(--warning)' : 'var(--danger)'};"></div>
            </div>
          </div>
        </td>
        <td>
          <button class="action-icon-btn edit" onclick="showReadRatio(${n.id})" style="padding:4px 8px; font-size:0.75rem;"><span class="material-symbols-outlined" style="font-size:14px;">analytics</span> Chi tiết</button>
          ${unreadCount > 0 && n.mandatory ? `
            <button class="action-icon-btn remind" onclick="sendAdminReadReminder(${n.id}, ${unreadCount})" style="padding:4px 8px; font-size:0.75rem;"><span class="material-symbols-outlined" style="font-size:14px;">mail</span> Nhắc nhở</button>
          ` : ''}
        </td>
      </tr>
    `;
  }).join('');
}

function sendAdminReadReminder(newsId, unreadCount) {
  const post = state.news.find(n => n.id === newsId);
  if (!post) return;
  
  showToast(`Đã gửi email nhắc nhở khẩn cấp đến ${unreadCount} nhân sự chưa đọc thông báo!`, "success");
}

// ==========================================
// SHARED TAXONOMIES MANAGEMENT (ADMIN ONLY)
// ==========================================

function populateTaxonomyDropdowns() {
  // 1. Calendar/Event types
  const filterCalendarType = document.getElementById("filterCalendarType");
  const newEventType = document.getElementById("newEventType");
  if (filterCalendarType && newEventType) {
    let filterHtml = '<option value="all">Tất cả loại lịch</option>';
    let formHtml = '';
    state.eventTypes.forEach(t => {
      let val = t;
      if (t === "Cuộc họp") val = "meeting";
      else if (t === "Sự kiện") val = "event";
      else if (t === "Sinh nhật") val = "birthday";
      else if (t === "Nghỉ lễ") val = "holiday";
      
      filterHtml += `<option value="${val}">${t}</option>`;
      formHtml += `<option value="${val}">${t}</option>`;
    });
    filterCalendarType.innerHTML = filterHtml;
    newEventType.innerHTML = formHtml;
  }
  
  // 2. Rooms
  const newEventLocation = document.getElementById("newEventLocation");
  if (newEventLocation) {
    let html = '';
    state.rooms.forEach(r => {
      html += `<option value="${r}">${r}</option>`;
    });
    newEventLocation.innerHTML = html;
  }
  
  // 3. Document categories
  const filterDocType = document.getElementById("filterDocType");
  const newDocType = document.getElementById("newDocType");
  if (filterDocType && newDocType) {
    let filterHtml = '<option value="all">Tất cả loại</option>';
    let formHtml = '';
    state.docCategories.forEach(c => {
      filterHtml += `<option value="${c}">${c}</option>`;
      formHtml += `<option value="${c}">${c}</option>`;
    });
    filterDocType.innerHTML = filterHtml;
    newDocType.innerHTML = formHtml;
  }

  // 4. Departments
  const filterDocDept = document.getElementById("filterDocDept");
  if (filterDocDept) {
    let filterHtml = '<option value="all">Tất cả đơn vị</option>';
    state.departments.forEach(d => {
      filterHtml += `<option value="${d}">${d}</option>`;
    });
    filterDocDept.innerHTML = filterHtml;
  }
}

function renderAdminTaxonomies() {
  // Update counts
  document.getElementById("count-rooms").textContent = `${state.rooms.length} phòng`;
  document.getElementById("count-docs").textContent = `${state.docCategories.length} loại`;
  document.getElementById("count-events").textContent = `${state.eventTypes.length} loại`;
  document.getElementById("count-depts").textContent = `${state.departments.length} phòng ban`;
  document.getElementById("count-procs").textContent = `${state.procedureTypes.length} thủ tục`;
  
  // Render lists
  const renderList = (containerId, items, type) => {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (items.length === 0) {
      container.innerHTML = `<div style="padding:15px; text-align:center; color:var(--text-muted); font-size:0.85rem; font-style:italic;">Trống</div>`;
      return;
    }
    
    container.innerHTML = items.map((item, idx) => `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 15px; border-bottom:1px solid var(--border-light); background:#fff; transition:var(--transition-fast);">
        <span style="font-weight:500; font-size:0.85rem; color:var(--text-primary);">${item}</span>
        <button onclick="deleteTaxonomyItem('${type}', ${idx})" style="background:none; border:none; color:var(--danger); cursor:pointer; padding:4px; display:flex; align-items:center; transition: opacity 0.2s;" onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1">
          <span class="material-symbols-outlined" style="font-size:16px;">delete</span>
        </button>
      </div>
    `).join('');
  };
  
  renderList("rooms-list-container", state.rooms, "rooms");
  renderList("doc-categories-list-container", state.docCategories, "docCategories");
  renderList("event-types-list-container", state.eventTypes, "eventTypes");
  renderList("depts-list-container", state.departments, "departments");
  renderList("procs-list-container", state.procedureTypes, "procedureTypes");
}

function addTaxonomyItem(type) {
  let inputId = "";
  if (type === "rooms") inputId = "addRoomInput";
  else if (type === "docCategories") inputId = "addDocCatInput";
  else if (type === "eventTypes") inputId = "addEventTypeInput";
  else if (type === "departments") inputId = "addDeptInput";
  else if (type === "procedureTypes") inputId = "addProcTypeInput";
  
  const input = document.getElementById(inputId);
  if (!input) return;
  
  const val = input.value.trim();
  if (!val) {
    showToast("Vui lòng nhập tên danh mục cần thêm", "warning");
    return;
  }
  
  // Prevent duplicate
  if (state[type].includes(val)) {
    showToast("Danh mục này đã tồn tại", "warning");
    return;
  }
  
  state[type].push(val);
  saveState(type, state[type]);
  input.value = "";
  
  // Re-populate dropdowns across the application
  populateTaxonomyDropdowns();
  
  // Re-render
  renderAdminTaxonomies();
  
  // If calendar or documents lists are active, refresh them
  if (state.activeView === "calendar") renderCalendar();
  if (state.activeView === "documents") renderDocuments();
  if (state.activeView === "requests") renderRequestsView();
  
  showToast("Đã thêm danh mục thành công!", "success");
}

function deleteTaxonomyItem(type, index) {
  const item = state[type][index];
  
  if (confirm(`Bạn có chắc chắn muốn xóa danh mục "${item}"?`)) {
    state[type].splice(index, 1);
    saveState(type, state[type]);
    
    // Re-populate dropdowns
    populateTaxonomyDropdowns();
    
    // Re-render
    renderAdminTaxonomies();
    
    // Refresh views if open
    if (state.activeView === "calendar") renderCalendar();
    if (state.activeView === "documents") renderDocuments();
    if (state.activeView === "requests") renderRequestsView();
    
    showToast("Đã xóa danh mục thành công!", "success");
  }
}

// ==========================================
// DYNAMIC APPROVAL WORKFLOW SETTINGS
// ==========================================
let selectedWorkflowProc = "Nghỉ phép năm";
let currentWorkflowSteps = [];
let currentProcFields = [];

function changeWorkflowProc() {
  selectedWorkflowProc = document.getElementById("workflowProcSelect").value;
  currentWorkflowSteps = JSON.parse(JSON.stringify(state.procedureWorkflows[selectedWorkflowProc] || []));
  const def = state.procedureDefs[selectedWorkflowProc] || { description: "", fields: [] };
  currentProcFields = JSON.parse(JSON.stringify(def.fields || []));
  const descEl = document.getElementById("workflowProcDescription");
  if (descEl) descEl.value = def.description || "";
  renderWorkflowDesignTimeline();
  renderProcFieldsDesigner();
}

// Thêm thủ tục hành chính mới ngay trong màn cấu hình luồng.
function addProcedureInWorkflow() {
  const input = document.getElementById("newProcNameInput");
  if (!input) return;
  const name = input.value.trim();
  if (!name) { showToast("Vui lòng nhập tên thủ tục mới", "warning"); return; }
  if (state.procedureTypes.includes(name)) { showToast("Thủ tục này đã tồn tại", "warning"); return; }
  state.procedureTypes.push(name);
  state.procedureWorkflows[name] = [];
  state.procedureDefs[name] = { description: "", fields: [] };
  saveState("procedureTypes", state.procedureTypes);
  saveState("procedureWorkflows", state.procedureWorkflows);
  saveState("procedureDefs", state.procedureDefs);
  input.value = "";
  const sel = document.getElementById("workflowProcSelect");
  if (sel) { sel.innerHTML = state.procedureTypes.map(p => `<option value="${p}">${p}</option>`).join(''); sel.value = name; }
  populateTaxonomyDropdowns();
  if (typeof renderAdminTaxonomies === "function") renderAdminTaxonomies();
  changeWorkflowProc();
  showToast(`Đã thêm thủ tục "${name}"`, "success");
}

// ---- Trình thiết kế TRƯỜNG dữ liệu cho thủ tục ----
function renderProcFieldsDesigner() {
  const el = document.getElementById("procFieldsDesigner");
  if (!el) return;
  const typeLabels = { text: "Chữ", textarea: "Đoạn văn", number: "Số", date: "Ngày", time: "Giờ", select: "Danh sách chọn" };
  if (!currentProcFields.length) {
    el.innerHTML = `<div style="text-align:center; padding:14px; color:var(--text-muted); font-style:italic; font-size:0.85rem;">Chưa có trường nào. Bấm "Thêm trường" để định nghĩa dữ liệu người dùng cần nhập.</div>`;
    return;
  }
  el.innerHTML = currentProcFields.map((f, idx) => `
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px; background:#f8fafc; border:1px solid var(--border-light); padding:10px 12px; border-radius:6px;">
      <span class="material-symbols-outlined" style="color:var(--primary); font-size:18px;">${f.type === 'textarea' ? 'notes' : f.type === 'date' ? 'event' : f.type === 'number' ? 'tag' : f.type === 'select' ? 'list' : 'edit'}</span>
      <div style="flex:1;">
        <div style="font-size:0.86rem; font-weight:700;">${f.label} ${f.required ? '<span style="color:var(--danger); font-size:0.72rem;">(bắt buộc)</span>' : ''}</div>
        <div style="font-size:0.75rem; color:var(--text-secondary);">Kiểu: ${typeLabels[f.type] || f.type}</div>
      </div>
      <button onclick="deleteProcField(${idx})" style="background:none; border:none; color:var(--danger); cursor:pointer; padding:4px; display:flex;"><span class="material-symbols-outlined" style="font-size:18px;">delete</span></button>
    </div>
  `).join('');
}

function openAddProcFieldModal() {
  document.getElementById("newFieldLabel").value = "";
  document.getElementById("newFieldType").value = "text";
  document.getElementById("newFieldRequired").checked = true;
  openModal("modalAddProcField");
}

function submitAddProcField() {
  const label = document.getElementById("newFieldLabel").value.trim();
  const type = document.getElementById("newFieldType").value;
  const required = document.getElementById("newFieldRequired").checked;
  if (!label) { showToast("Vui lòng nhập tên trường", "warning"); return; }
  const id = "f_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  currentProcFields.push({ id, label, type, required });
  renderProcFieldsDesigner();
  closeModal("modalAddProcField");
  showToast("Đã thêm trường dữ liệu", "success");
}

function deleteProcField(idx) {
  currentProcFields.splice(idx, 1);
  renderProcFieldsDesigner();
}

function renderWorkflowDesignTimeline() {
  const timelineEl = document.getElementById("workflowDesignTimeline");
  if (!timelineEl) return;
  
  if (!currentWorkflowSteps || currentWorkflowSteps.length === 0) {
    timelineEl.innerHTML = `
      <div style="text-align: center; padding: 20px; color: var(--text-muted); font-style: italic;">
        <span class="material-symbols-outlined" style="font-size:24px; vertical-align:middle; margin-right:4px;">alt_route</span>
        Chưa có bước phê duyệt nào được cấu hình cho thủ tục này.
      </div>
    `;
    return;
  }
  
  timelineEl.innerHTML = currentWorkflowSteps.map((step, idx) => `
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px; background: #f8fafc; border: 1px solid var(--border-light); padding: 12px; border-radius: 6px;">
      <div style="width: 28px; height: 28px; border-radius: 50%; background: var(--primary); color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.85rem;">
        ${idx + 1}
      </div>
      <div style="flex: 1;">
        <div style="font-size: 0.88rem; font-weight: 700; color: var(--text);">${step.stepName}</div>
        <div style="font-size: 0.8rem; color: var(--text-secondary); display: flex; align-items: center; gap: 4px; margin-top: 2px;">
          <span class="material-symbols-outlined" style="font-size:12px;">person</span>
          Người duyệt: <strong>${step.approverName}</strong> (${step.approverKey})
        </div>
      </div>
      <button onclick="deleteWorkflowStep(${idx})" style="background: none; border: none; color: var(--danger); cursor: pointer; padding: 4px; display: flex; align-items: center;">
        <span class="material-symbols-outlined" style="font-size: 18px;">delete</span>
      </button>
    </div>
  `).join('');
}

function openAddWorkflowStepModal() {
  document.getElementById("newStepName").value = "";
  
  // Populate approver select options dynamically from state.users
  const select = document.getElementById("newStepApprover");
  if (select) {
    select.innerHTML = Object.keys(state.users).map(k => {
      const u = state.users[k];
      return `<option value="${u.username}">${u.name} (${u.role})</option>`;
    }).join('');
  }
  
  openModal("modalAddWorkflowStep");
}

function submitAddWorkflowStep() {
  const stepName = document.getElementById("newStepName").value.trim();
  const approverKey = document.getElementById("newStepApprover").value;
  
  if (!stepName) {
    showToast("Vui lòng nhập tên bước phê duyệt", "warning");
    return;
  }
  
  const approverUser = state.users[approverKey];
  if (!approverUser) return;
  
  currentWorkflowSteps.push({
    stepName: stepName,
    approverName: approverUser.name,
    approverKey: approverKey
  });
  
  renderWorkflowDesignTimeline();
  closeModal("modalAddWorkflowStep");
  showToast("Đã thêm bước phê duyệt", "success");
}

function deleteWorkflowStep(index) {
  currentWorkflowSteps.splice(index, 1);
  renderWorkflowDesignTimeline();
}

function saveWorkflowConfig() {
  state.procedureWorkflows[selectedWorkflowProc] = JSON.parse(JSON.stringify(currentWorkflowSteps));
  saveState("procedureWorkflows", state.procedureWorkflows);
  // Lưu mô tả luồng nghiệp vụ + các trường dữ liệu
  const descEl = document.getElementById("workflowProcDescription");
  state.procedureDefs[selectedWorkflowProc] = {
    description: descEl ? descEl.value.trim() : "",
    fields: JSON.parse(JSON.stringify(currentProcFields))
  };
  saveState("procedureDefs", state.procedureDefs);
  showToast(`Đã lưu cấu hình thủ tục "${selectedWorkflowProc}" (luồng + trường dữ liệu)`, "success");
}

// ==========================================
// DYNAMIC MAIN TABS & NAVIGATION CONFIG
// ==========================================
const TAB_LABELS = {
  "dashboard": { label: "Trang chủ", icon: "dashboard" },
  "calendar": { label: "Lịch công tác", icon: "calendar_month" },
  "news": { label: "Tin tức & Thông báo", icon: "newspaper" },
  "documents": { label: "Văn bản nội bộ", icon: "folder_open" },
  "requests": { label: "Yêu cầu / Trình duyệt", icon: "assignment_turned_in" },
  "directory": { label: "Danh bạ nhân sự", icon: "contacts" },
  "surveys": { label: "Khảo sát ý kiến", icon: "poll" },
  "albums": { label: "Thư viện ảnh", icon: "photo_library" },
  "eform": { label: "Thu thập eForm", icon: "ballot" }
};

function renderAdminTabs() {
  const container = document.getElementById("adminTabsListContainer");
  if (!container) return;
  
  container.innerHTML = Object.keys(TAB_LABELS).map(tabId => {
    const isVisible = state.activeTabs.includes(tabId);
    const info = TAB_LABELS[tabId];
    
    return `
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; background: white; border: 1px solid var(--border-light); border-radius: 6px; margin-bottom: 8px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span class="material-symbols-outlined" style="color: var(--primary);">${info.icon}</span>
          <strong style="font-size: 0.88rem; color: var(--text);">${info.label}</strong>
          <span style="font-size: 0.72rem; color: var(--text-muted); font-family: monospace;">(${tabId})</span>
        </div>
        <label class="switch-toggle" style="position: relative; display: inline-block; width: 40px; height: 22px; margin: 0;">
          <input type="checkbox" ${isVisible ? 'checked' : ''} onchange="toggleTabVisibility('${tabId}', this.checked)" style="opacity: 0; width: 0; height: 0;">
          <span style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #cbd5e1; transition: .3s; border-radius: 34px;" class="toggle-slider-bar"></span>
        </label>
      </div>
    `;
  }).join('');
  
  // Custom switch styles
  injectSwitchToggleCss();
}

function toggleTabVisibility(tabId, visible) {
  if (visible) {
    if (!state.activeTabs.includes(tabId)) {
      state.activeTabs.push(tabId);
    }
  } else {
    // Keep dashboard always visible
    if (tabId === "dashboard") {
      showToast("Không thể ẩn tab Trang chủ", "warning");
      renderAdminTabs();
      return;
    }
    state.activeTabs = state.activeTabs.filter(t => t !== tabId);
  }
  
  saveState("activeTabs", state.activeTabs);
  updateNavbarTabs();
  showToast("Đã cập nhật cấu trúc thanh điều hướng!", "success");
}

function updateNavbarTabs() {
  const navbar = document.getElementById("mainNavbarTabs");
  if (!navbar) return;
  
  navbar.innerHTML = state.activeTabs.map(tabId => {
    const info = TAB_LABELS[tabId];
    if (!info) return '';
    const isActive = state.activeView === tabId;
    
    return `
      <div class="nav-tab-item ${isActive ? 'active' : ''}" id="tab-${tabId}" onclick="switchView('${tabId}')">
        <span class="material-symbols-outlined">${info.icon}</span>
        ${info.label}
      </div>
    `;
  }).join('') + `
    <!-- Admin tab is handled dynamically based on role -->
    <div class="nav-tab-item" id="tab-admin" onclick="switchView('admin')" style="display: none; border-left: 1px solid var(--border-light); margin-left: auto;">
      <span class="material-symbols-outlined" style="color: var(--warning);">shield_person</span>
      Quản trị hệ thống
    </div>
  `;
  
  // Re-run profile info toggle to show/hide admin tab
  updateUserProfileHeader();
}

function injectSwitchToggleCss() {
  if (document.getElementById("injectedSwitchToggleCss")) return;
  const style = document.createElement("style");
  style.id = "injectedSwitchToggleCss";
  style.innerHTML = `
    .switch-toggle input:checked + .toggle-slider-bar {
      background-color: var(--primary) !important;
    }
    .switch-toggle .toggle-slider-bar::before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      transition: .3s;
      border-radius: 50%;
    }
    .switch-toggle input:checked + .toggle-slider-bar::before {
      transform: translateX(18px);
    }
  `;
  document.head.appendChild(style);
}

// ==========================================
// DYNAMIC E-FORMS & CHART REPORTING
// ==========================================
let currentEFormFields = [];
let currentEFormAssignees = []; // [] = tất cả nhân sự được điền

// Các kiểu trường như Google Form
const EFORM_FIELD_TYPES = [
  { value: "text", label: "Trả lời ngắn" },
  { value: "textarea", label: "Đoạn văn" },
  { value: "number", label: "Số" },
  { value: "date", label: "Ngày" },
  { value: "time", label: "Giờ" },
  { value: "select", label: "Danh sách thả xuống" },
  { value: "radio", label: "Trắc nghiệm (1 lựa chọn)" },
  { value: "checkbox", label: "Hộp kiểm (nhiều lựa chọn)" }
];
function eformTypeNeedsOptions(t) { return t === "select" || t === "radio" || t === "checkbox"; }

function openCreateEFormModal() {
  currentEFormFields = [
    { label: "Họ và tên", type: "text", required: true, id: "field_name", options: [] }
  ];
  currentEFormAssignees = []; // mặc định: tất cả nhân sự
  renderEFormAssigneesList();
  renderCreateEFormFieldsList();
  document.getElementById("newEFormName").value = "";
  document.getElementById("newEFormDesc").value = "";
  openModal("modalCreateEForm");
}

// ---- Chọn nhân sự sẽ điền form (phân quyền) ----
function renderEFormAssigneesList() {
  const el = document.getElementById("eformAssigneesList");
  if (!el) return;
  el.innerHTML = Object.keys(state.users).map(k => {
    const u = state.users[k];
    const checked = currentEFormAssignees.includes(u.username) ? 'checked' : '';
    return `<label style="display:flex; align-items:center; gap:6px; font-size:0.8rem; padding:3px 4px;"><input type="checkbox" ${checked} onchange="toggleEFormAssignee('${u.username}', this.checked)"> ${u.name} <span style="color:var(--text-muted); font-size:0.72rem;">(${u.role || u.username})</span></label>`;
  }).join('');
  const note = document.getElementById("eformAssigneesNote");
  if (note) note.textContent = currentEFormAssignees.length === 0 ? "Chưa chọn ai → mặc định TẤT CẢ nhân sự đều điền được." : `${currentEFormAssignees.length} nhân sự được chỉ định.`;
}
function toggleEFormAssignee(username, on) {
  if (on) { if (!currentEFormAssignees.includes(username)) currentEFormAssignees.push(username); }
  else { currentEFormAssignees = currentEFormAssignees.filter(u => u !== username); }
  renderEFormAssigneesList();
}
function toggleAllEFormAssignees(on) {
  currentEFormAssignees = on ? Object.keys(state.users).map(k => state.users[k].username) : [];
  renderEFormAssigneesList();
}

function renderCreateEFormFieldsList() {
  const container = document.getElementById("createEFormFieldsList");
  if (!container) return;
  container.innerHTML = currentEFormFields.map((f, idx) => {
    const typeOpts = EFORM_FIELD_TYPES.map(t => `<option value="${t.value}" ${f.type === t.value ? 'selected' : ''}>${t.label}</option>`).join('');
    const optionsRow = eformTypeNeedsOptions(f.type)
      ? `<input type="text" value="${(f.options || []).join(', ')}" onchange="updateEFormFieldOptions(${idx}, this.value)" placeholder="Các lựa chọn, cách nhau bởi dấu phẩy" style="width:100%; margin-top:6px; padding:4px 8px; font-size:0.78rem; border:1px solid var(--border-light); border-radius:4px;">`
      : '';
    return `
      <div style="margin-bottom: 8px; background: #f1f5f9; padding: 8px 12px; border-radius: 4px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="font-size:0.8rem; font-weight:700; color:var(--text-secondary); width:22px;">#${idx+1}</span>
          <input type="text" value="${f.label}" onchange="updateEFormFieldLabel(${idx}, this.value)" placeholder="Câu hỏi / Tên trường" style="flex:2; padding:4px 8px; font-size:0.8rem; border:1px solid var(--border-light); border-radius:4px;">
          <select onchange="updateEFormFieldType(${idx}, this.value)" style="flex:1; padding:4px 8px; font-size:0.8rem; border:1px solid var(--border-light); border-radius:4px;">${typeOpts}</select>
          <label style="display:flex; align-items:center; gap:2px; font-size:0.75rem; margin:0; white-space:nowrap;"><input type="checkbox" ${f.required ? 'checked' : ''} onchange="updateEFormFieldRequired(${idx}, this.checked)"> Bắt buộc</label>
          <button onclick="deleteEFormField(${idx})" style="background:none; border:none; color:var(--danger); cursor:pointer; display:flex; padding:2px;"><span class="material-symbols-outlined" style="font-size:16px;">delete</span></button>
        </div>
        ${optionsRow}
      </div>`;
  }).join('');
}

function addEFormField() {
  const id = "field_" + Date.now() + "_" + Math.random().toString(36).substring(2, 5);
  currentEFormFields.push({ label: "Câu hỏi mới", type: "text", required: false, id: id, options: [] });
  renderCreateEFormFieldsList();
}

function deleteEFormField(idx) {
  currentEFormFields.splice(idx, 1);
  renderCreateEFormFieldsList();
}

function updateEFormFieldLabel(idx, val) {
  currentEFormFields[idx].label = val;
}

function updateEFormFieldType(idx, val) {
  currentEFormFields[idx].type = val;
  if (eformTypeNeedsOptions(val) && (!currentEFormFields[idx].options || !currentEFormFields[idx].options.length)) {
    currentEFormFields[idx].options = ["Lựa chọn 1", "Lựa chọn 2"];
  }
  renderCreateEFormFieldsList();
}

function updateEFormFieldOptions(idx, val) {
  currentEFormFields[idx].options = val.split(',').map(s => s.trim()).filter(Boolean);
}

function updateEFormFieldRequired(idx, val) {
  currentEFormFields[idx].required = val;
}

function submitCreateEForm() {
  const name = document.getElementById("newEFormName").value.trim();
  const desc = document.getElementById("newEFormDesc").value.trim();

  if (!name) { showToast("Vui lòng điền tên biểu mẫu eForm", "warning"); return; }
  if (currentEFormFields.length === 0) { showToast("Vui lòng thêm ít nhất một trường nhập liệu", "warning"); return; }

  const newForm = {
    id: "form-" + Date.now(),
    name: name,
    description: desc,
    fields: currentEFormFields.map(f => ({
      label: f.label, type: f.type, required: !!f.required, id: f.id,
      options: eformTypeNeedsOptions(f.type) ? (f.options || []) : []
    })),
    assignedUsers: [...currentEFormAssignees], // [] = tất cả
    submissions: []
  };

  state.dynamicForms.push(newForm);
  saveState("dynamicForms", state.dynamicForms);

  renderAdminEForms();
  renderDynamicFormsListUser();
  if (typeof renderEFormCollect === "function") renderEFormCollect();
  closeModal("modalCreateEForm");
  showToast("Tạo eForm mới thành công!", "success");
}

function renderAdminEForms() {
  const listContainer = document.getElementById("adminEFormsListContainer");
  const submissionsContainer = document.getElementById("adminEFormSubmissionsContainer");
  if (!listContainer || !submissionsContainer) return;
  
  if (state.dynamicForms.length === 0) {
    listContainer.innerHTML = `<div style="padding:15px; text-align:center; color:var(--text-muted); font-style:italic;">Chưa có eForm nào</div>`;
    submissionsContainer.innerHTML = `<div style="padding:15px; text-align:center; color:var(--text-muted); font-style:italic;">Chưa chọn eForm để xem thống kê</div>`;
    return;
  }
  
  listContainer.innerHTML = state.dynamicForms.map(form => `
    <div style="padding:12px; background:white; border:1px solid var(--border-light); border-radius:6px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
      <div>
        <strong style="font-size:0.88rem; color:var(--text);">${form.name}</strong>
        <div style="font-size:0.75rem; color:var(--text-secondary); margin-top:2px;">Số lượt điền: <span class="badge badge-primary">${form.submissions.length}</span></div>
      </div>
      <div style="display:flex; gap:6px;">
        <button class="btn btn-outline btn-xs" onclick="selectEFormForReporting('${form.id}')">Xem báo cáo</button>
        <button class="btn btn-danger btn-xs" onclick="deleteEForm('${form.id}')"><span class="material-symbols-outlined" style="font-size:12px;">delete</span></button>
      </div>
    </div>
  `).join('');
}

function deleteEForm(formId) {
  if (confirm("Bạn có chắc chắn muốn xóa biểu mẫu eForm này không?")) {
    state.dynamicForms = state.dynamicForms.filter(f => f.id !== formId);
    saveState("dynamicForms", state.dynamicForms);
    renderAdminEForms();
    renderDynamicFormsListUser();
    showToast("Đã xóa eForm thành công", "success");
  }
}

let selectedReportFormId = null;
let reportChartType = "bar"; // default

function selectEFormForReporting(formId) {
  selectedReportFormId = formId;
  renderEFormReportingDashboard();
}

function changeReportChartType(type) {
  reportChartType = type;
  renderEFormReportingDashboard();
}

function renderEFormReportingDashboard() {
  const container = document.getElementById("adminEFormSubmissionsContainer");
  if (!container || !selectedReportFormId) return;
  
  const form = state.dynamicForms.find(f => f.id === selectedReportFormId);
  if (!form) return;
  
  // Render structure: Chart selectors + Chart Drawing Area + Data Table
  let html = `
    <div style="margin-bottom: 20px; background: white; border:1px solid var(--border-light); padding:16px; border-radius:8px;">
      <h3 style="font-size: 1.05rem; font-weight:700; color:var(--text); margin-bottom:4px;">${form.name}</h3>
      <p style="font-size: 0.8rem; color:var(--text-secondary); margin-bottom:12px;">${form.description || 'Không có mô tả'}</p>
      
      <!-- Chart Selector Row -->
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-light); padding-bottom:12px; margin-bottom:16px;">
        <span style="font-weight:600; font-size:0.85rem; color:var(--text);">Biểu đồ thống kê kết quả</span>
        <div style="display:flex; gap:6px;">
          <button class="btn btn-xs ${reportChartType === 'bar' ? 'btn-primary' : 'btn-outline'}" onclick="changeReportChartType('bar')">Cột (Bar)</button>
          <button class="btn btn-xs ${reportChartType === 'pie' ? 'btn-primary' : 'btn-outline'}" onclick="changeReportChartType('pie')">Tròn (Pie)</button>
          <button class="btn btn-xs ${reportChartType === 'line' ? 'btn-primary' : 'btn-outline'}" onclick="changeReportChartType('line')">Đường (Line)</button>
        </div>
      </div>
      
      <!-- Chart Render Box -->
      <div id="eformReportingChartContainer" style="display:flex; justify-content:center; align-items:center; padding:15px 0;">
        <!-- Dynamic Chart Drawing -->
        ${drawEFormReportingChart(form)}
      </div>
    </div>
    
    <!-- Submissions Table -->
    <div style="background: white; border:1px solid var(--border-light); border-radius:8px; overflow:hidden;">
      <div style="padding:12px 16px; border-bottom:1px solid var(--border-light); background:#f8fafc; display:flex; justify-content:space-between; align-items:center; gap:8px;">
        <span style="font-weight:700; font-size:0.88rem; color:var(--text);">Danh sách chi tiết dữ liệu thu thập (${form.submissions.length} bản ghi)</span>
        <button class="btn btn-success btn-sm" onclick="exportEFormExcel('${form.id}')" style="white-space:nowrap;"><span class="material-symbols-outlined" style="font-size:16px; vertical-align:middle;">download</span> Tải báo cáo Excel</button>
      </div>
      <div style="overflow-x:auto;">
        <table class="table" style="margin:0; font-size:0.82rem;">
          <thead>
            <tr>
              <th>Người nộp</th>
              <th>Ngày nộp</th>
              ${form.fields.map(f => `<th>${f.label}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${form.submissions.length === 0 ? `
              <tr><td colspan="${form.fields.length + 2}" style="text-align:center; padding:20px; color:var(--text-muted); font-style:italic;">Chưa có phản hồi nào</td></tr>
            ` : form.submissions.map(sub => `
              <tr>
                <td><strong>${sub.username}</strong></td>
                <td>${sub.date}</td>
                ${form.fields.map(f => `<td>${sub.data[f.id] !== undefined ? sub.data[f.id] : ''}</td>`).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
  
  container.innerHTML = html;
}

function drawEFormReportingChart(form) {
  if (!form.submissions || form.submissions.length === 0) {
    return `<div style="text-align:center; font-size:0.8rem; color:var(--text-muted); padding:20px 0;">Cần ít nhất một phản hồi để vẽ biểu đồ</div>`;
  }
  
  // Find a numeric or rating field to aggregate, or aggregate categories of a text field
  let targetField = form.fields.find(f => f.type === 'number');
  if (!targetField) targetField = form.fields[0]; // fallback
  
  // Count frequency of values
  const frequencies = {};
  form.submissions.forEach(sub => {
    let val = sub.data[targetField.id];
    if (val === undefined || val === null || val === '') val = "Trống";
    frequencies[val] = (frequencies[val] || 0) + 1;
  });
  
  const labels = Object.keys(frequencies);
  const data = Object.values(frequencies);
  const total = data.reduce((a, b) => a + b, 0);
  
  const colors = ["#0284c7", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899", "#3b82f6", "#14b8a6"];
  
  if (reportChartType === "bar") {
    // Generate simple SVG Bar Chart
    const maxVal = Math.max(...data);
    const height = 150;
    const width = 380;
    const barWidth = 35;
    const spacing = 15;
    const startX = 40;
    
    let barsSvg = '';
    labels.forEach((label, idx) => {
      const val = data[idx];
      const barHeight = maxVal > 0 ? (val / maxVal) * 110 : 0;
      const x = startX + idx * (barWidth + spacing);
      const y = height - barHeight - 25;
      const color = colors[idx % colors.length];
      
      barsSvg += `
        <!-- Bar -->
        <rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" fill="${color}" rx="3" />
        <!-- Value Label -->
        <text x="${x + barWidth/2}" y="${y - 6}" font-size="9" font-weight="700" fill="var(--text)" text-anchor="middle">${val}</text>
        <!-- Category Label -->
        <text x="${x + barWidth/2}" y="${height - 8}" font-size="9" fill="var(--text-secondary)" text-anchor="middle">${String(label).substring(0, 8)}</text>
      `;
    });
    
    return `
      <svg width="${width}" height="${height}" style="background:#f8fafc; border-radius:6px; border:1px solid var(--border-light)">
        <!-- Grid horizontal lines -->
        <line x1="30" y1="20" x2="${width-20}" y2="20" stroke="#e2e8f0" stroke-dasharray="3,3" />
        <line x1="30" y1="75" x2="${width-20}" y2="75" stroke="#e2e8f0" stroke-dasharray="3,3" />
        <line x1="30" y1="125" x2="${width-20}" y2="125" stroke="#e2e8f0" />
        
        <!-- Y-Axis indicators -->
        <text x="25" y="24" font-size="8" fill="var(--text-muted)" text-anchor="end">${maxVal}</text>
        <text x="25" y="79" font-size="8" fill="var(--text-muted)" text-anchor="end">${(maxVal/2).toFixed(1)}</text>
        <text x="25" y="128" font-size="8" fill="var(--text-muted)" text-anchor="end">0</text>
        
        ${barsSvg}
      </svg>
    `;
  } else if (reportChartType === "pie") {
    // Render HTML Pie Chart utilizing conic-gradient CSS
    let currentAngle = 0;
    const gradientSlices = [];
    
    labels.forEach((label, idx) => {
      const val = data[idx];
      const percentage = (val / total) * 100;
      const endAngle = currentAngle + (val / total) * 360;
      const color = colors[idx % colors.length];
      gradientSlices.push(`${color} ${currentAngle}deg ${endAngle}deg`);
      currentAngle = endAngle;
    });
    
    const conicGradient = gradientSlices.join(', ');
    
    // Legend list
    const legendHtml = labels.map((label, idx) => {
      const color = colors[idx % colors.length];
      const val = data[idx];
      const pct = ((val / total) * 100).toFixed(0);
      return `
        <div style="display:flex; align-items:center; gap:6px; font-size:0.78rem;">
          <span style="width:10px; height:10px; border-radius:50%; background:${color}; display:inline-block;"></span>
          <span style="color:var(--text-secondary)">${label}: <strong>${val} (${pct}%)</strong></span>
        </div>
      `;
    }).join('');
    
    return `
      <div style="display:flex; align-items:center; gap:24px; padding:10px;">
        <div style="width:110px; height:110px; border-radius:50%; background:conic-gradient(${conicGradient}); box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);"></div>
        <div style="display:flex; flex-direction:column; gap:4px; max-height:110px; overflow-y:auto;">
          ${legendHtml}
        </div>
      </div>
    `;
  } else {
    // Line chart
    const maxVal = Math.max(...data);
    const height = 150;
    const width = 380;
    const stepX = (width - 60) / (labels.length > 1 ? labels.length - 1 : 1);
    const startX = 35;
    
    let points = [];
    labels.forEach((label, idx) => {
      const val = data[idx];
      const x = startX + idx * stepX;
      const y = maxVal > 0 ? (height - 25 - (val / maxVal) * 100) : height - 25;
      points.push({x, y, val, label});
    });
    
    const pathD = points.map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
    
    let nodesSvg = '';
    points.forEach((p, idx) => {
      const color = colors[idx % colors.length];
      nodesSvg += `
        <!-- Node -->
        <circle cx="${p.x}" cy="${p.y}" r="4" fill="white" stroke="${color}" stroke-width="2" />
        <!-- Value Label -->
        <text x="${p.x}" y="${p.y - 8}" font-size="8" font-weight="700" fill="var(--text)" text-anchor="middle">${p.val}</text>
        <!-- Category Label -->
        <text x="${p.x}" y="${height - 8}" font-size="8" fill="var(--text-secondary)" text-anchor="middle">${String(p.label).substring(0, 8)}</text>
      `;
    });
    
    return `
      <svg width="${width}" height="${height}" style="background:#f8fafc; border-radius:6px; border:1px solid var(--border-light)">
        <!-- Grid horizontal lines -->
        <line x1="30" y1="25" x2="${width-20}" y2="25" stroke="#e2e8f0" stroke-dasharray="3,3" />
        <line x1="30" y1="125" x2="${width-20}" y2="125" stroke="#e2e8f0" />
        
        <!-- Y-Axis indicators -->
        <text x="25" y="28" font-size="8" fill="var(--text-muted)" text-anchor="end">${maxVal}</text>
        <text x="25" y="128" font-size="8" fill="var(--text-muted)" text-anchor="end">0</text>
        
        <!-- Line Path -->
        <path d="${pathD}" fill="none" stroke="var(--primary)" stroke-width="2" />
        
        ${nodesSvg}
      </svg>
    `;
  }
}

// User-facing E-Forms list in Dashboard/Home view
function renderDynamicFormsListUser() {
  const container = document.getElementById("dashboardDynamicFormsContainer");
  if (!container) return;

  const me = state.currentUser.username;
  const forms = state.dynamicForms.filter(f =>
    !f.assignedUsers || f.assignedUsers.length === 0 || f.assignedUsers.includes(me)
  );

  if (forms.length === 0) {
    container.innerHTML = `<div style="padding:16px; text-align:center; color:var(--text-muted); font-size:0.82rem; font-style:italic;">Hiện tại không có biểu mẫu khảo sát trực tuyến nào cần thực hiện.</div>`;
    return;
  }

  container.innerHTML = forms.map(form => {
    const isSubmitted = form.submissions.some(sub => sub.username === state.currentUser.username);
    
    return `
      <div class="card" style="padding:16px; border-color:var(--border-light); display:flex; justify-content:space-between; align-items:center; gap:12px; margin-bottom: 8px;">
        <div style="flex:1;">
          <div style="display:flex; align-items:center; gap:8px;">
            <strong style="font-size:0.88rem; color:var(--text);">${form.name}</strong>
            ${isSubmitted ? `<span class="badge badge-success" style="font-size:0.68rem; padding: 2px 6px;">Đã hoàn thành</span>` : `<span class="badge badge-warning" style="font-size:0.68rem; padding: 2px 6px;">Chưa hoàn thành</span>`}
          </div>
          <p style="font-size:0.8rem; color:var(--text-secondary); margin-top:4px; line-height:1.4;">${form.description || 'Vui lòng nhấn thực hiện để nhập tờ khai.'}</p>
        </div>
        <div>
          ${isSubmitted ? `
            <button class="btn btn-outline btn-sm" onclick="openEFormFillModal('${form.id}')" style="white-space:nowrap;">Xem lại</button>
          ` : `
            <button class="btn btn-primary btn-sm" onclick="openEFormFillModal('${form.id}')" style="white-space:nowrap;">Thực hiện</button>
          `}
        </div>
      </div>
    `;
  }).join('');
}

let activeFillFormId = null;

function openEFormFillModal(formId) {
  activeFillFormId = formId;
  const form = state.dynamicForms.find(f => f.id === formId);
  if (!form) return;
  
  document.getElementById("eformFillTitle").textContent = form.name;
  document.getElementById("eformFillDesc").textContent = form.description || '';
  
  const container = document.getElementById("eformFillFieldsContainer");
  if (!container) return;
  
  // Check if current user has already submitted
  const submission = form.submissions.find(sub => sub.username === state.currentUser.username);
  
  container.innerHTML = form.fields.map(f => {
    const value = submission ? submission.data[f.id] : '';
    const dis = submission ? 'disabled' : '';
    const requiredSpan = f.required && !submission ? '<span style="color:var(--danger)">*</span>' : '';
    const opts = f.options || [];

    let fieldHtml = '';
    if (f.type === 'textarea') {
      fieldHtml = `<textarea id="fill_${f.id}" class="form-control" rows="3" ${dis} placeholder="Nhập câu trả lời...">${value || ''}</textarea>`;
    } else if (f.type === 'select') {
      fieldHtml = `<select id="fill_${f.id}" class="form-control" ${dis}><option value="">-- Chọn --</option>${opts.map(o => `<option value="${o}" ${value === o ? 'selected' : ''}>${o}</option>`).join('')}</select>`;
    } else if (f.type === 'radio') {
      fieldHtml = `<div id="fill_${f.id}" class="eform-choice-group">${opts.map(o => `<label style="display:flex; align-items:center; gap:8px; padding:4px 0;"><input type="radio" name="fill_${f.id}" value="${o}" ${value === o ? 'checked' : ''} ${dis}> ${o}</label>`).join('')}</div>`;
    } else if (f.type === 'checkbox') {
      const vals = Array.isArray(value) ? value : (value ? String(value).split('; ') : []);
      fieldHtml = `<div id="fill_${f.id}" class="eform-choice-group">${opts.map(o => `<label style="display:flex; align-items:center; gap:8px; padding:4px 0;"><input type="checkbox" value="${o}" ${vals.includes(o) ? 'checked' : ''} ${dis}> ${o}</label>`).join('')}</div>`;
    } else {
      const t = ['number', 'date', 'time'].includes(f.type) ? f.type : 'text';
      fieldHtml = `<input type="${t}" id="fill_${f.id}" class="form-control" value="${value || ''}" ${dis} placeholder="Nhập câu trả lời..." />`;
    }

    return `
      <div class="form-group">
        <label>${f.label} ${requiredSpan}</label>
        ${fieldHtml}
      </div>
    `;
  }).join('');
  
  // Show or hide submit button based on submission status
  const submitBtn = document.getElementById("eformFillSubmitBtn");
  if (submitBtn) {
    submitBtn.style.display = submission ? 'none' : 'block';
  }
  
  openModal("modalFillEForm");
}

function submitEFormFillData() {
  if (!activeFillFormId) return;
  
  const form = state.dynamicForms.find(f => f.id === activeFillFormId);
  if (!form) return;
  
  // Collect data theo từng kiểu trường
  const data = {};
  for (let f of form.fields) {
    let val;
    if (f.type === 'radio') {
      const checked = document.querySelector(`input[name="fill_${f.id}"]:checked`);
      val = checked ? checked.value : '';
    } else if (f.type === 'checkbox') {
      const boxes = document.querySelectorAll(`#fill_${f.id} input[type="checkbox"]:checked`);
      val = Array.from(boxes).map(b => b.value);
    } else {
      const el = document.getElementById(`fill_${f.id}`);
      if (!el) continue;
      val = el.value.trim();
    }

    const isEmpty = f.type === 'checkbox' ? val.length === 0 : !val;
    if (f.required && isEmpty) {
      showToast(`Trường "${f.label}" là bắt buộc`, "warning");
      return;
    }

    if (f.type === 'number') data[f.id] = val === '' ? '' : Number(val);
    else if (f.type === 'checkbox') data[f.id] = val.join('; ');
    else data[f.id] = val;
  }

  const now = new Date();
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

  form.submissions.push({
    username: state.currentUser.username,
    date: dateStr,
    data: data
  });

  saveState("dynamicForms", state.dynamicForms);

  closeModal("modalFillEForm");
  showToast("Cảm ơn bạn đã hoàn thành biểu mẫu!", "success");

  renderDynamicFormsListUser();
  if (typeof renderEFormCollect === "function") renderEFormCollect();
  if (state.activeView === "admin") {
    renderAdminEForms();
    if (selectedReportFormId === activeFillFormId) {
      renderEFormReportingDashboard();
    }
  }
}

// ---- Tab "Thu thập eForm": nhân sự được phân quyền điền form ----
function renderEFormCollect() {
  const container = document.getElementById("eformCollectContainer");
  if (!container) return;
  const me = state.currentUser.username;
  const myForms = state.dynamicForms.filter(f =>
    !f.assignedUsers || f.assignedUsers.length === 0 || f.assignedUsers.includes(me)
  );

  if (myForms.length === 0) {
    container.innerHTML = `<div class="card" style="padding:40px; text-align:center; color:var(--text-muted); background:white;">
      <span class="material-symbols-outlined" style="font-size:3rem; display:block; margin-bottom:12px;">assignment_turned_in</span>
      Hiện không có biểu mẫu nào được giao cho bạn điền.
    </div>`;
    return;
  }

  container.innerHTML = myForms.map(form => {
    const done = form.submissions.some(s => s.username === me);
    return `<div class="card" style="padding:16px; display:flex; justify-content:space-between; align-items:center; gap:12px; margin-bottom:12px;">
      <div style="flex:1;">
        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
          <strong style="font-size:0.95rem;">${form.name}</strong>
          ${done ? '<span class="badge badge-success" style="font-size:0.68rem;">Đã hoàn thành</span>' : '<span class="badge badge-warning" style="font-size:0.68rem;">Chưa điền</span>'}
        </div>
        <p style="font-size:0.82rem; color:var(--text-secondary); margin-top:4px; line-height:1.4;">${form.description || ''}</p>
        <div style="font-size:0.72rem; color:var(--text-muted); margin-top:4px;">${form.fields.length} câu hỏi • ${form.submissions.length} lượt điền</div>
      </div>
      <button class="btn ${done ? 'btn-outline' : 'btn-primary'} btn-sm" onclick="openEFormFillModal('${form.id}')" style="white-space:nowrap;">${done ? 'Xem lại' : 'Điền ngay'}</button>
    </div>`;
  }).join('');
}

// ---- Xuất báo cáo Excel (bảng dữ liệu thu thập được) ----
function exportEFormExcel(formId) {
  const form = state.dynamicForms.find(f => f.id === (formId || selectedReportFormId));
  if (!form) return;
  if (!form.submissions.length) { showToast("Chưa có dữ liệu để xuất báo cáo", "warning"); return; }

  const esc = s => escapeHtmlBasic(s);
  const cell = v => esc(v === undefined || v === null ? "" : v);
  const head = `<tr><th>STT</th><th>Người nộp</th><th>Ngày nộp</th>${form.fields.map(f => `<th>${esc(f.label)}</th>`).join('')}</tr>`;
  const body = form.submissions.map((s, i) =>
    `<tr><td>${i + 1}</td><td>${esc(s.username)}</td><td>${esc(s.date)}</td>${form.fields.map(f => `<td>${cell(s.data[f.id])}</td>`).join('')}</tr>`
  ).join('');
  const table = `<table border="1" cellspacing="0" cellpadding="4"><thead>${head}</thead><tbody>${body}</tbody></table>`;
  const html = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel"><head><meta charset="UTF-8"></head><body><h3>${esc(form.name)}</h3><div>Tổng số phản hồi: ${form.submissions.length}</div><br/>${table}</body></html>`;

  const blob = new Blob(["﻿", html], { type: "application/vnd.ms-excel;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Baocao_${form.name.replace(/[^\p{L}\p{N}]+/gu, "_").replace(/^_+|_+$/g, "")}.xls`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Đã tải báo cáo Excel", "success");
}
