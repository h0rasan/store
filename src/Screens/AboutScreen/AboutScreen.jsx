import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AboutScreen = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      setProducts(response.data.products);
    } catch (err) {
      <div>error message</div>;
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <tbody>
      <tr>
        <th>Name</th>
        <th>Brand</th>
        <th>Image</th>
        <th>Price</th>
        <th>Rating</th>
      </tr>
      {products.map((item, index) => (
        <tr key={index}>
          <td>{item.title}</td>
          <td>{item.brand}</td>
          <td>
            <img src={item.thumbnail} alt='' height={100} />
          </td>
          <td>{item.price}</td>
          <td>{item.rating}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default AboutScreen;
