

//
//        var subcategory = {
//            NORTHCENTRAL: ["BENUE STATE", "FCT", "KOGI STATE", "NIGER STATE", "PLATEAU"],
//            NORTHWEST: ["KADUNA STATE", "KANO STATE", "KATSINA STATE", "SOKOTO SATE", "ZAMFARA STATE"],
//            NORTHEAST: ["ADAMAWA SATE", "BAUCHI STATE", "BORNO STATE", "GOMBE STATE", "TARABA STATE", "YOBE STATE"],
//            SOUTHSOUTH: ["AKWAIBOM STATE", "BAYELSA STATE", "CROSSRIVER STATE", "DELTA STATE", "EDO STATE", "RIVER STATE"]
//        
//        }
        
        var subCategory = [
            {name: 'NORTHCENTRAL', subValues:[{state: "BENUE STATE", phone: 09018602439}, {state: "FCT", phone: 08099936312}, {state: "KOGI STATE", phone: 0704485619}, {state: "KWARA STATE", phone: 090620100001},{state: "Niger", phone:08038246018}, {state: "PLATEAU", phone: 07032864444}]},
            
            {name: 'NORTHWEST', subValues:[{state: "KADUNA STATE", phone: 08977}, {state: "FCT", phone: 089787}, {state: "KOGI STATE", phone: 08977}, {state: "NIGER STATE", phone: 08977}, {state: "PLATEAU", phone: 94889}]},
            
            {name: 'NORTHEAST', subValues:[{state: "ADAMAWA STATE", phone: 08977}, {state: "FCT", phone: 089787}, {state: "KOGI STATE", phone: 08977}, {state: "NIGER STATE", phone: 08977}, {state: "PLATEAU", phone: 94889}]},
            
            {name: 'SOUTHSOUTH', subValues:[{state: "AKWA-IBOM STATE", phone: 08977}, {state: "FCT", phone: 089787}, {state: "KOGI STATE", phone: 08977}, {state: "NIGER STATE", phone: 08977}, {state: "PLATEAU", phone: 94889}]}
        ]

        function makeSubmenu(value) {
            if (value.length == 0) document.getElementById("categorySelect").innerHTML = "<option></option>";
            else {
                var citiesOptions = "";
                for (categoryId in subcategory[value]) {
                    citiesOptions += "<option>" + subcategory[value][categoryId] + "</option>";
                }
                document.getElementById("categorySelect").innerHTML = citiesOptions;
            }
        }

        function displaySelected() {
            var country = document.getElementById("category").value;
            var city = document.getElementById("categorySelect").value;
            alert(country + "\n" + city);
        }

        function resetSelection() {
            document.getElementById("category").selectedIndex = 0;
            document.getElementById("categorySelect").selectedIndex = 0;
        }
    











