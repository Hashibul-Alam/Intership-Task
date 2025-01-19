import React, { useState } from "react";
import { LinearProgress } from "@mui/material";

const Download = () => {
  const [fileList, setFileList] = useState([
    {
      id: 1,
      name: "Auto-layout.pdf",
      img: "./pdf.png" ,
      size: "8.5 MB",
      progress: 60, 
      status: "downloading", 
    },
    {
      id: 2,
      name: "Design_Tips.png",
      img: "./png.png",
      size: "576 KB",
      description: "Let's quickly create some realistic and shiny metal @figma.",
      status: "canceled",
      progress: 0, 
    },
    {
      id: 3,
      name: "Basics_Of_UX.fig",
      img: "./fig.png",
      size: "2.5 MB",
      description: "An introductory guide to the fundamental principles of UX design.",
      status: "canceled",
      progress: 0, 
    },
  ]);

  const startDownload = (id) => {
    setFileList((prev)=>(
        prev.map((prevData)=>(
            prevData.id === id && prevData.status === "canceled" ? {...prevData , status: "downloading", progress: 0} : prevData
        ))
    ))

    const interval = setInterval(() => {
      setFileList((prevFiles) => {
        const updatedFiles = prevFiles.map((file) => {
          if (file.id === id && file.status === "downloading") {
            const newProgress = Math.min(file.progress + 5, 100);
            return {
              ...file,
              progress: newProgress,
              status: newProgress === 100 ? "completed" : "downloading",
            };
          }
          return file;
        });

        // Stop updating if the file reaches 100%
        if (updatedFiles.find((file) => file.id === id).progress === 100) {
          clearInterval(interval);
        }
        return updatedFiles;
      });
    }, 500); // Update every 500ms
  };

  // Function to cancel download
  const cancelDownload = (id) => {
    setFileList((prevFiles) =>
      prevFiles.map((prevData) =>
        prevData.id === id ? { ...prevData, status: "canceled", progress: 0 } : prevData
      )
    );
  };

  return (
    <section className=" bg-white rounded shadow-lg min-w-[449px] h-[188px] mx-auto ms-6 ">
     <div className="px-2 py-2 max-w-[407px] h-[153px] mx-auto">
     <h2 className="text-sm font-semibold text-[#121212]">Your Resources</h2>
      <div>
        {fileList.map((file) => (
          <div
            key={file.id}
            className="flex flex-col  "
          >
            {/* File Info */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">  
                  <img className="w-[21px] h-[27px]" src={file.img} alt="" />
                <div>
                  <p className="text-[7px]">{file.name}</p>
                  {file.description && (
                    <p className="text-[6px] text-gray-500">{file.description}</p>
                  )}
                </div>
              </div>
              {/* File Size and Action */}
              <div className="flex items-center gap-20 ">
                <p className="text-[#121212] text-[6px]">{file.size}</p>
                {file.status === "downloading" && (
                  <button
                    className="text-[#121212] hover:text-primary text-[8px] font-medium"
                    onClick={() => cancelDownload(file.id)}
                  >
                    Cancel
                  </button>
                )}
                {file.status === "completed" && (
                  <button className="text-orange-500 text-[8px] font-medium">
                    Download
                  </button>
                )}
                {file.status === "canceled" && (
                  <button
                    className="text-primary hover:text-green-500 duration-300 text-[8px] font-medium"
                    onClick={() => startDownload(file.id)}
                  >
                    Download
                  </button>
                )}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full mt-0.5">
              <LinearProgress
                variant="determinate"
                value={file.progress}
                sx={{
                  height: 3,
                  borderRadius: "999px",
                  backgroundColor: "rgba(28, 29, 29, 0.05)",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#FF4B00",
                  },
                }}
              />
              <p className="text-[5px] text-secondary ">
                {file.status === "completed"
                  ? "Downloaded"
                  : file.status === "canceled"
                  ? "Download Canceled"
                  : `Downloading... ${file.progress}%`}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* See More */}
      <div className="text-center">
        <button className="text-primary bg-primary/5 w-full h-5 rounded-md hover:bg-primary/15 duration-300 hover:scale-105 text-xs font-medium">see more</button>
      </div>
     </div>
    </section>
  );
};

export default Download;
