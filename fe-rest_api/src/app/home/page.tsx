"use client"
import ProductCard from "@/components/ProductCard"
import Sidebar from "@/components/Sidebar"
import { Api } from "@/libs/AxiosInstance"
import { useQuery } from "@tanstack/react-query"
import { ProductType } from "../../types/productType"

const HomePage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => Api.get("/products").then((res) => res.data),
  })

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center font-bold text-3xl">
        Loading...
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center font-bold text-3xl">
        Error loading products...
      </div>
    )
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="h-full grid grid-cols-3 gap-8 mx-auto my-8 flex-wrap">
        {data && data.length > 0 ? (
          data.map((product: ProductType) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              description={product.description}
              price={product.price}
              stock={product.stock}
            />
          ))
        ) : (
          <div className="col-span-3 text-center font-bold text-2xl">
            No products available
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage
