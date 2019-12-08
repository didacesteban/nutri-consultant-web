import { ApiRequest } from './apirequest.manager'
const apiRequest = new ApiRequest();

export class EmailRemote {
  sendContactEmail(email, subject, message, callback) {
      apiRequest.post('contact/', {email, subject, message}, (err, res) => {
        err ? callback(err) : callback(null, res);
      })
  };
}