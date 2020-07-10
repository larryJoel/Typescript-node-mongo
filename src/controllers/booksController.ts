import { Request, Response } from 'express';
import BookModel, { Book } from '../models/book';


class BooksController {

    public async index(req:Request,res:Response): Promise<void>{
        const books:Book[] = await BookModel.find();
        res.render('books/index',{
            title:'Books',
            books
        });
    }

    public renderformBooks(req:Request, res:Response): void{
        res.render('books/add',{
            title:'Add a Book'
        });
    }

    public async savesBook(req:Request, res:Response){
        const {title,author, isbn} = req.body;
        const book:Book = new BookModel({title,author,isbn});
        await book.save();
        res.redirect('/');
    }

}
export const booksController = new BooksController();