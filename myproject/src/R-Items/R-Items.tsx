import "./R-Items.css";
import { Add } from "../images/svg/R-Items/Add";
import { Manual } from "../images/svg/R-Items/Manual";
import { Save } from "../images/svg/R-Items/Save";
import { Download } from "../images/svg/R-Items/Download";
import { Share } from "../images/svg/R-Items/Share";
import { Cancel } from "../images/svg/R-Items/Cancel";
import { Help } from "../images/svg/R-Items/Help";
import { useState } from "react";

export const R_Items = () => {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const infoTexts = {
    1: "Esta es la información para el botón 1. Aquí puedes agregar detalles sobre la primera opción.",
    2: "Información del botón 2. Explica aquí la funcionalidad de la segunda opción.",
    3: "Contenido del botón 3. Describe los aspectos importantes de esta tercera opción.",
    4: "Detalles del botón 4. Incluye aquí la información relevante para la cuarta opción.",
    5: "Explicación del botón 5. Describe los puntos clave de esta quinta opción.",
    6: "Información del botón 6. Agrega aquí los detalles importantes de la sexta opción.",
    7: "Contenido del botón 7. Explica aquí la funcionalidad de la séptima opción.",
    8: "Detalles del botón 8. Incluye aquí la información relevante para la octava opción.",
    9: "Explicación del botón 9. Describe los puntos clave de esta novena opción.",
  };

  const handleHelpClick = () => {
    setIsHelpOpen(!isHelpOpen);
  };

  const handleInfoButtonClick = (buttonIndex: number) => {
    setActiveButton(buttonIndex);
  };

  return (
    <div className="hoverArea2">
      <div className="relleno-cont2">
        <div className="cont2">
          <button className="buttons-R-items">
            <Add />
          </button>
          <button className="buttons-R-items">
            <Manual />
          </button>
          <button className="buttons-R-items">
            <Save />
          </button>
          <button className="buttons-R-items">
            <Download />
          </button>
          <button className="buttons-R-items">
            <Share />
          </button>
          <button className="buttons-R-items">
            <Cancel />
          </button>
          <button className="buttons-R-items" onClick={handleHelpClick}>
            <Help />
          </button>
        </div>
      </div>

      {isHelpOpen && (
        <div className="help-container">

          <div className="cont-closeButton">
            <button onClick={() => setIsHelpOpen(false)} className="closeButton">X</button>
          </div>

          <div className="info-buttons">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
              <button
                key={index}
                className={activeButton === index ? "active" : ""}
                onClick={() => handleInfoButtonClick(index)}
              >
                Info {index}
              </button>
            ))}
          </div>
          <div className="context-bottoms">
            <p>
              {activeButton
                ? infoTexts[activeButton as keyof typeof infoTexts]
                : "Selecciona un botón para ver su información"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
