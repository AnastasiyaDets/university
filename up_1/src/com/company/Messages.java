package com.company;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.Type;
import java.util.*;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

public class Messages {
    private ArrayList<Message> messages;

    public Messages() {
        messages = new ArrayList<>();
    }

    public void readFromFile(String fileName){
        try {
            FileReader fr = new FileReader(fileName);
            Gson gson = new Gson();
            Type collectionType = new TypeToken<Collection<Message>>(){}.getType();
            ArrayList<Message> messages = gson.fromJson(fr, collectionType);
            this.messages.addAll(messages);
            System.out.println("Ваши сообщения загружены из файла!" + "\r\n");
        } catch (FileNotFoundException e) {
            System.out.println("Error with file! Sorry!");
        }
    }

    public void writeToFile(String fileName)  {
        try {
            FileWriter fw = new FileWriter(fileName);
            Gson gson = new Gson();
            fw.write(gson.toJson(messages));
            fw.close();
            System.out.println("Ваши сообщения сохранены в файл!" + "\r\n");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void add(String id, String author, long timestamp, String message) {
        Message message1 = new Message(id, author, message, timestamp);
        messages.add(message1);
    }

    public void printAll() {
        Collections.sort(messages, (a, b) -> Long.compare(a.getTimestamp(), b.getTimestamp()));
        for (int i = 0; i < messages.size(); i++) {
            System.out.println(messages.get(i));
        }
    }

    public void deleteMessage(String id) {
        Iterator<Message> message = messages.iterator();
        while (message.hasNext()) {
            if (message.next().getID().equals(id)) {
                message.remove();
            }
        }
    }
}
