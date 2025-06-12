import OrderSummaryCard from "../../component/Cards/OrderSummaryCard";
import ContactInfoForm from "../../component/forms/ContactInfoForm";
import PaymentMethodForm from "../../component/forms/PaymentForm";
import ShippingAddressForm from "../../component/forms/ShippingAddressForm";

export default function CheckoutPage() {
  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const { token, error } = await stripe.createToken(
  //     elements.getElement(CardElement)
  //   );

  //   if (error) {
  //     console.error(error);
  //   } else {
  //     // Send the token to your server
  //     fetch("/payment/charge", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         source: token.id,
  //         amount: 1000, // Set the amount based on your form data
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // Handle the server response
  //         console.log(data);
  //       });
  //   }
  // };
  return (
    <div className=" px-14 lg:pb-28 py-24 ">
      <div className="mb-16">
        <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold ">
          Checkout
        </h2>
        <div className="block mt-3 sm:mt-5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-400">
          <a className="" href="/">
            Homepage
          </a>
          <span className="text-xs mx-1 sm:mx-1.5">/</span>
          <a className="" href="/collection-2">
            Clothing Categories
          </a>
          <span className="text-xs mx-1 sm:mx-1.5">/</span>
          <span className="underline">Checkout</span>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex-1">
          <ContactInfoForm />
          <ShippingAddressForm />

          <PaymentMethodForm />
        </div>
        <div className="flex-shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 my-10 lg:my-0 lg:mx-10 xl:lg:mx-14 2xl:mx-16 "></div>
        <div className="w-full lg:w-[36%] ">
          <OrderSummaryCard />
        </div>
      </div>
    </div>
  );
}
