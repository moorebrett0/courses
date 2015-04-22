courseRoster.factory('CoursesFactory', function CoursesFactory() {
    var factory = {};
    factory.courses = [];

    factory.addCourse = function(courseName) {
        factory.courses.push({ name: courseName, id: factory.courses.length + 1, students: []});
    };

    factory.addStudent = function(course, studentName) {
        course.students.push({ name: studentName });
    };

    return factory;
});
