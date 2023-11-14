import React,{useState} from 'react'

const Watch = () => {
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
            <h2>Video</h2>
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
                  <img src="./images/recentSearch.svg" alt="recentSearch" className="icon" /><div className="recent" tabIndex={1}>Pak vs Ind</div><div className="delete" onClick={deleteRecent}>X</div>
                </div>
                <div className="flex">
                  <img src="./images/recentSearch.svg" alt="recentSearch" className="icon" /><div className="recent" tabIndex={2}>Asia Cup</div><div className="delete" onClick={deleteRecent}>X</div>
                </div>
                <div className="flex">
                  <img src="./images/recentSearch.svg" alt="recentSearch" className="icon" /><div className="recent" tabIndex={3}>Honey Sing Songs</div><div className="delete" onClick={deleteRecent}>X</div>
                </div>
                <div className="flex">
                  <img src="./images/recentSearch.svg" alt="recentSearch" className="icon" /><div className="recent" tabIndex={4}>Mufti Tariq Masood</div><div className="delete" onClick={deleteRecent}>X</div>
                </div>
                <div className="flex">
                  <img src="./images/recentSearch.svg" alt="recentSearch" className="icon" /><div className="recent" tabIndex={5}>Molana Tariq Jameel bayan</div><div className="delete" onClick={deleteRecent}>X</div>
                </div>

              
                </div>
                
            </div>
            </div>
          </div>

          <div className="menu4">
                  <div className="stack">
                    <div className="circle circle5">
                    <svg className="icon5" style={{fill:'black'}}><path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.164 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.164 11.654C17.612 11.924 17.612 12.575 17.164 12.846M21.75 2.75 6.25 2.75C4.182 2.75 2.5 4.432 2.5 6.5L2.5 18C2.5 20.068 4.182 21.75 6.25 21.75L21.75 21.75C23.818 21.75 25.5 20.068 25.5 18L25.5 6.5C25.5 4.432 23.818 2.75 21.75 2.75" ></path></svg>
                    </div>
                    <b className='title3'>Home</b>
                  </div>
                  <div className="stack">
                    <div className="circle circle5">
                    <img src="./images/live3.svg" alt="live" className="icon5" />
                    </div>
                    <b className='title3'>Live</b>
                  </div>
                  <div className="stack">
                    <div className="circle circle5">
                   <svg id="Layer_3" className='icon5' enable-background="new 0 0 60 60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><path d="m34.949 29.233-6.897-4.47c-.174-.113-.342-.15-.489-.15-.199 0-.36.069-.442.114-.143.078-.476.312-.476.801v8.94c0 .489.333.723.476.801.143.077.52.229.932-.036l6.896-4.47c.375-.243.416-.616.416-.765s-.04-.522-.416-.765z"/><path d="m50 5h-40c-2.75 0-5 2.24-5 5v40c0 2.75 2.25 5 5 5h40c2.76 0 5-2.25 5-5v-40c0-2.76-2.24-5-5-5zm-19 2h5.89v6.46h-5.89zm-7.88 0h5.88v6.46h-5.88zm-9.88 46h-3.24c-1.65 0-3-1.35-3-3v-3.46h6.24zm0-39.54h-6.24v-3.46c0-1.66 1.35-3 3-3h3.24zm7.88 39.54h-5.88v-6.46h5.88zm0-39.54h-5.88v-6.46h5.88zm7.88 39.54h-5.88v-6.46h5.88zm7.89 0h-5.89v-6.46h5.89zm-.853-20.561-6.897 4.47c-.481.311-1.032.468-1.584.468-.478 0-.956-.117-1.391-.354-.938-.51-1.52-1.49-1.52-2.558v-8.94c0-1.068.583-2.048 1.521-2.558.938-.511 2.077-.467 2.974.114l6.897 4.47c.832.539 1.329 1.452 1.329 2.443s-.498 1.906-1.329 2.445zm8.733 20.561h-5.88v-6.46h5.88zm0-39.54h-5.88v-6.46h5.88zm8.23 36.54c0 1.65-1.34 3-3 3h-3.23v-6.46h6.23zm0-36.54h-6.23v-6.46h3.23c1.66 0 3 1.34 3 3z"/></svg>
                    </div>
                    <b className='title3'>Reels</b>
                  </div>
                  <div className="stack">
                    <div className="circle circle5">
                  <img src="./images/action.svg" alt="Shows" className="icon5" />
                    </div>
                    <b className='title3'>Shows</b>
                  </div>
                </div>
                <div className="stack">
                    <div className="circle circle5">
                    <img src="./images/explore.svg" alt="Explore" className="icon5" />
                    </div>
                    <b className='title3'>Explore</b>
                  </div>
                  <div className="stack">
                    <div className="circle circle5">
                    <img src="./images/saved.svg" alt="live" className="icon5" />
                    </div>
                    <b className='title3'>Saved</b>
                  </div>
         </div>


         <div className="MainCenterContentVideos">
          <div className="videosPanel">
            <div className="video">
          <div className="upper5">
              <div className="st1">
              <img src="./images/ar3.JPG" alt="Ahmad Raza Khokhar" className="userImage" />
              <span className="userName">Ahmad Raza Khokhar</span>
  
            </div>
            <div className="ddd">
            <div className="date">
              October 6 at 3:15 AM. <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/qop9rFQ_Ys1.png" alt="Visibility" className="visibility" /></div>
           </div>
           <div className="captionsss">
            Wordpress Video by Ahmad Raza Khokhar
           </div>
          </div>
            

            <div>
              <video src="./images/wordpress website.mp4" controls autoPlay muted className="video"></video>
            </div>
            </div>
          </div>
         </div>
    </div>
  )
}

export default Watch
