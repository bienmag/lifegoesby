function Years({ years }) {
  const totalYears = 90;
  const yearsTemplate = [];
  const GrayDiamond = (
    <div className="w-4 h-4 m-1 xl:w-5 xl:h-5 md:w-5 md:h-5 sm:w-5 sm:h-5 border-2 border-gray-800 transform rotate-45 xl:m-2 md:m-2 sm:m-2" />
  );
  const BlueDiamond = (
    <div className="w-4 h-4 m-1 xl:w-5 xl:h-5 md:w-5 md:h-5 sm:w-5 sm:h-5 bg-blue-600 border-gray-800 transform rotate-45  xl:m-2 md:m-2 sm:m-2" />
  );

  const diamondsPerLine = 10;
  const numLines = Math.ceil(totalYears / diamondsPerLine);
  for (let line = 0; line < numLines; line++) {
    const lineTemplate = [];
    for (let i = 0; i < diamondsPerLine; i++) {
      const yearIndex = line * diamondsPerLine + i;
      if (yearIndex < totalYears) {
        if (years && yearIndex < years) {
          lineTemplate.push(BlueDiamond);
        } else {
          lineTemplate.push(GrayDiamond);
        }
      }
    }
    yearsTemplate.push(
      <div key={line} className=" flex justify-center">
        {" "}
        {lineTemplate}
      </div>
    );
  }

  return (
    <div className=" ">
      {years ? (
        <p className="font-bold text-amber-800 text-center pb-4 mt-4">
          {" "}
          you wasted {years} years
        </p>
      ) : (
        <></>
      )}
      {yearsTemplate}
      <div className=" text-amber-800 flex justify-center mb-8 mt-12  bottom-0 ">
        <p>
          Inspired by{" "}
          <a
            className="text-yellow-600 "
            href="https://waitbutwhy.com/2014/05/life-weeks.html"
          >
            Wait but why
          </a>
        </p>
      </div>
    </div>
  );
}

export default Years;
