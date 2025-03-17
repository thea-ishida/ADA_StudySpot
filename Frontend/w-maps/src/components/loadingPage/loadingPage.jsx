import React, {useState} from "react";
import "./loadingPage.css"
import { useNavigate } from "react-router";


// 100vh = view height (takes up 100% of the view height)
// 100 vw = view width
const LoadingPage = () => {

    const navigate = useNavigate();

    const navNextPage = () => {
        navigate('/login', {replace: false})

    }


    const [allow, setAllow] = useState(false);
    return (
        <div className="grid grid-cols-1 grid-rows-4">
            
            <div>
                <h1>Enable Location</h1>
            </div>
            <input
            type="text"

            >
            </input>
            <div>
                <p> hello </p>
                <div>
                    <button onClick={navNextPage}>
                        allow
                    </button>
                
                </div>
            </div>
            LoadingPage
        </div>
    )
}


export default LoadingPage;