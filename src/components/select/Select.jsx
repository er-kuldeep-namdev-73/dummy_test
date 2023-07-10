import React from 'react'

const Select = ({ allSelect, handleChange, handleAddTechnology, technology, formData}) => {
    return (
        <>
        <label>Select technology </label>
        {
            allSelect.map((elem, index) => (
                <select name={`select${index+1}`} onClick={handleChange} key={index} className='form-control w-50 m-2'>
                    {
                        elem.map((element, ind) => (
                            <option value={element} key={ind}>{element}</option>
                        ))
                    }
                </select>
            ))
        }
      {
      (formData.length/2)===technology.length || (formData.length)===technology.length?null:<button type='button' onClick={handleAddTechnology} className='btn btn-warning'>Add More</button>
    }
    {
        console.log("formData",formData.length,"technology",technology.length)
    }
    </>
  )
}

export default Select