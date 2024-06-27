import React from 'react'
import PageHeader from '../components/PageHeader';

const subTitle = "About Our Brand"; 
const title = "Good Qualification Services And Better Expriences"; 
const desc = "Working around the clock 24/7 to bring the perfect items that you need to your fingertips at mouth watering prices.";

const year = "30+"; const expareance = "Years Of Existence";

const aboutList = [ { imgUrl: '/src/assets/images/about/icon/01.jpg', imgAlt: 'about icon rajibraj91 rajibraj', title: 'Skilled Staffs', desc: 'Highly Skilled Staffs who are available to assist you upon demand via customer support', }, 
{ imgUrl: '/src/assets/images/about/icon/02.jpg', imgAlt: 'about icon rajibraj91 rajibraj', title: 'Certified Items', desc: ' We provide Authentic Products from Certified Store', }, 
{ imgUrl: '/src/assets/images/about/icon/03.jpg', imgAlt: 'about icon rajibraj91 rajibraj', title: 'Online Services', desc: 'We boast of an exceptional online interface which is extremely user-friendly', }, ]

const About = () => {
  return (
    <div>
        <PageHeader title={"About Our Brand"} curPage={"About"}/>
        <div className='about-section style-3 padding-tb section-bg'>
            <div className="container">
                <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
                    <div className="col">
                        <div className="about-left">
                            <div className='about-thumb'>
                                <img src="/src/assets/images/about/01.jpg" alt="" />
                            </div>
                            <div className="abs-thumb">
                            <img src="/src/assets/images/about/02.jpg" alt="" />
                            </div>
                            <div className="about-left-content">
                                <h3>{year}</h3>
                                <p>{expareance}</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* 2nd col */}
                    <div className='col'>
                        <div className="about-right-content">
                            <div className="section-header">
                                <span className='subtitle'>{subTitle}</span>
                                <h2 className='title'>{title}</h2>
                                <p>{desc}</p>
                            </div>

                            <div className="section-wrapper">
                                <ul className='lab-ul'>
                                    {
                                        aboutList.map((val, i) =>(
                                            <li key={i}>
                                                <div className="sr-left">
                                                    <img src={val.imgUrl} alt="" />
                                                </div>
                                                <div className="sr-right">
                                                    <h3>{val.title}</h3>
                                                    <p>{val.desc}</p>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About