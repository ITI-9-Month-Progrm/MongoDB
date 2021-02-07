using System;
using MongoDB.Driver;
using MongoDB.Bson;
using System.Linq;

namespace MongoDBTask
{
    class Program
    {
        static void Main(string[] args)
        {
            
            //Q2:Retrieve and insert to MongoDB using a C# Desktop / Web application
            MongoClient dbClient = new MongoClient("mongodb://127.0.0.1:27017");
            var database = dbClient.GetDatabase("FacultySystemV2");
            var collection = database.GetCollection<BsonDocument>("faculty");
            var document = new BsonDocument
            {
                { "name","Pharmacy" },
                {"address","Tanta"}
            };

            collection.InsertOne(document);
            Console.WriteLine("Display The First Document from Faculty Collection");
            var firstDocument = collection.Find(new BsonDocument()).FirstOrDefault();
            Console.WriteLine(firstDocument);
            Console.WriteLine("Display All Documents from Faculty Collection");
            var documents = collection.Find(new BsonDocument()).ToList();
            foreach(var doc in documents)
            Console.WriteLine(doc.ToString());
            //Q3 :Display each student along with his grades in course he studied from FacultySystemV2
            var collectionStudent = database.GetCollection<BsonDocument>("student");
            var documentStudent = collectionStudent.Find(new BsonDocument()).ToList();

             foreach (var doc in documentStudent)
             {
                 Console.WriteLine(doc);
                 Console.WriteLine("------------------------------------------------");
             }



        }
        

    }
}
