import { StarIcon } from "../../icons";

const ClientQuote = () => {
  return (
    <div className=" flex flex-col justify-center items-center text-center">
   
      <span className="block text-2xl">
        Great quality products, affordable prices, fast and friendly delivery. I
        very recommend.
      </span>
      <span className="block mt-8 text-2xl font-semibold">Tiana Abie</span>
      <div className="flex items-center space-x-0.5 mt-3.5 text-yellow-500">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
    </div>
  );
};

export default ClientQuote;
