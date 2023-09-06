import { Card, Container } from "./style";
import icon1 from '../../assets/37/image/credit-card.svg'
export function ThirdPage(){
    return(
        <Container>
            <span>#INOVAÇÃO</span>
            <h2>Quais as vantagens de usar TeslaBank?</h2>
            <div className="grid-cards">
                <Card>
                    <img src={icon1} alt="" />
                    <h3>Cartão TeslaBank</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aenean vitae leo lacinia, tempus odio hendrerit, ultricies diam.
                    </p>
                    <span>Veja as opções</span>
                </Card>
                <Card>
                    <img src={icon1} alt="" />
                    <h3>Cartão TeslaBank</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aenean vitae leo lacinia, tempus odio hendrerit, ultricies diam.
                    </p>
                    <span>Veja as opções</span>
                </Card>
                <Card>
                    <img src={icon1} alt="" />
                    <h3>Cartão TeslaBank</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aenean vitae leo lacinia, tempus odio hendrerit, ultricies diam.
                    </p>
                    <span>Veja as opções</span>
                </Card>
            </div>
            <div className="grid-cards2">
                <Card>
                    <img src={icon1} alt="" />
                    <h3>Cartão TeslaBank</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aenean vitae leo lacinia, tempus odio hendrerit, ultricies diam.
                    </p>
                    <span>Veja as opções</span>
                </Card>
                <Card>
                    <img src={icon1} alt="" />
                    <h3>Cartão TeslaBank</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aenean vitae leo lacinia, tempus odio hendrerit, ultricies diam.
                    </p>
                    <span>Veja as opções</span>
                </Card>
                <Card>
                    <img src={icon1} alt="" />
                    <h3>Cartão TeslaBank</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aenean vitae leo lacinia, tempus odio hendrerit, ultricies diam.
                    </p>
                    <span>Veja as opções</span>
                </Card>
            </div>
        </Container>
    )
}