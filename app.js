const inputPergunta = document.querySelector("#inputPergunta")
const elementoResposta = document.querySelector("#resposta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
  'Não!',
  'Provavelmente..',
  'Sim',
  'Com certeza!',
  'Olha, acho que não..',
  'Minhas fontes, dizem que não!',
  'Minhas fontes, dizem que sim!',
  'Sem sombra de dúvidas!',
  'você pode contar com isso!',
  'Minha resposta é não!',
  'Quem sabe..',
  'Preciso checar de novo..',
  'Humm, tenta de novo..',
  'Se concentra mais um cadinho..',
  'Ahhh eu tô tão cansado',
  'Então, a resposta está dentro de você!',
  'Só um minuto, deu boi na linha...',
  'Pode celebrar! é siiiim'
]
var x = document.getElementById("som");
function mouseOver(){
  x.play();
}

// clicar em fazer pergunta
function fazerPergunta() {

  // pegar pergunta
  if(inputPergunta.value == ""){
  alert('Digite sua pergunta!')
  return
  }

  buttonPerguntar.setAttribute('disabled', true)

  const pergunta = '<div>' + inputPergunta.value + '</div>'

  //gerar número aleatório
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
  
  elementoResposta.style.opacity = 1;
  // sumir resposta depois de 3 seg
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute('disabled')
  }, 3000)
}
