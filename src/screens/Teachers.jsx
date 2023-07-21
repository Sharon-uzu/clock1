import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import { MdFilterAlt} from "react-icons/md";
import sun from '../Images/sun.png'
import SearchInput from '../Components/SearchInput';

const Teachers = () => {


  const Employees = [
    {
        img: sun,
        name: 'Ngowari Princess',
        role: "Product Designer",
        tel: '+23423456789',
        email: 'princessngowari@gmail.com',
        days: 'Mon, Thurs'

    },

    {
      img: sun,
      name: 'Ngowari Princess',
      role: "Product Designer",
      tel: '+23423456789',
      email: 'princessngowari@gmail.com',
      days: 'Wed, Fri'


    },
     
    {
      img: sun,
      name: 'Ngowari Princess',
      role: "Product Designer",
      tel: '+23423456789',
      email: 'princessngowari@gmail.com',
      days: 'Mon, wed'


    }
      
    
];



  const Interns = [
    {
        img: sun,
        name: 'Glory Princess',
        role: "Product Designer",
        tel: '+23423456789',
        email: 'gloryngowari@gmail.com',
        days: 'Mon, Fri'

    },

    {
      img: sun,
      name: 'Ngowari Princess',
      role: "Product Designer",
      tel: '+23423456789',
      email: 'princessngowari@gmail.com',
      days: 'Tues, wed'


    },
    
    {
      img: sun,
      name: 'Ngowari Princess',
      role: "Product Designer",
      tel: '+23423456789',
      email: 'princessngowari@gmail.com',
      days: 'Mon, Tues'


    }
      
    
  ];



  return (
    <div>
        <Header/>

        <div className='content'>
        <div className='dk'></div>
            <Sidebar/>
            <div className='right-content'>
              <div className='top'>

                <div className='top1'>
                  <p>20 Employees</p>
                  <p>3 Interns</p>
                </div>

                <SearchInput/>

                <div className='top3'>

                  <div>
                    <MdFilterAlt/>
                    <p>Filter</p>
                  </div>

                  <select>
                    <option></option>
                    <option></option>
                    <option></option>
                  </select>
                  
                </div>

              </div>

              <div className='add'>
              <button>Add Teachers</button>
              </div>

              <div className='employee'>
              
                <h2>Employees</h2>
              
                <div className='cards'>

                {Employees && Employees.map(({img,name,role,tel,email,days},index)=>{
                  return(
                    <div className='card'>
                      <img src={img}/>
                      <h3>{name}</h3>
                      <p>{role}r</p>

                      <div className='white-bg'>
                        <p>Phone number</p>
                        <h5> {tel}</h5>

                        <p>Email</p>
                        <h5> {email}</h5>

                        <p>Class days</p>
                        <h5> {days}</h5>

                      </div>

                    </div>

                    )
                  })}
                    


                </div>

                <h4>See all</h4>
              
              </div>


              <div className='employee'>
              
                <h2>Interns</h2>
              
                <div className='cards'>

                  {Interns && Interns.map(({img,name,role,tel,email,days},index)=>{
                    return(
                      <div className='card'>
                        <img src={img}/>
                        <h3>{name}</h3>
                        <p>{role}r</p>

                        <div className='white-bg'>
                          <p>Phone number</p>
                          <h5> {tel}</h5>

                          <p>Email</p>
                          <h5> {email}</h5>

                          <p>Class days</p>
                          <h5> {days}</h5>

                        </div>

                      </div>

                      )
                    })}
                    


                </div>

                <h4>See all</h4>
              
              </div>

              

              

            </div>
        </div>
    </div>
  )
}

export default Teachers