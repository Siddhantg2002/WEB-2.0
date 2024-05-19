const crypto = require('crypto');
const fileData = require("./data/data_saving");
const LatestBlogs = require("./models/Latest_Blogs_schema");
const HashStore = require("./models/HashStore_schema"); 

async function generateHash(data) {
  return crypto.createHash('sha256').update(JSON.stringify(data)).digest('hex');
}

async function Latest_Blogs_feeding() {
  const blogsData = [
    {
      id: 1,
      title: "Learn React",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      body: fileData.file1,
      image: "../../../images/home/hall.jpg",
    },
    {
      id: 2,
      title: "Learn Next.js",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      body: fileData.file2,
      image: "../../../images/home/Luxury.jpg"
    },
    {
      id: 3,
      title: "Learn JavaScript",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      body: fileData.file3,
      image: "../../../images/home/yatch.jpg",
    },
    {
      id: 4,
      title: "Learn TypeScript",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      body: fileData.file4,
      image: "../../../images/home/gold.jpg",
    },
  ];

  const newHash = await generateHash(blogsData);

  try {
    const existingHashDoc = await HashStore.findOne({ name: 'latestBlogsHash' });
    if (existingHashDoc && existingHashDoc.hash === newHash) {
      console.log('Latest Blog has not changed. No need to insert.');
      return;
    }

    if (existingHashDoc) {
      await LatestBlogs.deleteMany({});
      console.log('Latest Blog data deleted.');
    }

    await LatestBlogs.insertMany(blogsData);
    console.log('Latest Blog inserted.');

    if (existingHashDoc) {
      existingHashDoc.hash = newHash;
      await existingHashDoc.save();
    } else {
      await HashStore.create({ name: 'latestBlogsHash', hash: newHash });
    }

    console.log('Hash updated.');

  } catch (error) {
    console.log(error.message);
  }
}

module.exports = Latest_Blogs_feeding;
