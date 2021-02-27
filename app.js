var x = true ;
function tic(str){
    if(x === true && document.getElementById(str).innerHTML ===
    "" ){
        document.getElementById(str).innerHTML= "X" ;
        x = false ;

    }
    else if(x === false && document.getElementById(str).innerHTML=== ""){
        document.getElementById(str).innerHTML = "O" ;
         x = true ;
    }
}

function check (){
    var winner = [
        [document.getElementById("s1").innerHTML,document.getElementById("s2").innerHTML,document.getElementById("s3").innerHTML],
        [document.getElementById("s4").innerHTML,document.getElementById("s5").innerHTML,document.getElementById("s6").innerHTML],
        [document.getElementById("s7").innerHTML,document.getElementById("s8").innerHTML,document.getElementById("s9").innerHTML],
    ]
    for(var i = 0 ; i<winner.length ; i++){
        if(winner[i][0] === "X" && winner[i][1] ==="X" && winner[i][2]==="X"){
         alert( "X Win ");
        }else if(winner[i][0] === "O" && winner[i][1] ==="O" && winner[i][2]==="O"){
            alert("O Win")
        }
    }
    for(var j = 0 ; j < winner.length ; j++){
        if(winner[0][j] === "X" && winner[1][j] ==="X" && winner[2][j]==="X"){
            alert( "X Win ");
        }else if(winner[0][j] === "O" && winner[1][j] ==="O" && winner[2][j]==="O"){
            alert("O Win")
    }else if(winner[0][0] === "X" && winner[1][1] ==="X" && winner[2][2]==="X"){
        alert( "X Win ");
    }else if(winner[0][2] === "X" && winner[1][1] ==="X" && winner[2][0]==="X"){
        alert( "X Win ");
    }
}
}
const refreshButton = document.querySelector('.button');

const refreshPage = () => {
  location.reload();
}