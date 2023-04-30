import React from "react";
import "./ProductsTable.css";
export default function ProductsTable() {
  return (
    <table className="products-table">
      <tr className="products-table-heading-tr">
        <th>عکس</th>
        <th>اسم</th>
        <th>قیمت</th>
        <th>موجودی</th>
      </tr>
      <tr className="products-table-tr">
        <td>
          <img
            src="/images/item-1.jpeg"
            alt="oilImage"
            className="products-table-img"
          />
        </td>
        <td>کیک</td>
        <td>92000</td>
        <td>2</td>
        <td>
            <button className="products-table-btn">جزییات</button>
            <button className="products-table-btn">حذف</button>
            <button className="products-table-btn">ویرایش</button>
        </td>
      </tr>
    </table>
  );
}
