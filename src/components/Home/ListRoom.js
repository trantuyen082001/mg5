import React from 'react'
import {Col, Row, Card, Button} from 'react-bootstrap'
import listRoom from '../../listRoom'
import './ListRoom.css'

const ListRoom = () => {
  return (
    <>
        <div className='listRoom_container'>
            <div className='listRoom_left'>
                <h2>Room Latest</h2>
                <Row>
                    {listRoom.map(listRoom => (
                        <Row className="listRoom_row">
                            <Card className="listRoom_item">
                                <Card.Img className="listRoom_image" variant="top" src={listRoom.image} />
                                <Card.Body className='listRoom_container' style={{display: 'flex'}}>
                                    <div className='block_desc'>
                                        <Card.Title>{listRoom.name}</Card.Title>
                                        <Card.Text><i class="fa-solid fa-house-user"></i>{listRoom.available}</Card.Text>
                                        <div className='gender_space' style={{display: 'flex'}}>
                                            <Card.Text>{listRoom.gender}</Card.Text>
                                            <Card.Text>{listRoom.space}</Card.Text>
                                        </div>
                                        <Card.Text>{listRoom.Address}</Card.Text>
                                    </div>
                                    <div>
                                        <Card.Title>{listRoom.price}</Card.Title>
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
                                    <div className='block_desc'>
                                        <Card.Title>{listRoom.name}</Card.Title>
                                        
                                        <Card.Text>{listRoom.Address}</Card.Text>
                                    </div>
                                    <div>
                                        <Card.Title>{listRoom.price}</Card.Title>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Row>
                    ))}
                </Row>
            </div>
        </div>
    </>
  )
}

export default ListRoom;