angular.module('myApp',[]).controller('myCtrl', myCtrl)
function myCtrl() {
    var vm = this;
    vm.myToDoListObj = [];
    vm.addTodoItem = addTodoItem;
    vm.removeTodoItem = removeTodoItem;
    function addTodoItem() {
        vm.myToDoListObj.push({isChecked : false, toDoName: ""});
    }
    function removeTodoItem(index) {
        vm.myToDoListObj.splice(index, 1);
    }
    addTodoItem();

};