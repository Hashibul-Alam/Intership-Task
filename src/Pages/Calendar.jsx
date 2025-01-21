import React from "react";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";


const CustomCalendar = () => {
  return (
    <div className="flex justify-center  items-center border border-[#E4E4E4] shadow-cardShadow  lg:ms-[26px] ">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          sx={{
            width: "208px",
            height: "188px",
            "& .MuiTypography-root": {
              fontSize: "0.55rem", 
              color: "#FF4B00",
              paddingBottom: "8px",
            
            },
            "& .MuiPickersDay-root": {
              width: "20px", 
              height: "16px",
              fontSize: "0.5rem", 
          
              color: "#222222", 
              "&:hover": {
                backgroundColor: "#FF4B00", 
              },
            },
            "& .MuiPickersDay-root.Mui-selected": {
              backgroundColor: "#FF4B00", 
              color: "#FFF", 
              "&:hover": {
                backgroundColor: "#e64a19", 
              },
            },
          }} />
      </LocalizationProvider>
    </div>
  );
};

export default CustomCalendar;
