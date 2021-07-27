import я from '../images/я.jpg';
import arrow from '../images/arrow.svg';

function About() {
        return (
            <div className="about">
                <div className="about__container">
                <p className="about__location">Санкт-Петербург, Россия</p>
                <h1 className="about__hi">Привет!</h1>
                <p className="about__text">Меня зовут Валерия Чайка, я начинающий front-end разработчик.<br />В веб-разработке привлекает творческая составляющая и 
                возможность сразу увидеть результат своей работы.
                Я быстро схватываю, люблю разбираться в задачах самостоятельно, 
                без проблем ищу нужную информацию в интернете и 
                несу ответственность за свои поступки.</p>
                <div className="about__info-container">
                <a href="mailto:leria.seagull@gmail.com?" rel = "noreferrer" target="_blank" className="about__info"><p>Напиши мне</p><img src={arrow} className="about__info-image" alt="стрелка"/></a>
                <a href="https://github.com/leraseagull" rel = "noreferrer" target="_blank" className="about__info"><p>Github</p><img src={arrow} className="about__info-image" alt="стрелка" /></a>
                </div>
                </div>
                <div className="about__overlay">
                <img src={я} className="about__photo" alt="Мое фото" />
                </div>
            </div>
        );
}

export default About;