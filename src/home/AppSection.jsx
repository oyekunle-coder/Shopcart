import React from 'react'
import { Link } from 'react-router-dom'

const btnText = "Sign Up For Free"
const title = "Shop Anytime, Shop Anywhere"
const desc = "Your One-Stop Online shop For Everything You Need.Just download, install and start shopping!"

const AppSection = () => {
  return (
    <div className='app-secton padding-tb'>
        <div className='container'>
            <div className="section-header text-center">
                <Link to="/sign-up" className='lab-btn m-4'>{btnText}</Link>
                <h2 className='title'>{title}</h2>
                <p>{desc}</p>
            </div>
            
            {/* <div className='section-wrapper'>
                 <ul className='lab-ul justify-content-center'>
                    <li><a href="#"><img src="/src/assets/images/app/01.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="/src/assets/images/app/02.jpg" alt="" /></a></li>
                 </ul>
            </div> /* */}
        </div>
    </div>
  )
}

export default AppSection