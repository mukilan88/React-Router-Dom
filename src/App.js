import { Link, Route, Routes } from "react-router-dom";
import About from "./About.js";
import Contact from "./Contact.js";
function App() {
  return (
    <div>
      <h1>Happy to Link a page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;
