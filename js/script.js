var input = document.createElement("input");
input.setAttribute("id", "numb");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Phone number");
input.setAttribute("maxlength", "23");
document.body.appendChild(input);
//html eldeim
document.getElementById('numb').addEventListener('focus', function () {
    this.value = '+994 '
});
document.getElementById('numb').addEventListener('keydown', function (event) {
    var length = this.value.length;
    if (length == 4) {
        this.value = ' '
    }
    else if (length == 5) {
        this.value = this.value + '('
    }
    else if (length == 8) {
        this.value = this.value + ') '
    }
    else if (length == 13) {
        this.value = this.value + ' - '
    }
    else if (length == 18) {
        this.value = this.value + ' - '
    }
    if (event.which < 58 && event.which > 47 || event.which < 106 && event.which > 95 ||
        event.which == 8 || event.which == 46 || event.which == 37 || event.which == 39) {
        return true;
    }
    else {
        event.preventDefault();
        return false;
    }
});