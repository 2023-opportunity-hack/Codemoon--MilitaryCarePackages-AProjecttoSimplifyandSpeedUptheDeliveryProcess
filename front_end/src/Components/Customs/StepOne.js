import React from 'react'

const StepOne = () => {
  return (
    <div style={{width:"50vw", margin:"1rem auto"}}>
    <h2>Where are you shipping to?</h2>
    <form>
        <label for="destination" style={{width:"50vw"}}>*Please select a destination:</label>
        <select id="destination" name="destination" style={{width:"50vw"}}>
            <option value="Canada">Canada</option>
            <option value="AllOtherInternational">All other International Countries</option>
            <option value="MilitaryDiplomatic">Military and Diplomatic (APO, FPO, DPO)</option>
            <option value="USTerritories">U.S. Territories and Freely Associated States (American Samoa, Federated States of Micronesia, Guam, North Mariana Islands, Puerto Rico, Republic of Palau and the U.S. Virgin Islands)</option>
            <option value="UnitedStates">United States (For shipments coming from the U.S. Military or U.S. Territories to the 50 United States)</option>
        </select>
        <br />
        <input type="submit" value="Submit" />
    </form>
    </div>
  )
}

export default StepOne