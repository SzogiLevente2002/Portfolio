window.onload = () => {
    fetch ("https://localhost:7288/swagger/index.html")
    .then(o => o.json())
    .then(console.log)
    document.getElementById("content").innerHTML = 
    o.map()(k => k.studentName).join("<br>")
}

function newTicket(name,subject,content) {
    
}