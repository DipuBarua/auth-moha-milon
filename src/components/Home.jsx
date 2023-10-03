import { useContext } from "react";
import { AuthContext } from "../contextProvider/AuthProvider";

const Home = () => {
    const authInfo = useContext(AuthContext);
    console.log(authInfo.name);
    return (
        <div>

        </div>
    );
};

export default Home;