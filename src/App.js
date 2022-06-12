import React from "react";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import Form from "./components/formulario";
import {
  createList,
  findPosicao,
  getDesvioPadrao,
  getMedia,
  getMediaLista,
  getMediana,
  getMaior,
  getMenor,
} from "./components/filtro";
import Planilha from "./dados.json";
import { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  const [listaFechamentos, setListaFechamentos] = useState([]);
  const [mediaLista, setMediaLista] = useState([]);

  const planilha = Planilha.Planilha;
  const handleSetData = () => {
    setListaFechamentos(planilha); //(createList(planilha,findPosicao(novaData,planilha)))
    setMediaLista(getMediaLista(planilha)); //(createList(planilha,findPosicao(novaData,planilha))))
  };
  useEffect(() => {
    handleSetData();
  }, []);
  return (
    <div>
      {mediaLista && (
        <div>
          <p>Media dos retornos diários: {getMedia(mediaLista)}</p>
          <p>Mediana dos retornos diários: {getMediana(mediaLista)}</p>
          <p>Maior retorno diário: {getMaior(mediaLista)}</p>
          <p>Menor retorno diário: {getMenor(mediaLista)}</p>
          <p>
            Desvio padrão dos retornos diários: {getDesvioPadrao(mediaLista)}
          </p>
        </div>
      )}
      <LineChart
        labels={listaFechamentos.map((item) => {
          return item.Date;
        })}
        baixas={listaFechamentos.map((item) => {
          return item.Baixa;
        })}
        altas={listaFechamentos.map((item) => {
          return item.Alta;
        })}
      />
      <BarChart
        labels={listaFechamentos.map((item) => {
          return item.Date;
        })}
        listaMedia={mediaLista}
      />
    </div>
  );
};

export default App;
