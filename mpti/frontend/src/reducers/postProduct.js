export default (postsProduct = [], action) => {
    switch (action.type){
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...postsProduct, action.payload]
        default:
            return postsProduct
    }
}