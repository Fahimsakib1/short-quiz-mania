import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
const Chart = () => {
    const QuizData = useLoaderData();
    console.log(QuizData.data);
    const { total, name } = QuizData.data;
    return (
        <div className='my-5 chart-parent-div'>
            <div className=' chart-div text-center mt-3 d-flex justify-content-sm-start justify-content-md-start'>
                <BarChart
                    className='mx-auto bar-chart'
                    width={600}
                    height={450}
                    data={QuizData.data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" stackId="a" fill="blue" />
                </BarChart>
            </div>
            <h6 className='text-center'>Chart: The Chart shows number of questions respected to subject name</h6>
        </div>
    );
};

export default Chart;