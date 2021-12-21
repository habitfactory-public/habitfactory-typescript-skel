// type (type alias)
type BodyShape = 'fat' | 'slim';
type Person = {
	name: string,
	age: number,
	bodyShape: BodyShape,
	goodlooking: boolean
};

const leejuheon: Person = {
	name: '이주헌',
	age: 44,
	bodyShape: 'fat',
	goodlooking: true
};

// interface
interface IPerson {
	name: string,
	age: number,
	bodyShape: BodyShape,
	goodlooking: boolean
}

const ahnjungwoo: IPerson = {
	name: '안정우',
	age: 40,
	bodyShape: 'slim',
	goodlooking: true
}

interface IDetailedPerson extends IPerson {
	height: number;
	job: string;
	carName?: string;
}

const shineunchong: IDetailedPerson = {
	name: '신은총',
	age: 23,
	bodyShape: 'slim',
	goodlooking: true,
	height: 160,
	job: 'programmer'
}

// class interface
interface Teach {
	teacher: string;
	students: string[];
}