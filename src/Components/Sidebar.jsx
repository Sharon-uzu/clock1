import React from 'react';
import menu from '../Images/menu.png';
import { CgMenuGridR } from "react-icons/cg";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { GiBookshelf } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { TbReport } from "react-icons/tb";
import { MdCommentBank } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { BsFillPersonPlusFill } from "react-icons/bs";



const Sidebar = () => {
  return (
    <div className='side'>
      <div className='bar'>
        <span><CgMenuGridR className='icon'/></span>
        <span className='text'>Menu</span>
      </div>

      <div className='bar'>
        <span><FaChalkboardTeacher className='icon'/></span>
        <span className='text'>Teachers</span>
      </div>

      <div className='bar'>
        <span><BsFillPersonFill className='icon'/></span>
        <span className='text'>Students</span>
      </div>

      <div className='bar'>
        <span><GiBookshelf className='icon'/></span>
        <span className='text'>Ongoing classes</span>
      </div>

      <div className='bar'>
        <span><ImBooks className='icon'/></span>
        <span className='text'>Courses</span>
      </div>

      <div className='bar'>
        <span><TbReport className='icon'/></span>
        <span className='text'>Class reports</span>
      </div>

      <div className='bar'>
        <span><MdCommentBank className='icon'/></span>
        <span className='text'>Comments</span>
      </div>

      <div className='bar'>
        <span><AiFillSchedule className='icon'/></span>
        <span className='text'>Class schedule</span>
      </div>

      <div className='bar'>
        <span><AiFillSetting className='icon'/></span>
        <span className='text'>Set Up</span>
      </div>

      <div className='bar'>
        <span><BsFillPersonPlusFill className='icon'/></span>
        <span className='text'>Registration</span>
      </div>


    
    </div>
  )
}

export default Sidebar