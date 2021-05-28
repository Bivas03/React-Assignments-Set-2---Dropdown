import React, {useState} from "react";


function Selection({states}){


  const [state,setState]= useState(0);
    const [city,setCity]= useState(0);
    const [town,setTown]= useState(0);


  var statelist=states.map((place,index)=>{
    return(
    <option value={index}>{place.name}</option>
    )}
    )
    
    function statelisthandler(event){
      setState( event.target.value);
      
    }
    function citylisthandler(event){
      setCity( event.target.value);
    }

    function townlisthandler(event){
      setTown( event.target.value);
    }

    var citylist=states[state].city.map((place,index)=>{
      return(
      <option value={index}>{place.name}</option>
      )}
      )

      var townlist=states[state].city[city].landmarks.map((place,index)=>{
        return(
        <option value={index}>{place.name}</option>
        )}
        )
        
  return(
      <div>
      <label>
        States:
        <select value={state} onChange={statelisthandler}
        options={statelist}>{statelist}</select>
      </label>
       <label>
        Cities:
       <select value={city} onChange={citylisthandler}
       options={citylist}>{citylist}</select>
     </label>
     <label>
        Towns:
        <select value={town} onChange={townlisthandler}
        options={townlist}>{townlist}</select>
      </label>
         <div id="state">
         <div id="state-name">{states[state].name}</div>
         <div id="state-description">{states[state].description}</div>
         <div id="state-title">State</div>
         </div>
         <div id="city">
         <div id="city-name">{states[state].city[city].name}</div>
         <div id="city-description">{states[state].city[city].description}</div>
         <div id="city-title">City</div>
         </div>
         <div id="landmark">
         <div id="landmark-name">{states[state].city[city].landmarks[town].name}</div>
         <div id="landmark-description">{states[state].city[city].landmarks[town].description}</div>
         <div id="landmark-title">Town</div>
         </div>
     </div>
  )
}

export default Selection;
