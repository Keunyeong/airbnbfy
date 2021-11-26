const before = document.querySelector("#before");
const after = document .querySelector("#after");

function convert(){
    const beforArray = (before.value).split("");
    const afterArray = [];
    beforArray.forEach((char)=>{
        const uni = Number(char.charCodeAt(0));
        let ranNum = (Math.random()*3);
        let convertNum = Math.floor(ranNum);
        //32는 공백, 46은 .
        if(uni!=32 && uni!=46 && uni!=39 && uni!=34 && uni!=45 && uni!=40 && uni!=41 && uni!=33 && uni!=63 && uni!=44 && uni!=47 && uni!=92 && uni!=58 && uni!=59){
            afterArray.push(String.fromCharCode(uni+convertNum));
        } else {
            afterArray.push(String.fromCharCode(uni));
        }
    })
    after.value = afterArray.join("");
}

function del(){
    before.value = '';
    after.value = '';
}