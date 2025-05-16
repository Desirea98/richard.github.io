const content_dir = 'contents/'
const config_file = 'config.yml'
const section_names = ['home', 'awards', 'experience', 'publications', 'project'];


window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    // Yaml
    fetch(content_dir + config_file)
        .then(response => response.text())
        .then(text => {
            const yml = jsyaml.load(text);
            Object.keys(yml).forEach(key => {
                try {
                    document.getElementById(key).innerHTML = yml[key];
                } catch {
                    console.log("Unknown id and value: " + key + "," + yml[key].toString())
                }

            })
        })
        .catch(error => console.log(error));


    // Marked
    marked.use({ mangle: false, headerIds: false })
    section_names.forEach((name, idx) => {
        fetch(content_dir + name + '.md')
            .then(response => response.text())
            .then(markdown => {
                const html = marked.parse(markdown);
                document.getElementById(name + '-md').innerHTML = html;
            }).then(() => {
                // MathJax
                MathJax.typeset();
            })
            .catch(error => console.log(error));
    })

    // 动态生成闪电线条
    (function () {
        const bg = document.getElementById('electric-bg');
        if (!bg) return;
        const count = 12; // 闪电数量
        for (let i = 0; i < count; i++) {
            const line = document.createElement('div');
            line.className = 'electric-line';
            line.style.left = Math.random() * 100 + 'vw';
            line.style.top = Math.random() * 80 + 'vh';
            line.style.height = (120 + Math.random() * 100) + 'px';
            line.style.animationDelay = (Math.random() * 1.2) + 's';
            bg.appendChild(line);
        }
    })();

    // 花瓣/粒子动画
    (function () {
        const petalBg = document.getElementById('petal-bg');
        if (!petalBg) return;
        const petalCount = 18;
        const petalColors = ['#f7b3da', '#b3e5fc', '#fff6b3', '#e1bee7', '#ffe0b2'];
        for (let i = 0; i < petalCount; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal-anim';
            const size = 18 + Math.random() * 18;
            petal.style.width = size + 'px';
            petal.style.height = (size * 0.7) + 'px';
            petal.style.background = petalColors[Math.floor(Math.random() * petalColors.length)];
            petal.style.opacity = 0.7 + Math.random() * 0.3;
            petal.style.left = Math.random() * 100 + 'vw';
            petal.style.top = (-10 - Math.random() * 10) + 'vh';
            petal.style.borderRadius = '50% 60% 50% 60%/60% 50% 60% 50%';
            petal.style.position = 'absolute';
            petal.style.zIndex = 0;
            petal.style.boxShadow = '0 2px 8px #fff8';
            petal.style.animation = `petalFall ${6 + Math.random() * 6}s linear infinite`;
            petal.style.animationDelay = (Math.random() * 6) + 's';
            petalBg.appendChild(petal);
        }
    })();

});
