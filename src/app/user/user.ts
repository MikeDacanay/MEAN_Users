export class User {
	constructor(
		public _id: number = Math.floor(math.random()*100),
		public first_name: string = "",
		public last_name: string = "",
		public email_name: string = "",
	){}
}
