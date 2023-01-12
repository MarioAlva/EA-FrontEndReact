import Serie from "./Serie";

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
	
}
export {};