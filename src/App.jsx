import { Suspense, useContext } from "react";
import { Fragment } from "react";
import "./index.css";

import { AppContext } from "./context/AppContext.jsx";
import useRoutesHook from "./routes/routes";
import { useAxiosConfig } from "./assets/js/axiosConfig";
import Loader from "./pages/loading/Loader";
import axios from "axios";
import Header from "./layout/Header/Header";

function App() {
  const routes = useRoutesHook();
  const {} = useAxiosConfig();
  const { isLoading } = useContext(AppContext);

  return (
    <Fragment>
      {isLoading && <Loader />}

      <Header />
      <Suspense fallback={<Loader />}>
        <main>{routes}</main>
      </Suspense>
      <h2>Footer</h2>
    </Fragment>
  );
}

export default App;
