import './style.css'
import { Client, Databases, Query } from "appwrite";

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("6709a92e0010f0f047bc");

const databases = new Databases(client);

// Puxa todos os documentos da coleção
let promise = databases.listDocuments(
    "placar", // ID do banco de dados
    "placar", // ID da coleção 
                    
);

promise.then(function (response) {
    // Se os documentos forem obtidos com sucesso, exiba-os na tela
    const placarList = document.getElementById('placar-list');
    
    response.documents.forEach(doc => {
        const item = document.createElement('div');
        item.innerHTML = `
            <p><strong>Produto:</strong> ${doc.nomeJogador}</p>
            <p><strong>Quantidade:</strong> ${doc.pontuacao}</p>
            
            <hr>
            
        `;
        comprasList.appendChild(item);
    });
}, function (error) {
    console.log(error); // Exibe o erro no console em caso de falha
});

