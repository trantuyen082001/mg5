import React, {useState} from 'react'
import { Button, Form, FormControl } from 'react-bootstrap';
import './DisplayImage.css'

const DisplayImage = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
        <div className='display_container'>
                <h4>Thêm hình ảnh</h4>
               {selectedImage && (
            <div className='display_img'>
                <img 
                    alt="not fount" 
                    width={"250px"} 
                    src={URL.createObjectURL(selectedImage)} 
                />
            <br />
            <Button style={{width: '100px', margin: '5px', padding: '5px'}} variant="outline-primary" onClick={()=>setSelectedImage(null)}>Remove</Button>
            </div>
           )}
              <br />
              <br /> 
            <FormControl  
                className="choose_file"
                type="file"
                // name="myImage"
                onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
                }}
            ></FormControl>
        </div>
    </>
  )
}

export default DisplayImage