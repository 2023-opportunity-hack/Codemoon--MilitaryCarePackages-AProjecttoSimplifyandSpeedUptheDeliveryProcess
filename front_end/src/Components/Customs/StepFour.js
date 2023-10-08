import React from 'react'

const StepFour = () => {
    return (
        <div style={{ width: "50vw", margin: "1rem auto" }}>
            <form>
                <label for="packageWeight">Package Weight</label>
                <div>
                    <input type="number" id="packageWeightLbs" name="packageWeightLbs" placeholder="0" min="0" step="1" required />
                    <label for="packageWeightLbs">lbs</label>
                    <input type="number" id="packageWeightOz" name="packageWeightOz" placeholder="0" min="0" step="1" required /> 
                        <label for="packageWeightOz">oz</label>
                </div>

                <label for="packageValue">Total Package Value</label>
                <div>
                    $<input type="number" id="packageValue" name="packageValue" placeholder="0" min="0" step="0.01" required />
                </div>

                <label for="packageLength">Length</label>
                <div>
                    <input type="number" id="packageLength" name="packageLength" placeholder="0" min="0" step="0.01" />
                    <label for="packageLength">in</label>
                </div>

                <label for="packageWidth">Width</label>
                <div>
                    <input type="number" id="packageWidth" name="packageWidth" placeholder="0" min="0" step="0.01" />
                    <label for="packageWidth">in</label>
                </div>

                <label for="packageHeight">Height</label>
                <div>
                    <input type="number" id="packageHeight" name="packageHeight" placeholder="0" min="0" step="0.01" />
                    <label for="packageHeight">in</label>
                </div>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default StepFour