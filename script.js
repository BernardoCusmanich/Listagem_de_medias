function inserirAluno(nome, nota1, nota2) {
    var aluno = {
        nome: "",
        nota1: "",
        nota2: "",
        media: ""
    };
    aluno.nome = nome;
    aluno.nota1 = nota1;
    aluno.nota2 = nota2;
    aluno.media = calcularMedia(aluno);
    return aluno;
}

function calcularMedia(aluno) {
    return (aluno.nota1 + aluno.nota2) / 2;
}

function criarTabela(alunos) {
    var tabela = document.querySelector(".table tbody");

    // inicializando o template.
    var tmplSource = document.getElementById("tmplLinha").innerHTML;
    var tmplHandle = Handlebars.compile(tmplSource);

    faker.locale = "pt_BR";
    for (var indice = 0; indice < 20; indice++) {
    // estou utilizando o faker apenas para gerar dados falsos.
    // montando modelo de dados;  
    var pessoa = {};
    pessoa.Nome = faker.name.firstName();
    pessoa.Sobrenome = faker.name.lastName();
    pessoa.Telefone = faker.phone.phoneNumber();

    // preparando fragmento HTML.
    var linha = {};
    linha.template = document.createElement("template");;  
    linha.template.innerHTML = tmplHandle(pessoa)
    linha.content = document.importNode(linha.template.content, true);

    // inserindo linha na tabela.
    tabela.appendChild(linha.content);
    }
}