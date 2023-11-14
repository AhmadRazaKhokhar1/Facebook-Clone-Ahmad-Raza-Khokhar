import React, {useState} from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
const [img, setImg] = useState('./images/search.svg')
const [searchBox, setSearchBox] = useState({display:'none'})
const [profilePanel, setProfilePanel] = useState({display:'none'})
const flex = document.querySelectorAll('.flex');
// Search Bar Foucus/Blur
 const searchFocus = (e)=>{
  e.target.style.width = '244px';
  e.target.style.height = '40px';
  e.target.style.borderTopLeftRadius = '27px';
  e.target.style.borderBottomLeftRadius = '27px';
  e.target.style.transition = 'ease all 1s';
  e.target.style.cursor = 'pointer';
  document.querySelector('.i').style.opacity = '0';
  document.querySelector('.i').style.transition = 'ease .4s';
  setSearchBox({display:'block'})
 }
 const searchBlur = (e)=>{
  e.target.style.width = '232px';
  setImg('./images/search.svg')
  document.querySelector('.i').style.opacity = '100';
  setSearchBox({display:'none'})
 }

// delete the recent search

const deleteRecent = (postIndex)=>{
  flex.filter((index => index!==postIndex))
}

// center icons Focus/Blur enhancements
const focusCenterIcons =(e)=>{
  e.target.querySelector('.centerNavBarIcons').style.fill ='rgb(7,102,255)'
  e.target.querySelector('.centerNavBarIcons').style.borderBottom ='2px solid rgb(7,102,255)'
  e.target.querySelector('.centerNavBarIcons').style.borderBottomLeftRadius ='0px'
  e.target.querySelector('.centerNavBarIcons').style.borderBottomRightRadius ='0px'
}
const blurCenterIcons =(e)=>{
  e.target.querySelector('.centerNavBarIcons').style.fill ='grey'
  e.target.querySelector('.centerNavBarIcons').style.borderBottom ='2px solid transparent'
}
// Profile Focus / Blur Events
const focusProfile =()=>{
  setProfilePanel({display:'flex'});
}
const blurProfile =()=>{
  setProfilePanel({display:'none'});
}

