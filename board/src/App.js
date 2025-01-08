import {BrowserRouter, Route, Routes} from "react-router-dom";
import List from "./component/board/List";
import Write from "./component/board/Write";
import React from "react";
// import "../../css/not_found.scss"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />}/>
        <Route path="/write" element={<Write />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
