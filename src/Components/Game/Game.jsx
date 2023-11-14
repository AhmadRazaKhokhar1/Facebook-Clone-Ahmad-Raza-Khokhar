import React, {useState} from 'react'
import { Container, Card, Row, Col, Button } from "react-bootstrap";

const Game = () => {
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


  // carousel part of the game cards
  const cardData = [
    { id: 1, title: "8 Ball Pool", content: "World's no.1 online pool game", imageUrl: "./images/8ball.jpeg" },
    { id: 2, title: "8 Ball Pool", content: "World's no.1 online pool game", imageUrl: "./images/8ball.jpeg" },
    { id: 3, title: "8 Ball Pool", content: "World's no.1 online pool game", imageUrl: "./images/8ball.jpeg" },
    { id: 4, title: "8 Ball Pool", content: "World's no.1 online pool game", imageUrl: "./images/8ball.jpeg" },
    { id: 4, title: "8 Ball Pool", content: "World's no.1 online pool game", imageUrl: "./images/8ball.jpeg" },
    { id: 4, title: "8 Ball Pool", content: "World's no.1 online pool game", imageUrl: "./images/8ball.jpeg" },
    { id: 4, title: "8 Ball Pool", content: "World's no.1 online pool game", imageUrl: "./images/8ball.jpeg" },
    { id: 4, title: "8 Ball Pool", content: "World's no.1 online pool game", imageUrl: "./images/8ball.jpeg" },
    { id: 4, title: "8 Ball Pool", content: "World's no.1 online pool game", imageUrl: "./images/8ball.jpeg" },
    { id: 4, title: "8 Ball Pool", content: "World's no.1 online pool game", imageUrl: "./images/8ball.jpeg" },
    { id: 4, title: "8 Ball Pool", content: "World's no.1 online pool game", imageUrl: "./images/8ball.jpeg" },
    // Add more data as needed
  ];
    const chunkSize = 4;
    const chunks = [];
  
    for (let i = 0; i < cardData.length; i += chunkSize) {
      chunks.push(cardData.slice(i, i + chunkSize));
    }
  
  return (
    <div>
      <div className="leftWatchNav">
          <div className="upperC">
            <h2>Gaming</h2>
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
                    <svg className="icon4" style={{fill:'black'}}><g fillRule="evenodd" transform="translate(-444 -204)"><g><path fillRule="nonzero" d="M98.5 5.75v4a.75.75 0 1 0 1.5 0v-4a.75.75 0 1 0-1.5 0z" transform="translate(351.5 208.5)"></path><path fillRule="nonzero" d="M97.25 8.5h4a.75.75 0 1 0 0-1.5h-4a.75.75 0 1 0 0 1.5z" transform="translate(351.5 208.5)"></path><path fillRule="nonzero" d="M109.5 14.5h-10a7 7 0 0 1 0-14h10a7 7 0 0 1 0 14zm0-1.5a5.5 5.5 0 0 0 0-11h-10a5.5 5.5 0 0 0 0 11h10z" transform="translate(351.5 208.5)"></path><path d="M109 9.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m3-3a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0" transform="translate(351.5 208.5)"></path></g></g></svg>
                    </div>
                    <b className='title3'>Play Games</b>
                  </div>
                  <div className="stack">
                    <div className="circle circle5">
                    <img src="./images/compass.svg" alt="Discover" className="icon4" />
                    </div>
                    <b className='title3'>Gaming Activity</b>
                  </div>
                  <div className="stack">
                    <div className="circle circle5">
                    <img className="icon4" alt='icons' src='./images/notificationBell.png' title='Notification'/>
                    </div>
                    <b className='title3'>Notificatons</b>
                  </div>
                  </div>

                  <button className="createGroup">
                    <img src="./images/plus.svg" alt="Create new group" className="icon6" />
                    <span className="title2">
                        Play Games
                    </span>
                  </button>


                  <div className="bottomSection5">
                  <hr className="hr5" />
                  <div className="title4">
                    Your games
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



                  <div className="centerPartGame">


                  <Container style={{ overflowX: "auto" }}>
      <Row style={{ display: "flex", flexWrap: "nowrap" }}>
        {cardData.map((card) => (
          <Col key={card.id} style={{ flex: "0 0 25%", maxWidth: "25%" }}>
            <Card style={{ width: "17rem", margin: "10px" }}>
              <Card.Img variant="top" src={card.imageUrl} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.content}</Card.Text>
                <Button variant="primary">Play Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <br />
    <Container style={{ overflowX: "auto" }}>
      <Row style={{ display: "flex", flexWrap: "nowrap" }}>
        {cardData.map((card) => (
          <Col key={card.id} style={{ flex: "0 0 25%", maxWidth: "25%" }}>
            <Card style={{ width: "17rem", margin: "10px" }}>
              <Card.Img variant="top" src={card.imageUrl} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.content}</Card.Text>
                <Button variant="primary">Play Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <br />
    <Container style={{ overflowX: "auto" }}>
      <Row style={{ display: "flex", flexWrap: "nowrap" }}>
        {cardData.map((card) => (
          <Col key={card.id} style={{ flex: "0 0 25%", maxWidth: "25%" }}>
            <Card style={{ width: "17rem", margin: "10px" }}>
              <Card.Img variant="top" src={card.imageUrl} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.content}</Card.Text>
                <Button variant="primary">Play Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
                  </div>
    </div>
  )
}

export default Game;
