
import './cartpage.css'

import CartCard from '../Cards/CartCard'

export default function Cartpage() {
  return (
    <div className='container space-x-4 space-y-8'>
      <h1 className='text-dark w-900'>Shopping Cart</h1>
      <a href="" className='text-dark font-semibold '> Homepage /</a>
      <a href="" className='text-dark font-semibold '> Clothing Categories /</a>
      <a href="" className='text-dark font-semibold  '> Shopping Cart</a>
 
      <hr />
      <div className="row  ">
        <div className=' home col-md-8  col-sm-12 flex space-x-20 space-y-12 border-r-black '>
            <div className='col-md-12 space-x-5 '>
            
            <CartCard  />
            <hr />
            <CartCard  />
            <hr />
            <CartCard  />
            <hr />
            <CartCard  />
            <hr />
            <CartCard  />
        </div>
    
      <div className=" second col-md-12 space-y-12  sticky border-l-slate-700">
         <h3>Order Summary</h3>
        <div className='front row '>
            <div className='front-frist col-md-5 space-y-6 sticky'>
               <h5 className='font-normal'>Subtotal</h5> 
               <hr />

               <h5 className='font-normal'>Shpping estimate</h5>
               <hr />
               <h5 className='font-normal' >Tax estimate </h5>
               <hr />
               <h3 className='font-meduim'>Order total</h3>
                
               
            </div>
            <div className='front-second col-md-2 space-y-12'>
                <p className='font-semibold'>$ 249.00</p>
    
                <p className='font-semibold'>$ 5.00</p>
               
                <p className='font-semibold'>$ 24.90</p>
                
                <p className='font-bold'>$ 276.00</p>
                
            </div>
           
          
        </div> 
         <a
      className="bbttn nc-Button relative h-auto inline-flex items-center
       justify-center rounded-full transition-colors text-sm
        sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 decoration-0 w-1/2
         ttnc-ButtonSecondary bg-black text-slate-100 dark:bg-slate-900 dark:text-slate-200 hover:bg-gray-700 dark:hover:bg-slate-800 flex-1 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 
      dark:focus:ring-offset-0 "
      href="/cart"
    >
      Checkout
    </a>
     <p><i className="fa-solid fa-circle-exclamation"></i>  Learn more <a href="">Taxes</a> and <a href="">Shipping</a> infomation</p>
      </div>
    </div> 
    </div>
    </div>
  )
}
