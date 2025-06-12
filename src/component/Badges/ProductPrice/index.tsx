const ProductPrice = ({ price }: { price: number }) => {
  return (
 
      <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
        <span className="text-green-500 !leading-none">${price}</span>
      </div>
   
  );
};

export default ProductPrice;
