// let userFeedback ="";
// // 3 unhappy , satisfied , happy
// // unhappy.addEventListener('click',()=>{
// //  userFeedback = "unhappy"});
// // button.addeve(click,()=>{
//     out.doc.createelement('div');
//     out.style.cssText=`

//     `;    
//     let h1 = 
//     let p = 
//     Feedback : {userFeedback};
// }) 
// // Feedback : {userFeedback};

let smilyFace = document.querySelector('.smily-face');
let feedback = ""
let flag = false;

smilyFace.addEventListener('click',(e)=>{
    let currEle = e.target;
    console.log(currEle);
    if(currEle.classList.contains('moods') || currEle.nodeName == "small" || currEle.node == "img"){
        console.log(currEle);

        document.querySelectorAll('.moods').forEach(item => {
            item.classList.remove('active')
        })
        currEle.classList.add('active')
        feedback = currEle.innerHTML;
        flag = true
        console.log(feedback)
    }    
})
function showFeedback(){
    if(flag){
        document.querySelector('.feedbacontainer').innerHTML = feedback
        let p = document.createElement('p');
        p.innerText = "We'll use your feedback to improve our customer support."
        document.querySelector('.feedbacontainer').appendChild(p);
    }else{
        alert('pls select a feedback first');
        return;
    }
}
document.querySelector('.btn').addEventListener('click' , showFeedback);