package com.company;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Messages m1 = new Messages();
        Scanner in = new Scanner(System.in);

        while (true) {
            System.out.println("What do you want to do?");
            System.out.println("---------------------");
            System.out.println("Add message (1)");
            System.out.println("View in chronological order(2)");
            System.out.println("Delete message by id (3)");
            System.out.println("Download messages from the file (4)");
            System.out.println("Save messages to the file (5)");
            System.out.println("Search by author (6)");
            System.out.println("Search by keyword (7)");
            System.out.println("Exit (8)");
            System.out.println("---------------------");
            System.out.println("\r\n");

            int choice = new Integer(in.nextLine());

            switch (choice) {
                case 1:{
                    System.out.println("Enter your name: ");
                    String author = in.nextLine();
                        if(author.isEmpty()){
                            System.out.println("The author doesn't put");
                        break;
                        }
                    System.out.println("Enter your message: ");
                    String message = in.nextLine();
                    m1.add(author, message);
                    }
                    break;

                case 2:
                    System.out.println("Your messages: ");
                    m1.printAll();
                    System.out.println("\r\n");
                    break;

                case 3:
                    System.out.println("Enter id to delete: ");
                    String id1 = in.nextLine();
                    m1.deleteMessage(id1);
                    System.out.println("Your message is deleted!" + "\r\n");
                    break;

                case 4:
                    System.out.println("Enter name of file: ");
                    String name = in.nextLine();
                    m1.readFromFile(name);
                    break;

                case 5:
                    System.out.println("Enter name of file: ");
                    String name1 = in.nextLine();
                    m1.writeToFile(name1);
                    break;

                case 6:
                    System.out.println("Enter the author for search:");
                    String newAuthor = in.nextLine();
                    m1.searchByAuthor(newAuthor);
                    break;

                case 7:
                    System.out.println("Enter your keyword: ");
                    String keyword = in.nextLine();
                    m1.searchByKeyword(keyword);
                    break;

                case 8:
                    System.out.println("I'm off! Bye!");
                    return;

                default:
                    System.out.println("Invalid action!" + "\r\n");
            }
        }
    }
}
