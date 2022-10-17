function callSearch(){
    var search=document.getElementById("SearchInput");
    if(search.style.display==="block"){
        search.style.display="none";
    }
    else{
        search.style.display="block";
    }
}

function CallMenue(){
    var NavList=document.getElementById("navList");
    if(NavList.style.display==="block"){
        NavList.style.display="none";
    }
    else{
        NavList.style.display="block";
        // NavList.style.right="-50";
    }
}
