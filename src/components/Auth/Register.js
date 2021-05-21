import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <>
      <h1>Register Screen</h1>
      <label>Name<input type="text" placeholder="Enter Name"/></label>
      <label>Username<input type="text" placeholder="Enter Username"/></label>
      <label>Password<input type="password" placeholder="Enter Password"/></label>
      <label>Age<input type="number" placeholder="Enter Age"/></label>
      <button type="submit">Submit</button>
      <Link to="/">Go back home</Link>
    </>
  );
};
