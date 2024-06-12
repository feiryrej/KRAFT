import './App.css'
import { IndexService } from "./services/indexService.js";
import {useEffect} from "react";

function App() {
const indexService = new IndexService();

const healthCheck = async () => {
    const response = await indexService.getIndex();
    console.log(response);
}

    useEffect(() => {
        healthCheck();
    }, []);

  return (
    <div>
    <h1>App is running!</h1>
    </div>
  )
}

export default App
