export class SendContactEmail {
    constructor(repository) {
        if (!repository) throw new Error(`${this.constructor.name} class error Dependency Injection!`);
        this.repository = repository;
    }
    execute(email) {
      return new Promise((resolve, reject) => {
        this.repository.sendContactEmail(email, (err, res) => {
            err ? reject(err) : resolve(res);
        });
      });
    }
}