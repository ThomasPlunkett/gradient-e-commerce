export const isIsCart = (product, cartItems) => {
    return cartItems.find(item => item.id === product.id);
}