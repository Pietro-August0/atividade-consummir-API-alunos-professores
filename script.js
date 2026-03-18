fetch("http://localhost:3000/alunos").then(response => {
    if (!response.ok) {
        alert("Erro ao carregar os dados dos alunos.");
    }

    return response.json();
}).then(data => {
    console.log(data);
    const lista = document.getElementById("listaAlunos");

    data.forEach(function(aluno) {
        const alunoItem = document.createElement("div");
        alunoItem.innerHTML = 
        `<h3>${aluno.nome}</h3>
        <p>${aluno.email}</p>`;
        lista.appendChild(alunoItem);
    })
});

fetch("http://localhost:3000/professores").then(response => {
    if (!response.ok) {
        alert("Erro ao carregar os dados dos professores.");
    }

    return response.json();
}).then(data => {
    console.log(data);
    const lista = document.getElementById("listaProfessores");

    data.forEach(function(professor) {
        const professorItem = document.createElement("div");
        professorItem.innerHTML = 
        `<h3>${professor.nome}</h3>
        <p>${professor.disciplina}</p>`;
        lista.appendChild(professorItem);
    })
});