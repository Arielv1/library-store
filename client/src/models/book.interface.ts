import { Author } from "./author.interface";
import { Genre } from "./genre.model";

export interface Book {
    id: number;
    name: string;
    author: Author;
    coAuthors: Author[];
    genre: Genre[];
    price: number;
    totalQuantity: number;
    availableQuantity: number;
}