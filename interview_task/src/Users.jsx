import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const resposne = await (
      await fetch(
        "https://randomuser.me/api?results=20&inc=name,id,picture,cell&nat=in"
      )
    ).json();
    console.log(resposne.results);
    setUsers(resposne.results);
  };
  const handleSearch=(e)=>{
    const userSearch=e.target.value.toLowerCase()
    if(e.target.value.length > 0){
        const newUsers = users.filter((usr)=> usr.name.first.toLowerCase().indexOf(userSearch) > -1 || usr.name.last.toLowerCase().indexOf(userSearch)>-1)
        setUsers(newUsers)
    }else{
        getAllUsers()
    }
   
}
const handleUserInfo=(user)=>{
    console.log(user)
}
  return (
    <div>
      <div className="row">
        <div className="col"></div>
        <div className="col">
            <div className="searchUsers">
                <input type="text" name="" id="search" onChange={(e)=>{handleSearch(e)}}/>
            </div>
         <div className="mainUsers">
         {users.map((user, i) => (
            <div key={i} className="userBox" onClick={()=>{handleUserInfo(user)}}>
              <div className="userImage">
                <img src={user.picture.thumbnail} alt="" />
              </div>
              <div className="userDetails">
                <div className="userName">
                {user.name.title} {user.name.first} {user.name.last}
                </div>
                <div className="userContact">
                    {user.cell}
                </div>
              </div>
            </div>
          ))}
         </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Users;
