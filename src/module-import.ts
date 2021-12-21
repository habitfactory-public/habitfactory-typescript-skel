import * as mod from './module-export';

console.log(mod.이렇게도_가능);

import { 설마_이것도 } from './module-export';
const 그래 = new 설마_이것도();

import { 이렇게도_가능 as 별칭으로_임포트가_가능 } from './module-export';
console.log(별칭으로_임포트가_가능);

import defaultFunction from './module-export';