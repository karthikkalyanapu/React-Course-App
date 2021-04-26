import React, {useState,useEffect} from "react"
import Course from "./Course"

const  Allcourse=()=>{

  useEffect(()=>{
   document.title="All courses";
    }
  )
  const [courses,setCources]=useState([
    {title:"Java Script",description:"this si demo course"},
    {title:"React",description:"this si demo course"},
    {title:"Html",description:"this si demo course"},
    {title:"CSS",description:"this si demo course"},
  ])
  return(
        <div>
          <h1>All Cources</h1>
          <p>List of courses are as follows
          </p>
          {
            courses.length>0 ? courses.map((item)=> <Course course={item}/>):"No courses"
          }
        </div>
  )
};
export default Allcourse;
