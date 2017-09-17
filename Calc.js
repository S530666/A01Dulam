function sum() {
    var txtFirstNumberValue = document.getElementById('Hrent').value;
    var txtSecondNumberValue = document.getElementById('groc').value;
    var txtThirdNumberValue = document.getElementById('internet').value;
    var txtFourthNumberValue = document.getElementById('TV').value;
    var txtFifthNumberValue = document.getElementById('power').value;
    var txtSixthNumberValue = document.getElementById('misc').value;
    if(isNaN(txtFirstNumberValue)||isNaN(txtSecondNumberValue)||isNaN(txtThirdNumberValue)||isNaN(txtFourthNumberValue)||isNaN(txtFifthNumberValue)||isNaN(txtSixthNumberValue))
        {
            alert("please enter any number");
        }
    var result = parseInt(txtFirstNumberValue) + parseInt(txtSecondNumberValue) +parseInt(txtThirdNumberValue) + parseInt(txtFourthNumberValue)+ parseInt(txtFifthNumberValue)+ parseInt(txtSixthNumberValue) ;
    if (!isNaN(result)) {
       document.getElementById('result').value = result;
    }
    else
        {
            alert("please enter any number");
        }
}