import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function CV() {
	const [htmlData, setHtmlData] = useState(html)

	useEffect(() => {
		setPlaceholderHTMl(lang)
	}, [lang])

	useEffect(() => {
		handleSetData(html)
	}, [html])

	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="Tiêu đề CV" />
				<div id="form-cv">
					<div id="cv-top">
						<div id="cvo-profile">
							<div className="box-01">
								<div id="box-hvt">
									<h1>
										<span id="cv-profile-fullname" cvo-placeholder="Họ tên" contentEditable="true" />
									</h1>
									<h2>
										<span id="cv-profile-job" contentEditable="true" cvo-placeholder="Vị trí công việc bạn muốn ứng tuyển" />
									</h2>
								</div>
								<div className="clr" />
							</div>
						</div>
					</div>
					<div id="cv-main">
						<div id="cv-right">
							<div className="ir">
								<div id="sortable" className="ui-sortable">
									<div id="box01" className="block cvo-block box-contact ui-sortable-handle">
										<div id="prof">
											<div className="blockControls">
												<div title="Di chuyển khối" className="show-layout-editor">
													<i className="fa fa-bars" />
												</div>
												<div title="Chuyển mục này lên trên" className="up">
													▲
												</div>
												<div title="Chuyển mục này xuống dưới" className="down">
													▼
												</div>
												<div title="Ẩn mục này" className="hide">
													<i className="fa fa-minus" /> Ẩn
												</div>
											</div>{' '}
											<div className="ic">
												<p className="icf">
													<i className="fa"></i>
												</p>
												<p className="icoweb">
													<span id="cv-profile-birthday" cvo-placeholder="Ngày sinh" contentEditable="true">
														19/05/1992
													</span>
												</p>
											</div>
											<div className="ic">
												<div className="icf">
													<i className="fa"></i>
												</div>
												<p className="icoweb">
													<span id="cv-profile-sex" cvo-placeholder="Giới tính" contentEditable="true">
														Nữ
													</span>
												</p>
											</div>
											<div className="ic">
												<p className="icf">
													<i className="fa"></i>
												</p>
												<p className="icoweb">
													<span id="cv-profile-phone" cvo-placeholder="Điện thoại" contentEditable="true" />
												</p>
											</div>
											<div className="ic">
												<p className="icf">
													<i className="fa"></i>
												</p>
												<p className="icoweb">
													<span id="cv-profile-email" cvo-placeholder="Email" contentEditable="true">
														test@gmail.com
													</span>
												</p>
											</div>
											<div className="ic">
												<p className="icf">
													<i className="fa"></i>
												</p>
												<p className="icoweb">
													<span id="cv-profile-address" cvo-placeholder="Địa chỉ" contentEditable="true" />
												</p>
											</div>
											<div className="ic">
												<p className="icf">
													<i className="fa"></i>
												</p>
												<p className="icoweb">
													<span id="cv-profile-face" cvo-placeholder="Facebook" contentEditable="true">
														facebook.com/abc
													</span>
												</p>
											</div>
											<div className="clr" />
										</div>
										<div className="clr" />
									</div>
									<div id="box02" className="block cvo-block ui-sortable-handle">
										<div className="blockControls">
											<div title="Di chuyển khối" className="show-layout-editor">
												<i className="fa fa-bars" />
											</div>
											<div title="Chuyển mục này lên trên" className="up">
												▲
											</div>
											<div title="Chuyển mục này xuống dưới" className="down">
												▼
											</div>
											<div title="Ẩn mục này" className="hide">
												<i className="fa fa-minus" /> Ẩn
											</div>
										</div>{' '}
										<h3>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												Mục tiêu nghề nghiệp
											</div>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											Với nền tảng kiến thức công nghệ thông tin, kiến thức chuyển môn về SEO, marketing online sẽ cùng đội marketing của công ty đưa
											website dịch vụ của công ty đạt top những từ khóa, đưa thương hiệu công ty đến rộng rãi những khách hàng tiềm năng. <br />{' '}
										</div>
									</div>
									<div id="box03" className="block cvo-block box-skills ui-sortable-handle">
										<div className="blockControls">
											<div title="Di chuyển khối" className="show-layout-editor">
												<i className="fa fa-bars" />
											</div>
											<div title="Chuyển mục này lên trên" className="up">
												▲
											</div>
											<div title="Chuyển mục này xuống dưới" className="down">
												▼
											</div>
											<div title="Ẩn mục này" className="hide">
												<i className="fa fa-minus" /> Ẩn
											</div>
										</div>{' '}
										<h3>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												Kỹ năng
											</div>
										</h3>
										<div className="exp content-edit skill">
											<div className="ctbx">
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> Thêm
													</div>
													<div className="edit js-edit-content"> Sửa</div>
													<div className="remove">
														<i className="fa fa-minus" /> Xóa
													</div>
												</div>
												<p className="skill-name" cv-form-field="true" contentEditable="true">
													Tin học văn phòng
												</p>
												<div className="bar-exp">
													<div style={{ width: '50%' }} />
												</div>
												<div className="bar-value-exp">
													<input min={0} max={100} type="text" defaultValue={50} />
												</div>
											</div>
											<div className="ctbx">
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> Thêm
													</div>
													<div className="edit js-edit-content"> Sửa</div>
													<div className="remove">
														<i className="fa fa-minus" /> Xóa
													</div>
												</div>
												<p className="skill-name" cv-form-field="true" contentEditable="true">
													Kỹ năng chuyên môn
												</p>
												<div className="bar-exp">
													<div style={{ width: '80%' }} />
												</div>
												<div className="bar-value-exp">
													<input min={0} max={100} type="text" defaultValue={80} />
												</div>
											</div>
											<div className="clr" />
										</div>
									</div>
									<div id="box04" className="block cvo-block ui-sortable-handle">
										<div className="blockControls">
											<div title="Di chuyển khối" className="show-layout-editor">
												<i className="fa fa-bars" />
											</div>
											<div title="Chuyển mục này lên trên" className="up">
												▲
											</div>
											<div title="Chuyển mục này xuống dưới" className="down">
												▼
											</div>
											<div title="Ẩn mục này" className="hide">
												<i className="fa fa-minus" /> Ẩn
											</div>
										</div>{' '}
										<h3>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												Giải thưởng
											</div>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											- Nhân viên đạt thành tích tốt trong quá trình làm việc quý 2 năm 2018
											<br />- Giấy khen của phường trong đợt tổng kết năm 2016 vì thành tích xuất sắc trong công tác hoạt động đoàn.
											<br />{' '}
										</div>
									</div>
									<div id="box05" className="block cvo-block ui-sortable-handle">
										<div className="blockControls">
											<div title="Di chuyển khối" className="show-layout-editor">
												<i className="fa fa-bars" />
											</div>
											<div title="Chuyển mục này lên trên" className="up">
												▲
											</div>
											<div title="Chuyển mục này xuống dưới" className="down">
												▼
											</div>
											<div title="Ẩn mục này" className="hide">
												<i className="fa fa-minus" /> Ẩn
											</div>
										</div>{' '}
										<h3>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												Chứng chỉ
											</div>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											- Chứng chỉ công nhận hoàn thành khóa học SEO của Vietmoz, GTV SEO, SEO SEVA...
											<br />- Chứng chỉ công nhận hoàn thành khóa học: “ Tiếng anh cho người đi làm”
											<br />- Toeic 450{' '}
										</div>
									</div>
									<div id="box06" className="block cvo-block ui-sortable-handle">
										<div className="blockControls">
											<div title="Di chuyển khối" className="show-layout-editor">
												<i className="fa fa-bars" />
											</div>
											<div title="Chuyển mục này lên trên" className="up">
												▲
											</div>
											<div title="Chuyển mục này xuống dưới" className="down">
												▼
											</div>
											<div title="Ẩn mục này" className="hide">
												<i className="fa fa-minus" /> Ẩn
											</div>
										</div>{' '}
										<h3>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												Sở thích
											</div>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											- Thời gian rảnh: Học hỏi và chia sẻ kinh nghiệm kiến thức về SEO trên các diễn đàn&nbsp;
											<br />- Đá bóng
											<br />- Đi du lịch{' '}
										</div>
									</div>
									<div id="box07" className="block cvo-block ui-sortable-handle">
										<div className="blockControls">
											<div title="Di chuyển khối" className="show-layout-editor">
												<i className="fa fa-bars" />
											</div>
											<div title="Chuyển mục này lên trên" className="up">
												▲
											</div>
											<div title="Chuyển mục này xuống dưới" className="down">
												▼
											</div>
											<div title="Ẩn mục này" className="hide">
												<i className="fa fa-minus" /> Ẩn
											</div>
										</div>{' '}
										<h3>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												Người tham chiếu
											</div>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											Nguyễn Văn B – Trưởng phòng MarketingCông ty CP CV365
											<br />
											SĐT: 0123456789{' '}
										</div>
									</div>{' '}
								</div>
							</div>
						</div>
						<div className="clr" />
					</div>
					<div id="cv-content">
						<div className="ir ui-sortable" id="sort_block">
							<div id="block01" className="cvo-block ui-sortable-handle">
								<div className="blockControls">
									<div title="Di chuyển khối" className="show-layout-editor">
										<i className="fa fa-bars" />
									</div>
									<div title="Chuyển mục này lên trên" className="up">
										▲
									</div>
									<div title="Chuyển mục này xuống dưới" className="down">
										▼
									</div>
									<div title="Ẩn mục này" className="hide">
										<i className="fa fa-minus" /> Ẩn
									</div>
								</div>{' '}
								<div className="head">
									<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
										Trình độ học vấn
									</div>
								</div>
								<div id="experience-table">
									<div id="exp1" className="ctbx experience">
										{' '}
										<div className="fieldgroup_controls">
											<div className="clone">
												<i className="fa fa-plus" /> Thêm
											</div>
											<div className="remove">
												<i className="fa fa-minus" /> Xóa
											</div>
										</div>
										<h3>
											<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
												Đại học CV365
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
												Chuyên ngành: Công nghệ thông tin
											</span>
										</p>
										<div
											className="exp-content"
											contentEditable="true"
											cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
										>
											Xếp loại: Khá{' '}
										</div>
									</div>
								</div>
							</div>
							<div id="block02" className="cvo-block ui-sortable-handle">
								<div className="blockControls">
									<div title="Di chuyển khối" className="show-layout-editor">
										<i className="fa fa-bars" />
									</div>
									<div title="Chuyển mục này lên trên" className="up">
										▲
									</div>
									<div title="Chuyển mục này xuống dưới" className="down">
										▼
									</div>
									<div title="Ẩn mục này" className="hide">
										<i className="fa fa-minus" /> Ẩn
									</div>
								</div>{' '}
								<div className="head">
									<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
										Kinh nghiệm làm việc
									</div>
								</div>
								<div id="experience-table">
									<div id="exp1" className="ctbx experience">
										{' '}
										<div className="fieldgroup_controls">
											<div className="clone">
												<i className="fa fa-plus" /> Thêm
											</div>
											<div className="remove">
												<i className="fa fa-minus" /> Xóa
											</div>
										</div>
										<h3>
											<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
												Công ty cổ phần CV365
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
												Vị trí: Chuyên viên SEO
											</span>
										</p>
										<div
											className="exp-content err_cv_content"
											contentEditable="true"
											cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
										>
											- Phân tích, lên kế hoạch triển khai các bộ từ khóa.
											<br />- Xây dựng mô hình liên kết internal link, backlink cho hệ thống.
											<br />- Tính toán, lên kế hoạch triển khai số lượng link phù hợp.
											<br />- Tối ưu onpage, offpage, cấu trúc, chức năng cho website.
											<br />- Lên kế hoạch, triển khai branding cho thương hiệu
											<br />- Đo lường, đánh giá hiệu quả SEO
											<br />
											Kết quả đạt được trong quá trình làm việc: Một số từ khóa khó như CV, CV xin việc (TOP 10)&nbsp;{' '}
										</div>
									</div>
									<div id="exp2" className="ctbx experience">
										{' '}
										<div className="fieldgroup_controls">
											<div className="clone">
												<i className="fa fa-plus" /> Thêm
											</div>
											<div className="remove">
												<i className="fa fa-minus" /> Xóa
											</div>
										</div>
										<h3>
											<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
												Công ty Bất động sản CV 365
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
												Vị trí: Công tác viên SEO
											</span>
										</p>
										<div
											className="exp-content err_cv_content"
											contentEditable="true"
											cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
										>
											- Xây dựng và phát triển các site vệ tinh như: Blog, Web 2.0
											<br />- Được biết các công cụ hỗ trợ cho SEO và làm việc với các công cụ.
											<br />- Viết bài, đi link theo kế hoạch.
											<br />- Làm Việc theo nhóm, hoàn thành tốt nhiệm vụ.{' '}
										</div>
									</div>
								</div>
							</div>
							<div id="block03" className="cvo-block ui-sortable-handle">
								<div className="blockControls">
									<div title="Di chuyển khối" className="show-layout-editor">
										<i className="fa fa-bars" />
									</div>
									<div title="Chuyển mục này lên trên" className="up">
										▲
									</div>
									<div title="Chuyển mục này xuống dưới" className="down">
										▼
									</div>
									<div title="Ẩn mục này" className="hide">
										<i className="fa fa-minus" /> Ẩn
									</div>
								</div>{' '}
								<div className="head">
									<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
										Hoạt động
									</div>
								</div>
								<div id="experience-table">
									<div id="exp1" className="ctbx experience">
										{' '}
										<div className="fieldgroup_controls">
											<div className="clone">
												<i className="fa fa-plus" /> Thêm
											</div>
											<div className="remove">
												<i className="fa fa-minus" /> Xóa
											</div>
										</div>
										<h3>
											<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
												Tham gia các hoạt động đoàn tại phường
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
												Tình nguyện viên
											</span>
										</p>
										<div
											className="exp-content err_cv_content"
											contentEditable="true"
											cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
										>
											- Tổ chức trung thu cho trẻ em, quyên góp từ thiện trong các đợt phát động của phường …<br />
											-&nbsp;Thành viên tích cực của các diễn đàn, Group mạng xã hội chia sẻ kinh nghiệm về SEO như: Kiến thức SEO, Vietmoz , Seomxh …
											<br />{' '}
										</div>
									</div>
								</div>
							</div>
							<div id="block04" className="cvo-block ui-sortable-handle">
								<div className="blockControls">
									<div title="Di chuyển khối" className="show-layout-editor">
										<i className="fa fa-bars" />
									</div>
									<div title="Chuyển mục này lên trên" className="up">
										▲
									</div>
									<div title="Chuyển mục này xuống dưới" className="down">
										▼
									</div>
									<div title="Ẩn mục này" className="hide">
										<i className="fa fa-minus" /> Ẩn
									</div>
								</div>{' '}
								<div className="head">
									<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
										Dự án tham gia
									</div>
								</div>
								<div id="experience-table">
									<div id="exp1" className="ctbx experience">
										{' '}
										<div className="fieldgroup_controls">
											<div className="clone">
												<i className="fa fa-plus" /> Thêm
											</div>
											<div className="remove">
												<i className="fa fa-minus" /> Xóa
											</div>
										</div>
										<h3>
											<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
												Công ty cổ phần CV365
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
												Thành viên trong đội SEO
											</span>
										</p>
										<div
											className="exp-content err_cv_content"
											contentEditable="true"
											cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
										>
											+/ Dự án CV365
											<br />
											+/ Dự án timviec365.vn{' '}
										</div>
									</div>
								</div>
							</div>
							<div id="block05" className="cvo-block ui-sortable-handle">
								<div className="blockControls">
									<div title="Di chuyển khối" className="show-layout-editor">
										<i className="fa fa-bars" />
									</div>
									<div title="Chuyển mục này lên trên" className="up">
										▲
									</div>
									<div title="Chuyển mục này xuống dưới" className="down">
										▼
									</div>
									<div title="Ẩn mục này" className="hide">
										<i className="fa fa-minus" /> Ẩn
									</div>
								</div>{' '}
								<div className="head">
									<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
										Thông tin thêm
									</div>
								</div>
								<div id="experience-table">
									<div id="exp1" className="ctbx experience">
										{' '}
										<div className="fieldgroup_controls">
											<div className="clone">
												<i className="fa fa-plus" /> Thêm
											</div>
											<div className="remove">
												<i className="fa fa-minus" /> Xóa
											</div>
										</div>
										<h3>
											<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
												Tôi đang tham gia khóa học về Facebook&nbsp; Ads để hỗ trợ trong công việc tương lai
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
												Thêm những thông tin khác (nếu cần)
											</span>
										</p>
										<div
											className="exp-content"
											contentEditable="true"
											cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
										></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className="resize"
						style={{
							position: 'absolute',
							width: 'auto',
							height: 'auto',
							top: 0,
							right: 0,
							bottom: 0,
							left: 0,
							margin: 0,
							padding: 0,
							overflow: 'hidden',
							visibility: 'hidden',
							zIndex: -1,
						}}
					>
						<iframe
							style={{
								width: '100%',
								height: 0,
								border: 0,
								visibility: 'visible',
								margin: 0,
							}}
						/>
						<iframe
							style={{
								width: 0,
								height: '100%',
								border: 0,
								visibility: 'visible',
								margin: 0,
							}}
						/>
					</div>
				</div>
			</div>
		</>
	)
}
