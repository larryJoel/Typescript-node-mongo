"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const handlebars_1 = __importDefault(require("handlebars"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const allow_prototype_access_1 = require("@handlebars/allow-prototype-access");
const path_1 = __importDefault(require("path"));
//importing routes
const routers_1 = __importDefault(require("./routers"));
const books_1 = __importDefault(require("./routers/books"));
//initializations
const app = express_1.default();
require("./database");
//Settins
app.set('port', process.env.PORT || 3000);
app.set('views', path_1.default.join(__dirname, 'views'));
app.engine('.hbs', express_handlebars_1.default({
    extname: '.hbs',
    handlebars: allow_prototype_access_1.allowInsecurePrototypeAccess(handlebars_1.default),
    layoutsDir: path_1.default.join(app.get('views'), 'layouts'),
    partialsDir: path_1.default.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers'),
    defaultLayout: 'main'
}));
app.set('view engine', '.hbs');
//Middlewares
app.use(express_1.default.json());
app.use(express_1.urlencoded({ extended: false }));
//Routes
app.use('/', books_1.default);
app.use('/books', routers_1.default);
//Statics Files
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
