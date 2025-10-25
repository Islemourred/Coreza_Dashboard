import configDB from "../../../../Config/ThemeConfig";

const primary =
  localStorage.getItem("default_color") || configDB.data.color.primary_color;

export const redialchart = {
  series: [75],
  option: {
    chart: {
      height: 345,
      type: "radialBar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        hollow: {
          size: "78%",
          dropShadow: {
            enabled: false,
          },
        },
        dataLabels: {
          show: true,
          name: {
            show: false,
          },
          value: {
            color: primary,
            fontSize: "36px",
            fontWeight: "700",
            show: true,
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 1551,
        options: {
          chart: {
            height: 460,
          },
        },
        breakpoint: 1366,
        options: {
          chart: {
            height: 180,
            width: 200,
          },
        },
        breakpoint: 1199,
        options: {
          chart: {
            height: 340,
          },
        },
        breakpoint: 480,
        options: {
          chart: {
            height: 300,
          },
        },
      },
    ],
    colors: [primary],
    stroke: {
      lineCap: "round",
    },
    tooltip: {
      enabled: false,
    },
  },
};

export const areachart = {
  series: [
    {
      type: "area",
      name: "Last 2 Month",
      data: [42, 40, 28, 30, 25, 30, 35, 25],
    },
    {
      type: "line",
      name: "Last 2 Days",
      data: [50, 40, 50, 45, 50, 30, 70, 60],
    },
  ],
  option: {
    chart: {
      height: 320,
      type: "line",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    stroke: {
      width: [0, 3, 5],
      curve: "smooth",
    },
    annotations: {
      points: [
        {
          x: 8,
          y: 50,
          marker: {
            size: 4,
            fillColor: "#fff",
            strokeColor: primary,
            radius: 3,
          },
          label: {
            borderColor: "#ffffff",
            offsetY: 0,
            style: {
              color: primary,
              background: "#ffffff",
              fontSize: 16,
            },
            text: "$3.9k",
          },
        },
      ],
    },
    colors: [primary],
    xaxis: {
      offsetX: 0,
      offsetY: 0,
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
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
        format: "MM",
      },
    },
    fill: {
      type: ["gradient", "solid", "gradient"],
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 1,
        gradientToColors: [primary, "#fff5f7", primary],
        inverseColors: true,
        opacityFrom: 0.6,
        opacityTo: 0,
        stops: [0, 100, 100, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    subtitle: {
      text: "If you have it, you can make anything you want look good.",
      align: "left",
      margin: 0,
      offsetX: -10,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "11px",
        fontWeight: "400",
        color: "#9699a2",
      },
    },
    legend: {
      show: false,
    },
    yaxis: {
      show: false,
    },
  },
};
