import React from 'react'

const title = "Most Popular Tags";

const tagsList = [ { link: "#", text: "Discount Sales", }, { link: "#", text: "Promo Codes", }, { link: "#", text: "Vouchers", }, { link: "#", text: "Auctions", }, { link: "#", text: "Free Delivery", }, { link: "#", text: "Help", }, { link: "#", text: "Orders", }, 
{ link: "#", text: "New Items", }, { link: "#", text: "Recent Reviews", }, ];

const Tags = () => {
  return (
    <div className='widget widget-tags'>
        <div className="widget-header">
            <h5 className="title">{title}</h5>
        </div>
        <ul className='widget-wrapper'>
            {
                tagsList.map((val, i) =>(
                    <li key={i}><a href={val.link}>{val.text}</a></li>
                ))
            }
        </ul>
    </div>
  )
}

export default Tags