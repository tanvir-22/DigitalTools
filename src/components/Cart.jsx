import React from 'react'
import { IoIosWarning } from "react-icons/io";
import { toast } from 'react-toastify';
function Cart({selectedProd,setSelectedProd,total,setTotal,setState}) {

    const handleRemove = (prod)=>{
        let newPrice = total - prod.price
        setTotal(newPrice)
        toast.error(`${prod.name} removed successfully`)
        setSelectedProd(selectedProd.filter(item=>prod.id!=item.id))
    }

    const checkout  = ()=>{
        document.getElementById('my_modal_5').showModal();
      
        
    }
  return (
    <>
   {
    selectedProd.length>0 ? 
    <div className='mt-10 flex flex-col justify-center items-center border border-gray-200 w-11/12 mx-auto p-3'>
           <h1 className='py-2 font-bold text-xl '>Your Cart</h1>

        <div className=' p-5  w-11/12 rounded-md  '>
            {selectedProd.map(item=>(
           <div className='mt-4 p-4 flex justify-between bg-[#fafbfc] shadow items-center '>

                     <div className='flex gap-3'>
                     <div className='w-16 h-16 p-3 rounded-full border-gray-200 border flex justify-center items-center'>
                        <img className=' ' src={item.icon} alt="" />
                    </div>
                    <div>
                        <p className="font-bold">{item.name}</p>
                        <p className='font-semibold'>${item.price}</p>
                    </div>
                    
                </div>
                <div>

                    <button onClick={()=>{handleRemove(item)}} className="btn btn-outline btn-secondary">Remove</button>
                </div>
           </div>
            ))}
            <div className='flex justify-between p-2 text-xl font-bold'>
                <p >Total</p>
                <p>${total}</p>
            </div>
            <button onClick={()=>{checkout()}}  className='cursor-pointer bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-md p-2 text-white font-semibold w-full'>Proceed to checkout</button>
        </div>

                      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                          <div className="modal-box">
                              <h3 className="font-bold text-lg">Order Confirmed!!</h3>
                              <p className="py-4">Your order has been placed successfully.</p>
                              <div className="modal-action">
                                  <form method="dialog">
                                      {/* if there is a button in form, it will close the modal */}
                                      <button onClick={()=>{setState('product');setSelectedProd([]);setTotal(0)}} className="btn ">Return</button>
                                  </form>
                              </div>
                          </div>
                      </dialog>
    </div> 
    
    : 
    
    <div className='mt-5 flex flex-col justify-center items-center'>
         <IoIosWarning className='w-50 h-20' />
        <h1 className='text-2xl font-extrabold text-center bg-red-500 text-white p-4 rounded-md'>No items Selected</h1>
       
    </div>
   }
   </>
  )
}

export default Cart