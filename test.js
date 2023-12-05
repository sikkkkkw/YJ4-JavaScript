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
        const upperElement = element.innerHTML.replace(" KyungBuk National University", "Daegu University");
        element.innerHTML = upperElement;
    }

    console.log(element);
}

const skills1 = ["q","w","e","r","t","y"];

for(let i =0; i < skills1.length; i ++){
    const skillsid = skills1[i];
    const skill = document.getElementById(skillsid);

    if(skill){
        const upperSkil = skill.innerHTML.substring(0,11);
        skill.innerHTML = upperSkil;
    }
}


