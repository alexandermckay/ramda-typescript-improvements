type ClassConstructor = new (...args: any[]) => Record<string, unknown>

export type Constructor =
	| NumberConstructor
	| FunctionConstructor
	| BooleanConstructor
	| ObjectConstructor
	| StringConstructor
	| ArrayConstructor
	| RegExpConstructor
	| ClassConstructor
