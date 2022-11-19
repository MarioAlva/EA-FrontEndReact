import { Serie } from "./Serie";

export interface User {
    _id?: string;
    name?: String;
	username?: String;
	password: String;
	birthdate?: Date;
	email: String;
	series?: Serie[];
}
export {};