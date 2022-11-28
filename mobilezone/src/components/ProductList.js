import React, { useContext } from "react";
import Title from "./Title";
import Product from "../components/Product";
import { productList } from "../components/productContext";

function ProductList() {
  const product = useContext(productList);
  // console.log("from list");
  // console.log(product);
  // console.log(product.products);
  // console.log(product.products.length);
  // console.log(Array.isArray(product.products));
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            {/* <h6>{product}</h6> */}
            {/* {Array.isArray(product[0]) === 0 ? <>true</> : <>false</>} */}
            {
              product.products === undefined ? (
                <>loading</>
              ) : (
                product.products.map((product) => {
                  return <Product key={product.id} product={product} />;
                })
              )
              // (
              //   Object.entries(product.products).map(([key, value]) => {
              //     console.log(value);
              //     value.map((child) => {
              //       return <Product key={child.id} product={child} />;
              //     });
              //     // return <Product key={key} product={value} />;
              //   })
              // )
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;

// working object method
// Object.keys(product.products).map((keyName, i) => {
//   return (
//     <div key={i}>
//       {" "}
//       <Product key={i} product={product.products{keyName}} />
//     </div>
//   );
// })
