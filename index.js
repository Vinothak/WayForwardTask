function progress(){
    var prog=document.getElementById('progress');
    var percent=document.getElementById('percentCount');
    var counter=5;
    var progress=25;
    var id=setInterval(()=>{
      if(progress==500 && counter ==100){
          clearInterval(id);
      }else{
          progress+=5;
          counter+=1;
          prog.style.width=progress+'px';
          percent.innerHTML=counter+'%';
      }
    },100);
}

