import React, {useState} from 'react'

const Comment = ({desc}) => {
const [likeImg, setLikeImg] = useState('../images/like1.svg');
let [likes, setLikes] = useState(null);

function totalLikes() {
    setLikes((likes) => (likes !== null ? likes + 1 : 1));
  }

const like = () => {
    setLikeImg('../images/like.svg');

    totalLikes();
  }
  return (
    <div>
      <div className="comment">
        <img src="../images/ar1.JPG" alt="Ahmad Raza Khokhar" className="profileComment" />
        <div className="commentContainer">
            <div className="userName2">Ahmad Raza Khokhar</div>
            <div className="actualComment">
              {desc}
            </div>
        </div>

      </div>
      <button className="likeTheComment" onClick={like}>
        <img src={likeImg} alt="Like" id="likeMain2" />
         <span className="tLk">
          <span className="reactName">
              Like
          </span>
          {likes}
          </span>
      </button>
      <br />
      <br />
    </div>
  )
}

export default Comment
