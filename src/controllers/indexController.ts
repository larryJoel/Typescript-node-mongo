import { Request, Response } from 'express'
 

class IndexController {
    index (req:Request, res:Response) {
        res.render('index',{title:'Welcome to Books App..!'})
    }
}
export const indexController = new IndexController();

// export default indexController (otra forma)