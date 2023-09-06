import { styled } from "styled-components";

export const Container = styled.div`

background-color: #F2F4FD;
padding: 90px 60px 90px 60px;
display: flex;

align-items: center;
justify-content: center;
gap:20px;

span{
    color: var(--red-color);
}

div.area-text{
    width: 38rem;
}

@media (max-width: 768px) {
    
    img{
        display: none;
    }
  
}


`