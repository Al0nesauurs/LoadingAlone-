import './App.scss';
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';

function App() {


  return (
    <Router>
      {/* A <Routes > looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes >
        <Route path="/" element={Home()}>
        </Route>
        <Route // redirect
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes >

    </Router >
  );
}

export default App;
