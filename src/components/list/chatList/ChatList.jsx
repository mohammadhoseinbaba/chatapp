import { useState } from 'react'
import './chatlist.css'


const ChatList = () => {
    const [addMode,setAddMode]=useState(false)
  return (
    <div className='chatlist'>
      <div className="search">
        <div className="searchBar">
            <img src="./search.png" alt="" />
            <input type="text" placeholder='search'/>
        </div>
        <img src={addMode ? "./minus.png":"./plus.png"} alt="" className='add' onClick={()=>{setAddMode(!addMode)}}/>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
            <span>Jan Doe</span>
            <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
            <span>Jan Doe</span>
            <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
            <span>Jan Doe</span>
            <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
            <span>Jan Doe</span>
            <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default ChatList