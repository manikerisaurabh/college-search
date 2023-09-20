let inp = document.querySelector(".input");
let btn = document.querySelector(".btn");
let url = "http://universities.hipolabs.com/search?name=";
let ul = document.querySelector("ul");
let link = "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TMvIKa9KSTYyYPTiSczMzC1WyEtMLygtAgCJRwmq&q=";
let h2 = document.querySelector(".mian");

btn.addEventListener("click", async()=> {
    console.log(inp.value);
    let clgArr = await getCollege();
    show(clgArr);
});

function show(clgArr) {
    h2.innerText = inp.value;
    ul.innerText = '';
    ul.classList.add("listt");
    for(clg of clgArr) {
        
        let a = document.createElement("a");
        let list = document.createElement("li");
        a.innerText = "";
        list.innerText = `${clg.name}`;
        ul.appendChild(list);
        a.innerText = "Link";
        a.href = `${link}${clg.name} photos`;
        a.target = "_blank";
        list.appendChild(a);
        inp.value = "";
    }
}
async function getCollege() {
    let res = await axios.get(url+inp.value);
    return res.data;
}