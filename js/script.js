const setting = document.getElementById('settings-btn');
const r = document.querySelector(":root");

let night = true;

setting.addEventListener("click", ()=>{
    if(night===true){
        r.style.setProperty("--bgColor","white");
        r.style.setProperty("--fontColor","black");
        night = false;
    }else{
        r.style.setProperty("--bgColor","black");
        r.style.setProperty("--fontColor","white");
        night = true;
    }
});

const pratik = document.getElementById("pratik");
const kumar = document.getElementById("kumar");
const education = document.getElementById("education");
const works = document.getElementById("works");
const skills = document.getElementById("skills");
const hello = document.getElementById("hello");
const about = document.getElementById("about");

window.addEventListener("scroll",()=>{
    let value = window.scrollY;
    pratik.style.transform = `translateX(${value / 24}rem)`;
    kumar.style.transform = `translateX(-${value / 24}rem)`;
    about.style.transform = `translateX(${80 - value / 12}rem)`;
    education.style.transform = `translateX(${130 - value / 12}rem)`;
    works.style.transform = `translateX(${220 - value / 12}rem)`;
    skills.style.transform = `translateX(${300-value / 12}rem)`;
    hello.style.transform = `translateX(${350 - value / 12}rem)`;
})

const mail = document.getElementById("mail");

mail.addEventListener("click",()=>{
    window.location.href = "mailto:kumar.pratik42000@gmail.com";
});
