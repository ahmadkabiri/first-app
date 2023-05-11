import React from "react";
import "./AddNewProduct.css";
import { useState } from "react";
export default function AddNewProduct({ getAllProducts }) {
  const [newProductTitle, setNewProductTitle] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductCount, setNewProductCount] = useState("");
  const [newProductImg, setNewProductImg] = useState("");
  const [newProductPopularity, setNewProductPopularity] = useState("");
  const [newProductSale, setNewProductSale] = useState("");
  const [newProductColors, setNewProductColors] = useState("");

  const addNewProduct = (event) => {
    event.preventDefault();
    const newProductInfos = {
      title: newProductTitle,
      price: newProductPrice,
      count: newProductCount,
      img: newProductImg,
      popularity: newProductPopularity,
      sale: newProductSale,
      colors: newProductColors,
    };

    fetch(`http://localhost:8000/api/products/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProductInfos),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        getAllProducts();
        emptyInput();
      });
  };

  function emptyInput  () {
    setNewProductTitle('')
    setNewProductPrice('')
    setNewProductCount('')
    setNewProductImg('')
    setNewProductPopularity('')
    setNewProductSale('')
    setNewProductColors('')
  };

  return (
    <div className="products-main">
      <h1 className="products-title">افزودن محصولات جدید</h1>
      <form className="add-products-form">
        <div className="add-products-form-wrap">
          <div className="add-product-form-group">
            <input
              type="text"
              placeholder="اسم محصول را بنویسید"
              className="add-product-input"
              value={newProductTitle}
              onChange={(event) => setNewProductTitle(event.target.value)}
            />
          </div>
          <div className="add-product-form-group">
            <input
              type="text"
              placeholder="قیمت محصول را بنویسید"
              className="add-product-input"
              value={newProductPrice}
              onChange={(event) => setNewProductPrice(event.target.value)}
            />
          </div>
          <div className="add-product-form-group">
            <input
              type="text"
              placeholder="موجودی محصول را بنویسید"
              className="add-product-input"
              value={newProductCount}
              onChange={(event) => setNewProductCount(event.target.value)}
            />
          </div>
          <div className="add-product-form-group">
            <input
              type="text"
              placeholder="آدرس عکس محصول را بنویسید"
              className="add-product-input"
              value={newProductImg}
              onChange={(event) => setNewProductImg(event.target.value)}
            />
          </div>
          <div className="add-product-form-group">
            <input
              type="text"
              placeholder="میزان محبوبیت این محصول را بنویسید"
              className="add-product-input"
              value={newProductPopularity}
              onChange={(event) => setNewProductPopularity(event.target.value)}
            />
          </div>
          <div className="add-product-form-group">
            <input
              type="text"
              placeholder="میزان فروش محصول را بنویسید"
              className="add-product-input"
              value={newProductSale}
              onChange={(event) => setNewProductSale(event.target.value)}
            />
          </div>
          <div className="add-product-form-group">
            <input
              type="text"
              placeholder="تعداد رنگ‌بندی محصول را بنویسید"
              className="add-product-input"
              value={newProductColors}
              onChange={(event) => setNewProductColors(event.target.value)}
            />
          </div>
        </div>
        <button className="add-product-submit" onClick={addNewProduct}>
          ثبت محصول
        </button>
      </form>
    </div>
  );
}
