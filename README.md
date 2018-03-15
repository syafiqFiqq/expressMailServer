# Express Mail Server

Express server to send Mail.

## Installation

$ git clone https://github.com/syafiqFiqq/expressMailServer.git

`$ npm install`

`edit transporter.js (edit user & pass)`

```diff
auth: {
    user: "emailaddress@gmail.com",
    pass: "emailpassword"
  }
```

`$ node index.js`

## Usage

Then, load http://localhost:3000/ in a browser to see the output.

Example query to send an email

`localhost:3000/sendmail?from=sender@gmail.com&to=recepient@gmail.com&subject=ExpressMailServer&text=HelloWorld`
