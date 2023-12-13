const axios = require('axios');

exports.handler = async function(event, context) {
  const { drwNo } = event.queryStringParameters;

  try {
    const response = await axios.get(`https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${drwNo}`);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data' }),
    }
  }
};
