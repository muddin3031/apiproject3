function type14()
{
    

let request= new XMLHttpRequest();
let url= "https://pokeapi.co/api/v2/pokemon";
let url2;
let state=document.getElementById('state');
state.style.display="none";
request.open("GET", url, true);

request.onload=function()
{
    let data = JSON.parse(this.response);
    console.log(data);
 
   let pokemon=Math.floor(Math.random() * 21);
    console.log(data.stats[0].base_stat);
    if (request.status>= 200 && request.status < 400)
    {
        url2=data.results.url[pokemon];
      
      
      console.log("test")
    }
};

request.send();


game(url2);

}

function game(link)
{
   

let request= new XMLHttpRequest();
let input2=document.getElementById('name');
let name;
let answer=document.getElementById('answer');
answer.innerhtml="";
request.open("GET", link, true);

request.onload=function()
{
    let data = JSON.parse(this.response);
    console.log(data);
    
    let img=document.getElementById('imgcd');
    console.log(data.stats[0].base_stat);
    if (request.status>= 200 && request.status < 400)
    {
      
        name= " "+data.species.name;
       
        img.style.display="block";
      img.src=data.sprites.front_default;
      
      console.log("test")
    }
};

request.send(); 
if(name==input2.value)
{
    answer.innerHTML="Correct"
}
else
{
    answer.innerHTML="Wrong"
}
}