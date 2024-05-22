"use client"
import ProductCard from "@/components/ProductCard"
import Sidebar from "@/components/Sidebar"
import { getProducts } from "@/libs/features/product/productSlice"
import { useAppDispatch, useAppSelector } from "@/libs/hooks"
import React, { useEffect } from "react"

const HomePage = () => {
  const { products, loading } = useAppSelector((state) => state.app)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  console.log(products)

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center font-bold text-3xl">
        Loading...
      </div>
    )
  }

  return (
    <div className="flex">
      <Sidebar />

      <div className="h-full grid grid-cols-3 gap-8 mx-auto my-8 flex-wrap">
        {products &&
          products.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
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
