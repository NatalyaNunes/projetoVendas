function SideBar(){
    return(
        <main>
            <div class="sidebar">
                <nav class="mb">
                    <h2>VendUp</h2>
                </nav>
                <hr/>
                <div class="mt">
                    <a href="#">
                        <div class="butsidebar">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            </i>
                            <p>Home</p>
                        </div>
                    </a>
                    <a href="#">
                        <div class="butsidebar">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-archive"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>
                            </i>
                            <p>Vendas</p>
                        </div></a>

                        <a href="#">
                    <div class="butsidebar">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </i>
                            <p>Login</p>
                        </div> 
                    </a>
                </div>
            </div>
        </main>

        
    )
}

export default SideBar