const FactsSection = () => {
  return (
    <div className="nc-SectionStatistic relative ">
      <div className="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50">
        <div className="">
          <h2 className=" text-3xl md:text-4xl font-semibold">🚀 Fast Facts</h2>
          <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
            {" "}
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </span>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8">
        <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800">
          <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-3xl dark:text-neutral-200">
            10 million
          </h3>
          <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            Articles have been public around the world (as of Sept. 30, 2021)
          </span>
        </div>
        <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800">
          <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-3xl dark:text-neutral-200">
            100,000
          </h3>
          <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            Registered users account (as of Sept. 30, 2021)
          </span>
        </div>
        <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800">
          <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-3xl dark:text-neutral-200">
            220+
          </h3>
          <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            Countries and regions have our presence (as of Sept. 30, 2021)
          </span>
        </div>
      </div>
    </div>
  );
};

export default FactsSection;
