package entities;

public class Student {
    String firstName;
    String lastName;
    int registration;
    int grade;
    int year;

    // 🔹 Constructores
    public Student(String firstName, String lastName, int registration, int grade, int year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.registration = registration;
        this.grade = grade;
        this.year = year;
    }// constructor 1 Student

    public Student(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.registration = 0;
        this.grade = 0;
        this.year = 1;
    }//constructor 2 Student

    public Student() {
        this.firstName = "Unknown";
        this.lastName = "Unknown";
        this.registration = 0;
        this.grade = 0;
        this.year = 1;
    }//constructor 3 Student

    // 🔹 Métodos
    public void printFullName() {
        System.out.println(firstName + " " + lastName);
    }

    public boolean isApproved() {
        if(this.grade <60) {
            return false;
        }
        return true;
    }

    public int changeYearIfApproved() {
        if (isApproved()) {
            this.year ++;
            System.out.println("Congratulations! You are approved for year " + this.year);
        } else {
            System.out.println("Sorry! You didn't approve");
        }
        return this.year;
    }//changeYearIfApproved

    @Override
    public String toString() {
        return firstName + " " + lastName;

    }
}