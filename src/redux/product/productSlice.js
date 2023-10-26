import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push({id: Date.now(), text: action.payload});
        },
    },
});

export const {addProduct} = productSlice.actions;

export default productSlice.reducer;
