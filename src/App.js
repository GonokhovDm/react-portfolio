import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';


import RuPage from "./Pages/ru/ruPage";
import EnPage from "./Pages/en/enPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {

  const [language, setLanguage] = useState('ru');

  return (
    <div className="App">
      <Routes>
				<Route path="/" element={<RuPage language={language} setLanguage={setLanguage}/>} />
        <Route path="en" element={<EnPage language={language} setLanguage={setLanguage} />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
    </div>
  );
}

export default App;
