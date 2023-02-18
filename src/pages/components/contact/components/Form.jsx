import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <div className='form'>
      <div className='form__container'>
        <div className='form__content'>
          <h2 className='form__headline'>Contact Us</h2>
          <p className='form__text'>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <div className='form-form__container'>
          <form action='submit' method='POST' className='form__form'>
            <input
              type='text'
              name='name'
              placeholder='Name'
              className='form__field'
              required
            />
            <input
              type='email'
              name='email-address'
              placeholder='Email Address'
              className='form__field'
              required
            />
            <input
              type='phone'
              name='phone'
              placeholder='Phone'
              className='form__field'
              required
            />
            <textarea
              name='message'
              id='message'
              placeholder='Your message'
              cols='30'
              rows='7'
              className='form__textarea'
              required></textarea>
            <button type='submit' className='btn form__submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
