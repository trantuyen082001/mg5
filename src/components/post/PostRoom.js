import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Form, Col, Button,InputGroup,Row, FormLabel } from 'react-bootstrap'
import './PostRoom.css'
import DisplayImage from './DisplayImage'

const PostRoom = () => {

    const [validated, setValidated] = useState(false);

        const handleSubmit = (event) => {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            }

            setValidated(true);
        };

  return (
    <>
        <div className='postRoom'>
            <Link className='post_link' to='/'><i class="fa-solid fa-caret-left"></i> Thông tin bài đăng</Link>
        </div>
        <div className='postRoom_container'>
            <div className='post_img'>
                {<DisplayImage/>}
            </div>
            <div className='post_validation'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <div className='validation_inf'>
                <Row className="mb-3">
                    <Form.Group md="4" className='post_group' controlId="validationCustom01">
                        <Form.Label><i class="fa-solid fa-house-chimney"></i> Thông tin phòng</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Thông tin phòng"
                        />
                    </Form.Group>
                    <Form.Group as={Col} className='post_group' md="4" controlId="validationCustom02">
                        <Form.Label><i class="fa-solid fa-house-user"></i> Hiện trạng</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Hiện trạng"
                        />
                    </Form.Group>
                    <Form.Group as={Col} className='post_group' md="4" controlId="validationCustomUsername">
                        <Form.Label><i class="fa-solid fa-user-group"></i> Đối tượng cho thuê</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Đối tượng"
                                required
                            />
                    </Form.Group>
                    <Form.Group as={Col} className='post_group' md="4" controlId="validationCustomUsername">
                        <Form.Label><i class="fa-solid fa-ruler"></i> Diện tích</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Diện tích"
                                required
                            />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} className='post_group' md="6" controlId="validationCustom03">
                        <Form.Label><i class="fa-solid fa-location-dot"></i> Địa Chỉ</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Địa Chỉ" 
                            required />
                    </Form.Group>
                    <Form.Group as={Col} className='post_group' md="3" controlId="validationCustom04">
                        <Form.Label><i class="fa-solid fa-sack-dollar"></i> Giá</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Giá" 
                            required />
                    </Form.Group>
                </Row>
                </div>
                <div className='post_utilites'>
                      <Form.Group md="4" className='post_group' controlId="validationCustom01" style={{display: 'flex'}}>
                            <Form.Label>Tiện ích:</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Tiện ích"
                            />
                     </Form.Group>
                      <Form.Group md="4" className='post_group' controlId="validationCustom01" style={{display: 'flex'}}>
                            <Form.Label>Lưu ý:</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Lưu ý"
                            />
                     </Form.Group>
                </div>
                <Button className='post_btn' type="submit">Đăng Phòng</Button>
            </Form>

                
            </div>
        </div>
    </>
  )
}

export default PostRoom