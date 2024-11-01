async function searchSite(url) {
    try {
        const response = await fetch(url, { mode: 'no-cors' });
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const paragraphs = doc.body.querySelectorAll('p');
        return paragraphs;
    } catch (error) {
        console.error('Ошибка при парсинге страницы:', error);
        return [];
    }
}


document.addEventListener('DOMContentLoaded', async() => {
    const res = document.getElementById('res');
    const input = document.getElementById('input');
    const button = document.getElementById('button');
    
    button.addEventListener('click', async () => {
        let url1 = input.value;
        let list_p = await searchSite(url1);
        list_p.forEach((item) => {
            res.innerHTML += `<p> ${item.outerHTML} </p> `;
        });
    });


  });

