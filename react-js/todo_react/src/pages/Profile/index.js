
import "../../App.css";
import { useState } from "react";
import Swal from "sweetalert2";
const Profile = ()=> {

  const [inputText, setInputText] = useState("");
  const [user, setUser] = useState(null);
  

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  async function searchUser() {

    try {
      const response = await fetch(`https://api.github.com/users/${inputText}`);
      const data = await response.json();

      if (data.message === "Not Found") {
        Swal.fire("Error", "El usuario que buscas no existe", "error");
        return;
      }
      setUser(data);
      setInputText("");
    } catch (error) {
      console.log("Error", error);
    }
  }
    return (
        <div className="container">
     
      <div className="section-1">
        <h4 className="title">devfinder</h4>
        <button 
       
        className="btn-mode">
          LIGHT <img width="20" src="./images/sun.png" alt="" />
        </button>
      </div>
    
      <div className="search-container">
        <div className="input-container">
          <img width="15" src="./images/search.png" alt="" />
          <input
             value={inputText}
              onChange={handleInputChange}
              className="input-search"
            type="text"
            placeholder="Search GitHub username..."
          />
        </div>
        <div>
          <button  onClick={searchUser} className="btn-search">Search</button>
        </div>
      </div>
     
      <div className="information-container">
       
        <div className="image-container">
          <img width="100" src={user?.avatar_url} alt="" />
        </div>
       
        <div className="description-container">
        
          <div className="user-date-container">
            <h2>{user?.name}</h2>
            <p>{user?.created_at}</p>
          </div>
          
          <div className="user-bio-container">
          <p>@{user?.login}</p>
          <p>{user?.bio}</p>
          </div>
        
          <div className="card-information">
          <div>
            <h5>Repos</h5>
            <h2>{user?.public_repos}</h2>
          </div>
          <div>
            <h5>Followers</h5>
            <h2>{user?.followers}</h2>
          </div>
          <div>
            <h5>Following</h5>
            <h2>{user?.following}</h2>
          </div>
          </div>
         
          <div className="info-container">
          <div>
            <p>
              <img width="15"  alt="" />
              &nbsp;{user?.location}
            </p>
            <p>
              <img width="15"  alt="" />
              &nbsp;{user?.blog}
            </p>
          </div>
          <div>
            <p>
              <img width="15"  alt="" />
              &nbsp;{user?.twitter_username}
            </p>

            <p>
              <img width="15"  alt="" />
              &nbsp;{user?.company}
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Profile;