import { useState } from "react";
import { FcVideoProjector } from "react-icons/fc";
import { Link } from "react-router-dom";
import { registerRequest } from "../../api/AuthApi";
import { showNotification } from "../Utilities/toast";

export const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(18);

  const registerHandler = async() => {
    const registeredUser = {
        name: name,
        username: username,
        password: password,
        age: parseInt(age),
        image: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/11260542/original/f29f6dabd81ea750bd53dee5bc3c544e13710cfc/draw-a-cute-chibi-avatar-from-your-photo.jpg",
        uploads: [],
        likedVideos: [],
        watchLaterVideos: [],
        watchedVideos: []
    }
    const { message } = await registerRequest(registeredUser);
    showNotification(message);
  }

  return (
    <>
      <div className="login">
        <div className="container-login">
          <FcVideoProjector size={100} />
          <p className="txt-xl txt-700">Register</p>
          <div className="w-100 mg-t-2">
            <div className="container-inputs">
              <p className="pd-05 mg-05">Name</p>
              <input onChange={(e) => setName(e.target.value)} className="card-w-20 pd-05 mg-05" type="text" placeholder="Enter Name"/>
            </div>
            <div className="container-inputs">
              <p className="pd-05 mg-05">Username</p>
              <input onChange={(e) => setUsername(e.target.value)} className="card-w-20 pd-05 mg-05" type="text" placeholder="Enter Username"/>
            </div>
            <div className="container-inputs">
              <p className="pd-05 mg-05">Password</p>
              <input onChange={(e) => setPassword(e.target.value)} className="card-w-20 pd-05 mg-05" type="password" placeholder="Enter Password"/>
            </div>
            <div className="container-inputs">
              <p className="pd-05 mg-05">Age</p>
              <input onChange={(e) => setAge(e.target.value)} className="card-w-20 pd-05 mg-05" type="number" placeholder="Enter Age"/>
            </div>
          </div>
          <button onClick={() => registerHandler()} className="mg-tb-1 pd-lr-1 bdr-thick bdr-yellow bdr-rad-m btn btn-secondary-yellow" type="submit">Submit</button>
          <Link className="nav-link txt-deco-none txt-white" to="/">Go back home</Link>
        </div>
        <div id="notification-container"></div>
      </div>
    </>
  );
};
