function inherts (Child,Parent)
{
	var F = function (){}
	F.prototype = Parent.partotype;
	Child.protype = new F();
	Child.prototype.constructor = Child;
}
function Student (props)
{
	this.name = props.name || 'Unname';
}
Student.prototype.hello = function()
{
	alert('hello, ' + this.name + '!');
}
function PrimaryStudent (props)
{
	Student.call(this,props);
	this.grade = props.grade || 1;
}
inherts(PrimaryStudent,Student);
PrimaryStudent.prototype.getGrad = function ()
{
	return this.grade;
};
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
