import React from 'react'
import {Link} from 'react-router-dom'
import './Card.scss'
const Card = ({item}) => {
  return (
    <Link className='link' to={`/product/${item._id}`}>
        <div className="card">
         <div className="image">
          {item?.isNew && <span>New Season</span>}
          <img
            src={
                item.img
                //   process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
            item.img
                //   process.env.REACT_APP_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item?.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice || item?.price + 20}</h3>
          <h3>${item?.price}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Card