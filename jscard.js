var root=document.getElementById("main");
root.classList('main');
var root1=document.getElementById("card");
root.appendChild(root1);

var root2=document.getElementById("data");
root.appendChild(root2);

var div1=document.getElementById'card1');
div1.classList.add("card1");
root1.appendChild(div1);

var image=document.createElement('img');
image.src="profile.png";
image.alt="profile picture";
image.classList.add('img');
div1.appendChild(image);

var heading=document.getElementById('h2');
heading.textContent="Anusha";
div1.appendChild(h2);

var para1=document.createElement('p');
para1.textContent="Student";
para1.classList.add('card2');
div1.appendChild(para1);


var para2=document.createElement('p');
para2.textContent="9347950236";
para2.classList.add('card2');
div1.appendChild(para2);

var para3=document.createElement('p');
para3.textContent="anusha@gmail.com";
para3.classList.add('card2');
div1.appendChild(para3);
