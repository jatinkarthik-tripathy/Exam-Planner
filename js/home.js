flag = false;
var index;
var block = document.getElementsByClassName("block");
times = {
    0: "12 am", 1: "2 am", 2: "4 am", 3: "6 am", 4: "8 am", 5: "10 am",
    6: "12 pm", 7: "2 pm", 8: "4 pm", 9: "6 pm", 10: "8 pm", 11: "10 pm"
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
    var httpRequest = new XMLHttpRequest;
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                rsp = httpRequest.responseText;
                objs = JSON.parse(rsp);
                if (objs == ""){
                    var empty_p = document.createElement('p');
                    empty_p.setAttribute('id', "empty_p");
                    empty_p.innerHTML = "You have no tasks planned";
                    info.appendChild(empty_p);
                } else {
                    for (var obj in objs) {
                        var new_div = document.createElement('div');
                        new_div.setAttribute('id', "det");
                        for (var i in objs[obj]) {
                            var newElement = document.createElement('p');
                            newElement.innerHTML = objs[obj][i];
                            new_div.appendChild(newElement);
                        }
                        info.appendChild(new_div);
                    }
                }
            }
        }
    };
    httpRequest.open('GET', "../php/details.php");
    httpRequest.send();

}

for (var i = 0; i < block.length; i++) {
    block[i].style.backgroundColor = '#222';
    block[i].addEventListener("click", bindClick(i));
}
mod_obj = null;
function bindClick(i) {
    return function () {
        // if (flag == false) {
        var hexString = document.createElement('div')
        hexString.style.backgroundColor = `#222`
        if (block[i].style.backgroundColor == hexString.style.backgroundColor) {
            block[i].style.backgroundColor = 'turquoise';
            var entry = document.getElementById("add_entry");
            entry.style.display = "grid";
            flag = true;
            index = $(this).index();
            if (index >= 14 && index <= 25) {
                console.log(index);
                document.getElementById("day_p").innerHTML = "Day 1";
                document.getElementById("time_p").innerHTML = times[(index - 14)];
                idx = index - 14;
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
                document.getElementById("time_p").innerHTML = times[(index - 131)];
                idx = index - 23;
            }
        } else {
            // block[i].style.backgroundColor = '#222';
            var entry = document.getElementById("modify_entry");
            entry.style.display = "grid";

            index = $(this).index();
            if (index >= 14 && index <= 25) {
                document.getElementById("mod_day_p").innerHTML = "Day 1";
                document.getElementById("mod_time_p").innerHTML = times[(index - 14)];
                idx = index - 14;
            } else if (index >= 27 && index <= 38) {
                document.getElementById("mod_day_p").innerHTML = "Day 2";
                document.getElementById("mod_time_p").innerHTML = times[(index - 27)];
                idx = index - 15;
            } else if (index >= 40 && index <= 51) {
                document.getElementById("mod_day_p").innerHTML = "Day 3";
                document.getElementById("mod_time_p").innerHTML = times[(index - 40)];
                idx = index - 16;
            } else if (index >= 53 && index <= 64) {
                document.getElementById("mod_day_p").innerHTML = "Day 4";
                document.getElementById("mod_time_p").innerHTML = times[(index - 53)];
                idx = index - 17;
            } else if (index >= 66 && index <= 77) {
                document.getElementById("mod_day_p").innerHTML = "Day 5";
                document.getElementById("mod_time_p").innerHTML = times[(index - 66)];
                idx = index - 18;
            } else if (index >= 79 && index <= 90) {
                document.getElementById("mod_day_p").innerHTML = "Day 6";
                document.getElementById("mod_time_p").innerHTML = times[(index - 79)];
                idx = index - 19;
            } else if (index >= 92 && index <= 103) {
                document.getElementById("mod_day_p").innerHTML = "Day 7";
                document.getElementById("mod_time_p").innerHTML = times[(index - 92)];
                idx = index - 20;
            } else if (index >= 105 && index <= 116) {
                document.getElementById("mod_day_p").innerHTML = "Day 8";
                document.getElementById("mod_time_p").innerHTML = times[(index - 105)];
                idx = index - 21;
            } else if (index >= 118 && index <= 129) {
                document.getElementById("mod_day_p").innerHTML = "Day 9";
                document.getElementById("mod_time_p").innerHTML = times[(index - 118)];
                idx = index - 22;
            } else if (index >= 131 && index <= 142) {
                document.getElementById("mod_day_p").innerHTML = "Day 10";
                document.getElementById("mod_time_p").innerHTML = times[(index - 131)];
                idx = index - 23;
            }
            idx = ("000" + idx).slice(-3)
            url = "../php/get_data.php" + "?idx=" + idx;
            console.log(url);
            var httpRequest = new XMLHttpRequest;
            httpRequest.onreadystatechange = function () {
                if (httpRequest.readyState === 4) { // Request is done
                    if (httpRequest.status === 200) { // successfully
                        rsp = httpRequest.responseText;
                        mod_obj = JSON.parse(rsp);
                        console.log(mod_obj);
                        document.getElementById("mod_sub_name").value = mod_obj[1];
                        // document.getElementById("mod_day_p").innerHTML = mod_obj[2];
                        // document.getElementById("mod_time_p").innerHTML = mod_obj[3];
                        document.getElementById("mod_notes").value = mod_obj[4];
                    }
                }
            };
            httpRequest.open('GET', url);
            httpRequest.send();
        }
        // }
    };
}


