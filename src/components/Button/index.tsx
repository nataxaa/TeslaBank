import { Container } from "./style";

interface ButtonProps{
    textButton: string;
}
export function Button({textButton}:ButtonProps){

    return(
        <Container>
            {textButton}
        </Container>
    )
}