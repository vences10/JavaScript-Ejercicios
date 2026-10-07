package org.generation.entities;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class Courses {
    String courseName;
    String professorName;
    int year;
    ArrayList<Student> students;

    public Courses(String courseName, String professorName, int year) {
        this.courseName = courseName;
        this.professorName = professorName;
        this.year = year;
        this.students = new ArrayList<>();
    }

    public void enroll(Student student) {
        students.add(student);
    }

    // Sobrecarga: inscribir varios estudiantes a la vez
    public void enroll(Student[] studentsArray) {
        for (Student student : studentsArray) {
            students.add(student);
        }
    }

    public void unEnroll(Student student) {
        students.remove(student);
    }

    public int countStudents() {
        return students.size();
    }

    public int bestGrade() {
        int best = 0;
        for (Student s : students) {
            if (s.grade > best) {
                best = s.grade;
            }
        }
        return best;
    }

    // 1. Promedio del curso
    public double averageGrade() {
        if (students.isEmpty()) return 0;
        int sum = 0;
        for (Student s : students) {
            sum += s.grade;
        }
        return (double) sum / students.size();
    }

    // 2. Ranking de estudiantes
    public void ranking() {
        Collections.sort(students, new Comparator<Student>() {
            @Override
            public int compare(Student s1, Student s2) {
                return Integer.compare(s2.grade, s1.grade); // orden descendente
            }
        });

        System.out.println("Ranking de estudiantes:");
        int position = 1;
        for (Student s : students) {
            System.out.println(position + ". " + s.firstName + " " + s.lastName + " - " + s.grade);
            position++;
        }
    }

    // 3. Comparar con el promedio
    public void compareWithAverage() {
        double avg = averageGrade();
        System.out.println("Promedio del curso: " + avg);
        for (Student s : students) {
            if (s.grade >= avg) {
                System.out.println(s.firstName + " " + s.lastName + " está por ENCIMA del promedio.");
            } else {
                System.out.println(s.firstName + " " + s.lastName + " está por DEBAJO del promedio.");
            }
        }
    }
}
