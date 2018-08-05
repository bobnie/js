function Student(props)
{
	this.name = props.name || 'Unname';
}
Student.prototype.hello = function ()
{
	alert('hello, ' + props.name + '!');
}
function PrimaryStudent(props)
{
	Student.call(this,props);
	this.grade = props.grade || 1;
}
function F(){}
F.prototype = Student.prototype;
PrimaryStudent.prototype = new F();
PrimaryStudent.prototype.constructor = PrimaryStudent;
PrimaryStudent.prototype.getGrade = function ()
{
	return this.grade;
}
var xiaoming = new PrimaryStudent({
	name: '小明',
	grade: 2
});
console.log(xiaoming.name);
console.log(xiaoming.grade);
console.log(xiaoming.__proto__ === PrimaryStudent.prototype);
console.log(xiaoming.__proto__.__proto__ === Student.prototype);
console.log(xiaoming instanceof PrimaryStudent);
console.log(xiaoming instanceof Student);
