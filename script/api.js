const BASE_URL = 'https://thekaapi3.pythonanywhere.com';

async function cadastrarCliente() {
  const cadastro = {
    "username": "Gabi Gomes",
    "email": "gabi@email.com",
    "password": "1234@Sorvete",
    "password_confirm": "1234@Sorvete"
  };

  const response = await fetch(`${BASE_URL}/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cadastro)
  });



  const dadosAPI = await response.json();
  console.log('✅ Cliente cadastrado:', dadosAPI);
  return dadosAPI;
}

async function fazerLogin() {
  const login = {
    email: "gabi@email.com",
    password: "1234@Sorvete"
  };

  const response = await fetch(`${BASE_URL}/auth/token/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(login),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Credenciais inválidas');
  }

  const {refresh, access} = await response.json();
  localStorage.setItem('refresh', refresh);
  localStorage.setItem('access', access);

  console.log('✅ Login realizado. Token salvo.');
}

async function buscarLivros() {
  const token = localStorage.getItem('access');

  if (!token) {
    throw new Error('Token não encontrado. Faça login primeiro.');
  }

  const response = await fetch(`${BASE_URL}/livros/`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 401) {
    throw new Error('Sessão expirada. Faça login novamente.');
  }

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Erro na requisição');
  }

  const dadosAPI = await response.json();
  console.log('✅ Dados recebidos:', dadosAPI);
  return dadosAPI;
}

const ui = {
    async mostrarLivros() {
        const listaLivros = document.getElementById('livrosAcervo')

        try {
            const livros = await buscarLivros()
            livros.forEach(livro => {
                listaLivros.innerHTML += `   
                <li>
                    <img src="${livro.capa}" alt="" id="livroAcervo">
                    <dialog class="modalLivroAcervo">
                        <img src="${livro.capa}" alt="">
                        <div>
                            <div>
                                <h2 class="tituloLivro">${livro.titulo}</h2>
                                <h4 class="autorLivro">${livro.autor}</h4>
                            </div>
                            <div>
                                <p class="descricaoLivro">${livro.resumo}</p>
                            </div>
                            <p class="numeroPaginas">${livro.numero_paginas}</p>
                            <p class="editoraLivro">${livro.editora_nome}</p>
                        </div>
                    </dialog>   
                </li>`
            })
        } catch (error) {
            alert('ERRO')
        }
    }
}
