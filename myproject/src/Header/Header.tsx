import "./Header.css";
import { useState } from "react";

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("light-mode");
  };

  return (
    <header>
      <div className="titulo">
        <div className="circulo"></div>
        <div className="loader">
          <h2 className="word-container group-1">
            <span className="word">Craft</span>
            <span className="word">Shape</span>
            <span className="word">Build</span>
            <span className="word">Create</span>
          </h2>

          <h2 className="word-container group-2">
            <span className="word your">Your</span>
            <span className="word your">Your</span>
            <span className="word your">Your</span>
            <span className="word your">Your</span>
          </h2>

          <h2 className="word-container group-3">
            <span className="word">Identity</span>
            <span className="word">Vibe</span>
            <span className="word">Essence</span>
            <span className="word">Image</span>
          </h2>
        </div>{" "}
      </div>
      <button onClick={toggleTheme}>
        <svg
          width={100}
          height={100}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`sun ${isDarkMode ? "dark" : "light"}`}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M7 3V0H9V3H7Z"
              fill={isDarkMode ? "#ffffff" : "#000000"}
            ></path>{" "}
            <path
              d="M9 13V16H7V13H9Z"
              fill={isDarkMode ? "#ffffff" : "#000000"}
            ></path>{" "}
            <path
              d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z"
              fill={isDarkMode ? "#ffffff" : "#000000"}
            ></path>{" "}
            <path
              d="M0 9H3V7H0V9Z"
              fill={isDarkMode ? "#ffffff" : "#000000"}
            ></path>{" "}
            <path
              d="M16 7H13V9H16V7Z"
              fill={isDarkMode ? "#ffffff" : "#000000"}
            ></path>{" "}
            <path
              d="M3.75735 5.17157L1.63603 3.05025L3.05025 1.63603L5.17157 3.75735L3.75735 5.17157Z"
              fill={isDarkMode ? "#ffffff" : "#000000"}
            ></path>{" "}
            <path
              d="M12.2426 10.8284L14.364 12.9497L12.9497 14.364L10.8284 12.2426L12.2426 10.8284Z"
              fill={isDarkMode ? "#ffffff" : "#000000"}
            ></path>{" "}
            <path
              d="M3.05025 14.364L5.17157 12.2426L3.75735 10.8284L1.63603 12.9498L3.05025 14.364Z"
              fill={isDarkMode ? "#ffffff" : "#000000"}
            ></path>{" "}
            <path
              d="M12.9497 1.63604L10.8284 3.75736L12.2426 5.17158L14.364 3.05026L12.9497 1.63604Z"
              fill={isDarkMode ? "#ffffff" : "#000000"}
            ></path>{" "}
          </g>
        </svg>
      </button>
    </header>
  );
};
