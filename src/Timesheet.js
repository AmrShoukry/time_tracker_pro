// import { useEffect } from 'react';


// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend
// } from "recharts";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//   }
// ];

// const MyTimesheet = () => {
//     // useEffect(() => {
//     //   const chartContainer = document.querySelector(".bar-chart-container");
//     //   const chartContainerInner = document.querySelector(".bar-chart-container .recharts-surface");
//     //   const chartLines = document.querySelectorAll(".bar-chart-container line");
//     //   const dataMeaning = document.querySelector(".recharts-legend-wrapper");
      

//     //   if (chartContainer && chartContainerInner) {
//     //         chartContainer.style.width = "100%";
//     //         dataMeaning.style.display = "100%"
//     //         chartContainerInner.setAttribute("width", "100%");

//     //         chartLines.forEach((element) => {
//     //             element.setAttribute("width", "100%")
//     //         })
//     //     }
//     // }, []);
  
//     return (
//       <BarChart
//         width={300}
//         height={300}
//         data={data}
//         margin={{
//           top: 5,
//           right: 30,
//           left: 20,
//           bottom: 5
//         }}
//         className="bar-chart-container"
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Bar dataKey="uv" style={{ fill: 'var(--main-color)' }} />
//       </BarChart>
//     );
//   };
  
// export default MyTimesheet






import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { format, subMonths } from 'date-fns';
import './Timesheet.css'


const MyTimesheet = () => {

    const today = new Date();
    const categories = Array.from({ length: 10 }, (_, index) => {
      const monthDate = subMonths(today, 9 - index); // Generate dates for the last 10 months
      const monthYear = format(monthDate, 'yyyy'); // Get the year of the month
      const monthName = format(monthDate, 'MMMM'); // Get the month name
      return `${monthYear}, ${monthName}`; // Format dates to month names
    });
  

  const options = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: categories
    },
  };

  const series = [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ];

  return (
    <div id="chart">
        <h1>Studing Time during the last 10 months</h1>
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default MyTimesheet;
