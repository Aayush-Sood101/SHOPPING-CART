import { Fragment } from "react"
import { Routes , Route } from "react-router-dom"
import ProductListPage from "./pages/product-list"
import ProductDetailsPage from "./pages/product-details"
import CartListPage from "./pages/cart-list"
import NotFoundPage from "./pages/not-found"

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path="/product-list" element={<ProductListPage/>}></Route>
        <Route path="/product-details/:id" element={<ProductDetailsPage />}></Route>
        <Route path="cart-list" element={<CartListPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </Fragment>
  )
}

export default App
