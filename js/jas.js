

//
//        var subcategory = {
//            NORTHCENTRAL: ["BENUE STATE", "FCT", "KOGI STATE", "NIGER STATE", "PLATEAU"],
//            NORTHWEST: ["KADUNA STATE", "KANO STATE", "KATSINA STATE", "SOKOTO SATE", "ZAMFARA STATE"],
//            NORTHEAST: ["ADAMAWA SATE", "BAUCHI STATE", "BORNO STATE", "GOMBE STATE", "TARABA STATE", "YOBE STATE"],
//            SOUTHSOUTH: ["AKWAIBOM STATE", "BAYELSA STATE", "CROSSRIVER STATE", "DELTA STATE", "EDO STATE", "RIVER STATE"]
//        
//        }
        
        const areas = [
            {name: 'NORTH-CENTRAL', subValues:[{state: "BENUE STATE", phone: 09018602439}, {state: "FCT", phone: 08099936312}, {state: "KOGI STATE", phone: 0704485619}, {state: "KWARA STATE", phone: 090620100001},{state: "NIGER STATE", phone: 08038246018}, {state: "PLATEAU STATE", phone: 07032864444}]},
            
            {name: 'NORTH-WEST', subValues:[{state: "KADUNA STATE", phone: 08035871662}, {state: "KANO STATE", phone: 08039704476}, {state: "KATSINA STATE", phone: 09035037114}, {state: "SOKOTO STATE", phone: 08032311116}, {state: "ZAMFARA STATE", phone:08035626731 }]},
            
            {name: 'NORTH-EAST', subValues:[{state: "ADAMAWA STATE", phone:08031230359}, {state: "BAUCHI STATE", phone: 08032717887}, {state: "BORNO STATE", phone: 08088159881}, {state: "GOMBE STATE", phone: 08103371257}, {state: "TARABA STATE", phone: 0803250165},{state:"YOBE STATE", phone: 08131834764} ]},
            
            {name: 'SOUTH-SOUTH', subValues:[{state: "AKWA-IBOM STATE", phone: 09045575515}, {state: "BAYELSA STATE", phone: 08039216821}, {state: "CROSS-RIVER STATE", phone: 09036281412}, {state: "DELTA STATE", phone: 08033521961}, {state: "EDO STATE", phone: 08084096723}, {state:  "RIVER STATE", phone:08056109538 } ]},

            {name: 'SOUTH-EAST', subValues:[{state: "ABIA STATE", phone:07002242362 }, {state: "ANAMBRA STATE", phone:08030953771 }, {state: "ENUGU STATE", phone:08182555550 }, {state: "EBONYI STATE", phone:09020332489 }, {state: "IMO STATE", phone:08099555577 } ]},
             
            
            {name: 'SOUTH-WEST', subValues:[{state: "OGUN STATE", phone: 08188978392 }, {state: "ONDO STATE", phone:070012684319 }, {state: "OSUN STATE", phone:08035025692 }, {state: "OYO STATE", phone:08038210122 }, {state: "EKITI STATE", phone:09062970434 }, {state:  "LAGOS STATE", phone:08023169485} ]},
            
 
        ]
        
        const geoPoliticalZonesId = document.getElementById('geo-political-zones');


        const statesId = document.getElementById('states');


        const listOfZones = areas.map(item => {
            return `<option value='${item.name}'>${item.name}</option>`;
        })

        geoPoliticalZonesId.innerHTML = listOfZones;

        function getStates(nameOfZone) {
             const selectedArea = areas.filter(item => {
                return item.name === nameOfZone;
             });
            const categories = selectedArea[0].subValues.map(item => {
                return `<option value='${item.phone}'>${item.state}</option>`;
            })
            statesId.innerHTML=categories;
        }

    



//function doSomething(value) {
//    
//}
//
//const doSometing2 = (value) => {
//    
//}
//
//(value) => {
//    
//}
//
//function () {
//    
//}









