import { Fragment } from "react";
import Banner from "../components/banner";
import ProductsList from "../components/products-list";

const ProductsPage = () => {
  return (
    <Fragment>
      <Banner />
      <ProductsList />
    </Fragment>
  );
};

export default ProductsPage;
