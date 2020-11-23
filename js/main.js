window.onload = function(){
    let infoLawyer = document.getElementsByClassName("text")[0];
    let fadeDiv = document.getElementsByClassName('fade-out')[0];
    infoLawyer.addEventListener('scroll', function(el){
        fadeDiv.style.transform = "translateY("+el.target.scrollTop+"px)"
    })
}