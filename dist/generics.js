"use strict";
// 컬렉션
class Collection {
    constructor() {
        this.collection = [];
    }
    add(item) {
        this.collection.push(item);
    }
}
// 문자열 컬렉션
class StringCollection extends Collection {
    constructor() {
        super(...arguments);
        this.collection = [];
    }
    add(item) {
        this.collection.push(item);
    }
}
// 넘버 컬렉션
class NumberCollection extends Collection {
    constructor() {
        super(...arguments);
        this.collection = [];
    }
    add(item) {
        this.collection.push(item);
    }
}
// ... 컬렉션
// ...  컬렉션... 컬렉션 지옥...
// 제네릭 컬렉션
class GenericCollection {
    constructor() {
        this.collection = [];
    }
    add(item) {
        this.collection.push(item);
    }
}
