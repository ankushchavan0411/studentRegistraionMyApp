import { Route, Switch } from "react-router-dom";
import * as Routes from "./lib/constants/routes";
import AddStudent from "./component/AddStudent";
import { ViewStudent } from "./component/ViewStudent";
import { Container } from "./component/layout/Container";

const App = () => (
  <Container>
    <Switch>
      <Route exact path={Routes.VIEW_STUDENT} component={ViewStudent} />
      <Route exact path={Routes.ADD_STUDENT} component={AddStudent} />
      <Route exact path="*" component={ViewStudent} />
    </Switch>
  </Container>
);

export default App;
