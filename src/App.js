import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

function App() {
  const [theme, setTheme] = useState("light-mode");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeHandler = () => {
    if (theme === "light-mode") {
      setTheme("dark-mode");
    } else {
      setTheme("light-mode");
    }
  };

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" type="button" onClick={themeHandler}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((post) => {
          return <Article key={post.id} {...post} />;
        })}
      </section>
    </main>
  );
}

export default App;
