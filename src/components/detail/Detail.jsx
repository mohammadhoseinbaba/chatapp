import "./detail.css"


const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane doe</h2>
        <p>lorem sidhshfsahf f dfgh djfh dfdsf dfhd</p>
      </div>
      <div className="info">
      <div className="option">
          <div className="title">
            <span>Chat setting</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div><div className="option">
          <div className="title">
            <span>privacy and help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div><div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
              <img src="./bg1.jpg" alt="" />
              <span>photo-2024-2.png</span>
              </div>
              <img src="./download.png" alt="" />
            </div>
          </div>
        </div><div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block user</button>
      </div>
    </div>
  )
}

export default Detail