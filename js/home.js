flag = false;
var index;
var block = document.getElementsByClassName("block");
times = {
    0:"12 am", 1:"2 am", 2:"4 am", 3:"6 am", 4:"8 am", 5:"10 am",
    6:"12 pm", 7:"2 pm", 8:"4 pm", 9:"6 pm", 10:"8 pm", 11:"10 pm"    
}
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);

function showHome() {
    var home = document.getElementById("home");
    home.style.display = "flex";
    
    var info = document.getElementById("info");
    info.style.display = "none";
    
}
function showInfo() {
    var info = document.getElementById("info");
    info.style.display = "flex";

    var home = document.getElementById("home");
    home.style.display = "none";
}

for (var i = 0; i < block.length; i++) {
    block[i].style.backgroundColor = '#222';
    block[i].addEventListener("click", bindClick(i));
}

function bindClick(i) {
    return function () {
        if(flag == false){
            var hexString = document.createElement('div')
            hexString.style.backgroundColor = `#222`
            if (block[i].style.backgroundColor == hexString.style.backgroundColor) {
                block[i].style.backgroundColor = 'turquoise';
                var entry = document.getElementById("add_entry");
                entry.style.display = "grid";
                flag=true;
                index = $(this).index();
                if(index>=14 && index<=25){
                    document.getElementById("day_p").innerHTML = "Day 1";
                    document.getElementById("time_p").innerHTML = times[(index - 14)];
                    idx = index-14;
                } else if (index >= 27 && index <= 38) {
                    document.getElementById("day_p").innerHTML = "Day 2";
                    document.getElementById("time_p").innerHTML = times[(index - 27)];
                    idx = index - 15;
                } else if (index >= 40 && index <= 51) {
                    document.getElementById("day_p").innerHTML = "Day 3";
                    document.getElementById("time_p").innerHTML = times[(index - 40)];
                    idx = index - 16;
                } else if (index >= 53 && index <= 64) {
                    document.getElementById("day_p").innerHTML = "Day 4";
                    document.getElementById("time_p").innerHTML = times[(index - 53)];
                    idx = index - 17;
                } else if (index >= 66 && index <= 77) {
                    document.getElementById("day_p").innerHTML = "Day 5";
                    document.getElementById("time_p").innerHTML = times[(index - 66)];
                    idx = index - 18;
                } else if (index >= 79 && index <= 90) {
                    document.getElementById("day_p").innerHTML = "Day 6";
                    document.getElementById("time_p").innerHTML = times[(index - 79)];
                    idx = index - 19;
                } else if (index >= 92 && index <= 103) {
                    document.getElementById("day_p").innerHTML = "Day 7";
                    document.getElementById("time_p").innerHTML = times[(index - 92)];
                    idx = index - 20;
                } else if (index >= 105 && index <= 116) {
                    document.getElementById("day_p").innerHTML = "Day 8";
                    document.getElementById("time_p").innerHTML = times[(index - 105)];
                    idx = index - 21;
                } else if (index >= 118 && index <= 129) {
                    document.getElementById("day_p").innerHTML = "Day 9";
                    document.getElementById("time_p").innerHTML = times[(index - 118)];
                    idx = index - 22;
                } else if (index >= 131 && index <= 142) {
                    document.getElementById("day_p").innerHTML = "Day 10";
                    docment.getElementById("time_p").innerHTML = times[(index - 131)];
                    idx = index - 23;
                }
            } else {
                block[i].style.backgroundColor = '#222';
            }
        }
    };
}

var add_btn = document.getElementById("add_button");
add_btn.addEventListener("click", function(){
    var httpc = new XMLHttpRequest(); // simplified for clarity
    var url = "add_data.php";
    httpc.open("POST", url, true); // sending as POST

    myObj = { 
        idx: idx,
        subject: document.getElementById("sub_name").value, 
        day: document.getElementById("day_p").innerHTML,
        time: document.getElementById("time_p").innerHTML,
        notes: document.getElementById("notes").value
    }
    params = JSON.stringify(myObj);

    httpc.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    httpc.setRequestHeader("Content-Length", params.length); // POST request MUST have a Content-Length header (as per HTTP/1.1)

    httpc.onreadystatechange = function () { //Call a function when the state changes.
        if (httpc.readyState == 4 && httpc.status == 200) { // complete and no errors
            alert(httpc.responseText); // some processing here, or whatever you want to do with the response
        }
    };
    httpc.send(params);
})

var cancel_btn = document.getElementById("cancel_button");
cancel_btn.addEventListener("click", function(){
    flag = false;
    location.reload();
})