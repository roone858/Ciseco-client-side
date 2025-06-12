const ProductColors = () => {
  return (
    <div className="flex space-x-1">
      <div
        className="relative w-6 h-6 rounded-full overflow-hidden z-10 border cursor-pointer border-violet-500"
        title="Violet"
      >
        <div className="absolute inset-0.5 rounded-full z-0 bg-violet-400"></div>
      </div>
      <div
        className="relative w-6 h-6 rounded-full overflow-hidden z-10 border cursor-pointer border-transparent"
        title="Yellow"
      >
        <div className="absolute inset-0.5 rounded-full z-0 bg-yellow-400"></div>
      </div>
      <div
        className="relative w-6 h-6 rounded-full overflow-hidden z-10 border cursor-pointer border-transparent"
        title="Orange"
      >
        <div className="absolute inset-0.5 rounded-full z-0 bg-orange-400"></div>
      </div>
      <div
        className="relative w-6 h-6 rounded-full overflow-hidden z-10 border cursor-pointer border-transparent"
        title="Sky Blue"
      >
        <div className="absolute inset-0.5 rounded-full z-0 bg-sky-400"></div>
      </div>
      <div
        className="relative w-6 h-6 rounded-full overflow-hidden z-10 border cursor-pointer border-transparent"
        title="Green"
      >
        <div className="absolute inset-0.5 rounded-full z-0 bg-green-400"></div>
      </div>
    </div>
  );
};

export default ProductColors;
