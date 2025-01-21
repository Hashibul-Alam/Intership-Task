import React from "react";

const CardUpcoming = ({heading, all, data}) => {
  

  return (
    <section className="max-w-[525px] h-auto rounded-lg bg-neutral-50/70 border border-[#E2E8F0] shadow-cardShadow ms-7 pb-[22px]">
      <div className="flex justify-between items-center mt-6 ps-[29px] ">
        <h1 className="text-[19px] text-secondary font-medium opacity-80 leading-[22px] ">{heading} </h1>
        <div className="flex items-center pr-5 gap-4">
          <p className="text-[19px] text-secondary font-medium opacity-80 leading-[24px] cursor-pointer">{all}</p>
          <img src="/Search.png" alt="Search" className="size-[22px] bg-secondary/5 p-[5px] rounded-full" />
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
                {item.tags.map((tag) => (
                  <div key={tag.id} className="flex items-center gap-2   py-2">
                    <img src={tag.img} alt={tag.title} className=" cursor-pointer" />
                    <p className="text-secondary text-[13px]">{tag.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CardUpcoming;
