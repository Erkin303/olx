
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
  return (
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
  );
}

export default App;

