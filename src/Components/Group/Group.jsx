import React, {useState} from 'react'
import ary from './Ahmad Raza K.png'
const Group = () => {
  const [img, setImg] = useState('./images/search.svg')
  const [searchBox, setSearchBox] = useState({display:'none'})
  const flex = document.querySelectorAll('.flex');
  
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
  
  return (
    <div>
      <div className="leftWatchNav">
          <div className="upperC">
            <h2>Groups</h2>
            <div className="circle circle3">
              <img src="./images/setting.svg" alt="setting icon" className="settings" />
            </div>
          </div>
          <div className="menu2">
          <div className='searchDiv'>
            <div className="searchIcon"><img src={img} className='i' alt='searchIcon'/></div>
            <input type="search" className="searchInput" placeholder='Search videos' onFocus={searchFocus} onBlur={searchBlur} />
            <div className="searchBoxPanelRecent" style={searchBox}>
                <div className="iconTopLeftExit">     
                      <img src="./images/exitSearch.jpg" alt="exitSearch" className="exitImage" />
                </div>
                <h2 className='hr'>Recent Searches</h2>
                <div className="left1">
                
                <div className="flex">
                  <img src="./images/recentSearch.svg" alt="recentSearch" className="icon" /><div className="recent" tabIndex={1}>Ahmad Raza Web Services</div><div className="delete" onClick={deleteRecent}>X</div>
                </div>
                <div className="flex">
                  <img src="./images/recentSearch.svg" alt="recentSearch" className="icon" /><div className="recent" tabIndex={2}>Ahmad Raza Khokhar</div><div className="delete" onClick={deleteRecent}>X</div>
                </div>
                <div className="flex">
                  <img src="./images/recentSearch.svg" alt="recentSearch" className="icon" /><div className="recent" tabIndex={3}>Master Cars Colloection</div><div className="delete" onClick={deleteRecent}>X</div>
                </div>
                <div className="flex">
                  <img src="./images/recentSearch.svg" alt="recentSearch" className="icon" /><div className="recent" tabIndex={4}>Daily Tweets</div><div className="delete" onClick={deleteRecent}>X</div>
                </div>
                <div className="flex">
                  <img src="./images/recentSearch.svg" alt="recentSearch" className="icon" /><div className="recent" tabIndex={5}>Thugs of Pakistan</div><div className="delete" onClick={deleteRecent}>X</div>
                </div>

              
                </div>
                
            </div>
            </div>
          </div>

          <div className="menu4">
                  <div className="stack">
                    <div className="circle circle5">
                    <img src="./images/feed.svg" alt="Your feed " className="icon4" />
                    </div>
                    <b className='title3'>Your feed</b>
                  </div>
                  <div className="stack">
                    <div className="circle circle5">
                    <img src="./images/compass.svg" alt="Discover" className="icon4" />
                    </div>
                    <b className='title3'>Discover</b>
                  </div>
                  <div className="stack">
                    <div className="circle circle5">
                    <svg className="icon4" style={{fill:'black', marginLeft:'0'}}><path d="M25.5 14C25.5 7.649 20.351 2.5 14 2.5 7.649 2.5 2.5 7.649 2.5 14 2.5 20.351 7.649 25.5 14 25.5 20.351 25.5 25.5 20.351 25.5 14ZM27 14C27 21.18 21.18 27 14 27 6.82 27 1 21.18 1 14 1 6.82 6.82 1 14 1 21.18 1 27 6.82 27 14ZM7.479 14 7.631 14C7.933 14 8.102 14.338 7.934 14.591 7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.99 18.461 7.004 18.578 7.03 18.802 6.862 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14ZM20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.878 19L21.364 19C21.139 19 20.97 18.802 20.997 18.578 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.067 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14ZM8.25 13C7.147 13 6.25 11.991 6.25 10.75 6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13ZM19.75 13C18.647 13 17.75 11.991 17.75 10.75 17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13ZM15.172 13.5C17.558 13.5 19.5 15.395 19.5 17.724L19.5 18.221C19.5 19.202 18.683 20 17.677 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.441 13.5 12.828 13.5L15.172 13.5ZM16.75 9C16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6 15.697 6 16.75 7.15 16.75 9Z"></path></svg>
                    </div>
                    <b className='title3'>Reels</b>
                  </div>
                  </div>

                  <button className="createGroup">
                    <img src="./images/plus.svg" alt="Create new group" className="icon6" />
                    <span className="title2">
                        Create new group
                    </span>
                  </button>


                  <div className="bottomSection5">
                  <hr className="hr5" />
                  <div className="underSection">
                    <div className="title4">
                      Groups you manage
                    </div>
                    <img src="./images/1.png" alt="Ahmad Raza Khokhar" className="sponsoredImg kkk" />
                    <div className="sponsorBlc">
                      <h4 className="sponsorHeading">Ahmad Raza Web Services</h4>
                    </div>
                  </div>
                  <hr className="hr5" />
                   <div className="underSection">
                    <div className="title4">
                      Groups you've joined
                    </div>
                    <img src="./images/1.png" alt="Ahmad Raza Khokhar" className="sponsoredImg kkk" />
                    <div className="sponsorBlc">
                      <h4 className="sponsorHeading">Ahmad Raza Web Services</h4>
                    </div>
                  </div>
                  <hr className="hr5" />

                  <div className="underSection">
                    <div className="title4">
                      Groups you've joined
                    </div>
                    <img src="./images/1.png" alt="Ahmad Raza Khokhar" className="sponsoredImg kkk" />
                    <div className="sponsorBlc">
                      <h4 className="sponsorHeading">Ahmad Raza Web Services</h4>
                    </div>
                  </div>
                  <hr className="hr5" />

                  <div className="underSection">
                    <div className="title4">
                      Groups you've joined
                    </div>
                    <img src="./images/1.png" alt="Ahmad Raza Khokhar" className="sponsoredImg kkk" />
                    <div className="sponsorBlc">
                      <h4 className="sponsorHeading">Ahmad Raza Web Services</h4>
                    </div>
                  </div>
                  <hr className="hr5" />

                  <div className="underSection">
                    <div className="title4">
                      Groups you've joined
                    </div>
                    <img src="./images/1.png" alt="Ahmad Raza Khokhar" className="sponsoredImg kkk" />
                    <div className="sponsorBlc">
                      <h4 className="sponsorHeading">Ahmad Raza Web Services</h4>
                    </div>
                  </div>
                  <hr className="hr5" />

                  <div className="underSection">
                    <div className="title4">
                      Groups you've joined
                    </div>
                    <img src="./images/1.png" alt="Ahmad Raza Khokhar" className="sponsoredImg kkk" />
                    <div className="sponsorBlc">
                      <h4 className="sponsorHeading">Ahmad Raza Web Services</h4>
                    </div>
                  </div>
                  </div>
                           
                  </div>


{/* center section of the group page / posts page  */}
            <div className="centerGroupSection">


              <div className="postOfGroup">

                <div className="upperPart">

                  <div className="box">
                    <img src="./images/1.png" alt="Ahmad Raza Web Developer" className="boxImage" />
                    <img src={ary} alt="Ahmad Raza Khokhar" className="profilePic mmm" />     
                  </div>

                  <div className="box2">
                    <span className="head">
                      Ahmad Raza Web Developer
                    </span>
                    <span className="profileName">
                      Ahmad Raza Khokhar
                    </span>
                  </div>
                </div>
                <div className="centerPart">
                  <img src={ary} className="bImage"  alt='Ahmad Raza Khokhar'/>
                </div>

              </div>
              <br />
              <div className="postOfGroup">

<div className="upperPart">

  <div className="box">
    <img src="./images/1.png" alt="Ahmad Raza Web Developer" className="boxImage" />
    <img src={ary} alt="Ahmad Raza Khokhar" className="profilePic mmm" />     
  </div>

  <div className="box2">
    <span className="head">
      Ahmad Raza Web Developer
    </span>
    <span className="profileName">
      Ahmad Raza Khokhar
    </span>
  </div>
</div>
<div className="centerPart">
  <img src={ary} alt="Ahmad Raza Khokhar MERN Stack Developer / Full Stack developer" className="bImage" />
</div>

</div>


            </div>

{/* right section of the group page  */}

              <div className="rightMenuPage">

                  <div className="titleIT">
                    Your community chats
                  </div>
                <div className="section10">
                  <div className="box">
                  <img src="./images/1.png" alt="Ahmad Raza Web Developer" className="boxImage" />
                      <img src={ary} alt="Ahmad Raza Khokhar" className="profilePic mmm" /> 
                  </div>

                  <div className="box2">
                
                    <span className="profileName">
                      Ahmad Raza Khokhar
                    </span>
                    <span className="head">
                      Ahmad Raza Web Developer
                    </span>

                  </div>
                </div>
              
                <div className="section10">
                  <div className="box">
                  <img src="./images/1.png" alt="Ahmad Raza Web Developer" className="boxImage" />
                      <img src={ary} alt="Ahmad Raza Khokhar" className="profilePic mmm" /> 
                  </div>

                  <div className="box2">
                
                    <span className="profileName">
                      Ahmad Raza Khokhar
                    </span>
                    <span className="head">
                      Ahmad Raza Web Developer
                    </span>

                  </div>
                </div>
                <div className="section10">
                  <div className="box">
                  <img src="./images/1.png" alt="Ahmad Raza Web Developer" className="boxImage" />
                      <img src={ary} alt="Ahmad Raza Khokhar" className="profilePic mmm" /> 
                  </div>

                  <div className="box2">
                
                    <span className="profileName">
                      Ahmad Raza Khokhar
                    </span>
                    <span className="head">
                      Ahmad Raza Web Developer
                    </span>

                  </div>
                </div>
                <div className="section10">
                  <div className="box">
                  <img src="./images/1.png" alt="Ahmad Raza Web Developer" className="boxImage" />
                      <img src={ary} alt="Ahmad Raza Khokhar" className="profilePic mmm" /> 
                  </div>

                  <div className="box2">
                
                    <span className="profileName">
                      Ahmad Raza Khokhar
                    </span>
                    <span className="head">
                      Ahmad Raza Web Developer
                    </span>

                  </div>
                </div>
                <div className="section10">
                  <div className="box">
                  <img src="./images/1.png" alt="Ahmad Raza Web Developer" className="boxImage" />
                      <img src={ary} alt="Ahmad Raza Khokhar" className="profilePic mmm" /> 
                  </div>

                  <div className="box2">
                
                    <span className="profileName">
                      Ahmad Raza Khokhar
                    </span>
                    <span className="head">
                      Ahmad Raza Web Developer
                    </span>

                  </div>
                  
                </div>
                <div className="section10">
                  <div className="box">
                  <img src="./images/1.png" alt="Ahmad Raza Web Developer" className="boxImage" />
                      <img src={ary} alt="Ahmad Raza Khokhar" className="profilePic mmm" /> 
                  </div>

                  <div className="box2">
                
                    <span className="profileName">
                      Ahmad Raza Khokhar
                    </span>
                    <span className="head">
                      Ahmad Raza Web Developer
                    </span>

                  </div>
                </div>
                <div className="section10">
                  <div className="box">
                  <img src="./images/1.png" alt="Ahmad Raza Web Developer" className="boxImage" />
                      <img src={ary} alt="Ahmad Raza Khokhar" className="profilePic mmm" /> 
                  </div>

                  <div className="box2">
                
                    <span className="profileName">
                      Ahmad Raza Khokhar
                    </span>
                    <span className="head">
                      Ahmad Raza Web Developer
                    </span>

                  </div>
                </div>
                <div className="section10">
                  <div className="box">
                  <img src="./images/1.png" alt="Ahmad Raza Web Developer" className="boxImage" />
                      <img src={ary} alt="Ahmad Raza Khokhar" className="profilePic mmm" /> 
                  </div>

                  <div className="box2">
                
                    <span className="profileName">
                      Ahmad Raza Khokhar
                    </span>
                    <span className="head">
                      Ahmad Raza Web Developer
                    </span>

                  </div>
                </div>
                <div className="section10">
                  <div className="box">
                  <img src="./images/1.png" alt="Ahmad Raza Web Developer" className="boxImage" />
                      <img src={ary} alt="Ahmad Raza Khokhar" className="profilePic mmm" /> 
                  </div>

                  <div className="box2">
                
                    <span className="profileName">
                      Ahmad Raza Khokhar
                    </span>
                    <span className="head">
                      Ahmad Raza Web Developer
                    </span>

                  </div>
                </div>
                <div className="section10">
                  <div className="box">
                  <img src="./images/1.png" alt="Ahmad Raza Web Developer" className="boxImage" />
                      <img src={ary} alt="Ahmad Raza Khokhar" className="profilePic mmm" /> 
                  </div>

                  <div className="box2">
                
                    <span className="profileName">
                      Ahmad Raza Khokhar
                    </span>
                    <span className="head">
                      Ahmad Raza Web Developer
                    </span>

                  </div>
                </div>
                <div className="section10">
                  <div className="box">
                  <img src="./images/1.png" alt="Ahmad Raza Web Developer" className="boxImage" />
                      <img src={ary} alt="Ahmad Raza Khokhar" className="profilePic mmm" /> 
                  </div>

                  <div className="box2">
                
                    <span className="profileName">
                      Ahmad Raza Khokhar
                    </span>
                    <span className="head">
                      Ahmad Raza Web Developer
                    </span>

                  </div>
                </div>
                <div className="section10">
                  <div className="box">
                  <img src="./images/1.png" alt="Ahmad Raza Web Developer" className="boxImage" />
                      <img src={ary} alt="Ahmad Raza Khokhar" className="profilePic mmm" /> 
                  </div>

                  <div className="box2">
                
                    <span className="profileName">
                      Ahmad Raza Khokhar
                    </span>
                    <span className="head">
                      Ahmad Raza Web Developer
                    </span>

                  </div>
                </div>


              </div>


                </div>
  )
}

export default Group
