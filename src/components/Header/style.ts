import { styled } from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #F2F4FD;
    padding: 20px 30px;
    .list-mobile{
        display: none;
    }
    ul{
        display: flex;
        align-items: center;
        list-style: none;
    }

    li{
        padding: 0 15px;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .icon{
        color: var(--red-color);
    }
    

    p{
        padding-right: 40px;
        color: #FFFFFF;
        display: flex;
        z-index: 1;
        align-items: center;
        gap: 6px;
        font-size: 1.2rem;
    }

    @media (max-width: 768px) {
        width: 100% ;
        background-color: var(--red-color);
        padding: 5px 20px;
        .list-mobile{
            display: flex;
            align-items: center;
            justify-content: space-evenly;
        }
        .list{
            display: none;
        }
        .icon-hamburguer{
            color: #FFFFFF;
           font-size: 2rem;
        }
        padding: 0;
        p{
            padding: 15px 5px;
        }
    }
`