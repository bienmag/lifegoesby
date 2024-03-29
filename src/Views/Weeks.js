import Footer from '../lib/Footer'

function Weeks({ weeks }) {
  const totalWeeks = 4680
  const templateWeeks = []
  const GrayBox = (
    <div className="m-[1px] w-1 h-1 xl:w-2 xl:h-2 md:w-2 md:h-2 sm:w-2 sm:h-2 border-2 border-gray-300 xl:m-0.5" />
  )
  const RedBox = (
    <div className="m-[1px] w-1 h-1 xl:w-2 xl:h-2 md:w-2 md:h-2 sm:w-2 sm:h-2  bg-amber-500 xl:m-0.5" />
  )

  const boxesPerLine = 52
  const numLines = Math.ceil(totalWeeks / boxesPerLine)

  for (let line = 0; line < numLines; line++) {
    const lineTemplate = []
    for (let i = 0; i < boxesPerLine; i++) {
      const weekIndex = line * boxesPerLine + i
      if (weekIndex < totalWeeks) {
        if (weeks && weekIndex < weeks) {
          lineTemplate.push(RedBox)
        } else {
          lineTemplate.push(GrayBox)
        }
      }
    }
    templateWeeks.push(
      <div key={line} className=" flex  ">
        {lineTemplate}
      </div>
    )
  }

  return (
    <div className="mr-4 ">
      {weeks ? (
        <p className="font-bold text-amber-800 text-center mt-4">
          {' '}
          you wasted {weeks} weeks
        </p>
      ) : (
        <></>
      )}
      <div className=" flex flex-col ml-12 sm:ml-[40px] md:ml-[40px] xl:ml-[60px] items-center">
        <div className=" w-[302px] sm:w-[500px] md:w-[500px] xl:w-[624px] flex h-6 xl:mr-2 mt-2 ">
          <h1 className="text-amber-900"> week of the year</h1>
          <div className="pl-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#D7A147"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
        <div className=" w-[302px] sm:w-[500px] md:w-[500px]  xl:w-[624px] flex justify-between xl:pr-8 -ml-2 text-[8px] text-amber-900">
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
      <div className="flex justify-center    ">
        <div className="">
          <h1 className="-rotate-90  text-amber-900">age</h1>
          <div className="mt-8 rotate-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#D7A147"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
        <div className="-mt-0.5 mr-0.5 mb-12 flex flex-col  text-[8px] text-amber-900  ">
          <p className="pb-4 sm:pb-10 xl:pb-12">0</p>
          <p className="pb-5 sm:pb-9 xl:pb-12">5</p>
          <p className="pb-4 sm:pb-10 xl:pb-12">10</p>
          <p className="pb-5 sm:pb-9 xl:pb-12">15</p>
          <p className="pb-4 sm:pb-10 xl:pb-12">20</p>
          <p className="pb-5 sm:pb-9 xl:pb-12">25</p>
          <p className="pb-4 sm:pb-10 xl:pb-12">30</p>
          <p className="pb-5 sm:pb-9 xl:pb-12">35</p>
          <p className="pb-4 sm:pb-10 xl:pb-12">40</p>
          <p className="pb-5 sm:pb-9 xl:pb-12">45</p>
          <p className="pb-4 sm:pb-10 xl:pb-12">50</p>
          <p className="pb-5 sm:pb-9 xl:pb-12">55</p>
          <p className="pb-4 sm:pb-10 xl:pb-12">60</p>
          <p className="pb-5 sm:pb-9 xl:pb-12">65</p>
          <p className="pb-4 sm:pb-10 xl:pb-12">70</p>
          <p className="pb-5 sm:pb-9 xl:pb-12">75</p>
          <p className="pb-4 sm:pb-10 xl:pb-12">80</p>
          <p className="pb-5 sm:pb-9 xl:pb-12">85</p>
        </div>

        <div className="">
          {templateWeeks}
          <p className="flex justify-end text-xs text-amber-900"> 90</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Weeks
