import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Visit from './pages/Visit';
import Buy from './pages/Buy';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import PopUp from './pages/PopupMenu';

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/buy"
          element={
            <React.Fragment>
              <Buy />
            </React.Fragment>
          }
        />
        <Route
          path="/popup"
          element={
            <React.Fragment>
              <PopUp />
            </React.Fragment>
          }
        />
        <Route
          path="*"
          element={
            <React.Fragment>
              <Header />
              <main>
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/visit" element={<Visit />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </React.Fragment>
          }
        />
      </Routes>
    </React.Fragment>
  );
};

export default App;