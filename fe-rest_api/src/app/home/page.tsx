import ProductCard from "@/components/ProductCard"
import Sidebar from "@/components/Sidebar"
import React from "react"

const HomePage = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="grid grid-cols-3 gap-8 mx-auto my-8 flex-wrap">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            description={product.description}
            price={product.price}
            stock={product.stock}
          />
        ))}
      </div>
    </div>
  )
}

export default HomePage

const products = [
  {
    name: "Product 1",
    image: "https://via.placeholder.com/300",
    description: "This is a description for Product 1.",
    price: 29.99,
    stock: 10,
  },
  {
    name: "Product 2",
    image: "https://via.placeholder.com/300",
    description: "This is a description for Product 2.",
    price: 49.99,
    stock: 5,
  },
  {
    name: "Product 3",
    image: "https://via.placeholder.com/300",
    description: "This is a description for Product 3.",
    price: 19.99,
    stock: 15,
  },
  {
    name: "Product 4",
    image: "https://via.placeholder.com/300",
    description: "This is a description for Product 4.",
    price: 99.99,
    stock: 2,
  },
  {
    name: "Product 5",
    image: "https://via.placeholder.com/300",
    description: "This is a description for Product 5.",
    price: 9.99,
    stock: 25,
  },
]
