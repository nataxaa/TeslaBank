import { Container } from "./style";
import mobile from '../../assets/37/image/smartphone.svg'
export function Questions(){
    return(
        <Container>
            <span>#AJUDA</span>
            <h1>Ficou alguma dúvida?</h1>
            <p>Nullam ornare eu nisi fringilla consectetur. Suspendisse potenti. </p>
            <ul>
                <li>
                    <img src={mobile} alt="" />
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <h3>Lorem ipsum dolor sit amet</h3>
                        <p>Vestibulum faucibus risus eu mi volutpat, vel tristique dui rutrum.</p>
                    </div>
                </li>
                <li>
                    <img src={mobile} alt="" />
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <h3>Lorem ipsum dolor sit amet</h3>
                        <p>Vestibulum faucibus risus eu mi volutpat, vel tristique dui rutrum.</p>
                    </div>
                </li>
                <li>
                    <img src={mobile} alt="" />
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <h3>Lorem ipsum dolor sit amet</h3>
                        <p>Vestibulum faucibus risus eu mi volutpat, vel tristique dui rutrum.</p>
                    </div>
                </li>
            </ul>
        </Container>
    )
}