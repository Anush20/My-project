var root = document.getElementById("main");
root.classList.add("main");


var div1=document.createElement("card");
div1.classList.add("card");
root.appendChild(div1);


var div2=document.createElement('div');
div2.classList.add("data");
root.appendChild(div2);

var image=document.createElement('img');
image.src="icon.jpg";
image.alt="profile picture";
image.classList.add('img');
div1.appendChild(image);

var heading=document.createElement('h2');
heading.textContent="Anusha";
div1.appendChild(heading);

var para1=document.createElement('p');
para1.textContent="student";

div1.appendChild(para1);


var para2=document.createElement('p');
para2.textContent="9347950236";

div1.appendChild(para2);

var para3=document.createElement('p');
para3.textContent="anusha@gmail.com";

div1.appendChild(para3);

var head=document.createElement('h1');
head.textContent="Career objective:";
div2.appendChild(head);

var para4=document.createElement('p');
para4.textContent="Harnessing my potential as an employee to keep myself as well as organization better than the best";
div2.appendChild(para4);

var head1=document.createElement('h1');
head1.textContent="Eductaional Details:";
div2.appendChild(head1);

var para5=document.createElement('p');
para5.textContent="Pursuing computer science and engineering B-Tech at Dhanekula Institute of Engineering and Technology with 86CGPA(upto 2-1),Completed Intermediate at Sri Chaitanya junior college with 97%.Completed 10th class at  Sun Shine High with 8.7 grade.";


div2.appendChild(para5);


var head2=document.createElement('h1');
head2.textContent="Techinical Skills:";
div2.appendChild(head2);

var para6=document.createElement('p');
para6.textContent="Programming languages:c,c++,java,python.Operating systems:Windows,Linux,Android";
div2.appendChild(para6);

var head3=document.createElement('h1');
head3.textContent="Personal information:";
div2.appendChild(head3);

var para6=document.createElement('p');
para6.textContent="Name : S.Anusha";
div2.appendChild(para6);



var para6=document.createElement('p');
para6.textContent="Nationality : Indian";
div2.appendChild(para6);

var para6=document.createElement('p');
para6.textContent="hobbies : playing,reading,sleeping";
div2.appendChild(para6);

var para6=document.createElement('p');
para6.textContent="Gender : Female";
div2.appendChild(para6);

var para6=document.createElement('p');
para6.textContent="Date-of-birth : 20-08-2000";
div2.appendChild(para6);

var head3=document.createElement('h1');
head3.textContent="Declaration:";
div2.appendChild(head3);

var para7=document.createElement('p');
para7.textContent="I here by declare that the above mentioned information is true";
div2.appendChild(para7);