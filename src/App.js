import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';
import { ColorPicker } from './pages';

const Editor = lazy(() => import('./pages/Editor'));

const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));
const Sidebar = lazy(() => import('./components/Sidebar'));
const ThemeSettings = lazy(() => import('./components/ThemeSettings'));
const Ecommerce = lazy(() => import('./pages/Ecommerce'));
const Orders = lazy(() => import('./pages/Orders'));
const Calendar = lazy(() => import('./pages/Calendar'));
const Employees = lazy(() => import('./pages/Employees'));
const Pyramid = lazy(() => import('./pages/charts/Pyramid'));
const Customers = lazy(() => import('./pages/Customers'));
const Kanban = lazy(() => import('./pages/Kanban'));
const Line = lazy(() => import('./pages/charts/Line'));
const Area = lazy(() => import('./pages/charts/Area'));
const Bar = lazy(() => import('./pages/charts/Bar'));
const Pie = lazy(() => import('./pages/charts/Pie'));
const Financial = lazy(() => import('./pages/charts/Financial'));
const ColorMapping = lazy(() => import('./pages/ColorPicker'));

function App() {
  const { activeMenu, currentMode, currentColor, themeSettings, setThemeSettings } = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed bottom-4 right-4" style={{ zIndex: 1000 }}>
              <TooltipComponent content="Settings" position="Top">
                <button
                  type="button"
                  style={{ background: currentColor, borderRadius: '50%' }}
                  className="p-3 text-3xl text-white hover:drop-shadow-xl hover:bg-light-gray"
                  onClick={() => setThemeSettings(true)}
                >
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
            {activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}
            <div className={activeMenu ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full' : 'bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2'}>
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                <Navbar />
              </div>
              <div>
                {themeSettings && (<ThemeSettings />)}
                <Routes>
                  {/* Dashboard */}
                  <Route path="/" element={<Ecommerce />} />
                  <Route path="/ecommerce" element={<Ecommerce />} />

                  {/* pages */}
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/employees" element={<Employees />} />
                  <Route path="/customers" element={<Customers />} />

                  {/* apps */}
                  <Route path="/kanban" element={<Kanban />} />
                  <Route path="/editor" element={<Editor />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/color-picker" element={<ColorPicker />} />

                  {/* charts  */}
                  <Route path="/line" element={<Line />} />
                  <Route path="/area" element={<Area />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/financial" element={<Financial />} />
                  <Route path="/color-mapping" element={<ColorMapping />} />
                  <Route path="/pyramid" element={<Pyramid />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
