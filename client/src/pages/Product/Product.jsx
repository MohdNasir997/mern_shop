import React, { useEffect, useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {useDispatch} from 'react-redux'
import {addToCart} from '../../Redux/cartReducer'

function Product() {
  const [selectedImg,setSelectedImg] = useState(0)
  const [quantity,setQuantity] = useState(1)
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true)
  const id = useParams().id;
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get(`${import.meta.env.VITE_API}/product/${id}`);
      setData(res.data)
      setLoading(false)
    };
    fetchdata()
  },[id])
  // const images = [
  //   "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //   "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
  // ]
  const images= [`${data.img}`,`${data.img2}`]
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="image" onClick={(e) => setSelectedImg(0)}/>
          <img src={images[1]} alt="image" onClick={(e) => setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="mainImg" />
        </div>
      </div>
      <div className="right">
        <h1>{data.title}</h1>
        <p>${data.price}</p>
        <p>{data.desc}</p>
        <div className="quantity">
          <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>
        <button className="add" >
          <AddShoppingCartIcon onClick={dispatch(addToCart({
          id: data._id,
          title: data.title,
          price: data.price,
          desc: data.desc,
          img: data.img,
          quantity: quantity,
        }))}/> ADD TO CART
        </button>
        <div className="link">
          <div className="item"><FavoriteBorderIcon/> ADD TO WISH LIST</div>          
          <div className="item"> <BalanceIcon/> ADD TO COMPARE</div>
          <div className="info">
              <span>Vendor: {data.Vendor}</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Product