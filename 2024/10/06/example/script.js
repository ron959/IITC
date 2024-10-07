window.onload = function() {
    setTimeout(function() {
        // Hide the loading screen
        document.getElementById("loading-screen").classList.add("hidden");
        
        // Show the ATM interface
        document.getElementById("atm").classList.remove("hidden");
    }, 3000); // 3000 milliseconds = 3 seconds
};
