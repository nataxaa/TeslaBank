import { Container } from "./style";
import logo from '../../assets/37/image/logo.svg'
import {BiSolidDownArrow} from 'react-icons/bi'
import {BsFillPersonFill} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
export function Header(){
    return(
        <Container>
            <ul className="list">
                <li><img style={{width: '70%'}} src={logo} alt="" /></li>
                <li>TeslaBank <BiSolidDownArrow className="icon"/></li>
                <li>Conta Digital <BiSolidDownArrow className="icon"/></li>
                <li>Para Você <BiSolidDownArrow className="icon"/></li>
            </ul>

            <ul className="list-mobile">
                <li><GiHamburgerMenu className="icon-hamburguer"/></li>
            </ul>
                <p>Login <BsFillPersonFill/></p>
        </Container>
    )
}