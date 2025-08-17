import { Routes, Route } from "react-router-dom";
import MenuSuperior from "./components/MenuSuperior";
import InclusaoLivros from "./components/InclusaoLivros";
import ManutencaoLivros from "./components/ManutencaoLivros";
import ResumoLivros from "./components/ResumoLivros";

const App = () => {
  return(
    <>
      <MenuSuperior />
      <Routes>
        <Route path="/" element={<ResumoLivros />} />
        <Route path="/manut" element={<ManutencaoLivros />} />
        <Route path="/inclusao" element={<InclusaoLivros />} />
      </Routes>
    </>
  )
};
export default App;
