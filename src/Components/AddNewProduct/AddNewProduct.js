import React from "react";
import "./AddNewProduct.css";
export default function AddNewProduct() {
  return (
    <div className="products-main">
      <h1 className="products-title">افزودن محصولات جدید</h1>
      <form className="add-products-form">
        <div className="add-products-form-wrap">
            <div className="add-product-form-group">
                <input type="text" placeholder="اسم محصول را بنویسید" className="add-product-input"/>
            </div>
            <div className="add-product-form-group">
                <input type="text" placeholder="قیمت محصول را بنویسید" className="add-product-input"/>
            </div>
            <div className="add-product-form-group">
                <input type="text" placeholder="موجودی محصول را بنویسید" className="add-product-input"/>
            </div>
            <div className="add-product-form-group">
                <input type="text" placeholder="آدرس عکس محصول را بنویسید" className="add-product-input"/>
            </div>
            <div className="add-product-form-group">
                <input type="text" placeholder="میزان محبوبیت این محصول را بنویسید" className="add-product-input"/>
            </div>
            <div className="add-product-form-group">
                <input type="text" placeholder="میزان فروش محصول را بنویسید" className="add-product-input"/>
            </div>
            <div className="add-product-form-group">
                <input type="text" placeholder="تعداد رنگ‌بندی محصول را بنویسید" className="add-product-input"/>
            </div>
        </div>
        <button className="add-product-submit">ثبت محصول</button>
      </form>
    </div>
  );
}
