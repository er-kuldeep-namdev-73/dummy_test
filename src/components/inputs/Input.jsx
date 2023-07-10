import React, { useState } from 'react'
import Answer from './Answer';

const Input = () => {

    const [numOfQuestions, setNumOfQuestions] = useState([0]);

    function AddField() {
        setNumOfQuestions([...numOfQuestions, 0])
    }

    

    return (

        <form>
            {
                numOfQuestions.map((element, index) => (
                    <div className='m-1 bg-light text-dark rounded p-3 w-50 ' key={index}>
                        <label className='mb-1' htmlFor={`${index}`}>Question : {`No. ${index + 1}`}</label>
                        <input type="text" className='form-control' placeholder='Enter the question' key="index" id={`${index}`}/>
                        <Answer/>
                    </div>
                ))
            }
            {numOfQuestions.length < 10 ? <button type='button' className='btn btn-warning mt-2' onClick={AddField}>Add Filed</button> : null}
        </form>
    )
}

export default Input;