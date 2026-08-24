import React from 'react'
import "./classmates.scss"
import {useState} from 'react'
import {motion} from 'framer-motion'
import { Link, useOutletContext} from 'react-router-dom';
import AnimatedLink from '../../components/animated/AnimatedLink';
import Footer from '../../components/footer/footer';

const classmates = () => {
    const {pallete, theme, setTheme} = useOutletContext();

    const [switchPhoto, setSwitchPhoto] = useState('hidden.svg')
    const [switchName, setSwitchName] = useState('')
    const [switchInfo, setSwitchInfo] = useState('')

    const defaultPhoto = switchName === '' ? true : false

    const [infoClassmate, setInfoClassmate] = useState('info_classmate')

    const SwichInfo = (event) => {
          setSwitchPhoto(event.currentTarget.dataset.photo)
          setSwitchName(event.currentTarget.dataset.name);
          setSwitchInfo(event.currentTarget.dataset.info);
          setInfoClassmate('ssass')
    };

  return (
    <div style={{background: pallete.background}}>
        <nav className='banner-nav'>
            <div className="content-nav">
                <div className="social">
                    <div className="dropdown">
                        <AnimatedLink to='/' className='header-nav'>Назад</AnimatedLink>
                    </div>
                    <button onClick={() => setTheme(theme === 'black' ? 'white' : 'black')} className='header-nav'>Змінити тему</button>
                </div>
            </div>
        </nav>
    <div className="banner_about">
        <h1 className='banner_classmates_h1'>CLASSMATES</h1>
        <img className='about-svg1' src='classmates_banner.svg'/>
    </div>
    <main className='main-classmate-content'>
      <div className='classmate_profile'>
        <div style={{background: defaultPhoto ? '#8080808a' : 'none'}} className="photo_classmate">
            <img className='photo' src={switchPhoto} alt="" />
            <div style={{background: defaultPhoto ? '#ffffff5d' : 'none'}} className="load_anim"></div>
        </div>
        <div className={infoClassmate} style={{width:"300px"}}>
            <h1 style={{color: pallete.color, minHeight: '45px'}}>{switchName}</h1>
            <p style={{color: pallete.color, minHeight: '45px'}}>{switchInfo}</p>
            <div className="load_info"></div>
        </div>
      </div>
      <ul className='classmate_list'>
        <li className="classmate" data-name="Абрамчук Павло" data-info="Не хоче бути частиною класу, бо він самотній вовк" data-photo="abrams.png" onClick={SwichInfo}>
        <img src="" alt="" />
            <h1 style={{textAlign:"center"}}>Абрамчук Павло</h1>
        </li>
        <li className="classmate" data-name="Андрейко Віка" data-info="Пішла після 4 класу" data-photo="andreiko.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Андрейко Вікторія</h1>
        </li>
        <li className="classmate" data-name="Андрейко Сергій" data-info="Пішлов після 9 класу. Если вам плюют в спину, значит не смогли переплюнуть" data-photo="serii.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Андрейко Сергій</h1>
        </li>
        <li className="classmate" data-name="Багриновський Максим" data-info="Пішлов після 9 класу в ФКЕП. Зараз в США, а ви і дальше говоріть, що в ФКЕП поступають без перспективні люди" data-photo="bagr.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Багриновський Максим</h1>
        </li>
        <li className="classmate" data-name="Баратова Саміра" data-info="Один клас, одна школа, один фюрер" data-photo="ssamirka.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Баратова Саміра</h1>
        </li>
        <li className="classmate" data-name="Басалига Женя" data-info="Ам-ам-ам-ам-ам-ам" data-photo="nu_tipa_div4inka.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Басалига Женя</h1>
        </li>
        <li className="classmate" data-name="Бойко Віка" data-info="Ні блін Гуцул" data-photo="boiko.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Бойко Віка</h1>
        </li>
        <li className="classmate" data-name="Вінтонюк Настя" data-info="'Ісус Воскрес'? Пруфи" data-photo="vintoniuk.png" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Вінтонюк Настя</h1>
        </li>
        <li className="classmate" data-name="Глодан Христина" data-info="Так так, не дивуйтеся, це особа жіночої статі😏" data-photo="glodan.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Глодан Христина</h1>
        </li>
        <li className="classmate" data-name="Данилюк Ярослав" data-info="Пішов після 9 класу. Ярік Воділа, привіт пострижись" data-photo="daniluk.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Данилюк Ярослав</h1>
        </li>
        <li className="classmate" data-name="Дацишин Вероніка" data-info="Дуже крута🐊" data-photo="GahihNatihin.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Дацишин Вероніка</h1>
        </li>
        <li className="classmate" data-name="Демкович Богдан" data-info="Ну тіпа сасі" data-photo="demik.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Демкович Богдан</h1>
        </li>
        <li className="classmate" data-name="Дем'янчук Катерина" data-info="'Нічого не знаю, я хотіла поступити'" data-photo="katia.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Дем'янчук Катерина</h1>
        </li>
        <li className="classmate" data-name="Добромільський Даніель" data-info="Співак. Чувак дійсно знається в піснях" data-photo="dobromilskii.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Добромільський Даніель</h1>
        </li>
        <li className="classmate" data-name="Дроздович Вікторія" data-info="Пішла після 8 класу. Ну і нехай пиздує в свою загниваючу Канаду" data-photo="drozd.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Дроздович Вікторія</h1>
        </li>
        <li className="classmate" data-name="Дубова Вікторія" data-info="Пішла після 5 класу. Мудрий дуб" data-photo="dubova.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Дубова Вікторія</h1>
        </li>
        <li className="classmate" data-name="Єкимець Єва" data-info="Прикольно, ім'я і призвище з одної літери" data-photo="ev.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Єкимец Єва</h1>
        </li>
        <li className="classmate" data-name="Жара Богдана" data-info="Займається Мюінгом" data-photo="zhara.png" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Жара Богдана</h1>
        </li>
        <li className="classmate" data-name="Жарська Аліна" data-info="Хз для чого два подібних прізвища" data-photo="she_odna_zhara.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Жарська Аліна</h1>
        </li>
        <li className="classmate" data-name="Жеребятєва Наталя" data-info="Доєдналася в 9 класі." data-photo="LuhanskChildren.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Жеребятєва Наталя</h1>
        </li>
        <li className="classmate" data-name="Золото Дарина" data-info="Напевно дійсно золота" data-photo="zolotoKarpat.png" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Золото Дарина</h1>
        </li>
        <li className="classmate" data-name="Зощак Анастасія" data-info="Пішла після 7 класу. О тааа, вже відчуваю запах срачів в чаті" data-photo="bebra.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Зощак Анастасія</h1>
        </li>
        <li className="classmate" data-name="Івасишин Аліна" data-info="Пішла після 9 класу. Похожа на Каріну" data-photo="alinka_i.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Івасишин Аліна</h1>
        </li>
        <li className="classmate" data-name="Івасишин Каріна" data-info="Пішла після 9 класу. Похожа на Аліну" data-photo="karinka_i.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Івасишин Каріна</h1>
        </li>
        <li className="classmate" data-name="Казнох Софія" data-info="Пішла після 9 класу. Не казнох, а казнити🦅🦅🦅" data-photo="kaznoh.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Казнох Софія</h1>
        </li>
        <li className="classmate" data-name="??? Соломія" data-info="Пішла після 1 класу." data-photo="soloma.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>??? Соломія</h1>
        </li>
        <li className="classmate" data-name="Кіт Арсен" data-info="Пішов після 9 класу. Все ж він зміг поступити🙏" data-photo="kit.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Кіт Арсен</h1>
        </li>
        <li className="classmate" data-name="Кіщук Анастасія" data-info="Угадайте що в неї на лиці" data-photo="kizhuk.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Кіщук Анастасія</h1>
        </li>
        <li className="classmate" data-name="Комар Влад" data-info="От требуло якісь бабі сидіти і придумувати прізвища, і таке надумати" data-photo="komar.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Комар Владислав</h1>
        </li>
        <li className="classmate" data-name="Крупа Ірина" data-info="Пішла після 7 класу. Тихенько покинула класу, но в 10 вернулась" data-photo="gre4ka.png" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Крупа Ірина</h1>
        </li>
        <li className="classmate" data-name="Лінкевич Максим" data-info="Ще один футBALLіст" data-photo="link.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Лінкевич Максим</h1>
        </li>
        <li className="classmate" data-name="Лоншакова Вероніка" data-info="Пішлов після 9 класу. Пішла на спеціальність по бізнесу" data-photo="long.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Лоншакова Вероніка</h1>
        </li>
        <li className="classmate" data-name="Маланчик Володимир" data-info="Пішов після 7 класу. А ви знали, що фраза: 'Щоб в тебе в сраці сиділи йожики!' - це його фраза" data-photo="vovka.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Маланчик Володимир</h1>
        </li>
        <li className="classmate" data-name="Мачкур Юра" data-info="На початку війни вкрав декілька танків і віддав 100 штук максиму, стояв з Максимом біля стін Кремля, проводив концерт з Максимом в 22:00 за нігерійським часом" data-photo="ribne.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Мачкур Юра</h1>
        </li>
        <li className="classmate" data-name="Микула Олег" data-info="Пішов після 4 класу. Майнкрафтер" data-photo="olebeh.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Микула Олег</h1>
        </li>
        <li className="classmate" data-name="Олешко Богдан" data-info="Торгує на базарі всяким" data-photo="oleshko.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Олешко Богдан</h1>
        </li>
        <li className="classmate" data-name="Павлюк Іра" data-info="Ірка Шкірка" data-photo="irkaShkirka.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Павлюк Іра</h1>
        </li>
        <li className="classmate" data-name="Падко Христина" data-info="Хрісті" data-photo="padko.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Падко Христина</h1>
        </li>
        <li className="classmate" data-name="Петрук Андрій" data-info="Пішов після 7 класу. Вор" data-photo="vor.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Петрук Андрій</h1>
        </li>
        <li className="classmate" data-name="Пиво Марта" data-info="Старий Бог здєсь🤙" data-photo="marta.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>'Пиво' Марта</h1>
        </li>
        <li className="classmate" data-name="Пиво Влад" data-info="ааааа нефор" data-photo="vlaxd.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>'Пиво' Влад</h1>
        </li>
        <li className="classmate" data-name="Пінчук Михайло" data-info="Він чисто just dance" data-photo="pit4uk.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Пінчук Михайло</h1>
        </li>
        <li className="classmate" data-name="Путько Тарас" data-info="Пішов після 3 класу. Торможеніє - тоже двіженіє" data-photo="putin.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Путько Тарас</h1>
        </li>
        <li className="classmate" data-name="Пухта Станіслав" data-info="Пішов після 9 класу. Лучше 15 сантиметров спереди, чем 25 сзади" data-photo="puh.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Пухта Станіслав</h1>
        </li>
        <li className="classmate" data-name="Рибак Анастасія" data-info="Пішла після 9 класу. Гадості курить" data-photo="riba.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Рибак Анастасія</h1>
        </li>
        <li className="classmate" data-name="Самайлова Софія" data-info="Ну типу Зощак, як мені поснив Даніель" data-photo="zoshak2.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Самайлова Софія</h1>
        </li>
        <li className="classmate" data-name="Свирида Назар" data-info="З нефора в норміса - це його шлях👆" data-photo="sverlo.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Свирида Назар</h1>
        </li>
        <li className="classmate" data-name="Семків Христина" data-info="Альтушка з Дії" data-photo="krsq.png" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Семків Христина</h1>
        </li>
        <li className="classmate" data-name="Середюк Артем" data-info="Пішов після 9 класу. Де він і що з ним зараз? Х#й його знає" data-photo="wednesday.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Середюк Артем</h1>
        </li>
        <li className="classmate" data-name="Сидор Андрій" data-info="Дійсно, Сидор Андрій" data-photo="sidor.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Сидор Андрій</h1>
        </li>
        <li className="classmate" data-name="Скидан Дмитро" data-info="Пішов після 8 класу, відучившись в школі менше року. Зара сидить в Польщі цей ухилянт" data-photo="dima.png" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Скидан Дмитро</h1>
        </li>
        <li className="classmate" data-name="Скрипник Анастасія" data-info="Пішла після 9 класу. Слово - не горобець, та й ніхто не горобець крім самого горобця" data-photo="scripka.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Скрипник Анастасія</h1>
        </li>
        <li className="classmate" data-name="Смирнова Віра" data-info="Мирнова" data-photo="sid.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Смирнова Віра</h1>
        </li>
        <li className="classmate" data-name="Совтус Віталій" data-info="Дуже ховається" data-photo="sovtus.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Совтус Віталій</h1>
        </li>
        <li className="classmate" data-name="Стасів Наталя" data-info="Пішла після 9 класу. Багато оскала вчителів, заслужено" data-photo="stasiv.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Стасів Наталя</h1>
        </li>
        <li className="classmate" data-name="Урядка Владислав" data-info="Урядовець ТрО. Лучше пернуть как медведь, чем как девочка шипеть" data-photo="uryad.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Урядка Владислав</h1>
        </li>
        <li className="classmate" data-name="Федірко Андрій" data-info="Пішов після 4 класу, відучившись в школі менше року." data-photo="fedirko.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Федірко Андрій</h1>
        </li>
        <li className="classmate" data-name="Хмельовська Яна" data-info="Пішла після 9 класу. Хмелівська🚜" data-photo="hmel.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Хмельовська Яна</h1>
        </li>
        <li className="classmate" data-name="Юхимук Вікторія" data-info="Пішла після 9 класу. Пішла в інший ліцей" data-photo="youhimuk.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Юхимук Вікторія</h1>
        </li>
        <li className="classmate" data-name="Яворський Станіслав" data-info="Пішов після 7 класу. Дропнувся на парашуті з гори" data-photo="yavorina.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Яворський Станіслав</h1>
        </li>
        <li className="classmate" data-name="Яцков Тарас" data-info="Пішов після 9 класу в ФКЕП. Власник сайту, затягує з ним ніби сталкер робить" data-photo="moskal.jpg" onClick={SwichInfo}>
            <h1 style={{textAlign:"center"}}>Яцков Тарас</h1>
        </li>
      </ul>
    </main>
    <Footer />
    </div>
  )
}

export default classmates