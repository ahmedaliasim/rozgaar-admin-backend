const mongoose = require('mongoose');

const cancelledOrderSchema = mongoose.Schema({
    vendorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vendor',
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'client',
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    serviceId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'service'
    },
    
    
})


cancelledOrderSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

cancelledOrderSchema.set('toJSON', {
    virtuals: true,
});

mongoose.model('CancelledOrder', cancelledOrderSchema);