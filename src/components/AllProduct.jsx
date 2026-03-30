import React, { useState } from 'react'
import ProductCard from './ProductCard';

function AllProduct({ product ,selectedProd,setSelectedProd,total,setTotal}) {
   
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 w-11/12 mt-10  mx-auto place-items-center gap-4'>
            {
                product.map(item => (
                    <ProductCard  total={total} setTotal={setTotal} item={item} selectedProd={selectedProd} setSelectedProd = {setSelectedProd}/>
                ))
            }
        </div>
    )
}
export default AllProduct