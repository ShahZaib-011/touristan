const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateTripInput(data) {
  let errors = {};

  data.designation = !isEmpty(data.designation) ? data.designation : '';
  // data.departureDate = !isEmpty(data.departureDate) ? data.departureDate : '';
  data.numberOfDays = !isEmpty(data.numberOfDays) ? data.numberOfDays : '';
  data.numberOfPeople = !isEmpty(data.numberOfPeople) ? data.numberOfPeople : '';
  data.tripType = !isEmpty(data.tripType) ? data.tripType : '';
  data.title = !isEmpty(data.title) ? data.title : '';
  data.desc = !isEmpty(data.desc) ? data.desc : '';
  data.price = !isEmpty(data.price) ? data.price : '';

  if (!Validator.isLength(data.title, { min: 10, max: 100 })) {
    errors.title = 'Title must be between 10 and 100 characters';
  }
  if (!Validator.isLength(data.desc, { min: 30 })) {
    errors.desc = 'Description must be more than 30 characters';
  }

  if (Validator.isEmpty(data.numberOfPeople)) {
    errors.numberOfPeople = 'Text field is required';
  }
  if (Validator.isEmpty(data.tripType)) {
    errors.tripType = 'Text field is required';
  }

  if (Validator.isEmpty(data.designation)) {
    errors.designation = 'Text field is required';
  }
  // if (Validator.isEmpty(data.departureDate)) {
  //   errors.departureDate = 'Text field is required';
  // }

  if (Validator.isEmpty(data.numberOfDays)) {
    errors.numberOfDays = 'Text field is required';
  }
  if (Validator.isEmpty(data.title)) {
    errors.title = 'Text field is required';
  }
  if (Validator.isEmpty(data.desc)) {
    errors.desc = 'Text field is required';
  }
  if (Validator.isEmpty(data.price)) {
    errors.price = 'Text field is required';
  }
  
  // if (Validator.isEmpty(data.title)) {
  //   errors.title = 'Title field is required';
  // }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
