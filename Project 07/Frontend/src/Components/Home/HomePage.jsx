import axios from "axios";
import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import {createAxios} from '../../Instance';
import { deleteUser, getAllUsers } from "../../redux/apiRequest";
import "./home.css";
import { loginSuccess } from "../../redux/authSlice";

const HomePage = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const userList = useSelector((state) => state.user.users?.allUsers);
  const msg = useSelector((state) => state.user?.msg);
  const dispatch = useDispatch();
  let axiosJwt = createAxios(user, dispatch, loginSuccess);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    deleteUser(user?.accessToken, dispatch, id, axiosJwt);
  };

  useEffect(() => {
    if(!user){
      navigate("/login");
    }
    if(user?.accessToken){
       getAllUsers(user?.accessToken, dispatch, axiosJwt);
    }
  }, [])

  return (
    <main className="home-container">
      <div className="home-title">User List</div>
      <div className="home-role">
        {`Your role: ${user?.isAdmin ? `Admin` : `User`}`}
      </div>
      <div className="home-userlist">
        {userList?.map((user) => {
          return (
            <div className="user-container">
              <div className="home-user">{user.username}</div>
              <div className="delete-user" onClick={() => handleDelete(user._id)}> Delete </div>
            </div>
          );
        })}
      </div>
      <div className="errorMsg">{msg}</div>
    </main>
  );
};

export default HomePage;
