import React, { useState } from 'react';
import axios from 'axios';
import response from '../types/response.json';

type ResponseType = typeof response;

const PageA: React.FC<{}> = () => {
  const [data, setData] = useState<ResponseType[]>([]);
  const handleFetch = async () => {
    const result = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    // eslint-disable-next-line
    const tempArray = result.data.filter((d: ResponseType) => {
      if (d.id % 2) {
        return d;
      }
    });
    setData(tempArray);
  };
  return (
    <div>
      <button onClick={handleFetch}>fetch</button>
      {data &&
        data.map((element, index) => {
          return (
            <div key={index}>
              {element.id}/{element.name}
            </div>
          );
        })}
    </div>
  );
};

export default PageA;
