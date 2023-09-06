import { Card, Container } from "./style";

export function FeedBack(){
    return(
        <Container>
            <span>#DEPOIMENTOS</span>
            <h2>TeslaBank fora das telinhas: Veja o que falam sobre nosso serviço</h2>
            <div className="area-cards">
                <Card>
                    <h3>nikola tesla</h3>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nisl quis viverra tincidunt. ”</p>
                </Card>
                <Card>
                    <h3>nikola tesla</h3>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nisl quis viverra tincidunt. ”</p>
                </Card>
                <Card>
                    <h3>nikola tesla</h3>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nisl quis viverra tincidunt. ”</p>
                </Card>
            </div>
        </Container>
    )
}