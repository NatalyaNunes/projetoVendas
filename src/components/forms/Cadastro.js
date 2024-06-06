function Cadastro() {
    return (
        <main class="forms">
            <div>
                <h3 class="mb">Cadastrar venda</h3>
            </div>
            <hr/>
            <form action="#">
                <div class="cardinput mt">
                    <label for="cliente">Cliente</label>
                    <input type="text" name="cliente" placeholder="Nome do cliente"/>
                </div>
                <div class="cardinput mt">
                    <label for="produto">Produto</label>
                    <input type="text" id="produto" placeholder="Produto vendido"/>
                </div>
                <div class="cardinput mt">
                    <label for="valor">Valor</label>
                    <input type="text" id="valor" placeholder="Valor do produto"/>
                </div>
                <div class="cardinput mt">
                    <a class="but" href="#">Cadastrar</a>
                </div>

    </form>
        </main>
    )
}

export default Cadastro