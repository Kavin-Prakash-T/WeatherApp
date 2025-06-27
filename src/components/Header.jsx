import logo from '../assets/logo.webp';
import "../App.css";
function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="logo" />
        <div>Weather App</div>
      </header>
    </>
  )
}

export default Header