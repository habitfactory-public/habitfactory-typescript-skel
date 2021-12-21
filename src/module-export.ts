const SECRET_STRING = '이건 공개되면 안돼!';
const NON_SECRET_STRING = '이건 공개해야해.';

function ThisIsPrivateFunction(): void {

}

function ThisIsPublicFunction(): void {
	console.log('ThisIsPublicFunction');
}

class ThisIsPrivateClass {

}

class ThisIsPublicClass {

}

export { NON_SECRET_STRING };
export { ThisIsPublicFunction };
export { ThisIsPublicClass };

export const 이렇게도_가능 = 'string';
export function 요것도_오케이(): void {

}
export class 설마_이것도 {
	말해() {
		console.log('설마 이것도 말해')
	}
}

// proxy export pattern 1
export * from 'fs';

// proxy export pattern 2
export { dirname } from 'path';

export default function defaultFunction() {
	console.log('defaultFunction');
}