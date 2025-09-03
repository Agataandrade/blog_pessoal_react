import axios from "axios";

const api = axios.create({
  baseURL: 'https://db-blogpessoal-0wyi.onrender.com'
})

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

export const login = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

export const buscar = async (p0: RegExp, p1: { id: string; }, setTema: unknown, p2: { headers: { Authorization: string; }; }, url: string, setDados: Function, header: Object) => {
  const resposta = await api.get(url, header)
  setDados(resposta.data)
}

export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object, _undefined: undefined, undefined: undefined, p0: { headers: { Authorization: string; }; }) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}

export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object, _undefined: undefined, undefined: undefined, p0: { headers: { Authorization: string; }; }) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}

export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header)
}
