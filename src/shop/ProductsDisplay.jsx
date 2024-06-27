import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const desc = "Remember, a great clothes description can be vital to your marketing strategy. Determine what you want your clothes to say about you, your product, and your brand. By looking at the clothes description example in this article, you will surely have a feast of inspiration."

const ProductsDisplay = ({item}) => {
   // console.log(item)
    const {name, id, price, seller, ratingsCount, quantity} = item;

    const [prequantity, setQuantity] = useState (quantity);
    const [coupon, setCoupon] = useState("");
    const [size, setSize] = useState("Select Size");
    const [color, setColor] = useState("Select color");

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    }

    const handleColorChange = (e) => {
        setColor(e.target.value);
    }

    const handleDecrease = ()=> {
            if(prequantity - 1){
                setQuantity(prequantity - 1)
            }
    }
    const handleIncrease = () => {
            setQuantity(prequantity + 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
            id: id,
            img: img,
            name: name,
            price: price,
            quantity: prequantity,
            size: size,
            color: color,
            coupon: coupon
        }
        // console.log(product)

        const existingCart = JSON.parse(localStorage.getItem("")) || [];

        const existingProductIndex = existingCart.findIndex((item) => item.id === id);

            if(existingProductIndex !== -1) {
                existingCart[existingProductIndex].quantity += prequantity;
            }else{
                existingCart.push(product);
            }

            // update local storage
            localStorage.setItem("cart", JSON.stringify(existingCart));

            setQuantity(1);
            setSize("Select Size")
            setColor("Select Color")
            setCoupon("");
    }

  return (
    <div>
        <h4>{name}</h4>
        <p className="rating">
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <span>{ratingsCount} reviews</span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>

            {/* Cart components */}

        <div>
            <form onSubmit={handleSubmit}>
                <div className="select-product size">
                    <select value={size} onChange={handleSizeChange}>
                        <option>Select Size</option>
                        <option>SM</option>
                        <option>MD</option>
                        <option>LG</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </select>
                    <i className='icofont-rounded-down'></i>
                </div>
                <div className="select-product color">
                    <select value={color} onChange={handleColorChange}>
                        <option>Select Color</option>
                        <option>Pink</option>
                        <option>Ash</option>
                        <option>Red</option>
                        <option>White</option>
                        <option>Blue</option>
                        <option>Black</option>
                    </select>
                    <i className='icofont-rounded-down'></i>
                </div>
                <div className="cart-plus-minus">
                    <div className='dec qtybutton'onClick={handleDecrease}>-</div>
                    <input className='cart-plus-minus-box' type="text" name='qtybutton' id='qtybutton'
                    value={prequantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))}/>
                    <div className='inc qtybutton' onClick={handleIncrease}>+</div>
                </div>


                {/* coupon */}
                <div className="discount-code mb-2">
                    <input type="text" placeholder='Enter Discount Code' onChange={(e) => setCoupon(e.target.value)} />
                </div>

                <button type='submit' className='lab-btn'>
                    <span>Add to Cart</span>
                </button>
                <Link to='/cart-page' className='lab-btn bg-primary'>
                    <span>Checkout</span>
                </Link>
            </form>
        </div>
        
    </div>
  )
}

export default ProductsDisplay