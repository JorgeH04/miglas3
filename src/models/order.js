const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const OrderSchema = new Schema({
  user: { 
    type: ObjectId,
    ref: 'User'
   },
   cart: {
     type: Object,
     required: true
   
   },
   name: {
    type: String,
    // required: true
   },

   surname: {
    type: String,
    // required: true
   },
   

    number: {
    type: String,
   // required: true
   },
   fecha: {
   type: String,
  //  required: true
   },
    address: {
    type: String,
   //  required: true
   },
   localidad: {
   type: String,
  //  required: true
 },
   piso: {
     type: String,
//  required: true
  },
  envio: {
    type: String,
 //  required: true
   },

  nota: {
    type: String,
 //  required: true
   },

  total: {
    type: String,
 //  required: true
   },

   status: {
    type: Boolean,
    default: false
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model('Order', OrderSchema);