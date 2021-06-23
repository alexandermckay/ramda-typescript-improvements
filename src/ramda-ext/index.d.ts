import "ramda"

type ClassConstructor = new (...args: any[]) => Record<string, unknown>

type Constructor =
	| NumberConstructor
	| FunctionConstructor
	| BooleanConstructor
	| ObjectConstructor
	| StringConstructor
	| ArrayConstructor
	| RegExpConstructor
	| ClassConstructor

declare module "ramda" {
	export function is<Guard>(constructor: Constructor, v: any): v is Guard
	export function is<Guard>(constructor: Constructor): (v: any) => v is Guard

	export function propIs<Obj extends object>(
		constructor: Constructor
	): (key: keyof Obj) => (obj: Obj) => boolean
	export function propIs<Obj extends object>(
		constructor: Constructor,
		key: keyof Obj
	): (obj: Obj) => boolean
	export function propIs<Obj extends object>(
		constructor: Constructor,
		key: keyof Obj,
		obj: Obj
	): boolean
}