var add_btn = document.getElementById("add_button");
add_btn.addEventListener("click", function () {
    myObj = {
        idx: ("000" + idx).slice(-3),
        subject: document.getElementById("sub_name").value,
        day: document.getElementById("day_p").innerHTML,
        time: document.getElementById("time_p").innerHTML,
        notes: document.getElementById("notes").value
    }
    url = "../php/add_data.php" + "?idx=" + myObj['idx'] + "&sub=" + myObj['subject'] + "&day=" + myObj['day'] + "&time=" + myObj['time'] + "&notes=" + myObj['notes'];
    var httpRequest = new XMLHttpRequest;
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) { // Request is done
            if (httpRequest.status === 200) { // successfully
            }
        }
    };
    httpRequest.open('GET', url);
    httpRequest.send();
    location.reload();
});

var cancel_btn = document.getElementById("cancel_button");
cancel_btn.addEventListener("click", function () {
    flag = false;
    location.reload();
});

init_table();

function init_table() {
    var httpRequest = new XMLHttpRequest;
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) { // Request is done
            if (httpRequest.status === 200) { // successfully
                rsp = httpRequest.responseText; // We're calling our method
                obj = JSON.parse(rsp);
                for (var i in obj) {
                    block[parseInt(obj[i])].style.backgroundColor = 'turquoise';
                }


            }
        }
    };
    httpRequest.open('GET', "../php/init.php");
    httpRequest.send();
}


var del_btn = document.getElementById("del_button");
del_btn.addEventListener("click", function () {
    var httpRequest = new XMLHttpRequest;
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) { // Request is done
            if (httpRequest.status === 200) {
            }
        }
    };
    console.log(mod_obj);
    url = "../php/del_data.php?idx=" + mod_obj[0];
    httpRequest.open('GET', url);
    httpRequest.send();

    location.reload();
});

var mod_btn = document.getElementById("mod_button");
mod_btn.addEventListener("click", function () {
    myObj = {
        idx: ("000" + idx).slice(-3),
        subject: document.getElementById("mod_sub_name").value,
        day: document.getElementById("mod_day_p").innerHTML,
        time: document.getElementById("mod_time_p").innerHTML,
        notes: document.getElementById("mod_notes").value
    }

    var httpRequest = new XMLHttpRequest;
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) { // Request is done
            if (httpRequest.status === 200) {
            }
        }
    };
    console.log(myObj);
    url = "../php/modify_data.php" + "?idx=" + myObj['idx'] + "&sub=" + myObj['subject'] + "&day=" + myObj['day'] + "&time=" + myObj['time'] + "&notes=" + myObj['notes'];
    console.log(url)
    httpRequest.open('GET', url);
    httpRequest.send();

    location.reload();
});