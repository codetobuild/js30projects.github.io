


 const keyPad = Array.from(document.querySelectorAll('input'));

//main audio playing function

function playAudio(key){
   const audio = document.querySelector( `audio[data-key="${key}"]`)
   if(audio)
    { 
      audio.currentTime=0;
      audio.play();
   }
}

function playEffect(k)
{
   k.classList.add('playing');
   setTimeout( ()=>{
      k.classList.remove('playing');
   },50)
   
}

//play with clicked on pad on screen
 keyPad.forEach( (k)=>{
    k.addEventListener('click',(e)=>{
   
      playEffect(k);
      playAudio( k.getAttribute('value'));//call play audio
        
    })
 })
 











