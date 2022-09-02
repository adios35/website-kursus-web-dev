
//dropDown menu
document.querySelector(".hamburger").addEventListener("click", (e) => {
  let navItems = document.querySelector(".nav-list").classList;
  let target = e.currentTarget;
  target.classList.toggle("active");
  navItems.toggle("show");
});

//showAside
document.querySelector('.arrow').addEventListener('click',(e)=>{
    e.currentTarget.classList.toggle('show')
    document.querySelector('aside').classList.toggle('show')

})

//menampilkan background color di mode desktop
window.addEventListener("scroll", () => {
   const nav = document.querySelector('nav')
   document.querySelector('nav')
  const viewPort = Math.floor(window.visualViewport.pageTop);
  if(viewPort>=250){
    nav.classList.add('showNav')
  }else{
    nav.classList.remove('showNav')
  }
});

