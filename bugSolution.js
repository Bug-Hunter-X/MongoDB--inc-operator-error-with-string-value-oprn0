```javascript
// Correct usage of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({"_id": 1}, {"$inc": {"field": 1}});
//Or, if the field might not exist yet, use $setOnInsert
db.collection('myCollection').updateOne({"_id": 1}, {"$inc": {"field": 1}, "$setOnInsert": {"field": 0}});
```