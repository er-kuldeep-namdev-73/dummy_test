import React, { useState } from 'react'

const Answer = () => {

    const [opt, setOption] = useState([])
    function addOption() {
        setOption([...opt, 0])
    }

    return (
        <>
            {
                opt.length < 4 ? <><button onClick={addOption} type='button' className='btn btn-primary m-1'>Add Option</button><br /></> : null

            }
            {
                opt.map((ele, ind) => {
                    return <><label htmlFor={`${ind + 1}`} >Options :</label> {`${String.fromCharCode(ind + 65)}`}<input type='text' placeholder='enter the answer' className='form-control w-75' key={ind} id={`${ind + 1}`}
                    />
                    </>

                })

            }
            <label>Correct Answer :</label>
            {
                opt.map((item, inde) => {

                    return (
                        <>{`${String.fromCharCode(inde + 65)}`}
                            <input type="radio" className='form-check-input mx-2'
                        /></>
                    )
                })
            }
        </>
    )
}

export default Answer