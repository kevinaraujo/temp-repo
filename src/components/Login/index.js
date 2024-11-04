import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import img from '../../logo.svg';
import { Context } from "../../Context";

const Main = styled.div`
  display: flex;
`;

const FirstColumn = styled.div`
    background-color: teal;
    width: 30%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SecondColumn = styled.div`
    background-color: black;
    width: 70%;
    height: 100vh; 
    display: flex;
    text-align: center;
    justify-content: center;
`;

const Logo = styled.img`
    width: 25%;
    heigth: 25%;
    animation: spin 25s  infinite;

    @keyframes spin {
        from {
            transform: rotate(0deg);  
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const FormSection = styled.div`
    max-width: 400px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 30px;
    color: white;
`;

const Input = styled.input`
    background-color: white;
    border-color: white;
    font-size: 20px;
    height: 30px;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    
    &:hover,  {
        outline: none;
    }
`;

const SubmitButton = styled.button`
    height: 30px;
    font-size: 20px;
    margin-top: 10px;
    background-color: #e3e2e2;
    border-radius: 5px;
    border: 1px solid gray;

    &:hover {
        cursor: pointer;
        background-color: #b6b4b4
    }
`;

const ErrorSpan = styled.span`
    background-color: red;
    color: white;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 10px;
    border-radius: 5px;
    text-align: center;
`;

function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { state, setState } = useContext(Context); 

    useEffect(() => {
        if (state?.id) {
            navigate('/');
        }
    }, []);

    const signin = () => {
        if (!user || !pass) {
            setError(true)
            return;
        } 

        setLoading(true);
        setTimeout(() => {
            setState({
                id: 1,
                username: 'Kevin'
            });
            
            navigate('/');
        }, 2000);
    }

    return (
        <Main>
            <FirstColumn>
                <FormSection>
                    { error && <ErrorSpan>Fields missing</ErrorSpan> }
                    <Title>Login</Title>
                    <Input 
                        type="text" 
                        value={user} 
                        onChange={(e) => setUser(e.target.value)}
                        required
                        />
                    <Input 
                        type="password" 
                        value={pass} 
                        onChange={(e) => setPass(e.target.value)}
                        required
                        />

                    { loading ? 'loading...' :

                        <SubmitButton onClick={signin}>
                            Sign in
                        </SubmitButton>
                    }

                </FormSection>
            </FirstColumn>

            <SecondColumn>
                <Logo src={img} />
            </SecondColumn>
        </Main>
    );
}

export default Login;

