function Months({ months }) {
  const totalMonths = 1080;
  const monthsTemplate = [];
  const GrayCircle = (
    <div className="xl:w-3 xl:h-3 w-[6px] h-[6px] xl:border-2 border-[1px] border-gray-500  rounded-full  m-[1px] xl:m-0.5" />
  );
  const BlueCircle = (
    <div className="xl:w-3 xl:h-3  w-[6px] h-[6px] bg-blue-600 rounded-full m-[1px] xl:m-0.5" />
  );

  const diamondsPerLine = 36;
  const numLines = Math.ceil(totalMonths / diamondsPerLine);
  for (let line = 0; line < numLines; line++) {
    const lineTemplate = [];
    for (let i = 0; i < diamondsPerLine; i++) {
      const monthIndex = line * diamondsPerLine + i;
      if (monthIndex < totalMonths) {
        if (months && monthIndex < months) {
          lineTemplate.push(BlueCircle);
        } else {
          lineTemplate.push(GrayCircle);
        }
      }
    }
    monthsTemplate.push(
      <div key={line} className="flex justify-center">
        {" "}
        {lineTemplate}
      </div>
    );
  }

  return <div> {monthsTemplate}</div>;
}
export default Months;
