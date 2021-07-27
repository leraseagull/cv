import Научиться from '../images/Научиться.jpg';
import Конвертер from '../images/Конвертер.jpg';
import Путешествия from '../images/Путешествия.jpg';
import Mesto from '../images/Mesto.jpg';

function Projects() {
        return (
            <div className="cards">
                <h2 className="cards__name">Моё портфолио</h2>
                <ul className="cards__list">
                    <li className="card">
                        <a href="https://leraseagull.github.io/how-to-learn/" rel = "noreferrer" target="_blank"><img src={Научиться} className="card__photo" alt="Фото проекта"/>
                        </a>
                        <p className="card__description">Этот сайт создан, чтобы мотивировать 
                        людей учиться. В нем собрана информация о методах, которые 
                        помогут запомнить информацию, 
                        ссылки на эти источники (видео, статьи, книги).</p>
                        <p className="card__title">Научиться учиться</p>
                    </li>
                    <li className="card">
                        <img src={Путешествия} className="card__photo" alt="Фото проекта"/>
                        <p className="card__description">Сайт о путешествии по России. Здесь дана информация о живописных уголках
нашей страны и ссылки на сторонние источники с дополнительной
информацией (расписание поездов, карты, погода и пр.).
Стек технологий: HTML и CSS, Адаптивная и семантическая верстка, БЭМ, БЭМ
Nested, Flexbox/Grid, GitHub, Figma.</p>
                        <p className="card__title">Путешествия по России</p>
                    </li>
                    <li className="card">
                        <img src={Mesto} className="card__photo" alt="Фото проекта"/>
                        <p className="card__description">Данный проект представляет собой личную галерею картинок, с возможностью
регистрации/авторизации, редактирования своего профиля, дoбавления/
удаления картинок и проставления лайков. Проект подключен к серверу и вся
информация сохраняется на нём
Стек технологий: HTML и CSS, Java Script, React JS, ООП, Адаптивная и
семантическая верстка, БЭМ, БЭМ Nested, Flexbox/Grid, Webpack,
Медиазапросы, GitHub, Figma.
</p>
                        <p className="card__title">Mesto</p>
                    </li>
                    <li className="card">
                        <img src={Конвертер} className="card__photo" alt="Фото проекта"/>
                        <p className="card__description">Это сервис конвертации валюты. 
                        Ежеденевные данные о стоимости валюты получаем по API Центрального Банка РФ.
                        Стек технологий: HTML и CSS, Java Script, React JS, БЭМ, БЭМ Nested, Flexbox</p>
                        <p className="card__title">Конвертер валют</p>
                    </li>
                </ul>
                
                </div>
        );
}

export default Projects;