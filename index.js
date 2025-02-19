var player1=Math.floor(Math.random() * 6)+1;
var player2=Math.floor(Math.random() * 6)+1;
var source="dice"+player1+".png";
var h="images/"+source;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", h);
var source1="dice"+player2+".png";
var h1="images/"+source1;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", h1);
if(player1<player2){
    document.querySelector("h1").innerHTML="🚩Player2Win";
}
else if(player1>player2){
    document.querySelector("h1").innerHTML="🚩Player1Win";
}
else{
    document.querySelector("h1").innerHTML="Draw match";
}
