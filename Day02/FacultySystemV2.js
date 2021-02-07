
//insert some Data for Faculty Collection 
db.faculty.insert({name:"FCI",address:"Cairo"});
db.faculty.insert({name:"FCI",address:"Alex"});
db.faculty.insert({name:"Engineer",address:"Cairo"});
db.faculty.insert({name:"Sciences",address:"Alex"});
db.faculty.insert({name:"Arts",address:"Cairo"});
db.faculty.insert({name:"Medecian",address:"Alex"});

//insert some Data for Course Collection
db.course.insert({courseName:"MongoDB",finalMark:4})
db.course.insert({courseName:"DB",finalMark:3})
db.course.insert({courseName:"JS",finalMark:2})
db.course.insert({courseName:"JS",finalMark:1})
db.course.insert({courseName:"C#",finalMark:4})

// Q1: Create unique index on FacultyName on the Faculty collection
db.faculty.createIndex({name:1},{background:true,name:"FacultyName_PK",unique:true})
//----Error----
//db.faculty.insert({name:"Medecian",address:"Alex"});
db.faculty.find({name:{$ne:""}})

// Q2: Using aggregation display the sum of final mark for all courses in Course collection
db.course.mapReduce(
   //map
   function(){emit(this.courseName,this.finalMark)},
   //reduce
   function(key,value){return Array.sum(value)},
   //properity
       {
         out:"Total_Final_Marks"
       }
)
   
db.Total_Final_Marks.find()       

// Q3: Implement (one to many) relation between Student and Course, by adding array of Courses IDs in the student object
//add courseIds as Array in student Asmaa into student collection

//Select specific student with his name, and then display his courses.
var cID = db.student.findOne({firstName:"Asmaa"},{"courseIDs":1,_id:0}).courseIDs
//print(cID)
db.course.find({_id:{$in:cID}},{courseName:1})


//Q4: Implement relation between Student and faculty by adding the faculty object in the student using DBRef.
//add facultyIds into student Collection by using $ref 
//Select specific student with his name, and then display his faculty
var fID = db.student.findOne({firstName:"Asmaa"}).FacultyID
//print(fID)
db[fID.$ref].find({_id:fID.$id},{"name":1})


//Q5: Display each student Full Name along with his average grade in all courses
db.student.aggregate(
[
 {$project:{
       //used concat to display student fullName 
       FullName:{$concat: [ "$firstName", "  ", "$lastName" ]},_id:0,courseArr:1
     }}
]
)
     
    









