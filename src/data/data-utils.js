export function mapToNoticiasObject(noticias) {
  return noticias.map((latestnews) => {
    return {
      id: latestnews.id,
      titulo: latestnews.title,
      descricao: latestnews.short_description,
      imagem: latestnews.thumbnail,
      url: latestnews.article_url,
    };
  });
}

export function mapToJogosObject(jogos) {
  return jogos.map((game) => {
    return {
      id: game.id,
      titulo: game.title,
      descricao: game.short_description,
      imagem: game.thumbnail,
      genero: game.genre,
    };
  });
}
