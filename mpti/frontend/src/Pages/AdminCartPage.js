import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar/SideBar'
import './styles/AdminCart.style.css'
import axios from 'axios'
// import {useDispatch} from 'react-redux'

import {TextField, Button, Typography, Paper, Grow} from "@material-ui/core"
import { Card } from 'react-bootstrap'
// import { useNavigate } from 'react-router-dom'
import {FaEdit} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { createProduct } from '../api'
import FileBase from 'react-file-base64'

export default function AdminCartPage() {
    const [postProduct, setPostProducts] = useState({
        title: "", image: "", priceMl: 0, descripsi: "", stokMl: 0, urlPic: ""
    })
    const [listProduct, setListProduct] = useState([])
    // let navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        // if(currentId){
        //     dispatch
        // }
        dispatch(createProduct(postProduct))
    }
    const deleteProduct = () => {

    }
    const getProducts = async() => {
        try {
            const url = "http://localhost:5000/products"
            await axios.get(url).then((res) => {
                console.log(res.data)
                setListProduct(res.data)
            })
        } catch (error) {
            console.log(error.res.data.message)
        }
    }
    useEffect(() => {
        getProducts()
    }, [])
  return (
    <div className='adminCart'>
        {/* <div style={{height: '80px'}}></div> */}
        <div className='dashboard_adminCart'>
            <SideBar/>
            <div className='dashboard__mainCart'>
                <div className='dashboard_mainCart_Product'>
                    <>
                        {listProduct.map((product) => (
                            <Card className='cardAdmin' key={product.id}>
                                <Card.Img src={product.urlPic} className='card_image_admin'/>
                                <div style={{border: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <div>
                                        <h5>
                                            {product.title}
                                        </h5>
                                        <p style={{color: '#00000', textAlign: 'start'}}>IDR {product.priceMl}</p>
                                    </div>
                                    <div className='productButton'>
                                        <button onClick={() => deleteProduct(product.id)}>X</button>
                                    </div>
                                </div>
                                <button className='edit'>
                                    <FaEdit/>
                                </button>
                            </Card>
                        ))}
                    </>
                </div>
                <div>
                    <Paper className='paper'>
                        <form autoComplete='off' noValidate className={`root form`} onSubmit={handleSubmit}>
                        <Typography variant="h6" className='text-center'>Creating a New Product</Typography>
                        <TextField name="title" style={{margin: '10px 5px'}} variant="outlined" label="Title" fullWidth value={postProduct.title} onChange={(e) => setPostProducts({
                            ...postProduct, title: e.target.value
                        })}/>
                        <TextField name="priceMl" variant="outlined" label="Price/ML"style={{margin: '10px 5px'}} fullWidth value={postProduct.priceMl} onChange={(e) => setPostProducts({
                            ...postProduct, priceMl: e.target.value
                        })}/>
                        <TextField name="descripsi" variant="outlined"style={{margin: '10px 5px'}} label="Deskripsi" fullWidth value={postProduct.descripsi} onChange={(e) => setPostProducts({
                            ...postProduct, descripsi: e.target.value
                        })}/>
                        <TextField name="stokMl" variant="outlined" label="stok parfume"style={{margin: '10px 5px'}} fullWidth value={postProduct.stokMl} onChange={(e) => setPostProducts({
                            ...postProduct, stokMl: e.target.value
                        })}/>
                        <div className='fileInput'style={{margin: '10px 5px'}}>
                            <FileBase type="file" multiple={false} onDone={({base64}) => setPostProducts({...postProduct, urlPic: base64})}/>
                            <Button className="buttonSubmit" variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                        </div>
                    </form>
                </Paper>
                </div>
            </div>
        </div>
    </div>
  )
}
