import React, { use } from 'react';
import Country from '../Country/Country';

const Contries = ({ allContriesAPI }) => {
  let useContries = use(allContriesAPI);
  let contries = useContries.countries;
  console.log(contries);
  return (
    <div>
      <h3 className="text-2xl font-semibold text-slate-800 text-center my-5">
        Countries: {contries.length}
      </h3>

      <div className="grid grid-cols-3 gap-5 container mx-auto">
        {contries.map(country => (
          <Country key={country.cca3.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Contries;
