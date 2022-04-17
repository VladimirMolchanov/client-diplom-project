import httpService from "./http.service";

const productEndpoint = "products/";

const productsService = {
    getAll: async () => {
        const { data } = await httpService.get(productEndpoint);
        return data;
    },
    removeProduct: async (productId) => {
        const { data } = await httpService.delete(productEndpoint + productId);
        return data;
    }
};

export default productsService;
