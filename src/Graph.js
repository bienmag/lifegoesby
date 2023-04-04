function Graph({weeks}) {
 
 
 // line should be max 52 
  const line = []
// if more than 52 -> new line 


 for (let i = weeks; i >= 0 ; i--) {
 line.push("🌚")
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
       PLEASE ENTER YOUR BIRTH DATE
      </div>
    )
  }
 


}

export default Graph