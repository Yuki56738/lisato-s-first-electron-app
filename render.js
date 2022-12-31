const information = document.getElementById('info')

information.innerText = `This app is using Chrome (v${versions.chrome()}, Node.js (v${versions.node()}, and Electron (v${versions.electron()})`


document.getElementById('button1').onclick = ()=>{
    function sayHi() {
        information.innerText = 'I know you clicked me~\nAhaha~'
    }
   sayHi()
}

