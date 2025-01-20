import React from "react";
import EnrolledCard from "./Enrolled";
import ProductIcon from "../../public/Product.png";
import Download from "./Download";
import Calendar from "./Calendar";
import Chart from "./Chart";



const Home = () => {
  const course = {
    name: "Product Design Course",
    completedClass: 14,
    totalClass: 30,
    icon: ProductIcon,
  };

  return (
    <section className="w-auto lg:max-w-[1097px] h-auto lg:h-[955px]  ">
      <h1 className="text-[33px] font-bold leading-[41px] ms-[30px] mt-[22px]">
        Hello Harsh 👋🏻
      </h1>
      <p className="text-[#85878D] ms-[30px]">
        Let’s learn something new today!
      </p>
      <div className="p-6 flex  font-Inter">
        <EnrolledCard course={course} />
        <Download/>
        <Calendar/>
      </div>
      <Chart/>
    </section>
  );
};

export default Home;
