import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './books.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }])],
    providers: [BooksResolver, BooksService],
})
export class BooksModule { }
