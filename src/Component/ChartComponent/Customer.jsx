import React from "react";
import product from '../../data.json';
import { Pie, Bar } from "react-chartjs-2";

let st = new Set();
let labelsData = [];
let productData = [];
let productBackgroundColor = [];

let colorCode = ['#d2fe1a', '#E96B23', '#1535D1', '#26DAE8', '#F39C12', '#DAF7A6', '#6C3483', '#27AE60', '#7B241C', '#5D6D7E', '#7B241C', '#F1C40F','#1B4F72'];


const grouperArray = (function (a, b) {
    var aSize = new Date(a.date).getTime();
    var bSize = new Date(b.date).getTime();
    var aLow = a.district;
    var bLow = b.district;

    if (aSize === bSize) {
        return (aLow < bLow) ? -1 : (aLow > bLow) ? 1 : 0;
    }
    else {
        return (aSize < bSize) ? -1 : 1;
    }
});


product.sort(grouperArray);

for (let i = 0; i < product.length; i++) st.add(product[i].date);
let uniqueDate= [...st];

for (let i = 0; i < uniqueDate.length; i++)
{
    let total = 0;
    for(let j=0; j<product.length-1; j++)
    {
        if (uniqueDate[i] === product[j].date)
        {
            if (product[j].district === product[j + 1].district) total ++;
            else 
            {
                total ++;
                productBackgroundColor.push(colorCode[i]);
                labelsData.push(uniqueDate[i]);
                productData.push(total);
                total = 0;
            }
        }
        else continue;
    }
}

const data = {
    labels: labelsData,
    datasets: [
        {
            label: "Customer dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: productBackgroundColor,
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: productData
        }
    ]
};

var productList = product;

const grouperArray1 = (function (a, b) {
    var aSize = new Date(a.date).getTime();
    var bSize = new Date(b.date).getTime();
    var aLow = a.customer_work_area;
    var bLow = b.customer_work_area;

    if (aSize === bSize) {
        return (aLow < bLow) ? -1 : (aLow > bLow) ? 1 : 0;
    }
    else {
        return (aSize < bSize) ? -1 : 1;
    }
});


productList.sort(grouperArray1);

let productBackgroundColor1= [];
let labelsData1 = [];
let productData1 =[];

for (let i = 0; i < uniqueDate.length; i++) {
    let total = 0;
    for (let j = 0; j < productList.length - 1; j++) {
        if (uniqueDate[i] === productList[j].date) {
            if (productList[j].customer_work_area === productList[j + 1].customer_work_area) total++;
            else {
                total++;
                productBackgroundColor1.push(colorCode[i]);
                labelsData1.push(uniqueDate[i]);
                productData1.push(total);
                total = 0;
            }
        }
        else continue;
    }
}

const data1 = {
    labels: labelsData1,
    datasets: [
        {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: productBackgroundColor1,
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: productData1
        }
    ]
};

export default class CustomerChart extends React.Component {
    render() {
        return (
            <div className="pieChart">
                <Pie data={data1} width={600}/>
                <br/><br/>
                <Bar data={data} width={600} />
            </div>
        );
    }
}
