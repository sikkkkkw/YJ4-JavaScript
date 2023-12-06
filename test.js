const profile = document.getElementById("profile");
console.log(profile);
const upperPorfile = profile.innerHTML.toUpperCase();
profile.innerHTML =upperPorfile;

const skills = document.getElementById("skills");
console.log(skills);
const upperSkills = skills.innerHTML.toUpperCase();
skills.innerHTML =upperSkills;

const gallery = document.getElementById("gallery");
console.log(gallery);
const upperGallery = gallery.innerHTML.toUpperCase();
gallery.innerHTML =upperGallery;

const ids = ["d", "i", "v"];

for (let i = 0; i < ids.length; i++) {
    const currentId = ids[i];
    const element = document.getElementById(currentId);

    
    if (element) {
        const reElement = element.innerHTML.replace("KyungBuk National University", "Daegu University");
        element.innerHTML = reElement;
    }

    console.log(element);
}

const skills1 = ["q","w","e","r","t","y"];

for(let i =0; i < skills1.length; i ++){
    const skillsid = skills1[i];
    const skill = document.getElementById(skillsid);

    if(skill){
        const subSkil = skill.innerHTML.substring(0,11);
        skill.innerHTML = subSkil;
    }
}

  document.getElementById("gallery").addEventListener("click",function(){
    setTimeout(function(){
        showImages();
    }, 1000);
  });
  function showImages(){
    const images = document.querySelectorAll("article img");
    images.forEach(function(img, index){
        img.style.display = "inline";
        if(index > 0){
            img.style.marginLeft = "10px";
        }
    });
  }

