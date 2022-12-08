import DigitalCard from "./DigitalCard/DigitalCard";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { Helmet } from "react-helmet";

function App() {

  return (
    <div>
      <Helmet>
        <title> Meri Pahchaan | Digital Visiting Card</title>
        <meta name="keyword" content="Digital Card | Make Digital Visiting Card Online | Meri Pahchaan | Trickysys | Digital Visiting Card Online" />
        <meta name="description" content="Make Your Digital Visiting Cards Online" />
        <meta name="author" content="Meri Pahchaan | Make Digital Visiting Card Online" />
        <meta property="og:title" content="Meri Pahchaan | Make Digital Visiting Card Online" />
        <meta property="og:description" content="Make Your Digital Visiting Cards Online" />
        <meta property="og:image" content="/images/trickyOne.png" />
        <meta name="twitter:card" content="summary_large" />
      </Helmet>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<DigitalCard />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
