import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import {
  AppDesign,
  Company,
  Contact,
  GraphicDesign,
  Home,
  Locations,
  WebDesign,
} from "./pages";
import { ScrollToTop } from "./generalComponents";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/app-design" element={<AppDesign />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
