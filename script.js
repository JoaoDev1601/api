const searchBar = document.getElementById('searchBar');
let mcuProj = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredProj = mcuProj.filter((proj) => {
        return (
            proj.titulo.toLowerCase().includes(searchString) ||
            proj.data.toLowerCase().includes(searchString)
        );
    });
    displayProj(filteredProj);
});

const loadProj = async () => {
    try {
        const res = await fetch('https://raw.githubusercontent.com/JoaoDev1601/api/main/mcu-ordem-crono.json');
        mcuProj = await res.json();
        displayProj(mcuProj);
    } catch (err) {
        console.error(err);
    }
};

const displayProj = (proj) => {
    const htmlString = proj
        .map((proj) => {
            return `
            <li class="proj">
                <h2>${proj.titulo}</h2>
                <p>House: ${proj.data}</p>
                <img src="${proj.poster}"></img>
            </li>
        `;
        })
        .join('');
    projList.innerHTML = htmlString;
};

loadProj();
