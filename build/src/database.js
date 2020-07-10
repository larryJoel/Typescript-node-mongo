"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const keys_1 = require("./keys");
mongoose_1.default.connect(keys_1.mongodb.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Bb is conected'))
    .catch(err => console.log(err));
// mongoose.connect("mongodb://localhost:27017/ts_crud", {
//   useUnifiedTopology: true,
//   useNewUrlParser: true
// })
// .then(db => console.log('Bb is conected'))
// .catch(err => console.log(err));
