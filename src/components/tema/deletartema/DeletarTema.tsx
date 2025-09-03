import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000" // ajuste para a sua API
});

// Buscar
export async function buscar(
  url: string,
  setDado: Function,
  dados: Object = {},
  setLoading?: Function,
  setError?: Function,
  method: string = "GET",
  config: Object = {}
) {
  try {
    if (setLoading) setLoading(true);

    const resposta = await api.request({
      url,
      method,
      data: dados,
      ...config
    });

    setDado(resposta.data);
  } catch (erro: any) {
    if (setError) setError(erro);
    throw erro;
  } finally {
    if (setLoading) setLoading(false);
  }
}

// Deletar
export async function deletar(url: string, config: Object) {
  await api.delete(url, config);
}

// Atualizar
export async function atualizar(
  url: string,
  dados: Object,
  setDado: Function,
  config: Object
) {
  const resposta = await api.put(url, dados, config);
  setDado(resposta.data);
}

// Cadastrar
export async function cadastrar(
  url: string,
  dados: Object,
  setDado: Function,
  config: Object
) {
  const resposta = await api.post(url, dados, config);
  setDado(resposta.data);
}
