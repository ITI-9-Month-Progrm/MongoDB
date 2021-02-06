//-----------------------------FacultySystemV2-------------------------------//

//Student Collection
db.student.insert({firstName:"Asmaa",lastName:"Khaled",IsFired:true, FacultyID:1,courseArr:[{courseID:1},{grade:3}]})
db.student.insert({firstName:"Omer",lastName:"Ali",IsFired:false, FacultyID:2,courseArr:[{courseID:2},{grade:3}]})
db.student.find()

//Faculty Collection
db.faculty.insert({name:"FCI",address:"Fayoum"});
db.faculty.find()

//Course Colection
db.course.insert({courseName:"DB",finalMark:4})
db.course.find()






