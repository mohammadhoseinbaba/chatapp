import { useEffect, useRef, useState } from "react"
import "./chat.css"
import EmojiPicker from "emoji-picker-react"

const Chat = () => {

const [open,setopen]=useState(false)
const [text,setText]=useState('')
const endRef=useRef(null)

useEffect(()=>{
  endRef.current?.scrollIntoView({behavior:"smooth"})
},[])


const handleEmoji=(e)=>{
setText((prev)=>prev+e.emoji)
}
  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>John Doe</span>
             <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
        <img src="./phone.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
      <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis 
              nemo voluptatum blanditiis, dignissimos praesentium vel
               totam ut itaque natus dicta alias repudiandae molestias
              dolore quam earum mollitia consequuntur numquam quod!</p>
            <span>1min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis 
              nemo voluptatum blanditiis, dignissimos praesentium vel
               totam ut itaque natus dicta alias repudiandae molestias
              dolore quam earum mollitia consequuntur numquam quod!</p>
            <span>1min ago</span>
          </div>
        </div><div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis 
              nemo voluptatum blanditiis, dignissimos praesentium vel
               totam ut itaque natus dicta alias repudiandae molestias
              dolore quam earum mollitia consequuntur numquam quod!</p>
            <span>1min ago</span>
          </div>
        </div><div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis 
              nemo voluptatum blanditiis, dignissimos praesentium vel
               totam ut itaque natus dicta alias repudiandae molestias
              dolore quam earum mollitia consequuntur numquam quod!</p>
            <span>1min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis 
              nemo voluptatum blanditiis, dignissimos praesentium vel
               totam ut itaque natus dicta alias repudiandae molestias
              dolore quam earum mollitia consequuntur numquam quod!</p>
            <span>1min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="./bg1.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis 
              nemo voluptatum blanditiis, dignissimos praesentium vel
               totam ut itaque natus dicta alias repudiandae molestias
              dolore quam earum mollitia consequuntur numquam quod!</p>
            <span>1min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
          </div>
          <input type="text" placeholder="Type a massage..." value={text} onChange={(e)=>setText(e.target.value)} />
          <div className="emoji">
            <img src="emoji.png" alt="" onClick={()=>setopen((prev)=>!prev)}/>
            <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
            </div>
          </div>
          <button className="sendButton">Send</button> 
        
      </div>
    </div>
  )
}

export default Chat