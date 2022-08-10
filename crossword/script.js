// JavaScript Document
// This application is written by brijesh for Edusys Services
// Created 10-10-2011 
// Modified 14-9-12 - Fixed major bugs 

 var selected="";
 var ansa=new Array();
 var hnt=new Array()
 var logger;
hnt['row1']=new Array('A design process  in which progress is seen as flowing steadily downwards ', 'Across', 9);
 hnt['row2']=new Array('Iterative and incremental software development method', 'Across', 5);
 hnt['row3']=new Array('Technique used for identifying items with higher priority', 'Across', 9, '3, 6');
 hnt['row4']=new Array('A collection of people who share a common name', 'Across', 5);
 hnt['row5']=new Array('An inventory of items waiting for action', 'Across', 5);
 hnt['row6']=new Array('A well defined set of responsibilities used in Scrum Study', 'Across', 4);
 hnt['row7']=new Array('A consensus-based technique for estimating, commonly used in Agile method', 'Across', 13, '8, 5');
 hnt['row8']=new Array('Knowledge that cannot be passed on by means of writing', 'Across', 5);
 hnt['row9']=new Array('Maximum number of input items that can be processed at a time', 'Across', 5);
 hnt['row10']=new Array('Family of methodologies that focuses on efficiency and habitability', 'Across', 7);
 hnt['row11']=new Array('Initials of the title given to a person who facilitates Scrum of Scrums', 'Across', 3);
 hnt['col1']=new Array('Abbreviation for economically optimal algorithm for scheduling work', 'Down', 4)
 hnt['col2']=new Array('Abbreviation of an item that is valuable to the process of product development', 'Down', 3)
 hnt['col3']=new Array('The first thing depicted on a task board', 'Down', 5)
 hnt['col4']=new Array('The Scrum term for iteration', 'Down', 6)
 hnt['col5']=new Array('Term used for work that is currently in the pipeline', 'Down', 3)
 hnt['col6']=new Array('Abbreviation for a method where acceptance criteria is dicussed at length', 'Down', 4)
 hnt['col7']=new Array('Expand "L" in LRM', 'Down', 4)
 hnt['col8']=new Array('A temporary endeavor undertaken to create a unique result', 'Down', 7)
 hnt['col9']=new Array('A scheduling system based on JIT', 'Down', 6)
 hnt['col10']=new Array('An acronym coined by Bill Wake, used to evaluate the quality of user stories', 'Down', 6)
 hnt['col11']=new Array('A framework originally developed in 1995 by Ken Schwaber and Jeff Sutherland', 'Down', 5)
 
 function init(id){
	 if(selected!=""){
		 cancelWindow()
	}
	selected=id;
	var puzzleHighlighted=highlight(id)
	if(puzzleHighlighted==true){
	document.getElementById('smsg').style.display="none"	
	document.getElementById('newWindow').style.display="Block"
	document.getElementById('ori').innerHTML=hnt[id][1];
	if(hnt[id].length==3){document.getElementById('letters').innerHTML=hnt[id][2];}
	else{document.getElementById('letters').innerHTML=hnt[id][3];}
	document.getElementById('hint').innerHTML="Hint : "+hnt[id][0];
	if(ansa[id]){
		document.getElementById('itext').value=ansa[id];
	}
	else{
		document.getElementById('itext').value="Click here to Answer"
	}
document.forms['inputT'].itext.focus();
}
}

function cancelWindow(){
if(document.getElementById('puzzleTable').getElementsByTagName('td')){
	var element=document.getElementById('puzzleTable').getElementsByTagName('td');
	var n=element.length;
	for(var i=0; i<n; i++){
		if(hnt[selected][1]=="Across"){
		var obj=element.item(i).getAttribute('cId')
				if(obj==selected){
					element.item(i).className="pCell"
				}
				}
				else{
				var obj=element.item(i).getAttribute('cId1')
				if(obj==selected){
				element.item(i).className="pCell"
				}
				}
				}
}
	selected=""
	document.getElementById('error').innerHTML="";
	document.getElementById('newWindow').style.display="None"
	document.getElementById('smsg').style.display="block"
	updateReview()
}

function highlight(id){
if(document.getElementById('puzzleTable').getElementsByTagName('td')){
	var element=document.getElementById('puzzleTable').getElementsByTagName('td');
	var n=element.length;
	for(var i=0; i<n; i++){
		if(hnt[selected][1]=="Across"){
		var obj=element.item(i).getAttribute('cId');
				if(obj==id){
					element.item(i).className="pCell selected"
				}
		}
		else{
					var obj=element.item(i).getAttribute('cId1');
				if(obj==id){
					element.item(i).className="pCell selected"
				}
		}
			}
	return true;
}
}

