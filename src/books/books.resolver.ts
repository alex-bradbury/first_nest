import { CreateBookDto } from './create-book.dto';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './books.model';
import { BooksService } from './books.service';

@Resolver()
export class BooksResolver {
    constructor(private booksService: BooksService) { }

    @Query(returns => String)
    async hello() {
        return 'hello world';
    }

    @Query(returns => String)
    async mongo() {
        return process.env.MONGO_CONNECTION;
    }

    @Query(returns => [Book])
    async books() {
        return this.booksService.findAll();
    }

    @Mutation(returns => Book)
    async createBook(@Args('input') input: CreateBookDto) {
        return this.booksService.create(input);
    }
}
