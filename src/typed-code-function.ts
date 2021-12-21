// function
function sayHelloTo1(name: string): string {
	return `hello, ${name}`;
}

const sayHelloTo2 = (name: string): string => {
	return `hello, ${name}`;
}

function kingSays(name: string, greet: (name: string) => string): string {
	return `King says: ${greet(name)}`;
}

console.log(kingSays('juheon', sayHelloTo1));

// optional in function
function sayName(name?: string): void {
	if(name) {
		console.log(`name is ${name}`);
	} else {
		console.log(`nameless one!`);
	}
}

// optional in object
const obj: {
	name: string,
	age: number,
	job?: string
} = {
	name: '이주헌',
	age: 44
};