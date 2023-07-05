function Months({ months }) {
  const totalMonths = 1080;
  const monthsTemplate = [];
  const GrayCircle = (
    <div className="w-3 h-3 border-2 border-gray-500  rounded-full m-0.5" />
  );
  const BlueCircle = <div className="w-3 h-3 bg-blue-600 rounded-full m-0.5" />;

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
      <div key={line} className="flex justify-center mr-14">
        {" "}
        {lineTemplate}
      </div>
    );
  }

  return <div> {monthsTemplate}</div>;
}
export default Months;
