import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./components/ProductForm/DataContext";
import ProductsContextProvider from "./contexts/ProductsContext";
import CartContextProvider from "./contexts/CartContext";

ReactDOM.render(
  <BrowserRouter>
    <DataProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ProductsContextProvider>
    </DataProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
