import React, { useEffect, useState } from 'react'
import './List.scss'
import Card from '../Card/Card'
import axios from 'axios';
const List = ({catId,maxprice,sort}) => {
    // const data = [{
    //     id: 1,
    //     img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //     title: 'Women with Hat',
    //     isNew: true,
    //     oldPrice:19,
    //     price:12,
    // },
    // {
    //     id:2,
    //     img:"https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //     title: 'Hat',
    //     isNew: true,
    //     oldPrice: 20,
    //     price: 15,
    // },
    // {
    //     id:3,
    //     img:"https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //     title: 'mens hat',
    //     isNew: false,
    //     oldPrice: 18,
    //     price: 15,
    // },
    // {
    //     id:4,
    //     img:"https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //     title: 'Men',
    //     isNew: false,
    //     oldPrice: 20,
    //     price: 15,
    // }]
const [data,setData] = useState([]);
const [loading,setLoading] = useState(true)
const API = import.meta.env.VITE_API
useEffect(() => {
  const fetchdata = async () => {
   if(sort === 'asc'){
    const res = await axios.get(`${API}/products?sort=${sort}`);
    setData(res.data)
    setLoading(false)
   } else if(sort === 'desc') {
    const res = await axios.get(`${API}/products?sort=${sort}`);
    setData(res.data)
    setLoading(false)
   }else {
    const res = await axios.get(`${API}/products`);
    setData(res.data)
    setLoading(false)
   }
  };
  fetchdata()
},[maxprice,sort])


   return (
    <div className='list'>{loading ? 'Loading' : data?.map((item) => { if(item.price < maxprice) {
      return <Card item={item} key={item.id} />
    } })}</div>
  )
}

export default List