import axios from 'axios';

const companies = [
    {'company': 'Apple', 'sheet': '$AAPL'},
    // {'company': 'Amazon', 'sheet': '$AMZN'},
    // {'company': 'Google', 'sheet': '$GOOG'},
    // {'company': 'Meta', 'sheet': '$META'},
    // {'company': 'Microsoft', 'sheet': '$MSFT'},
    // {'company': 'Nvidia', 'sheet': '$NVDA'},
    // {'company': 'Tesla', 'sheet': '$TSLA'}
];

const order = [
    '""',
    'Mar 21',
    'Jun 21',
    'Sep 21',
    'Dec 21',
    'Mar 22',
    'Jun 22',
    'Sep 22',
    'Dec 22',
    'Mar 23',
    '3 Aug 23',
    '2 Nov 23',
    '1 Feb 24',
    '2 Mai 24'
];

const stockService = axios.create({
    baseURL: 'https://sheetdb.io/api/v1/upf6jx87ukmvb',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    async fetchData() {
        let data = [];
        for (let i = 0; i < companies.length; i++) {
            try {
                const sheet = companies[i].sheet;
                const response = await stockService.get(`?sheet=${sheet}`);
                data.push(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                data.push([]);
            }
        }
        return data;
    },

    async getData() {
        let dataList = [];
        const data = await this.fetchData();

        for (let i = 0; i < data.length; i++) {
            const d = data[i];
            let _data = {
                'company': companies[i].company,
                'revenue': order.map(key => d[3]?.[key]),
                'income': order.map(key => d[34]?.[key]),
                'margin': order.map(key => d[21]?.[key])
            }
            dataList.push(_data);
        }

        return dataList;
    }
};