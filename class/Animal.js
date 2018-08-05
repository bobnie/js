class Aniaml
{
	constructor(name){
		this.name = name;
	}
}
class Cat extends Aniaml{
	constructor(name,sex){
		super(name);
		this.sex = sex;
	}
	say(){
		console.log('hello, ' +this.name + '!');
		console.log('your sex is ' + this.sex + '!' );
	}
}
var cat = new Cat('cat','felmal');
cat.say();
