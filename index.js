const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/cat",{useNewUrlParser:true})
// the data after the localhost:27017/ABC ABC is new database which is going to be create

// so just at first time lets create a schema and then we will going to create a model for which that created schema we are going to implement

// here we are declaring the schema of the catschema which we are going to use further inorder to make model based on  cat

const catSchema=mongoose.Schema({
  // we will parse the attribute and the type of attribute inside the main mongoose.Schema
  // 3 main datatypes in js 1)Number 2)Stribg 3)Boolean
  name:String,
  color:String,
  age:Number,
  type:String,
})

const cat= mongoose.model("cat",catSchema);

const cat1=new cat({
  name:"mani",
  color:"orange-white",
  age:20,
  type:"normal",
})
// shell code after inserting cat database
// cat1.save();
// ouput from mongoshell
// > show dbs
// admin     0.000GB
// cat       0.000GB
// config    0.000GB
// ghansham  0.000GB
// > use cat
// switched to db cat
// > show collections
// cats
// > db.cats.find()
// { "_id" : ObjectId("62fa6d10f13d033e9f8350f9"), "name" : "mani", "color" : "orange-white", "age" : 20, "type" : "normal", "__v" : 0 }
// > show dbs
// admin     0.000GB
// bat       0.000GB
// cat       0.000GB
// config    0.000GB
// ghansham  0.000GB
// > use bat
// switched to db bat
// > show collections
// cats
// > db.cats.find()
// { "_id" : ObjectId("62fa6e07ba8430e1c00ac379"), "name" : "mani", "color" : "orange-white", "age" : 20, "type" : "normal", "__v" : 0 }
// >

// lets crete another collections in the same database cat
const studentSchema=mongoose.Schema({
  name:String,
  mis:Number,
  pincode:Number,
  college:String,
  contact:Number,
  email:String,
})

const student=mongoose.model("student",studentSchema);

// it is not a case that you have insert the field in same order which you can see in schema itself
const grs=new student({
  name:"Ghansham Rajaram Salunkhe",
  mis:111903033,
  pincode:413109,
  college:"COEP",
  email:"salukhegr1712@gmail.com",
})
// ghansham.save()

const akg=new student({
  name:"Adesh Kiran Gaikwad",
  mis:11191002,
  pincode:411005,
  college:"COEP",
  email:"gaikwadak19.meta@coep.ac.in",
})
// adesh.save()

const yj=new student({
  name:"Yash Sudhakar Jogdand",
  pincode:411005,
  college:"COEP",
  email:"jogdandys19.extc@coep.ac.in",
})
// yash.save()
const nnm=new student({
  name:"Adesh Kiran Gaikwad",
  college:"Fergusson",
  email:"nikhilMore123@gmail.com",
})
// nikhil.save()

// shell code after creating student model
//
// > show dbs
// admin     0.000GB
// bat       0.000GB
// cat       0.000GB
// config    0.000GB
// ghansham  0.000GB
// > use cat
// switched to db cat
// > show collectionss
// 2022-08-15T21:43:40.342+0530 E  QUERY    [js] uncaught exception: Error: don't know how to show [collectionss] :
// shellHelper.show@src/mongo/shell/utils.js:1139:11
// shellHelper@src/mongo/shell/utils.js:790:15
// @(shellhelp2):1:1
// > show collections
// cats
// students
// > db.students.find()
// { "_id" : ObjectId("62fa709d8b70547141c99a83"), "name" : "Adesh Kiran Gaikwad", "college" : "Fergusson", "email" : "nikhilMore123@gmail.com", "__v" : 0 }
// { "_id" : ObjectId("62fa709d8b70547141c99a82"), "name" : "Yash Sudhakar Jogdand", "pincode" : 411005, "college" : "COEP", "email" : "jogdandys19.extc@coep.ac.in", "__v" : 0 }
// { "_id" : ObjectId("62fa709d8b70547141c99a81"), "name" : "Adesh Kiran Gaikwad", "mis" : 11191002, "pincode" : 411005, "college" : "COEP", "email" : "gaikwadak19.meta@coep.ac.in", "__v" : 0 }
// { "_id" : ObjectId("62fa709d8b70547141c99a80"), "name" : "Ghansham Rajaram Salunkhe", "mis" : 111903033, "pincode" : 413109, "college" : "COEP", "email" : "salukhegr1712@gmail.com", "__v" : 0 }
// >
//

// student.insertMany([akg,grs,nnm,yj],function(err){
//   console.log(err);
// });
//
// switched to db cat
// > db.students.find()
// { "_id" : ObjectId("62fa709d8b70547141c99a83"), "name" : "Adesh Kiran Gaikwad", "college" : "Fergusson", "email" : "nikhilMore123@gmail.com", "__v" : 0 }
// { "_id" : ObjectId("62fa709d8b70547141c99a82"), "name" : "Yash Sudhakar Jogdand", "pincode" : 411005, "college" : "COEP", "email" : "jogdandys19.extc@coep.ac.in", "__v" : 0 }
// { "_id" : ObjectId("62fa709d8b70547141c99a81"), "name" : "Adesh Kiran Gaikwad", "mis" : 11191002, "pincode" : 411005, "college" : "COEP", "email" : "gaikwadak19.meta@coep.ac.in", "__v" : 0 }
// { "_id" : ObjectId("62fa709d8b70547141c99a80"), "name" : "Ghansham Rajaram Salunkhe", "mis" : 111903033, "pincode" : 413109, "college" : "COEP", "email" : "salukhegr1712@gmail.com", "__v" : 0 }
// { "_id" : ObjectId("62fa72caad8cda83de72b758"), "name" : "Yash Sudhakar Jogdand", "pincode" : 411005, "college" : "COEP", "email" : "jogdandys19.extc@coep.ac.in", "__v" : 0 }
// { "_id" : ObjectId("62fa732fa719aeca9309e270"), "name" : "Noone" }
// { "_id" : ObjectId("62fa736da719aeca9309e271"), "name" : "jaydeep" }
// { "_id" : ObjectId("62fa73ed2ab171c8d711cd04"), "name" : "Adesh Kiran Gaikwad", "mis" : 11191002, "pincode" : 411005, "college" : "COEP", "email" : "gaikwadak19.meta@coep.ac.in", "__v" : 0 }
// { "_id" : ObjectId("62fa73ed2ab171c8d711cd03"), "name" : "Ghansham Rajaram Salunkhe", "mis" : 111903033, "pincode" : 413109, "college" : "COEP", "email" : "salukhegr1712@gmail.com", "__v" : 0 }
// { "_id" : ObjectId("62fa73ed2ab171c8d711cd06"), "name" : "Adesh Kiran Gaikwad", "college" : "Fergusson", "email" : "nikhilMore123@gmail.com", "__v" : 0 }
// { "_id" : ObjectId("62fa73ed2ab171c8d711cd05"), "name" : "Yash Sudhakar Jogdand", "pincode" : 411005, "college" : "COEP", "email" : "jogdandys19.extc@coep.ac.in", "__v" : 0 }
// >
//
