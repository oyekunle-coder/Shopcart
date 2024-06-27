import React, { useState } from 'react'
import Rating from '../components/Rating';
const reviwtitle = "Add a Review";

let ReviewList = [ { imgUrl: "/src/assets/images/instructor/01.jpg", imgAlt: "Client thumb", name: "Ganelon Boileau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: "/src/assets/images/instructor/02.jpg", imgAlt: "Client thumb", name: "Morgana Cailot", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: "/src/assets/images/instructor/03.jpg", imgAlt: "Client thumb", name: "Telford Bois", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: "/src/assets/images/instructor/04.jpg", imgAlt: "Client thumb", name: "Cher Daviau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, ];

const Review = () => {

        const [reviewShow, SetReviewShow] = useState(true);

  return (
     <>
       {/*{ <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
            <li className='lab-btn' onClick={() => SetReviewShow(!reviewShow)}><span>Description</span></li>
            <ul className="lab-btn bg-primary ms-3" onClick={() => SetReviewShow(!reviewShow)}> <span>Reviews 4</span> </ul>
        </ul>
        
        <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
                <div className="review-showing">
                    <ul className='content-lab-ul'>
                        {
                            ReviewList.map((review, i) => (
                                <li key={i}>
                                    <div className="post-thumb">
                                        <img src={review.imgUrl} alt="" />
                                    </div>
                                    <div className="post-content">
                                        <div className="entry-meta">
                                            <div className="posted-on">
                                                <a href="#">{review.name}</a>
                                                <p>{review.date}</p>
                                            </div>
                                        </div>
                                        <div className='entry-content'></div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>} 
                </div> 
                
                
        </div> */}
    <div className='review-content'>
     <div className='review-showing'>
        <div className='client-review'>
            <div className='review-form'>
                <div className='review-title'>
                    <h5>{reviwtitle}</h5>
                </div>

                <form action="action" className='row'>
                    <div className='col-md-4 col-12'>
                        <input type="text" name='name' id='name' placeholder='Full Name*' />
                    </div>
                    <div className='col-md-4 col-12'>
                        <input type="text" name='email' id='email' placeholder='Your Email*' />
                    </div>
                    <div className='col-md-4 col-12'>
                       <div className='rating'>
                            <span className='me-2'>Your Rating </span>
                            <Rating/>
                       </div>
                    </div>
                    <div className='col-md-12 col-12'>
                        <textarea name="" id="" rows="8" placeholder='Write your Review'></textarea>
                    </div>

                    <div className='col-12'>
                        <button type='submit' className='default button'>
                            <span>Submit Review</span>
                        </button>
                    </div>
                </form>
            </div>
         </div>
        </div>
    </div>
    </>
  )
}

export default Review