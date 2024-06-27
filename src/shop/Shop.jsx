import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'



 const showResults = "Showing 01 - 12 of 139 Results"
 import Data from "../products.json"
import ProductsCard from './ProductsCard'
import Pagination from './Pagination'
import Search from './Search'
import ShopCategory from './ShopCategory'
import Tags from './Tags'

const Shop = () => {
    const [GridList, setGridlist] = useState(true);
    const [products, setProducts] = useState(Data);
   console.log(products)

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // funtion to change current page
    const paginate = ( pageNumber) => {
        setCurrentPage(pageNumber)
    };

    // filter product based on category
    const [ selectedCategory, setSelectedCategory] = useState("All");
    const menuItems = [...new Set(Data.map((val) => val.category))];

    const filterItem = (curcat) => {
        const newItem = Data.filter((newVal) =>{
            return newVal.category === curcat;
        })

        setSelectedCategory(curcat);
        setProducts(newItem);
    }
    

  return (
    <div>
        <PageHeader title="Shop page" curPage="Shop" />
        <div className='shop-page padding-tb'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className='col-lg-8 col-12'>
                        <article>
                            <div className='Shop-title d-flex flex-wrap justify-content-between'>
                                <p>{showResults}</p>
                                <div className={`product-view-mode ${GridList ? "gridActive" : "ListActive"}`}>
                                    <a className='grid' onClick={() => setGridlist(!GridList)}></a>
                                        <i className='icofont-ghost'></i>
                                    <a className='list' onClick={() => setGridlist(!GridList)}></a>
                                        <i className='icofont-listine-dots'></i>
                                </div>
                            </div>
                           
                           
                            <div>
                                <ProductsCard GridList={GridList} products={currentProducts}/>
                            </div>

                            <Pagination
                            productsPerPage={productsPerPage}
                            totalProducts={products.length}
                            paginate={paginate}
                            activePage={currentPage}
                            />

                        </article>
                    </div>
                    <div className='col-lg-4 col-12'>
                        <aside>
                            <Search products={products}GridList={GridList}/>
                            <ShopCategory
                            filterItems={filterItem}
                            setItem={setProducts}
                            menuItems={menuItems}
                            setProducts={setProducts}
                            selectedCategory={selectedCategory}
                            />
                            <Tags/>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shop