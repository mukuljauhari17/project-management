import { ApexOptions } from "apexcharts";

export const completionChartOptions: ApexOptions = {
    chart: {
      type: "line",
      toolbar: { show: false },
      zoom: { enabled: false },
    },

    stroke: {
      curve: "smooth",
      width: 3,
    },

    markers: {
      size: 4,
      strokeWidth: 2,
      hover: { size: 6 },
    },

    colors: ["#9CA3AF", "#2563EB"], // gray + blue

    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      axisBorder: { show: false },
      axisTicks: { show: false },
    },

    yaxis: {
      min: 0,
      max: 60,
      tickAmount: 4,
      labels: {
        formatter: (val) => `${val}%`,
      },
    },

    grid: {
      strokeDashArray: 4,
      borderColor: "#E5E7EB",
    },

    legend: {
      position: "top",
      horizontalAlign: "right",
      markers: { radius: 12 } as any,
    },

    dataLabels: {
      enabled: false,
    },
  };

export  const liveTaskOptions: ApexOptions = {
      chart: {
        type: "donut",
      },
  
      labels: ["Completed", "Pending"],
  
      colors: ["#3B82F6", "#E5E7EB"], // blue + light gray (image style)
  
      dataLabels: {
        enabled: false,
      },
  
      legend: {
        show: false,
      },
  
      tooltip: {
        enabled: false,
      },
  
      plotOptions: {
        pie: {
          donut: {
            size: "75%", // thickness like image
          },
        },
      },
  
      stroke: {
        width: 0,
      },
    };
  
export const chartOptions: ApexOptions = {
  chart: {
    type: "bar",
    toolbar: { show: false },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "80%",
      borderRadius: 4,
      distributed: true,
    },
  },
  colors: ["#F87171", "#34D399", "#3B82F6", "#FBBF24"],
  dataLabels: { enabled: false },
  xaxis: {
    // For horizontal bars, categories can stay here
    categories: ["Design", "Development", "Marketing", "Research"],
    labels: {
      show: true,
      style: {
        colors: ["#000"], // text color
        fontSize: "14px",
      },
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    show: true, // make sure y-axis labels are enabled
    labels: {
      show: true,
      formatter: (val) => val.toString(),
      style: {
        colors: ["#000"],
        fontSize: "13px",
      },
    },
  },
  grid: { strokeDashArray: 4, borderColor: "#E5E7EB" },
  legend: { show: false },
};