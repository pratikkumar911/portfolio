const all = document.getElementById('all');
const loading = document.getElementById('loading');

let load = setTimeout(() => {
    all.style.display = 'block';
    loading.style.display = 'none';
}, 3000);