import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import SearchInput from '../Components/SearchInput';

const Schedule = () => {
  return (
    <div>
    <Header/>

    <div className='content'>
    <div className='dk'></div>
        <Sidebar/>
        <div className='right-content'>
          <div className=' sche'>

            <SearchInput/>

            

          </div>

          


         
          
          

          

          

        </div>
    </div>
    </div>
  )
}

export default Schedule