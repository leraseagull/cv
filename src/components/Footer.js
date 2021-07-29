import arrow from '../images/arrow.svg';
import logo from '../images/logo.svg';
import vk from '../images/vk_color_white.svg';

function Footer() {
        return (
            <footer className="footer">
                <div className="footer__container-logo">
                <img src={logo} className="footer__logo" alt="Логотип" href="#" target="_self" />
                <p className="footer__logo-name">Lera Seagull</p>
                </div>
                <div className="footer__info-container">
                <a href="mailto:leria.seagull@gmail.com?" rel = "noreferrer" target="_blank" className="footer__info"><p>Напиши мне</p><img src={arrow} className="footer__info-image" alt="стрелка"/></a>
                <a href="https://github.com/leraseagull" rel = "noreferrer" target="_blank" className="footer__info"><p>Github</p><img src={arrow} className="footer__info-image" alt="стрелка" /></a>
                </div>
                <p className="footer__copyright">Copyright &copy; 2021 Валерия Чайка</p>
                <nav className="footer__column">
                    <h3 className="footer__column-name">Соцсети</h3>
                    <ul className="footer__column-links">
                        <li>
                            <a className="footer__column-link" rel="noreferrer" href="https://vk.com/leraseagull" target="_blank">
                                <img className="footer__icon" src={vk} alt="ВКонтакте"></img>
                            </a>
                        </li>
                        <li>
                        <a className="footer__column-link" rel="noreferrer" href="https://vk.com/leraseagull" target="_blank">
                                <img className="footer__icon" src={vk} alt="ВКонтакте"></img>
                            </a>
                        </li>
                        <li>
                        <a className="footer__column-link" rel="noreferrer" href="https://vk.com/leraseagull" target="_blank">
                                <img className="footer__icon" src={vk} alt="ВКонтакте"></img>
                            </a>
                        </li>
                    </ul>
                </nav>
            </footer>
        );
}

export default Footer;