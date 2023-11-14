import React, {useState} from 'react'
import Collapse from 'react-bootstrap/Collapse';

const LeftNav = () => {
    const [open, setOpen] = useState(false);


    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
        setOpen(!open)
      }
  return (
    <div>
     <div className="leftNav">
        <div className=" stacksBar profileBar">
            <img src="./images/ar3.JPG" alt="Ahmad Raza Khokhar" className="leftIconsNavbar profile" />

            <div className="name">Ahmad Raza Khokhar</div>
        </div>
        <div className="stacksBar">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/9sHBSAyi0tZ.png" data-type="image" alt="Groups" data-image-id="-6921837362975981925" className="leftIconsNavbar" />
            <div className="names">Groups</div>
        </div>
        <div className="stacksBar">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/g0HjI7rz53K.png" data-type="image" alt="Friends" data-image-id="4547331731479861156" className="leftIconsNavbar" />
        <div className="names">Friends</div>
        </div>
        <div className="stacksBar">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/jtu0T_Yt0_i.png" data-type="image" alt="Videos on Watch" data-image-id="-6921837362975981925" className="leftIconsNavbar" />
            <div className="names">Watch</div>
        </div>
        <div className="stacksBar">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/NFjXvE57DKS.png" data-type="image" alt="Market Place" data-image-id="-6921837362975981925" className="leftIconsNavbar" />
            <div className="names">Market Place</div>
        </div>

        <Collapse in={open}>
        <div className="example-collapse-content">
        <div className="stacksBar">
            <img src="	https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/cKAhlkHGkKQ.png" data-type="image" alt="Pages" data-image-id="-6921837362975981925" className="leftIconsNavbar" />
            <div className="names">Pages</div>
        </div>
        <div className="stacksBar">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/u8L9If2UWAI.png" data-type="image" alt="Saved" data-image-id="-6921837362975981925" className="leftIconsNavbar" />
            <div className="names">Saved</div>
        </div>
        <div className="stacksBar">
            <img src="	https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/4EkVojH59wA.png" data-type="image" alt="Memories" data-image-id="-6921837362975981925" className="leftIconsNavbar" />
            <div className="names">Memories</div>
        </div>     
        <div className="stacksBar">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/fZvNujIgF0w.png" data-type="image" alt="Events" data-image-id="-6921837362975981925" className="leftIconsNavbar" />
            <div className="names">Events</div>
        </div>
        <div className="stacksBar">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/Fq8ydAn0mGI.png" data-type="image" alt="Games" data-image-id="-6921837362975981925" className="leftIconsNavbar" />
            <div className="names">Games</div>
        </div>
        <div className="stacksBar">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/oC2UDElOE_k.png" data-type="image" alt="Climate Science Information Centre" data-image-id="-6921837362975981925" className="leftIconsNavbar" />
            <div className="names">Climate Science Information Centre</div>
        </div>
        <div className="stacksBar">
            <img src="	https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/1x0fN3O0IWK.png" data-type="image" alt="Ads Manager" data-image-id="-6921837362975981925" className="leftIconsNavbar" />
            <div className="names">Ads Manager</div>
        </div>
        <div className="stacksBar">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/PKezMawQ_4Q.png" data-type="image" alt="Orders and payments" data-image-id="-6921837362975981925" className="leftIconsNavbar" />
            <div className="names">Orders and payments</div>
        </div>
        <div className="stacksBar">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/AfO9TvAZihx.png" data-type="image" alt="Most Recent" data-image-id="-6921837362975981925" className="leftIconsNavbar" />
            <div className="names">Most Recent</div>
        </div>
        
        </div>
      </Collapse>
        <button
        onClick={handleClick}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className='btnSeeMore'
        >
        <svg fill="grey" viewBox="0 0 16 16" width="1em" height="1em" className="seeMoreIcon"><g fillRule="evenodd" transform="translate(-448 -544)"><path fillRule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path></g></svg>
        <div className="textSeeMore">
          {clicked ? 'See Less' : 'See More'}

        </div>
      </button>
       
        {/* next section */}
       <hr className="hr" />
       <h2 className="shortcutHeading">
            Your shortcuts
           </h2>
        <div className="stacksBar">
     
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/e0GPjbYFcde.png" data-type="image" alt="Settings" data-image-id="-6921837362975981925" className="leftIconsNavbar" />
            <div className="names">Settings</div>
        </div>
        <div className="stacksBar">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/0XLOXKeVMs_.png" data-type="image" alt="Dark mode" data-image-id="-6921837362975981925" className="leftIconsNavbar" />
            <div className="names">Dark Mode</div>
        </div>
        <div className="stacksBar">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/kCAqw3XERbh.png" data-type="image" alt="Privacy shortcuts" data-image-id="-6921837362975981925" className="leftIconsNavbar" />
            <div className="names">Privacy shortcuts</div>
        </div>  
        <div className="stacksBar">
            <img src="	https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/LNkNjCYrgE7.png" data-type="image" alt="Language" data-image-id="-6921837362975981925" className="leftIconsNavbar" />
            <div className="names">Language</div>
        </div>
        <div className="stacksBar">
            <img src="	https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/zlnYvxYJKwP.png" data-type="image" alt="Help" data-image-id="-6921837362975981925" className="leftIconsNavbar" />
            <div className="names">Help</div>
        </div>
        <div className="stacksBar">
            <img src="	https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/SCnFfYkpQpm.png" data-type="image" alt="Support Inbox" data-image-id="-6921837362975981925" className="leftIconsNavbar" />
            <div className="names">Support Inbox</div>
        </div>
        <div className="stacksBar">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/xIcrPB9Av98.png" data-type="image" alt="About" data-image-id="-6921837362975981925" className="leftIconsNavbar" />
            <div className="names">About</div>
        </div>
        <div className="stacksBar">
            <img src="	https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/mvJb5v9pfzL.png" data-type="image" alt="Report a problem" data-image-id="-6921837362975981925" className="leftIconsNavbar" />
            <div className="names">Report a problem</div>
        </div>
        <div className="stacksBar">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/jT8efvSMxo2.png" data-type="image" alt="Log Out" data-image-id="-6921837362975981925" className="leftIconsNavbar" />
            <div className="names">Log Out</div>
        </div>
     </div>
    </div>
  )
}

export default LeftNav
