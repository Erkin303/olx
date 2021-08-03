
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { Home } from './pages/Home/Home';
import { Child } from './pages/child/child';
import { Header } from './containers/Header/Header';
import { Category } from './pages/Category/Category';
import { Container } from './containers/Container/Container';
import ThemeContext from './theme-context';
import React from 'react';
import { useState } from 'react'



const pages = [
  {
    path: "/", component: <Home />, exact: true
  },
  {
    path: "/child", component: <Child />
  },
  {
    path: "/:category", component: <Category />
  },
  {
    component: <div><h1>404 error</h1></div>
  }
]


function App() {
  const [theme, setTheme] = useState("dark");

  const Toggletheme = () => {
    setTheme(theme == "dark" ? "light" : "dark")
  }

  console.log(theme);
  console.log("salom");

  return (
    <ThemeContext.Provider value={{ theme, Toggletheme }}>
      <div className="App">
        <Container>
          <Switch>
            {pages.map((v, i) => {
              return <Route path={v.path} key={v.path} exact={v.exact}>
                {v.component}
              </Route>
            })}
          </Switch>
        </Container>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

