/* BAUJAHR  SELECT */
const baujahr = document.querySelector("#baujahr");
const baujahrOptions = [];

for (let i = 1950; i <= 2023; i++) {
  baujahrOptions.push(i);
}

baujahrOptions.map((el) => {
  let opt = document.createElement("option");
  opt.value = el;
  opt.innerHTML = el;
  baujahr.append(opt);
});

/* WARMWASSER VERBRAUCH SELECT */
const warmwasser = document.querySelector("#warmwasserverbrauch");
const warmwasserOptions = [];

for (let i = 40; i <= 100; i++) {
  warmwasserOptions.push(i);
}

warmwasserOptions.map((el) => {
  let opt = document.createElement("option");
  opt.value = el;
  opt.innerHTML = el;
  warmwasser.append(opt);
});
