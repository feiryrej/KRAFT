import "./App.css";
import { IndexService } from "./services/indexService.js";
import { useEffect, useState, useCallback } from "react";
import KraftLogo from "./assets/images/KRAFT.png";

function App() {
  const indexService = new IndexService();

  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);
  const [statusText, setStatusText] = useState(null);

  const healthCheck = useCallback(async () => {
    try {
      const { statusText, status, data } = await indexService.getIndex();
      setStatus(status);
      setMessage(data.message);
      setStatusText(statusText);
    } catch (error) {
      setStatus(error.response.status);
      setMessage(error.response.data.message);
      setStatusText(error.response.statusText);
    }
  }, []);

  useEffect(() => {
    healthCheck();
  }, [healthCheck]);

  return (
    <div className="main">
      <img src={KraftLogo} alt="Kraft Logo" />
      <div>
        <h1>
          {status === 500 ? "Kraft is not running!" : "Kraft is running!"}
        </h1>
        <div>
          <h2>Status: {status}</h2>
          <h2>Message: {message}</h2>
          <h2>Status Text: {statusText}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
