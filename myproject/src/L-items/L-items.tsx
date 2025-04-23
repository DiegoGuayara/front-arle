import "./L-items.css";
import { Paleta } from "../images/svg/L-Items/Paleta";
import { Editar } from "../images/svg/L-Items/Editar";
import { Opciones } from "../images/svg/L-Items/Opciones";
import { Genero } from "../images/svg/L-Items/Genero";
import { GeneroFem } from "../images/svg/L-Items/GeneroFem";
import { Camiseta } from "../images/svg/L-Items/Camiseta";
import { Scene } from "../Shirt-3D/Scene";
import { useState } from "react";

export const L_items = () => {
  const [color, setColor] = useState("white");
  const [menuPaletaisOpen, setmenuPaletaIsOpen] = useState(false);
  const [isEditarOpen, setIsEditarOpen] = useState(false);
  const [isPersonalizarOpen, setIsPersonalizarOpen] = useState(false);
  const [isGeneroOpen, setIsGeneroOpen] = useState(false);
  const [isTipoCamisetaOpen, setIsTipoCamisetaOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const colores = [
    // 🔴 Rojos y Rosas
    "#FF5733", // Coral / Naranja rojizo
    "#DC143C", // Carmesí (oscuro)
    "#CD5C5C", // Rojo indio (medio)
    "#8B0000", // Rojo oscuro
    "#B22222", // Ladrillo refractario (oscuro)
    "#800000", // Granate
    "#FF1493", // Rosa profundo (neón)
    "#FF69B4", // Rosa intenso (vibrante)
    "#FFB6C1", // Rosa claro (pastel)
    "#D87093", // Rosa pálido violeta
    "#FFE4E1", // Rosa brumosa (muy claro)
  
    // 🟠 Naranjas
    "#FF8C00", // Naranja oscuro
    "#FF4500", // Naranja rojo (vivo)
    "#FFA500", // Naranja
    "#FF7F50", // Coral (anaranjado suave)
    "#F4A460", // Marrón arena (suave)
    "#D2691E", // Chocolate (marrón cálido)
  
    // 🟡 Amarillos
    "#FFD700", // Dorado (amarillo fuerte)
    "#F0E68C", // Caqui (amarillo grisáceo)
    "#BDB76B", // Caqui oscuro
    "#FFFACD", // Limón gasa (muy claro)
    "#F5DEB3", // Trigo (amarillo pastel)
    "#FFDAB9", // Melocotón (rosado claro)
    "#FFEFD5", // Melocotón claro
    "#FFE4B5", // Mocasín (amarillo beige)
  
    // 🟢 Verdes
    "#33FF57", // Verde neón
    "#00FF7F", // Verde primavera (neón)
    "#7FFF00", // Verde chartreuse (eléctrico)
    "#9ACD32", // Verde amarillento
    "#00FA9A", // Verde primavera medio
    "#ADFF2F", // Verde amarillo
    "#98FB98", // Verde pálido
    "#90EE90", // Verde claro (pastel)
    "#8FBC8F", // Verde mar oscuro
    "#6B8E23", // Verde oliva oscuro
    "#2E8B57", // Verde mar (oscuro medio)
    "#00FF00", // Verde lima (neón puro)
    "#20B2AA", // Verde mar claro (agua verdosa)
  
    // 🔵 Azules
    "#3357FF", // Azul brillante (eléctrico)
    "#6A5ACD", // Azul pizarra (oscuro medio)
    "#4682B4", // Azul acero (medio)
    "#4169E1", // Azul real
    "#87CEFA", // Azul cielo claro
    "#7B68EE", // Azul pizarra medio
    "#6495ED", // Azul acero claro
    "#00BFFF", // Azul cielo profundo (brillante)
    "#B0E0E6", // Azul polvo (pálido pastel)
    "#191970", // Azul medianoche (muy oscuro)
    "#ADD8E6", // Azul claro (pastel)
    "#F0F8FF", // Azul alicia (muy claro)
    "#B0C4DE", // Azul acero claro (grisáceo)
  
    // 🟦 Turquesas y Cianes
    "#00CED1", // Turquesa medio
    "#40E0D0", // Turquesa
    "#AFEEEE", // Turquesa pálido
    "#00FFFF", // Cian puro
    "#E0FFFF", // Cian claro (pastel)
  
    // 🟣 Púrpuras y Violetas
    "#A020F0", // Púrpura fuerte
    "#8A2BE2", // Violeta azulado (eléctrico)
    "#9370DB", // Púrpura medio
    "#DA70D6", // Orquídea (rosa violeta claro)
    "#BA55D3", // Orquídea medio
    "#DDA0DD", // Ciruela (pastel claro)
    "#9932CC", // Orquídea oscuro
    "#C71585", // Violeta medio oscuro
    "#D8BFD8", // Cardo (violeta pastel)
    "#E6E6FA", // Lavanda (muy claro)
    "#FF00FF", // Magenta / Fucsia
    "#8B008B", // Magenta oscuro
  
    // 🟫 Marrones
    "#A52A2A", // Marrón
    "#8B4513", // Marrón silla de montar
    "#D2691E", // Chocolate
    "#DEB887", // Madera clara (beige tostado)
  
    // ⚪ Blancos y Claros
    "#F5FFFA", // Menta crema
    "#FFFAF0", // Blanco floral
    "#FFFFF0", // Marfil (amarillo blanco)
    "#F0FFF0", // Hielo menta (verde pastel claro)
  
    // ⚫ Grises
    "#2F4F4F", // Gris pizarra oscuro
    "#696969", // Gris oscuro
    "#808080", // Gris medio
    "#A9A9A9", // Gris oscuro medio
  ];
  

  const handlePaletaClick = () => {
    setmenuPaletaIsOpen(!menuPaletaisOpen);
    if (!menuPaletaisOpen) {
      setIsEditarOpen(false);
      setIsPersonalizarOpen(false);
      setIsGeneroOpen(false);
      setIsTipoCamisetaOpen(false);
    }
  };

  const handleEditarClick = () => {
    setIsEditarOpen(!isEditarOpen);
    if (!isEditarOpen) {
      setmenuPaletaIsOpen(false);
      setIsPersonalizarOpen(false);
      setIsGeneroOpen(false);
      setIsTipoCamisetaOpen(false);
    }
  };

  const handlePersonalizarClick = () => {
    setIsPersonalizarOpen(!isPersonalizarOpen);
    if (!isPersonalizarOpen) {
      setmenuPaletaIsOpen(false);
      setIsEditarOpen(false);
      setIsGeneroOpen(false);
      setIsTipoCamisetaOpen(false);
    }
  };

  const handleGeneroClick = () => {
    setIsGeneroOpen(!isGeneroOpen);
    if (!isGeneroOpen) {
      setmenuPaletaIsOpen(false);
      setIsPersonalizarOpen(false);
      setIsEditarOpen(false);
      setIsTipoCamisetaOpen(false);
    }
  };

  const handleTipoCamisetaClick = () => {
    setIsTipoCamisetaOpen(!isTipoCamisetaOpen);
    if (!isTipoCamisetaOpen) {
      setmenuPaletaIsOpen(false);
      setIsPersonalizarOpen(false);
      setIsGeneroOpen(false);
      setIsEditarOpen(false);
    }
  };

  const handleRotation = (degrees: number) => {
    setRotation(degrees);
    setIsRotating(false);
  };

  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSpeed = parseFloat(e.target.value);
    setSpeed(newSpeed);
    setIsRotating(newSpeed > 0);
  };

  return (
    <div className="hoverArea">
      <div className="relleno-cont1">
        <div className="cont1">
          <button className="buttons-L-items" onClick={handlePaletaClick}>
            <Paleta />
          </button>
          <button className="buttons-L-items" onClick={handleEditarClick}>
            <Editar />
          </button>
          <button className="buttons-L-items" onClick={handlePersonalizarClick}>
            <Opciones />
          </button>
          <button className="buttons-L-items" onClick={handleGeneroClick}>
            <Genero />
          </button>
          <button className="buttons-L-items" onClick={handleTipoCamisetaClick}>
            <Camiseta />
          </button>
        </div>
      </div>

      {menuPaletaisOpen && (
        <div className="color-picker">
          <div id="paleta-colores">
            <div className="titulo-paleta">
              <h2>Background Color</h2>
              <button onClick={() => setmenuPaletaIsOpen(false)}>X</button>
            </div>
            <div className="coloresPrincipales">
              <button
                style={{ backgroundColor: "red" }}
                className="color-coloresPrincipales"
                onClick={() => setColor("red")}
              ></button>
              <button
                style={{ backgroundColor: "blue" }}
                className="color-coloresPrincipales"
                onClick={() => setColor("blue")}
              ></button>
              <button
                style={{ backgroundColor: "green" }}
                className="color-coloresPrincipales"
                onClick={() => setColor("green")}
              ></button>
              <input
                type="color"
                name="color"
                id="color"
                value={color}
                className="color-coloresPrincipales"
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
            <div id="cuadro-cuadricula">
              {colores.map((color, index) => {
                return (
                  <button
                    key={index}
                    style={{ backgroundColor: color }}
                    className="colores-cuadro-cuadricula"
                    onClick={() => setColor(color)}
                  ></button>
                );
              })}
            </div>
            <button className="opciones">Upload Design</button>
            <button className="opciones" onClick={() => setColor("white")}>
              Delete Design
            </button>
            <button className="opciones">Delete Background</button>
          </div>
        </div>
      )}

      {isEditarOpen && (
        <div className="editar-container">
          <div className="titulo-editar">
            <h2>Personalizacion</h2>
            <button onClick={() => setIsEditarOpen(false)}>X</button>
          </div>
          <label className="check-label">
            <input type="checkbox" />
            Cuello
          </label>
          <label className="check-label">
            <input type="checkbox" />
            Brazalete
          </label>
          <label className="check-label">
            <input type="checkbox" />
            Dobladillo inferior
          </label>
          <label className="check-label">
            <input type="checkbox" />
            Mangas
          </label>
          <label className="check-label">
            <input type="checkbox" />
            Interior
          </label>
          <label className="check-label">
            <input type="checkbox" />
            Fondo
          </label>
          <button>Personalizar colores</button>
        </div>
      )}

      {isPersonalizarOpen && (
        <div className="personalizar-container">
          <div className="titulo-personalizar">
            <h2>Velocidad de animación</h2>
            <button onClick={() => setIsPersonalizarOpen(false)}>X</button>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            className="velocidadAnimacion"
            value={speed}
            onChange={handleSpeedChange}
          />
          <div className="gradosCamiseta">
            <button onClick={() => handleRotation(0)}>0°</button>
            <button onClick={() => handleRotation(45)}>45°</button>
            <button onClick={() => handleRotation(90)}>90°</button>
            <button onClick={() => handleRotation(135)}>135°</button>
            <button onClick={() => handleRotation(180)}>180°</button>
            <button onClick={() => handleRotation(225)}>225°</button>
            <button onClick={() => handleRotation(270)}>270°</button>
            <button onClick={() => handleRotation(315)}>315°</button>
            <button onClick={() => handleRotation(360)}>360°</button>
          </div>
          <button className="direccionAnimacion">Izquierda</button>
          <button className="direccionAnimacion">Derecha</button>
        </div>
      )}

      {isGeneroOpen && (
        <div className="genero-container">
          <div className="titulo-genero">
            <h2>Genero</h2>
            <button
              onClick={() => setIsGeneroOpen(false)}
              className="titulo-genero-button"
            >
              X
            </button>
          </div>
          <div className="genero-container-buttons">
            <button>
              <GeneroFem />
            </button>
            <button>
              <Genero />
            </button>
          </div>
        </div>
      )}

      {isTipoCamisetaOpen && (
        <div className="tipo-camiseta-container">
          <div className="titulo-tipo-camiseta">
            <h2>Tipo de camiseta</h2>
            <button
              onClick={() => setIsTipoCamisetaOpen(false)}
              className="titulo-tipo-camiseta-button"
            >
              X
            </button>
          </div>
          <div className="tipo-camiseta-container-buttons">
            <button>
              Camiseta <span>👕</span>
            </button>
            <button>
              Camibuso <span>👚</span>
            </button>
            <button>
              Camisa <span>👔</span>
            </button>
            <button>
              Buso <span>🧥</span>
            </button>
            <button>
              Saco <span>🧥</span>
            </button>
            <button>
              Esqueleto <span>🦺</span>
            </button>
          </div>
        </div>
      )}
      <Scene
        color={color}
        rotation={rotation}
        speed={speed}
        isRotating={isRotating}
      />
    </div>
  );
};
