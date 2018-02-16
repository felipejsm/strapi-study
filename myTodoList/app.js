angular.module('myApp',[]).controller('myCtrl', myCtrl)
function myCtrl() {
    var vm = this;
    vm.myToDoListObj = [];
    vm.addTodoItem = addTodoItem;

    function addTodoItem() {
        vm.myToDoListObj.push({isChecked : false, toDoName: ""});
    }

    addTodoItem();

};