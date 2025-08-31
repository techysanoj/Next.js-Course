"use client" // this will also give us error if we are using use server inside the function
// so we need to seperate our server action for this

import { useActionState } from "react";
import {FormState, createProduct, editProduct} from "@/actions/products"
import { Product } from "@/app/products-db/page";


export default function EditProductForm({product} : {product: Product}) {

  const initialState: FormState = {
    errors: {},
  };

  const editProductWithId = editProduct.bind(null, product.id);

  const [state, formAction, isPending] = useActionState(
    editProductWithId,
    initialState
  );


  return (
    <form action={formAction} className="p-4 space-y-4 max-w-96">
        {/* <input type="hidden" name="id" value={product.id}></input>  one way to send id but this will expose id in html*/} 


      <div>
        <label className="text-white">
          Title
          <input
            type="text"
            className="block w-full p-2 text-black border rounded"
            name="title"
            defaultValue={product.title}
          ></input>
        </label>
        {state.errors.title && (
          <p className="text-red-500">{state.errors.title}</p>
        )}
      </div>

      <div>
        <label className="text-white">
          Price
          <input
            type="number"
            className="block w-full p-2 text-black border rounded"
            name="price"
            defaultValue={product.price}
          ></input>
        </label>
        {state.errors.price && (
          <p className="text-red-500">{state.errors.price}</p>
        )}
      </div>
      <div>
        <label className="text-white">
          Description
          <input
            type="text"
            className="block w-full p-2 text-black border rounded"
            name="description"
            defaultValue={product.description ?? ""}
          ></input>
        </label>
        {state.errors.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}
      </div>
      <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
        disabled = {isPending}>
            Submit
        </button>
      {/* <Submit></Submit> */}
    </form>
  );
}
