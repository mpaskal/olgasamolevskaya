import React from "react";
import ReactPlayer from "react-player";

const Movies = () => {
  return (
    <div className="movies">
      <h2 className="movie_title">Час Недитячий</h2>
      <section className="movie_section">
        <div className="movie">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=BfGdTVxLvB8"
            controls={true}
            width="500px"
            height="282px"
          />
        </div>
        <div className="movie_description">
          <div className="movie_about">
            Фільм про спогади очевидців Другої Світової війни, які пережили цей
            трагічний досвід ще дітьми.
          </div>
          <div className="movie_details">
            <ul>
              <li>Нагороди:</li>
              <li>Рік: 2017</li>
              <li>Прем'єра в Україні: 09.02.2018</li>
              <li>Мова: Українська</li>
              <li>Країна виробництва: Україна</li>
              <li>Жанр: Документальний</li>
            </ul>
            <ul>
              <li>Компанія виробник: Укркінохроніка</li>
              <li>Режисер: Ольга Самолевська</li>
              <li>Продюсер: Наталія Шевчук</li>
              <li>Автор сценарію: Ольга Самолевська</li>
              <li>Композитор: Олена Фролова-Лещенко</li>
            </ul>
          </div>
        </div>
      </section>
      <h2 className="movie_title">Катерина Білокур. Послання</h2>
      <section className="movie_section">
        <div className="movie">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=jpZmLZmjhBU"
            controls={true}
            width="500px"
            height="282px"
          />
        </div>
        <div className="movie_description">
          <div className="movie_about"></div>
          <div className="movie_details">
            <ul>
              <li>Нагороди:</li>
              <li>Рік: </li>
              <li>Прем'єра в Україні: </li>
              <li>Мова: Українська</li>
              <li>Країна виробництва: Україна</li>
              <li>Жанр: Документальний</li>
            </ul>
            <ul>
              <li>Компанія виробник: Студiя "Кiнематографiст"</li>
              <li>Режисер: Ольга Самолевська</li>
              <li>
                Продюсер: Свiтлана Степаненко, Олена Фетicoва, Ганна Череповська
              </li>
              <li>Автор сценарію: Ольга Самолевська</li>
              <li>Композитор: Володимир Губа</li>
            </ul>
          </div>
        </div>
      </section>
      <h2 className="movie_title">Пам'яті загиблих споруд</h2>
      <section className="movie_section">
        <div className="movie">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=fVhsynNVzhs"
            controls={true}
            width="500px"
            height="282px"
          />
        </div>
        <div className="movie_description">
          <div className="movie_about">
            Перший фільм про руйнацію Києва радянською владою
          </div>
          <div className="movie_details">
            <ul>
              <li>Нагороди:</li>
              <li>Рік: 1988</li>
              <li>Прем'єра в Україні: </li>
              <li>Мова: Українська</li>
              <li>Країна виробництва: Україна</li>
              <li>Жанр: Документальний</li>
            </ul>
            <ul>
              <li>
                Компанія виробник: Київська кіностудія науково-популярних
                фільмів
              </li>
              <li>Режисер: Ольга Самолевська</li>
              <li>Продюсер:</li>
              <li>Автор сценарію: Юрий Iванов</li>
              <li>Композитор:</li>
            </ul>
          </div>
        </div>
      </section>

      <h2 className="movie_title">Я себе запитую</h2>
      <section className="movie_section">
        <div className="movie">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=igKkYt-3fww"
            controls={true}
            width="500px"
            height="282px"
          />
        </div>
        <div className="movie_description">
          <div className="movie_about">
            У фільмі брали участь обдаровані діти, серед яких піаніст-віртуоз
            Женя Кісін (нині володар багатьох міжнародних премій, почесний
            доктор музики Гонконгського та Єрусалімського університету,
            Манхеттенської школи музики, почесний член Королівської академії
            музики (Лондон), художниця Русіко Петвіашвілі (нині володар
            Інтернаціональної премії «Посол миру», «Ордена Пошани» Грузинської
            республіки, президентського ордена Сяяння). Ніка Турбіна (Торбіна),
            вірші за яку, як потім виявилося, писала мама Майя Ніканоркіна.
          </div>
          <div className="movie_details">
            <ul>
              <li>
                Нагороди: Почесна грамота і приз фестивалю "Київнаукфільм-85"
                "За оригінальне поетичне втілення теми", Диплом та приз
                Всесоюзного молодіжного кінофестивалю (Тбілісі), учасник
                конференції INPUT (UNESCO), представник України на Міжнародному
                кінофорумі в Ерфурті (Німеччина,1987)
              </li>
              <li>Рік: 1985</li>
              <li>Прем'єра в Україні: </li>
              <li>Мова: Російська</li>
              <li>Країна виробництва: Україна</li>
              <li>Жанр: Документальний</li>
            </ul>
            <ul>
              <li>Компанія виробник: Укркінохроніка</li>
              <li>Режисер: Ольга Самолевська</li>
              <li>Продюсер: </li>
              <li>Автор сценарію: Ольга Самолевська</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Movies;
