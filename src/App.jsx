import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { CTA } from "./layout/components/cta";
import { Home } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="company" element={<CTA />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
