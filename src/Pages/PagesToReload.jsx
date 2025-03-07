// import React from 'react';
// import { useState } from 'react';
import {  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import Clock from '../Components/Clock';
// import Clock from '../Components/Clock.jsx';
// import React, { PureComponent } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const moviePopularityData = [
  { name: " Potter1", views: 100, duration: 152, rating: 4.7 },
  { name: " Potter2", views: 95, duration: 161, rating: 4.6 },
  { name: "Iron Man", views: 110, duration: 126, rating: 4.8 },
  { name: "The Avengers", views: 120, duration: 143, rating: 4.9 },
  { name: " Potter3", views: 98, duration: 142, rating: 4.8 },
  { name: "Endgame", views: 130, duration: 182, rating: 4.9 },
  { name: " Potter4", views: 100, duration: 157, rating: 4.7 },
  { name: " No Way Home", views: 115, duration: 148, rating: 4.8 },
  { name: "Inception", views: 125, duration: 148, rating: 4.8 },
  { name: "Saving Private Ryan", views: 85, duration: 169, rating: 4.9 },
  { name: "Joker", views: 75, duration: 122, rating: 4.8 },
  { name: "Dunkirk", views: 90, duration: 106, rating: 4.7 },
  { name: "The Hangover", views: 80, duration: 100, rating: 4.6 },
  { name: "The Conjuring", views: 95, duration: 112, rating: 4.5 },
  { name: "A Nightmare ", views: 70, duration: 91, rating: 4.6 },
  { name: "The Exorcist", views: 85, duration: 132, rating: 4.7 },
  { name: "It", views: 100, duration: 135, rating: 4.5 },
  { name: "Hereditary", views: 90, duration: 127, rating: 4.6 },
  { name: "The Shining", views: 110, duration: 146, rating: 4.8 },
  { name: "Shaun ", views: 95, duration: 99, rating: 4.8 },
  { name: "Zombieland", views: 90, duration: 88, rating: 4.7 }
];


const PagesToReload = () => {
  return (
    <div>
    <h2 className="text-center text-2xl font-semibold my-6">Movie Popularity and Duration</h2>
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        width={500}
        height={300}
        data={moviePopularityData}
        margin={{
          top: 5,
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
        <Line type="monotone" dataKey="views" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="duration" stroke="#82ca9d" />
        {/* Bar for Views */}
        {/* <Bar dataKey="duration" barSize={20} fill="#8884d8" name="Views" /> */}
        
        {/* Bar for Duration */}
        {/* <Bar dataKey="duration" barSize={20} fill="#82ca9d" name="Duration (min)" /> */}
        
      </LineChart>
      </ResponsiveContainer>
      <Clock className=""/>
  </div>
  )
}

export default PagesToReload;
