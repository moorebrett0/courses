courseRoster.controller('StudentsCtrl', function StudentsCtrl($scope, $stateParams, CoursesFactory, UtilitiesFactory) {
    $scope.course = UtilitiesFactory.findById(CoursesFactory.courses, $stateParams.courseId)
    $scope.addStudent = function() {
        var studentName = $scope.studentName;
        CoursesFactory.addStudent($scope.course, studentName);
        $scope.studentName = null;
    };
});
