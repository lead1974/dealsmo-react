import { BrowserRouter as Router,Routes, Route, useRoutes, } from 'react-router-dom';
import Home from './routes/home/home.component';

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    //{ path: "component2", element: <Component2 /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;