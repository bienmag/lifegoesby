import arrow from "./images/right-arrow.png";

function Weeks({ weeks }) {
  const totalWeeks = 5200;
  const templateWeeks = [];
  const GrayBox = <div className="w-2 h-2  border-2 border-gray-300 m-0.5" />;
  const RedBox = <div className="w-2 h-2 bg-red-600 m-0.5" />;

  const boxesPerLine = 52;
  const numLines = Math.ceil(totalWeeks / boxesPerLine);

  for (let line = 0; line < numLines; line++) {
    const lineTemplate = [];
    for (let i = 0; i < boxesPerLine; i++) {
      const weekIndex = line * boxesPerLine + i;
      if (weekIndex < totalWeeks) {
        if (weeks && weekIndex < weeks) {
          lineTemplate.push(RedBox);
        } else {
          lineTemplate.push(GrayBox);
        }
      }
    }
    templateWeeks.push(
      <div key={line} className=" flex mr-14 ">
        {lineTemplate}
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-center">
        <div className="">
          <h1 className="-rotate-90 mr-2">Age</h1>
          <img src={arrow} alt="arrow" className=" w-8 rotate-90 mt-6" />
        </div>
        <div className="mr-1 mt-0.5 mb-1 flex flex-col justify-between text-xs ">
          <p>0</p>
          <p>5</p>
          <p>10</p>
          <p>15</p>
          <p>20</p>
          <p>25</p>
          <p>30</p>
          <p>35</p>
          <p>40</p>
          <p>45</p>
          <p>50</p>
          <p>55</p>
          <p>60</p>
          <p>65</p>
          <p>70</p>
          <p>75</p>
          <p>80</p>
          <p>85</p>
          <p>90</p>
        </div>
        <div className="py-1">{templateWeeks}</div>
      </div>
    </div>
  );
}

export default Weeks;
