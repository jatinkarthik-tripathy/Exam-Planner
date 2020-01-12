var usr = null;
var httpRequest = new XMLHttpRequest;
httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4) { // Request is done
        if (httpRequest.status === 200) { // successfully
            usr = httpRequest.responseText;
            if (usr === "") {
                window.location.replace("../php/logout.php");
                console.log("null")
            } else {
                init_table();
            }
        }
    }
};
httpRequest.open('GET', "../php/get_user.php");
httpRequest.send();

var index;
var block = document.getElementsByClassName("block");
times = {
    0: "12 am", 1: "2 am", 2: "4 am", 3: "6 am", 4: "8 am", 5: "10 am",
    6: "12 pm", 7: "2 pm", 8: "4 pm", 9: "6 pm", 10: "8 pm", 11: "10 pm"
};
function logout() {
    window.location.replace("../php/logout.php");
};
function showHome() {
    var home = document.getElementById("home");
    home.style.display = "flex";

    var todo = document.getElementById("todo");
    todo.style.display = "none";

    var details = document.getElementById("details");
    details.style.display = "none";
    init_table()
};
function showToDo() {
    var todo = document.getElementById("todo");
    todo.style.display = "flex";

    var home = document.getElementById("home");
    home.style.display = "none";

    var details = document.getElementById("details");
    details.style.display = "none";

    var child = todo.lastElementChild;
    while (child) {
        todo.removeChild(child);
        child = todo.lastElementChild;
    }
    var httpRequest = new XMLHttpRequest;
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                rsp = httpRequest.responseText;
                objs = JSON.parse(rsp);
                if (objs == "") {
                    var empty_p = document.createElement('p');
                    empty_p.setAttribute('id', "empty_p");
                    empty_p.innerHTML = "You have no tasks planned";
                    todo.appendChild(empty_p);
                } else {
                    for (var obj in objs) {
                        var new_div = document.createElement('div');
                        new_div.setAttribute('id', "det");
                        for (var i in objs[obj]) {
                            var newElement = document.createElement('p');
                            newElement.innerHTML = objs[obj][i];
                            new_div.appendChild(newElement);
                        }
                        todo.appendChild(new_div);
                    }
                }
            }
        }
    };
    httpRequest.open('GET', "../php/details.php?usr=" + usr);
    httpRequest.send();
}
function showDetails() {
    var details = document.getElementById("details");
    details.style.display = "flex";

    var home = document.getElementById("home");
    home.style.display = "none";

    var todo = document.getElementById("todo");
    todo.style.display = "none";
    update_exam_list();
}
for (var i = 0; i < block.length; i++) {
    block[i].style.backgroundColor = '#222';
    block[i].addEventListener("click", bindClick(i));
}
mod_obj = null;
function bindClick(i) {
    return function () {
        // if (flag == false) {
        var hexString1 = document.createElement('div')
        hexString1.style.backgroundColor = `#222`
        var hexString2 = document.createElement('div')
        hexString2.style.backgroundColor = `turquoise`
        if (block[i].style.backgroundColor == hexString1.style.backgroundColor) {
            block[i].style.backgroundColor = 'turquoise';
            var entry = document.getElementById("add_entry");
            entry.style.display = "grid";
            flag = true;
            index = $(this).index();
            if (index >= 14 && index <= 25) {
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
        } else if (block[i].style.backgroundColor == hexString2.style.backgroundColor) {
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
            var httpRequest = new XMLHttpRequest;
            httpRequest.onreadystatechange = function () {
                if (httpRequest.readyState === 4) {
                    if (httpRequest.status === 200) {
                        rsp = httpRequest.responseText;
                        mod_obj = JSON.parse(rsp);
                        document.getElementById("mod_sub_name").value = mod_obj[1];
                        document.getElementById("mod_notes").value = mod_obj[4];
                    }
                }
            };
            httpRequest.open('GET', url);
            httpRequest.send();
        }
    };
}


var add_btn = document.getElementById("add_button");
add_btn.addEventListener("click", function () {
    myObj = {
        idx: ("000" + idx).slice(-3),
        subject: document.getElementById("sub_name").value,
        day: document.getElementById("day_p").innerHTML,
        time: document.getElementById("time_p").innerHTML,
        notes: document.getElementById("notes").value,
        usr: usr
    }
    url = "../php/add_data.php" + "?idx=" + myObj['idx'] + "&sub=" + myObj['subject'] + "&day=" + myObj['day'] + "&time=" + myObj['time'] + "&notes=" + myObj['notes'] + "&usr=" + myObj['usr'];
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


function init_table() {
    var httpRequest = new XMLHttpRequest;
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) { // Request is done
            if (httpRequest.status === 200) { // successfully
                rsp = httpRequest.responseText; // We're calling our method
                obj = JSON.parse(rsp);
                for (var i in obj[0]) {
                    block[parseInt(obj[0][i])].style.backgroundColor = 'turquoise';
                }
                for (var i in obj[1]) {
                    block[parseInt(obj[1][i])].style.backgroundColor = 'red';
                    block[parseInt(obj[1][i])].removeEventListener("click", bindClick(parseInt(obj[1][i])));
                    block[parseInt(obj[1][i])].addEventListener("click", function () {
                        alert("This is an Exam!!");
                    });
                }
            }
        }
    };
    httpRequest.open('GET', "../php/init.php?usr=" + usr);
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
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
            }
        }
    };
    url = "../php/modify_data.php" + "?idx=" + myObj['idx'] + "&sub=" + myObj['subject'] + "&day=" + myObj['day'] + "&time=" + myObj['time'] + "&notes=" + myObj['notes'];
    httpRequest.open('GET', url);
    httpRequest.send();

    location.reload();
});
var add_exam = document.getElementById("add_exam");
var exm_flg = false
add_exam.addEventListener("click", function () {
    var exam_form = document.getElementById("myModal");
    exm_flg = true;
    exam_form.style.display = "block";
});

