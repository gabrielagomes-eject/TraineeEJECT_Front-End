const unidNatalShoppBt = document.querySelector('#Botao_Unidade_NatalShopping');
const unidMidwayBt = document.querySelector('#Botao_Unidade_Midway');
const iframe = document.querySelector('.mapaContato')
const enderecoUnidades = document.querySelector('#endereco_Contato_Unidades')
const botoesUnidadesContato = document.querySelectorAll('.botoesContato')


unidNatalShoppBt.classList.add('botaoAtivo_unidades')
unidMidwayBt.classList.add('botaoInativo_unidades');

unidMidwayBt.addEventListener('click', () => {
    iframe.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.313776003017!2d-35.20879912525272!3d-5.811286694171658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2fffa55a2be71%3A0xebf15047f9f8e07c!2sMidway%20Mall!5e0!3m2!1spt-BR!2sbr!4v1781030091097!5m2!1spt-BR!2sbr")
    enderecoUnidades.textContent = 'Av. Nevaldo Rocha, 3775 - Tirol, Natal - RN, 59015-450'
    unidMidwayBt.classList.add('botaoAtivo_unidades')
    unidMidwayBt.classList.remove('botaoInativo_unidades');

    unidNatalShoppBt.classList.add('botaoInativo_unidades');
    unidNatalShoppBt.classList.remove('botaoAtivo_unidades')
})

unidNatalShoppBt.addEventListener('click', () => {
    iframe.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.095916087109!2d-35.21424572525259!3d-5.842104094141192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ff7f3d2f608f%3A0xd58db53fc452bd36!2sNatal%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1781031367781!5m2!1spt-BR!2sbr")
    enderecoUnidades.textContent = 'Avenida Senador Salgado Filho, 2234, Av. das Brancas Dunas, 47 - Candelária, Natal - RN, 59064-900'
    unidNatalShoppBt.classList.add('botaoAtivo_unidades')
    unidNatalShoppBt.classList.remove('botaoInativo_unidades');

    unidMidwayBt.classList.add('botaoInativo_unidades');
    unidMidwayBt.classList.remove('boataoAtivo_unidades');
})


