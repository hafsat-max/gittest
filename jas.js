


        var subcategory = {
            ABIA: ["1", "2", "3"],
            ADAMAWA: ["4", "5", "6"],
            AKWAIBOM: ["Y", "DSS", "SS"],

            ANAMBRA: ["EKJ", "EKJ", "EKJ"],

            BAUCHI:["EKJ", "EKJ", "EKJ"],

            BAYELSA:["EKJ", "EKJ", "EKJ"],

            BENUE  : ["EKJ", "EKJ", "EKJ"],

            BORNO   : ["EKJ", "EKJ", "EKJ"],

            CROSSRIVER    : ["EKJ", "EKJ", "EKJ"],

            DELTA: ["EKJ", "EKJ", "EKJ"],

            EKITI: ["EKJ", "EKJ", "EKJ"],

            EDO: ["EKJ", "EKJ", "EKJ"]
                
            
            

        }

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
    



















/**
function myGreeting(greeting){
    var response = prompt("How was your night?");
    alert(greeting + " " + "mine" + " " + "was" + " " + response + " " + "too.");
}
myGreeting("happy for you,");
**////