import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import FirstMeeting from "./components/FirstMeeting";
import SpecialMoments from "./components/SpecialMoments";
import Songs from "./components/Songs";
import LoveLetters from "./components/LoveLetters";
import Countdown from "./components/Countdown";
import Surprise from "./components/Surprise";

function App() {
  return (
    <Router>
      <div className="text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/first-meeting" element={<FirstMeeting />} />
          <Route path="/special-moments" element={<SpecialMoments />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/love-letters" element={<LoveLetters />} />
          <Route path="/countdown" element={<Countdown />} />
          <Route path="/surprise" element={<Surprise />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
