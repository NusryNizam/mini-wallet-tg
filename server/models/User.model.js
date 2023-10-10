const mongoose = require('mongoose')
const validator = require('validator')
const encrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  displayName: {
    type: String,
    minlength: [3, 'Please use atleast 3 characters']
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [4, 'Minimum password length should be 4']

  },
})

userSchema.pre('save', async function(next) {
    const salt = await encrypt.genSalt()
    this.password = await encrypt.hash(this.password, salt)

    next()
})

userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({email})
    if(user) {
        const isSame = await encrypt.compare(password, user.password)
        if(isSame) {
            return user
        }
        throw Error('Incorrect password')
    }
    throw Error('Incorrect email')
}

const User = mongoose.model('User', userSchema)

module.exports = User