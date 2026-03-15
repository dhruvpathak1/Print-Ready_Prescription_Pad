var id = 1;
var items = [];

function addItem(inputId) {
    var x = document.getElementById(inputId).value;
    if (x != "") {
        id++;
        var y = document.getElementById("meds");
        var p = document.createElement("p");
        p.setAttribute("id", id);
        p.innerHTML = x;
        y.appendChild(p);
        items.push(x);
    }
}

function deleteoption() {
    if (id > 0) {
        var del = document.getElementById(id);
        if (del) {
            del.remove();
            id--;
            items.pop();
        }
    } else {
        id = 1;
    }
}

function setGender(gender) {
    var x = document.getElementById("gen");
    x.innerHTML = gender;
}

function prepareprint() {
    var len = items.length;
    if (len === 0) return;
    var space = parseInt(100 / len);
    var height = space.toString() + "%";

    for (var i = 0; i < len; i++) {
        var y = document.getElementById("printing");
        var p = document.createElement("p");
        p.innerHTML = items[i];
        p.style.height = height;
        y.appendChild(p);
    }
    var myobj = document.getElementById("meds");
    if (myobj) {
        myobj.remove();
    }
    window.print();
    window.location.reload();
}
