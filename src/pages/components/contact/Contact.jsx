import React from 'react';
import Cities from '../mutural/Cities';
import Form from './components/Form'

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrap">
        <Form />
        <Cities />
      </div>
    </div>
  )
}

export default Contact