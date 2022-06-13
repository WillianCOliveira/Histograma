export const findPosicao = (data, planilha) => {
  let posicao = 0;
  planilha.forEach((element, index) => {
    if (element.Date === data) {
      posicao = index;
    }
  });
  return posicao;
};

export const getMediaLista = (lista) => {
  let mediaLista = [];
  for (let i = 1; i < lista.length; i++) {
    mediaLista.push(
      parseFloat(lista[i - 1].Fechamento) / parseFloat(lista[i].Fechamento) - 1
    );
  }
  return mediaLista;
};
export const getMedia = (listaMedia) => {
  let total = 0;

  for (let i = 0; i < listaMedia.length; i++) {
    total += listaMedia[i];
  }

  const media = total / listaMedia.length;
  return media.toFixed(6);
};

export const getMediana = (listaMedia) => {
  if (listaMedia.length % 2 === 0) {
    return (
      (listaMedia[listaMedia.length / 2] +
        listaMedia[listaMedia.length / 2 - 1]) /
      2
    );
  }
  return listaMedia[(listaMedia.length - 1) / 2];
};

export const getMaior = (listaMedia) => {
  return Math.max(...listaMedia);
};

export const getMenor = (listaMedia) => {
  return Math.min(...listaMedia);
};

export const getDesvioPadrao = (listaMedia) => {
  const media = getMedia(listaMedia);
  let varianca = 0;
  for (let i = 0; i < listaMedia.length; i++) {
    varianca += (media - listaMedia[i]) * (media - listaMedia[i]);
  }
  varianca = varianca / listaMedia.length;

  return Math.sqrt(varianca);
};
