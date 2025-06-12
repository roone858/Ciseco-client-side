const ProductPatterns = () => {
  return (
    <div className="flex">
      <div
        className="relative w-11 h-6 rounded-full overflow-hidden z-10 border cursor-pointer border-transparent  hover:border-black focus:border-black "
        title="Black"
      >
        <div
          className="absolute inset-0.5 rounded-full overflow-hidden z-0 bg-cover"
          style={{
            backgroundImage:
              'url("http://127.0.0.1:5173/src/assets/pattern-1.jpg")',
          }}
        ></div>
      </div>
      <div
        className="relative w-11 h-6 rounded-full overflow-hidden z-10 border cursor-pointer border-transparent hover:border-black  focus:border-black"
        title="White"
      >
        <div
          className="absolute inset-0.5 rounded-full overflow-hidden z-0 bg-cover"
          style={{
            backgroundImage:
              'url("http://127.0.0.1:5173/src/assets/pattern-2.jpg")',
          }}
        ></div>
      </div>
      <div
        className="relative w-11 h-6 rounded-full overflow-hidden z-10 border cursor-pointer border-transparent  hover:border-black focus:border-black"
        title="Orange"
      >
        <div
          className="absolute inset-0.5 rounded-full overflow-hidden z-0 bg-cover"
          style={{
            backgroundImage:
              'url("http://127.0.0.1:5173/src/assets/pattern-3.jpg")',
          }}
        ></div>
      </div>
      <div
        className="relative w-11 h-6 rounded-full overflow-hidden z-10 border cursor-pointer border-transparent  hover:border-black focus:border-black"
        title="Sky Blue"
      >
        <div
          className="absolute inset-0.5 rounded-full overflow-hidden z-0 bg-cover"
          style={{
            backgroundImage:
              'url("http://127.0.0.1:5173/src/assets/pattern-4.jpg")',
          }}
        ></div>
      </div>
      <div
        className="relative w-11 h-6 rounded-full overflow-hidden z-10 border cursor-pointer border-transparent  hover:border-black focus:border-black"
        title="Natural"
      >
        <div
          className="absolute inset-0.5 rounded-full overflow-hidden z-0 bg-cover"
          style={{
            backgroundImage:
              'url("http://127.0.0.1:5173/src/assets/pattern-5.jpg")',
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProductPatterns;
