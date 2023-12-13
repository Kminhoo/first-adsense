import fetch from 'node-fetch';

export async function handler(event, context) {
  const { drwNo } = event.queryStringParameters;

  try {
    const response = await fetch(`https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${drwNo}`);
    const data = await response.json();

    console.log(data) //log 출력
    
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data' }),
    }
  }
};
