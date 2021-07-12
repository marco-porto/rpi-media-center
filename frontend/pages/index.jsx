import { useState, useEffect } from "react";
import Dock from "../components/dock";

export default function Home() {
  //https://vizer.tv

  return (
    <div className="w-screen h-screen">
      <div className="relative w-full h-full">
        <iframe
          className="w-full h-full"
          src="https://vizer.tv"
          allowFullScreen
        ></iframe>
        <Dock/>
      </div>
    </div>
  );
}