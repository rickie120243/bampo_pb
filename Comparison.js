var fs=require('fs');

var pb="<pb id=";
var BM="<BM";
var pb_line=0;
var BM_line=0;

var trimid=function(id,ends){
	var q=id.indexOf(ends);
	if(q>-1){
		id=id.substr(0,q);
	}
	return id;
}
var processfile=function(filename){
	//console.log(filename);
	var text_arr=fs.readFileSync(filename,"utf8").replace(/\r\n/g,"\n").split("\n");
	//console.log("total line:",text_arr.length);
	for(var i=0;i<text_arr.length;i++){//=for(var i in text_arr){
		var line=text_arr[i];
		var m=line.indexOf(pb);
		var n=line.indexOf(BM);
		if(m>-1){
		//	pb_lines++;
			pb_line=i;
			var pbid=trimid(line.substr(m+8,8),'"');
					
		}
		if(n>-1){
			var lineoffset=i-pb_line+1;
			var BMid=trimid(line.substr(n+3,8),'/');
			console.log(BMid+"="+pbid+lineoffset);
		}
	}
}
//processfile("001fix.xml");

var textinput=fs.readFileSync('filelist.xml',"utf8").replace(/\r\n/g,"\n").split("\n");
	for(var i in textinput){
		var text=textinput[i];
		console.log(text);
		processfile(text);
	}
//console.log("pb:",pbid);