function LD() {
  var temaLD = document.getElementById("temaLD");
  if (temaLD.checked) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "azure";
    document.getElementById('containerInt').style.background='black'
    document.getElementById('containerInt').style.color='azure'

    document.getElementById('resposta').style.color= '#9535c1'
  } else {
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
    document.getElementById('resposta').style.color= ''
    document.getElementById('containerInt').style.background=''
    document.getElementById('containerInt').style.color=''


  }
}

document.getElementById("temaLD").addEventListener("change", LD);



function teste() {
  const valorInserido = document.getElementById("containerInt").value;
  const api = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  var palavra = `${api}${valorInserido}`;
  valorInserido ==''?alert('Inserir palavra'):null;
  //
  console.log(valorInserido);

  fetch(palavra)
    .then((resposta) => resposta.json())
    .then((data) => {
      console.log(data);
      // document.getElementById('resposta').innerHTML = data[0].word.toUpperCase() da na mesma que o de baixo
      resposta.innerHTML = data[0].word.toUpperCase();
      algoUm.innerHTML= data[0].meanings[0].definitions[0].definition;
      
      algoDois.innerHTML= data[0].meanings[1].definitions[1].synonyms;
    }
  
