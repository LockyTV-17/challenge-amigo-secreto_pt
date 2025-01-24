
let amigos = [];

function adicionarAmigo(){
    const addAmigo = document.getElementById('amigo');


if (addAmigo.value.trim()) {
    amigos.push(addAmigo.value.trim()); 
    atualizarLista(); 
    addAmigo.value = ""; 
} else {
    alert ("Por favor, insira um nome.");
};


};

function atualizarLista(){
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";


amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent  = amigo;
    listaAmigos.appendChild(li);

})
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert("A lista está vazia. Adicione amigos antes de sortear!");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random()*amigos.length);
    
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>O amigo sorteado foi: <strong>${amigoSorteado}</strong></p>`;
    
    amigos = []; 
    atualizarLista();
}