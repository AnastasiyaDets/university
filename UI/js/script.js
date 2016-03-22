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
        '<a href="#" title="remove"><i class="fa fa-trash"></i></a>' +
        '<span class="info">[' + formatDate(new Date()) + '] <b>' + author + ': </b></span>' + text;
    messages.appendChild(message);
    message.scrollIntoView();
}

function deleteMessage(){

}