import React, { useEffect, useState } from 'react';
import Sfuture from './Sfuture';

const Fiuture = () => {
 const [futurs,setFuturs]=useState([])
console.log(futurs)
 useEffect(()=>{

    fetch("https://y-devsobuj910.vercel.app/cars")
    .then(res=>res.json())
    .then(data=>setFuturs(data))
 },[])
 

    return (
      <div className="lg:my-20  " id="services">
        <div className="my-8">
          <span className="text-md">Check out our Populer services</span>
          <h2 className="text-4xl font-bold capitalize ">
            -Services We Provide
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-9">
          {futurs?.map((future) => (
            <Sfuture key={future._id} future={future}></Sfuture>
          ))}
        </div>
      </div>
    );
};

export default Fiuture;