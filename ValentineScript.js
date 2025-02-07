window.onload = function()
{
    let noClickCount =0;
    let yesButton = document.getElementById("yes");
    let noButton = document.getElementById("no");
    
    function persuade() {
        let messages = [
            "Are you sure?",
            "Pookie pleaasee?",
            "Think this over butt!!",
            "Pwetty pweaasee? 🥹",
            "Last chance butt!!😡🔫"
        ];
    
        if(noClickCount < messages.length)
        {
            noButton.innerText = messages[noClickCount];
            noClickCount++;
        }
        else
        {
            noButton.style.display = "none";
        }
    
        yesButton.style.fontSize = `${20 + noClickCount * 10}px`;yesButton.style.display.fontSize = '${20 + noCLickCount * 10}px';
        yesButton.style.padding = `${10 + noClickCount * 5}px ${20 + noClickCount * 10}px`
    }
    
    function acceptLove() {
        window.location.href = "Congrats.html";//redirecting to a page
    }

    noButton.onclick = persuade;
    yesButton.onclick = acceptLove;
}