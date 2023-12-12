fetch("https://gateway.marvel.com:443/v1/public/characters?apikey=e4e2caf51f74aae0352ca05fb6f4d979")
.then(res=>res.json())
.then(data=>{
    // console.log(data)
    const container = document.querySelector("#container");
        const ul = document.createElement("ul");
        data.data.results.map((item,index)=>{
            let li = document.createElement("li");
            li.classList.add("marvel-li")
            li.innerHTML =index+" "+item.name
            ul.appendChild(li);
        })
        container.appendChild(ul)
    })