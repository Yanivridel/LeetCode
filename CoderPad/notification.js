
class EventEmitter {
    constructor() {
        this.events = {};
    }

    subscribe(event, listener) {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(listener);
        return () => this.unsubscribe(event, listener);
    }

    unsubscribe(event, listener) {
        if (!this.events[event]) return;
        this.events[event] = this.events[event].filter(fn => fn !== listener);
    }

    publish(event, data) {
        if (!this.events[event]) return;
        this.events[event].forEach(listener => listener(data));
    }
}

const emitter = new EventEmitter();

// Users subscribe to their own "@mentions"
const createUser = (username) => {
    emitter.subscribe(`mention:${username}`, (msg) => {
        console.log(`🔔 [${username}] You were mentioned in: "${msg}"`);
    });
};

// Simulate a user writing a post with @mentions
const postMessage = (author, message) => {
    console.log(`✍️ [${author}] posted: ${message}`);

    const mentions = [...message.matchAll(/@(\w+)/g)].map(m => m[1]);

    // Notify each mentioned user
    mentions.forEach(username => {
        emitter.publish(`mention:${username}`, message);
    });
};


// TESTING
createUser('alice');
createUser('bob');
createUser('carol');

postMessage('dave', 'Hello @alice and @bob! Have you seen what @carol posted?');

// Output:
// ✍️ [dave] posted: Hello @alice and @bob! Have you seen what @carol posted?
// 🔔 [alice] You were mentioned in: "Hello @alice and @bob! Have you seen what @carol posted?"
// 🔔 [bob] You were mentioned in: "Hello @alice and @bob! Have you seen what @carol posted?"
// 🔔 [carol] You were mentioned in: "Hello @alice and @bob! Have you seen what @carol posted?"
