import React, {useState} from 'react'
import Post from '../Post'
import ary from './Ahmad Raza K.png'
import axios from 'axios'
const Center = () => {
  const[caption, setCaption] = useState('');
  const[img, setImg] = useState('');

  const[data, setData] = useState([]);
 const [displayContainer, setDisplayContainer] = useState({display:'none'})


  // Post / Add data method and logic 
  const addData = async(e) =>{
    e.preventDefault();
   const newData ={
    caption : caption,
    img : img,
   }
   setData([...data, newData])
   setCaption('')
   setImg('')
  setDisplayContainer({display:'none'})

    // adding data in JSON format to backend
    try{
await axios.post('http://localhost:200/post', {
  caption:caption,
  img:img,
})
    }
    catch(error){
      console.log(error)
    }
  }



  // deleting post logic 
  const deletePostProp = (postIndex) => {
    const updatedData = data.filter((_, index) => index !== postIndex);
    setData(updatedData);
  };
// ulpoading image logic
function uploader(){
setDisplayContainer({display:'block'})

}
function cancelUpload(){
  setDisplayContainer({display:'none'})
  }
function soon(){
  alert('This Function will be available soon!, Contact Ahmad Raza Khokhar => ahmadrazawebexpert@gmail.com for further details')
}

  return (
    <div className='mainContainerHome'>
      <div className="storyPanel">
        <div className="overFloat">
      <div className="storyBar">
        <img src={ary} alt="Ahmad Raza Khokhar" className="storyMain  xyz" />
        <div className="blockOfStory">
            <img src="../images/addStory.svg" alt="Add Story" className="plus" />
            <h2 className="storyText">
                Create story
            </h2>
        </div>
        </div>
        <div className="storyBar">
        <img src={ary} alt="Ahmad Raza Khokhar" className="now" />
          <div className="circle blue">
          </div>
          
        <img src={ary} alt="Ahmad Raza Khokhar" className="story" />
        <div className="storyTitle">Ahmad Raza Khokhar</div>
        </div>
        <div className="storyBar">
                  <img src={ary} alt="Ahmad Raza Khokhar" className="now" />
          <div className="circle blue">
          </div>
        <img src={ary} alt="Ahmad Raza Khokhar" className="story" />
        <div className="storyTitle">Ahmad Raza Khokhar</div>
        </div>
        <div className="storyBar">
                  <img src={ary} alt="Ahmad Raza Khokhar" className="now" />
          <div className="circle blue">
          </div>
        <img src={ary} alt="Ahmad Raza Khokhar" className="story" />
        <div className="storyTitle">Ahmad Raza Khokhar</div>
        </div>
        <div className="storyBar">
                  <img src={ary} alt="Ahmad Raza Khokhar" className="now" />
          <div className="circle blue">
          </div>
        <img src={ary} alt="Ahmad Raza Khokhar" className="story" />
        <div className="storyTitle">Ahmad Raza Khokhar</div>
        </div>
        <div className="storyBar">
                  <img src={ary} alt="Ahmad Raza Khokhar" className="now" />
          <div className="circle blue">
          </div>
        <img src={ary} alt="Ahmad Raza Khokhar" className="story" />
        <div className="storyTitle">Ahmad Raza Khokhar</div>
        </div>
        <div className="storyBar">
                  <img src={ary} alt="Ahmad Raza Khokhar" className="now" />
          <div className="circle blue">
          </div>
        <img src={ary} alt="Ahmad Raza Khokhar" className="story" />
        <div className="storyTitle">Ahmad Raza Khokhar</div>
      </div>
      </div>
      </div>



      {/* MAIN POSTS  */}
       
       <div className="createPost">
        <div className="panelStack">
            <img src={ary} alt="Ahmad Raza Khokhar Site Developer" className="createPic" />
            <div className="whatToPost"><div className="txt" onClick={uploader}>What's on your mind, Ahmad?</div></div>
            <hr className="hr2" />

            <div className="btnGroupPost">
                <button className="postBtn">
                    <img src="	https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png" alt="Post Icons Facebook" className="postBtnIcon" />
                    <span className="btnTxtPost" onClick={soon}>Live video</span>
                </button>
                <button className="postBtn"  onClick={uploader}>
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png" alt="Post Icons Facebook" className="postBtnIcon" />
                    <span className="btnTxtPost">Photo/video</span>
                </button>
                <button className="postBtn">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png" alt="Post Icons Facebook" className="postBtnIcon" />
                    <span className="btnTxtPost" onClick={soon}>Feeling/activity</span>
                </button>
            </div>

            {/* uploader container  */}

            <div className="uploader" style={displayContainer}>

              <div className="upperVent">
                <h4 className='nnn'>Create post</h4> 
                <div className='circleGrey'>
                  <button className='btn3' onClick={cancelUpload}>
                  <img src="../images/cross.svg" alt="cancel the post" className="cross" />
                  </button>
                </div>
              </div>

              <div className="middleVent">

              <form onSubmit={(e)=>addData(e)}>
          <textarea 
          type="text"  
          onChange={(e)=>setCaption(e.target.value)} 
          placeholder="What's on your mind, Ahmad?" 
          className='captionText'
          value={caption}
          id='caption'
          >
          </textarea>
          <br />
          <div className="upload-btn-wrapper  addPhotoVideo">
            <img src={img} alt="selected post" className="selectedImage" />
           <input 
           type="file" 
           name="myfile"   
           accept='image/*, video/*' 
           onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))}
           id='img'
           />
          </div>

          <br />
        <button type='submit' className='addPostBtn'>Post</button>

        </form>
              </div>
            </div>
        </div>
       </div>
      
      <div className="contMain">
       
        {

        data.map((e, index)=>{
          return(<Post
             caption = {e.caption} 
             img = {e.img} 
             index = {index} 
             key={index} 
             deletePostProp = {()=>deletePostProp(index)} 
             />);
        })

        }
          </div>

    </div>

  )
}

export default Center;
