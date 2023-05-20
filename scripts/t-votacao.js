// adicionarndo hovered class 

let list = document.querySelectorAll(".navigation li");

function activeLink() {
    list.forEach((item) => {
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// MenuToggle 
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

// menu ususario
function MenuToggle(){
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active')
}

// Função para computar os votos
var votosAprovar = 0;
var votosReprovar = 0;

function votar() {
    var voto = document.querySelector('input[name="voto"]:checked').value;
    var resultDiv = document.getElementById('result');
    var reportDiv = document.getElementById('report');

    if (voto === 'aprovar') {
    votosAprovar++;
    } else if (voto === 'reprovar') {
    votosReprovar++;
    }

    resultDiv.innerHTML = "Seu voto foi: " + voto;
    reportDiv.innerHTML = "Relatório:<br>Aprovações: " + votosAprovar + "<br>Reprovações: " + votosReprovar;

    var totalVotos = votosAprovar + votosReprovar;
    var percentAprovar = (votosAprovar / totalVotos * 100).toFixed(2);
    var percentReprovar = (votosReprovar / totalVotos * 100).toFixed(2);

    reportDiv.innerHTML += "<br>Percentual de Aprovação: " + percentAprovar + "%";
    reportDiv.innerHTML += "<br>Percentual de Reprovação: " + percentReprovar + "%";
}

//Graficos
const ctx = document.getElementById('myChart');
const earning = document.getElementById('earning');


new Chart(earning, {
    type: 'line',
    data: {
        labels: ['Prog.Web', 'Siste.Operacionais', 'Banco-dados', 'Arq.Computadores', 'Estr.Dados', 'Eng.Softwre','Proj.Integrador'],
        datasets: [{
            label: 'Informações',
            data: [8.3, 6.2, 3, 5, 2.2, 8, 9],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        Responsive: true
    }
});

