var author = "Harry Potter";

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

}

function editMessage(evt){
    if(evt.target.classList.contains("fa-pencil")){
        var messageText = evt.target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling;
        var newMessage = prompt("Change your message:", messageText.innerHTML);
        if (!newMessage) {
            alert('You have not entered a new message!');
            return;
        }
        messageText.innerHTML = newMessage;
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
    var me = document.getElementById('me');
    me.innerHTML = author;
}

function send(){
    var messages = document.getElementById("messages")
    var messageField = document.getElementById("message-field");
    var text = messageField.value;
    if (text == undefined || text.trim().length == 0){
        return;
    }
    messageField.value = "";
    var message = document.createElement('div');
    message.classList.add('message');
    message.innerHTML = '<a href="#" title="edit"><i class="fa fa-pencil"></i></a>' +
        '<a href="#" title="remove" onclick="this.parentNode.remove()"><i class="fa fa-trash"></i></a>' +
        '<span class="myInfo">[' + formatDate(new Date()) + '] <b>' + author + ': </b></span><span class="message">' + text + "</span>";
    messages.appendChild(message);
    message.scrollIntoView();
}
