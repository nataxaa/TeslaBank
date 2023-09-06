import { Container } from "./style";
import image from '../../assets/37/image/mobile.svg'
import dollar from '../../assets/37/image/dollar-sign.svg'
import phone from '../../assets/37/image/smartphone.svg'
import smile from '../../assets/37/image/smile.svg'



export function SecondPage(){
    return(
        <Container>
         
            
            <img className="image" src={image} alt="" />
            <div className="area-text">
                <h1>Abra sua conta <span>gratuita!</span></h1>
                <p >
                    Envie e receba dinheiro de forma mais prática e rápida. 
                    Faça Pix, TEDs e transferências com agendamento para todos 
                    os bancos sem pagar nada.
                </p>
                <ul>
                    <li>
                        <img className="icon" src={dollar} alt="" />
                        <div>
                            <h3>Seu dinheiro redendo mais</h3>
                            <p>rende mais que a poupança e você resgata quando quiser</p>
                        </div>
                    </li>
                    <li>
                        <img className="icon" src={phone} alt="" />
                        <div>
                            <h3>Seu dinheiro redendo mais</h3>
                            <p>rende mais que a poupança e você resgata quando quiser</p>
                        </div>
                    </li>
                    <li>
                        <img className="icon" src={smile} alt="" />
                        <div>
                            <h3>Seu dinheiro redendo mais</h3>
                            <p>rende mais que a poupança e você resgata quando quiser</p>
                        </div>
                    </li>
                </ul>
            </div>
        </Container>
    )
}