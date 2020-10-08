import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

//COMPONENTS
import Header from "./components/Header";
import Stickyomponent from "./components/Stickyomponent";
import LotsOftext from "./components/LotsOfText";

export default function App() {
  const sticky = useRef(null);
  const [stickyPos, setStickyPos] = useState(null);
  useEffect(() => {
    setStickyPos(sticky.current.offsetTop);
  }, [sticky]);

  return (
    <div className="App">
      <Header />
      <main>
        <LotsOftext less={true} />
        <div ref={sticky}>
          <Stickyomponent stickyPos={stickyPos} />
        </div>
        <LotsOftext />
      </main>
    </div>
  );
}
