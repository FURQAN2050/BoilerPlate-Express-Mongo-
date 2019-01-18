const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const competitionSchema = new Schema({
    _id : Schema.Types.ObjectId,
    name: { type: String, required: true },
    place: { type: String},
    users: { type: Number},
    fee: { type: Number},
    priceMoney: { type: Array},
    startDate: { type : Date,default: new Date(+new Date() + 7*24*60*60*1000)},
    endDate: { type : Date, default: new Date(+new Date() + 7*24*60*60*1000)},
    noofdays: { type: Number },
    pigeons: { type: Number}
},{ versionKey: false })

const Competition = mongoose.model('competition', competitionSchema);
module.exports = Competition;