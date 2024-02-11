"use client"

import { useParams, useRouter } from 'next/navigation'
import React from 'react'

const EditStudent = () => {
    const studentId = useParams();
    // console.log(studentId);
    const router = useRouter();
  return (
    <>
        <h2>EditStudent</h2>
        <h4>Student ID : {studentId.id}</h4>
        <button className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>router.push('/')}>Return to Home Page</button>
    </>
  )
}

export default EditStudent