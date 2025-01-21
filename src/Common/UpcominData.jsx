import React from "react";

const UpcomingData = ({heading, all, data}) => {
  

  return (
    <section className="max-w-[525px] h-auto rounded-lg bg-neutral-50/70 border border-[#E2E8F0] shadow-cardShadow ms-7 pb-[22px]">
      <div className="flex justify-between items-center mt-6 ps-[29px] ">
        <h1 className="text-[19px] text-secondary font-medium opacity-80 leading-[22px] ">{heading} </h1>
        <div className="flex items-center pr-5 gap-4">
          <p className="text-[19px] text-secondary font-medium opacity-80 leading-[24px] cursor-pointer">{all}</p>
        </div>
      </div>

      {data?.map((item, index) => (
        <div key={index} className="mt-[17px]">
          <div className="flex items-start gap-4 hover:border-[1.5px] bg-white border-primary px-5 py-2 rounded-lg ms-7 mr-5">

            <img
              className="bg-gray-100 rounded p-2 w-12 h-12"
              src={item.img}
              alt={item.title}
            />
            <div className="flex-1">
              <h2 className="font-bold text-[15px] hover:text-primary cursor-pointer">
                {item.title}
              </h2>
              <div className="flex items-center gap-6">
               {item.time}
              </div>
            </div>
            <button className="min-w-[62px] min-h-[27px] bg-primary/5 hover:bg-primary rounded-md text-primary font-medium hover:text-white text-center ms-10 my-3"> {item.button}</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default UpcomingData;
