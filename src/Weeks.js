import arrow from "./images/right-arrow.png";
import rightArrow from "./images/right-arrow.png";

function Weeks({ weeks }) {
  const totalWeeks = 5200;
  const templateWeeks = [];
  const GrayBox = (
    <div className="m-[1px] w-1 h-1 xl:w-2 xl:h-2 md:w-2 md:h-2 border-2 border-gray-300 xl:m-0.5" />
  );
  const RedBox = (
    <div className="m-[1px] w-1 h-1 xl:w-2 xl:h-2 md:w-2 md:h-2 bg-red-600 xl:m-0.5" />
  );

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
      <div key={line} className=" flex ">
        {lineTemplate}
      </div>
    );
  }

  return (
    <div className=" ">
      <div className="xl:ml-14 md:ml-[64px]  ml-[60px] flex flex-col items-center">
        <div className="w-[300px] xl:w-[600px] md:w-[510px] flex h-6 mr-6 my-2 ">
          <h1> Week of the Year</h1>
          <img className="pl-8 w-20" src={rightArrow} alt="Right arrow" />
        </div>
        <div className="w-[300px] xl:w-[596px]  md:w-[500px] flex justify-between mr-6 text-xs">
          <p>1</p>
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
        </div>
      </div>
      <div className="flex xl:justify-center md:justify-center ">
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
