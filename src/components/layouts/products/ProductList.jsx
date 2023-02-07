import React, { useContext, useEffect, useState } from 'react'
import { FilterContext } from '../../../context/FilterContext';
import HeaderProducts from './HeaderProducts';
import ProductItem from './ProductItem';
import classes from './ProductList.module.css'
import ProductsPagination from './ProductsPagination';
const ProductList = () => {
  const [currPage,setCurrPage] = useState(1);
  const itemsPerPage = 12;
  const [showProducts,setShowProducts] = useState([]);
  const {filteredProducts} = useContext(FilterContext)
  
  useEffect(()=>{
    const indexPreviousPage = itemsPerPage * (currPage - 1);
    const indexCurrPage = itemsPerPage * currPage;
    setShowProducts(filteredProducts.slice(indexPreviousPage,indexCurrPage));
  },[currPage,filteredProducts]);

  useEffect(()=>{
    setCurrPage(1);
  },[filteredProducts]);

  const productsList = showProducts.map((prod) => (
        <ProductItem
        key={prod.name}
        name={prod.name}
        price={prod.price}
        img={prod.img}
        description={prod.description}
        />
     ));

  return (
    <section className={classes.products}>
        <HeaderProducts
        products={filteredProducts}
        itemsPerPage={itemsPerPage}
        currPage={currPage}
        setCurrPage={setCurrPage}/>
        {
            filteredProducts.length ? (
                <>
                <ul className={classes.productsList}>{productsList}</ul>
                <ProductsPagination
                products={filteredProducts}
                itemsPerPage={itemsPerPage}
                setCurrPage={setCurrPage}
                currPage={currPage}
                />
                </>
            ) :(
                <p className={classes.error}>
                    Ops ocurrio un error
                </p>
            )
        }
    </section>
  )
}

export default ProductList