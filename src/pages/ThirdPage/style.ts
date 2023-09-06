import { styled } from "styled-components";

export const Container = styled.div`
    background-color: #F2F4FD;
    padding: 60px 60px 10px;
    height: 100vh;
    div.grid-cards{
        width: fit-content;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
        margin-bottom: 20px;
    }
    div.grid-cards2{
        width: fit-content;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
        margin-bottom: 20px;
        margin-left: 6rem;
    }

    h2{
        margin-bottom: 2rem;
    }

    span{
        color: var(--red-color);
    }

    @media (max-width: 768px) {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 30px 10px;
        div.grid-cards2, div.grid-cards {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-left: 0;
            width: 90%;
        }
}

`

export const Card = styled.div`
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 10px 10px 40px 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 20rem;
    img{
        width: 2rem;
    }
    p{
        width: 15rem;
        font-size: 12px;
    }
`