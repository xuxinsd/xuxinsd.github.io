async function loadPosts(){

    const response = await fetch("./posts/");
    const text = await response.text();

    const parser = new DOMParser();
    const html = parser.parseFromString(text,"text/html");

    const links = [...html.querySelectorAll("a")];

    let listHTML = "";

    links.forEach(link=>{
        const file = link.getAttribute("href");

        if(file.endsWith(".md")){

            const title = file.replace(".md","");

            listHTML += `
            <div style="background:white;padding:25px;margin:20px 0;border-radius:15px;box-shadow:0 6px 25px rgba(0,0,0,.05)">
                <h2>
                <a href="post.html?file=posts/${file}">
                ${title}
                </a>
                </h2>
            </div>
            `;
        }
    });

    document.getElementById("list").innerHTML = listHTML;
}

window.onload = loadPosts;