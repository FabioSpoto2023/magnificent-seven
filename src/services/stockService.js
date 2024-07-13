import axios from 'axios';

const stockService = axios.create({
    baseURL: 'https://sheetdb.io/api/v1/upf6jx87ukmvb',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    async fetchData(sheet) {
        try {
            const response = await stockService.get(`?sheet=${sheet}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    },
};