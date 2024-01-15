import React from 'react';

const TableConteiner = ({ products }) => {
  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Ürün Adı</th>
          <th className="py-2 px-4 border-b">Ürün Kodu</th>
          <th className="py-2 px-4 border-b">Ürün Fiyatı</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id} className="border-b">
            <td className="py-2 px-4">{product.id}</td>
            <td className="py-2 px-4">{product.product_name}</td>
            <td className="py-2 px-4">{product.product_code}</td>
            <td className="py-2 px-4">{product.product_revenue}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableConteiner;
