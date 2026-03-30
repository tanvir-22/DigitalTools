import React, { use, useState } from 'react'
import AllProduct from './AllProduct';
import Cart from './Cart'
function Products({ product }) {
    const productArr = use(product)
    const [total, setTotal] = useState(0);
    const [selectedProd, setSelectedProd] = useState([])
    const [state, setState] = useState('product')
    console.log(productArr);
    console.log(selectedProd);
    return (
        <div className='mt-15'>

            <div className='text-center space-y-3'>
                <h1 className='text-5xl font-extrabold'>Premium Digital Tools</h1>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
                <div className='rounded-full shadow  w-fit mx-auto'>
                    <button onClick={() => { setState('product') }} className={`cursor-pointer font-semibold p-3 ${state == 'product' ? 'text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]' : ''} rounded-full`}>Products</button>
                    <button onClick={() => { setState('cart') }} className={`font-semibold cursor-pointer p-3 ${state == 'cart' ? 'text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]' : ''} rounded-full`}>Cart <span>({selectedProd.length})</span></button>
                </div>
            </div>




            {state == 'product' ? <AllProduct total={total} setTotal={setTotal} product={productArr} selectedProd={selectedProd} setSelectedProd={setSelectedProd} /> : <Cart state={state} setState={setState} total={total} setTotal={setTotal} selectedProd={selectedProd} setSelectedProd={setSelectedProd} />}

        </div>
    )
}

export default Products