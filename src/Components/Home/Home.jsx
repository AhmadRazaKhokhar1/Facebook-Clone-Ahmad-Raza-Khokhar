import React from 'react'
import LeftNav from './LeftNav'
import Center from './Center'
import RightNav from './RightNav'
const Home = () => {
  
  return (
    <div className='uuu'>
      <div className="containerMAin">

{/* Left Side of Home Page  */}
        <div className="leftContainer">
            <LeftNav/>
        </div>
{/* Center of Home Page  */}
        <div className="centerContainer">
            <Center/>
        </div>
{/* Rigth Side of Home Page          */}
        <div className="rightContainer">
            <RightNav/>
        </div>

      </div>
    </div>
  )
}

export default Home
