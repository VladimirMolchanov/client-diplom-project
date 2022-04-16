import httpService from "./http.service";

const productEndpoint = "products/";

const productsService = {
    getAll: async () => {
        const { data } = await httpService.get(productEndpoint);
        return data;
    }
};

export default productsService;
