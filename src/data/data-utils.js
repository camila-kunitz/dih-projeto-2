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
