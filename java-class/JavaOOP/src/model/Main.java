package model;

public class Main {
    public static void main(String[] args) {
        Student student = new Student("李思昊", (short)22, "男", 123456789);
        System.out.println(student.toString());
    }
}
