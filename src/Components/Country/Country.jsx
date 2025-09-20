import React, { useState } from 'react';

const Country = ({ country }) => {
  const { flags } = country;
  const [visit, setvisit] = useState(false);

  const handleVisit = () => {
    setvisit(!visit);
  };
  return (
    <>
      <div
        className={`card bg-base-100 w-96 shadow-md ${
          visit ? 'bg-green-100' : ''
        }`}
      >
        <figure className="bg-slate-500 h-48 object-fill">
          <img className="w-full h-full" src={flags.flags.png} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button
              onClick={handleVisit}
              className={`btn ${
                visit ? 'btn-success text-white' : 'btn-neutral'
              }`}
            >
              {visit ? 'visited' : 'Visit'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;
