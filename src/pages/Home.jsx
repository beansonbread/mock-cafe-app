import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    
    const redirectMenu = () => {
        navigate('/menu');
    };

    return (
        <div className="mainCard">
            <h1>Welcome to ____</h1>
            <button onClick={redirectMenu}>Order Now</button>
        </div>
    )
}

export default Home;