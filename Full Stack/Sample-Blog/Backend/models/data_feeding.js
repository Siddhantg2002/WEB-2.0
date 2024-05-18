const fileData = require("../data/data_saving");
const Blogs = require("./schema");

async function feeding_blogs() {
  if(Blogs.find()){
    console.log("Blogs already exist");
    return
  }

  try {
    await Blogs.insertMany([
      {
        id: 1,
        title: "Learn React",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        body: fileData.file1,
        image:
          "../../../public/hall.jpg",
      },
      {
        id: 2,
        title: "Learn Next.js",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        body: fileData.file2,
        image:
        "../../../public/Luxury.jpg"
      },
      {
        id: 3,
        title: "Learn JavaScript",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        body: fileData.file3,
        image:
          "../../../public/yatch.jpg",
      },
      {
        id: 4,
        title: "Learn TypeScript",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        body: fileData.file4,
        image:
          "../../../public/gold.jpg",
      },
      {
        id: 5,
        title: "Learn HTML CSS ",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        body: fileData.file5,
        image:
          "/Users/siddhantgupta/Desktop/SID/Local Projects/WEB2.0/Full Stack/Sample-Blog/Backend/images/html&css.jpg",
      },
    ]);
  } catch (error) {
    console.log(error.message);
  }
}
// }

module.exports = feeding_blogs;
