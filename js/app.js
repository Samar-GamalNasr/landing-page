//create section 
var makeNewSection = document.createElement("section");
makeNewSection.setAttribute("id", "section7");
makeNewSection.setAttribute("data-nav", "Section 7");


var makeNewDiv = document.createElement("div");
makeNewDiv.setAttribute("class", "landing__container");
makeNewSection.appendChild(makeNewDiv);

var hedar = document.createElement("h2");
hedar.innerText = "Section 7";
makeNewDiv.appendChild(hedar);

var pag = document.createElement("p");
pag.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.";
makeNewDiv.appendChild(pag);


var main = document.querySelector("main");
main.append(makeNewSection);
//finish of create section



const allSections= document.querySelectorAll('section');
const mymul=document.getElementById('navbar__list');
const frag=document.createDocumentFragment();

allSections.forEach((e,index)=> {
let linkText=e.getAttribute('data-nav');
let newLink = document.createElement('a');
let textNO=document.createTextNode(linkText);
let newLi=document.createElement('li');
newLink.appendChild(textNO);
newLi.appendChild(newLink);

newLink.addEventListener('click',(event)=>{
e.scrollIntoView({behavior:"smooth"});
})

frag.appendChild(newLi);
});
mymul.appendChild(frag);


window.addEventListener("scroll" ,()=> {
allSections.forEach((sec,index)=>{
    const react=sec.getBoundingClientRect();
   
   if(react.top>0 && react.top<300){
    
    const secnav=sec.getAttribute("data-nav");

    allSections.forEach((active_sec)=>{

        active_sec.style.background="linear-gradient(0deg, rgba(136,203,171,1) 0%, rgba(0,13,60,1) 100%)";

    })
   
        sec.style.background=" linear-gradient(0deg, rgba(36,03,171,1) 0%, rgba(0,13,60,1) 100%) ";

 const links=document.querySelectorAll('a');

 links.forEach((alink)=>{

    if(alink.innerText==secnav){

        links.forEach((delLink)=>{

            delLink.style.background="rgb(136,203,171)";
    
    })
    alink.style.background="rgb(110, 186, 309)";
}
})
   }
});

})