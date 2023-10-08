import React from 'react'
import MultiStep from 'react-multistep'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'

const Customs = () => {
    return (
        <>
            <center>
                <h4>Customs</h4>
                <MultiStep title={'Order Workflow'}
                    activeStep={0}
                    prevButton={{ title: 'Back', style: { background: 'red' } }}
                    nextButton={{ title: 'Forward', style: { background: 'green' } }}
                >
                    <StepOne title='StepOne' />
                    <StepTwo title='StepTwo' />
                    <StepThree title='StepThree' />
                    <StepFour title='StepFour' />
                </MultiStep>
            </center>
        </>
    )
}

export default Customs