// Mode Switch Section 
const[switchMode, setSwitchMode] = useState({display:'none', flexDirection:''});
const modeSwitch=()=>{
setSwitchMode({display:'flex', flexDirection:'column'});

}
// return Back to main profile menu
const returnMenu = ()=>{
  setSwitchMode({display:'none', flexDirection:'', marginLeft:'-450px'});


}
  return (
    <div>
      <nav className="navbar">
        {/* Left NavBar  */}
        <div className="left">
            <img src='./images/logo.svg' alt="facebook-logo-by Ahmad Raza Khokhar" className="logo" />
            <div className='searchDiv'>
            <div className="searchIcon"><img src={img} className='i' alt='searchIcon'/></div>
            <input type="search" className="searchInput" placeholder='Search Facebook' onFocus={searchFocus} onBlur={searchBlur} />
            <div className="searchBoxPanelRecent" style={searchBox}>
                <div className="iconTopLeftExit">     
                      <img src="./images/exitSearch.jpg" alt="exitSearch" className="exitImage" />
                </div>
                <h2 className='hr'>Recent Searches</h2>
                <div className="left1">
                
                <div className="flex">
                  <img src="./images/recentSearch.svg" alt="recentSearch" className="icon" /><div className="recent" tabIndex={1}>Ahmad Raza</div><div className="delete" onClick={deleteRecent}>X</div>
                </div>
                <div className="flex">
                  <img src="./images/recentSearch.svg" alt="recentSearch" className="icon" /><div className="recent" tabIndex={2}>Maaz Star</div><div className="delete" onClick={deleteRecent}>X</div>
                </div>
                <div className="flex">
                  <img src="./images/recentSearch.svg" alt="recentSearch" className="icon" /><div className="recent" tabIndex={3}>Ubaid Ullah</div><div className="delete" onClick={deleteRecent}>X</div>
                </div>
                <div className="flex">
                  <img src="./images/recentSearch.svg" alt="recentSearch" className="icon" /><div className="recent" tabIndex={4}>Maqsood Sahir</div><div className="delete" onClick={deleteRecent}>X</div>
                </div>
                <div className="flex">
                  <img src="./images/recentSearch.svg" alt="recentSearch" className="icon" /><div className="recent" tabIndex={5}>Mehar Ali</div><div className="delete" onClick={deleteRecent}>X</div>
                </div>
                </div>
            </div>
            </div>
        </div>


        {/* Center NavBar  */}
        <div className="center navBarCenter">
          <Link to={'/'}>
            <button type="button" className='btnCenterIcons'  onFocus={focusCenterIcons} onBlur={blurCenterIcons} title='Home' ><svg className="centerNavBarIcons" style={{fill:'grey'}}> <path d="M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29"></path></svg></button>
          </Link> 
          <Link to={'/Watch'}>
            <button type="button" className='btnCenterIcons'  onFocus={focusCenterIcons} onBlur={blurCenterIcons} title='Video' ><svg className="centerNavBarIcons" style={{fill:'grey'}}><path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.164 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.164 11.654C17.612 11.924 17.612 12.575 17.164 12.846M21.75 2.75 6.25 2.75C4.182 2.75 2.5 4.432 2.5 6.5L2.5 18C2.5 20.068 4.182 21.75 6.25 21.75L21.75 21.75C23.818 21.75 25.5 20.068 25.5 18L25.5 6.5C25.5 4.432 23.818 2.75 21.75 2.75" ></path></svg></button>
          </Link>
          <Link to={'/Group'}>
            <button type="button" className='btnCenterIcons'  onFocus={focusCenterIcons} onBlur={blurCenterIcons} title='Groups'><svg className="centerNavBarIcons" style={{fill:'grey'}}><path d="M25.5 14C25.5 7.649 20.351 2.5 14 2.5 7.649 2.5 2.5 7.649 2.5 14 2.5 20.351 7.649 25.5 14 25.5 20.351 25.5 25.5 20.351 25.5 14ZM27 14C27 21.18 21.18 27 14 27 6.82 27 1 21.18 1 14 1 6.82 6.82 1 14 1 21.18 1 27 6.82 27 14ZM7.479 14 7.631 14C7.933 14 8.102 14.338 7.934 14.591 7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.99 18.461 7.004 18.578 7.03 18.802 6.862 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14ZM20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.878 19L21.364 19C21.139 19 20.97 18.802 20.997 18.578 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.067 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14ZM8.25 13C7.147 13 6.25 11.991 6.25 10.75 6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13ZM19.75 13C18.647 13 17.75 11.991 17.75 10.75 17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13ZM15.172 13.5C17.558 13.5 19.5 15.395 19.5 17.724L19.5 18.221C19.5 19.202 18.683 20 17.677 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.441 13.5 12.828 13.5L15.172 13.5ZM16.75 9C16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6 15.697 6 16.75 7.15 16.75 9Z"></path></svg></button>
          </Link>
          <Link to={'/Game'}>
            <button type="button" className='btnCenterIcons'  onFocus={focusCenterIcons} onBlur={blurCenterIcons} title='Gaming'><svg className="centerNavBarIcons" style={{fill:'grey'}}><g fillRule="evenodd" transform="translate(-444 -204)"><g><path fillRule="nonzero" d="M98.5 5.75v4a.75.75 0 1 0 1.5 0v-4a.75.75 0 1 0-1.5 0z" transform="translate(351.5 208.5)"></path><path fillRule="nonzero" d="M97.25 8.5h4a.75.75 0 1 0 0-1.5h-4a.75.75 0 1 0 0 1.5z" transform="translate(351.5 208.5)"></path><path fillRule="nonzero" d="M109.5 14.5h-10a7 7 0 0 1 0-14h10a7 7 0 0 1 0 14zm0-1.5a5.5 5.5 0 0 0 0-11h-10a5.5 5.5 0 0 0 0 11h10z" transform="translate(351.5 208.5)"></path><path d="M109 9.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m3-3a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0" transform="translate(351.5 208.5)"></path></g></g></svg></button>
          </Link>   
        </div>

        {/* Right NavBar  */}
        <div className="right  navBarRight">

 {/* Menu  */}
            <div className="circle" title='Menu'><img className="rightNavBarIcons" alt='icons' src='./images/menu.svg' title='Menu'/></div>
 {/* Messenger  */}
            <div className="circle" title='Messenger'><img className="rightNavBarIcons" alt='icons' src='./images/messengerMenu.svg' title='Messenger'/></div>
 {/* Notification  */}
            <div className="circle" title='Notification'><img className="rightNavBarIcons" alt='icons' src='./images/notificationBell.png' title='Notification'/></div>
 
 
 {/* Account/Profile  */}
            <button className="ProfileButton"  onFocus={focusProfile} onBlur={blurProfile}><img src="./images/ahmad.jpg" alt="ahmad raza khokhar" title='Account' className="profilePicture" /></button>
 <div className="profilePanel" style={profilePanel}>

      <div className="switchProfile">
        <div className="outline">
        <div className="p1">
          <img src="./images/ahmad.jpg" alt='Ahmad Raza Khokhar' className="profilePic" />
          <div style={{display:'flex'}}>
           <img src="./images/Ahmad Raza K.png" alt="ahmadrazakhokhar" className="profilePicSwitchTo" />
           <img src="./images/profileSwitch.svg" alt="ahmadrazakhokhar" className="profilePicSwitch" />
          </div>
        </div> 
        <hr className='break'/>
        <div className="p2">
         <span style={{color:'rgb(7,102,255)', fontSize:'15px'}}>
          <b>See all profiles</b>
         </span>
        </div>
      </div>
      {/* Outline Profile Closed  */}

      <div className="QuickMenu">
            <div className="p3" id='m1'>
              <div className="con">
              <div className="circle2">
                <img src="./images/settingIcon.svg" alt="icons/Menu/Quick/Bar" className="IconsQuickMenu" />
              </div>
              <span className="nameQuick"><h3 style={{fontSize:'15px'}}>Settings & privacy</h3></span> </div>
              <img src="./images/arrowForward.svg" alt="forwardButton" className="arrowEnter" />
            </div>
            <div className="p3" id='m2'>
              <div className="con">
              <div className="circle2">
                <img src="./images/help.svg" alt="icons/Menu/Quick/Bar" className="IconsQuickMenu" />
              </div>
              <span className="nameQuick"><h3 style={{fontSize:'15px'}}>Help & support</h3></span> </div>
              <img src="./images/arrowForward.svg" alt="forwardButton" className="arrowEnter" />
            </div>
            <div type='button' className="p3" id='m3' onFocus={modeSwitch}>
              <div className="con"  >
              <div className="circle2">
                <img src="./images/modeSwitch.svg" alt="icons/Menu/Quick/Bar" className="IconsQuickMenu" />
              </div>
              <span className="nameQuick"><h3 style={{fontSize:'15px'}}>Display & accessibility</h3></span> </div>
              <img src="./images/arrowForward.svg" alt="forwardButton" className="arrowEnter" />
            </div>
            <div className="p3" id='m4'>
              <div className="con">
              <div className="circle2">
                <img src="./images/feedback.svg" alt="icons/Menu/Quick/Bar" className="IconsQuickMenu" />
              </div>
              <span className="nameQuick"><h3 style={{fontSize:'15px'}}>Give feedback</h3></span> </div>
              <img src="./images/arrowForward.svg" alt="forwardButton" className="arrowEnter" />
            </div>
            <div className="p3" id='m5'>
              <div className="con">
              <div className="circle2">
                <img src="./images/logOut.svg" alt="icons/Menu/Quick/Bar" className="IconsQuickMenu" />
              </div>
              <span className="nameQuick"><h3 style={{fontSize:'15px'}}>Log Out</h3></span> </div>
              <img src="./images/arrowForward.svg" alt="forwardButton" className="arrowEnter" />
            </div>
      </div>
  {/* Profile Tab Footer */}
      <div className="AhmadRazaKhokhar">
        All Copyrights reserved by &copy; <label htmlFor="Ahmad Raza Khokhar">Ahmad Raza Khokhar </label> 
       ahmadrazawebexpert@gmail.com Under the act 2023
      </div>
      </div>
 </div>
 {/* Mode Switching Panel  */}
 <div className="modeSwitch" style={switchMode}>
  <div className="flex1" >
     <button className="exit btn-exit" onFocus={returnMenu} type='button'>
      <img src="./images/exitSearch.jpg" alt="exitBTn" className='exit'/>
     </button>

     <h1 className='panelHeadings'>Display & accessibility</h1>
  </div>

 </div>
        </div>
      </nav>

    </div>

  )
}
