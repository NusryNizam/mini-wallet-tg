const User = require("../models/User.model");
const jwt = require("jsonwebtoken");

const handleErrors = (err) => {
  // console.log(err.message, err.code);
  let errors = { response: "" };

  //Signup errors
  if (err.code === 11000) {
    if (err.keyValue.email) {
      // errors.email = "email not available"
      errors.error = "email not available";
      return errors;
    }
    if (err.keyValue.email) {
      // errors.email = "Email not accepted"
      errors.error = "Email not accepted";
      return errors;
    }
  }

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      // errors[properties.path] = properties.message
      errors.error = properties.message;
    });
    return errors;
  }

  // Login Errors
  if (err.message.includes("Incorrect")) {
    errors.error = "Email or password doesn't match";
    // errors.password = "Email or password doesn't match"
    return errors;
  }
};

const maxAge = 7 * 24 * 60 * 60; // 7 days
const createToken = (id) => {
  const token = jwt.sign({ id }, process.env.PRIVATE_KEY, {
    expiresIn: maxAge,
  });
  return token;
};

const login = async (req, res) => {
  const { email, password } = req.body;
  // console.log(email, password)

  try {
    let user = await User.login(email, password);
    // console.log('User Logged in', user._id)
    const token = createToken(user._id);
    // res.cookie("jwt", token, {
    //   maxAge: maxAge * 1000,
    //   httpOnly: true,
    //   sameSite: "None",
    //   secure: true,
    // });
    res.status(200).json({ user: user._id, token: token });
  } catch (err) {
    res.status(401).json(handleErrors(err));
  }
};

const signup = async (req, res) => {
  const { email, password } = req.body;
  // console.log(req.body)
  try {
    const user = await User.create({
      email,
      password,
    });
    if (user) {
      // console.log(user);
      const token = createToken(user._id);
      // res.cookie('jwt', token, {
      //     maxAge: maxAge * 1000,
      //     httpOnly: true,
      //     sameSite: 'None',
      //     secure: true
      // })
      res.status(201).json({ user: user._id, token: token });
    }
  } catch (err) {
    res.status(401).json(handleErrors(err));
  }
};

module.exports.login = login;
module.exports.signup = signup;
