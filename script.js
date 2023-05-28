var tablinks = document.getElementsByClassName('tab-links')
var tabcontents = document.getElementsByClassName('tab-contents')

 opentab =(tabname)=>{
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

const sidemenu= document.getElementById('sidemenu')
openmenu=()=>{
    sidemenu.style.right="0"
    sidemenu.style.transition="all 0.5s"
}
closemenu=()=>{
    sidemenu.style.right="-200px"
}

