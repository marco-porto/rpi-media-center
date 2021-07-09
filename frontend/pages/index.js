export default function Home() {
  //https://vizer.tv
  return (
    <div className="w-screen h-screen">
      <div className="relative w-full h-full">
        <iframe className="w-full h-full" src="" allowFullScreen></iframe>
        <div className="absolute flex flex-col items-center w-20 p-2 mx-8 text-white bg-opacity-25 rounded-full h-44 bg-dockPurple top-20 ">
          <div className="m-2">
            <div className="p-6">
              <button onClick={handleShutdown}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0969 4.24756C13.0058 5.12858 13.6246 6.25097 13.8753 7.47282C14.1259 8.69467 13.997 9.9611 13.505 11.112C13.013 12.2629 12.1799 13.2465 11.111 13.9386C10.0421 14.6307 8.78549 15 7.5 15C6.21451 15 4.95789 14.6307 3.88902 13.9386C2.82014 13.2465 1.98702 12.2629 1.49499 11.112C1.00296 9.9611 0.874112 8.69467 1.12474 7.47282C1.37538 6.25097 1.99423 5.12858 2.90306 4.24756"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7.50366 1V7.99898"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <button onClick={handleMinimize}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.55L7.5 1L14 5.55V12.7C14 13.0448 13.8478 13.3754 13.5769 13.6192C13.306 13.863 12.9386 14 12.5556 14H2.44444C2.06135 14 1.69395 13.863 1.42307 13.6192C1.15218 13.3754 1 13.0448 1 12.7V5.55Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5.33331 14V7.5H9.66665V14"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

async function handleShutdown() {
  const res = await fetch(`./api/control/shutdown`);
  const data = await res.json();

  console.log(data);
}

async function handleMinimize() {
  const res = await fetch(`./api/control/minimize`);
  const data = await res.json();

  console.log(data);
}
