const AWS = require('aws-sdk')
const config = require('./config')

var queueUrl = config.SQS_QUEUE_URL;
var sqs = new AWS.SQS({
  region: 'us-west-2'
});

var params = {
  MessageBody: "Hi Harish",
  QueueUrl: queueUrl
};

sqs.sendMessage(params, (err, data) => {
  if (err) {
      console.log('error:', "failed to send message" + err);
  } else {
      console.log('data:', data.MessageId);
  }
});