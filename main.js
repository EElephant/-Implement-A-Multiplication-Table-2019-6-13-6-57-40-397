function isStartLessThanEnd (start,end){
	return start<=end;
}

function isInRange(start,end){
	return (start<=1000&&start>=1) && (end<=1000&&end >=1);
}

function createMultiplyTable(start,end){
	if(isStartLessThanEnd(start,end) == false){
		return null;
	}else if(isInRange(start,end) == false){
		return 'out of range';
	}else{
		let multiplyTable = [];
		for(var i=start;i<=end;i++){
			for(var j=2;j<=i;j++){
				multiplyTable.push(i+'x'+j+'='+(i*j))
			}
		}
		return multiplyTable;
	}
}


module.exports = {isStartLessThanEnd,
isInRange,
createMultiplyTable}