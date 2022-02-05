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

export function mapToJogosObject(games) {
  return games.map((game) => {
    return {
      id: game.id,
      titulo: game.title,
      descricao: game.short_description,
      imagem: game.thumbnail,
      genero: game.genre,
    };
  });
}

export function mapToJogoObject(game) {
  return {
    id: game.id,
    titulo: game.title,
    dataLancamento: new Date(game.release_date).toLocaleDateString(),
    descricao: game.short_description,
    genero: game.genre,
    plataforma: game.platform,
    requisitos: {
      sistema: game.minimum_system_requirements.os,
      processador: game.minimum_system_requirements.processor,
      memoria: game.minimum_system_requirements.memory,
      graficos: game.minimum_system_requirements.graphics,
      espaco: game.minimum_system_requirements.storage,
    },
    imagens: game.screenshots.map((imagem) => ({
      id: imagem.id,
      imagem: imagem.image,
    })),
  };
}
