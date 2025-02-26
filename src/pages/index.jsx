import React, { useState } from "react";

function Products() {
  const [filter, setFilter] = useState("rating");
  const [refresh, setRefresh] = useState(false);
  const { data, isPending, error } = useGetData({
    collectionName: "products",
    refresh,
    filter,
  });
  const handledelete = async (id) => {
    document.getElementById("my_modal_1").showModal();
    const status = await DeleteItem("products", id);
    setRefresh((prev) => !prev);
    document.getElementById("my_modal_1").closest("dialog").close();
  };

  return (
    <section>
      <div className="container">
        <div
          className="
          flex justify-between items-center
             pt-5  pb-3 border-b-4"
        >
          <h1>Products</h1>
          <div className="flex items-center gap-5">
            <select
              // value={filter}
              // onChange={(e) => setFilter(e.target.value)}
              className="select select-sm select-bordered w-full max-w-xs border-[#cdcbcb]"
            >
              <option value="rating">Rating⭐️</option>
              <option value="price">Price</option>
              <option value="stock">Stock</option>
              <option value={"title"}>A-Z</option>
              <option value={"!title"}>Z-A</option>
            </select>
            <button
              onClick={() => {
                document.getElementById("my_modal_3").showModal();
              }}
              className="flex items-center justify-center btn btn-square btn-outline btn-sm  px-8 "
            >
              <p className="text-md">Add</p>
            </button>
          </div>
        </div>
        {isPending && (
          <div className="mt-10 flex justify-center items-center">
            <span
              style={{ zoom: 5 }}
              className="loading loading-spinner text"
            ></span>
          </div>
        )}
        {error.status && <p className="text-red-500">{error.message}</p>}
        {!isPending && !error.status && (
          <div className="grid gap-14 grid-cols-1 md:grid-cols-2 xl:grid-cols-3  md:gap-24 xl:gap-x-48 mt-10 pb-20 strech">
            {data.map(
              ({ id, title, description, image, price, rating, stock }) => (
                <div
                  key={id}
                  className="product flex justify-self-center items-stretch"
                >
                  <div className="card w-[320px] bg-base-100 shadow-[0_3px_15px_0] shadow-primary">
                    <figure>
                      <img src={image} alt="" width={250} />
                    </figure>
                    <div className="card-body">
                      <h2>
                        Title: <span>{title}</span>
                      </h2>
                      <p>
                        Price: <span>{price}💲</span>
                      </p>
                      <p>
                        Stock: <span>{stock}</span>
                      </p>
                      <p>
                        Rating: <span>{rating}🌟</span>
                      </p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary text-[16px]">
                          Buy Now
                        </button>
                        <button
                          onClick={() => handledelete(id)}
                          className="btn btn-error text-[16px]"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <ProductModal setRefresh={setRefresh} />
      {/* deleteModal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </dialog>
    </section>
  );
}

export default Products;
