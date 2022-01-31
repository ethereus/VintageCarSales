var PageTop;

navbar = document.getElementById('nav'); 

window.addEventListener('scroll',function(){
  
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if(scrollTop > PageTop){ 
    navbar.style.top='-50px';
  }
  
  else{
    navbar.style.top='0';
  }
  
}
