//var req=JSON.parse(context.getVariable('request.content'));
var fs = require('fs');
var context=fs.readFileSync('in.json');
var req=JSON.parse(context);
console.log(req);
//print(JSON.stringify(req));
//var res=JSON.parse(context.getVariable('request.content'));
latest={
   };
if('EmployeeDetails' in req){
 if('BasicInformation' in req.EmployeeDetails){
  if('IdentityType' in req.EmployeeDetails.BasicInformation){
     var EID = req.EmployeeDetails.BasicInformation.IdentityType;
     var Eage = req.EmployeeDetails.BasicInformation.Age;
    // print(EID);
     console.log(EID);
    
     //print(EAge);
  }}
         if (Array.isArray(req.EmployeeDetails.BasicInformation.Education)) {
             var newresponse = [];
              newresponse[0] = {};
              var Id = req.EmployeeDetails.BasicInformation.Education.length;
    if (Id > 0) {
         for (var i = 0; i < Id; i++) {
            var s = {
                "Educ lev" :  req.EmployeeDetails.BasicInformation.Education[i].EducationLevel,
                "High Sch" :   req.EmployeeDetails.BasicInformation.Education[i].HighSchool,
                "Typ" :  req.EmployeeDetails.BasicInformation.Education[i].Type,
                "Col" :  req.EmployeeDetails.BasicInformation.Education[i].College
            };
            newresponse[i] = {};
            newresponse[i]["Education"] = s;   
         }
      }
     }
console.log(JSON.stringify(newresponse));
//context.setVariable('req.content', JSON.stringify(newresponse));
//print(JSON.stringify(newresponse));
}


