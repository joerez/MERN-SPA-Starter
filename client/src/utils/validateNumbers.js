const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

export default(number) => {
  if (re.test(number)) {
      var formattedPhoneNumber =
          number.replace(re, "($1) $2-$3");
  } else {
      // Invalid phone number
      return 'This number is invalid';
  }

  return;
};
