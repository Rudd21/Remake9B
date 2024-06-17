import React from 'react'
import "./classmates.scss"
import {useState} from 'react'
import {motion} from 'framer-motion'
import { Link} from 'react-router-dom';

const classmates = () => {
    const [switchName1, setSwitchName1] = useState('Басалига Женя')
    const [switchInfo1, setSwitchInfo1] = useState('Ам-ам-ам-ам-ам-ам')
    const SwichInfo1 = (event) => {
        // Отримуємо значення атрибуту data-info з клікнутого елемента
        const dataName = event.target.dataset.name1;
        const dataInfo = event.target.dataset.info1;
    
        // Оновлюємо стан інформації
        setSwitchName1(dataName)
        setSwitchInfo1(dataInfo);
      };
    const [switchName2, setSwitchName2] = useState('Баратова Саміра')
    const [switchInfo2, setSwitchInfo2] = useState('Один клас, одна школа, один фюрер школи')
    const SwichInfo2 = (event) => {
        // Отримуємо значення атрибуту data-info з клікнутого елемента
        const dataName = event.target.dataset.name2;
        const dataInfo = event.target.dataset.info2;
    
        // Оновлюємо стан інформації
        setSwitchName2(dataName)
        setSwitchInfo2(dataInfo);
      };
      const [switchName3, setSwitchName3] = useState('Вінтонюк Настя')
      const [switchInfo3, setSwitchInfo3] = useState("'Ісус Воскрес'? Пруфи")
      const SwichInfo3 = (event) => {
          // Отримуємо значення атрибуту data-info з клікнутого елемента
          const dataName = event.target.dataset.name3;
          const dataInfo = event.target.dataset.info3;
      
          // Оновлюємо стан інформації
          setSwitchName3(dataName)
          setSwitchInfo3(dataInfo);
        };
        const [switchName4, setSwitchName4] = useState("Демкович Богдан")
        const [switchInfo4, setSwitchInfo4] = useState("Ну тіпа соси")
        const SwichInfo4 = (event) => {
            // Отримуємо значення атрибуту data-info з клікнутого елемента
            const dataName = event.target.dataset.name4;
            const dataInfo = event.target.dataset.info4;
        
            // Оновлюємо стан інформації
            setSwitchName4(dataName)
            setSwitchInfo4(dataInfo);
          };
        const [switchName5, setSwitchName5] = useState("Єкимець Єва")
        const [switchInfo5, setSwitchInfo5] = useState("Прикольно, ім'я і призвище з одної літери")
        const SwichInfo5 = (event) => {
            // Отримуємо значення атрибуту data-info з клікнутого елемента
            const dataName = event.target.dataset.name5;
            const dataInfo = event.target.dataset.info5;
        
            // Оновлюємо стан інформації
            setSwitchName5(dataName)
            setSwitchInfo5(dataInfo);
          };
          const [switchName6, setSwitchName6] = useState("Глодан Христина")
          const [switchInfo6, setSwitchInfo6] = useState("Саме так, ххх в її юзернеймі означає дорослу версію")
          const SwichInfo6 = (event) => {
              // Отримуємо значення атрибуту data-info з клікнутого елемента
              const dataName = event.target.dataset.name6;
              const dataInfo = event.target.dataset.info6;
          
              // Оновлюємо стан інформації
              setSwitchName6(dataName)
              setSwitchInfo6(dataInfo);
            };
          const [switchName7, setSwitchName7] = useState("Жеребятєва Наталя")
          const [switchInfo7, setSwitchInfo7] = useState("Ні, ЛНР краще!")
          const SwichInfo7 = (event) => {
            // Отримуємо значення атрибуту data-info з клікнутого елемента
            const dataName = event.target.dataset.name7;
            const dataInfo = event.target.dataset.info7;
            
                // Оновлюємо стан інформації
             setSwitchName7(dataName)
             setSwitchInfo7(dataInfo);
            };
          const [switchName8, setSwitchName8] = useState("Золото Дарина")
          const [switchInfo8, setSwitchInfo8] = useState("Ні, ДНР краще!")
          const SwichInfo8 = (event) => {
          // Отримуємо значення атрибуту data-info з клікнутого елемента
            const dataName = event.target.dataset.name8;
            const dataInfo = event.target.dataset.info8;
              
            setSwitchName8(dataName)
            setSwitchInfo8(dataInfo);
          };
          const [switchName9, setSwitchName9] = useState("Лінкевич Максим")
          const [switchInfo9, setSwitchInfo9] = useState("Ще один футBALLіст")
          const SwichInfo9 = (event) => {
          // Отримуємо значення атрибуту data-info з клікнутого елемента
            const dataName = event.target.dataset.name9;
            const dataInfo = event.target.dataset.info9;
              
            setSwitchName9(dataName)
            setSwitchInfo9(dataInfo);
          };
          const [switchName10, setSwitchName10] = useState("Комар Влад")
          const [switchInfo10, setSwitchInfo10] = useState("От требуло якісь бабі сидіти і придумувати прізвища, і таке надумати")
          const SwichInfo10 = (event) => {
          // Отримуємо значення атрибуту data-info з клікнутого елемента
            const dataName = event.target.dataset.name10;
            const dataInfo = event.target.dataset.info10;
              
            setSwitchName10(dataName)
            setSwitchInfo10(dataInfo);
          };
          const [switchName11, setSwitchName11] = useState("Павлюк Іра")
          const [switchInfo11, setSwitchInfo11] = useState("Ірка Шкірка")
          const SwichInfo11 = (event) => {
          // Отримуємо значення атрибуту data-info з клікнутого елемента
            const dataName = event.target.dataset.name11;
            const dataInfo = event.target.dataset.info11;
              
            setSwitchName11(dataName)
            setSwitchInfo11(dataInfo);
          };
          const [switchName12, setSwitchName12] = useState("Пінчук Михайло")
          const [switchInfo12, setSwitchInfo12] = useState("Він чисто just dance")
          const SwichInfo12 = (event) => {
          // Отримуємо значення атрибуту data-info з клікнутого елемента
            const dataName = event.target.dataset.name12;
            const dataInfo = event.target.dataset.info12;
              
            setSwitchName12(dataName)
            setSwitchInfo12(dataInfo);
          };
          const [switchName13, setSwitchName13] = useState("Смирнова Віра")
          const [switchInfo13, setSwitchInfo13] = useState("Мирнова")
          const SwichInfo13 = (event) => {
          // Отримуємо значення атрибуту data-info з клікнутого елемента
            const dataName = event.target.dataset.name13;
            const dataInfo = event.target.dataset.info13;
              
            setSwitchName13(dataName)
            setSwitchInfo13(dataInfo);
          };
          const [switchName14, setSwitchName14] = useState("Семків Христина")
          const [switchInfo14, setSwitchInfo14] = useState("Альтушка з Дії, на український манер")
          const SwichInfo14 = (event) => {
          // Отримуємо значення атрибуту data-info з клікнутого елемента
            const dataName = event.target.dataset.name14;
            const dataInfo = event.target.dataset.info14;
              
            setSwitchName14(dataName)
            setSwitchInfo14(dataInfo);
          };
          const [switchName15, setSwitchName15] = useState("Урядка Владислав")
          const [switchInfo15, setSwitchInfo15] = useState("Урядований в ТрО. Лучше пернуть как медведь, чем как девочка шипеть")
          const SwichInfo15 = (event) => {
          // Отримуємо значення атрибуту data-info з клікнутого елемента
            const dataName = event.target.dataset.name15;
            const dataInfo = event.target.dataset.info15;
              
            setSwitchName15(dataName)
            setSwitchInfo15(dataInfo);
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
        <h1 className='banner_classmates_h1'>CLASSMATES</h1>
        <img className='about-svg1' src='classmates_banner.svg'/>
      </div>
        <div className="members">
            <div className="twix">
                <div className="member" onClick={SwichInfo1}>
                    <img className='photo' src="abrams.png" data-name1="Абрамчук Павло" data-info1="Не хоче бути частиною класу, бо він самотній вовк" alt="" />
                    <p>Абрамчук Павло</p>
                </div>
                <div className="member" onClick={SwichInfo1}>
                    <img className='photo' src="nu_tipa_div4inka.jpg" data-name1="Басалига Женя" data-info1="Ам-ам-ам-ам-ам-ам" alt="" />
                    <p>Басалига Женя</p>
                </div>
                <div className="text_member">
                    <h1>{switchName1}</h1>
                    <p>{switchInfo1}</p>
                </div>
            </div>
            <hr />
            <div className="twix">
                <div className="text_member">
                    <h1>{switchName2}</h1>
                    <p>{switchInfo2}</p>
                </div>
                <div className="member" onClick={SwichInfo2}>
                    <img className='photo' src="ssamirka.jpg" data-name2="Баратова Саміра" data-info2="Один клас, одна школа, один фюрер школи" alt="" />
                    <p>Баратова Саміра</p>
                </div>
                <div className="member" onClick={SwichInfo2}>
                    <img className='photo' src="boiko.jpg" data-name2="Бойко Віка" data-info2="Ні блін Гуцул" alt="" />
                    <p>Бойко Віка</p>
                </div>
            </div>
            <hr />
            <div className="twix">
                <div className="member" onClick={SwichInfo3}>
                    <img className='photo' src="vintoniuk.png" data-name3="Вінтонюк Настя" data-info3="'Ісус Воскрес'? Пруфи" alt="" />
                    <p>Вінтонюк Настя</p>
                </div>
                <div className="member" onClick={SwichInfo3}>
                    <img className='photo' src="GahihNatihin.jpg" data-name3="Дацишин Вероніка" data-info3="Гашиш Нацишин" alt="" />
                    <p>Дацишин Вероніка</p>
                </div>
                <div className="text_member">
                    <h1>{switchName3}</h1>
                    <p>{switchInfo3}</p>
                </div>
            </div>
            <hr />
            <div className="twix">
                <div className="text_member">
                    <h1>{switchName4}</h1>
                    <p>{switchInfo4}</p>
                </div>
                <div className="member" onClick={SwichInfo4}>
                    <img className='photo' src="demik.jpg" data-name4="Демкович Богдан" data-info4="Ну тіпа соси" alt="" />
                    <p>Демкович Богдан</p>
                </div>
                <div className="member" onClick={SwichInfo4}>
                    <img className='photo' src="katia.jpg" data-name4="Дем'янчук Катерина" data-info4="'Нічого не знаю, я хотіла поступити'" alt="" />
                    <p>Дем'янчук Катерина</p>
                </div>
            </div>
            <hr />
            <div className="twix">
                <div className="member" onClick={SwichInfo5}>
                    <img className='photo' src="dobromilskii.jpg" data-name5="Добромільський Даніель" data-info5="Співак" alt="" />
                    <p>Добромільський Даніель</p>
                </div>
                <div className="member" onClick={SwichInfo5}>
                    <img className='photo' src="ev.jpg" data-name5="Єкимець Єва" data-info5="Прикольно, ім'я і призвище з одної літери" alt="" />
                    <p>Єкимець Єва</p>
                </div>
                <div className="text_member">
                    <h1>{switchName5}</h1>
                    <p>{switchInfo5}</p>
                </div>
            </div>
            <hr />
            <div className="twix">
                <div className="text_member">
                    <h1>{switchName6}</h1>
                    <p>{switchInfo6}</p>
                </div>
                <div className="member" onClick={SwichInfo6}>
                    <img className='photo' src="glodan.jpg" data-name6="Глодан Христина" data-info6="Саме так, ххх в її юзернеймі означає дорослу версію" alt="" />
                    <p>Глодан Христина</p>
                </div>
                <div className="member" onClick={SwichInfo6}>
                    <img className='photo' src="zhara.png" data-name6="Жара Богдана" data-info6="Займається Мюінгом" alt="" />
                    <p>Жара Богдана</p>
                </div>
            </div>
            <hr />
            <div className="twix">
                <div className="member" onClick={SwichInfo7}>
                    <img className='photo' src="she_odna_zhara.jpg" data-name7="Жарська Аліна" data-info7="Хз для чого два похожих прізвища" alt="" />
                    <p>Жарська Аліна</p>
                </div>
                <div className="member" onClick={SwichInfo7}>
                    <img className='photo' src="LuhanskChildren.jpg" data-name7="Жеребятєва Наталя" data-info7="Ні, ЛНР краще!" alt="" />
                    <p>Жеребятєва Наталя</p>
                </div>
                <div className="text_member">
                    <h1>{switchName7}</h1>
                    <p>{switchInfo7}</p>
                </div>
            </div>
            <hr />
            <div className="twix">
                <div className="text_member">
                    <h1>{switchName8}</h1>
                    <p>{switchInfo8}</p>
                </div>
                <div className="member" onClick={SwichInfo8}>
                    <img className='photo' src="zolotoKarpat.png" data-name8="Золото Дарина" data-info8="Ні, ДНР краще!" alt="" />
                    <p>Золото Дарина</p>
                </div>
                <div className="member" onClick={SwichInfo8}>
                    <img className='photo kizhukForMobile' src="kizhuk.jpg" data-name8="Кіщук Анастасія" data-info8="Угадайте що в неї на лиці" alt="" />
                    <p>Кіщук Анастасія</p>
                </div>
            </div>
            <hr />
            <div className="twix">
                <div className="member" onClick={SwichInfo9}>
                    <img className='photo' src="gre4ka.png" data-name9="Крупа Ірина" data-info9="Пішла після 7 класу. Тихенько покинула класу, но в 10 вернулась. Нізким не спілкується в класу, так що вона не є частиною класа." alt="" />
                    <p>Крупа Ірина</p>
                </div>
                <div className="member" onClick={SwichInfo9}>
                    <img  className='photo' src="link.jpg" data-name9="Лінкевич Максим" data-info9="Ще один футBALLіст" alt="" />
                    <p>Лінкевич Максим</p>
                </div>
                <div className="text_member">
                    <h1>{switchName9}</h1>
                    <p>{switchInfo9}</p>
                </div>
            </div>
            <hr />
            <div className="twix">
                <div className="text_member">
                    <h1>{switchName10}</h1>
                    <p>{switchInfo10}</p>
                </div>
                <div className="member" onClick={SwichInfo10}>
                    <img className='photo' src="komar.jpg" data-name10="Комар Влад" data-info10="От требуло якісь бабі сидіти і придумувати прізвища, і таке надумати" alt="" />
                    <p>Комар Влад</p>
                </div>
                <div className="member" onClick={SwichInfo10}>
                    <img  className='photo' src="ribne.jpg" data-name10="Мачкур Юра" data-info10="На початку війни вкрав декілька танків і відав 100 штук максиму, стояв з Максимом біля стін Кремля, проводив концерт з Максимом в 22:00 за нігерійським часом" alt="" />
                    <p>Мачкур Юра</p>
                </div>
            </div>
            <hr />
            <div className="twix">
                <div className="member" onClick={SwichInfo11}>
                    <img className='photo' src="oleshko.jpg" data-name11="Олешко Богдан" data-info11="Торгує на базарі всяким" alt="" />
                    <p>Олешко Богдан</p>
                </div>
                <div className="member" onClick={SwichInfo11}>
                    <img className='photo' src="irkaShkirka.jpg" data-name11="Павлюк Іра" data-info11="Ірка Шкірка" alt="" />
                    <p>Павлюк Іра</p>
                </div>
                <div className="text_member">
                    <h1>{switchName11}</h1>
                    <p>{switchInfo11}</p>
                </div>
            </div>
            <hr />
            <div className="twix">
            <div className="text_member">
                <h1>{switchName12}</h1>
                <p>{switchInfo12}</p>
            </div>
                <div className="member" onClick={SwichInfo12}>
                    <img className='photo' src="pit4uk.jpg" data-name12="Пінчук Михайло" data-info12="Він чисто just dance" alt="" />
                    <p>Пінчук Михайло</p>
                </div>
                <div className="member" onClick={SwichInfo12}>
                    <img className='photo' src="zoshak2.jpg" data-name12="Самайлова Софія" data-info12="Ну тіпа Зощак" alt="" />
                    <p>Самайлова Софія</p>
                </div>
            </div>
            <hr />
            <div className="twix">
                <div className="member" onClick={SwichInfo13}>
                    <img className='photo' src="sverlo.jpg" data-name13="Свирида Назар" data-info13="Бабл Басер" alt="" />
                    <p>Свирида Назар</p>
                </div>
                <div className="member" onClick={SwichInfo13}>
                    <img className='photo' src="sid.jpg" data-name13="Смирнова Віра" data-info13="Мирнова" alt="" />
                    <p>Смирнова Віра</p>
                </div>
                <div className="text_member">
                    <h1>{switchName13}</h1>
                    <p>{switchInfo13}</p>
                </div>
            </div>
            <hr />
            <div className="twix">
                <div className="text_member">
                    <h1>{switchName14}</h1>
                    <p>{switchInfo14}</p>
                </div>
                <div className="member" onClick={SwichInfo14}>
                    <img className='photo' src="krsq.png" data-name14="Семків Христина" data-info14="Альтушка з Дії, на український манер" alt="" />
                    <p>Семків Христина</p>
                </div>
                <div className="member" onClick={SwichInfo14}>
                    <img className='photo' src="sidor.jpg" data-name14="Сидор Андрій" data-info14="Дійсно, Сидор Андрій" alt="" />
                    <p>Сидор Андрій</p>
                </div>
            </div>
            <div className="twix">
                <div className="member" onClick={SwichInfo15}>
                    <img className='photo' src="sovtus.jpg" data-name15="Совтус Віталій" data-info15="Дуже ховається" alt="" />
                    <p>Совтус Віталій</p>
                </div>
                <div className="member" onClick={SwichInfo15}>
                    <img className='photo' src="uryad.jpg" data-name15="Урядка Владислав" data-info15="Урядований в ТрО. Лучше пернуть как медведь, чем как девочка шипеть" alt="" />
                    <p>Урядка Владислав</p>
                </div>
                <div className="text_member">
                    <h1>{switchName15}</h1>
                    <p>{switchInfo15}</p>
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

export default classmates