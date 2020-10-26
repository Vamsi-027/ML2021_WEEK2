
function talk(){
    var user=document.getElementById("User_box").value;
    var node1 = document.createElement("p");
    node1.classList.add("user_msg")
    var textnode1 = document.createTextNode(user);
    document.getElementById("User_box").value="";
    node1.appendChild(textnode1);
    document.getElementsByClassName("Chat")[0].appendChild(node1);
    evall(user)
    scrollwin();
}

function evall(user){
  var c = eval(user)
  if(c.toString().length!=0){
    var node = document.createElement("p");
    node.classList.add("bot_msg");
    var textnode = document.createTextNode(c);
    node.appendChild(textnode);
    document.getElementsByClassName("Chat")[0].appendChild(node);

  }
  else{
    var node = document.createElement("p");
    node.classList.add("bot_msg");
    var textnode = document.createTextNode("Enter a valid Expression");
    node.appendChild(textnode);
    document.getElementsByClassName("Chat")[0].appendChild(node);
  }
  
}




function scrollwin() {
  document.getElementsByClassName("Chat")[0].scrollBy(0, 100);
}