import React from "react";
import CourseList from "./_components/course-list";
import { auth, signOut } from "@/auth";
const Courses = async () => {
  const session = await auth();
  return (
    <div>
      <CourseList />
    </div>
  );
};

export default Courses;
