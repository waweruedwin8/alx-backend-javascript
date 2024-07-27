
export function taskFirst(){
	const task = 'I prefer const when I can.';
	return task;
}
export function taskNext(){
	let combination = 'But sometimes let';
	return combination;
}
export function getLast(){
	return 'is Okey';
}
console.log('${taskFirst()} ${taskNext()} ${getLast()}');