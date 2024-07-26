/* 
function taskFirst(){
	const task = 'I prefer const when I can.';
	return task;
}
function taskNext(){
	let combination = 'But sometimes let';
	return combination;
}
function getLast(){
	return 'is Okey';
}
console.log('${taskFirst()} ${taskNext()} ${getLast()}');
*/
export function taskFirst() {
	const task = 'I prefer const when I can.';
	return task;
     }
     
     export function getLast() {
	return ' is okay';
     }
     
     export function taskNext() {
	let combination = 'But sometimes let';
	combination += getLast();
	return combination;
     }
     