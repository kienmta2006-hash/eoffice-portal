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

const INITIAL_VIDEOS = [
  { id: 1, title: "Video toàn cảnh Ngày hội Gia đình ABC Family Day 2026", duration: "03:45", date: "2026-06-25", views: 245, bg: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=300" },
  { id: 2, title: "Hành trình chinh phục đỉnh cao teambuilding Hồ Tràm", duration: "05:12", date: "2026-06-20", views: 189, bg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=300" },
  { id: 3, title: "Chia sẻ của Giám đốc Nguyễn Văn An nhân dịp Kỷ niệm 10 năm thành lập", duration: "08:20", date: "2026-06-10", views: 420, bg: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=300" }
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

// Save State Helper
function saveState(key, data) {
  localStorage.setItem("eoffice_" + key, JSON.stringify(data));
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
  activeTabs: loadState("activeTabs", [
    "dashboard",
    "calendar",
    "news",
    "documents",
    "requests",
    "directory",
    "surveys",
    "albums"
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
  lightboxIndex: 0
};

// ==========================================
// 2. CONTROLLER, NAVIGATION & CORE LOGIC
// ==========================================

window.addEventListener("DOMContentLoaded", () => {
  // Sync state data on boot
  initApp();
});

function initApp() {
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

function updateUserProfileHeader() {
  document.getElementById("userAvatar").textContent = state.currentUser.initials;
  document.getElementById("userAvatar").style.background = state.currentUser.color;
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
            <button class="news-action-btn ${isBookmarked ? 'active' : ''}" onclick="toggleBookmarkNews(${n.id})">
              <span class="material-symbols-outlined">bookmark</span> ${isBookmarked ? 'Bỏ Lưu' : 'Lưu'}
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
  
  // If pinning this post, unpin other posts (only one pinned post as featured banner)
  if (!post.pinned) {
    state.news.forEach(n => n.pinned = false);
  }
  post.pinned = !post.pinned;
  
  saveState("news", state.news);
  renderNews();
  renderDashboard();
  showToast(post.pinned ? "Đã ghim bài viết lên đầu trang" : "Đã bỏ ghim bài viết", "success");
}

// Render Videos Row inside News view
function renderVideoNewsScroll() {
  const row = document.getElementById("videoNewsScrollRow");
  if (!row) return;
  const canPostNews = state.currentUser.username === 'admin' || (state.currentUser.permissions && state.currentUser.permissions.canPostNews);
  
  row.innerHTML = state.videos.map(v => `
    <div class="video-media-card" onclick="playVideoReal(${v.id})">
      <div class="video-thumb-container" style="background-image: url('${v.bg}')">
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

function playVideoReal(id) {
  const video = state.videos.find(v => v.id === id);
  if (!video) return;
  
  video.views++;
  saveState("videos", state.videos);
  renderVideoNewsScroll();
  
  // Fill Modal Video Player
  document.getElementById("videoPlayerTitle").textContent = video.title;
  const videoEl = document.getElementById("videoPlayerElement");
  if (videoEl) {
    videoEl.src = video.url;
    videoEl.load();
    videoEl.play().catch(err => console.log("Auto-play prevented:", err));
  }
  openModal("modalVideoPlayer");
}

function closeVideoPlayer() {
  const videoEl = document.getElementById("videoPlayerElement");
  if (videoEl) {
    videoEl.pause();
  }
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


// Render Albums Row preview inside News view
function renderAlbumsPreviewScroll() {
  const row = document.getElementById("albumsPreviewScrollRow");
  row.innerHTML = state.albums.map(a => `
    <div class="video-media-card" style="width: 250px;" onclick="switchView('albums')">
      <div class="video-thumb-container" style="background-image: url('${a.coverUrl}'); height: 130px;">
        <span class="badge badge-neutral" style="position: absolute; bottom: 8px; right: 8px; font-size: 0.7rem; background: rgba(0,0,0,0.6); color: white;">
          ${a.count} ảnh
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
    attachList.innerHTML = post.attachments.map(file => `
      <div class="attachment-item">
        <span class="material-symbols-outlined">picture_as_pdf</span>
        <span style="font-weight: 500;">${file.name}</span>
        <span>(${file.size})</span>
        <button class="btn btn-outline btn-sm" onclick="downloadFileSimulate('${file.name}')" style="margin-left: auto; padding: 4px 8px;"><span class="material-symbols-outlined" style="font-size: 14px;">download</span> Tải về</button>
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

function downloadFileSimulate(fileName) {
  showToast(`Đang chuẩn bị tải xuống: ${fileName}...`, "info");
  
  setTimeout(() => {
    const blob = new Blob(["Simulated content of " + fileName], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast(`Đã tải xuống tệp tin ${fileName} thành công!`, "success");
  }, 1000);
}

function updateNewsDetailActionButtons(post) {
  const isLiked = (post.likedBy || []).includes(state.currentUser.username);
  const isBookmarked = (post.bookmarkedBy || []).includes(state.currentUser.username);
  const isReadLater = (post.readLaterBy || []).includes(state.currentUser.username);
  
  document.getElementById("newsDetailLikeCount").textContent = post.likes;
  
  const btnLike = document.getElementById("btnLikeDetail");
  if (isLiked) btnLike.classList.add("active"); else btnLike.classList.remove("active");
  
  const btnBookmark = document.getElementById("btnBookmarkDetail");
  if (isBookmarked) {
    btnBookmark.classList.add("active");
    btnBookmark.innerHTML = `<span class="material-symbols-outlined">bookmark</span> Đã lưu trữ`;
  } else {
    btnBookmark.classList.remove("active");
    btnBookmark.innerHTML = `<span class="material-symbols-outlined">bookmark</span> Lưu trữ`;
  }
  
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
  if (input.files && input.files.length > 0) {
    if (input.files.length === 1) {
      label.textContent = `Đã chọn: ${input.files[0].name}`;
    } else {
      label.textContent = `Đã chọn ${input.files.length} tệp tin`;
    }
  } else {
    label.textContent = "Click đính kèm file (PDF, DOCX)";
  }
}

function handleNewDocFileChange(input) {
  const label = document.getElementById("newDocFileLabel");
  if (!label) return;
  if (input.files && input.files.length > 0) {
    label.textContent = `Đã chọn: ${input.files[0].name}`;
  } else {
    label.textContent = "Kéo thả file PDF văn bản hoặc Click để tải lên";
  }
}

function submitNewPost() {
  const category = document.getElementById("newPostCategory").value;
  const title = document.getElementById("newPostTitle").value.trim();
  const content = document.getElementById("newPostContent").value.trim();
  const docNum = document.getElementById("newPostDocNum").value.trim();
  const image = document.getElementById("newPostImageUrl").value;
  const mandatory = document.getElementById("newPostIsMandatory").checked;
  const priority = document.getElementById("newPostPriority").value;
  
  if (!title || !content) {
    showToast("Vui lòng điền đầy đủ tiêu đề và nội dung", "warning");
    return;
  }
  
  const fileInput = document.getElementById("newPostFile");
  const attachments = [];
  if (fileInput && fileInput.files) {
    for (let i = 0; i < fileInput.files.length; i++) {
      const file = fileInput.files[i];
      let sizeStr = "";
      if (file.size < 1024) sizeStr = file.size + " B";
      else if (file.size < 1024 * 1024) sizeStr = (file.size / 1024).toFixed(0) + " KB";
      else sizeStr = (file.size / (1024 * 1024)).toFixed(1) + " MB";
      
      attachments.push({
        name: file.name,
        size: sizeStr
      });
    }
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
  saveState("news", state.news);
  
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

function renderDocuments() {
  const tbody = document.getElementById("documentsTableBody");
  const query = document.getElementById("searchDocQuery").value.trim().toLowerCase();
  const docType = document.getElementById("filterDocType").value;
  const docDept = document.getElementById("filterDocDept").value;
  
  // Show/hide upload button based on permission
  const uploadBtn = document.getElementById("docUploadBtn");
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
        <a href="#" onclick="downloadFileSimulate('${d.file.name}'); event.preventDefault();" style="display:flex; align-items:center; gap:4px; font-weight:500;">
          <span class="material-symbols-outlined" style="font-size:18px; color:var(--danger)">picture_as_pdf</span>
          Tải về
        </a>
      </td>
      <td>
        <button class="btn btn-outline btn-sm" onclick="showDocDetail(${d.id})">Chi tiết</button>
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
  if (fileInput && fileInput.files && fileInput.files[0]) {
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
    dept: state.currentUser.dept,
    desc: desc,
    file: {
      name: fileName,
      size: sizeStr
    }
  };
  
  state.documents.unshift(newDoc);
  saveState("documents", state.documents);
  renderDocuments();
  closeModal("modalNewDoc");
  showToast("Tải lên tài liệu mới thành công", "success");
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
      <button class="btn btn-primary btn-sm" onclick="showToast('Tải tệp tin tài liệu...', 'success')" style="margin-left:auto;"><span class="material-symbols-outlined" style="font-size:14px;">download</span> Tải xuống</button>
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

function submitNewDoc() {
  const code = document.getElementById("newDocCode").value.trim();
  const type = document.getElementById("newDocType").value;
  const title = document.getElementById("newDocTitle").value.trim();
  const desc = document.getElementById("newDocDesc").value.trim();
  const dept = document.getElementById("newDocDept").value;
  const approver = document.getElementById("newDocApprover").value.trim();
  
  if (!code || !title) {
    showToast("Vui lòng nhập đầy đủ Số hiệu và Trích yếu văn bản", "warning");
    return;
  }
  
  const now = new Date();
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  
  const newDoc = {
    id: state.documents.length + 1,
    code: code,
    title: title,
    type: type,
    dept: dept,
    approver: approver || "Nguyễn Văn An (Giám đốc)",
    date: dateStr,
    desc: desc || "Tài liệu ban hành lưu trữ nội bộ.",
    versions: [
      { version: "v1.0", date: dateStr, author: state.currentUser.name, changeLog: "Phiên bản ban hành đầu tiên trên eOffice." }
    ],
    file: { name: code.replace(/\//g, "_") + "_Document.pdf", size: "1.2 MB" }
  };
  
  state.documents.unshift(newDoc);
  saveState("documents", state.documents);
  
  closeModal("modalNewDoc");
  showToast("Tải lên và ban hành văn bản thành công!", "success");
  
  document.getElementById("formNewDoc").reset();
  renderDocuments();
  renderDashboard();
}

// ==========================================
// 7. MODULE: ĐĂNG KÝ & PHÊ DUYỆT (REGISTRATIONS)
// ==========================================

function toggleRequestFormFields() {
  const type = document.getElementById("newRequestType").value;
  const container = document.getElementById("requestFieldsContainer");
  if (!container) return;
  
  let html = "";
  if (type === "Nghỉ phép" || type === "Nghỉ phép năm" || type.toLowerCase().includes("nghỉ")) {
    html = `
      <div class="form-row">
        <div class="form-group">
          <label for="reqLeaveStart">Ngày bắt đầu nghỉ *</label>
          <input type="date" id="reqLeaveStart" required>
        </div>
        <div class="form-group">
          <label for="reqLeaveEnd">Ngày đi làm lại *</label>
          <input type="date" id="reqLeaveEnd" required>
        </div>
      </div>
      <div class="form-group">
        <label for="reqLeaveBànGiao">Người bàn giao công việc *</label>
        <input type="text" id="reqLeaveBànGiao" placeholder="Tên đồng nghiệp bàn giao..." required>
      </div>
    `;
  } else if (type === "Xe công" || type === "Đăng ký xe công vụ" || type.toLowerCase().includes("xe")) {
    html = `
      <div class="form-group">
        <label for="reqCarRoute">Lộ trình di chuyển chi tiết *</label>
        <input type="text" id="reqCarRoute" placeholder="VD: Trụ sở chính -> Nhà máy Bình Dương -> Đồng Nai" required>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="reqCarDate">Ngày sử dụng xe *</label>
          <input type="date" id="reqCarDate" required>
        </div>
        <div class="form-group">
          <label for="reqCarPassengers">Số lượng nhân sự đi cùng *</label>
          <input type="number" id="reqCarPassengers" value="1" min="1" required>
        </div>
      </div>
    `;
  } else if (type === "Phòng họp" || type === "Đăng ký phòng họp" || type.toLowerCase().includes("phòng")) {
    html = `
      <div class="form-group">
        <label for="reqRoomName">Chọn phòng họp trống *</label>
        <select id="reqRoomName">
          <option value="Phòng họp A (Lầu 1 - 20 người)">Phòng họp A (Lầu 1 - 20 người)</option>
          <option value="Phòng họp B (Lầu 2 - 10 người)">Phòng họp B (Lầu 2 - 10 người)</option>
          <option value="Phòng khách VIP (Lầu trệt - 6 người)">Phòng khách VIP (Lầu trệt - 6 người)</option>
        </select>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="reqRoomDate">Ngày họp *</label>
          <input type="date" id="reqRoomDate" required>
        </div>
        <div class="form-group">
          <label>Thời gian đặt *</label>
          <div style="display:flex; gap:8px; align-items:center;">
            <input type="time" id="reqRoomStart" value="09:00" required>
            <span>-</span>
            <input type="time" id="reqRoomEnd" value="10:30" required>
          </div>
        </div>
      </div>
    `;
  } else {
    html = `
      <div style="padding:10px; background:#f0fdf4; color:#166534; font-size:0.8rem; border-radius:6px; margin-bottom:12px; font-weight:500;">
        Thủ tục đăng ký thông thường. Vui lòng nhập lý do và chi tiết đề xuất vào phần nội dung bên dưới.
      </div>
    `;
  }
  container.innerHTML = html;
  
  // Set workflow preview dynamically
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
        <button class="btn btn-outline btn-sm btn-icon-only" onclick="showRequestDetail(${r.id})"><span class="material-symbols-outlined" style="font-size:16px;">visibility</span></button>
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
  document.getElementById("kpiPendingApprovals").textContent = pendingCount;
  
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
  
  let content = "";
  let details = {};
  
  if (type === "Nghỉ phép" || type === "Nghỉ phép năm") {
    const start = document.getElementById("reqLeaveStart").value;
    const end = document.getElementById("reqLeaveEnd").value;
    const handover = document.getElementById("reqLeaveBànGiao").value.trim();
    if (!start || !end || !handover) {
      showToast("Vui lòng điền đủ thông tin nghỉ phép", "warning");
      return;
    }
    content = `Xin nghỉ phép từ ${start} đến ${end}. Người bàn giao: ${handover}. Lý do: ${reason}`;
    details = { start, end, handover };
  } else if (type === "Xe công" || type === "Đăng ký xe công vụ") {
    const route = document.getElementById("reqCarRoute").value.trim();
    const date = document.getElementById("reqCarDate").value;
    const pass = document.getElementById("reqCarPassengers").value;
    if (!route || !date || !pass) {
      showToast("Vui lòng điền lộ trình và ngày đi xe công", "warning");
      return;
    }
    content = `Đăng ký xe di chuyển lộ trình ${route} vào ngày ${date}. Số người: ${pass}. Lý do: ${reason}`;
    details = { route, date, passengers: pass };
  } else if (type === "Phòng họp" || type === "Đăng ký phòng họp") {
    const room = document.getElementById("reqRoomName").value;
    const date = document.getElementById("reqRoomDate").value;
    const start = document.getElementById("reqRoomStart").value;
    const end = document.getElementById("reqRoomEnd").value;
    if (!date || !start || !end) {
      showToast("Vui lòng điền đủ ngày và giờ họp", "warning");
      return;
    }
    content = `Đặt phòng họp: ${room} ngày ${date} từ ${start} đến ${end}. Chủ trì họp: ${state.currentUser.name}`;
    details = { room, date, start, end };
  } else {
    // General or custom dynamic form request
    content = `Đề xuất đăng ký dịch vụ/quy trình: ${type}. Lý do & Nội dung: ${reason}`;
    details = { reason };
  }
  
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

// ==========================================
// 8. MODULE: LỊCH (CALENDAR)
// ==========================================

function renderCalendar() {
  const container = document.getElementById("calendarWeeklyTableContainer");
  const monthTitle = document.getElementById("calendarMonthTitle");
  
  if (!container || !monthTitle) return;
  
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
        <td colspan="6">
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
  
  const newEv = {
    id: state.calendar.length + 1,
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

function renderAlbums() {
  const grid = document.getElementById("albumsGrid");
  if (!grid) return;
  grid.innerHTML = state.albums.map(a => `
    <div class="album-card" onclick="openLightbox(${a.id}, 0)">
      <div class="album-cover" style="background-image: url('${a.cover}')">
        <div class="album-cover-overlay">
          <div class="album-count"><span class="material-symbols-outlined" style="font-size:16px;">image</span> ${a.images.length} ảnh</div>
        </div>
      </div>
      <div class="album-body">
        <div class="album-title">${a.title}</div>
        <div class="album-date">Ngày sự kiện: ${a.date}</div>
      </div>
    </div>
  `).join('');
}

function openLightbox(albumId, index) {
  const album = state.albums.find(a => a.id === albumId);
  if (!album) return;
  
  state.lightboxAlbum = album;
  state.lightboxIndex = index;
  
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
  
  imgEl.src = album.images[idx].url;
  captionEl.textContent = `${album.title} (${idx + 1}/${album.images.length}) — ${album.images[idx].caption}`;
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

function renderDashboard() {
  // Initialize carousel index if not set
  if (state.currentCarouselIndex === undefined) {
    state.currentCarouselIndex = 0;
  }
  
  // 1. Render Carousel (Tin nổi bật)
  let carouselNews = state.news.filter(n => n.pinned || n.category === "tin-tuc").slice(0, 5);
  if (carouselNews.length === 0) carouselNews = state.news.slice(0, 5);
  
  const carouselContainer = document.getElementById("dashCarouselContainer");
  if (carouselContainer && carouselNews.length > 0) {
    const currentSlide = carouselNews[state.currentCarouselIndex % carouselNews.length];
carouselContainer.innerHTML = `
      <div class="carousel-slide" onclick="showNewsDetail(${currentSlide.id})" style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.85) 100%), url('${currentSlide.image}');">
        <span class="carousel-badge">TIN NỔI BẬT</span>
        
        <button class="carousel-arrow prev" onclick="navigateCarousel(-1, event)">
          <span class="material-symbols-outlined">chevron_left</span>
        </button>
        <button class="carousel-arrow next" onclick="navigateCarousel(1, event)">
          <span class="material-symbols-outlined">chevron_right</span>
        </button>
        
        <div class="carousel-content">
          <h2 class="carousel-title">${currentSlide.title}</h2>
          <p class="carousel-desc">${currentSlide.excerpt}</p>
          <button class="btn btn-primary carousel-btn" onclick="showNewsDetail(${currentSlide.id}); event.stopPropagation();">Xem chi tiết</button>
        </div>
        
        <div class="carousel-dots">
          ${carouselNews.map((_, idx) => `
            <span class="carousel-dot ${idx === (state.currentCarouselIndex % carouselNews.length) ? 'active' : ''}" onclick="setCarouselSlide(${idx}, event)"></span>
          `).join('')}
        </div>
      </div>
    `;
  }
  
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
            <div class="right-actions">
              <button class="action-btn-item ${n.bookmarkedBy && n.bookmarkedBy.includes(state.currentUser.username) ? 'active' : ''}" onclick="toggleBookmarkNews(${n.id})">
                <span class="material-symbols-outlined">bookmark</span>
              </button>
              <button class="action-btn-item" onclick="handleShareInternal()">
                <span class="material-symbols-outlined">share</span>
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
  
  // 5. Render Albums (Column 3 of Row 3)
  const albums = state.albums.slice(0, 4);
  const albumsGrid = document.getElementById("dashAlbumsGrid");
  if (albumsGrid) {
    albumsGrid.innerHTML = albums.map(a => `
      <div class="dash-album-item" onclick="switchView('albums'); showAlbumDetail(${a.id});">
        <div class="dash-album-cover" style="background-image: url('${a.cover}');"></div>
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
  
  showToast("Đã lưu thông tin hồ sơ nhân sự thành công!", "success");
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

function changeWorkflowProc() {
  selectedWorkflowProc = document.getElementById("workflowProcSelect").value;
  currentWorkflowSteps = JSON.parse(JSON.stringify(state.procedureWorkflows[selectedWorkflowProc] || []));
  renderWorkflowDesignTimeline();
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
  showToast(`Đã lưu cấu hình luồng phê duyệt cho thủ tục "${selectedWorkflowProc}"`, "success");
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
  "albums": { label: "Thư viện ảnh", icon: "photo_library" }
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

function openCreateEFormModal() {
  currentEFormFields = [
    { label: "Họ và tên", type: "text", required: true, id: "field_name" }
  ];
  renderCreateEFormFieldsList();
  document.getElementById("newEFormName").value = "";
  document.getElementById("newEFormDesc").value = "";
  openModal("modalCreateEForm");
}

function renderCreateEFormFieldsList() {
  const container = document.getElementById("createEFormFieldsList");
  if (!container) return;
  
  container.innerHTML = currentEFormFields.map((f, idx) => `
    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; background: #f1f5f9; padding: 8px 12px; border-radius: 4px;">
      <span style="font-size:0.8rem; font-weight:700; color:var(--text-secondary); width: 24px;">#${idx+1}</span>
      <div style="flex:1; display:flex; gap:8px;">
        <input type="text" value="${f.label}" onchange="updateEFormFieldLabel(${idx}, this.value)" placeholder="Tên trường nhập liệu" style="flex: 2; padding: 4px 8px; font-size: 0.8rem; border: 1px solid var(--border-light); border-radius: 4px;">
        <select onchange="updateEFormFieldType(${idx}, this.value)" style="flex: 1; padding: 4px 8px; font-size: 0.8rem; border: 1px solid var(--border-light); border-radius: 4px;">
          <option value="text" ${f.type === 'text' ? 'selected' : ''}>Chữ ngắn (text)</option>
          <option value="number" ${f.type === 'number' ? 'selected' : ''}>Số (number)</option>
          <option value="textarea" ${f.type === 'textarea' ? 'selected' : ''}>Chữ dài (textarea)</option>
        </select>
      </div>
      <label style="display:flex; align-items:center; gap:2px; font-size:0.75rem; margin:0;"><input type="checkbox" ${f.required ? 'checked' : ''} onchange="updateEFormFieldRequired(${idx}, this.checked)"> Bắt buộc</label>
      <button onclick="deleteEFormField(${idx})" style="background:none; border:none; color:var(--danger); cursor:pointer; display:flex; align-items:center; padding:2px;">
        <span class="material-symbols-outlined" style="font-size:16px;">delete</span>
      </button>
    </div>
  `).join('');
}

function addEFormField() {
  const id = "field_" + Date.now() + "_" + Math.random().toString(36).substring(2, 5);
  currentEFormFields.push({
    label: "Trường dữ liệu mới",
    type: "text",
    required: false,
    id: id
  });
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
}

function updateEFormFieldRequired(idx, val) {
  currentEFormFields[idx].required = val;
}

function submitCreateEForm() {
  const name = document.getElementById("newEFormName").value.trim();
  const desc = document.getElementById("newEFormDesc").value.trim();
  
  if (!name) {
    showToast("Vui lòng điền tên biểu mẫu eForm", "warning");
    return;
  }
  
  if (currentEFormFields.length === 0) {
    showToast("Vui lòng thêm ít nhất một trường nhập liệu", "warning");
    return;
  }
  
  const formId = "form-" + Date.now();
  
  const newForm = {
    id: formId,
    name: name,
    description: desc,
    fields: currentEFormFields,
    submissions: []
  };
  
  state.dynamicForms.push(newForm);
  saveState("dynamicForms", state.dynamicForms);
  
  // Re-render
  renderAdminEForms();
  renderDynamicFormsListUser();
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
      <div style="padding:12px 16px; border-bottom:1px solid var(--border-light); background:#f8fafc; font-weight:700; font-size:0.88rem; color:var(--text);">
        Danh sách chi tiết ý kiến thu thập (${form.submissions.length} bản ghi)
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
  
  if (state.dynamicForms.length === 0) {
    container.innerHTML = `<div style="padding:16px; text-align:center; color:var(--text-muted); font-size:0.82rem; font-style:italic;">Hiện tại không có biểu mẫu khảo sát trực tuyến nào cần thực hiện.</div>`;
    return;
  }
  
  container.innerHTML = state.dynamicForms.map(form => {
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
    const disabledAttr = submission ? 'disabled' : '';
    const requiredSpan = f.required && !submission ? '<span style="color:var(--danger)">*</span>' : '';
    
    let fieldHtml = '';
    if (f.type === 'textarea') {
      fieldHtml = `<textarea id="fill_${f.id}" class="form-control" rows="3" ${disabledAttr} placeholder="Nhập câu trả lời...">${value}</textarea>`;
    } else {
      fieldHtml = `<input type="${f.type}" id="fill_${f.id}" class="form-control" value="${value}" ${disabledAttr} placeholder="Nhập câu trả lời..." />`;
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
  
  // Collect data
  const data = {};
  for (let f of form.fields) {
    const el = document.getElementById(`fill_${f.id}`);
    if (!el) continue;
    
    const val = el.value.trim();
    if (f.required && !val) {
      showToast(`Trường "${f.label}" là bắt buộc`, "warning");
      return;
    }
    
    // cast to number if type is number
    data[f.id] = f.type === 'number' ? Number(val) : val;
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
  showToast("Cảm ơn bạn đã đóng góp ý kiến phản hồi!", "success");
  
  renderDynamicFormsListUser();
  if (state.activeView === "admin") {
    renderAdminEForms();
    if (selectedReportFormId === activeFillFormId) {
      renderEFormReportingDashboard();
    }
  }
}