var cncl_exam = document.getElementById("exam_cancel");
var exm_flg = false
cncl_exam.addEventListener("click", function () {
    var exam_form = document.getElementById("myModal");
    exm_flg = false;
    exam_form.style.display = "none";
});

function update_exam_list() {
    var exam_list = document.getElementById("exam_list");
    var child = exam_list.lastElementChild;
    while (child) {
        exam_list.removeChild(child);
        child = exam_list.lastElementChild;
    }
    var httpRequest = new XMLHttpRequest;
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                rsp = httpRequest.responseText;
                objs = JSON.parse(rsp);
                if (objs == "") {
                    var empty_p = document.createElement('p');
                    empty_p.setAttribute('id', "empty_p");
                    empty_p.innerHTML = "You have no upcoming exams";
                    exam_list.appendChild(empty_p);
                } else {
                    for (var obj in objs) {
                        var new_div = document.createElement('div');
                        new_div.setAttribute('id', "exam_det");
                        for (var i in objs[obj]) {
                            var newElement = document.createElement('p');
                            newElement.innerHTML = objs[obj][i];
                            new_div.appendChild(newElement);
                        }
                        exam_list.appendChild(new_div);
                    }
                }
            }
        }
    };
    httpRequest.open('GET', "../php/exam_details.php?usr=" + usr);
    httpRequest.send();


    if (exam_list.clientHeight < exam_list.scrollHeight) {
        exam_list.style.borderRight = "0px";
    } else {
        exam_list.style.borderRight = "3px solid #007F80";
    }
    var exam_form = document.getElementById("myModal");
    exm_flg = false;
    exam_form.style.display = "none";
}

var exam_list = document.getElementById("exam_list");
var exam_sub = document.getElementById("exam_sub");
exam_sub.addEventListener("click", function () {
    var name = document.getElementById("exam_name").value;
    var date = document.getElementById("exam_date").value;
    var time = document.getElementById("time_list").value;

    time_dict = { "8 am": 4, "10 am": 5, "12 pm": 6, "2 pm": 7, "4 pm": 8, "6 pm": 9 }
    if (date === "Day 1") {
        idx = time_dict[time] + 0;
    } else if (date === "Day 2") {
        idx = time_dict[time] + 12;
    } else if (date === "Day 3") {
        idx = time_dict[time] + 24;
    } else if (date === "Day 4") {
        idx = time_dict[time] + 36;
    } else if (date === "Day 5") {
        idx = time_dict[time] + 48;
    } else if (date === "Day 6") {
        idx = time_dict[time] + 60;
    } else if (date === "Day 7") {
        idx = time_dict[time] + 72;
    } else if (date === "Day 8") {
        idx = time_dict[time] + 84;
    } else if (date === "Day 9") {
        idx = time_dict[time] + 96;
    } else if (date === "Day 10") {
        idx = time_dict[time] + 108;
    }
    idx = ("000" + idx).slice(-3);
    var httpRequest = new XMLHttpRequest;
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
            }
        }
    };
    url = "../php/add_exam.php" + "?idx=" + idx + "&name=" + name + "&date=" + date + "&time=" + time + "&usr=" + usr;
    httpRequest.open('GET', url);
    httpRequest.send();

    update_exam_list();
});