import React, {useState, useEffect} from 'react'
import Comment from './Comment'
import { v4 as uuidv4 } from 'uuid';


const Post = ({caption, img, deletePostProp, index, postLink}) => {
const [reacts, setReacts] = useState({display:'none'})
const [likeImg, setLikeImg] = useState('../images/like1.svg')
const [p, setP] = useState({display:'none'})
const [stLikes, setStLikes] = useState({display:'none'})

const reactions = ()=>{
setReacts({display:'flex'});
}
const none =()=>{
    setReacts({display:'none'});
}
const deletePost = (i) =>{
  deletePostProp(i);
}
let [likes, setLikes] = useState(null);

function totalLikes() {
  setLikes((likes) => (likes !== null ? likes + 1 : 1));
}

// setting reactions 
const like = () => {
  setLikeImg('../images/like.svg');
  setReacts({display:'none'});
  setStLikes({display:'block'})
  totalLikes();
}
const love = () => {
  setLikeImg('../images/heart.svg');
  setReacts({display:'none'});
  totalLikes();
  setStLikes({display:'block'})
}
const haha = () => {
  setLikeImg('../images/haha.svg');
  setReacts({display:'none'});
  totalLikes();
  setStLikes({display:'block'})
}
const sad = () => {
  setLikeImg('../images/sad.svg');
  setReacts({display:'none'});
  totalLikes();
  setStLikes({display:'block'})
}
const wow = () => {
  setLikeImg('../images/wow.svg');
  setReacts({display:'none'});
  totalLikes();
  setStLikes({display:'block'})
}
const care = () => {
  setLikeImg('../images/care.svg');
  setReacts({display:'none'});
  totalLikes();
  setStLikes({display:'block'})
}
const angry = () => {
  setLikeImg('../images/angry.svg');
  setReacts({display:'none'});
  totalLikes();
  setStLikes({display:'block'})
}
// Delete Post Logic 

const showP = () => {
  setP({display:'block'})
}
const hideP = () => {
  setP({display:'none'})
}

// share button logic to copy the post's link
const [shares, setShares] = useState(null)
const copyToClipboard = () => {
  setShares((shares) => (shares !== null ? shares + 1 : 1));
  navigator.clipboard.writeText(postLink).then(
    () => {
      alert('Link copied to clipboard!');
    },
    (error) => {
      alert('Unable to copy to clipboard. Error:', error);
    }
  
  );
  }
  // show / hide the comment section
  const [displayFunc, setDisplayFunc] = useState(false);

  const trigger = () =>{

    setDisplayFunc((prevDisplay)=> !prevDisplay)
  }



// Comment Handler and Local storage  
const initialComment = JSON.parse(localStorage.getItem(`comment_${index}`)) || [];

const [comment, setComment] = useState(initialComment);
const [desc, setDesc] = useState('');

  const addComment = (e) =>{
    e.preventDefault();
   const newComment ={
    desc : desc,
   }
   setComment([...comment, newComment])
   setDesc('')
   
    // Save data to local storage
    localStorage.setItem(`comment_${index}`, JSON.stringify([...comment, newComment])) ;
  }

  useEffect(() => {
    const savedComment = JSON.parse(localStorage.getItem(`comment_${index}`));
    if (savedComment) {
      setComment(savedComment);
    }
  }, [index]);
  return (
    <div>
      <br />
      <div className="post">
      <div className="userInfo">
      <div className="st1">
              <img src="./images/ar3.JPG" alt="Ahmad Raza Khokhar" className="userImage" />
              <span className="userName">Ahmad Raza Khokhar</span>
              <div className="threeDot" >
                <button className="dot3" onClick={showP} >
                  
                <img src="../images/3dots.svg" alt="post menu three dots" className="postMenu"  />

                </button>
                </div>
                <button className="select" style={p} onFocus={()=>deletePost(index)} onBlur={hideP}>Delete</button>

            </div>
      <div className="date">October 6 at 3:15 AM. <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/qop9rFQ_Ys1.png" alt="Visibility" className="visibility" /></div>

            <div className="userCaption">
                {caption}
            </div>
            <br />

            <div className="postMain1">

           {img ? (  <img src={img} alt="User's Post" className="userPostImage" />):(  <img src={img} alt="User's Post" className="userPostImage" style={{display:'none'}}/>)
          }

            </div>
            
        <div className="totalLikesOfPost">
            <img src={likeImg} alt="total likes on the post" className="tL" style={stLikes}/>
            <span className="likesCount" id='likes'>{likes}</span>
            
            <div className="separate">
            <img src="../images/comment.svg" alt="total comments on the post" className="tL" />
            <span className="sharesCount" id='shares' ></span>
          <img src="../images/share.svg" alt="total shares on the post" className=" tL" />
          <span className="sharesCount" >{shares}</span>
            </div> 
        </div>
        <div className="totalLikesOfPost">
         <hr className="hr2 mt" />
        <div className="bottomMain">
        <div className="btMain">
      <button className="likeThePost" onMouseOver={reactions} onMouseOut={none} onClick={like}>
        <img src={likeImg} alt="Like" id="likeMain" />
        <span className="reactName">
          Like
        </span>
      </button>

       <div className="reactions" style={reacts} onMouseOver={reactions} onMouseOut={none}>
        <img src="../images/like.svg" alt="Like" className="reactIcons" id='like' title='Like' onClick={like}/>
        <img src="../images/heart.svg" alt="Love" className="reactIcons" id='love' title='Love' onClick={love}/>
        <img src="../images/haha.svg" alt="Haha" className="reactIcons" id='haha' title='Haha' onClick={haha}/>
        <img src="../images/care.svg" alt="Care" className="reactIcons" id='care' title='Care' onClick={care}/>
        <img src="../images/wow.svg" alt="Wow" className="reactIcons" id='wow' title='Wow' onClick={wow}/>
        <img src="../images/sad.svg" alt="Sad" className="reactIcons" id='sad' title='Sad' onClick={sad}/>
        <img src="../images/angry.svg" alt="Angry" className="reactIcons" id='angry' title='Angry' onClick={angry}/>
       </div>
       </div>
        

            <button className="restIcons" onClick={trigger} >
                <img src="../images/comment1.svg" alt="Comment on the Post" className="rest" />
                <span className="reactName">
                  Comment
                </span>
            </button>

            <button className="restIcons" onClick={copyToClipboard}>
                <img src="../images/share1.svg" alt="Share the Post" className=" rest2"/>
                 <span className="reactName">
                  Share
                </span>
            </button>
            </div>
            </div>
      </div>
      {/* adding comment section  */}
      <div className="addCommentSection" style={{display:displayFunc?  'block':'none'}}>

        <form className="cont3" onSubmit={addComment}>
          <img src="../images/ar1.JPG" alt="Ahmad Raza Khokhar" className="profilePic" />
          <textarea type="text" id="comment" placeholder='Write a comment...' value={desc} onChange={(e)=>setDesc(e.target.value)}> </textarea>
          <button type="submit" className='btnComment'>
            <img src="../images/send.svg" alt="Send Comment " className="send" />
            </button>
        </form>
<br />

<hr className=" hr4" />
<br />


{
  comment.map((e, index)=>{
    return <Comment desc = {e.desc} index ={index} key = {`${index}_${uuidv4()}`}  />
  })
}

      </div>
      </div>
    </div>
  )
}

export default Post;
