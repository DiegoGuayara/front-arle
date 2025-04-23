import "./App.css";
import React from "react";
import { Header } from "./Header/Header";
import { L_items } from "./L-items/L-items";
import { Scene } from "./Shirt-3D/Scene";
import { R_Items } from "./R-Items/R-Items";

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="App">
        <L_items />
        <Scene />
        <R_Items />
      </main>
    </div>
  );
};
