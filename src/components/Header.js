import logo from '../images/logo.svg';


function Header() {
        return (
            <header className="header">
                <img src={logo} className="header__logo" alt="Логотип" href="#" target="_self" />
                <p className="header__logo-name">Lera Seagull</p>
            </header>
        );
}

export default Header;