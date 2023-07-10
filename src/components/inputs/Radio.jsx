import React,{useState} from 'react'

const Radio = () => {
    const [opt, setOption] = useState([])
    function addOption() {
        setOption([...opt, 0])
    }
    return (
        <>
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

export default Radio