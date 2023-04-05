function Graph({weeks}) {
 
 let max = 5200 
 const line = []

 for (let i = max; i > 0; i--) {
  line.push("🫥")
 }
 
 line.slice(0, weeks)
 for (let i = weeks; i > 0 ; i--) {
 line.unshift("🌚")
 }
 
  if (weeks!== 0) {
    return (
      <div>
 {line}
    
      </div>
    )
  }
  else {
    return (
      <div>
        {line}
       {/* PLEASE ENTER YOUR BIRTH DATE */}
      </div>
    )
  }
 


}

export default Graph