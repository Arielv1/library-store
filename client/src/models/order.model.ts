import { Book } from "./book.interface";
import { Library } from "./library.model";

export interface Order {
    id: number;
    library: Library;
    books: Book

}