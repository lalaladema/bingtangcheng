var abs=function (x) {
	if (typeof x !='number'){
		throw 'arguments is not number!';
		}	
	if (x>0){
		return x;
	}else {
		return -x;
	}
	
};
var lol=10;
console.log(abs(lol));
console.log(abs(-100));
console.log(abs('10'));
