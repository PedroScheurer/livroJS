import { useState, useEffect } from "react";
import { inAxios } from "../config.axios";
import ItemLista from "./ItemLista";
import { useForm } from "react-hook-form";
import Modal from "./TelaModal"

const ManutencaoLivros = () => {
    const [livros, setLivros] = useState([]);
    const [aberto, setAberto] = useState(false);
    const [textoModal, setTextoModal] = useState("")

    const obterLista = async () => {
        try {
            const lista = await inAxios.get("livros");
            setLivros(lista.data);
        } catch (error) {
            if (error.response) {
                setTextoModal(error.response.data.mensagem || "Erro no servidor");
            } else {
                setTextoModal("Erro de conexão com o servidor");
            }

            setAberto(true);
        }
    };

    useEffect(() => {
        obterLista();
    }, []);

    const { register, handleSubmit, reset } = useForm();

    const filtrarLista = async (campos) => {
        try {
            const lista = await inAxios.get(`livros/filtro/${campos.palavra}`);
            if (lista.data.length) {
                setLivros(lista.data);
            } else {
                setTextoModal("Não há livros com a palavra chave pesquisa...");
                setAberto(true);
            }
        } catch (error) {
            if (error.response) {
                setTextoModal(error.response.data.mensagem || "Erro no servidor");
            } else {
                setTextoModal("Erro de conexão com o servidor");
            }

            setAberto(true);
        }
    };

    const excluir = async (id, titulo) => {
        if (!window.confirm(`Confirma a exclusão do livro "${titulo}"`)) {
            return
        }

        try {
            await inAxios.delete(`livros/${id}`);
            setLivros(livros.filter((livro) => livro.id !== id));
        } catch (error) {
            if (error.response) {
                setTextoModal(error.response.data.mensagem || "Erro no servidor");
            } else {
                setTextoModal("Erro de conexão com o servidor");
            }

            setAberto(true);
        }
    };

    const alterar = async (id, titulo, index) => {
        const novoPreco = Number(prompt("Novo preço: "));

        if (isNaN(novoPreco) || novoPreco === 0) {
            return;
        }

        try {
            await inAxios.put(`livros/${id}`, { preco: novoPreco });
            const livrosAlteracao = [...livros]
            livrosAlteracao[index].preco = novoPreco;
            setLivros(livrosAlteracao)
            setTextoModal(`Preço do livro alterado para: ${novoPreco}`)
            setAberto(true)
        } catch (error) {
            if (error.response) {
                setTextoModal(error.response.data.mensagem || "Erro no servidor");
            } else {
                setTextoModal("Erro de conexão com o servidor");
            }

            setAberto(true);
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-7">
                        <h4 className="fst-italic mt-3">Manutenção</h4>
                    </div>
                    <div className="col-sm-5">
                        <form onSubmit={handleSubmit(filtrarLista)}>
                            <div className="input-group mt-3">
                                <input type="text" className="form-control" placeholder="Título ou autor" required
                                    {...register("palavra")} />
                                <input type="submit" className="btn btn-primary" value="Pesquisar" />
                                <input type="button" className="btn btn-danger" value="Todos"
                                    onClick={() => { reset({ palavra: "" }); obterLista(); }} />
                            </div>
                        </form>
                    </div>
                </div>
                <table className="table table-striped mt-3">
                    <thead>
                        <tr>
                            <th>Cód.</th>
                            <th>Título</th>
                            <th>Autor</th>
                            <th>Ano</th>
                            <th>Preço</th>
                            <th>Foto</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro, index) => (
                            <ItemLista key={livro.id} id={livro.id} titulo={livro.titulo}
                                autor={livro.autor} ano={livro.ano} preco={livro.preco}
                                foto={livro.foto} excluirClick={() => excluir(livro.id, livro.titulo)}
                                alterarClick={() => alterar(livro.id, livro.titulo, index)} />
                        ))}
                    </tbody>
                </table>
            </div>
            <Modal aberto={aberto} fechar={() => setAberto(false)}>
                <h2 className="text-xl font-bold mb-2">!</h2>
                <p className="text-danger">{textoModal}</p>
            </Modal>
        </>
    )
};


export default ManutencaoLivros;