const mongoose = require('mongoose')

const entrySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User reference is required']
    },
    name: {
        type: String,
        minLength: [3, 'Please use atleast 3 characters'],
        maxLength: [100, 'Only 100 characters allowed'],
        required: [true, 'Name is required'],
        trim: true
    },
    category: {
        type: String,
        lowercase: true,
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required']
    },
    date: {
        type: Date,
        required: [true, 'Date is required']
    }
})

const Entry = mongoose.model('Entry', entrySchema)

module.exports = Entry