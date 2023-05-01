// const express = require("express");
// const nodemailer = require("nodemailer");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// app.use(express.json());
// app.use(cors());

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com", //replace with your email provider
//   port: 587,
//   auth: {
//     user: "seniordevloper16@gmail.com",
//     pass: "jeblvzowcducjliw",
//   },
// });

// transporter.verify(function (error, success) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Server is ready to take our messages");
//   }
// });

// app.post("/send", (req, res, next) => {
//   var name = req.body.name;
//   var email = req.body.email;
//   var subject = req.body.subject;
//   var message = req.body.message;

//   var mail = {
//     from: `"${name}" <${email}>`,
//     to: "seniordevloper16@gmail.com",
//     subject: subject,
//     text: message,
//   };

//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.json({
//         status: "fail",
//       });
//     } else {
//       res.json({
//         status: "success",
//       });
//     }
//   });
// });

// app.listen(5000, () => {
//   console.log("Server started on port 5000");
// });





// const express = require('express');
// const mongoose = require('mongoose');
// require("dotenv").config();
// const content = require('./content/sharkData.json')


// // connect to MongoDB
// mongoose.connect('mongodb+srv://seniordevloper16:2000@cluster0.wgkr33o.mongodb.net/?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// // define schema for JSON data
// const mySchema = new mongoose.Schema({
//   _id: Number,
//   name: String,
//   description: String,
//   image: String
// });
// // create a model for the collection
// const MyModel = mongoose.model('MyCollection', mySchema);


// const start = async () => {
//   try {
//     // Add _id fields to the JSON data
//     const documents = content.map((item, index) => ({
//       _id: index + 1,
//       name: item.name,
//       description: item.description,
//       image: item.image
//     }));
//     await MyModel.create(documents);
//     console.log("success");
//   } catch (error) {
//     console.log(error);
//   }
// };


// start();





// const express = require('express');
// const bodyParser = require('body-parser');
// const exphbs = require('express-handlebars');
// const path = require('path');
// const nodemailer = require('nodemailer');

// const app = express();

// app.engine('handlebars', exphbs({
//   defaultLayout: 'main'
// }));

// // View engine setup

// app.set('view engine', 'handlebars');

// // Static folder
// app.use('/my-project-master-master', express.static(path.join(__dirname, 'public')));

// // Body Parser Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.render('contact');
// });

// app.post('/send', (req, res) => {
//   const output = `
//     <p>You have a new contact request</p>
//     <h3>Contact Details</h3>
//     <ul>
//       <li>Name: ${req.body.name}</li>

//       <li>Email: ${req.body.email}</li>

//     </ul>
//     <h3>Message</h3>
//     <p>${req.body.message}</p>
//   `;

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: 'mail.YOURDOMAIN.com',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//         user: 'YOUREMAIL', // generated ethereal user
//         pass: 'YOURPASSWORD'  // generated ethereal password
//     },
//     tls:{
//       rejectUnauthorized:false
//     }
//   });

//   // setup email data with unicode symbols
//   let mailOptions = {
//       from: '"Nodemailer Contact" <your@email.com>', // sender address
//       to: 'RECEIVEREMAILS', // list of receivers
//       subject: 'Node Contact Request', // Subject line
//       text: 'Hello world?', // plain text body
//       html: output // html body
//   };

//   // send mail with defined transport object
//   transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//           return console.log(error);
//       }
//       console.log('Message sent: %s', info.messageId);
//       console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

//       res.render('contact', {msg:'Email has been sent'});
//   });
//   });

// app.listen(4000, () => console.log('Server started...'));

const cors = require('cors');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(cors());

app.use(cors({
  origin: 'http://localhost:3000'
}));

mongoose.connect('mongodb+srv://seniordevloper16:2000@cluster0.wgkr33o.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Error connecting to MongoDB', err);
});

const sharkSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String
});

const mycollections = mongoose.model('mycollections', sharkSchema);



app.get('/sharks', (req, res) => {
  mycollections.find({})
    .then(sharks => {
      res.json(sharks);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Error fetching shark data');
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}); 