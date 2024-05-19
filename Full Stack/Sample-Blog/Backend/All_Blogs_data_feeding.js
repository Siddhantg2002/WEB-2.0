const crypto = require('crypto');
const fileData = require("./data/data_saving");
const AllBlogs = require("./models/All_Blogs_schema");
const HashStore = require("./models/HashStore_schema"); // Ensure you have this schema defined

async function generateHash(data) {
  return crypto.createHash('sha256').update(JSON.stringify(data)).digest('hex');
}

async function All_Blogs_feeding() {
  const blogsData = [
    {
      id: 1,
      title: "Process Documents Using Artificial Intelligence For RPA Bots",
      description: "Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …",
      body: fileData.file1,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "../../../images/all-blogs/1.jpg",
    },
    {
      id: 2,
      title: "Implement Dark Mode in Your Android App",
      description: "Are you curious to implement the Dark Mode in Android Application? Here’s the perfect guideline to attain the Dark Mode in Android Application. Don’t waste your time; just implement and enjoy Dark Mode.",
      body: fileData.file2,
      author: "Shambavi Gupta",
      date: "10th June, 2020",
      image: "../../../images/all-blogs/2.jpeg",
    },
    {
      id: 3,
      title: "Why is Mental Health one of the Important Issues to Address?",
      description: "Mental health was one of the under spoken topics before this lockdown. After sitting at home for about six months I realized that this is one of the important issues to address not only in the work sector but also in daily living.",
      body: fileData.file3,
      author: "Priyanka Mishra",
      date: "15th July, 2023",
      image: "../../../images/all-blogs/3.webp",
    },
    {
      id: 4,
      title: "Pattern Matching In Elixir",
      description: "Pattern matching is a great way to write idiomatic functional code. It’s a powerful tenant of functional programming that makes it a joy to write conditional statements. If you don’t want your code to be peppered with deeply nested statements or multiple variations of similar business logic, use pattern matching!",
      body: fileData.file4,
      author: "Priyanka Mishra",
      date: "20th Feb, 2024",
      image: "../../../images/all-blogs/4.jpeg",
    },
    {
      id: 5,
      title: "3 things you should change during your focus group interview",
      description: "We changed three things about our feedback sessions, and it changed everything about running customer feedback sessions.",
      body: fileData.file5,
      author: "Arpan Das",
      date: "31st Nov, 2022",
      image: "../../../images/all-blogs/5.jpeg",
    },
    {
      id: 6,
      title: "Using Webpack with React Typescript",
      description: "Ever wondered if there is a way to just tie up all your code into one single module for easy usage. If so, in this article I will show you how to bundle all your code into a single javascript module that you can easily use in any other project.",
      body: fileData.file5,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "../../../images/all-blogs/6.jpeg",
    },
    {
      id: 7,
      title: "Process Documents Using Artificial Intelligence For RPA Bots",
      description: "Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …",
      body: fileData.file1,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "../../../images/all-blogs/7.jpeg",
    },
    {
      id: 8,
      title: "Implement Dark Mode in Your Android App",
      description: "Are you curious to implement the Dark Mode in Android Application? Here’s the perfect guideline to attain the Dark Mode in Android Application. Don’t waste your time; just implement and enjoy Dark Mode.",
      body: fileData.file2,
      author: "Shambavi Gupta",
      date: "10th June, 2020",
      image: "../../../images/all-blogs/8.webp",
    },
    {
      id: 9,
      title: "Why is Mental Health one of the Important Issues to Address?",
      description: "Mental health was one of the under spoken topics before this lockdown. After sitting at home for about six months I realized that this is one of the important issues to address not only in the work sector but also in daily living.",
      body: fileData.file3,
      author: "Priyanka Mishra",
      date: "15th July, 2023",
      image: "../../../images/all-blogs/9.webp",
    },
    {
      id: 10,
      title: "Pattern Matching In Elixir",
      description: "Pattern matching is a great way to write idiomatic functional code. It’s a powerful tenant of functional programming that makes it a joy to write conditional statements. If you don’t want your code to be peppered with deeply nested statements or multiple variations of similar business logic, use pattern matching!",
      body: fileData.file4,
      author: "Priyanka Mishra",
      date: "20th Feb, 2024",
      image: "../../../images/all-blogs/10.webp",
    },
    {
      id: 11,
      title: "3 things you should change during your focus group interview",
      description: "We changed three things about our feedback sessions, and it changed everything about running customer feedback sessions.",
      body: fileData.file5,
      author: "Arpan Das",
      date: "31st Nov, 2022",
      image: "../../../images/all-blogs/11.webp",
    },
    {
      id: 12,
      title: "Using Webpack with React Typescript",
      description: "Ever wondered if there is a way to just tie up all your code into one single module for easy usage. If so, in this article I will show you how to bundle all your code into a single javascript module that you can easily use in any other project.",
      body: fileData.file5,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "../../../images/all-blogs/12.webp",
    },
    {
      id: 13,
      title: "Process Documents Using Artificial Intelligence For RPA Bots",
      description: "Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …",
      body: fileData.file1,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "../../../images/all-blogs/13.jpeg",
    },
    {
      id: 14,
      title: "Implement Dark Mode in Your Android App",
      description: "Are you curious to implement the Dark Mode in Android Application? Here’s the perfect guideline to attain the Dark Mode in Android Application. Don’t waste your time; just implement and enjoy Dark Mode.",
      body: fileData.file2,
      author: "Shambavi Gupta",
      date: "10th June, 2020",
      image: "../../../images/all-blogs/14.jpeg",
    },
    {
      id: 15,
      title: "Why is Mental Health one of the Important Issues to Address?",
      description: "Mental health was one of the under spoken topics before this lockdown. After sitting at home for about six months I realized that this is one of the important issues to address not only in the work sector but also in daily living.",
      body: fileData.file3,
      author: "Priyanka Mishra",
      date: "15th July, 2023",
      image: "../../../images/all-blogs/15.webp",
    },
    {
      id: 16,
      title: "Pattern Matching In Elixir",
      description: "Pattern matching is a great way to write idiomatic functional code. It’s a powerful tenant of functional programming that makes it a joy to write conditional statements. If you don’t want your code to be peppered with deeply nested statements or multiple variations of similar business logic, use pattern matching!",
      body: fileData.file4,
      author: "Priyanka Mishra",
      date: "20th Feb, 2024",
      image: "../../../images/all-blogs/16.jpeg",
    },
    {
      id: 17,
      title: "3 things you should change during your focus group interview",
      description: "We changed three things about our feedback sessions, and it changed everything about running customer feedback sessions.",
      body: fileData.file5,
      author: "Arpan Das",
      date: "31st Nov, 2022",
      image: "../../../images/all-blogs/17.jpeg",
    },
    {
      id: 18,
      title: "Using Webpack with React Typescript",
      description: "Ever wondered if there is a way to just tie up all your code into one single module for easy usage. If so, in this article I will show you how to bundle all your code into a single javascript module that you can easily use in any other project.",
      body: fileData.file5,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "../../../images/all-blogs/18.webp",
    },
    {
      id: 19,
      title: "Process Documents Using Artificial Intelligence For RPA Bots",
      description: "Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …",
      body: fileData.file1,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "../../../images/all-blogs/19.jpeg",
    },
    {
      id: 20,
      title: "Implement Dark Mode in Your Android App",
      description: "Are you curious to implement the Dark Mode in Android Application? Here’s the perfect guideline to attain the Dark Mode in Android Application. Don’t waste your time; just implement and enjoy Dark Mode.",
      body: fileData.file2,
      author: "Shambavi Gupta",
      date: "10th June, 2020",
      image: "../../../images/all-blogs/20.jpeg",
    },
    {
      id: 21,
      title: "Why is Mental Health one of the Important Issues to Address?",
      description: "Mental health was one of the under spoken topics before this lockdown. After sitting at home for about six months I realized that this is one of the important issues to address not only in the work sector but also in daily living.",
      body: fileData.file3,
      author: "Priyanka Mishra",
      date: "15th July, 2023",
      image: "../../../images/all-blogs/21.jpeg",
    },
    {
      id: 22,
      title: "Pattern Matching In Elixir",
      description: "Pattern matching is a great way to write idiomatic functional code. It’s a powerful tenant of functional programming that makes it a joy to write conditional statements. If you don’t want your code to be peppered with deeply nested statements or multiple variations of similar business logic, use pattern matching!",
      body: fileData.file4,
      author: "Priyanka Mishra",
      date: "20th Feb, 2024",
      image: "../../../images/all-blogs/22.webp",
    },
    {
      id: 23,
      title: "3 things you should change during your focus group interview",
      description: "We changed three things about our feedback sessions, and it changed everything about running customer feedback sessions.",
      body: fileData.file5,
      author: "Arpan Das",
      date: "31st Nov, 2022",
      image: "../../../images/all-blogs/23.jpeg",
    },
    {
      id: 24,
      title: "Using Webpack with React Typescript",
      description: "Ever wondered if there is a way to just tie up all your code into one single module for easy usage. If so, in this article I will show you how to bundle all your code into a single javascript module that you can easily use in any other project.",
      body: fileData.file5,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "../../../images/all-blogs/24.jpeg",
    },
    {
      id: 25,
      title: "Process Documents Using Artificial Intelligence For RPA Bots",
      description: "Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …",
      body: fileData.file1,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "../../../images/all-blogs/25.webp",
    },
    {
      id: 26,
      title: "Implement Dark Mode in Your Android App",
      description: "Are you curious to implement the Dark Mode in Android Application? Here’s the perfect guideline to attain the Dark Mode in Android Application. Don’t waste your time; just implement and enjoy Dark Mode.",
      body: fileData.file2,
      author: "Shambavi Gupta",
      date: "10th June, 2020",
      image: "../../../images/all-blogs/26.webp",
    },
    {
      id: 27,
      title: "Why is Mental Health one of the Important Issues to Address?",
      description: "Mental health was one of the under spoken topics before this lockdown. After sitting at home for about six months I realized that this is one of the important issues to address not only in the work sector but also in daily living.",
      body: fileData.file3,
      author: "Priyanka Mishra",
      date: "15th July, 2023",
      image: "../../../images/all-blogs/27.jpeg",
    },
    {
      id: 28,
      title: "Pattern Matching In Elixir",
      description: "Pattern matching is a great way to write idiomatic functional code. It’s a powerful tenant of functional programming that makes it a joy to write conditional statements. If you don’t want your code to be peppered with deeply nested statements or multiple variations of similar business logic, use pattern matching!",
      body: fileData.file4,
      author: "Priyanka Mishra",
      date: "20th Feb, 2024",
      image: "../../../images/all-blogs/28.jpg",
    },
    {
      id: 29,
      title: "3 things you should change during your focus group interview",
      description: "We changed three things about our feedback sessions, and it changed everything about running customer feedback sessions.",
      body: fileData.file5,
      author: "Arpan Das",
      date: "31st Nov, 2022",
      image: "../../../images/all-blogs/29.jpeg",
    },
    {
      id: 30,
      title: "Using Webpack with React Typescript",
      description: "Ever wondered if there is a way to just tie up all your code into one single module for easy usage. If so, in this article I will show you how to bundle all your code into a single javascript module that you can easily use in any other project.",
      body: fileData.file5,
      author: "Siddhant Gupta",
      date: "20th Jan, 2024",
      image: "../../../images/all-blogs/30.jpeg",
    },
  ];

  const newHash = await generateHash(blogsData);

  try {
    const existingHashDoc = await HashStore.findOne({ name: 'allBlogsHash' });
    if (existingHashDoc && existingHashDoc.hash === newHash) {
      console.log('All Blogs Data has not changed. No need to insert.');
      return;
    }

    if (existingHashDoc) {
      await AllBlogs.deleteMany({});
      console.log('All Blogs Old data deleted.');
    }

    await AllBlogs.insertMany(blogsData);
    console.log('All Blogs data inserted.');

    if (existingHashDoc) {
      existingHashDoc.hash = newHash;
      await existingHashDoc.save();
    } else {
      await HashStore.create({ name: 'allBlogsHash', hash: newHash });
    }

    console.log('Hash updated.');

  } catch (error) {
    console.log(error.message);
  }
}

module.exports = All_Blogs_feeding;
