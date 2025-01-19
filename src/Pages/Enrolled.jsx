import React from "react";
import { LinearProgress } from "@mui/material";

const EnrolledCard = ({ course }) => {
  const { name, completedClass, totalClass, icon } = course;

  return (
    <div className="w-auto lg:max-w-[257px] h-auto lg:h-[188px] p-4 bg-white shadow-cardShadow rounded-lg border border-[#E4E4E4]">
      <h2 className="text-[15px] font-medium text-secondary pb-[14px]">
        Recent enrolled course
      </h2>
      <div className="  max-w-[216px] h-[117px] ps-[14px] pt-[18px] rounded-lg border border-[#E5E7EB]">
        <div>
          <div className="bg-secondary/5 p-[7px] max-w-[27px] rounded-[7px] mb-[11px]">
            <img className="size-[14px]" src={icon} />
          </div>
          <span className=" font-medium pt-[14px] pb-[11px]">{name}</span>
        </div>
        <div className="flex items-center mt-[11px] gap-2">
          <LinearProgress
            variant="determinate"
            className="min-w-[128px] "
            color="primary"
            value={(completedClass / totalClass) * 100}
            sx={{
              height: 8,
              borderRadius: "999px",
              backgroundColor: "rgba(28, 29, 29, 0.05)",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#FF4B00",
              },
            }}
          />
          <span className="text-[8px] text-primary">
            {`${completedClass}/${totalClass} `}{" "}
            <span className="text-secondary/50">class</span>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EnrolledCard;
