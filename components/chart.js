import Component from '@glimmer/component';
import Chart from 'chart.js/auto';

export default class ChartComponent extends Component {
  chartElement = null;

  // eslint-disable-next-line no-undef
  @action
  setupChart(element) {
    this.chartElement = element;
    this.renderChart();
  }

  renderChart() {
    if (this.chartElement) {
      const ctx = this.chartElement.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Data 1', 'Data 2', 'Data 3'], // Placeholder data labels
          datasets: [
            {
              label: 'Example Dataset',
              data: [
                Math.random() * 50,
                Math.random() * 50,
                Math.random() * 50,
              ], // Placeholder data values
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          // Customize chart options as needed
        },
      });
    }
  }
}
