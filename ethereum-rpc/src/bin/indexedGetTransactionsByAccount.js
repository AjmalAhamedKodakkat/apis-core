const axios = require('axios')

module.exports = async ({ address }) => {
  // const { status, data } = await axios.get(`http://127.0.0.1:8103/api/v1/query/addresses/${address}/transactions`)
  const { status, data } = await axios.get(`http://127.0.0.1:8100/api/v1/ethereum/addresses/${address}/transactions`)
  console.log(status, data)
  return data
}
