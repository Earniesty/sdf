// Write your student id, firstname, and lastname in a single line comment here
function isPasswordValid(password) {
  if (password === undefined || password === null  ) {
    return false;

  } else if (password.Lowercase ||
    password.Uppercase ||
    password == '@', '#', '$', '%', '^', '&', '*', '!' ||
    password == Number) {
    return true;

  }else if(password !=  password.toUppercase() ||
    password !=  password.toLowercase() ||
    password != Number) {
    return false
  }


}

console.log(isPasswordValid('As$$'));

module.exports = isPasswordValid
