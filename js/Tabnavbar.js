var tabPanels = document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel (Index, color) {
    
    tabPanels.forEach (function (none) {
        none.style.display="none";
    });
    tabPanels[Index].style.display = "block";
    tabPanels[Index].style.backgroundColor = color;

}
showPanel(0,'black');