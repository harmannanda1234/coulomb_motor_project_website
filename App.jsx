import { useState } from "react"
import Background from "./components/bg/bg";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";

const App = () => {
  let heroDat = [
    {text1: "chase your dream", text2: ", live it"},
    {text1: "be the change", text2: ", let's go"},
    {text1: "at the top", text2: ", passion within"}
  ]

  const [heroCount, setHeroCount] = useState(2);
  const [PlayStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background PlayStatus={PlayStatus} heroCount={heroCount} />
      <Navbar/>
      <Hero
      setPlayStatus={setPlayStatus}
      setHeroCount={setHeroCount}
      heroDat={heroDat[heroCount]}
      heroCount={heroCount}
      PlayStatus={PlayStatus}
      />
    </div>
  );
}

export default App;
