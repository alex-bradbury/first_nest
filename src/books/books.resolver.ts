import { Args, Query, Resolver } from '@nestjs/graphql';
import { Book } from './books.model';

@Resolver(() => Book)
export class BooksResolver {
    constructor(private booksService: BooksService) { }

    @Query(returns => Book)
    async book(@Args('id', { type: () => Int }) id: number) {
        return this.booksService.findOneById(id);
    }

}
