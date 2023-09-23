import React, { useState } from "react";
import CardArticles from "../components/CardArticles";
import pagedata from "../assets/data/ArticlesData";

const getYears = (pagedata) => {
  let years = [];
  for (let i of pagedata) {
    if (!years.includes(i.year)) {
      years.push(i.year);
    }
  }
  return years;
};

const Articles = () => {
  const [navVisible, setNavVisible] = useState(true);
  const data = {
    sideTitle: "Статтi",
  };
  const years = getYears(pagedata);
  return (
    <div className="articles">
      <section className="article_section">
        {years.map((publishedYear, index) => (
          <div key={index} className="article_year_section" id={index}>
            <h2 className="articles_year">{publishedYear}</h2>
            <div className="article_by_year">
              {pagedata
                .filter((a) => a.year.includes(publishedYear))
                .map((article, index) => (
                  <CardArticles
                    key={index}      
                    id={article.id}
                    title={article.title}
                    image={article.image}
                    description={article.description}
                    url={article.url}
                  />
                ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Articles;
