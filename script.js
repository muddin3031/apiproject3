
function type12()
{
    
let input=document.getElementById('namecard');
let request= new XMLHttpRequest();
let url= "https://pokeapi.co/api/v2/pokemon/"+input.value+"/";


request.open("GET", url, true);

request.onload=function()
{
    let data = JSON.parse(this.response);
    console.log(data);
    let type= document.getElementById('type');
    let name= document.getElementById('name');
    let defense= document.getElementById('defense');
    let attack= document.getElementById('attack');
    let speed= document.getElementById('speed');
    let img=document.getElementById('imgcd');
    console.log(data.stats[0].base_stat);
    if (request.status>= 200 && request.status < 400)
    {
        speed.textContent = " "+data.stats[0].base_stat.toString();
        attack.textContent = " "+data.stats[4].base_stat.toString();
        defense.textContent = " "+data.stats[3].base_stat.toString();
        name.textContent = " "+data.species.name;
        type.textContent = " "+data.types[0].type.name;
        img.style.display="block";
      img.src=data.sprites.front_default;
      
      console.log("test")
    }
};

request.send();



}
