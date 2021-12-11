import "./styles/App.css"

import Header from "./components/landingpage/Header.js"
import Download from "./components/landingpage/Download.js"
// import Statistics from "./components/landingpage/Statistics.js"
import Gameplay from "./components/landingpage/Gameplay.js"
// import Boatlist from "./components/landingpage/Boatlist.js"
import Team from "./components/landingpage/Team.js"
import Footer from "./components/landingpage/Footer.js"

function App() {
  return (
    <div className="App">
      <Header />
      <Download />
      {/* <Statistics /> */}
      <Gameplay />
      {/* <Boatlist /> */}
      <Team />
      <Footer />
    </div>
  )
}

export default App
