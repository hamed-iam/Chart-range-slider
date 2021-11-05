const parent = document.querySelector('input[name="initialValue"]');
const ctx = document.getElementById('myChart').getContext('2d');

// console.log(getVal());
let labels = [
  '1 Year',
  '2 Years',
  '3 Years',
  '4 Years',
  '5 Years',
  '6 Years',
  '7 Years',
  '8 Years',
  '9 Years',
  '10 Years',
];
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Values',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        // data: getVal(),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

function getVal() {
  parent.parentNode.style.setProperty('--value', parent.value);
  parent.parentNode.style.setProperty(
    '--text-value',
    JSON.stringify(parent.value.toLocaleString())
  );
  console.log(myChart.config.data.labels);
  console.log(myChart.config.data.datasets[0].data);
  myChart.update();
//   return [+parent.value];
}
