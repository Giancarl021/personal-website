import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';
import { FitAddon } from 'xterm-addon-fit';
import { WebLinksAddon } from 'xterm-addon-web-links';

const addons = [
    new FitAddon(),
    new WebLinksAddon()
];

export default function (element) {
    const term = new Terminal();

    addons.forEach(addon => term.loadAddon(addon));

    term.open(element);

    addons[0].fit();

    async function write(data) {
        return new Promise(resolve => {
            term.write(data, resolve);
        })
    }

    function subscribe(callback) {
        term.onData(callback);
    }

    return {
        write,
        subscribe
    };
}