import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateBookDto {
    @Field()
    readonly title: string;
    @Field()
    readonly genre: string;
    @Field()
    readonly author: string;
}