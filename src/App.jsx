import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import SelectGenerate from './components/select/selectGenerate'
import Input from './components/inputs/Input'

const App = () => {
  return (
    <div className='m-5'>
      <SelectGenerate/>
      <Input/>
    </div>
  )
}

export default App