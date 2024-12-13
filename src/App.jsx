 
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import "./App.css"; 
import Layout from "./components/layout/Layout";
import  Dashboard  from "./components/dashboard/Dashboard";
import Overview from "./pages/OverView";
import Calculator from "./pages/Calculator";
import CsvToJsonAndTableWithAdvancedFilters from "./components/table/CsvToJsonAndTableWithFilters";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/table" element={<CsvToJsonAndTableWithAdvancedFilters />} />
          </Routes>
          <Routes>
            <Route path="/overview" element={<Overview />} />
          </Routes>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Routes>
            <Route path="/calculator" element={<Calculator />} />
          </Routes>

        </Layout>
      </Router>
    </>
  );
}

export default App;
