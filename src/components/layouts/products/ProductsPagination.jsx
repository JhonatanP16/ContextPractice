import React from 'react'
import classes from './ProductsPagination.module.css'
import { FaAngleLeft, FaAngleRight} from "react-icons/fa";
const ProductsPagination = ({products,itemsPerPage,currPage,setCurrPage}) => {
  
    const pages = [];
    const totalPages = Math.ceil(products.length / itemsPerPage);
    for(let i =1; i <= totalPages;i++){
        pages.push(i);
    }
    const handleClickNumber = (e) =>{
        setCurrPage(e.currentTarget.innerText);
        window.scrollTo({top:0,behavior:'smooth'});
    };

    const handleClickPage = (pageValue) =>{
        if(pageValue < 1){
            return;
        }
        if(pageValue > +totalPages){
            return;
        }
        window.scrollTo({top:0,behavior:"smooth"});
        setCurrPage(pageValue)
    }

  return (
    <>
    {
        pages.length > 1 && (
            <nav className={classes.nav}>
                <button
                onClick={()=> handleClickPage(+currPage -1)}
                title='Pagina Anterior'>
                    <FaAngleLeft/>
                </button>
                {
                    pages.map((pag) =>(
                      <button
                      key={pag}
                      onClick={handleClickNumber}
                      className={`${classes.pagNumber} ${
                        +pag === +currPage ? classes.currPage : ''
                      }`}>
                        {pag}
                      </button>
                    ))
                }
                <button
                onClick={()=>handleClickPage(+currPage +1)}
                title="next Page">
                    <FaAngleRight/>
                </button>
            </nav>
        )
    }
    </>
  )
}

export default ProductsPagination