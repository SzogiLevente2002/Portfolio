
myfetch = new Promise((a,b)=>{
    if (Math.random() > .1) {
        setTimeout(a,1000,a (Math.round(Math.random()*100)))  
    } else {
        b("Hiba")
    }
})
x.then(console.log).catch(console.error)

async function f() {
    a = await myfetch()
    console.log();
}