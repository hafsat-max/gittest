
 const name  = document.getElementById('first-name');
const selection = document.getElementById('selection');
const scores = document.getElementById('score');
const reports = document.getElementById('report');
const average = document.getElementById('average');
const highest = document.getElementById('highest');
const lowest = document.getElementById('lowest');



const userArray = [];
const userScore = [];
const addUser = () => {
    if(name.value){
        userArray.push(name.value);
        listUsers();
        
         name.value = "";
      
    } else {
        alert('input name')
    }
    
}
function listUsers(){ 
    const dropdown = userArray.map(item => {
        return "<option value='"+item+"'>"+item+"</option>";
    })
    selection.innerHTML =  '<option value="">Select names...</option>' + dropdown;
    
}
function addScore(){
   if(scores.value){
       userScore.push(parseInt(scores.value));
       getreportSheet();
       score.value = "";
    }
    else {alert('input a score')}
}
let remark = [];

function displayColor(){
    if (score.value < 50){
        remark.push('<span style="color:red">failed</span>')
    }
    else {remark.push('<span style= "color: green">passed</span>')}
}

  let reportSheet = [];
function getreportSheet(){
    let i;
    let bothDetails = '';
    displayColor();
    addUpScores();
    getHighest();
   for(i=0; i< userArray.length; i++){
        bothDetails += userArray[i] + " " + userScore[i]+ " "+ remark[i] + "<br/>";
    }
    report.innerHTML = bothDetails;
}


function addUpScores(){
  const sumOfAllScores = userScore.reduce(function(a, b){
        return a + b;
    
  })
    average.innerHTML = "The average score is" + sumOfAllScores / userScore.length;                                     
}

function getHighest (){
    const sortedArray = userScore.sort()
        highest.innerHTML ="The highest score is " + sortedArray[sortedArray.length - 1];
        lowest.innerHTML = "The lowest score is" + sortedArray[0];
}



