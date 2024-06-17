import React, {useState} from 'react'
import "./oldGuard.scss"
import { Link} from 'react-router-dom';

const safeDocument = typeof document !== 'undefined' ? document : {};

const oldGuard = () => {
    const html = safeDocument.documentElement;
  const { body } = safeDocument;

  const blockScroll = () => {
    if (!body || !body.style || scrollBlocked.current) return;

    const scrollBarWidth = window.innerWidth - html.clientWidth;
    const bodyPaddingRight =
      parseInt(window.getComputedStyle(body).getPropertyValue("padding-right")) || 0;

    html.style.position = 'relative';
    html.style.overflow = 'hidden';
    body.style.position = 'relative';
    body.style.overflow = 'hidden';
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

    scrollBlocked.current = true;
  };

  const allowScroll = () => {
    if (!body || !body.style || !scrollBlocked.current) return;

    html.style.position = '';
    html.style.overflow = '';
    body.style.position = '';
    body.style.overflow = '';
    body.style.paddingRight = '';

    scrollBlocked.current = false;
  };
    const [switchname1, setSwitchname1] = useState('Андрейко Сергій')
    const [switchinfo1, setSwitchinfo1] = useState('Пішлов після 9 класу. Если вам плюют в спину, значит не смогли переплюнуть')
    const SwichGuard1 = (event) => {
        const dataName = event.target.dataset.name1;
        const dataInfo = event.target.dataset.info1;

        setSwitchname1(dataName)
        setSwitchinfo1(dataInfo);
      };
    const [switchname2, setSwitchname2] = useState('Багриновський Максим')
    const [switchinfo2, setSwitchinfo2] = useState('Пішлов після 9 класу в ФКЕП. Зараз в США, а ви говоріть дальше, що в ФКЕП поступають без перспективні люди')
    const SwichGuard2 = (event) => {
        const dataName = event.target.dataset.name2;
        const dataInfo = event.target.dataset.info2;
      
        setSwitchname2(dataName)
        setSwitchinfo2(dataInfo);
    };
    const [switchname3, setSwitchname3] = useState('Дубова Вікторія')
    const [switchinfo3, setSwitchinfo3] = useState('Пішла після 5 класу. Мудрий дуб')
    const SwichGuard3 = (event) => {
        const dataName = event.target.dataset.name3;
        const dataInfo = event.target.dataset.info3;
    
        setSwitchname3(dataName)
        setSwitchinfo3(dataInfo);
      };
    const [switchname4, setSwitchname4] = useState('Івасишин Аліна')
    const [switchinfo4, setSwitchinfo4] = useState('Пішла після 9 класу. Похожа на Каріну')
    const SwichGuard4 = (event) => {
        const dataName = event.target.dataset.name4;
        const dataInfo = event.target.dataset.info4;
      
        setSwitchname4(dataName)
        setSwitchinfo4(dataInfo);
    };
    const [switchname5, setSwitchname5] = useState('Соломія')
    const [switchinfo5, setSwitchinfo5] = useState('Пішла після 1 класу')
    const SwichGuard5 = (event) => {
        const dataName = event.target.dataset.name5;
        const dataInfo = event.target.dataset.info5;
      
        setSwitchname5(dataName)
        setSwitchinfo5(dataInfo);
    };
    const [switchname6, setSwitchname6] = useState('Кіт Арсен')
    const [switchinfo6, setSwitchinfo6] = useState('Пішлов після 9 класу. Все ж він зміг поступити')
    const SwichGuard6 = (event) => {
        const dataName = event.target.dataset.name6;
        const dataInfo = event.target.dataset.info6;
      
        setSwitchname6(dataName)
        setSwitchinfo6(dataInfo);
    };
    const [switchname7, setSwitchname7] = useState('Микула Олег')
    const [switchinfo7, setSwitchinfo7] = useState('Пішов після 4 класу. Майнкрафтер')
    const SwichGuard7 = (event) => {
        const dataName = event.target.dataset.name7;
        const dataInfo = event.target.dataset.info7;
      
        setSwitchname7(dataName)
        setSwitchinfo7(dataInfo);
    };
    const [switchname8, setSwitchname8] = useState('Петрук Андрій')
    const [switchinfo8, setSwitchinfo8] = useState('Пішлов після 7 класу. Вор')
    const SwichGuard8 = (event) => {
        const dataName = event.target.dataset.name8;
        const dataInfo = event.target.dataset.info8;
      
        setSwitchname8(dataName)
        setSwitchinfo8(dataInfo);
    };
    const [switchname9, setSwitchname9] = useState('Рибак Анастасія')
    const [switchinfo9, setSwitchinfo9] = useState('Пішла після 9 класу. Гадості курить')
    const SwichGuard9 = (event) => {
        const dataName = event.target.dataset.name9;
        const dataInfo = event.target.dataset.info9;
      
        setSwitchname9(dataName)
        setSwitchinfo9(dataInfo);
    };
    const [switchname10, setSwitchname10] = useState('Середюк Артем')
    const [switchinfo10, setSwitchinfo10] = useState('Пішов після 9 класу. Де він і що з ним зараз? Х#й його знає')
    const SwichGuard10 = (event) => {
        const dataName = event.target.dataset.name10;
        const dataInfo = event.target.dataset.info10;
      
        setSwitchname10(dataName)
        setSwitchinfo10(dataInfo);
    };
    const [switchname11, setSwitchname11] = useState('Стасів Наталя')
    const [switchinfo11, setSwitchinfo11] = useState('Пішла після 9 класу. Багато оскала вчителів, заслужено')
    const SwichGuard11 = (event) => {
        const dataName = event.target.dataset.name11;
        const dataInfo = event.target.dataset.info11;
      
        setSwitchname11(dataName)
        setSwitchinfo11(dataInfo);
    };
    const [switchname12, setSwitchname12] = useState('Зощак Анастасія')
    const [switchinfo12, setSwitchinfo12] = useState('Пішла після 7 класу. О тааа, вже відчуваю запах срачів в чаті')
    const SwichGuard12 = (event) => {
        const dataName = event.target.dataset.name12;
        const dataInfo = event.target.dataset.info12;
      
        setSwitchname12(dataName)
        setSwitchinfo12(dataInfo);
    };
    const [switchname13, setSwitchname13] = useState('Юхимук Вікторія')
    const [switchinfo13, setSwitchinfo13] = useState('Пішла після 9 класу. Пішла в інший ліцей')
    const SwichGuard13 = (event) => {
        const dataName = event.target.dataset.name13;
        const dataInfo = event.target.dataset.info13;
      
        setSwitchname13(dataName)
        setSwitchinfo13(dataInfo);
    };
    const [switchname14, setSwitchname14] = useState('Яворський Станіслав')
    const [switchinfo14, setSwitchinfo14] = useState('Пішов після 7 класу. Дропнувся на парашуті з гори')
    const SwichGuard14 = (event) => {
        const dataName = event.target.dataset.name14;
        const dataInfo = event.target.dataset.info14;
      
        setSwitchname14(dataName)
        setSwitchinfo14(dataInfo);
    };
  return (
    <div>
        <nav className='banner-nav'>
            <div className="content-nav">
                {/* <l-grid
                    size="60"
                    speed="1.5"
                    stroke="1.5"
                    style={{ transition: 'background-color 5s linear' }}
                    color={colors[colorIndex]}
                ></l-grid> */}
                <div className="social">
                    <div class="dropdown">
                        <Link to="/" className='header-nav'>Back</Link>
                    </div>
                    <button className='header-nav'>Switch theme</button>
                </div>
            </div>
        </nav>
      <div className="banner_about">
        <h1 className='banner_oldGuard_h1'>OLD GUARD</h1>
        <img className='about-svg1' src='classmates_banner.svg'/>
      </div>
      <div className="members">
            <div className="twix">
                <div className="member" onClick={SwichGuard1}>
                    <img className='photo' src="andreiko.jpg" data-name1="Андрейко Вікторія" data-info1="Пішла після 4 класу" alt="" />
                    <p>Андрейко Вікторія</p>
                </div>
                <div className="member" onClick={SwichGuard1}>
                    <img className='photo' src="serii.jpg" data-name1="Андрейко Сергій" data-info1="Пішлов після 9 класу. Если вам плюют в спину, значит не смогли переплюнуть" alt="" />
                    <p>Андрейко Сергій</p>
                </div>
                <div className="text_member">
                    <h1>{switchname1}</h1>
                    <p>{switchinfo1}</p>
                </div>
            </div>
            <hr/>
            <div className="twix">
                <div className="text_member">
                    <h1>{switchname2}</h1>
                    <p>{switchinfo2}</p>
                </div>
                <div className="member" onClick={SwichGuard2}>
                    <img className='photo' src="bagr.jpg" data-name2="Багриновський Максим" data-info2="Пішлов після 9 класу в ФКЕП. Зараз в США, а ви говоріть дальше, що в ФКЕП поступають без перспективні люди" alt="" />
                    <p>Багриновський Максим</p>
                </div>
                <div className="member" onClick={SwichGuard2}>
                    <img className='photo' src="daniluk.jpg" data-name2="Данилюк Ярослав" data-info2="Пішов після 9 класу. Ярік Воділа, привіт пострижись" alt="" />
                    <p>Данилюк Ярослав</p>
                </div>
            </div>
            <hr/>
            <div className="twix">
                <div className="member" onClick={SwichGuard3}>
                    <img className='photo  dimaForMobile' src="drozd.jpg" data-name3="Дроздович Вікторія" data-info3="Пішла після 8 класу. Ну і нехай пиздує в свою загниваючу Канаду" alt="" />
                    <p>Дроздович Вікторія</p>
                </div>
                <div className="member" onClick={SwichGuard3}>
                    <img className='photo  dimaForMobile' src="dubova.jpg" data-name3="Дубова Вікторія" data-info3="Пішла після 5 класу. Мудрий дуб" alt="" />
                    <p>Дубова Вікторія</p>
                </div>
                <div className="text_member">
                    <h1>{switchname3}</h1>
                    <p>{switchinfo3}</p>
                </div>
            </div>
            <hr/>
            <div className="twix">
                <div className="text_member">
                    <h1>{switchname4}</h1>
                    <p>{switchinfo4}</p>
                </div>
                <div className="member" onClick={SwichGuard4}>
                    <img className='photo' src="alinka_i.jpg" data-name4="Івасишин Аліна" data-info4="Пішла після 9 класу. Похожа на Каріну" alt="" />
                    <p>Івасишин Аліна</p>
                </div>
                <div className="member" onClick={SwichGuard4}>
                    <img className='photo' src="karinka_i.jpg" data-name4="Івасишин Каріна" data-info4="Пішла після 9 класу. Похожа на Аліну" alt="" />
                    <p>Івасишин Каріна</p>
                </div>
            </div>
            <hr/>
            <div className="twix">
                <div className="member" onClick={SwichGuard5}>
                    <img className='photo' src="kaznoh.jpg" data-name5="Казнох Софія" data-info5="Пішла після 9 класу. Не казнох, а казнити" alt="" />
                    <p>Казнох Софія</p>
                </div>
                <div className="member" onClick={SwichGuard5}>
                    <img className='photo' src="soloma.jpg" data-name5="Соломія ???" data-info5="Пішла після 1 класу." alt="" />
                    <p>Соломія ???</p>
                </div>
                <div className="text_member">
                    <h1>{switchname5}</h1>
                    <p>{switchinfo5}</p>
                </div>
            </div>
            <hr/>
            <div className="twix">
                <div className="text_member">
                    <h1>{switchname6}</h1>
                    <p>{switchinfo6}</p>
                </div>
                <div className="member" onClick={SwichGuard6}>
                    <img className='photo' src="kit.jpg" data-name6="Кіт Арсен" data-info6="Пішов після 9 класу. Все ж він зміг поступити" alt="" />
                    <p>Кіт Арсен</p>
                </div>
                <div className="member" onClick={SwichGuard6}>
                    <img className='photo' src="long.jpg" data-name6="Лоншакова Вероніка" data-info6="Пішлов після 9 класу. Пішла на спеціальність по бізнесу" alt="" />
                    <p>Лоншакова Вероніка</p>
                </div>
            </div>
            <hr/>
            <div className="twix">
                <div className="member" onClick={SwichGuard7}>
                    <img className='photo' src="vovka.jpg" data-name7="Маланчик Володимир" data-info7="Пішов після 7 класу. А ви знали, що фраза: 'Щоб в тебе в сраці сиділи йожики!' - це його фраза" alt="" />
                    <p>Маланчик Володимир</p>
                </div>
                <div className="member" onClick={SwichGuard7}>
                    <img className='photo' src="olebeh.jpg" data-name7="Микула Олег" data-info7="Пішов після 4 класу. Майнкрафтер" alt="" />
                    <p>Микула Олег</p>
                </div>
                <div className="text_member">
                    <h1>{switchname7}</h1>
                    <p>{switchinfo7}</p>
                </div>
            </div>
            <hr/>
            <div className="twix">
                <div className="text_member">
                    <h1>{switchname8}</h1>
                    <p>{switchinfo8}</p>
                </div>
                <div className="member" onClick={SwichGuard8}>
                    <img className='photo' src="vor.jpg" data-name8="Петрук Андрій" data-info8="Пішлов після 7 класу. Вор" alt="" />
                    <p>Петрук Андрій</p>
                </div>
                <div className="member" onClick={SwichGuard8}>
                    <img className='photo' src="putin.jpg" data-name8="Путько Тарас" data-info8="Пішов після 3 класу. Торможение - тоже движениеі" alt="" />
                    <p>Путько Тарас</p>
                </div>
            </div>
            <hr/>
            <div className="twix">
              <div className="member" onClick={SwichGuard9}>
                    <img className='photo' src="puh.jpg" data-name9="Пухта Станіслав" data-info9="Пішов після 9 класу. Лучше 5 сантиметров спереди, чем 25 сзади" alt="" />
                    <p>Пухта Станіслав</p>
                </div>
                <div className="member" onClick={SwichGuard9}>
                    <img className='photo' src="riba.jpg" data-name9="Рибак Анастасія" data-info9="Пішла після 9 класу. Гадості курить" alt="" />
                    <p>Рибак Анастасія</p>
                </div>
                <div className="text_member">
                    <h1>{switchname9}</h1>
                    <p>{switchinfo9}</p>
                </div>
            </div>
            <hr/>
            <div className="twix">
                <div className="text_member">
                    <h1>{switchname10}</h1>
                    <p>{switchinfo10}</p>
                </div>
                <div className="member" onClick={SwichGuard10}>
                    <img className='photo' src="wednesday.jpg" data-name10="Середюк Артем" data-info10="Пішов після 9 класу. Де він і що з ним зараз? Х#й його знає" alt="" />
                    <p>Середюк Артем</p>
                </div>
                <div className="member" onClick={SwichGuard10}>
                    <img className='photo dimaForMobile' src="dima.png" data-name10="Скидан Дмитро" data-info10="Пішов після 8 класу, відучившись в школі менше року. Зара сидить в Польщі цей ухилянт" alt="" />
                    <p>Скидан Дмитро</p>
                </div>
            </div>
            <hr/>
            <div className="twix">
              <div className="member" onClick={SwichGuard11}>
                    <img className='photo' src="scripka.jpg" data-name11="Скрипник Анастасія" data-info11="Пішла після 9 класу. Слово - не горобець, та й ніхто не горобець крім самого горобця" alt="" />
                    <p>Скрипник Анастасія</p>
                </div>
                <div className="member" onClick={SwichGuard11}>
                    <img className='photo' src="stasiv.jpg" data-name11="Стасів Наталя" data-info11="Пішла після 9 класу. Багато оскала вчителів, заслужено" alt="" />
                    <p>Стасів Наталя</p>
                </div>
                <div className="text_member">
                    <h1>{switchname11}</h1>
                    <p>{switchinfo11}</p>
                </div>
            </div>
            <hr/>
            <div className="twix">
                <div className="text_member">
                    <h1>{switchname12}</h1>
                    <p>{switchinfo12}</p>
                </div>
                <div className="member" onClick={SwichGuard12}>
                    <img className='photo' src="bebra.jpg" data-name12="Зощак Анастасія" data-info12="Пішла після 7 класу. О тааа, вже відчуваю запах срачів в чаті" alt="" />
                    <p>Зощак Анастасія</p>
                </div>
                <div className="member" onClick={SwichGuard12}>
                    <img className='photo' src="fedirko.jpg" data-name12="Федірко Андрій" data-info12="Пішов після 4 класу, відучившись в школі менше року." alt="" />
                    <p>Федірко Андрій</p>
                </div>
            </div>
            <hr/>
            <div className="twix">
              <div className="member" onClick={SwichGuard13}>
                    <img className='photo' src="hmel.jpg" data-name13="Хмельовська Яна" data-info13="Пішла після 9 класу. Хмелівська" alt="" />
                    <p>Хмельовська Яна</p>
                </div>
                <div className="member" onClick={SwichGuard13}>
                    <img className='photo' src="youhimuk.jpg" data-name13="Юхимук Вікторія" data-info13="Пішла після 9 класу. Пішла в інший ліцей" alt="" />
                    <p>Юхимук Вікторія</p>
                </div>
                <div className="text_member">
                    <h1>{switchname13}</h1>
                    <p>{switchinfo13}</p>
                </div>
            </div>
            <hr/>
            <div className="twix">
                <div className="text_member">
                    <h1>{switchname14}</h1>
                    <p>{switchinfo14}</p>
                </div>
                <div className="member" onClick={SwichGuard14}>
                    <img className='photo' src="yavorina.jpg" data-name14="Яворський Станіслав" data-info14="Пішов після 7 класу. Дропнувся на парашуті з гори" alt="" />
                    <p>Яворський Станіслав</p>
                </div>
                <div className="member" onClick={SwichGuard14}>
                    <img className='photo' src="moskal.jpg" data-name14="Яцков Тарас" data-info14="Пішов після 9 класу в ФКЕП. Творець цього сайту, затягує з сайтом ніби сталкер робить" alt="" />
                    <p>Яцков Тарас</p>
                </div>
            </div>
      </div>
      <footer className="footer_social">
          <div className="sides_footer">
              <div className="text_side rainbow-border" >
                <div className="citata">
                  <p>А мені альтушки з госуслуг дороще батьківщини</p>
                </div>
                <div className="owner_citata">
                  <p>- Яцков Тарас -</p>
                  
                </div>
              </div>
            <div className="links_side rainbow-border">
            <div className="describe_links">
              <p>Follow developer</p>
            </div>
            <div className="links_list ">
              <a className='desc_link' href="https://t.me/taknazizmu"><img className='logo_link' src="telegram.png" alt="" /></a>
              <a className='desc_link' href="https://instagram.com/taqpas"><img className='logo_link' src="instagram.png" alt="" /></a>
              <a className='desc_link' href="https://www.reddit.com/user/Taqpas/"><img className='logo_link' src="reddit.png" alt="" /></a>
              <a className='desc_link' href="https://rudd21.github.io/Porfolio/"><img className='logo_link' src="portfolio.png" alt="" /></a>
            </div>
          </div>
        </div>
        <div className="school_info">
          <div className="sides_school">
            <div className="geo_school">
              <button className="link_school" href="#"><p>Ми в новинах</p></button>
              <button className="link_school" href="#"><p>Сайт Школи</p></button>
              <button className="link_school" href="#"><p>▼Ліцей на карті</p></button>
            </div>
            <div className="info_links rainbow-border">
              <h1 style={{textAlign: "center"}}>Які ж всеж слони🐘</h1>
              <a className="link_school" href="https://www.youtube.com/watch?v=FUMoPqISLqw">Ми в телевізорі</a>
              <a className="link_school" href="https://sites.google.com/view/lyceum18-if/головна-сторінка">Сайт слонів⇗</a>
            </div>
          </div>

        </div>
        <div className="footer_footer">
          <div className="rainbow-line"></div>
          <div className="prava">Ⓒ 2021-2024 Всі права програно в Казино</div>
        </div>
      </footer>
    </div>
  )
}

export default oldGuard