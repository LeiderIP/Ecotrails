document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button_department');
  
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
      });
    });
  });
    /* const labels = ['2019', '2020', '2021', '2022', '2023'];
    const data = {
      labels: labels,
      datasets: [{
        label: 'Hectareas taladas',
        data: [12, 5, 7, 10, 3],
        backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
            'rgb(75, 192, 192)',
            'rgb(75, 192, 192)',
            'rgb(75, 192, 192)',
            'rgb(75, 192, 192)',
            'rgb(75, 192, 192)',
        ],
        borderWidth: 1
      }]
    };
  
    const config = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    };
  
    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );
  });
*/