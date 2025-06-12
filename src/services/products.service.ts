import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { fetchProducts } from "../redux/slice/product-slice";
import { Credentials, State } from "../interfaces";

class productsService {
  static async deleteProduct(id: number) {
    await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });
    // .then(result=>result.json()).then(data => data)
    // console.log(response)
    // return response;
  }

  static async getProducts(dispatch: any) {
    (dispatch as ThunkDispatch<State, Credentials, AnyAction>)(fetchProducts());
  }
  static async getProduct() {
    try {
      const response = await fetch("http://localhost:3000/products");
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async insertProduct(data: any) {
    try {
      const response = await fetch("http://localhost:3000/products/", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async updateProduct(id: any, data: any) {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
}
export default productsService;
