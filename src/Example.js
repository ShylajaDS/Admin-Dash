import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

const ExampleComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data.slice(0, 7)); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div>
      <h1 style={{marginLeft:"23px",fontFamily:'Poppins',fontSize:'25px'}}>Info</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <Typography variant="subtitle2" component="div" align="left" fontFamily={"Poppins"} fontSize={"12px"}>
              {post.body}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleComponent;
