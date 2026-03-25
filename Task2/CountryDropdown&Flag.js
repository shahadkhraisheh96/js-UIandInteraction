const chosenCountry=document.getElementById("chosenCountry");
const divFlag=document.getElementById("flag");

const flagLink={
    usa:"usa.webp",
    Jordan:"jordan.png",
    uk:"uk.png"
};

chosenCountry.addEventListener("change",(e)=>  {
    const country=e.target.value;
console.log(country)
    if(country===""){
        divFlag.innerHTML="<p>no country chosen</p>";
    }else{
        divFlag.innerHTML=`
        <img src="${flagLink[country]}"
        style="width: 200px; border: 1px solid #ddd; border-radius: 4px; display: block; margin-top: 10px;
        ">
        `;
    }

});