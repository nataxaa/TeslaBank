import { Container } from "./style";
import logo from '../../assets/37/image/teslabank.svg'
import logo_apple from '../../assets/37/image/logo-apple.svg'
import logo_googleaple from '../../assets/37/image/logo-googleplay.svg'

export function Links(){
    return(
        <Container>
            <div className="area-text">
                <h1>Uma nova experiência em <span>serviços financeiros</span>. Somos digital, somos TeslaBank. </h1>
                <p>Donec venenatis at turpis at ornare. Pellentesque a quam vel dui lacinia dapibus in sit amet dolor.</p>
                <div style={{display:'flex', alignItems:"center", gap: '20px', marginTop:'20px'}}>
                    <img src={logo_apple} alt="" />
                    <img src={logo_googleaple} alt="" />
                </div>
            </div>
            <img src={logo} alt="" />
        </Container>
    )
}