class Message {
	private to: string;
	private readonly from: string = 'jhlee@habitfactory.co';
	private message: string = '';

	constructor(to: string) {
		this.to = to;
	}

	send(): void {
		console.log(`send message to ${this.to} from ${this.from}`);
	}

	setMessage(message: string): void {
		this.message = message;
	}
}