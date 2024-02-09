import React from 'react'
import './List.scss'
import Card from '../Card/Card'
const List = ({catId,maxprice,sort}) => {
    const data = [{
        id: 1,
        img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: 'Women with Hat',
        isNew: true,
        oldPrice:19,
        price:12,
    },
    {
        id:2,
        img:"https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: 'Hat',
        isNew: true,
        oldPrice: 20,
        price: 15,
    },
    {
        id:3,
        img:"https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: 'mens hat',
        isNew: false,
        oldPrice: 18,
        price: 15,
    },
    {
        id:4,
        img:"https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: 'Men',
        isNew: false,
        oldPrice: 20,
        price: 15,
    }]
   return (
    <div className='list'>{data?.map((item) => <Card item={item} key={item.id} />)}</div>
  )
}

export default List