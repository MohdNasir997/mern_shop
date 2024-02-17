import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import './Cart.scss'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../Redux/cartReducer';

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
    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();
    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => {
          total += item.quantity * item.price;
        });
        return total.toFixed(2);
      };
  return (
    <div className='cart'>
        <h1>Products in Your Cart</h1>
        {products?.map( (item) => (
            <div className="item" key={item.id}>
                <img src={item.img} alt="image" />
                <div className="details">
                    <h1>{item?.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <p>Price: {item.quantity} X ${item?.price}</p>
                </div>
                <DeleteOutlinedIcon className='delete' onClick={() => dispatch(removeItem(item.id))}/>
            </div>
        ))}
        <div className="total">
            <span>Subtotal: ${totalPrice()}</span>
            <button>Proceed</button>
            <span className="reset" onClick={ () => dispatch(resetCart())}>Reset Cart</span>
        </div>
    </div>
  )
}

export default Cart