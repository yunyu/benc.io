let articleLinks = ["http://waitbutwhy.com/2014/05/fermi-paradox.html",
    "http://www.freedomtomarry.org/pages/how-it-happened",
    "https://12factor.net/",
    "https://www.martincwiner.com/wp-content/uploads/2011/06/The-Last-Question-Isaac-Asimov.pdf",
    "https://www.vox.com/new-money/2016/12/9/13881712/move-government-to-midwest",
    "https://www.poetryfoundation.org/poems/46565/ozymandias",
    "https://www.nps.gov/stli/learn/historyculture/colossus.htm",
    "https://waitbutwhy.com/2015/11/the-cook-and-the-chef-musks-secret-sauce.html",
    "https://www.theatlantic.com/magazine/archive/2016/04/the-obama-doctrine/471525/"
]; // who needs config variables?

let link = document.getElementById("link");
link.href = articleLinks[Math.floor(Math.random() * articleLinks.length)];

console.log(link.href);


