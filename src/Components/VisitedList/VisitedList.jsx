const VisitedList = visitedContry => {
  let visited = visitedContry.visitedContry;
  const {
    flags: { flags },
  } = visited;
  console.log(flags);
  return (
    <div className="w-12 md:w-16 lg:w-24 my-0 md:my-5">
      <img className="mask mask-hexagon w-full object-center" src={flags.png} />
    </div>
  );
};

export default VisitedList;
