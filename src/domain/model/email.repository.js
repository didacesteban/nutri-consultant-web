export class EmailRepository {
    constructor(remote) {
        if (!remote) throw new Error(`${this.constructor.name} class error Dependency Injection!`);
        this.remote = remote;
    }
    sendContactEmail(email, callback) {
        this.remote.sendContactEmail(email, callback);
    };
}