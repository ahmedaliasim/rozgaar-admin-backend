const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    vendorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vendor',
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'client',
    },
    completedOrder:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'orders'
    },
    amount: {
        type: Number,
        required: true
    },
    paymentGateway: {
        type: String,
        default: "cash"
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    
})


paymentSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

paymentSchema.set('toJSON', {
    virtuals: true,
});

mongoose.model('Payment', paymentSchema);