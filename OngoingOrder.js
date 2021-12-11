const mongoose = require('mongoose');

const ongoingOrderSchema = mongoose.Schema({
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
    location: {
        type: String,
        default: '',
    },
    
    
})


ongoingOrderSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

ongoingOrderSchema.set('toJSON', {
    virtuals: true,
});

mongoose.model('OngoingOrder', ongoingOrderSchema);