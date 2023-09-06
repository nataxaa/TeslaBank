import { styled } from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
    gap: 6rem;
    background-color: #F8F9FF;
    img{
        width: 12%;
    }
    span{

        color: var(--red-color);
    }
    p{
        width: 32rem;
        color:#646466;
    }
    li{
        display: flex;
        margin-bottom: 30px;
    }
    ul{
        list-style: none;
    }
    img.icon{
        background-color: #FFFFFF;
        padding: 10px 10px;
        border-radius: 4px;
        margin-right: 20px;
    }


@media (max-width: 768px) {
    display: flex;
    flex: 1;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 90px 10px;
    div.area-text{
        width: 100%;
        p{
            width: 100%;
        }
    }
  .image{
    display: none;
  }
  .icon{
    display: none;
  }
}

`