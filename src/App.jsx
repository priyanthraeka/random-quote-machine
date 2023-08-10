import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

function App() {
  const [quote, setQuote] = useState([]);
  const [color, setColor] = useState("");

  const fetchQuote = async () => {
    const response = await fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    const data = await response.json();
    setQuote(data.quotes[Math.floor(Math.random() * data.quotes.length)]);
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  const onClickHandler = () => {
    fetchQuote();
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div
      className="flex justify-center items-center h-screen transition-colors duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="bg-white p-10 rounded-md w-[576px] flex flex-col justify-center gap-7">
        <div
          style={{ color: color }}
          className="flex flex-col justify-center gap-7"
        >
          <div className="text-center font-lato">
            <p className={`text-2xl`}>
              <span className="inline-block me-2">
                <FaQuoteLeft size={27} color={color} />
              </span>
              {quote.quote}
            </p>
          </div>
          <div>
            <p className={`font-lato flex items-center justify-end text-lg`}>
              {"— " + quote.author}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button
            className={`p-3 hover:opacity-80 ease-in-out transition-all duration-300 text-white border rounded-md w-fit font-poppins`}
            style={{ borderColor: color, backgroundColor: color }}
            onClick={onClickHandler}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
