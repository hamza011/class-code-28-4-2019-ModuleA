function myFn() {
    alert("Clicked")
}

function input(eve) {
    // var ele = eve.target;
    console.log(eve.target.value);
    // ele.style.backgroundColor = "blue";
    // console.log("-----",ele.value);
}

function changeColor() {
    var elements = document.getElementsByClassName('fieldClass');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "yellow";
    }
}

function getVal() {
    // var element = document.getElementsByClassName('fieldId');
    var element = document.querySelector('.fieldClass');
    element.value = "Test";
    console.log(element.value);
}

function showContent(eve) {
    // console.log(eve.target.parentNode.parentNode);

    // var element = document.getElementById('contentToBe');
    // console.log(element.className);
    // element.className += " hide";
    // element.innerHTML = "<h1>Hello</h1>"
    // element.innerHTML += "<h1>Hello</h1>"
    // console.log(element.innerHTML);

    // console.log(eve.target.innerHTML)
    // eve.target.innerText = "Text changed"

}



// function focusOnBtn() {
//     alert("Focused");
// }

function showData(){
    var tag = document.getElementById('newEle');4
    console.log(tag)
    // tag.innerHTML += '<a>link</a>'
    // tag.innerHTML.href = "www.abc.com";
    // console.log(tag.innerHTML);

    var paragraph = document.createElement("p");
    // console.log(paragraph);
    var span = document.createElement('span');
    paragraph.appendChild(span);
    
    console.log(paragraph);
    // paragraph.innerText = "Paragraph 1";
    // tag.appendChild(paragraph);
}