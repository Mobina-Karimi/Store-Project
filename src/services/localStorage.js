export const saveCartToLocalStorage = (state) => {
  try {
    localStorage.setItem("cart", JSON.stringify(state));
  } catch (error) {
    console.error("Failed to save cart to localStorage:", error);
  }
};

export const loadCartFromLocalStorage = () => {
  try {
    const state = localStorage.getItem("cart");
    if (state === null) return null;
    return JSON.parse(state);
  } catch (error) {
    console.error("Failed to load cart from localStorage:", error);
    return null;
  }
};
