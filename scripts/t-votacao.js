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
    type: 'doughnut',
    data: data = {
        labels: [
          'Aprovado',
          'Reprovado',
          
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [70, 30],
          backgroundColor: [
            'rgb(63, 228, 41)',
            'rgb(252, 27, 27)'
          ],
          hoverOffset: 4
        }]
    },
    options: {
        Responsive: true
    }
});

