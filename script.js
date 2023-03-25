class CaixaRegistradora {
    constructor() {
      this.estoque = [];
      this.totalConta = 0;
    }
    adicionarProduto(codigoBarra, preco, nome) {
        const novoProduto = { codigoBarra, preco, nome };
        this.estoque.push(novoProduto);
        console.log(`Produto ${nome} adicionado ao estoque.`);
      }
      iniciarAtendimento(cliente) {
        console.log(`Atendimento iniciado para o cliente ${cliente}.`);
      }
    
      adicionarItem(codigoBarra, quantidade) {
        const produto = this.estoque.find((item) => item.codigoBarra === codigoBarra);
        if (!produto) {
          console.log("Produto não encontrado.");
          return;
        }
        const valorItem = produto.preco * quantidade;
        this.totalConta += valorItem;
        console.log(`${quantidade}x ${produto.nome} adicionado(s) à conta.`);
      }
    
      verificarTotal() {
        console.log(`Total da conta: R$ ${this.totalConta.toFixed(2)}`);
      }
    
      fecharConta(dinheiro) {
        const troco = dinheiro - this.totalConta;
        if (troco < 0) {
          console.log(`Dinheiro insuficiente. Faltam R$ ${(-troco).toFixed(2)}.`);
          return;
        }
        console.log(`Conta fechada. Troco: R$ ${troco.toFixed(2)}.`);
        this.totalConta = 0;
      }
}