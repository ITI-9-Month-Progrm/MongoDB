
//--------------------------------FacultySystem--------------------------------//

//Try inserting one record each time
db.student.insert({fristName:"Asmaa",lastName:"Khaled",Age:22,Faculty:{name:"FCI",address:"Fayoum"},Grades:[{courseName:"DB",Grade:3,pass:true},{courseName:"Javascript",Grade:3,pass:true}],isFired:true })
//Try inserting collection
db.student.insert(
[
{fristName:"Omer",lastName:"Alaa",Age:20,Faculty:{name:"FCI",address:"Cairo"},Grades:[{courseName:"DB",Grade:1,pass:true},{courseName:"Javascript",Grade:2,pass:true}],isFired:true },
{fristName:"Ahmed",lastName:"Ali",Age:21,Faculty:{name:"FCI",address:"Alex"},Grades:[{courseName:"DB",Grade:2,pass:true},{courseName:"Javascript",Grade:0,pass:false}],isFired:false }
]
)
db.student.insert({fristName:"Asmaa",lastName:"Ahmed",Age:22,Faculty:{name:"FCI",address:"Alex"},Grades:[{courseName:"DB",Grade:3,pass:true},{courseName:"Javascript",Grade:3,pass:true}],isFired:true })

//All Student
db.student.find()
//Student with specific First Name
db.student.find({fristName:"Asmaa"})

//Students who his First Name=Ahmed, or Last Name= Ahmed
db.student.find({$or:[{fristName:"Ahmed"},{lastName:"Ahmed"}]}).pretty()

//Students that their First name isn't "Ahmed". --xxxx
db.student.find({"fristName":{$ne:"Ahmed"}})

//Students with Age less than 21
db.student.find({"Age":{$lt:21}})

//All fired students
db.student.find({"isFired":true})

//Students with Age more than or equal to 21, and their faculty isn't NULL
db.student.find({$and:[{"Age":{$gte:21}},{"Faculty":{$ne:null}}]})

//Display student with specific First Name, and display his First Name, Last name, IsFired fields only
db.student.find({fristName:"Omer"},{fristName:1,lastName:1,isFired:1})

//Update the student with specific FirstName, and change his LastName

//Try Update() statement.

db.student.update({"fristName":"Omer"},{$set:{"lastName":"Hany"}})
db.student.find()

//Try Update() with Mulit option.

db.student.update({"fristName":"Omer"},{$set:{"lastName":"Mostafa"}},{multi:true})
db.student.find()

//Try Save().

db.student.save(
   {
      "_id" : ObjectId("601e85985ff89ad2cd4fa29f"), "fristName":"Omer","lastName":"Khaled","Age":20,
               "Faculty":{name:"FCI",address:"Alex"},"Grades":[{courseName:"DB",Grade:2,pass:true},
               {courseName:"Javascript",Grade:0,pass:false}],"isFired":false
   }
)
db.student.find()

//Delete Fired students
db.student.remove({"isFired":true})
db.student.find()

//Delete all students collection
db.student.remove({})
db.student.find()

//Delete the whole DB
db.student.drop()



























































