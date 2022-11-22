import React from "react";
import StudentTaskHeader from "./StudentTaskHeader";
import StudentTaskTable from "./StudentTaskTable";
import "./StudentTasks.css";
// import StudentPageWrapper from "../../../layouts/student/StudentPageWrapper";

const StudentTasks = () => {
  return (
    <>
      <div className="tasks bg-gray-100 h-full mb-20 w-full">
        <StudentTaskHeader />

        <div className="table w-full">
          <StudentTaskTable />
        </div>
      </div>
    </>
  );
};

export default StudentTasks;
