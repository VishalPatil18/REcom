const validateLoginUser = (user) => {
  const usernameLength = user.username.length;
  const passwordLength = user.password.length;
  if (usernameLength === 0 && passwordLength === 0) {
    return "Username and Password cannot be empty!";
  } else if (usernameLength === 0) {
    return "Username cannot be empty! Please enter a valid username";
  } else if (passwordLength === 0) {
    return "Password cannot be empty! Please enter a valid password";
  }

  const regexUsername = /^[a-z0-9]+$/i;
  const usernameTestResult = regexUsername.test(user.username);
  if (usernameTestResult) {
    return true;
  } else {
    return "Invalid Username! Please enter a valid username";
  }
};

export { validateLoginUser };
