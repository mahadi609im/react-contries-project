import React, { Suspense } from 'react';
import Contries from './Components/Contries/Contries';
import Loading from './Components/Loading/Loading';

const App = () => {
  let allContriesAPI = fetch(
    'https://openapi.programming-hero.com/api/all'
  ).then(res => res.json());
  return (
    <div>
      <Suspense
        fallback={
          <div className="grid grid-cols-3 gap-5 container mx-auto mt-14">
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
