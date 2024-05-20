import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home";
import Sobre from "./Sobre"
import Header from "./Navbar";
import Contato from "./Contato";
import Rodape from "./Rodape";


const App = () => {
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sobre" element={<Sobre/>} />
            <Route path="/contato" element={<Contato/>} />
        </Routes>
        <Rodape /> 
        </BrowserRouter>

    )
}

export default App;