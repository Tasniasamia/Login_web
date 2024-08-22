import { Form, Input } from 'antd';
import React from 'react';
import { CiWavePulse1 } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const Shipping = () => {
    return (
        <div className='container mt-5 mx-auto  origin-destination 'style={{position:"relative",zIndex:10}}>
                    <div className='directionbutton position-absolute  'style={{position:"absolute",left:"50%",top:"70%",bottom:"50%",right:"50%",transform:"translate(-50%,-50%)",zIndex:20}}><FaArrowRightArrowLeft style={{color:"#08f"}}/></div>

            <Form className='d-flex align-items-end'layout='vertical'>

            <div className='sea 'style={{position:"absolute",left:0}}>
                <CiWavePulse1 style={{fontSize:"25px"}}/>
                <span className="ms-2">SEA</span>
            </div>

                <div className='w-50 '>
                    <Form.Item className='w-full' name="location"label={(<span style={{color:"#a1b3c8",fontSize:"10px"}}>Port of Origin</span>)} style={{marginLeft:"55px"}}>
                    <Input prefix={<FaLocationDot style={{color:"#08f"}} />} placeholder="Enter Your Location" name="location" className='formInput'/>
                    </Form.Item>

                </div>
                <div className='w-50  origin-desitination'>
                <Form.Item name="location"label={(<span style={{color:"#a1b3c8",fontSize:"10px"}}>Port of Destination</span>)}style={{marginRight:"55px"}}>
                <Input prefix={<FaLocationDot style={{color:"#08f"}} />} placeholder="Enter Your Location" name="location"className='formInput'/>
                    </Form.Item>                </div>
                 

                    <div className='search 'style={{position:"absolute",right:0}}>
                <FaSearch style={{fontSize:"20px"}}/>
            </div>
            </Form>
        </div>
    );
};

export default Shipping;
