function Login() {
    return (
        <main class="home">
            <div class="left">
                <h3 class="mb">Cadastrar venda</h3>
            </div>           
            <div class="right forms login">
                <h3 class="mb">Cadastrar venda</h3>
                <form action="#">
                <div class="cardinput mt">
                    <label for="email">Email</label>
                    <input type="email" name="email" placeholder="email.exemplo@gmail.com"/>
                </div>
                <div class="cardinput mt">
                    <label for="senha">Senha</label>
                    <input type="password" id="senha" placeholder="Senha"/>
                </div>

                <div class="cardinput mt">
                    <a class="but" href="#">Entrar</a>
                </div>

            </form>
            </div>
            
        </main>
    )
}

export default Login 