var headers = { "X-Api-Key": "uBVE4JhZ4lYt/ZXJkCVBNg==oQO8iM6IoXsE26RZ" };

const rdtitle = document.querySelector(".title");
const rdqstn = document.querySelector(".qstn");
const rdans = document.querySelector(".ans");
const rdbtn = document.querySelector(".rdBtn");
const rdbtn1 = document.querySelector(".rdBtn1");
let ans = "";

async function riddle() {
  let rdurl = "https://api.api-ninjas.com/v1/riddles";
  let riddles = "";
  rdtitle.style.display = "none";
  rdbtn1.style.display = "none";
  rdans.style.display = "none";
  while (riddles === "") {
    rdqstn.innerHTML = "Loading....";
    rdbtn.style.display = "none";
    riddles = await fetch(rdurl, { headers: headers }).then((response) =>
      response.json()
    );
    ans = riddles;
    rdtitle.style.display = "inline";
    rdbtn.style.display = "block";
  }
  rdtitle.innerHTML = riddles[0].title;
  rdqstn.innerHTML = riddles[0].question;
}

function getAns() {
  rdans.style.display = "inline";
  rdans.innerHTML = ans[0].answer;
  rdbtn1.style.display = "block";
}

const fcData = document.querySelector(".fact");
const fcBtn = document.querySelector(".fcBtn");

async function facts() {
  let fcurl = "https://api.api-ninjas.com/v1/facts?limit=1";

  let fact = "";
  while (fact === "") {
    fcData.innerHTML = "Loading....";
    fcBtn.style.display = "none";
    fact = await fetch(fcurl, { headers: headers }).then((response) =>
      response.json()
    );
    console.log(fact);
    fcData.innerHTML = fact[0].fact;
    fcBtn.style.display = "block";
  }
}

const cntry1 = document.getElementById("country1");
const inp1 = document.getElementById("cn1Val");
const cntry2 = document.getElementById("country2");
const inp2 = document.getElementById("cn2Val");

async function currency() {
  const cnurl = `https://api.api-ninjas.com/v1/convertcurrency?have=${cntry1.value}&want=${cntry2.value}&amount=${inp1.value}`;
  let cnv = await fetch(cnurl, { headers: headers }).then((response) =>
    response.json()
  );
  console.log(cnv);
  if (cnv.new_amount != null) {
    inp2.value = cnv.new_amount;
  } else {
    inp2.value = "Not Available";
  }
}

const pswdval = document.querySelector(".pswdval");
const pswdans = document.querySelector(".pswdans");

async function password() {
  if (pswdval.value === "") {
    pswdans.innerHTML = "Enter the length first !!!";
  } else {
    const pdurl = `https://api.api-ninjas.com/v1/passwordgenerator?length=${pswdval.value}`;
    pswdans.innerHTML = "Loading...!!!";
    let pass = await fetch(pdurl, { headers: headers }).then((response) =>
      response.json()
    );
    pswdans.innerHTML = pass.random_password;
    console.log(pass);
  }
}

const qtcat = document.getElementById("qtcat");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
async function quotes() {
  let qt = "";
  let qturl = `https://api.api-ninjas.com/v1/quotes?category=${qtcat.value}`;

  if (qtcat.value === "") {
    // quote.style.fontFamily =
    //   "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
    quote.innerHTML = "Select category first";
  } else {
    while (qt === "") {
      quote.innerHTML = "Loading...";
      author.innerHTML = "";
      qt = await fetch(qturl, { headers: headers }).then((response) =>
        response.json()
      );
      console.log(qt);
      quote.style.fontFamily = "cursive,sans-serif";
      quote.innerHTML = `"${qt[0].quote}"`;
      author.innerHTML = `- ${qt[0].author}`;
    }
  }
}
