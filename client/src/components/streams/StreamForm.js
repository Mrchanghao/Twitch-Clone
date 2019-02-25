import React from 'react';
import { Field, reduxForm } from 'redux-form'

class StreamForm extends React.Component {

  renderError = ({error, touched}) => {
    if(touched && error) {
      return (
        <div className='ui message red'>
          <div className='header'>{error}</div>
        </div>
      )
    }
  }

  renderField = ({input, label, type, meta}) => {
    // console.log(meta)
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
        <div className={className}>
          <label>{label}</label>
          <input {...input} type={type} autoComplete='off'/>
          {this.renderError(meta)}
          {/* {meta.touched && meta.valid ? null : <p className='ui pointing red basic label'>{meta.error}</p>} */}
        </div>
    )
  } 

  submitHandler = (formValues) => {
    // console.log(formValues)
    this.props.onSubmit(formValues);
  }

  render() {
    // console.log(this.props)
  return (
    <div className='ui container'>
      <h1>Stream Create</h1>
      <form className='ui form error' onSubmit={this.props.handleSubmit(this.submitHandler)}>
        <Field name='title' 
        label='Enter Title'
        type='text'
        component={this.renderField}
        placeholder='Enter Title' />

        <Field name='description' 
        label='Enter description'
        type='text'
        component={this.renderField}
        placeholder='Enter Description' />
        <button 
        className='button ui primary'
        type="submit">
          완료
        </button>
      </form>
    </div>
  );
}
}

const validate = (formValues) => {
  const errors = {};
  if(!formValues.title) {
    errors.title = '타이틀을 입력해 주세요'
  }
  if(!formValues.description) {
    errors.description = '상세 내용을 기재해 주세요'
  }
  return errors;
}


export default (reduxForm({form: 'streamForm', validate})(StreamForm));
