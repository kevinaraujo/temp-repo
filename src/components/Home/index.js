import React, { useContext, useEffect } from "react";
import { Context } from "../../Context";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const { state } = useContext(Context);
    
    useEffect(() => {
        if (!state?.id) {
            navigate('/login');
        }
    
    }, []);

    return (
        <>Welcome { state.username }</>
    )
}

export default Home;

