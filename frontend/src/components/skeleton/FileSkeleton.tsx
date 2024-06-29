import React from "react";

const FileSkeleton = () => {
  return (
    <div className="h-14 bg-neutral-100 items-center grid grid-cols-[3fr,0.7fr,1fr,0.2fr] animate-pulse">
      <div className="h-full py-1 flex items-center gap-7 w-full">
        <div className="h-full w-12 bg-gray-300 rounded pl-1"></div>
        <div className="h-6 bg-gray-300 rounded w-32"></div>
      </div>
      <div className="w-fit h-6 bg-gray-300 rounded"></div>
      <div className="w-fit flex gap-2 ">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="h-10 w-10 -ml-6 bg-gray-300 rounded-full"
          ></div>
        ))}
      </div>
      <div className="w-fit flex justify-end px-4">
        <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default FileSkeleton;
