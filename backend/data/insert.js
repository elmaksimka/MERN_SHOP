const connectDB = require('../config/db');

const insertData = async () => {
    let data = await connectDB();
    let result = await data.insert(
        [
           {img:"https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/article4221.jpg", name: "women's"} 
        ]
    )

    if (result.acknowledged)
    {
        console.warn("data is inserted")
    }
}

insertData();