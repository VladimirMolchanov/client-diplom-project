import httpService from "./http.service";

const colorsEndpoint = "colors/";

const colorsService = {
    getAll: async () => {
        const { data } = await httpService.get(colorsEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.put(colorsEndpoint, payload);
        return data;
    },
    removeColor: async (colorId) => {
        const { data } = await httpService.delete(colorsEndpoint + colorId);
        return data;
    },
    updateColor: async (colorId, payload) => {
        const { data } = await httpService.patch(
            colorsEndpoint + colorId,
            payload
        );
        return data;
    }
};

export default colorsService;
