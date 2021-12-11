const mongoose = require('mongoose');

const BlockedClientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    userName:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        default:''
    },
    cnic: {
        type: String,
        default:''
    },
    // passwordHash: {
    //     type: String,
    //     default:''
    // },
    // address:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'address',
    //     default:''
    // },
    phone: {
        type: String,
        default:''
    },
    // isAdmin: {
    //     type: Boolean,
    //     default: false,
    // },
    // joiningDate: {
    //     type: Date,
    //     default: Date.now
    // },
    // acceptedOrders:[{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'orders',
    //     default:''
    // }],
    // cancelledOrders:[{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'orders',
    //     default:''
    // }],
     image:{
         type:String,
         default:''
     },
 

    // status:{
    //     type:String,
    //     default:''
    // }

});

BlockedClientSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

BlockedClientSchema.set('toJSON', {
    virtuals: true,
});

exports.BlockedClient = mongoose.model("blockedclient", BlockedClientSchema);
exports.BlockedClientSchema = BlockedClientSchema;
