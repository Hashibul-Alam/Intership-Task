import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const horizontalLinePlugin = {
  id: "horizontalLinePlugin",
  beforeDraw: (chart) => {
    const { ctx, chartArea, scales } = chart;
    const lineValues = [20, 40, 60]; 

    ctx.save();
    ctx.setLineDash([5, 5]); 
    ctx.strokeStyle = "#D3D3D3"; 
    ctx.lineWidth = 1;

    lineValues.forEach((value) => {
      const y = scales.y.getPixelForValue(value);

      ctx.beginPath();
      ctx.moveTo(chartArea.left, y); 
      ctx.lineTo(chartArea.right, y); 
      ctx.stroke();
    });

    ctx.restore();
  },
};

const Chart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Study",
        data: [40, 22, 60, 35, 20],
        backgroundColor: "#FF5722", 
        borderRadius: 8, 
        barThickness: 40,
      },
      {
        label: "Online Test",
        data: [22, 20, 10, 20, 15],
        backgroundColor: "#FFE0B2",
        borderRadius: 8,
        barThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        
        
        stacked: true, 
        grid: {
          drawBorder: false,
          drawTicks: false,
          drawOnChartArea: false,
        },
        ticks: {
            callback: (value) => `${value} Hr`,
            color: "#85878D", 
            stepSize: 20,
            font:{
                size:7
            },
          display: true, 
        },
      },
      x: {
        stacked: true, 
        grid: {
          drawBorder: false,
          drawTicks: false,
          drawOnChartArea: false,
        },
        ticks: {
            color:"#95969C",
            font:{
                size:7,
                lineHeight: 2,
            },
          display: true,
        },
       
      
      },
    },
  };

  return (
    <div className="w-full lg:max-w-[357px] h-auto bg-white shadow-cardShadow rounded-lg border border-[#E2E8F0] lg:ms-[26px] mt-4">
             <h2 className=" text-[15px] text-black font-semibold ms-5 mt-3  ">Hours Spent</h2>
     <div className="lg:max-w-[345px] h-auto my-[15px] lg:mx-[21px] lg:px-2 py-4 border border-[#E5E7E7]">
     <Bar data={data} options={options} plugins={[horizontalLinePlugin]} />
     </div>
    </div>
  );
};

export default Chart;
