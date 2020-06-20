import React from "react";
import product from '../../data.json';
import { Pie, Bar } from "react-chartjs-2";

// // Accepts the array and key
// const groupBy = (array, key) => {
//     // Return the end result
//     return array.reduce((result, currentValue) => {
//         // If an array already present for key, push it to the array. Else create an array and push the object
//         (result[currentValue[key]] = result[currentValue[key]] || []).push(
//             currentValue
//         );
        
//         // This is how the above code in multiple line
//         if (!result[currentValue[key]]) result[currentValue[key]] = [];
//         result[currentValue[key]].push(currentValue);

//         return result;
//     }, {});
// };

// // Group by color as key to the person array
// const personGroupedByDate = groupBy(product, 'date');
let st = new Set();
let labelsData = [];
let productData = [];
let productBackgroundColor = [];

let colorCode = ['#d2fe1a', '#D12854', '#3FD70E', '#BCCB0A','#1B4F72', '#5DADE2', '#F39C12', '#DAF7A6', '#6C3483', '#27AE60', '#7B241C', '#5D6D7E', '#7B241C', '#F1C40F','#1B4F72'];


const grouperArray = (function (a, b) {
    var aSize = new Date(a.date).getTime();
    var bSize = new Date(b.date).getTime();
    var aLow = a.product;
    var bLow = b.product;
    // console.log(aLow + " | " + bLow);

    if (aSize === bSize) {
        return (aLow < bLow) ? -1 : (aLow > bLow) ? 1 : 0;
    }
    else {
        return (aSize < bSize) ? -1 : 1;
    }
});


product.sort(grouperArray);
// product.sort((a,b)=>{
//     return new Date(a.date).getTime() - new Date(b.date).getTime() 
// });

for (let i = 0; i < product.length; i++) st.add(product[i].date);
let uniqueDate= [...st];

for (let i = 0; i < uniqueDate.length; i++)
{
    let total = 0;
    for(let j=0; j<product.length-1; j++)
    {
        if (uniqueDate[i] === product[j].date)
        {
            if (product[j].product === product[j+1].product) total += product[j].order_quantity;
            else 
            {
                total += product[j].order_quantity;
                productBackgroundColor.push(colorCode[Math.abs(13-i)]);
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
            label: "Sales dataset",
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

export default class SalesChart extends React.Component {
    render() {
        return (
            <div className="pieChart">
                <Pie data={data} width={600}/>
                <br/><br/>
                <Bar data={data} width={600} />
            </div>
        );
    }
}
