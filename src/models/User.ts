import Serie from "./Serie";
import { Event } from "./Event";
import { Comment } from "./Comment";

export interface User {
    _id?: string;
    name?: String;
	username?: String;
	password: String;
	confirmPassword?:String;
	birthdate?: Date;
	email?: String;
	avatar?: String;
	serie?: Serie[];
	event?: Event[];
	comment?: Comment[];
}
export {};