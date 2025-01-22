import React from "react";
import EnrolledCard from "./Enrolled";
import ProductIcon from "../../public/Product.png";
import Download from "./Download";
import Calendar from "./Calendar";
import Chart from "./Chart";
import TodoList from "./TodoList";
import Upcoming from "./Upcoming";
import Gauge from "./Gauge";




const Home = () => {
  const course = {
    name: "Product Design Course",
    completedClass: 14,
    totalClass: 30,
    icon: ProductIcon,
  };

  return (
    <section className=" lg:max-w-[1097px] h-auto lg:h-[955px]">
      <h1 className="text-[33px] font-bold leading-[41px] text-center lg:text-left lg:ms-[30px] mt-[22px]">
        Hello Harsh 👋🏻
      </h1>
      <p className="text-[#85878D] text-center lg:text-left lg:ms-[30px]">
        Let’s learn something new today!
      </p>
      <div className="md:p-6 flex flex-col lg:flex-row  font-Inter">
        <EnrolledCard course={course} />
        <Download/>
        
        <Calendar/>
      </div>
     <div className="flex flex-col mt-5 lg:mt-0 lg:flex-row font-Inter">
     <Chart/>
     <Gauge/>
     <TodoList/>
     </div>
     <div className="flex flex-col mt-5 lg:mt-0 lg:flex-row font-Inter">
      <Upcoming/>
     </div>
    </section>
  );
};

export default Home;
