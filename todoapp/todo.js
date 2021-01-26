
const delList=document.querySelector('ul');
const btn=document.querySelector('.btn');


const addNewList=function (text) 
{  
  if(text)
  {
 
    const list=document.createElement('li');
    const span=document.createElement('span');
    const ul=document.querySelector('ul');

    list.textContent=text;
    span.classList.add('close');
    span.innerHTML='&#x2716';

    list.appendChild(span);
    ul.appendChild(list);
    
  }
  
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) 
  {
    close[i].onclick =function() 
    {
      var div = this.parentElement;
      div.style.display = "none";
    }
    
  }
     
}

btn.addEventListener('click', (e)=>{
     
     const input = document.querySelector('.inputBox');
     const text = input.value;
 
     addNewList(text); 
      
     input.value='';
})



  delList.addEventListener('click', (e)=>{
      if( e.target.nodeName==='LI')
      {
        e.target.classList.toggle('checked'); 
      }
  })
 

 
    // close[i].onclick = function() {
    //     console.log('clicked')
    //   var div = this.parentElement;
    //   div.style.display = "none";
    // }
  
const iconContent= document.querySelector('.info-main');
const icon=document.querySelector('.info-icon');
icon.addEventListener('click' , (e)=>{
    
    iconContent.classList.toggle('visible');
})

function setTimeDate( day,month,year, today)
{
 console.log( day, month, year, today);
 const dd= document.querySelector('.date');
 const tt= document.querySelector('.day');

     dd.textContent=`${day} ${month}, ${year}`;
   tt.textContent=today
;}

setInterval(() => {
    
  const date= new Date();
   var currday =date.getDay();
   currday = (currday<10) ? '0'+currday: currday;

  var currMonth= date.toLocaleString('default', { month: 'long' });
  const currYear= date.getFullYear();
   
  var dayArr=['Sunday', 'Monday', 'Tuesday', 'Wednesday',
             'Thursday', 'Friday', 'Saturday'];

    setTimeDate( currday,currMonth,  currYear, dayArr [ new Date().getDay() ] );
   
},1000);

















 
