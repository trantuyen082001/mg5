import React from 'react'
import imgHome from "../img/photo.jpg";
import "../Home/HomeScreen.css";
import HomeXuHuong from './HomeXuHuong';

const Homescreens = () => {
  return (
    <>
       <div className='home_container'>
          <div className='home_img'>
              <div className='home_desc'>
                <div className='home_title'>
                  <h1>MR5</h1>
                  <span>Ứng dụng hỗ trợ thuê trọ</span>
                </div>
                  <div className='home_search'>
                  <div class="input-group">
                      <div class="form-outline">
                        <div className='home_icon'>
                          <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <span>Đà Nẵng</span>
                        <input type="search" id="form1" class="form-control" placeholder='Tìm kiếm theo địa chỉ'/>
                      </div>
                      <button type="button" class="btn btn-primary">
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
              </div>
          </div>
       </div>
       <HomeXuHuong/>
    </>
  )
}

export default Homescreens