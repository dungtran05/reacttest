import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [listdata, setListData] = useState([]);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7214/api/Users');
        // Update state with fetched data
        setListData(response.data);
        console.log(listdata);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this effect runs once on component mount

  return (
    <>
      {listdata.map((item, index) => (
        <div key={index}>
         
          {item.userName} 
        </div>
      ))}
    </>
  );
}

export default Home;
