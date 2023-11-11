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
import '../styles/Timesheet.css';
import { useEffect, useState } from 'react';
import Projects from './Projects';
import { tr } from 'date-fns/locale';

const moment = require('moment');

const MyTimesheet = () => {
  const today = new Date();
  const categories = Array.from({ length: 12 }, (_, index) => {
    const monthDate = subMonths(today, 11 - index); // Generate dates for the last 10 months
    const monthYear = format(monthDate, 'yyyy'); // Get the year of the month
    const monthName = format(monthDate, 'MMMM'); // Get the month name
    return `${monthYear}, ${monthName}`; // Format dates to month names
  });

  const [data, setData] = useState(null);
  const [events, setEvents] = useState([]);
  const [months, setMonths] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  function selectClosestDate(date, now) {
    if (now < date) return now;
    return date;
  }

  function isValid(from, date, now) {
    if (now < from) return false;
    const differenceInMilliseconds = now - date;
    const millisecondsInYear = 365 * 24 * 60 * 60 * 1000;

    if (differenceInMilliseconds <= millisecondsInYear) {
      return true;
    } else {
      return false;
    }
  }

  function getStartingPoint(date, now) {
    const differenceInMilliseconds = now - date;
    const millisecondsInYear = 365 * 24 * 60 * 60 * 1000;

    if (differenceInMilliseconds <= millisecondsInYear) {
      return date;
    } else {
      return new Date(now.getFullYear() - 1, now.getMonth() + 1, 1);
    }
  }

  useEffect(() => {
    fetch('http://localhost:8000/projects')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        //              12  1  2  3  4  5  6  7  8  9  10 11
        //              11  0  1  2  3  4  5  6  7  8  9  10
        let durations = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let currentTime = new Date();
        let currentMonth = currentTime.getMonth();
        let currentYear = currentTime.getFullYear();
        console.log(
          `Current Month is ${currentMonth} Current Year is ${currentYear}`
        );
        data.forEach((project) => {
          let from = new Date(project['from']);
          let to = new Date(project['to']);
          let closestDate;
          let startingPoint;
          let closestMonth;

          if (isValid(from, to, currentTime)) {
            closestDate = selectClosestDate(to, currentTime);
            startingPoint = getStartingPoint(from, closestDate);
            closestMonth = closestDate.getMonth();

            let iterativeMonth = startingPoint.getMonth();
            let iterativeYear = startingPoint.getFullYear();
            let modified = 0;

            while (
              iterativeYear < currentYear &&
              iterativeMonth > closestMonth
            ) {
              modified = 1;
              let iterativeDate = new Date(iterativeYear, iterativeMonth, 1);
              const firstDayOfNextMonth = moment([
                iterativeYear,
                iterativeMonth
              ]).add(1, 'months');
              const lastMomentOfMonth = firstDayOfNextMonth.subtract(
                1,
                'milliseconds'
              );
              const secondsDifference = lastMomentOfMonth.diff(
                iterativeDate,
                'seconds'
              );
              durations[iterativeMonth - currentMonth - 1] += parseInt(
                secondsDifference / 60 / 60
              );
              setMonths(durations);

              iterativeMonth++;
              if (iterativeMonth === 12) {
                iterativeMonth = 0;
                iterativeYear++;
              }
            }
            while (iterativeYear === currentYear) {
              while (iterativeMonth < closestMonth) {
                console.log(iterativeMonth);
                let iterativeDate = new Date(iterativeYear, iterativeMonth, 1);
                let compared;
                if (modified === 0) {
                  compared = startingPoint;
                } else {
                  compared = iterativeDate;
                }
                modified = 1;
                const firstDayOfNextMonth = moment([
                  iterativeYear,
                  iterativeMonth
                ]).add(1, 'months');
                const lastMomentOfMonth = firstDayOfNextMonth.subtract(
                  1,
                  'milliseconds'
                );
                const secondsDifference = lastMomentOfMonth.diff(
                  compared,
                  'seconds'
                );
                durations[11 - (currentMonth - iterativeMonth)] += parseInt(
                  secondsDifference / 60 / 60
                );
                setMonths(durations);

                iterativeMonth++;
                if (iterativeMonth === 12) {
                  iterativeMonth = 0;
                  iterativeYear++;
                }
              }
              if (iterativeMonth === closestMonth) {
                if (modified === 0) {
                  const secondsDifference = parseInt(
                    (closestDate - startingPoint) / 1000
                  );
                  durations[11 - (currentMonth - iterativeMonth)] += parseInt(
                    secondsDifference / 60 / 60
                  );
                  setMonths(durations);
                } else {
                  let iterativeDate = new Date(
                    iterativeYear,
                    iterativeMonth,
                    1
                  );
                  const secondsDifference = parseInt(
                    (closestDate - iterativeDate) / 1000
                  );
                  durations[11 - (currentMonth - iterativeMonth)] += parseInt(
                    secondsDifference / 60 / 60
                  );
                  setMonths(durations);
                }
                break;
              }
            }
          }
        });
        console.log(durations);
      });
  }, []);

  const options = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        horizontal: true
      }
    },
    dataLabels: {
      enabled: true
    },
    xaxis: {
      categories: categories
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          if (isNaN(Math.round(value))) return value;
          return Math.round(value);
        }
      }
    }
  };

  const series = [
    {
      data: months
    }
  ];

  return (
    <div id="chart">
      <h1>Total Project Hours in the Last Year</h1>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={700}
      />
    </div>
  );
};

export default MyTimesheet;
