import { Book } from "./book.interface";
import { LibraryUser } from "./library-user.model";

export interface Library {
    id: number;
    name: string;
    books: Book[];
    users?: LibraryUser[];
}