import React from 'react'
import {Col, Row, Card, Button} from 'react-bootstrap'
import listRoom from '../../listRoom'
import './ListRoom.css'

const ListRoom = () => {
  return (
    <div className='ListRoom'>
        <div className='listRoom_container'>
            <div className='listRoom_left'>
                <h2>Room Latest</h2>
                <Row>
                    {listRoom.map(listRoom => (
                        <Row className="listRoom_row">
                            <Card className="listRoom_item">
                                <Card.Img className="listRoom_image" variant="top" src={listRoom.image} />
                                <Card.Body className='listRoom_container'>
                                    <div className='name'>
                                        <Card.Title className='left_name'>{listRoom.name}</Card.Title>
                                    </div>
                                    <div className='block'>
                                        <div className='block_desc'>
                                            <Card.Text className='available'><i class="fa-solid fa-house-user"></i>  {listRoom.available}</Card.Text>
                                            <div className='gender_space' style={{display: 'flex'}}>
                                                <Card.Text><i class="fa-solid fa-user-group"></i> {listRoom.gender}</Card.Text>
                                                <Card.Text><i class="fa-solid fa-ruler"></i> {listRoom.space}</Card.Text>
                                            </div>
                                            <Card.Text className='left_address'>{listRoom.Address}</Card.Text>
                                        </div>
                                        <div className='block_price'>
                                            <Card.Title className='left_price'>{listRoom.price}</Card.Title>
                                            <Card.Text>tr/Phòng</Card.Text>
                                        </div>
                                    </div>
                                   
                                </Card.Body>
                            </Card>
                        </Row>
                    ))}
                </Row>
            </div>
            <div className='listRoom_right'>
                <h2>Verified</h2>
                <Row>
                    {listRoom.map(listRoom => (
                        <Row className="listRoom_row">
                            <Card className="listRoom_item" style={{ width: '18rem' }}>
                                <Card.Img className="listRoom_image" variant="top" src={listRoom.image} />
                                <Card.Body className='listRoom_container'>
                                    <div>
                                        <Card.Title className='right_title'>{listRoom.name}</Card.Title>
                                    </div>
                                    <div className='block_desc'>
                                        <Card.Text className='right_address'>{listRoom.district}</Card.Text>
                                        <Card.Title className='right_price'>{listRoom.price}</Card.Title>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Row>
                    ))}
                </Row>
            </div>
        </div>
    </div>
  )
}

export default ListRoom;