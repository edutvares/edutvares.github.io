import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";
import IndexPage from "./pages/index";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="*">
            <h2>Deu errado aqui</h2>
          </Route>
        </Switch>
      </Layout>
      <GlobalStyle />
    </Router>
  );
}

export default App;
