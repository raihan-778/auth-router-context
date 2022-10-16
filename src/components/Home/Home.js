import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <div>
      <h2>This is Home page</h2>
      {user?.userName && <h2>Welcome ,{user.userName}</h2>}
    </div>
  );
};

export default Home;
