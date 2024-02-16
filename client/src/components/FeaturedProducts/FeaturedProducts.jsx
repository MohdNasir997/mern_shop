import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss'
import axios from 'axios'
function FeaturedProducts({type}) {
//     const data = [{
//         id: 1,
//         img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         title: 'Women with Hat',
//         isNew: true,
//         oldPrice:19,
//         price:12,
//     },
//     {
//         id:2,
//         img:"https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         title: 'Hat',
//         isNew: true,
//         oldPrice: 20,
//         price: 15,
//     },
//     {
//         id:3,
//         img:"https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         title: 'mens hat',
//         isNew: false,
//         oldPrice: 18,
//         price: 15,
//     },
//     {
//         id:4,
//         img:"https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         title: 'Men',
//         isNew: false,
//         oldPrice: 20,
//         price: 15,
//     }
// ]

const [data,setData] = useState();

useEffect(() => {
  const fetchdata = async () => {
    const res = await axios.get(`${import.meta.env.API}/products`);
    setData(res.data)
  };
  fetchdata()
},[type])

  return (
    <div className='FeaturedProducts'>
       <div className="top">
        <h1>{type} products</h1>
        <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
      suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
      lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
      suspendisse ultrices gravida. Risus commodo viverra maecenas.
    </p>
  </div>
  <div className="bottom">
    {/* {error
      ? "Something went wrong!"
      : loading
      ? "loading"
      : data?.map((item) => <Card item={item} key={item.id} />)} */}
      {data?.map((item) => <Card item={item} key={item._id} />)}
  </div>
  </div>
  )
}

export default FeaturedProducts