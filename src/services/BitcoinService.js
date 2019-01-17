import axios from "axios";

function getRate(coins) {
    //  (returns Promise)

    return axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
        .then(res => {
            return res.data
        })
        .catch(err=>{
            console.log('err', err)
        })
}

function getMarketPrice() {
    return axios.get('https://api.blockchain.info/charts/market-price?timespan=2months&format=json&cors=true')
        .then(res => {
            var yim = res.data.values.map(pos => {
                return pos.y
            })
            return {
                tite: res.data.name,
                data: yim,
                description: res.data.description
            }
        })
}

function getConfirmedTransactions() {
    return axios.get('https://api.blockchain.info/charts/n-transactions?timespan=2months&format=json&cors=true')
        .then(res => {
            var yim = res.data.values.map(pos => {
                return pos.y
            })
            return {
                tite: res.data.name,
                data: yim,
                description: res.data.description,
            }
        });

}

export default {
    getMarketPrice,
    getConfirmedTransactions,
    getRate
}