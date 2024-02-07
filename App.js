import './App.css';

import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
import { senMsgTOOpenAI } from './openai';
import React, { useState } from 'react';



function App() {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
    text:"Hi i am CHATGPT",
    isBot: true,

    }
]);

  const handelSend = async () => {
    const res = await senMsgTOOpenAI(input);
    setMessages([
      ...messages ,
      {text: input, isBot: false},
      {text:res, isBot: true}
    ]);
  }

  return (
    <div className="App">
       <div className="sideBar">
       <div className="upperSide">

       <div className="upperSideTop"> <img src={gptLogo} alt="Logo" className="logo" /> <span className="brand">ChatGPT</span>
       
       </div>
       <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" /> New Chat</button>

       <div className="upperSideBottom">
               <button className="query"><img src={msgIcon} alt="Query" />what is programming ?</button>
               <button className="query"><img src={msgIcon} alt="Query" />How to use an API ?</button>
              </div>

       

       </div>
       <div className="lowerSide">
       <div className="listItems"><img src={home} alt="home" className="listitemsImg" />Home</div>
       <div className="listItems"><img src={saved} alt="saved" className="listitemsImg" />Saved</div>
       <div className="listItems"><img src={rocket} alt="rocket" className="listitemsImg" />Upgrade to Pro</div>

        </div>  

       </div>
       <div className="main">
       <div className="chats">
        

         <div className="chat"> 
         <img className='chatimg'src={userIcon} alt="" /> <p className="txt">then push it to the bottom of the parent container. Adjust the min-height value according to your layout needs. If the issue persists, check for any conflicting styles in the parent elements.</p>

         </div>
         <div className="chat bot"> 
         <img className='chatimg'src={gptImgLogo} alt="" /> <p className="txt">In the realm of technological advancements, society is witnessing unprecedented transformations. Innovations in artificial intelligence, biotechnology, and renewable energy are reshaping the way we live and interact. As the world becomes increasingly interconnected, the need for ethical considerations in technology and sustainable practices intensifies. Education plays a pivotal role in preparing individuals for this dynamic landscape, fostering critical thinking and adaptability. Simultaneously, global challenges like climate change demand collective efforts for a sustainable future. Striking a balance between progress and responsibility becomes paramount, ensuring a harmonious coexistence between technology, humanity, and the environment in this rapidly evolving era.</p>
         </div>
         </div>
         
         <div className="chatFooter">
         <div className="inp">
          <input type="text" placeholder='Send a message' value={input} onChnage={(e)=>{setInput(e.target.value)}}/> <button className="send"onClick={handelSend}><img src={sendBtn} alt="Send"></img></button>
          
          </div>

          <p>ChatGPT can make mistakes. Consider checking important information.</p>
        
          </div>
       </div>
       </div>
       
   
  );
}

export default App;
