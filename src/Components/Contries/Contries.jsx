import React, { use, useState } from 'react';
import Country from '../Country/Country';
import VisitedList from '../VisitedList/VisitedList';

const Contries = ({ allContriesAPI }) => {
  let useContries = use(allContriesAPI);
  let contries = useContries.countries;

  const [visited, setVisited] = useState([]);

  const handleVisited = country => {
    const newVisitedCountry = [...visited, country];
    setVisited(newVisitedCountry);
  };

  const handleNotVisited = country => {
    let notVisitedCountry = visited.filter(i => i !== country);
    setVisited(notVisitedCountry);
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold text-slate-800 text-center my-5">
        Countries: {contries.length} |
        <span className="text-green-400"> Visit: {visited.length}</span>
      </h3>

      <div className="container mx-auto flex justify-center items-center flex-wrap gap-5 my-12">
        {visited.map(visited => (
          <VisitedList visitedContry={visited}></VisitedList>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-5 container mx-auto">
        {contries.map(country => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisited={handleVisited}
            handleNotVisited={handleNotVisited}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Contries;
