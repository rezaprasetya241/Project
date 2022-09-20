import axios from 'axios'

const url = 'http://localhost:5000/products'

export const fetchProducts = () => axios.get(url)
export const createProduct = (newProduct) => axios.post(url, newProduct)
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)