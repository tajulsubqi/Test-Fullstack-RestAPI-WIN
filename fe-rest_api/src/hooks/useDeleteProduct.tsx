import { Api } from "@/libs/AxiosInstance"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

type DeleteProductType = {
  product_id: number | undefined
  closeModal: () => void
}

const useDeleteProduct = ({ product_id, closeModal }: DeleteProductType) => {
  const query = useQueryClient()

  const mutation = useMutation({
    mutationFn: (id: number | undefined) => Api.delete(`product/${id}`),
  })

  const handleDeleteProduct = () => {
    mutation.mutate(product_id, {
      onSuccess() {
        toast.success("Product Deleted!")
        query.invalidateQueries()
        closeModal()
      },
    })
  }

  return {
    handleDeleteProduct,
  }
}

export default useDeleteProduct
