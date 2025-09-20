import React, { useState } from 'react';

const Country = ({ country, handleVisited, handleNotVisited }) => {
  const {
    name: { common: contryName },
    flags,
    population: { population },
    cca3: { cca3 },
  } = country;
  const [isVisit, setvisit] = useState(false);
  const handleVisit = () => {
    setvisit(!isVisit);
  };
  return (
    <>
      <div
        className={`card w-full bg-base-100 shadow-md ${
          isVisit ? 'bg-green-100' : ''
        }`}
      >
        <figure className="bg-slate-500 h-48 object-fill">
          <img className="w-full h-full" src={flags.flags.png} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {contryName} |
            <span className="text-slate-400 text-sm">
              {cca3} - {population}
            </span>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button
              onClick={() => {
                handleVisit(),
                  isVisit ? handleNotVisited(country) : handleVisited(country);
              }}
              className={`btn ${
                isVisit ? 'btn-success text-white' : 'btn-neutral'
              }`}
            >
              {isVisit ? 'visited' : 'Visit'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;
