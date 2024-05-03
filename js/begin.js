const body= document.body
const app = document.getElementById("APP")
const avatar= document.getElementById("avatar")
// document.body.style.backgroundImage = 'url(./img/begin.svg)'


const onloaded=()=>{
    
    app.style.backgroundImage='url(./img/begin.svg)'
    app.innerHTML=
    `
    <div class="start-container">
        <div id="start-btn" class="btn" onlick="start()">
            <div class="btn-text">START</div>
        </div>
    </div>
    `
}

/* const start = () => {
    // clear laptop background
    app.innerHTML=''
    app.style.backgroundImage=''
    // add avatar
    avatar.style.display='block'

} */

$(document).ready(function(){
    $('#start-btn').click(function (e) { 
        e.preventDefault();
        console.log("clickd");
        $('#APP').css('background-image',"").empty();
        $('#avatar').fadeIn(1000);
    });

})
