import { useState, useEffect } from "react";
import Dock from "../components/dock";

export default function Home() {
  const [counter, setCounter] = useState(5);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  console.log(counter, hide);

  //https://vizer.tv
  return (
    <div className="w-screen h-screen">
      <div className="relative w-full h-full">
        <iframe className="w-full h-full" src="" allowFullScreen></iframe>
        {counter == 0 ? <Dock hidden /> : <Dock />}
      </div>
    </div>
  );
}
