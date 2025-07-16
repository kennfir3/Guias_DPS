'use client';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import '../styles/product-grid.css';

const products = [
  {
    id: 1,
    title: 'Cien años de soledad',
    price: 10,
    image: 'https://images.penguinrandomhouse.com/cover/9780525562443',
    quantity: 1
  },
  {
    id: 2,
    title: 'El señor de los anillos (Trilogía)',
    price: 196,
    image: 'https://es.web.img2.acsta.net/c_310_420/medias/nmedia/18/89/67/45/20061512.jpg',
    quantity: 1
  },
  {
    id: 3,
    title: 'Cuentos de Barro',
    price: 30,
    image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1314463741i/10093196.jpg',
    quantity: 1
  },
  {
    id: 4,
    title: 'Tierra de Infancia',
    price: 30,
    image: 'https://m.media-amazon.com/images/I/81ylIaewiBL._UF1000,1000_QL80_.jpg',
    quantity: 1
  },
  {
    id: 5,
    title: 'Harry Potter Pack',
    price: 399,
    image: 'https://m.media-amazon.com/images/I/71FGsNrsRmL._UF1000,1000_QL80_.jpg',
    quantity: 1
  }
];

const ProductGrid = () => {
  const dispatch = useDispatch();

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;