import axios from "axios";

const BASE_URL_API = "https://6526dad7917d673fd76d1b74.mockapi.io";

const postCreateProduct = async (data) => {
    try {
        const url = `${BASE_URL_API}/products`;
        const response = await axios.post(url, data);
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getProductList = async () => {
    try {
        const url = `${BASE_URL_API}/products`;
        const response = await axios.get(url);
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getProductDetail = async (id) => {
    try {
        const url = `${BASE_URL_API}/products/${id}`;
        const response = await axios.get(url);
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export {
    postCreateProduct,
    getProductList,
    getProductDetail,
}
