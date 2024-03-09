import React, { useEffect, useState } from "react";
import "./style.css";
import { FaSun, FaMoon } from "react-icons/fa";
import articles from "./Data";
import Article from "./Article";

const DarkMode = () => {
  const getStorageTheme = () => {
    let themeVal = false;
    if (localStorage.getItem("theme")) {
      themeVal = JSON.parse(localStorage.getItem("theme"));
    }
    return themeVal;
  };
  const [toggle, setToggle] = useState(getStorageTheme);

  useEffect(() => {
    if (toggle) {
      if (document.body.classList.contains("light-theme")) {
        document.body.classList.replace("light-theme", "dark-theme");
      } else {
        document.body.classList.add("dark-theme");
      }
    } else {
      if (document.body.classList.contains("dark-theme")) {
        document.body.classList.replace("dark-theme", "light-theme");
      } else {
        document.body.classList.add("light-theme");
      }
    }
    localStorage.setItem("theme", toggle);
  }, [toggle]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <div className="toggle-btn-container">
            {!toggle ? <FaSun className="sun" /> : <FaMoon className="moon" />}
            <label htmlFor="toggle" className="toggle-btn">
              <input
                type="checkbox"
                id="toggle"
                checked={toggle}
                onChange={(e) => setToggle(e.target.checked)}
              />
              <div className="slider"></div>
            </label>
          </div>
        </div>
      </nav>
      <section className="articles">
        {articles.map((article) => {
          return <Article key={article.id} {...article} />;
        })}
      </section>
    </main>
  );
};

export default DarkMode;
