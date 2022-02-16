import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./reduxProject/components/header";
import ProductDetails from "./reduxProject/components/productDetails";
import ProductListing from "./reduxProject/components/productList";

function App() {
  return (
    <div>
      <div className="container">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={ProductListing} />
            <Route
              exact
              path="/product/:productId"
              component={ProductDetails}
            />

            <Route>
              <h2>404 Page Not Found!!</h2>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
