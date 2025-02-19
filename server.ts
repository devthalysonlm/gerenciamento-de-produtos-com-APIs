import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Lista de produtos (simulando um banco de dados)
let produtos: Produto[] = [];

// Classe Produto
class Produto {
    constructor(
        public id: number,
        public nome: string,
        public preco: number,
        public estoque: number
    ) {}
}

// Rota GET para listar todos os produtos
app.get('/produtos', (req: Request, res: Response) => {
    // TODO: Retornar a lista de produtos
    res.json(Produto);
});

// Rota GET para buscar um produto por ID
app.get('/produtos/:id', (req: Request, res: Response) => {
    // TODO: Buscar o produto pelo ID e retorná-lo
});

// Rota POST para adicionar um novo produto
app.post('/produtos', (req: Request, res: Response) => {
    // TODO: Criar um novo produto e adicioná-lo à lista
});

// Rota PUT para atualizar um produto existente
app.put('/produtos/:id', (req: Request, res: Response) => {
    // TODO: Atualizar o produto com o ID especificado
});

// Rota DELETE para remover um produto
app.delete('/produtos/:id', (req: Request, res: Response) => {
    // TODO: Remover o produto com o ID especificado
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});