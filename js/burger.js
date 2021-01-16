// M.AutoInit();

// setInterval(function(){
    //  var toastHTML = `
    //  <span><b>Nosfeato</b> a rejoint le chat !</span>`;
    // M.toast({html: toastHTML, classes: 'rounded'});
//     var randomName = faker.internet.userName();
//     console.log(randomName);
// }, 2000);

const openCloseButton = document.getElementById('open-close-button');

const sidebar = document.getElementById('sidebar');

openCloseButton.addEventListener('click', () => {
    if(sidebar.classList.contains('open')) {
        sidebar.style.transform = "";
        sidebar.classList.remove("open"); 
    } else {
        sidebar.style.transform = "translateX(0%)";
        sidebar.classList.add("open");
    }
})