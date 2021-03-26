import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./components/ProductForm/DataContext"


ReactDOM.render(
  <BrowserRouter>
  <DataProvider>
    <App />
  </DataProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
