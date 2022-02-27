import React from 'react'
import "../Home/HomeXuHuong.css";
import imgHaiChau from "../img/HaiChau.jpg"
import imgCamLe from "../img/CamLe.jpg"
import imgHoaVang from "../img/HoaVang.jpg"
import imgLienChie from "../img/LienChieu.jpg"
import imgSonTra from "../img/SonTra.jpg"
import imgNguHanhSon from "../img/NguHanhSon.jpg"
import imgThanhKhe from "../img/ThanhKhe.jpg"

const HomeXuHuong = () => {


  return (
    <>
        <div className='XuHuong_container'>
            <div className='xuhuong_group'>
                <div className='title'>
                    <span>Xu hướng tìm kiếm</span>
                </div>
                <div className='xuhuong_item'>
                    <div className='item'>
                        <div className='item_name' >
                            <img src={imgHaiChau}/>
                            <span>Hải Châu</span>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='item_name'>
                        <img src={imgHoaVang}/>
                            <span>Hòa Vang</span>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='item_name'>
                        <img src={imgThanhKhe}/>
                            <span>Thanh Khê</span>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='item_name'>
                        <img src={imgSonTra}/>
                            <span>Sơn Trà</span>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='item_name'>
                        <img src={imgNguHanhSon}/>
                            <span>Ngũ Hành Sơn</span>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='item_name'>
                        <img src={imgLienChie}/>
                            <span>Liên Chiểu</span>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='item_name'>
                        <img src={imgCamLe}/>
                            <span>Cẩm Lệ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomeXuHuong