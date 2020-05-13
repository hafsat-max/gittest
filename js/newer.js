const today = new Date()
let currentMonth = today.getMonth()
let currentYear = today.getFullYear()

let months = [
             "jan",
              "feb",
              "mar",
              "apr",
              "may",
              "jun",
              "jul",
              "aug",
              "sep",
              "oct",
              "nov", 
              "dec"
];

let monthAndYear = document.getElementById('month-and-year');

showCalendar(currentMonth, currentYear, firstDay = 0);

function showCalendar(month, year, firstDay, callback){
    let firstDate = new Date(year, month).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    
    let tbl = document.getElementById("calendar-body");
    
    tbl.innerHTML ="";
    
    
    monthAndYear.innerHTML = months[month].toUpperCase() + " " + year;
    
    let date = 1;
    
    for(let i = 0; i < 6; i++){
                let row = document.createElement('tr')
                
        for(let j = 0; j < 7; j++){ 
            let cell = document.createElement('td');
        if (i===0 && j < firstDay){
                let cellText = document.createTextNode("")
                cell.appendChild(cellText)
            row.appendChild(cellText)
            } else if(date > daysInMonth){
                
                break;
            }   else {
                let cellText = document.createElement('p') 
                cell.appendChild(cellText)
                cellText.innerText = '' + date
                row.appendChild(cell);
            }
            
            date++
        }
        
            tbl.appendChild(row)
    
    }
}

const next = () => {
    showCalendar(currentMonth+1, currentYear, 0)
}
    
const previous = () => {
    alert('you have clicked previous')
}