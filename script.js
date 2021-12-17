function bt() {
    input = document.getElementsByClassName("input")[1].value
    input2 = document.getElementsByClassName("input")[0].value
    if (input.length >= 6 && input2.length >= 4) {
        document.getElementById('enter').style = 'background-color: darkcyan;'
    }  else {
        document.getElementById('enter').style = 'background-color: rgb(86, 167, 167);'   
    }
}