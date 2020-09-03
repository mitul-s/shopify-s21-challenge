import React, { useEffect, useState } from 'react';

const Nominations = () => {

const [nominated, setNominated] = useState([]);
  
function removeNomination(movieID) {
    if(nominated.includes(movieID)) {
        console.log(nominated)
        console.log(movieID)
        // setNominated(nominated.filter(movie => movie !== movieID))
        // console.log(nominated)
    } else {
        console.log("huh")
    }
}

  useEffect(() => {
      let data = localStorage.getItem("nominations");
      let noms = JSON.parse(data);
      setNominated(noms);
  }, []);

  return (
    <div>
        <h1> THESE ARE NOMINATIONS! </h1>
        {/* {nominated.map(movie => {
            return (
                <div>
                <h1>{movie.Title}</h1>
                <button onClick={() => removeNomination(movie.imdbID)}>Remove</button>
                </div>
            )
        })} */}
        
      <button>Remove nomination</button>
    </div>
  );
}

export default Nominations;