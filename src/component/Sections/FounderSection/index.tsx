import React from "react";
import FounderCard from "../../Cards/FounderCard";

const FounderSection = () => {
  return (
    <div className="SectionFounder relative py-12">
      <div className="Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50">
        <div className="">
          <h2 className=" text-3xl md:text-4xl font-semibold">⛱ Founder</h2>
          <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
            We’re impartial and independent, and every day we create
            distinctive, world-className programmes and content
          </span>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 xl:gap-x-8">
        <FounderCard />
        <FounderCard />
        <FounderCard />
        <FounderCard />
      </div>
    </div>
  );
};

export default FounderSection;
