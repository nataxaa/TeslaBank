import { Container } from "./style";
import image from '../../assets/37/image/cards.svg'
import image2 from '../../assets/37/image/lado-direito.png';
import { Button } from "../../components/Button";



export function Home(){
    return(
        <Container>
            <div className="area-text">
                <h1>TeslaBank Banco 100% digital</h1>
                <p>Abrir uma conta digital nunca foi tão simples!</p>
                <div>
                    <Button textButton="Abrir uma conta"/>
                </div>
            </div>
            <img className="card" src={image} alt="" />
            <img className="background" src={image2} alt="" />
        </Container>
        
    )
}