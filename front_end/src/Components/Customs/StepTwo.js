import React from 'react'
// import './StepTwo.css'

const StepTwo = () => {
    return (
        <div style={{ width: "50vw", margin: "1rem auto" }}>
            <h2>What international destination are you shipping to?</h2>
    <form>
        <label for="destination">*Please enter an international destination:</label>
        <input type="text" id="destination" name="destination" value="INDIA" required />
        <br />
        <input type="submit" value="Submit" />
    </form>
        </div>
    )
}

export default StepTwo