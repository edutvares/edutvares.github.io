import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";
import IndexPage from "./pages/index";
import NotFoundPage from "./pages/404";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Layout>
      <GlobalStyle />
    </Router>
  );
}

export default App;
