export default function Footer({ className }) {
  return (
    <div className={className}>
      <div className=" text-amber-800 flex justify-center   bottom-0 ">
        <p>
          inspired by{' '}
          <a
            className="text-yellow-600 "
            href="https://waitbutwhy.com/2014/05/life-weeks.html"
          >
            wait but why
          </a>
        </p>
      </div>
      <div className=" text-amber-800 flex justify-center mb-8   bottom-0 ">
        <p>
          check out{' '}
          <a
            className="text-yellow-600 "
            href="https://github.com/bienmag/lifegoesby"
          >
            the code
          </a>
        </p>
      </div>
    </div>
  )
}
