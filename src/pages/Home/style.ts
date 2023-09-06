import { styled } from "styled-components";
import image from '../../assets/37/image/lado-direito.png'
export const Container = styled.div`
height:100vh;

display: flex;
flex: 1;
justify-content:center;
gap: 80px;
align-items: center;
background-color: #F2F4FD;
width: 100%;
img.background{
    /* 50% da largura da tela, altura automática */
    /* Alinhar a imagem no canto superior direito */
    position: absolute;/* Evitar a repetição da imagem */
    right: 0;
    top: 0;
    height: 112%;
    z-index: 0;
    width: 55%;
}
img.card{
    z-index: 1;
    margin-top: -4rem;
    width: 45%;
}

h1{
    color: var(--red-color);
}


@media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  height: 100%;
  div.area-text{
    padding: 100px 10px;
  }
  .card, .background {
    display: none;
  }
}




`
