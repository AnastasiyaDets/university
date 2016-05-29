var author = "Harry Potter";
var messageList = [];

function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

function formatDate(date){
    var minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;

    var hh = date.getHours();
    if (hh < 10) hh = '0' + hh;

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    var yy = date.getFullYear();

    return dd + '.' + mm + '.' + yy + ' ' + hh + ':' + minutes;
}

function run(){
    document.getElementById("message-field").addEventListener("keypress", keypressOnForm);
    document.getElementById("chat").addEventListener("click", editMessage);
    loadFromStorage();
    renderMessageList(messageList);
    renderAuthor(author);
}

function newMessage(author, text, date, isMy){
    return {
        id: guid(),
        author: author,
        text: text,
        isMy: isMy,
        date: date,
        edit: false
    }
}
function renderMessageList(messageList){
    for(var i = 0; i < messageList.length; i++){
        renderMessage(messageList[i]);
    }
}

function renderMessage(message){
    var messageContainer = document.getElementById('messages');
    var messageBlock = document.createElement("div");
    messageBlock.classList.add("message");
    var template = document.getElementById('template-message');
    if(message.isMy){
        template = document.getElementById('template-my-message');
    }
    messageBlock.innerHTML = template.innerHTML;
    var childNodes = messageBlock.childNodes;
    for(var i = 0; i < childNodes.length; i++){
        if(childNodes[i].classList !== undefined){
            if(childNodes[i].classList.contains('info')){
                childNodes[i].innerHTML = '[' + message.date + '] <b>' + message.author + '</b> :';
            }
            if(childNodes[i].classList.contains('message')){
                childNodes[i].innerHTML = message.text;
                childNodes[i].id = message.id;
            }
        }
    }
    messageContainer.appendChild(messageBlock);
    messageBlock.scrollIntoView();
}

function renderAuthor(author){
    document.getElementById("me").innerText = author;
}

function editMessage(evt){
    if(evt.target.classList.contains("fa-pencil")){
        var messageText = evt.target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling;
        var id = messageText.id;
        var message;
        for(var i = 0; i < messageList.length; i++){
            if(messageList[i].id == id){
                message = messageList[i]
            }
        }
        var newMessage = prompt("Change your message:", messageText.innerHTML);
        if (!newMessage) {
            alert('You have not entered a new message!');
            return;
        }
        messageText.innerHTML = newMessage;
        message.text = newMessage;
        saveMessagesToStorage(messageList);
    }
}

function keypressOnForm(e){
    var keyCode = (e.keyCode ? e.keyCode : e.which);
    if(keyCode == 10 || keyCode == 13){
        send();
    }
}

function changeName(){
    var field = document.getElementById('new-name');
    author = field.value;
    if (author == undefined || author.trim().length == 0){
        return;
    }
    field.value = "";
    renderAuthor(author);
    saveAuthorToStorage(author);
}

function send(){
    var messages = document.getElementById("messages")
    var messageField = document.getElementById("message-field");
    var text = messageField.value;
    if (text == undefined || text.trim().length == 0){
        return;
    }
    messageField.value = "";
    var message = newMessage(author, text, formatDate(new Date()), true);
    renderMessage(message);
    messageList.push(message);
    saveMessagesToStorage(messageList);
}

function checkStorage(){
    if(typeof(Storage) == "undefined"){
        alert('localStorage is not accessible');
    }
}

function loadFromStorage(){
    checkStorage();
    messageList = localStorage.getItem("Message list");
    if(!messageList){
        messageList = [newMessage("Albus Percival Wulfric Brian Dumbledore", "Welcome to Hogwarts!", formatDate(new Date()), false)]
    }
    else{
        messageList = JSON.parse(messageList);
    }
    author = localStorage.getItem("Author");
    if(!author){
        author = "Harry potter";
    }
}

function saveMessagesToStorage(messages){
    checkStorage();
    localStorage.setItem("Message list", JSON.stringify(messages));
}

function saveAuthorToStorage(messages){
    checkStorage();
    localStorage.setItem("Author", author);
}

function del(target){
    var messageText = target.nextElementSibling.nextElementSibling;
    var id = messageText.id;
    var message;
    for(var i = 0; i < messageList.length; i++){
        if(messageList[i].id == id){
            message = messageList[i]
        }
    }
    var newMessage = "This message is hidden by ancient magic";
    messageText.innerHTML = newMessage;
    message.text = newMessage;
    saveMessagesToStorage(messageList);
}