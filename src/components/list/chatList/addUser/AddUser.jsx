import './adduser.css'

const AddUser = () => {
    return (
        <div className='addUser'>
            <form>

                <input type="text" placeholder='Username' name='username' />
                <button>Search</button>
            </form>
            <div className="user">
                <div className="detail">
                    <img src="./avatar.png" alt="" />
                    <span>Jane Doe</span>
                    <button>
                        add user
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddUser