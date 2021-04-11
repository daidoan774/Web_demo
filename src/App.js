import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Course from "./pages/Course";
import AdminCourses from "./pages/AdminCourses";
import AdminUsers from "./pages/AdminUsers";

// Layout
import AppLayout from "./layouts/AppLayout";
import AdminLayout from "./layouts/AdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Route Admin */}
        <Route path="/admin">
          <AdminLayout>
            <Switch>
              <Redirect exact from="/admin" to="/admin/courses" />
              <Route path="/admin/courses">
                <AdminCourses />
              </Route>
              <Route path="/admin/users">
                <AdminUsers />
              </Route>
            </Switch>
          </AdminLayout>
        </Route>

        {/* Route Main */}
        <Route path="/">
          <AppLayout>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/courses/:category">
                <Courses />
              </Route>
              <Route path="/course/:courseId">
                <Course />
              </Route>
            </Switch>
          </AppLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
