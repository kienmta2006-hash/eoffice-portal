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
color: "#0284c7"
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
color: "#7c3aed"
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
color: "#059669"
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
views: 142,
likes: 18,
likedBy: [],
bookmarkedBy: [],
readLaterBy: [],
comments: [
{ author: "Lê Thị Hồng", text: "Chính sách rất kịp thời, động viên tinh thần anh em rất nhiều ạ!", time: "08:45" },
{ author: "Trần Quốc Bảo", text: "Tuyệt vời quá ban giám đốc ơi! Cảm ơn công ty rất nhiều.", time: "09:12" }
],
attachments: [{ name: "TB-032_Chinh_sach_luong_moi.pdf", size: "1.4 MB" }],
image: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=600",
mandatory: true,
readBy: ["admin", "hr"]
},
{
id: 2,
pinned: false,
category: "quyet-dinh",
catLabel: "📋 Quyết định",
title: "Quyết định ban hành Quy chế làm việc từ xa (Work From Home - WFH)",
excerpt: "Ban Giám đốc ký quyết định ban hành quy chế làm việc từ xa mới. Áp dụng cho khối văn phòng với tần suất tối đa 2 ngày/tuần nhằm tạo môi trường làm việc linh hoạt, tăng năng suất lao động.",
content: `Căn cứ đề xuất của Phòng Nhân sự và kết quả thử nghiệm mô hình làm việc hỗn hợp (Hybrid) trong Quý 1 năm 2026.<br><br>
<b>Giám đốc Công ty quyết định:</b><br>
1. Ban hành Quy chế làm việc từ xa áp dụng từ ngày 05/07/2026.<br>
2. Mỗi nhân sự thuộc khối Văn phòng được đăng ký làm việc tại nhà tối đa 2 ngày/tuần, với điều kiện phải hoàn thành đầy đủ KPI công việc và được Trưởng bộ phận phê duyệt trên eOffice trước 24h.<br>
3. Trưởng phòng CNTT chịu trách nhiệm cung cấp đường truyền bảo mật VPN và hỗ trợ kỹ thuật kết nối nội bộ.<br><br>
Xem chi tiết quy trình đăng ký và nghĩa vụ bảo mật thông tin trong file đính kèm.`,
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
user: "staff",
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
user: "staff",
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
user: "hr",
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
function loadState(key, defaultData) {
const data = localStorage.getItem("eoffice_" + key);
return data ? JSON.parse(data) : defaultData;
}
function saveState(key, data) {
localStorage.setItem("eoffice_" + key, JSON.stringify(data));
}
let state = {
currentUser: USERS.admin,
news: loadState("news", INITIAL_NEWS),
documents: loadState("documents", INITIAL_DOCUMENTS),
requests: loadState("requests", INITIAL_REQUESTS),
calendar: loadState("calendar", INITIAL_CALENDAR),
surveys: loadState("surveys", INITIAL_SURVEYS),
albums: loadState("albums", INITIAL_ALBUMS),
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
activeView: "dashboard",
selectedCalendarDate: "2026-07-03",
currentCalendarMonth: 6,
currentCalendarYear: 2026,
lightboxAlbum: null,
lightboxIndex: 0
};
window.addEventListener("DOMContentLoaded", () => {
initApp();
});
function initApp() {
populateTaxonomyDropdowns();
const loggedIn = localStorage.getItem("eoffice_logged_in");
if (loggedIn) {
const userKey = localStorage.getItem("eoffice_user_key") || "admin";
state.currentUser = USERS[userKey];
document.getElementById("loginView").style.display = "none";
document.getElementById("appShell").style.display = "flex";
updateUserProfileHeader();
switchView(state.activeView);
checkMandatoryAnnouncements();
} else {
document.getElementById("loginView").style.display = "flex";
document.getElementById("appShell").style.display = "none";
}
}
function doLogin() {
const userKey = document.getElementById("loginUser").value;
state.currentUser = USERS[userKey];
localStorage.setItem("eoffice_logged_in", "true");
localStorage.setItem("eoffice_user_key", userKey);
document.getElementById("loginView").style.display = "none";
document.getElementById("appShell").style.display = "flex";
updateUserProfileHeader();
showToast(`Đăng nhập thành công! Chào mừng ${state.currentUser.name}`, "success");
switchView("dashboard");
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
document.getElementById("settingsName").value = state.currentUser.name;
document.getElementById("settingsEmpId").value = state.currentUser.empId;
document.getElementById("settingsRole").value = state.currentUser.role;
document.getElementById("settingsExt").value = state.currentUser.ext;
document.getElementById("settingsEmail").value = state.currentUser.email;
document.getElementById("settingsPhone").value = state.currentUser.phone;
const adminTab = document.getElementById("tab-admin");
if (adminTab) {
if (state.currentUser.username === "admin") {
adminTab.style.display = "inline-block";
} else {
adminTab.style.display = "none";
if (state.activeView === "admin") {
switchView("dashboard");
}
}
}
}
function switchView(viewId) {
state.activeView = viewId;
document.querySelectorAll(".nav-tab-item").forEach(item => {
item.classList.remove("active");
});
const activeTab = document.getElementById("tab-" + viewId);
if (activeTab) activeTab.classList.add("active");
document.querySelectorAll(".app-view").forEach(view => {
view.classList.remove("active");
});
const targetView = document.getElementById("view-" + viewId);
if (targetView) targetView.classList.add("active");
closeAllDropdowns();
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
document.addEventListener("click", () => {
closeAllDropdowns();
});
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
setTimeout(() => {
toast.style.opacity = "0";
toast.style.transform = "translateX(50px)";
toast.style.transition = "all 0.3s ease";
setTimeout(() => toast.remove(), 300);
}, 4000);
}
function openModal(id) {
document.getElementById(id).style.display = "flex";
document.body.style.overflow = "hidden";
if (id === "modalNewEvent") {
document.getElementById("newEventDate").value = state.selectedCalendarDate;
}
if (id === "modalNewRequest") {
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
function renderNotificationsPanel() {
const list = document.getElementById("notificationPanelList");
const unreadCount = state.notifications.filter(n => n.unread).length;
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
function handleGlobalSearch(event) {
if (event.key === "Enter") {
const query = document.getElementById("globalSearchInput").value.trim().toLowerCase();
if (!query) return;
showToast(`Đang tìm kiếm "${query}" trên toàn hệ thống...`, "info");
const docMatches = state.documents.some(d => d.title.toLowerCase().includes(query) || d.code.toLowerCase().includes(query));
if (docMatches) {
switchView("documents");
document.getElementById("searchDocQuery").value = query;
filterDocuments();
} else {
switchView("news");
renderNews(query);
}
}
}
let activeNewsCategoryFilter = "all";
function renderNews(searchQuery = "") {
const bannerEl = document.getElementById("newsFeaturedBanner");
const gridEl = document.getElementById("newsGrid");
const createBtn = document.getElementById("newsCreatePostBtn");
if (createBtn) {
createBtn.style.display = state.currentUser.username === 'admin' ? 'block' : 'none';
}
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
let filteredNews = state.news;
if (activeNewsCategoryFilter !== "all") {
filteredNews = filteredNews.filter(n => n.category === activeNewsCategoryFilter);
}
if (searchQuery) {
filteredNews = filteredNews.filter(n => n.title.toLowerCase().includes(searchQuery) || n.excerpt.toLowerCase().includes(searchQuery));
}
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
<span class="material-symbols-outlined">bookmark</span> Lưu
</button>
<button class="news-action-btn ${isReadLater ? 'active' : ''}" onclick="toggleReadLaterNews(${n.id})">
<span class="material-symbols-outlined">update</span> Đọc sau
</button>
${state.currentUser.username === 'admin' ? `
<button class="news-action-btn danger-btn" onclick="deleteNewsPost(${n.id})" style="margin-left: auto; color: var(--danger); display: flex; align-items: center; gap: 4px; border: 1px solid transparent; background: transparent; padding: 4px 8px; border-radius: 4px;">
<span class="material-symbols-outlined" style="font-size: 16px;">delete</span> Xóa
</button>
` : ''}
</div>
</div>
`;
}).join('');
}
renderVideoNewsScroll();
renderAlbumsPreviewScroll();
}
function filterNewsCategory(cat) {
activeNewsCategoryFilter = cat;
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
if (state.currentUser.username !== 'admin') {
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
function renderVideoNewsScroll() {
const row = document.getElementById("videoNewsScrollRow");
row.innerHTML = INITIAL_VIDEOS.map(v => `
<div class="video-media-card" onclick="playVideoMock('${v.title}')">
<div class="video-thumb-container" style="background-image: url('${v.bg}')">
<div class="video-play-overlay">
<span class="material-symbols-outlined">play_arrow</span>
</div>
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
function playVideoMock(title) {
showToast(`Đang tải video: "${title}"... (Tính năng giả lập phát tin video)`, "info");
}
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
function handleShareInternal() {
const link = window.location.href;
navigator.clipboard.writeText(link);
showToast("Đã sao chép liên kết chia sẻ nội bộ gửi đồng nghiệp!", "success");
}
let currentDetailNewsId = null;
function showNewsDetail(id, focusComment = false) {
const post = state.news.find(n => n.id === id);
if (!post) return;
currentDetailNewsId = id;
post.views++;
saveState("news", state.news);
document.getElementById("newsDetailCategoryBadge").textContent = post.catLabel;
document.getElementById("newsDetailCategoryBadge").className = `badge ${post.category === 'thong-bao' ? 'badge-primary' : post.category === 'quyet-dinh' ? 'badge-purple' : post.category === 'nhan-su' ? 'badge-cyan' : 'badge-success'}`;
document.getElementById("newsDetailTitle").textContent = post.title;
document.getElementById("newsDetailAvatar").textContent = post.authorInitials;
document.getElementById("newsDetailAuthor").textContent = post.author;
document.getElementById("newsDetailRole").textContent = ` — ${post.role}`;
document.getElementById("newsDetailDate").textContent = `${post.date} lúc ${post.time}`;
document.getElementById("newsDetailViews").innerHTML = `<span class="material-symbols-outlined" style="font-size: 16px;">visibility</span> ${post.views} lượt xem`;
document.getElementById("newsDetailContent").innerHTML = post.content;
const attachSec = document.getElementById("newsDetailAttachmentsSection");
const attachList = document.getElementById("newsDetailAttachmentsList");
if (post.attachments && post.attachments.length > 0) {
attachSec.style.display = "block";
attachList.innerHTML = post.attachments.map(file => `
<div class="attachment-item">
<span class="material-symbols-outlined">picture_as_pdf</span>
<span style="font-weight: 500;">${file.name}</span>
<span>(${file.size})</span>
<button class="btn btn-outline btn-sm" onclick="showToast('Đã tải xuống tệp tin ${file.name}', 'success')" style="margin-left: auto; padding: 4px 8px;"><span class="material-symbols-outlined" style="font-size: 14px;">download</span> Tải về</button>
</div>
`).join('');
} else {
attachSec.style.display = "none";
}
updateNewsDetailActionButtons(post);
renderNewsComments(post);
openModal("modalNewsDetail");
if (focusComment) {
setTimeout(() => {
document.getElementById("newsCommentInput").focus();
}, 300);
}
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
renderNews();
}
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
attachments: [],
image: image,
mandatory: mandatory,
readBy: [state.currentUser.username]
};
state.news.unshift(newPost);
saveState("news", state.news);
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
document.getElementById("formNewPost").reset();
renderNews();
}
function renderAnnouncements() {
const container = document.getElementById("announcementsListContainer");
const filterCat = document.getElementById("filterAnnounceCategory").value;
const filterRead = document.getElementById("filterAnnounceReadStatus").value;
const filterMandatory = document.getElementById("filterAnnounceMandatory").checked;
let list = state.news.filter(n => n.category === "thong-bao" || n.category === "quyet-dinh");
if (filterCat !== "all") {
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
function checkMandatoryAnnouncements() {
const unreadMandatory = state.news.find(n => n.mandatory && !n.readBy.includes(state.currentUser.username));
const alertEl = document.getElementById("dashboardMandatoryAlert");
const alertText = document.getElementById("mandatoryAlertText");
if (unreadMandatory) {
alertEl.style.display = "flex";
alertText.textContent = `"${unreadMandatory.title}"`;
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
checkMandatoryAnnouncements();
renderDashboard();
renderAnnouncements();
}
function showReadRatio(newsId) {
const post = state.news.find(n => n.id === newsId);
if (!post) return;
document.getElementById("readRatioModalTitle").textContent = post.title;
const readList = document.getElementById("readRatioModalReadList");
const unreadList = document.getElementById("readRatioModalUnreadList");
const readUsers = DIRECTORY.filter(s => {
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
function renderDocuments() {
const tbody = document.getElementById("documentsTableBody");
const query = document.getElementById("searchDocQuery").value.trim().toLowerCase();
const docType = document.getElementById("filterDocType").value;
const docDept = document.getElementById("filterDocDept").value;
let list = state.documents;
if (docType !== "all") {
list = list.filter(d => d.type === docType);
}
if (docDept !== "all") {
list = list.filter(d => d.dept === docDept);
}
if (query) {
list = list.filter(d => d.title.toLowerCase().includes(query) || d.code.toLowerCase().includes(query) || d.desc.toLowerCase().includes(query));
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
<td><span class="version-badge">${d.versions[0].version}</span></td>
<td>${d.date}</td>
<td>${d.dept}</td>
<td>
<a href="#" onclick="showToast('Đang tải tệp: ${d.file.name}', 'success')" style="display:flex; align-items:center; gap:4px; font-weight:500;">
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
document.getElementById("docDetailFilesList").innerHTML = `
<div class="attachment-item" style="background:#fff;">
<span class="material-symbols-outlined">picture_as_pdf</span>
<span style="font-weight:600;">${doc.file.name}</span>
<span style="color:var(--text-muted)">(${doc.file.size})</span>
<button class="btn btn-primary btn-sm" onclick="showToast('Tải tệp tin tài liệu...', 'success')" style="margin-left:auto;"><span class="material-symbols-outlined" style="font-size:14px;">download</span> Tải xuống</button>
</div>
`;
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
file: { name: code.replace(/\
};
state.documents.unshift(newDoc);
saveState("documents", state.documents);
closeModal("modalNewDoc");
showToast("Tải lên và ban hành văn bản thành công!", "success");
document.getElementById("formNewDoc").reset();
renderDocuments();
renderDashboard();
}
function toggleRequestFormFields() {
const type = document.getElementById("newRequestType").value;
const container = document.getElementById("requestFieldsContainer");
let html = "";
if (type === "Nghỉ phép") {
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
<label for="reqLeaveBànGiao">Người bàn giao bàn giao công việc *</label>
<input type="text" id="reqLeaveBànGiao" placeholder="Tên đồng nghiệp bàn giao..." required>
</div>
`;
document.getElementById("newRequestWorkflowPreview").textContent = "Quản lý trực tiếp phê duyệt → Trưởng phòng Nhân sự xác nhận → Cập nhật quỹ phép";
} else if (type === "Xe công") {
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
document.getElementById("newRequestWorkflowPreview").textContent = "Quản lý trực tiếp duyệt → Phòng Hành chính điều xe và tài xế";
} else if (type === "Phòng họp") {
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
document.getElementById("newRequestWorkflowPreview").textContent = "Phòng họp được duyệt trực tiếp nếu trống lịch";
} else if (type === "Công tác") {
html = `
<div class="form-group">
<label for="reqTravelDest">Địa điểm công tác *</label>
<input type="text" id="reqTravelDest" placeholder="Tên chi nhánh, tỉnh thành công tác..." required>
</div>
<div class="form-row">
<div class="form-group">
<label for="reqTravelStart">Ngày bắt đầu công tác *</label>
<input type="date" id="reqTravelStart" required>
</div>
<div class="form-group">
<label for="reqTravelEnd">Ngày kết thúc *</label>
<input type="date" id="reqTravelEnd" required>
</div>
</div>
`;
document.getElementById("newRequestWorkflowPreview").textContent = "Quản lý duyệt → Kế toán trưởng tạm ứng công tác phí → Giám đốc phê duyệt cuối";
}
container.innerHTML = html;
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
const unreadApprovals = state.requests.filter(r => r.status === "pending");
const pendingCount = unreadApprovals.length;
const navBadge = document.getElementById("badgePendingApprovalsCount");
document.getElementById("kpiPendingApprovals").textContent = pendingCount;
if (state.currentUser.username === "staff") {
container.innerHTML = `
<div style="text-align: center; padding: 24px; color: var(--text-muted); font-size: 0.9rem;">
<span class="material-symbols-outlined" style="font-size:2.5rem; display:block; margin-bottom:8px;">shield_lock</span>
Bạn không có quyền hạn phê duyệt thủ tục đăng ký.
</div>
`;
navBadge.style.display = "none";
return;
}
if (pendingCount > 0) {
navBadge.style.display = "inline-block";
navBadge.textContent = pendingCount;
document.getElementById("pendingApprovalsBadgeHeader").style.display = "inline-flex";
document.getElementById("pendingApprovalsBadgeHeader").textContent = `${pendingCount} đơn`;
} else {
navBadge.style.display = "none";
document.getElementById("pendingApprovalsBadgeHeader").style.display = "none";
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
container.innerHTML = unreadApprovals.map(r => `
<div class="card" style="padding:16px; border-color:var(--warning-light);">
<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
<span class="badge ${r.type === 'Nghỉ phép' ? 'badge-danger' : r.type === 'Xe công' ? 'badge-warning' : r.type === 'Phòng họp' ? 'badge-primary' : 'badge-success'}">${r.type}</span>
<span style="font-size:0.75rem; color:var(--text-muted);">${r.date}</span>
</div>
<div style="font-size:0.9rem; font-weight:700; margin-bottom:4px;">Người gửi: ${r.userName} (${r.dept})</div>
<p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.4; margin-bottom:12px;">${r.content}</p>
<div style="display:flex; gap:8px; border-top:1px solid var(--border-light); padding-top:12px;">
<button class="btn btn-success btn-sm" onclick="approveRequest(${r.id}, 'approved')" style="flex:1;"><span class="material-symbols-outlined" style="font-size:14px;">done</span> Duyệt đơn</button>
<button class="btn btn-danger btn-sm" onclick="approveRequest(${r.id}, 'rejected')" style="flex:1;"><span class="material-symbols-outlined" style="font-size:14px;">close</span> Từ chối</button>
</div>
</div>
`).join('');
}
function showRequestDetail(id) {
const r = state.requests.find(req => req.id === id);
if (!r) return;
document.getElementById("reqDetailType").textContent = r.type;
document.getElementById("reqDetailUser").textContent = r.userName;
document.getElementById("reqDetailDate").textContent = r.date;
document.getElementById("reqDetailStatus").textContent = r.status === "approved" ? "Đã duyệt" : r.status === "pending" ? "Chờ duyệt" : "Từ chối";
document.getElementById("reqDetailContent").textContent = r.content;
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
let content = "";
let details = {};
let workflow = [
{ step: "Gửi yêu cầu", actor: state.currentUser.name, action: "submit", date: dateStr + " " + String(now.getHours()).padStart(2, '0') + ":" + String(now.getMinutes()).padStart(2, '0'), comment: reason }
];
if (type === "Nghỉ phép") {
const start = document.getElementById("reqLeaveStart").value;
const end = document.getElementById("reqLeaveEnd").value;
const handover = document.getElementById("reqLeaveBànGiao").value.trim();
if (!start || !end || !handover) {
showToast("Vui lòng điền đủ thông tin nghỉ phép", "warning");
return;
}
content = `Xin nghỉ phép từ ${start} đến ${end}. Người bàn giao: ${handover}. Lý do: ${reason}`;
details = { start, end, handover };
workflow.push(
{ step: "Trưởng phòng duyệt", actor: "Đỗ Văn K (TP Kinh doanh)", action: "pending", date: "", comment: "" },
{ step: "Nhân sự xác nhận", actor: "Lê Thị Hồng", action: "pending", date: "", comment: "" }
);
} else if (type === "Xe công") {
const route = document.getElementById("reqCarRoute").value.trim();
const date = document.getElementById("reqCarDate").value;
const pass = document.getElementById("reqCarPassengers").value;
if (!route || !date || !pass) {
showToast("Vui lòng điền lộ trình và ngày đi xe công", "warning");
return;
}
content = `Đăng ký xe di chuyển lộ trình ${route} vào ngày ${date}. Số người: ${pass}. Lý do: ${reason}`;
details = { route, date, passengers: pass };
workflow.push(
{ step: "Ban Giám đốc duyệt", actor: "Nguyễn Văn An", action: "pending", date: "", comment: "" }
);
} else if (type === "Phòng họp") {
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
workflow.push(
{ step: "Hành chính duyệt", actor: "Trần Thị Bình", action: "pending", date: "", comment: "" }
);
} else if (type === "Công tác") {
const dest = document.getElementById("reqTravelDest").value.trim();
const start = document.getElementById("reqTravelStart").value;
const end = document.getElementById("reqTravelEnd").value;
if (!dest || !start || !end) {
showToast("Vui lòng điền đủ điểm đến và ngày công tác", "warning");
return;
}
content = `Đăng ký đi công tác tại ${dest} từ ngày ${start} đến ${end}. Lý do: ${reason}`;
details = { dest, start, end };
workflow.push(
{ step: "Trưởng phòng duyệt", actor: "Trưởng phòng Kinh doanh", action: "pending", date: "", comment: "" },
{ step: "Giám đốc duyệt cuối", actor: "Nguyễn Văn An", action: "pending", date: "", comment: "" }
);
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
function approveRequest(id, newStatus) {
const req = state.requests.find(r => r.id === id);
if (!req) return;
req.status = newStatus;
const pendingStep = req.workflow.find(w => w.action === "pending");
if (pendingStep) {
pendingStep.action = newStatus === "approved" ? "approve" : "reject";
pendingStep.actor = state.currentUser.name;
const now = new Date();
pendingStep.date = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
pendingStep.comment = newStatus === "approved" ? "Đồng ý phê duyệt đề xuất." : "Không đồng ý phê duyệt.";
}
saveState("requests", state.requests);
showToast(newStatus === "approved" ? "Đã phê duyệt đề xuất!" : "Đã từ chối đề xuất.", newStatus === "approved" ? "success" : "danger");
state.notifications.unshift({
id: state.notifications.length + 1,
title: newStatus === "approved" ? "Đơn đăng ký được phê duyệt" : "Đơn đăng ký bị từ chối",
desc: `Đơn xin ${req.type} gửi ngày ${req.date} đã được xử lý bởi ${state.currentUser.name}.`,
time: "Vừa xong",
type: newStatus === "approved" ? "success" : "warning",
unread: true,
link: "requests"
});
saveState("notifications", state.notifications);
renderNotificationsPanel();
renderRequests();
renderDashboard();
}
function renderCalendar() {
const container = document.getElementById("calendarWeeklyTableContainer");
const monthTitle = document.getElementById("calendarMonthTitle");
if (!container || !monthTitle) return;
const selectedDateObj = new Date(state.selectedCalendarDate);
const dayOfWeek = selectedDateObj.getDay();
const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
const monday = new Date(selectedDateObj);
monday.setDate(selectedDateObj.getDate() + diffToMonday);
const sunday = new Date(monday);
sunday.setDate(monday.getDate() + 6);
const formatDateStr = (d) => `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
monthTitle.textContent = `Tuần: ${formatDateStr(monday)} - ${formatDateStr(sunday)}`;
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
dayEvents.sort((a, b) => {
const timeA = a.time.split(" ")[0] || "99:99";
const timeB = b.time.split(" ")[0] || "99:99";
return timeA.localeCompare(timeB);
});
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
let activeDirectoryDeptFilter = "all";
function renderDirectory() {
const grid = document.getElementById("directoryGrid");
const query = document.getElementById("searchDirectoryInput").value.trim().toLowerCase();
const tagsBar = document.getElementById("deptTagsBar");
tagsBar.innerHTML = `<button class="news-cat-btn ${activeDirectoryDeptFilter === 'all' ? 'active' : ''}" onclick="filterDirectoryDept('all')">Tất cả phòng ban</button>` +
DEPARTMENTS.map(d => `
<button class="news-cat-btn ${activeDirectoryDeptFilter === d ? 'active' : ''}" onclick="filterDirectoryDept('${d}')">${d}</button>
`).join('');
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
function drawSurveyPieChart(canvasId, labels, votes) {
const canvas = document.getElementById(canvasId);
if (!canvas) return;
const ctx = canvas.getContext("2d");
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
ctx.beginPath();
ctx.arc(cx, cy, 45, 0, Math.PI * 2);
ctx.closePath();
ctx.fillStyle = "#ffffff";
ctx.fill();
ctx.fillStyle = "#0f172a";
ctx.font = "bold 15px Inter, sans-serif";
ctx.textAlign = "center";
ctx.fillText(total, cx, cy + 2);
ctx.font = "8px Inter, sans-serif";
ctx.fillStyle = "#94a3b8";
ctx.fillText("Ý kiến", cx, cy + 12);
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
const padLeft = 40;
const padRight = 20;
const padTop = 30;
const padBottom = 35;
const graphWidth = width - padLeft - padRight;
const graphHeight = height - padTop - padBottom;
const data = datasets[0].data;
const maxVal = Math.max(...data, 100) * 1.1;
ctx.strokeStyle = "#f1f5f9";
ctx.lineWidth = 1;
ctx.fillStyle = "#94a3b8";
ctx.font = "10px Inter, sans-serif";
ctx.textAlign = "right";
const gridLines = 4;
for (let i = 0; i <= gridLines; i++) {
const val = Math.round((maxVal / gridLines) * i);
const y = padTop + graphHeight - (val / maxVal) * graphHeight;
ctx.beginPath();
ctx.moveTo(padLeft, y);
ctx.lineTo(width - padRight, y);
ctx.stroke();
ctx.fillText(val, padLeft - 8, y + 3);
}
const barCount = labels.length;
const colWidth = graphWidth / barCount;
const barWidth = colWidth * 0.6;
const barColor = datasets[0].color || "#0284c7";
labels.forEach((label, i) => {
const val = data[i];
const barHeight = (val / maxVal) * graphHeight;
const x = padLeft + (i * colWidth) + (colWidth - barWidth) / 2;
const y = padTop + graphHeight - barHeight;
ctx.fillStyle = barColor;
ctx.beginPath();
if (ctx.roundRect) {
ctx.roundRect(x, y, barWidth, barHeight, [4, 4, 0, 0]);
} else {
ctx.rect(x, y, barWidth, barHeight);
}
ctx.fill();
ctx.fillStyle = "#475569";
ctx.textAlign = "center";
ctx.font = "9px Inter, sans-serif";
ctx.fillText(label, x + barWidth / 2, padTop + graphHeight + 16);
ctx.fillStyle = "#0f172a";
ctx.font = "bold 9px Inter, sans-serif";
ctx.fillText(val, x + barWidth / 2, y - 6);
});
}
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
ctx.beginPath();
ctx.arc(cx, cy, r * 0.6, 0, Math.PI * 2);
ctx.closePath();
ctx.fillStyle = "#ffffff";
ctx.fill();
ctx.fillStyle = "#0f172a";
ctx.font = "bold 16px Inter, sans-serif";
ctx.textAlign = "center";
ctx.fillText(total, cx, cy + 2);
ctx.font = "9px Inter, sans-serif";
ctx.fillStyle = "#94a3b8";
ctx.fillText("Tổng đơn", cx, cy + 12);
let ly = height * 0.2;
const legendX = width * 0.65;
labels.forEach((label, i) => {
const val = data[i];
const pct = Math.round((val / total) * 100);
ctx.fillStyle = colors[i % colors.length];
ctx.beginPath();
ctx.arc(legendX, ly + 5, 4, 0, Math.PI * 2);
ctx.fill();
ctx.fillStyle = "#475569";
ctx.font = "10px Inter, sans-serif";
ctx.textAlign = "left";
ctx.fillText(`${label}: ${val} (${pct}%)`, legendX + 12, ly + 8);
ly += 22;
});
}
function renderDashboard() {
if (state.currentCarouselIndex === undefined) {
state.currentCarouselIndex = 0;
}
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
const mandatoryAnnounces = state.news.filter(n => (n.category === "thong-bao" || n.category === "quyet-dinh") && n.mandatory);
const totalMandatory = mandatoryAnnounces.length;
const readMandatory = mandatoryAnnounces.filter(n => n.readBy.includes(state.currentUser.username)).length;
const ratio = totalMandatory > 0 ? Math.round((readMandatory / totalMandatory) * 100) : 78;
const ratioVal = document.getElementById("dashReadRatioValue");
const ratioProgress = document.getElementById("dashReadRatioProgress");
if (ratioVal) ratioVal.textContent = `${ratio}%`;
if (ratioProgress) {
ratioProgress.style.width = `${ratio}%`;
}
}
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
}
function saveSettings() {
const phone = document.getElementById("settingsPhone").value.trim();
state.currentUser.phone = phone;
const staffIdx = DIRECTORY.findIndex(s => s.name === state.currentUser.name);
if (staffIdx > -1) {
DIRECTORY[staffIdx].phone = phone;
}
showToast("Đã lưu thông tin hồ sơ nhân sự thành công!", "success");
}
let activeAdminSubtab = "analytics";
function renderAdminView() {
if (state.currentUser.username !== "admin") {
switchView("dashboard");
return;
}
const deptSelect = document.getElementById("newUserDept");
if (deptSelect) {
deptSelect.innerHTML = DEPARTMENTS.map(d => `<option value="${d}">${d}</option>`).join('');
}
const filterDeptSelect = document.getElementById("adminFilterUserDept");
if (filterDeptSelect && filterDeptSelect.children.length <= 1) {
filterDeptSelect.innerHTML = `<option value="all">Tất cả phòng ban</option>` +
DEPARTMENTS.map(d => `<option value="${d}">${d}</option>`).join('');
}
switchAdminTab(activeAdminSubtab);
}
function switchAdminTab(subTabId) {
activeAdminSubtab = subTabId;
document.querySelectorAll("#view-admin .sub-tab-btn").forEach(btn => {
btn.classList.remove("active");
});
const activeBtn = document.getElementById("admin-tab-btn-" + subTabId);
if (activeBtn) activeBtn.classList.add("active");
document.querySelectorAll("#view-admin .admin-subview").forEach(sv => {
sv.style.display = "none";
sv.classList.remove("active");
});
const targetSv = document.getElementById("admin-subview-" + subTabId);
if (targetSv) {
targetSv.style.display = "block";
targetSv.classList.add("active");
}
if (subTabId === "analytics") {
setTimeout(renderAdminCharts, 50);
} else if (subTabId === "users") {
renderAdminUsersTable();
} else if (subTabId === "taxonomies") {
renderAdminTaxonomies();
} else if (subTabId === "announcements") {
renderAdminAnnouncementsTable();
}
}
function renderAdminCharts() {
drawBarChart("adminChartTraffic",
["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"],
[
{ label: "Lượt truy cập", color: "#0284c7", data: [120, 150, 180, 142, 160, 45, 30] }
]
);
drawDoughnut("adminChartApprovals",
["Đã phê duyệt", "Đang xử lý", "Từ chối đề xuất"],
[45, 12, 4],
["#10b981", "#f59e0b", "#e11d48"]
);
}
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
<td><a href="mailto:${u.email}">${u.email}</a></td>
<td><strong>${u.ext}</strong></td>
<td>${u.phone}</td>
<td>
<button class="action-icon-btn edit" onclick="editUserAction(${absIndex})" title="Chỉnh sửa"><span class="material-symbols-outlined" style="font-size:16px;">edit</span></button>
<button class="action-icon-btn delete" onclick="deleteUserAction(${absIndex})" title="Xóa"><span class="material-symbols-outlined" style="font-size:16px;">delete</span></button>
</td>
</tr>
`;
}).join('');
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
DIRECTORY.splice(index, 1);
showToast(`Đã xóa tài khoản nhân sự ${u.name} khỏi hệ thống`, "danger");
renderAdminUsersTable();
renderDirectory();
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
userData.color = DIRECTORY[editIndex].color;
DIRECTORY[editIndex] = userData;
showToast(`Đã cập nhật thông tin thành sự ${name}`, "success");
} else {
DIRECTORY.push(userData);
showToast(`Đã thêm nhân sự mới ${name} vào hệ thống`, "success");
}
closeModal("modalNewUser");
renderAdminUsersTable();
renderDirectory();
}
function saveAdminConfig() {
const portalName = document.getElementById("adminConfigPortalName").value.trim();
const company = document.getElementById("adminConfigCompany").value.trim();
if (!portalName || !company) {
showToast("Vui lòng không để trống tên cổng thông tin và tên doanh nghiệp", "warning");
return;
}
showToast("Đã lưu các thiết lập cấu hình Cổng thông tin thành công!", "success");
const titleEls = document.querySelectorAll(".brand-info h1");
titleEls.forEach(el => el.textContent = portalName);
const descEls = document.querySelectorAll(".brand-info p");
descEls.forEach(el => el.textContent = company);
}
function renderAdminAnnouncementsTable() {
const tbody = document.getElementById("adminAnnouncementsTableBody");
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
function populateTaxonomyDropdowns() {
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
const newEventLocation = document.getElementById("newEventLocation");
if (newEventLocation) {
let html = '';
state.rooms.forEach(r => {
html += `<option value="${r}">${r}</option>`;
});
newEventLocation.innerHTML = html;
}
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
}
function renderAdminTaxonomies() {
document.getElementById("count-rooms").textContent = `${state.rooms.length} phòng`;
document.getElementById("count-docs").textContent = `${state.docCategories.length} loại`;
document.getElementById("count-events").textContent = `${state.eventTypes.length} loại`;
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
}
function addTaxonomyItem(type) {
let inputId = "";
if (type === "rooms") inputId = "addRoomInput";
else if (type === "docCategories") inputId = "addDocCatInput";
else if (type === "eventTypes") inputId = "addEventTypeInput";
const input = document.getElementById(inputId);
if (!input) return;
const val = input.value.trim();
if (!val) {
showToast("Vui lòng nhập tên danh mục cần thêm", "warning");
return;
}
if (state[type].includes(val)) {
showToast("Danh mục này đã tồn tại", "warning");
return;
}
state[type].push(val);
saveState(type, state[type]);
input.value = "";
populateTaxonomyDropdowns();
renderAdminTaxonomies();
if (state.activeView === "calendar") renderCalendar();
if (state.activeView === "documents") renderDocuments();
showToast("Đã thêm danh mục thành công!", "success");
}
function deleteTaxonomyItem(type, index) {
const item = state[type][index];
if (confirm(`Bạn có chắc chắn muốn xóa danh mục "${item}"?`)) {
state[type].splice(index, 1);
saveState(type, state[type]);
populateTaxonomyDropdowns();
renderAdminTaxonomies();
if (state.activeView === "calendar") renderCalendar();
if (state.activeView === "documents") renderDocuments();
showToast("Đã xóa danh mục thành công!", "success");
}
}