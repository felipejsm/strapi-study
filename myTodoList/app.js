angular.module('myApp',[]).controller('myCtrl', myCtrl)
function myCtrl($http) {
    var vm = this;
    vm.myToDoListObj = [];
    vm.addTodoItem = addTodoItem;
    vm.removeTodoItem = removeTodoItem;
    vm.save = save;
    vm.initial = initial;
    function initial() {
        $http({
            method : "GET",
            url : "http://localhost:1337/mytodolist"
        }).then(function mySuccess(response) {
            if(response.data.length)
                vm.myToDoListObj = response.data;
            else
                addTodoItem();
        }, function myError(response) {
            addTodoItem();
        });
    }
    function addTodoItem() {
        vm.myToDoListObj.push({id: null, isChecked : false, toDoName: ""});
    }
    function removeTodoItem(index) {
        if(vm.myToDoListObj.length > 1)
            vm.myToDoListObj.splice(index, 1);
    }
    function save() {
        $http({
            method : "POST",
            url : "http://localhost:1337/mytodolist",
            data : vm.myToDoListObj
        }).then(function mySuccess(response) {
           console.log(response);
        }, function myError(response) {
            console.log(response);
        });
    }
    initial();

};