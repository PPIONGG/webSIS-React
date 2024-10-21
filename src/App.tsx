import { Route, Routes } from "react-router-dom";
import LayoutDelivery from "./layouts/main";
import { usePageTitle } from "./hooks/usePageTitle";
import { routes } from "./routes/routes";

function App() {
  usePageTitle()
  return (
    <Routes>
      <Route path="/" element={<LayoutDelivery />}>
        {routes}
      </Route>
    </Routes>
  );
}

export default App;
