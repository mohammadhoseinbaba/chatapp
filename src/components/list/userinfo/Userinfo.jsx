import './userinfo.css'


const Userinfo = () => {
  return (
    <div className='userinfo'>
      <div className='user'>
        <img src='./avatar.png' alt=''></img>
        <h2>John Doe</h2>
      </div>
      <div className='icons'>
        <img src='./more.png' alt=''></img>
        <img src='./video.png' alt=''></img>
        <img src='./edit.png' alt=''></img>
      </div>
    </div>
  )
}

export default Userinfo