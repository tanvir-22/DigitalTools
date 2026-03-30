import React, { use, useState } from 'react'
import AllProduct from './AllProduct';
import Cart from './Cart'
function Products({product}) {
    const productArr = use(product)

    const [selectedProd,setSelectedProd] = useState([])
    const [state,setState] = useState('product')
    console.log(productArr);
  return (
    <div className='mt-15'>

        <div className='text-center space-y-3'>
            <h1 className='text-5xl font-extrabold'>Premium Digital Tools</h1>
            <p className='text-[#627382]'>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
            <div className='rounded-full shadow  w-fit mx-auto'>
                <button onClick={()=>{setState('product')}} className={`cursor-pointer p-3 ${state=='product'?'bg-red-50':''} rounded-full`}>Products</button>
                <button onClick={()=>{setState('cart')}} className={`cursor-pointer p-3 ${state=='cart'?'bg-red-50':''} rounded-full`}>Cart <span>(0)</span></button>
            </div>
        </div>



   
        {state=='product' ? <AllProduct/> : <Cart/> }
    
    </div>
  )
}

export default Products