import httpService from "./http.service";

const productEndpoint = "products/";

const productsService = {
    getAll: async () => {
        const { data } = await httpService.get(productEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.put(productEndpoint, payload);
        return data;
    },
    uploadImg: async (payload) => {
        const { data } = await httpService.post(
            productEndpoint + "img",
            payload,
            {
                headers: { "Content-Type": "multipart/form-data" }
            }
        );
        return data;
    },
    removeProduct: async (productId) => {
        const { data } = await httpService.delete(productEndpoint + productId);
        return data;
    },
    updateProduct: async (productId, payload) => {
        const { data } = await httpService.patch(
            productEndpoint + productId,
            payload
        );
        return data;
    }
};

export default productsService;
