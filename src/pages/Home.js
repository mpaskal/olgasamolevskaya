import React, { useState } from "react";
import ReactPlayer from "react-player";
import VideoOlga from "../assets/video/Videogreeting_SAMOLEVSKA-NOT_A_TIME_FOR_CHILDREN_.mp4";
import ImageOlgaMain from "../assets/images/Olga_Jan23.jpg";

const Home = () => {
  return (
    <div className="home">
      <section className="home_top">
        <img
          className="home_about_img"
          src={ImageOlgaMain}
          alt="Olga presentation"
        />
        <article className="home_about_text_first">
          Ця Лисичка з Хрещатику. Сиділа собі у вітрині, аж тут я іду, 5-річна,
          з тьотею Аннушкою. І далі без Лисички іти не хочу. Аннушка
          перерахувала свої гроші і потягнулася за мною до продавців. А вони
          життєрадісно відповіли, що Лисичка не продається, бо працює в
          композиції для вітрини. Утираючи мої рясні сльози, Аннушка впросила
          продавців відкрити вітрину. Коли ЛИСИЧКА опинилася в моїх нахабних
          лапах, Аннушка почула, що просять за неї занадто багато, бо вона вміє
          розмовляти. І тоді Аннушка прийняла рішення вигрести з гаманця все. (а
          працювала вона у Жовтневому палаці гардеробницею, і я виросла за
          лаштунками цього палацу). Лисичка стала кіноактрисою, для цього я
          стала кінорежисером. Аннушеньки нема вже 14 років. У день її пам'яті
          Лисичку показали на екрані Будинку кіно.
        </article>
        <div className="clear"></div>
      </section>
      <section className="video_olga-wrap">
        <div className="video_olga">
          <ReactPlayer
            url={VideoOlga}
            controls={true}
            width="500px"
            height="282px"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
