import logo from '../assets/investment-calculator-logo.png';
import UserInput from './UserInput.jsx';

export default function Header() {
    return <header id='header'>
        <img src={logo} alt= "Logo showing a money bag"/> 
        <h1>Inverstment Calculator</h1>
        {/* <UserInput/> */}
    </header>
}