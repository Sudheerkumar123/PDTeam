var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.SelectedName=[];
    $scope.SelectedNameNested=[];
    $scope.nameList=[{'id':1,'name':'Prashanth Kumar','firstName':'Prashanth','lastName':'Kumar','address':'Sterling, VA','contactNumber':'8806264108','details':[]},
                     {'id':2,'name':'Sudheer Kumar','firstName':'Sudheer','lastName':'Kumar','address':'Herndon, VA','contactNumber':'8806264108',
                      'details':[{'name':'Vikram Kumar','firstName':'Vikram','lastName':'Kumar','address':'Chantilly, VA','contactNumber':'8806264108'},
                      {'name':'Rakesh Goud','firstName':'Rakesh','lastName':'Goud','address':'Reston, VA','contactNumber':'8806264108'}]}];

    $scope.changeAccordion=function(row){
      if($scope.SelectedName==row)
      {
        $scope.SelectedName=[];
      }
      else {
        $scope.SelectedName=row;
      }

    }

    $scope.changeAccordionNested=function(rowNested){
      if($scope.SelectedNameNested==rowNested)
      {
        $scope.SelectedNameNested=[];
      }
      else {
        $scope.SelectedNameNested=rowNested;
      }
    }

    $scope.addInfo=function(row){
        $scope.details=[];
        if(row.details.length>0)
        {
          for(var i=0;i<row.details.length;i++)
          {
            //{'name':'Sudheer Kumar','firstName':'Sudheer','lastName':'Kumar','address':'Herndon, VA','contactNumber':'8806264108'}
            $scope.details.push({'name':row.details[i].name,'firstName':row.details[i].firstName,'lastName':row.details[i].lastName,'address':row.details[i].address,'contactNumber':row.details[i].contactNumber});
            //alert(row.details[0].name);
          }
        }
        $scope.nameList.push({'id':$scope.nameList.length+1,'name':row.name,'firstName':row.firstName,'lastName':row.lastName,'address':row.address,'contactNumber':row.contactNumber,'details':$scope.details})
        alert(JSON.stringify($scope.nameList[$scope.nameList.length-1]));
        //$scope.nameList.push(JSON.stringify(row));
    }

});
