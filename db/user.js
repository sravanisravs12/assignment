const{default:mongoose} = require("mongoose");
require("dotenv").config()
const claimSchema= require("./claimSchema");
const statusSchema=require("./statusSchema");
const vehicleSchema = require("./vehicleSchema");
const DB_Name = process.env.DB_Name || "vehicleInsurence";
const URI = process.env.MONGO_URI || "mongodb+srv://temp:temp@cluster0.wkea2ju.mongodb.net";
const MONGO_URI=`${URI}/${DB_Name}`;
mongoose.connect(MONGO_URI).then(()=>console.log("connected")).catch((err)=>console.log(err))

const fileClaim = mongoose.model('claim', claimSchema, 'fileClaim');
const trackStatus = mongoose.model('status', statusSchema, 'trackStatus');
const vehicledetails = mongoose.model('vehicle',vehicleSchema, 'vehicledatails');

module.exports={fileClaim,trackStatus,vehicledetails};