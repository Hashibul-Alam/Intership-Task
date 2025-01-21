import React, { useState } from "react";

const TodoList = () => {
  
  const [tasks, setTasks] = useState([
    { id: 1, title: "Human Interaction Designs", date: "Tuesday, 30 June 2024", completed: false },
    { id: 2, title: "Design system Basics", date: "Monday, 24 June 2024", completed: false },
    { id: 3, title: "Introduction to UI", date: "Friday, 10 June 2024", completed: true },
    { id: 4, title: "Basics of Figma", date: "Friday, 05 June 2024", completed: true },
  ]);

  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="min-w-[288px] mt-4 bg-white shadow-cardShadow rounded-md border border-[#E2E8F0] lg:ms-7">
      <h1 className="text-[15px] font-semibold leading-[23px] pt-[11px] ps-[28px]">To do List</h1>
      <ul className="space-y-2 pb-6">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center gap-4  pt-[10px] border-b-[1.5px] pb-2 border-[#ECECEC] mx-6">
            <div
              className={`w-4 h-[14px] border-2  flex items-center justify-center cursor-pointer ${
                task.completed ? "bg-primary border-primary" : "border-primary/65"
              }`}
              onClick={() => toggleComplete(task.id)}
             >
              {task.completed && (
               <img src="/Line.png" alt="" />
              )}
            </div>
            <div>
              <p
                className={`text-[13px] font-medium  ${
                  task.completed ? "line-through text-[#41475E]" : "text-[#121212]"
                }`}
              >
                {task.title}
              </p>
              <p className="text-[12px] text-[#41475E]">{task.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
