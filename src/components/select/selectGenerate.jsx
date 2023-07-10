import React, { useState } from 'react'
import Select from './Select';

const SelectGenerate = () => {

  let technology=["Python", ".Net", "Java", "JS", "php"]
  const [formData, setFormData] = useState([]);
  const [allSelect, setAllSelect] = useState([technology]);

  function handleChange(e) {
    if (!formData.includes(e.target.name))
      setFormData([...formData, e.target.value, e.target.name]);
    else {
      let ind = formData.indexOf(e.target.name);
      let copyFormData = [...formData];
      copyFormData.splice(ind, 1);
      copyFormData.splice(ind - 1, 1);
      copyFormData.push(e.target.name, e.target.value)
      setFormData([...copyFormData]);
    }
  }
  
  function handleAddTechnology() {
    //console.log(formData)
    let copyFormData = [...formData];
    copyFormData = copyFormData.filter(item => !item.includes('select'))
    setAllSelect([...allSelect, technology.filter(item => !copyFormData.includes(item))]);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    let copyFormData = [...formData];
    copyFormData = copyFormData.filter(item => !item.includes("select"))
    setFormData([...copyFormData])
    //console.log(copyFormData);
  }
  
  return (

    <form onSubmit={handleSubmit}>
      <Select allSelect={allSelect} handleChange={handleChange} handleAddTechnology={handleAddTechnology} technology={technology} formData={formData}/>
      <button type='submit' className='btn btn-success m-3'>Submit</button>
    </form>
  )
}

export default SelectGenerate;