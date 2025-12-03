import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store';
import AppNavbar from './components/Navbar';
import Home from './components/Home';
import Stagiaires from './components/Stagiaires';
import Absences from './components/Absences';
import 'bootstrap/dist/css/bootstrap.min.css';
import './medieval.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stagiaires" element={<Stagiaires />} />
          <Route path="/absences" element={<Absences />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
