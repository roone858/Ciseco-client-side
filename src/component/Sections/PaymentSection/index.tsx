const PaymentSection = () => {
  return (
     <div className="space-y-10 sm:space-y-12">
     <h2 className="text-2xl sm:text-3xl font-semibold">Payments &amp; payouts</h2>
     <div className="max-w-2xl prose prose-slate dark:prose-invert">
       <span>
         When you receive a payment for an order, we call that payment to you a "payout." Our secure payment system supports several payout methods, which can be set up below. Go to FAQ.
         <br/><br/>
         To get paid, you need to set up a payout method releases payouts about 24 hours after a guest’s scheduled time. The time it takes for the funds to appear in your account depends on your payout method.
         <a href="##">Learn more</a>
       </span>
       <div className="pt-10">
         <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
           Add payout method
         </button>
       </div>
     </div>
   </div>
  )
}

export default PaymentSection