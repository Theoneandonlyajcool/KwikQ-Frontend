import { HashRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
