package com.company;

import java.text.SimpleDateFormat;

public class Message {
    String id;
    String author;
    String message;
    long timestamp;

    public Message(String id, String author, String message, long timestamp){
        setId(id);
        setAuthor(author);
        setMessage(message);
        setTimestamp(timestamp);
    }

    public String getID(){
        return id;
    }

    public String getAuthor(){
        return author;
    }

    public String getMessage(){
        return message;
    }

    public long getTimestamp(){
        return timestamp;
    }

    public String getDateInFormat(){
        SimpleDateFormat dateFormat = new SimpleDateFormat("d MMM yyyy HH:mm:ss" );
        return dateFormat.format(getTimestamp());
    }

    public void setId(String id){
        this.id = id;
    }

    public void setAuthor(String author){
        this.author = author;
    }

    public void setMessage(String message){
        this.message = message;
    }

    public void setTimestamp(long timestamp){
        this.timestamp = timestamp;
    }

    public String toString(){
        return  getID() + " " + getAuthor() + " " + getDateInFormat() + " " + getMessage();
    }

}
