document.addEventListener("DOMContentLoaded", function() {
  fetch('datos_emprendimiento.csv')
    .then(response => response.text())
    .then(data => {
      console.log(data); // Verifica los datos cargados
      const filas = data.trim().split('\n').slice(1);
      const labels = [];
      const valores = [];

      filas.forEach(fila => {
        const [anio, cantidad] = fila.split(',');
        labels.push(anio);
        valores.push(Number(cantidad));
      });

      const ctx = document.getElementById('graficoEmprendimiento').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Cantidad de emprendimientos',
            data: valores,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            backgroundColor: 'rgba(178, 142, 235, 0.5)',
            borderColor: 'rgb(196, 235, 54)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    })
    .catch(error => console.error('Error al cargar el archivo CSV:', error));
});

'use strict'

const bloque    = document.querySelectorAll('.bloque')
const h2        = document.querySelectorAll('.h2')
    

// Cuando CLICK en h2,
    // QUITAR la clase activo de TODOS los bloque
    // Vamos a añadir la clase activo al BLOQUE con la POSICION del h2

// Recorrer TODOS los h2
h2.forEach( ( cadaH2 , i )=>{
    // Asignando un CLICK a cada h2
    h2[i].addEventListener('click', ()=>{

        // Recorrer TODOS los bloque
        bloque.forEach( ( cadaBloque , i )=>{
            // Quitamos la clase activo de TODOS los bloques
            bloque[i].classList.remove('activo')
        })
        // Añadiendo la clase activo al bloque cuya posición sea igual al del h2
        // (Línea número 12)
        bloque[i].classList.add('activo')

    })
})

const ctx = document.getElementById('Colombiaenelmundo').getContext('2d');
const names = ['Emiratos Arabes Unidos', 'Arabia Saudí', 'Taiwan', 'India', 'Paises Bajos', 'China', 'Israel', 'Estados Unidos', 'Colombia', 'Chile', 'Mexico', ]
const valores = [7.2, 6.3, 6.2, 6.1, 5.9, 5.6, 5.5, 5.2, 4.5, 4.5, 3.8]


const myChart = new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: names,
    datasets: [{
      label: 'Indice Global de emprendimientos 2022-2023 según el GEM',
      data: valores,
      backgroundColor: [
        'rgba(178, 142, 235, 0.5)',
        'rgba(142, 235, 207, 0.5)',
        'rgba(248, 162, 237, 0.5)',
        'rgba(190, 247, 100, 0.5)',
        'rgba(89, 135, 221, 0.5)',
        'rgba(196, 48, 97, 0.5)',
        'rgba(207, 129, 66, 0.5)',
        'rgba(145, 49, 116, 0.5)',
        'rgba(9, 145, 145, 0.5)',
        'rgba(54, 14, 14, 0.5)',
        'rgba(8, 126, 8, 0.5)',
      ],
      borderColor: 'rgb(50, 63, 2)',
      borderWidth: 1.2
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})


window.addEventListener("scroll", function(){
       var header = document.querySelector("header");
       header.classList.toggle("abajo", window.scrollY > 0);

})

