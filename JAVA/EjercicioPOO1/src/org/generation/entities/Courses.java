package entities;
import java.util.ArrayList;

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
        Student tempStudent = student;
        for (Student std : students) {
            if (tempStudent.equals(std)) {
                tempStudent = std;
                break;
            }//if
        }//forEach
        this.students.remove(student);
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
}