function toggleValue(element){
	alert(this.value)
	if(this.value=="Click here to Answer"){
		this.value="";
	}
	else{
		if(this.value=""){
			this.value="Click here to Answer"
		}
		}
}

function validateInput(a){
	var len=hnt[selected][2]
	if(a.length!=len){
		document.getElementById('error').innerHTML="Only "+len+" Chanacters Allowed"
	}
	else{
		document.getElementById('error').innerHTML="";
	}
}

function update(){
			var tans=document.getElementById('itext').value;
			if(tans!='Click here to Answer'){
			if(tans.length==hnt[selected][2]){
			ansa[selected]=tans;
			updateTable();
			}
			else{
				alert("Please Enter exactly "+hnt[selected][2]+" characteds")
			}
			}
}
var e=0;
function updateTable(){
if(document.getElementById('puzzleTable').getElementsByTagName('td')){
	var element=document.getElementById('puzzleTable').getElementsByTagName('td');
	var n=element.length;
	var tempArray=ansa[selected].split("")
	var reCalcThis=new Array();
	for(var i=0; i<n; i++){
		if(hnt[selected][1]=="Across"){
		var obj=element.item(i).getAttribute('cId');
				if(obj==selected){
					element.item(i).innerHTML=tempArray[e]
					e++;
					if(element.item(i).getAttribute('cId1')){
						reCalcAnswer(element.item(i).getAttribute('cId1'))
					}
			}
				}
				else{
					var obj=element.item(i).getAttribute('cId1');
					if(obj==selected){
					element.item(i).innerHTML=tempArray[e]
					e++;
					if(element.item(i).getAttribute('cId')){
						reCalcAnswer(element.item(i).getAttribute('cId'))
					}
				}	
				}
			}
	e=0;
	tempArray=null;
	cancelWindow()
	reCalcAnswer('done')
	return true;	
}
}

word = new Array();
word['row1']="WATERFALL"; word['row2']="AGILE"; word['row3']="DOTVOTING"; word['row4']="GROUP"; word['row5']="QUEUE"; word['row6']="ROLE"; word['row7']="PLANNINGPOKER"; word['row8']="TACIT"; word['row9']="BATCH"; word['row10']="CRYSTAL"; word['row11']="CSM"; word['col1']="WSJF"; word['col2']="PBI"; word['col3']="STORY"; word['col4']="SPRINT"; word['col5']="WIP"; word['col6']="ATDD"; word['col7']="LAST"; word['col8']="PROJECT"; word['col9']="KANBAN"; word['col10']="INVEST"; word['col11']="SCRUM";
 
