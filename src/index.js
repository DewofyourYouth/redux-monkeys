import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const reducer = (state = { monkeyCount: 0 }, action) => {
  switch (action.type) {
    case "MORE":
      return { monkeyCount: (state.monkeyCount += 1) };
    case "LESS":
      return {
        monkeyCount:
          state.monkeyCount > 0 ? (state.monkeyCount -= 1) : state.monkeyCount
      };
    case "RESET":
      return { monkeyCount: 0 };
    default:
      return state;
  }
};

const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
