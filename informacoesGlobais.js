const url='https//raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async functiion vizualizarInformacoesGlobais(){
    const res=await fetch(url)
    const dados=await res.json()
    const pesoasConectadas=(dados.total_pessoas_conectadas/1e9)
    const pessoasNoMundo=(dados.total_pessoas_mundo/1e9)
    const horas=parseInt(dados.tempo_medio)
    const minutos=Math.round((dados.tempo_medio-horas)*100)
    const porcentagemConectada=((pessoasConectadas/pessoasNoMundo)*100).toFixed(2)

    
}