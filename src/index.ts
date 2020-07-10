import express, { urlencoded } from 'express';
import Handlebars from 'handlebars'
import exphbs from 'express-handlebars';
import{allowInsecurePrototypeAccess} from '@handlebars/allow-prototype-access';
import path from 'path';

//importing routes
import indexRoutes from './routers';
import booksRoutes from './routers/books'

//initializations
const app = express();
import './database';

//Settins
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs', exphbs({
    extname:'.hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    helpers:require('./lib/helpers'),
    defaultLayout:'main'
}));
app.set('view engine','.hbs');

//Middlewares
app.use(express.json());
app.use(urlencoded({extended:false}));


//Routes
app.use('/', booksRoutes)
app.use('/books',indexRoutes);

//Statics Files
app.use(express.static(path.join(__dirname,'public')));

//starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});