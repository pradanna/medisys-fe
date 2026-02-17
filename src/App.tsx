import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-96 flex items-center justify-center text-slate-400">
                Dashboard Content Area
              </div>
            }
          />
          <Route path="pendaftaran" element={<h1>Halaman Pendaftaran</h1>} />
          <Route path="poli" element={<h1>Halaman Poliklinik</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
