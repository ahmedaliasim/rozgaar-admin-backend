const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    vendorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vendor',
    },
    vendorName:{
        type: String,
        default:"vendor name here"
    },
    description: {
        type: String,
        default: 'description here'
    },
    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category' 
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
})

serviceSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

serviceSchema.set('toJSON', {
    virtuals: true,
});


exports.Service = mongoose.model('service', serviceSchema);
exports.serviceSchema = serviceSchema;