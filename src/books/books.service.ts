import { CreateBookDto } from './create-book.dto';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './books.schema';

@Injectable()
export class BooksService {
    constructor(@InjectModel('Book') private bookModel: Model<BookDocument>) { }

    async create(createBookDto: CreateBookDto): Promise<Book> {
        const createdBook = new this.bookModel(createBookDto);
        return createdBook.save();
    }

    async findOneTitle(search: string): Promise<Book> {
        return this.bookModel.findOne({ title: search });
    }

    async findOneId(id: string): Promise<Book> {
        return this.bookModel.findById(id);
    }

    async delete(id: string): Promise<Book> {
        return this.bookModel.findByIdAndDelete(id);
    }

    async findAll(): Promise<Book[]> {
        return this.bookModel.find().exec();
    }

    async update(id: string, createBookDto: CreateBookDto): Promise<Book> {
        return this.bookModel.findByIdAndUpdate(id, createBookDto);
    }
}