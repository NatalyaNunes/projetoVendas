function Login() {
    return (
        <main class="forms">
            <div>
                <h3 class="mb">Cadastrar venda</h3>
            </div>
            <hr/>
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
        </main>
    )
}

export default Login