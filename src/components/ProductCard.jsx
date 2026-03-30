import React, { useState } from 'react'
import { toast } from 'react-toastify';

function ProductCard({ item, selectedProd, setSelectedProd, total, setTotal}) {


    const isbought = selectedProd.some(selProd => {
        return selProd.name === item.name;
    })

    const handleBuyNow = (item) => {
        toast.success(`${item.name} added to cart`)
        let newPrice = item.price + total;
        setTotal(newPrice)
        setSelectedProd([...selectedProd, item])
    }
    return (
        <div className="card w-11/12 md:w-96 bg-base-100 shadow-xl relative">
            <div className="card-body">
                <div className={`badge  badge-soft ${item.tag == 'New' ? "badge-success" : "badge-primary"} absolute top-3 right-2`}>{item.tag}</div>
                <div className="flex flex-col justify-between">
                    <div className='w-16 h-16 p-3 rounded-full border-gray-200 border flex justify-center items-center'>
                        <img className=' ' src={item.icon} alt="" />
                    </div>
                    <h2 className="text-2xl font-bold">{item.name}</h2>
                    <p className='text-[#627382]'>{item.description}</p>
                    <p className="text-xl mt-3"><span className='font-extrabold text-3xl'>${item.price}</span>/{item.period}</p>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-[1.2em] text-[#627382]">
                    {
                        item.features.map(feature => (
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>{feature}</span>
                            </li>
                        ))
                    }
                </ul>
                <div className="mt-6">
                    <button onClick={() => { handleBuyNow(item) }} disabled={isbought} className="btn text-white rounded-full w-full px-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">{isbought ? "Added to cart" : "Buy Now"}</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard