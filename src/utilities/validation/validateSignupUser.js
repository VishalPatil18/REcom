const validateSignupUserStep1 = (newUser) => {
  const firstNameLength = newUser.firstName.length;
  const lastNameLength = newUser.lastName.length;
  const usernameLength = newUser.username.length;

  if (firstNameLength === 0 || lastNameLength === 0 || usernameLength === 0) {
    return "Firstname, Lastname and Username cannot be empty!";
  }

  if (usernameLength < 8) return "Username must be atleast 8 characters long!";

  const regexUsername = /^[a-z0-9]+$/i;
  const usernameTestResult = regexUsername.test(newUser.username);
  if (usernameTestResult) {
    return true;
  } else {
    return "Username can only contain Alphanumeric characters!";
  }
};

const validateSignupUserStep2 = (newUser, confirmPassword) => {
  const emailLength = newUser.email.length;
  const passwordLength = newUser.password.length;

  if (emailLength === 0 || passwordLength === 0) {
    return "Email and Password cannot be empty!";
  }

  if (newUser.password !== confirmPassword.confirmPassword) {
    return "Passwords do not match! Please try again";
  }

  const regexHasNum = /[0-9]/;
  const regexHasAlpha = /[a-z]/i;
  const regexEmail = /\S+@\S+\.\S+/;
  const passTestResult =
    regexHasNum.test(newUser.password) && regexHasAlpha.test(newUser.password);
  const emailTestResult = regexEmail.test(newUser.email);
  if (passTestResult && emailTestResult) {
    return true;
  } else if (emailTestResult) {
    return "Invalid password! Password should have smallcase letter, capital letter and number each.";
  } else if (passTestResult) {
    return "Invalid Email! Please try again.";
  } else {
    return "Invalid Email and Password! Please try again.";
  }
};

export { validateSignupUserStep1, validateSignupUserStep2 };
