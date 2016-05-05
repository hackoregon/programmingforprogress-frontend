import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router"

import InfographicPage from "./components/InfographicPage"

const app = document.getElementById('app');

ReactDOM.render(
<Router history={hashHistory}>
    <Route path="/" component={InfographicPage}></Route>
</Router>,
app);

