import Filter from '../../filter/Filter';
import ProductList from './ProductList';
import classes from './Products.module.css';
const Products = () => {
  
  return (
    <div className="container">
        <main className={classes.main}>
         <p className={classes.navCatalogo}>Home / Catalogo</p>
         <Filter/>
         <ProductList/>
        </main>
    </div>
  )
}

export default Products