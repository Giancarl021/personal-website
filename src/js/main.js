import '../sass/style.scss';
import terminal from './terminal';

async function init() {
    const $term = document.getElementById('terminal');
    const term = terminal($term);

    term.write('Xalabaias');
    term.subscribe(console.log);
}

document.addEventListener('DOMContentLoaded', init);