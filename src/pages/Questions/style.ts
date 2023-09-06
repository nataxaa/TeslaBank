import { styled } from "styled-components";

export const Container = styled.div`
    
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;

    span{
        color: var(--red-color);
    }

    h1{
        margin-bottom: 30px;
    }

    ul{
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 40px;
    }

    li{
        display: flex;
        align-items: center;
        padding: 15px 0;
    }

    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px 10px;
        height: 100%;
    }

`