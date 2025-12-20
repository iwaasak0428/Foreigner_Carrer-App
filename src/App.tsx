import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { AppLayout } from './components/layout/AppLayout';
import Dashboard from './pages/Dashboard';
import CareerPage from './pages/CareerPage';
import FinancePage from './pages/FinancePage';
import LifePage from './pages/LifePage';
import MenuPage from './pages/MenuPage';
import JobsPage from './pages/JobsPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/finance" element={<FinancePage />} />
            <Route path="/life" element={<LifePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </Router>
  );
}

export default App;
