import axios from "axios";
import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom';
import jwt_decode from 'jwt-decode'
import { deleteUser, getAllUsers } from "../../redux/apiRequest";
import "./home.css";
import { loginSuccess } from "../../redux/authSlice";

const HomePage = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const userList = useSelector((state) => state.user.users?.allUsers);
  const msg = useSelector((state) => state.user?.msg);
  const dispatch = useDispatch();
  let axiosJwt = axios.create();
  const navigate = useNavigate();

  useEffect(() => {
    if(!user){
      navigate("/login");
    }
    if(user?.accessToken){
      getAllUsers(user?.accessToken, dispatch);
    }
  }, []);

  const handleDelete = (id) => {
    deleteUser(user?.accessToken, dispatch, id);
  };

  const refreshToken = async () => {
    try {
      const res = await axios.post("/v1/auth/refresh",{
        withCredentials: true
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  axiosJwt.interceptors.request.use(
    async (config) => {
      let date = new Date();
        const decodedToken = jwt_decode(user?.accessToken);

        if(decodedToken.exp < date.getTime()/1000){
            const data = await refreshToken();
            const refreshUser = {
              ...user,
              accessToken: data.accessToken,
              refreshToken: data.refreshToken
            };
            dispatch(loginSuccess(refreshUser));
            config.headers["token"] = "Bearer " + data.accessToken;
        }
        return config;

    },
    (err) =>{
      return Promise.reject(err);
    }
  )

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
