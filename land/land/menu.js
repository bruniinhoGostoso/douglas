function createMenu() {
    return `
        <nav id="menu">
            <ul class="menu">
                <li><a href="index.html" class="home">Home</a></li>
                <li class="dropdown">
                    <a href="Filme.html" class="filmes">Filmes</a>
                    <ul class="submenu">
                        <li><a href="Assistir.html">assistir</a></li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a href="Produtos.html" class="produtos">Produtos</a>
                    <ul class="submenu">
                        <li><a href="venda_caneca.html">Caneca</a></li>
                        
                        <li><a href="moletom.html">Moletom</a></li>
                    </ul>
                </li>

<li class="dropdown">

                    <a href="quiz.html" class="quiz">Quiz</a>
                    <ul class="submenu">
                        <li><a href="quiz1.html">Quiz 1 </a></li>
                        <li><a href="quiz2.html">Quiz 2</a></li>
                        <li><a href="quiz3.html">Quiz 3</a></li>
                    </ul>
                </li>


                <li><a href="contato.html" class="contato">Contato</a></li>
            </ul>
        </nav>

        <style>
            #menu {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 1000;
                display: flex;
                justify-content: center;
                background-color: #000;
                padding: 10px 20px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            }

            nav ul {
                display: flex;
                justify-content: center;
                margin: 0;
                padding: 0;
                list-style: none;
            }

            nav ul li {
                position: relative; /* Necessário para o posicionamento do submenu */
                margin: 0 15px;
                font-size: 20px;
            }

            .menu li a {
                color: #fff;
                text-decoration: none;
                padding: 10px;
                display: block;
                transition: background-color 0.3s ease;
            }

            .menu li a.active {
                color: #0ab234;
                border-bottom: 3px solid #0ab234;
            }

            .menu li a:hover {
                border-bottom:none;
                color: #0ab234
            }

            .dropdown:hover .submenu {
                display: block;
            }

            .submenu {
                display: none;
                position: absolute;
                top: 100%; /* Posiciona o submenu logo abaixo do item pai */
                left: 11;
               
                list-style: none;
                padding: 0;
                margin: 0;
                width: relative; /* Define uma largura para o submenu */
                z-index: 1000;
                border-radius: 5px;
            }

            .submenu li {
                margin: 0;
                padding: 0;
            }

            .submenu li a {
                padding: 10px;
                color: #0ab234; /* Cor do sub menu*/
                display: block;
            }

            .submenu li a:hover {
                color: #f2a52e;
            }

            /* Espaço abaixo do menu para não sobrepor o conteúdo */
            body {
                margin-top: 60px;
            }
        </style>
    `;
}



function insertMenu() {
    document.getElementById('menu-container').innerHTML = createMenu();
}

function setActiveMenuItem() {
    const currentPage = window.location.pathname.split("/").pop();
    const menuItems = document.querySelectorAll("nav ul.menu li a");
    let activeItem = null;

    menuItems.forEach((item) => {
        const href = item.getAttribute("href");
        if (href === currentPage) {
            activeItem = item;
            item.classList.add("active");
        }
    });

    // Se o item ativo for encontrado e for um submenu, marque o item pai também
    if (activeItem && activeItem.closest(".submenu")) {
        const parentMenuItem = activeItem.closest(".submenu").previousElementSibling;
        if (parentMenuItem) {
            parentMenuItem.classList.add("active");
        }
    }
}