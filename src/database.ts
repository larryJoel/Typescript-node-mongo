import mongoose from 'mongoose';
import { mongodb } from './keys';
mongoose.connect(mongodb.URI,{
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