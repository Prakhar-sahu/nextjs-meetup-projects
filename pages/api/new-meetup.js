import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body;

      const client = await MongoClient.connect(
        'mongodb+srv://Prakhar:acchabete@cluster0.fy1jhcu.mongodb.net/?retryWrites=true&w=majority'
      );
      const db = client.db();
  
      const meetupsCollection = db.collection('meetups');
  
      const result = await meetupsCollection.insertOne(data);
  
      console.log(result);
  
      client.close();
  
      res.status(201).json({ message: 'Meetup inserted!' });
      
    } catch (error) {
      console.log(error);
      console.log('hi');
      
    }
   
  }
}

export default handler;