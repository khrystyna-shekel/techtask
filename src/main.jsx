import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/techtask">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
