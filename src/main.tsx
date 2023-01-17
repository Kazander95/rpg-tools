import { Provider as ReduxProvider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./store";
import { debounce } from "lodash";
import { saveState } from "./browserStorage";

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>
);
