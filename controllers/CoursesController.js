courseRoster.controller('CoursesCtrl', function CoursesCtrl($scope, CoursesFactory) {
    $scope.courses = CoursesFactory.courses;
    $scope.CoursesFactory = CoursesFactory;

    $scope.addCourse = function() {
        CoursesFactory.addCourse($scope.courseName);
        $scope.courseName = null;
    }
});
