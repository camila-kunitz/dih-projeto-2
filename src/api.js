export const API_URL = 'https://mmo-games.p.rapidapi.com';

export function NOTICIAS_GET() {
  return {
    url: API_URL + '/latestnews',
    options: {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
        'x-rapidapi-key': '4e45cbadfemsh5d63995c383d3e6p155566jsn1cfc45c2b053',
      },
    },
  };
}

export function JOGOS_GET() {
  return {
    url: API_URL + '/games',
    options: {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
        'x-rapidapi-key': '4e45cbadfemsh5d63995c383d3e6p155566jsn1cfc45c2b053',
      },
    },
  };
}