function highlightErrors(val){
if(document.getElementById('puzzleTable').getElementsByTagName('td')){
	var element=document.getElementById('puzzleTable').getElementsByTagName('td');
	var n=element.length;
	for(var i=0; i<n; i++){
		if(hnt[val][1]=="Across"){
		var obj=element.item(i).getAttribute('cId');
				if(obj==val){
					element.item(i).className="pCell errors"
				}
		}
		else{
				var obj=element.item(i).getAttribute('cId1');
				if(obj==val){
					element.item(i).className="pCell errors"
				}
		}
	}
	return true;
}
}
function highlightCorrect(val){
if(document.getElementById('puzzleTable').getElementsByTagName('td')){
	var element=document.getElementById('puzzleTable').getElementsByTagName('td');
	var n=element.length;
	for(var i=0; i<n; i++){
		if(hnt[val][1]=="Across"){
		var obj=element.item(i).getAttribute('cId');
				if(obj==val){
					element.item(i).className="pCell correct"
				}
		}
		else{
				var obj=element.item(i).getAttribute('cId1');
				if(obj==val){
					element.item(i).className="pCell correct"
				}
		}
	}
	return true;
}
}
function submitDetails(){
	if(correctAns==true){	
var Email2=""
var Email5="</table>"
var errors=0;
var correct=0;
var counter=0;
	  for(var e in ansa){
		  counter++;
		  var a=ansa[e].toUpperCase();
		  var b=word[e].toUpperCase();
		  if(a==b){
			 	correct+=1;
				Email2+="<tr> <td style='border-bottom:solid 1px #ccc;'>"+e+"</td><td style='border-bottom:solid 1px #ccc; border-left:solid 1px #ccc'>"+hnt[e][0]+"</td><td style='border-bottom:solid 1px #ccc; border-left:solid 1px #ccc'>"+word[e]+"</td> <td style='border-bottom:solid 1px #ccc; border-left:solid 1px #ccc'>"+ansa[e]+"</td> <td style='color:#009933; border-bottom:solid 1px #ccc; border-left:solid 1px #ccc'>Correct</td> </tr>"
				 	
			  }
			  else{
			  	errors+=1;
				Email2+="<tr> <td style='border-bottom:solid 1px #ccc;'>"+e+"</td><td style='border-bottom:solid 1px #ccc; border-left:solid 1px #ccc'>"+hnt[e][0]+"</td><td style='border-bottom:solid 1px #ccc; border-left:solid 1px #ccc'>"+word[e]+"</td> <td style='border-bottom:solid 1px #ccc; border-left:solid 1px #ccc'>"+ansa[e]+"</td> <td style='color:#f00; border-bottom:solid 1px #ccc; border-left:solid 1px #ccc'>wrong</td> </tr>"
			  }
	}
	var Email3="<tr><td height='5' colspan='5' bgcolor='#CCCCCC'></td></tr>"
    var Email4="<tr><td colspan='3' align='right'>Number of Questions Answered out of 22 : </td><td colspan='2'>"+counter+"</td></tr>"
	Email4+="<tr><td colspan='3' align='right'>Correct Answers : </td><td colspan='2'>"+correct+"</td></tr>";
    Email4+="<tr><td colspan='3' align='right'>Wrong Answers : </td><td colspan='2'>"+errors+"</td></tr>"
    Email4+="<tr><td colspan='3' align='right'>Not Attempted : </td><td colspan='2'>"+(22-counter)+"</td></tr>"
	var Email6="<tr><td colspan='5' align='center' style='border-top:1px solid #ccc;'><font face='Arial' color ='green' size='2.5'>Thank you for your participation!</font></td></tr>"
	Email6+="<tr><td colspan='5' align='left'>Best Regards, <br><br><a href='http://www.SCRUMstudy.com' target='_balnk'>www.scrumstudy.com</a><br>Email: marketing@scrumstudy.com</td></tr>"	
	email=Email2+Email3+Email4+Email6+Email5;
		win=window.open('', 'details', "width=800, height=400, location=no, menubar=no, status=no, titlebar=no")
		document.getElementById('submitf').style.display="block"
		document.forms['userInfo']['emailtext'].value=email;
		var innerh=document.getElementById('submitf').innerHTML;
		document.getElementById('submitf').style.display="none"
		win.document.write(innerh);
		return true;
}
else{
	alert("Please Enter atleast 5 questions to Continue")
	}
}
var correctAns=false
function updateReview(){
var errors=0;
var correct=0;
var counter=0;
	  for(var e in ansa){
		  counter++;
		  var a=ansa[e].toUpperCase();
		  var b=word[e].toUpperCase();
		  if(a==b){
			 	correct+=1;
				highlightCorrect(e)
			  }
			  else{
			  	errors+=1;
				highlightErrors(e);
			  }
	}
var output="Number of Questions attempted out of 22 : "+counter+" <br/>Correct Answers : "+correct+" <br/>Wrong Answers : "+errors+" <br/>Not Attempted : "+(22-counter);
document.getElementById('reviewM').innerHTML=output;
if(correct>=5){
	document.getElementById('submitButton').removeAttribute('disabled');
	correctAns=true
}
else{
	document.getElementById('submitButton').setAttribute('disabled',"disabled")
	correctAns=false
	}
}

function textCounter()
{
  textareaid = document.getElementById('itext');
  if (textareaid.value.length > hnt[selected][2])
    textareaid.value = textareaid.value.substring(0, hnt[selected][2]);
  else
    document.getElementById('error').innerHTML = '('+(hnt[selected][2]-textareaid.value.length)+' characters remaining..)';
	if(hnt[selected][2]==textareaid.value.length){
		 document.getElementById('error').innerHTML="Please click Okay Button"
		}
}


var reCalcThis=new Array();
function reCalcAnswer(param){
	if(param!="done"){
		reCalcThis.push(param);
	}
	else{
		for(var i=0; i<reCalcThis.length; i++){
			var currectSelected=reCalcThis[i];
			if(ansa[currectSelected]){
				var tempText=""
				var element=document.getElementById('puzzleTable').getElementsByTagName('td');
				var n=element.length;
				for(var k=0; k<n; k++){
				if(hnt[currectSelected][1]=="Across"){
				var obj=element.item(k).getAttribute('cId');
						if(obj==currectSelected){
							tempText+=element.item(k).innerHTML
							}
						}
						else{
							var obj=element.item(k).getAttribute('cId1');
							if(obj==currectSelected){
							tempText+=element.item(k).innerHTML
						}	
						}
					}
				ansa[currectSelected]=tempText;
				tempText="";
				}
			}
		reCalcThis=null;
		reCalcThis=new Array();
		updateReview()

	}
}
// JavaScript Document