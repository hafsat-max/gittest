const name = document.getElementById('name');
const courses = document.getElementById('courses');
const score = document.getElementById('score');
const select = document.getElementById('select');
const gpaObj = [];
const result = document.getElementById('result');
const display = document.getElementById('display');
const show = document.getElementById('show');
const resultArray = [];

function storeName() {
    if (name.value) {
        gpaObj.push({ name: name.value, courses: [] });
        listNames();

        name.value = '';
    } else {
        alert('enter your name');
    }
}

function listNames() {
    const dropdown = gpaObj.map((item) => {
        return "<option value='" + item.name + "'>" + item.name + '</option>';
    });
    select.innerHTML = '<option value=""> select names</option>' + dropdown;
}

function getStuffs() {
    const index = gpaObj.findIndex((item) => {
        return item.name === select.value;
    });
    const courseIndex = gpaObj[index].courses.findIndex((item) => {
        return item.course === courses.value;
    });
    if (courseIndex === -1) {
        gpaObj[index].courses.push({ course: courses.value, score: score.value });
        courses.value = '';
    } else {
        alert('you have entered the score for this subject');
    }
}

function getGpa() {
    const resultArray = [];
    const index = gpaObj.findIndex((item) => {
        return item.name === select.value;
    });
    gpaObj[index].courses.forEach((item) => {
        if (item.score < 50) {
            resultArray.push(2);
        } else if (item.score < 60) {
            resultArray.push(3);
        } else if (item.score < 70) {
            resultArray.push(4);
        } else {
            resultArray.push(5);
        }
    });
    const theResult = resultArray.reduce(function(a, b) {
        return a + b;
    });
    result.innerHTML = theResult / resultArray.length;
    displayResult();
}

function displayResult() {
    let i;
    let theDetails = ' ';
    const theResult = gpaObj.filter((item) => {
        return item.name === select.value;
    });
    for (i = 0; i < theResult[0].courses.length; i++) {
        theDetails += theResult[0].courses[i].course + ' ' + theResult[0].courses[i].score + '\r\n';
    }
    display.innerHTML = theDetails;
}

function showDetails() {
    let i;
    let lastDetails = '';
    const finalArray = [];
    const displays = finalArray.push(name.value + ' ' + resultArray[i]);
    for (i = 0; i < displays.length; i++) {
        lastDetails += displays[i];
    }
    show.innerHTML = lastDetails;
    console.log(displays);
}