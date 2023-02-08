import React, { useContext, useRef, useState,useCallback,useEffect } from 'react'
import { FilterContext } from '../../context/FilterContext';
import useVisibility from '../../hooks/useVisibility';
import classes from './Filter.module.css'
import { FaFilter} from "react-icons/fa";
import ButtonClose from '../utilities/ButtonClose';
import FormCategory from './FormCategory';
import FormColors from './FormColors';
import FormPrice from './FormPrice';
import WrapperButton from '../utilities/WrapperButton'
import { AlertContext } from '../../context/AlertContext';
const Filter = () => {
  const refBtnFilter = useRef();
  const {elementVisible,setElementVisible} = useVisibility(refBtnFilter);
  const {saveFilter,initialFilter,filter:filterSaved} = useContext(FilterContext);
  const [filter,setFilter] = useState(initialFilter);
  const { showAlert } = useContext(AlertContext);

  const setFilterPrices = useCallback((prices)=>{
    setFilter((currVal) => ({...currVal, prices}));
  },[]);
  const setFilterColors = useCallback((colors) =>{
    setFilter((currVal) => ({...currVal,colors}));
  },[])
  const setFilterCategories = useCallback((categories) => {
    setFilter((currVal)=> ({...currVal,categories}));
  },[])

  const btnFilter = (
    <button
    className={`${classes.btnOpenFilter} ${
      elementVisible ? classes.filterVisible : ''
    }`}
    aria-label="Abrir Filtro"
    type='button'
    onClick={()=>setElementVisible((currVal) => !currVal)}
    >
      <FaFilter/>
    </button>
  )
  const applyFilter = () =>{
    saveFilter(filter);
    const filterHasChanged = !(
      JSON.stringify(filterSaved) === JSON.stringify(filter)
    );
    if (filterHasChanged) showAlert("Filtro aplicado");
  };

  const cleanFilter = () =>{
    saveFilter(initialFilter);
    showAlert("Filtro excluído");
  };

  useEffect(()=>{
    setFilter(filterSaved);
  },[filterSaved])

  return (
    <>
    <div className={classes.filterContainer} ref={refBtnFilter}>
         {btnFilter}
        <section 
        className={`${classes.filter} ${
          elementVisible ? classes.filterVisible : ''
        }`}>
          <ButtonClose
          onClose={()=>setElementVisible(false)}
          className={classes.btnClose}
          />
         <h2>Filtrar elements</h2>
         <FormCategory
          setFilter={setFilterCategories}
          filterVal={filter.categories}
         />
         <FormColors
          setFilter={setFilterColors}
          filterVal={filter.colors}/>
          <FormPrice setFilter={setFilterPrices}/>
          <WrapperButton className={classes.btn} onClick={applyFilter}>
            Aplicar filtro
          </WrapperButton>
         <button onClick={cleanFilter} className={classes.btnClear}>
            Limpiar Filtro
         </button>
        </section>
    </div>
    </>
  )
}

export default Filter