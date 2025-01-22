import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const AssignmentTable = () => {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "Conducting User Resea...",
      course: "User Research and Per...",
      dueDate: "2024-07-01",
      status: "Done",
      submitted: true,
    },
    {
      id: 2,
      title: "Competitive Analysis R...",
      course: "Competitive Analysis in...",
      dueDate: "2024-07-25",
      status: "Progress",
      submitted: false,
    },
    {
      id: 3,
      title: "Creating Wireframes",
      course: "Wireframing and Protot...",
      dueDate: "2024-08-01",
      status: "Progress",
      submitted: false,
    },
    {
      id: 4,
      title: "Usability Testing and F...",
      course: "Usability Testing and It...",
      dueDate: "2024-08-22",
      status: "Pending",
      submitted: false,
    },
    {
      id: 5,
      title: "Developing Visual Desi..",
      course: "Visual Design and Bran...",
      dueDate: "2024-08-29",
      status: "Pending",
      submitted: false,
    },
    {
      id: 6,
      title: "Creating a Design Syst..",
      course: "Design Systems and C...",
      dueDate: "2024-09-05",
      status: "Pending",
      submitted: false,
    },
  ]);

  const [uploadingAssignment, setUploadingAssignment] = useState(null);
  const [filter, setFilter] = useState("");

  const handleFileChange = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      setAssignments((prev) =>
        prev.map((assignment) =>
          assignment.id === id
            ? { ...assignment, status: " Done", submitted: true }
            : assignment
        )
      );
      setUploadingAssignment(null);
    }
  };

  const handleUploadClick = (id) => {
    setUploadingAssignment(id);
  };

  const handleFilter = (type) => {
    setFilter(type);
  };

  const filteredAssignments = assignments.filter((assignment) => {
    if (!filter) return true;
    if (filter === "date") {
      return new Date(assignment.dueDate) >= new Date();
    }
    return assignment.status.toLowerCase() === filter.toLowerCase();
  });

  return (
    <section className="lg:h-[955px]">
      <div className="lg:p-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          <div className=" text-center lg:text-start">
            <h1 className=" text-[30px] text-[#211C37] font-bold">
              Assignments
            </h1>
            <p className=" text-xl text-[#85878D]">
              View and manage your course assignments
            </p>
          </div>
          <div className="flex  items-center">
            <div className="border border-[#E7EAE9] px-[8px] py-1.5 mr-3 rounded-xl">
              <img src="Search.png" alt="" />
            </div>
            <span className="text-[#85878D]">Filter by: </span>
            <div className="flex  items-center gap-2">
              <button
                onClick={() => handleFilter("Pending")}
                className="flex  items-center"
              >
                <span className="text-primary hover:scale-105 ms-1">Date</span>
              </button>
              <span>|</span>
              <button onClick={() => handleFilter("")}>
                <span className="text-primary hover:scale-105">Status</span>
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-3 lg:max-h-[411px]">
          <div className=" flex flex-col lg:flex-row items-center justify-between text-xs lg:text-base font-bold py-4 lg:px-8 border border-gray-300">
            <p>Assignment Title</p>
            <p>Course/Lessons</p>
            <p className="lg:pr-14">Due Date</p>
            <p className="lg:pr-24">Status</p>
            <p>Submit</p>
          </div>
          <ul className="space-y-3">
            {filteredAssignments.map((assignment) => (
              <li
                key={assignment.id}
                className="flex flex-col lg:flex-row   text-nowrap items-center justify-between p-4 border border-gray-300 rounded-lg"
              >
                <div className="flex-1 text-black text-sm">
                  {assignment.title}
                </div>
                <div className="flex-1 text-[#727272] text-sm">
                  {assignment.course}
                </div>
                <div className="flex-1 text-[#727272] text-sm">
                  {assignment.dueDate}
                </div>
                <div
                  className={`flex items-center flex-1 ${
                    assignment.status === "Done"
                      ? "text-[#259800] text-xs"
                      : assignment.status === "Progress"
                      ? "text-[#3083FF] text-xs"
                      : "text-[#DC2626] text-xs"
                  }`}
                >
                  <div
                    className={`size-2 rounded-full mr-1 ${
                      assignment.status === "Done"
                        ? "bg-[#259800]"
                        : assignment.status === "Progress"
                        ? "bg-[#3083FF]"
                        : "bg-[#DC2626]"
                    }`}
                  ></div>
                  {assignment.status}
                </div>
                <div>
                  <div className="flex-1 text-center items-center">
                    {assignment.submitted ? (
                      <span className="text-[#B6B6B6] font-bold">
                        Submitted
                      </span>
                    ) : uploadingAssignment === assignment.id ? (
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, assignment.id)}
                        className="border rounded w-[98px]"
                      />
                    ) : (
                      <button
                        onClick={() => handleUploadClick(assignment.id)}
                        className="text-[#727272] px-4 py-2 rounded hover:scale-105 hover:text-primary"
                      >
                        Upload
                      </button>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="lg:mt-36 mt-6 flex flex-col lg:flex-row items-center lg:ms-9">
        <div className="flex gap-2 text-xs font-medium">
          <button>Show</button>
          <button className="border px-1 py-1">
            <select name="" id="">
              <option value="10">10</option>
              <option value="9">9</option>
              <option value="8">8</option>
              <option value="7">7</option>
            </select>
          </button>
          <button>Row</button>
        </div>
        <div className="flex items-center mt-5 justify-center md:ms-52">
          <Stack spacing={2}>
            <Pagination
              count={10}
              variant="outlined"
              color="secondary"
              shape="rounded"
            />
          </Stack>
        </div>
      </div>
    </section>
  );
};

export default AssignmentTable;
