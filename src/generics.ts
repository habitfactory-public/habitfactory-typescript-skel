// 컬렉션
class Collection {
	protected collection: any = [];

	add(item: any): void {
		this.collection.push(item);
	}
}

// 문자열 컬렉션
class StringCollection extends Collection {
	protected collection: string[] = [];
	
	add(item: string): void {
		this.collection.push(item);
	}
}

// 넘버 컬렉션
class NumberCollection extends Collection {
	protected collection: number[] = [];
	
	add(item: number): void {
		this.collection.push(item);
	}
}

// ... 컬렉션

// ...  컬렉션... 컬렉션 지옥...

// 제네릭 컬렉션
class GenericCollection<T> {
	private collection: T[] = [];

	add(item: T): void {
		this.collection.push(item);
	}
}