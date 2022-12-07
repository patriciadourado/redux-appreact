
import React from "react";
import { Provider } from "react-redux";
import CaseList from "./components/CaseList";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <CaseList />
    </Provider>
  );
}

export default App;
