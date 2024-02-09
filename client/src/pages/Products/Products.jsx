import React, { useState } from 'react'
import './Products.scss'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
function Products() {

  const catId = parseInt(useParams().id)
  const [maxprice, setMaxprice] = useState(1000)
  const [sort,setSort] = useState(null)
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
         <div className="inputItem">
          <input  type="checkbox" id='1' value={1}/>
          <label htmlFor="1">Shoes</label>
         </div> 
         <div className="inputItem">
          <input  type="checkbox" id='2' value={2}/>
          <label htmlFor="2">skirts</label>
         </div>
         <div className="inputItem">
          <input  type="checkbox" id='3' value={3}/>
          <label htmlFor="3">Jeans</label>
         </div>
        </div>
        <div className="filterItem">
          <h2>Filter By Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={ (e) => setMaxprice(e.target.value)}/>
            <span>{maxprice}</span>
          </div>
        </div>
        <div className="filterItem">
        <h2>Sort By</h2>
          <div className="inputItem">
            <input type="radio" name="asc" id="asc" value='asc' onChange={(e) => setSort('asc')}/>
            <label htmlFor="asc">Price: Lowest to Highest</label>
          </div>
          <div className="inputItem">
            <input type="radio" name="desc" id="desc" value='desc'  onChange={(e) => setSort('desc')}/>
            <label htmlFor="desc">Price : Highest to lowest</label>
          </div>
        </div>
      </div>
      <div className="right">
      <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List catId={catId} maxprice={maxprice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products