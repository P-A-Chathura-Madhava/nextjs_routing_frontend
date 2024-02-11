import Link from 'next/link'
import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

const Students = () => {
  return (
    <div className='flex justify-center'>
<table className="table-auto">
  <thead>
    <tr>
      <th className='pr-3 text-left'>ID</th>
      <th className='pr-3 text-left'>Name</th>
      <th className='pr-3 text-left'>Address</th>
      <th className='pr-3 text-left'>Options</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='pr-3'>S001</td>
      <td className='pr-3'>Kasun</td>
      <td className='pr-3'>Bandaragama</td>
      <td className='flex justify-center pr-3 space-x-2'>
        <Link href={"/editStudent/1"}><FaRegEdit size={18} /></Link>
        <Link className='text-red-600' href={"/editStudent/123"}><MdOutlineDelete size={18} /></Link>
      </td>
    </tr>
    <tr>
      <td className='pr-3'>S002</td>
      <td className='pr-3'>Nuwan</td>
      <td className='pr-3'>Colombo</td>
      <td className='flex justify-center pr-3 space-x-2'>
        <Link href={"/editStudent/2"}><FaRegEdit size={18} /></Link>
        <Link className='text-red-600' href={"/editStudent/123"}><MdOutlineDelete size={18} /></Link>
      </td>
    </tr>
    <tr>
      <td className='pr-3'>S003</td>
      <td className='pr-3'>Ramal</td>
      <td className='pr-3'>Kalutara</td>
      <td className='flex justify-center pr-3 space-x-2'>
        <Link href={"/editStudent/3"}><FaRegEdit size={18} /></Link>
        <Link className='text-red-600' href={"/editStudent/123"}><MdOutlineDelete size={18} /></Link>
      </td>
    </tr>
    <tr>
      <td className='pr-3'>S004</td>
      <td className='pr-3'>Dasun</td>
      <td className='pr-3'>Horana</td>
      <td className='flex justify-center pr-3 space-x-2'>
        <Link href={"/editStudent/4"}><FaRegEdit size={18} /></Link>
        <Link className='text-red-600' href={"/editStudent/123"}><MdOutlineDelete size={18} /></Link>
      </td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Students