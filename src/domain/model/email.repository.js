export class EmailRepository {
    constructor(remote) {
        if (!remote) throw new Error(`${this.constructor.name} class error Dependency Injection!`);
        this.remote = remote;
    }
    sendContactEmail(options, callback) {
        if (!options.email) throw new Error(`Empty email`);
        if (!options.subject) throw new Error(`Empty subject`);
        if (!options.message) throw new Error(`Empty message`);
        this.remote.sendContactEmail(options.email, options.subject, options.message, callback);
    };
}