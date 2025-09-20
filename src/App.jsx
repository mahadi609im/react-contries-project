import React, { Suspense } from 'react';
import Contries from './Components/Contries/Contries';
import Loading from './Components/Loading/Loading';

const App = () => {
  let allContriesAPI = fetch(
    'https://openapi.programming-hero.com/api/all'
  ).then(res => res.json());
  return (
    <div className="container mx-auto px-[5%] md:px-0">
      <Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14 justify-center items-center">
            <Loading></Loading>
          </div>
        }
      >
        <Contries allContriesAPI={allContriesAPI}></Contries>
      </Suspense>
    </div>
  );
};

export default App;
