import './App.css';
import Header from './component/Header';
import Index from './component/Index';
import Post from './component/Post';
import PostDetails from './component/PostDetails';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = "/" element={<Index/>}/>
        <Route path = "/posts" element={<Post/>}/>
        <Route path = "/posts/:id" element={<PostDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
