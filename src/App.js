import { Routes, Route } from "react-router-dom";
import Root from "./routes/root/root.component";
import ErrorPage from "./routes/error-page/error-page.component";
import Poke from "./routes/poke/poke.components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route path="poke-builder/*" element={<Poke />} />
      </Route>
    </Routes>
  );
}
export default App;
