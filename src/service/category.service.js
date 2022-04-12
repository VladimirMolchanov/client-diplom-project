import httpService from "./http.service";

const categoryEndpoint = "category/";

const categoryService = {
    getAll: async () => {
        const { data } = await httpService.get(categoryEndpoint);
        return data;
    }
};

export default categoryService;
