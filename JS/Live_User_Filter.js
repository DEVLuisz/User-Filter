function Pesquisar() {
    let Input = document.getElementById('pesquisa');
    let Filtro = Input.value.toUpperCase();
    let Menu = document.getElementById('menu');
    MenuItens = Menu.getElementsByTagName("li");

    for (var i = 0; i < MenuItens.length; i++) {
        Nome = MenuItens[i].getElementsByTagName("h4")[0];
        Local = MenuItens[i].getElementsByTagName("p")[0];

        if (Nome.innerHTML.toUpperCase().indexOf(Filtro) > -1 || Local.innerHTML.toUpperCase().indexOf(Filtro) > -1) {
            MenuItens[i].style.display = "";
        }
        else {
            MenuItens[i].style.display = "none";
        }
    }
}