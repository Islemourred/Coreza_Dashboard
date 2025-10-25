import configDB from "../../../../Config/ThemeConfig";

const primary = localStorage.getItem("default_color") || configDB.data.color.primary_color;
const secondary = localStorage.getItem("secondary_color") || configDB.data.color.secondary_color;

export const Currentlysale = {
  series: [
    {
      name: "revenue1",
      data: [2, 15, 25, 20, 30, 26, 24, 15, 12, 20],
    },
    {
      name: "revenue2",
      data: [10, 25, 15, 16, 10, 14, 28, 18, 20, 16],
    },
  ],
  options: {
    chart: {
      height: 168,
      opacity: 1,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [3, 3],
      curve: "smooth",
    },
    xaxis: {
      offsetX: 0,
      offsetY: 0,
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },

    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    colors: [secondary, primary],
    fill: {
      opacity: [0.5, 0.25, 1],
    },

    legend: {
      show: false,
    },
    tooltip: {
      x: {
        format: "MM",
      },
    },
  },
};
export const apexDonutCharts = {
  series: [99, 24, 20, 28],
  options: {
    chart: {
      type: "donut",
      height: 300,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
        },
      },
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val / 100 + "$";
        },
      },
    },
    colors: [primary, secondary, secondary, secondary],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
        breakpoint: 360,
        options: {
          chart: {
            height: 280,
          },
        },
      },
    ],
  },
};
export const apexMixedCharts = {
  series: [
    {
      name: "Earning",
      data: [20, 40, 20, 65, 35, 30, 60, 35, 15],
    },
    {
      name: "Earning",
      data: [30, 25, 10, 12, 13, 15, 10, 15, 10],
    },
  ],
  options: {
    chart: {
      height: 270,
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
    },

    states: {
      hover: {
        filter: {
          type: "darken",
          value: 1,
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadiusApplication: 'end',
        borderRadius: 6,
        columnWidth: "19%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    responsive: [{
      breakpoint: 1199.98,
      options: {
        chart: {
          height: 320
        },
      }
    }], 
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      offsetX: 0,
      offsetY: 0,
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      dataLabels: {
        enabled: true,
      },
    },
    fill: {
      opacity: 1,
      colors: [primary, "#eeeffe"],
    },
    legend: {
      show: false,
    },
  },
};
export const areachart = {
  series: [
    {
      type: "area",
      name: "Daily",
      data: [0, 20, 10, 45, 30, 43, 25, 38, 30, 42, 25, 40, 25, 0],
      color: "#f0f1fe",
    },
    {
      type: "area",
      name: "Weekly",
      data: [0, 12, 6, 25, 13, 24, 15, 24, 20, 26, 16, 22, 16, 0],
      color:primary,
    },
    {
      type: "line",
      name: "Monthly",
      data: [0, 19, 14, 22, 35, 30, 35, 30, 40, 30, 39, 20, 34, 0],
      color:primary,
    },
  ],
  options: {
    chart: {
      height: 280,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [0, 0, 5],
      curve: "smooth",
    },
    annotations: {
      xaxis: [
        {
          x: 300,
          strokeDashArray: 0,
          borderWidth: 3,
          borderColor:primary,
        },
      ],
      points: [
        {
          x: 300,
          y: 49,
          marker: {
            size: 8,
            fillColor: primary,
            strokeColor: primary,
            radius: 5,
        },
          label: {
            borderWidth: 0,
            offsetY: 0,
            text: "We are Achieve Our Goal in Progress",
            style: {
              fontSize: "14px",
              fontWeight: "600",
              fontFamily: "Montserrat",
            },
          },
        },
      ],
    },
    responsive: [{
      breakpoint: 767,
      options: {
        chart: {
          height: 250
        },
      },
      breakpoint: 575,
      options: {
        chart: {
          height: 220
        },
        annotations: {
          xaxis: [{
              x: 100,
              strokeDashArray: 0,
              borderWidth: 3,
              borderColor: primary,
            },
          ],
          points: [{
              x: 100,
              y: 48,
              marker: {
                  size: 8,
                  fillColor: primary,
                  strokeColor: primary,
                  radius: 5,
              },
              label: {
                borderWidth: 0,
                offsetX: 25,
                text: 'We are Achieve Our Goal in Progress',
                style: {
                  fontSize: '14px',
                  fontWeight: '600',
                  fontFamily:'Montserrat',
                }
            }
          }],
        },
      }
    }],
    fill: {
      type: ["solid", "gradient", "gradient"],
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 1,
        gradientToColors: [primary, primary],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0.2,
        stops: [0, 100, 100, 100],
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      offsetX: 0,
      offsetY: 0,
      categories: ["11-09-2023", "12-09-2023", "13-09-2023", "14-09-2023", "15-09-2023", "16-09-2023", "17-09-2023", "18-09-2023", "19-09-2023", "20-09-2023", "21-09-2023", "22-09-2023", "23-09-2023", "24-09-2023"],
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
    },
    yaxis: {
      show: false,
      lines: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
    },
    legend: {
      show: false,
    },
  },
};