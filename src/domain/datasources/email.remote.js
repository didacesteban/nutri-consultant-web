import { ApiRequest } from './apirequest.manager'
const apiRequest = new ApiRequest();

export class EmailRemote {
  sendContactEmail(email, callback) {
      apiRequest.post('contact/', {email}, (err, res) => {
        err ? callback(err) : callback(null, res);
      })
  };
}