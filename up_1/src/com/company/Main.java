package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Messages m1 = new Messages();

        Scanner in = new Scanner(System.in);

        while (true) {
            System.out.println("Что желаете сделать?");
            System.out.println("---------------------");
            System.out.println("Добавить сообщение(1)");
            System.out.println("Просмотреть в хронологическом порядке(2)");
            System.out.println("Удалить сообщение по id (3)");
            System.out.println("Загрузить сообщения из файла(4)");
            System.out.println("Сохранить сообщения в файл (5)");
            System.out.println("Завершить работу программы(6)");
            System.out.println("---------------------");


            int choice = new Integer(in.nextLine());

            switch (choice) {
                case 1:
                    System.out.println("Заполните пункты, для добавления сообщения:");
                    System.out.println("Введите ID: ");
                    String id = in.nextLine();
                    System.out.println("Введите Имя: ");
                    String author = in.nextLine();
                    System.out.println("Введите дату: ");
                    long timestamp = new Long(in.nextLine());
                    System.out.println("Введите текст сообщения: ");
                    String message = in.nextLine();
                    m1.add(id, author, timestamp, message);
                    System.out.println("Ваше сообщение добавлено!" + "\r\n");
                    break;

                case 2:
                    System.out.println("Ваши сообщения: ");
                    m1.printAll();
                    System.out.println("\r\n");
                    break;

                case 3:
                    System.out.println("Введите id для удаления сообщения: ");
                    String id1 = in.nextLine();
                    m1.deleteMessage(id1);
                    System.out.println("Ваше сообщение удалено!" + "\r\n");
                    break;

                case 4:
                    System.out.println("Введите название файла: ");
                    String name = in.nextLine();
                    m1.readFromFile(name);
                    System.out.println("Ваши сообщения загружены из файла!" + "\r\n");
                    break;

                case 5:
                    System.out.println("Введите название файла: ");
                    String name1 = in.nextLine();
                    m1.writeToFile(name1);
                    System.out.println("Ваши сообщения сохранены в файл!" + "\r\n");
                    break;

                case 6:
                    System.out.println("Я отключаюсь! Пока!");
                    return;

                default:
                    System.out.println("Неверно выбрано действие!" + "\r\n");
            }
        }
    }
}
