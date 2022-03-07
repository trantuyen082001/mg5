import React from 'react'
import './Room1.css'
import home1 from "../img/home1.jpg"
import home2 from "../img/home2.jpg"
import home3 from "../img/home3.jpg"
import home4 from "../img/home4.jpg"


const Room1 = () => {
  return (
    
        <div className='main'>
            <div className='header'>
                <div className='search'>
                    <div className='box'>
                      <a href='#/'>
                        logo
                      </a>
                      <div className='bar'>
                         {/* thanh tìm kiếm */}
                        <div className='frames1'>
                          {/* phần chọn */}
                          <div className='_1'>
                            <div className='_1fra'>
                              <span class="fa-solid fa-location-dot"></span>
                              <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">DN <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                  <li><a href="#">Page 1-1</a></li>
                                  <li><a href="#">Page 1-2</a></li>
                                  <li><a href="#">Page 1-3</a></li>
                                </ul>
                              </li>
                              {/* <span class="fa-solid fa-angle-down"></span> */}
                              
                            </div>
                          </div>
                            {/*phần ghi  */}
                          <div className='_1fra2'>
                            <input className='tim' placeholder='Tìm kiếm theo địa điểm, tên đường ...'></input>
                            <div className='search'>
                              <span className="fa-light fa-magnifying-glass"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>                 
            </div>

            <div itemscope itemtype="http://schema.org/WebPage" className='body1'>

              {/* hình ảnh trọ */}
              <div className='carousel-img-home'>
                <div id="demo" class="carousel slide" data-bs-ride="carousel">
                  {/* <!-- Indicators/dots --> */}
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                  </div>

                  {/* <!-- The slideshow/carousel --> */}
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={home4} alt="" class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                      <img src={home2} alt="" class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                      <img src={home3} alt="" class="d-block w-100"/>
                    </div>
                  </div>

                  {/* <!-- Left and right controls/icons --> */}
                  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                  </button>
                </div>
              </div>


              {/* thông tin trọ */}
              <div className='open-room'>
                <h1 itemProp='name' className='title-room' >Phòng Trọ Cho Thuê</h1>
              </div>

              <div className='nav1'>
                <div className='nav-room'>
                  <div className='nav-room1 home1'>

                    {/* thanh tiêu đề */}
                    <div className='icon-home'>
                      <div className='icon-home-1'>
                        <i class="fa-solid fa-house-user"></i>
                      </div>
                      <span className='str-home-1'>Thông Tin Phòng</span>
                    </div>

                    {/* khung thông tin */}
                    <div className='str-room'>
                      <div className='str-room-1'>
                        <p>Giá phòng</p>
                        <p>5,000.000 đồng</p>
                      </div>
                      <div className='str-room-1'>
                        <p>Diện Tích</p>
                        <p>35 mét vuông</p>
                      </div><div className='str-room-1'>
                        <p>Đặt Cọc</p>
                        <p>1,000.000 đồng</p>
                      </div><div className='str-room-1'>
                        <p>Sức Chứa</p>
                        <p>3 Nam hoặc Nữ</p>
                      </div>
                    </div>

                    {/* Trạng thái  */}
                    <div className='str-room'>
                      <div className='str-room-1'>
                        <p>Trạng Thái</p>
                        <p className='text-room-1'>Còn phòng</p>
                      </div>
                    </div>

                    {/* Địa chỉ */}
                    <div className='address-room'>
                      <p>Địa Chỉ</p>
                      <p itemprop='address'>Trường Chinh , Liên CHiểu , Đà Nẵng</p>
                    </div>
                  </div>

                  {/* Khung Tiện Ích */}
                  <div className='nav-room1 home2'>
                    <div className='icon-versatile'>
                      <div className='icon-versatile-1'>
                        <i class="fa-solid fa-shapes"></i>
                      </div>
                      <span className='str-home2'>Tiện ích</span>
                    </div>
                    <div className='menu-versatile'>
                      {/* icon đủ thứ về tiện ích  */}
                      <div itemprop="amenityFeature" itemscope="" itemtype="http://schema.org/LocationFeatureSpecification" class="icon1">
                        <i class="fa-solid fa-wifi"></i>
                        <span itemprop="name">Wifi</span>
                      </div>
                      <div itemprop="amenityFeature" itemscope="" itemtype="http://schema.org/LocationFeatureSpecification" class="icon1">
                        <i class="fa-solid fa-fan"></i>
                        <span itemprop="name">Máy Lạnh</span>
                      </div>
                      <div itemprop="amenityFeature" itemscope="" itemtype="http://schema.org/LocationFeatureSpecification" class="icon1">
                        <i class="fa-solid fa-toilet"></i>
                        <span itemprop="name">WC riêng</span>
                      </div>
                      <div itemprop="amenityFeature" itemscope="" itemtype="http://schema.org/LocationFeatureSpecification" class="icon1">
                        <i class="fa-solid fa-sink"></i>
                        <span itemprop="name">Nấu ăn</span>
                      </div>
                      <div itemprop="amenityFeature" itemscope="" itemtype="http://schema.org/LocationFeatureSpecification" class="icon1">
                        <i class="fa-solid fa-bell"></i>
                        <span itemprop="name">Tự do</span>
                      </div>
                      <div itemprop="amenityFeature" itemscope="" itemtype="http://schema.org/LocationFeatureSpecification" class="icon1">
                      <i class="fa-solid fa-motorcycle"></i>
                        <span itemprop="name">Chỗ để xe</span>
                      </div>
                      <div itemprop="amenityFeature" itemscope="" itemtype="http://schema.org/LocationFeatureSpecification" class="icon1">
                      <i class="fa-solid fa-user-lock"></i>
                        <span itemprop="name">An ninh tốt</span>
                      </div>
                      <div itemprop="amenityFeature" itemscope="" itemtype="http://schema.org/LocationFeatureSpecification" class="icon1">
                        <i class="fa-solid fa-key"></i>
                        <span itemprop="name">Không chung chủ</span>
                      </div>
                    </div>
                  </div>

                  {/* Khung lưu ý */}
                  <div className='nav-room1 home3'>
                    <div className='icon-note'>
                      <div className='icon-note-1'>
                        <i class="fa-solid fa-comment-dots"></i>
                      </div>
                      <span className='str-note'>Lưu Ý</span>
                    </div>
                    <div className='tap-note'>
                      <div className='tap-note-1'>
                        <h3>Lưu ý ......</h3>
                      </div>
                    </div>
                  </div>

                  {/* Khung mô tả thêm */}
                  <div className='nav-room1 home4'>
                    <div className='icon-description'>
                      <div className='icon-description-1'>
                        <i class="fa-solid fa-clipboard"></i>
                      </div>
                      <span className='str-description'>Mô tả</span>
                    </div>
                    <div className='tap-description'>
                      <pre itemprop="description" className='str'>Cho người nước ngoài và hộ gia đình, sinh viên người đi làm thuê căn hộ khách sạn cao cấp khép kín có ban công thoáng mát
                        - Diện tích 35- 45m2
                        - Giá: chỉ từ 5 đến 6 triệu
                        - Nội thất: sàn gỗ nhập khẩu,trần Led,tivi smart, tủ lạnh sharp thái lan,bếp từ đôi thái
                        - Giường tủ hiện đại,đệm cao cấp
                        - Nước nóng dung năng lượng mặt trời đun 24/7 giảm tiền điện bạn phải đun nước nóng
                        - Đèn sưởi phòng tắm cao cấp mùa đông bạn khỏi lo sợ tắm và giá lạnh
                        - Tivi box FPT với kho phim truyện HBO cùng hang ngàn phim khủng, ca nhạc, phim chiếu rạp giải trí đỉnh cao với màn hình trên 60  inh
                        - Tủ lạnh 165l sharp thái inverter tiết kiệm điện
                        - Bếp từ đôi nhập khẩu khỏi lo mua ga làm gì cho  nóng
                        - Điều hòa mới siêu mát inverter tiết kiệm điện
                        - Máy giặt sharp nhập khẩu indonexia giặt quần áo đảm bảo
                        - Ban công phơi đồ rộng thoáng mát: phơi quần áo, trồng cây cảnh, uống cà phê rất mát
                        - Quạt mát cũng được trang bị cho thoáng phòng
                        - Liên hệ chính chủ: 0904964437
                        - Địa chỉ: số 173 Phố Phạm Hùng cách kangnam 500m ngay sát trung tâm hội nghị quốc gia và khách sạn Marriot
                        - Miễn môi giới trung gian, xem nhà hoàn toàn miễn phí - Bạn muốn xem video và thêm thông tin về  phòng vui lòng qua zalo : 0977972780 xin cảm ơn</pre>
                    </div>
                  </div>

                  
                  
                </div>
              </div>
              
            </div>

        </div>
    
  )
}

export default Room1
