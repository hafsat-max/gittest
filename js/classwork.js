 
        const areas = [
            {name: 'NORTH-CENTRAL', subValues:[{state: "BENUE STATE", phone: 09018602439}, {state: "FCT", phone: 08099936312}, {state: "KOGI STATE", phone: 0704485619}, {state: "KWARA STATE", phone: 090620100001},{state: "NIGER STATE", phone: 08038246018}, {state: "PLATEAU STATE", phone: 07032864444}]},
            
            {name: 'NORTH-WEST', subValues:[{state: "KADUNA STATE", phone: 08035871662}, {state: "KANO STATE", phone: 08039704476}, {state: "KATSINA STATE", phone: 09035037114}, {state: "SOKOTO STATE", phone: 08032311116}, {state: "ZAMFARA STATE", phone:08035626731 }]},
            
            {name: 'NORTH-EAST', subValues:[{state: "ADAMAWA STATE", phone:08031230359}, {state: "BAUCHI STATE", phone: 08032717887}, {state: "BORNO STATE", phone: 08088159881}, {state: "GOMBE STATE", phone: 08103371257}, {state: "TARABA STATE", phone: 0803250165},{state:"YOBE STATE", phone: 08131834764} ]},
            
            {name: 'SOUTH-SOUTH', subValues:[{state: "AKWA-IBOM STATE", phone: 09045575515}, {state: "BAYELSA STATE", phone: 08039216821}, {state: "CROSS-RIVER STATE", phone: 09036281412}, {state: "DELTA STATE", phone: 08033521961}, {state: "EDO STATE", phone: 08084096723}, {state:  "RIVER STATE", phone:08056109538 } ]},

            {name: 'SOUTH-EAST', subValues:[{state: "ABIA STATE", phone:07002242362 }, {state: "ANAMBRA STATE", phone:08030953771 }, {state: "ENUGU STATE", phone:08182555550 }, {state: "EBONYI STATE", phone:09020332489 }, {state: "IMO STATE", phone:08099555577 } ]},
             
            
            {name: 'SOUTH-WEST', subValues:[{state: "OGUN STATE", phone: 08188978392 }, {state: "ONDO STATE", phone:070012684319 }, {state: "OSUN STATE", phone:08035025692 }, {state: "OYO STATE", phone:08038210122 }, {state: "EKITI STATE", phone:09062970434 }, {state:  "LAGOS STATE", phone:08023169485} ]},
            
            
        ]






const selectZones = document.getElementById('select-zone');
const selectStates = document.getElementById('select-state');
const  theInput = document.getElementById('the-input');
const displayButton = document.getElementById('display-button')


        const listOfZones = areas.map(item => {
            return `<option value='${item.name}'>${item.name}</option>`;
        })
        selectZones.innerHTML= '<option value="">Select a zone...</option>' + listOfZones;
            
            
        
function getStates(nameOfStates){
    const areaPicked = areas.filter(item => {
        return item.name === nameOfStates;
    });
    const categories = areaPicked[0].subValues.map(item =>{
        return `<option value ='${item.phone}'>${item.state}</option>`;
    })
       selectStates.innerHTML =  '<option value="">Select state...</option>' + categories;                    
 }                                                 
    

let selectedPhone = " ";

function setSelectedNumber(phone){
    selectedPhone = phone
}

function getNumbers(){

    theInput.value = selectedPhone;
}
;
              
           
              
              
              
              
              
              
              
              
              
              
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            