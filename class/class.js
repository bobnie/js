//构造函数Student
/*function Student(name)
{
	this.name = name;
}
Student.prototype.hello = function ()
{
	alert('hello, ' + this.name + '!');
}*/
class Student {
	constructor(name)
	{
		this.name = name;
	}
	hello()
	{
		alert('hello, ' + this.name + '!');
	}
}
var xiaoming = new Student('小明');
xiaoming.hello();
class PrimaryStudent extends Student 
{
	constructor(name,grade)
	{
		super(name);
		this.grade = grade;
	}
	myGrade()
	{
		alert('I am at grade ' + this.grade);
	}
}
var xiao = new PrimaryStudent('小红',22);
xiao.myGrade();
xiao.hello();
