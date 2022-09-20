import * as api from '../api/index.js'

export const getProduct = () => async(dispatch) => {
    try {
        const { data } = await api.fetchProducts()
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const createProduct = (product) => async(dispatch) => {
    try {
        const {data} = await api.createProduct(product)

        dispatch({type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error)
    }
}