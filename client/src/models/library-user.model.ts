import { Library } from "./library.model";
import { OrderType } from "./types/types";

export interface LibraryUser {
    id: number;
    firstName: string;
    lastName: string;
    userRole: OrderType;
    library: Library;
}