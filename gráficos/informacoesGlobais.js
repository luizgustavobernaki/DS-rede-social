const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'
async function visualizarinformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
<span>&{pessoasNoMundo}bilhões</span>
}

const paragrafo = document.createElement('p')
paragrafo.classList.add('graficos-container_texto')
paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo}
bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas}bilhões</span>
estão conectadas em alguma rede social e passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas
<br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span> de pessoaas estão conectadas em alguma rede social.`
// template string

const container = document.getElementByld('graficos-container')
container.appendChild(paragrafo)

