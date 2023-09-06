import { styled } from "styled-components";

export const Container = styled.div`
    padding: 90px 60px 90px;
    div.area-cards{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    h2{
        margin-bottom: 4rem;
    }
    span{
        color: var(--red-color);
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 40px 10px ;
        div.area-cards{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

        }
}
`

export const Card = styled.div`

    h3{
        border-left: 2px solid var(--red-color);
        padding: 5px;
        margin-bottom: 15px;
    }
    p{
        font-size: 12px;
    }
    @media (max-width: 768px){
        margin-bottom: 20px;
        h3{
            padding: 3px;
            margin-bottom: 8px;
        }
    }

`