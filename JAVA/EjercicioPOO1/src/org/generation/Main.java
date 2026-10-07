package org.generation;

import org.generation.entities.Courses;
import org.generation.entities.Student;

public class Main {
    public static void main(String[] args) {
        // Crear estudiantes
        Student s1 = new Student("Ana", "Lopez", 101, 75, 1);
        Student s2 = new Student("Carlos", "Perez", 102, 55, 1);
        Student s3 = new Student("Maria", "Gomez", 103, 90, 2);

        // Crear curso
        Courses javaCourse = new Courses("Java Programming", "Prof. Smith", 2026);

        // Inscribir estudiantes
        javaCourse.enroll(s1);
        javaCourse.enroll(s2);

        // Inscribir varios estudiantes a la vez
        Student[] group = {s2, s3};
        javaCourse.enroll(group);

        // Probar métodos
        System.out.println("Total students: " + javaCourse.countStudents());
        System.out.println("El mejor : " + javaCourse.bestGrade());

        s1.printFullName();
        System.out.println("Is approved? " + s1.isApproved());
        s1.changeYearIfApproved();

        System.out.println("Promedio del curso: " + javaCourse.averageGrade());
        javaCourse.ranking();
        javaCourse.compareWithAverage();
    }
}

