// union
type Fruit = 'apple' | 'banana' | 'mango';
type Vegetable = 'bean' | 'carrot' | 'onion' | 'garlic';
type Human = 'man' | 'woman';
type Alien = '화성인' | '안드로메다인';

const fruit: Fruit = 'apple';
const human: Human = 'man';

type GoodHealth = Fruit | Vegetable;
type IntelligentBeings = Human | Alien;

const food: GoodHealth = 'carrot';
const being: IntelligentBeings = '화성인';

// intersection
interface IHuman {
	hasEye: boolean;
	hasMouth: boolean;
	hasArm: boolean;
	hasLeg: boolean;
}

interface IAlien {
	hasHorn: boolean;
	hasTail: boolean;
}

type IItelligentBeings = IHuman & IAlien;
const earthian: IItelligentBeings = {
	hasEye: true,
	hasMouth: true,
	hasArm: true,
	hasLeg: true,
	hasHorn: false,
	hasTail: false
};

const marsian: IItelligentBeings = {
	hasEye: false,
	hasMouth: false,
	hasArm: false,
	hasLeg: false,
	hasHorn: true,
	hasTail: false
};