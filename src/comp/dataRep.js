import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom';
import './logn.css'

 const DataRep = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        const getcategory = async () => {
          const res = await fetch("http://localhost:3001/dataa");
          const getdata = await res.json();
          setCategory(getdata);
          // console.log(getdata);
        };
    
        getcategory();
      },[]);


    return (
    <>
     <div  className='out'> 
     <h5 className="tx">
            <input type="search" className='sr' placeholder="Search here"/><button className="s" type="submit">Search</button>
              <h2>GPS summary</h2>
            </h5>
        <div  className="row">
          <div className="col-sm-8">
            
            
            <table className="tab">
               
              <thead> 

                
                <tr>
                  <th>DeviceId</th>
                  <th>Device Type</th>
                  <th>Timestamp</th>
                  <th>location</th>
                  <th></th>
                </tr>

              </thead>
            

              <tbody >
                {category.map((getcate) => (
                  <tr  key={getcate.DeviceId}>
                    <td id='oyee'>{getcate.DeviceId}</td>
                    <td id='oyee'>{getcate.DeviceType}</td>
                    <td id='oyee'> {getcate.TimeStamp}</td>
                    <td id='oyee'> {getcate.location}</td>
                    <td id='oyee'><Link to ='/heyy' style={{ textDecoration: 'none', color: 'white' }}>view</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>     
    
     </div>
    </>
    
  )
};

export default DataRep
