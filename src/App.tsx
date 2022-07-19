import { BrowserRouter } from "react-router-dom";
import PageTemplate from "./components/common/pageTemplate/pageTemplate";
import Router from "./components/router";

function App() {
  return (
    <BrowserRouter>
      <PageTemplate>
        <Router />
      </PageTemplate>
    </BrowserRouter>
  );
}

export default App;
