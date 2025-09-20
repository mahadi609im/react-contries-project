const VisitedList = visitedContry => {
  let visited = visitedContry.visitedContry;
  const {
    flags: { flags },
  } = visited;
  console.log(flags);
  return (
    <div className="w-24">
      <img className="mask mask-hexagon w-full object-center" src={flags.png} />
    </div>
  );
};

export default VisitedList;
