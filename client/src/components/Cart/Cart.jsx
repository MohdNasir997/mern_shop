import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import './Cart.scss'

const Cart = () => {
    const data = [{
        id: 1,
        img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: 'Women with Hat',
        isNew: true,
        oldPrice:19,
        price:12,
        desc: 'Women posing'
    },
    {
        id:2,
        img:"https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: 'Hat',
        isNew: true,
        oldPrice: 20,
        price: 15,
        desc:'models posing'
    },]
  return (
    <div className='cart'>
        <h1>Products in Your Cart</h1>
        {data?.map( (item) => (
            <div className="item" key={item.id}>
                <img src={item.img} alt="image" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item?.desc.substring(0,100)}</p>
                    <p>Price: 1 X {item.price}</p>
                </div>
                <DeleteOutlinedIcon className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>Subtotal</span>
            <span>$123</span>
            <button>Proceed</button>
            <span className="reset">Reset Cart</span>
        </div>
    </div>
  )
}

export default Cart