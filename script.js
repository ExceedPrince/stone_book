function pageLoad () {

	//1. JS - querySelectorAll után az adott elemcsoportra nem lehet .style -t hívni, mert az egy tömböt hoz létre,
	//ezért azon a tömbön végig kell menni for ciklussal, és csak utána lehet a tömb indexelemeire használni .style -t

	//2. JS - veszettül figyelni kell a definiálások és meghívások sorrendjére és az elemekre, hogy mi lokális és mi van globális blokkban

	//3. For in ciklus és a For of ciklust, nem illik összekeverni 

	//HTML
	//1. Nav Bar legpraktikusabb elkészítési módja <div><a href="...">...</a><a href="...">...</a></div>

	//2. Head-ben történő hivatkozások sorrendje fontos

	//CSS/SCSS
	//1. több türelem a Nav Bar elkészítéséhez (Bootstrap-ban mennyivel gyorsabb lenne :D)

	//2. nem használom ki 100%-ban az SCSS lehetőségeit (kevés a variables, @mixin-@include), csak a nestinget

	//3. ha nem találom el az jó selectort, majd az Inspect megmondja nekem

	//JS
	//1. figyelni arra, hogy minek lehet adni .style / .classList -et adni, és minek nem és miért

	//2. ha valami nem úgy működik, ahogy szeretném, vegyük elő a Source panelt és debug-oljak

	//3. megjegyzetelni és értelmezni minden valaha felmerült beépített JS függvényt, amiről eddig nem tudtam

	//4. rá kell szánni magam a true és a false használatára


	
	//HTML teendők
	let htmlNotes = [];

	htmlNotes.push({
		tag: "div",
		content: `
			1. Nav Bar legpraktikusabb elkészítési módja:
		`,
	});

	htmlNotes.push({
		tag: "code",
		content: `
		<div><a href="#">< div > < a_link 1 > </a><a href="#"> < a_link 2 > < /div ></a></div>
		`,
	});

	htmlNotes.push({
		tag: "div",
		content: `
			2. Head-ben történő hivatkozások sorrendje fontos
		`,
	});

	//CSS teendők
	let cssNotes = [];

	cssNotes.push({
		tag: "div",
		content: `
			1. Több türelem a Nav Bar elkészítéséhez (Bootstrap-ben mennyivel gyorsabb lenne :D)
		`,
	});

	cssNotes.push({
		tag: "div",
		content: `
			2. Nem használom ki 100%-ban az SCSS lehetőségeit (kevés a <code>$variables</code>, <code>@mixin</code>-<code>@include</code>), csak a nestinget
		`,
	});

	cssNotes.push({
		tag: "div",
		content: `
			3. Ha nem találom el a jó selectort, majd az Inspect megmondja nekem
		`,
	});

	//JS teendők
	let jsNotes = [];

	jsNotes.push({
		tag: "div",
		content: `
			1. Figyelni arra, hogy minek lehet adni <code>.style</code> vagy <code>.classList</code> -et, és minek nem és miért
		`,
	});

	jsNotes.push({
		tag: "div",
		content: `
			2. Ha valami nem úgy működik, mint ahogy szeretném, vegyem elő a Source panelt és debug-oljak
		`,
	});

	jsNotes.push({
		tag: "div",
		content: `
			3. Lejegyzetelni és értelmezni minden valaha használt beépített JS függvényt, amiről eddig nem tudtam
		`,
	});

	jsNotes.push({
		tag: "div",
		content: `
			4. Rá kell szánni magam a <code>true</code> és a <code>false</code> használatára
		`,
	});

	//Oldalak felépítése - főoldal

	let rootE = document.getElementById("root");

	function mainPage () {
		rootE.innerHTML = "";
		rootE.classList.remove("bigFadeOut");
		rootE.classList.add("bigFadeIn");
		rootE.insertAdjacentHTML("afterbegin", `
			<h1>Aranyszabályaim</h1>
			<div id="colums">
				<img src="./img/html.svg.png" id="htmlPic">
				<img src="./img/CSS3.svg.png" id="cssPic">
				<img src="./img/JavaScript.png" id="jsPic">
			</div>
		`);

		let htmlPic = document.getElementById("htmlPic");
		let cssPic = document.getElementById("cssPic");
		let jsPic = document.getElementById("jsPic");

		htmlPic.addEventListener("click", function () {
			rootE.classList.remove("bigFadeIn");
			rootE.classList.add("bigFadeOut");
		});
		htmlPic.addEventListener("click", function () {
			setTimeout(function () { htmlList() }, 1600);
		});

		cssPic.addEventListener("click", function () {
			rootE.classList.remove("bigFadeIn");
			rootE.classList.add("bigFadeOut");
		});
		cssPic.addEventListener("click", function () {
			setTimeout(function () { cssList() }, 1600);
		});
		jsPic.addEventListener("click", function () {
			rootE.classList.remove("bigFadeIn");
			rootE.classList.add("bigFadeOut");
		});
		jsPic.addEventListener("click", function () {
			setTimeout(function () { jsList() }, 1600);
		});

	};

	//HTML lista

	function htmlList() {
		rootE.innerHTML = "";
		rootE.classList.remove("bigFadeOut");
		rootE.classList.add("bigFadeIn");
		rootE.insertAdjacentHTML("afterbegin", `
			<div class="logo">
				<img src="./img/html.svg.png" id="htmlPic">
			</div>
			<div id="htmlRules" class="rules"></div>
			<div id="btns">
				<button type="button" id="backBtn">Vissza a főoldalra</button>
				<button type="button" id="cssBtn">CSS lista</button>
				<button type="button" id="jsBtn">Javascript lista</button>
			</div>
		`);

		let htmlRules = document.getElementById("htmlRules");

		for (note of htmlNotes){
			htmlRules.insertAdjacentHTML("beforeend", `
				<${note.tag}>${note.content}</${note.tag}>
			`);
			console.log(note.tag)
		};

		let backBtn = document.getElementById("backBtn");
		let htmlBtn = document.getElementById("htmlBtn");
		let cssBtn = document.getElementById("cssBtn");
		let jsBtn = document.getElementById("jsBtn");
	
		backBtn.addEventListener("click", function () {
			rootE.classList.remove("bigFadeIn");
			rootE.classList.add("bigFadeOut");
		});
		backBtn.addEventListener("click", function () {
			setTimeout(function () { mainPage() }, 1600);
		});

		cssBtn.addEventListener("click", function () {
			rootE.classList.remove("bigFadeIn");
			rootE.classList.add("bigFadeOut");
		});
		cssBtn.addEventListener("click", function () {
			setTimeout(function () { cssList() }, 1600);
		});

		jsBtn.addEventListener("click", function () {
			rootE.classList.remove("bigFadeIn");
			rootE.classList.add("bigFadeOut");
		});
		jsBtn.addEventListener("click", function () {
			setTimeout(function () { jsList() }, 1600);
		});
	};

	//CSS lista

	function cssList () {
		rootE.innerHTML = "";
		rootE.classList.remove("bigFadeOut");
		rootE.classList.add("bigFadeIn");
		rootE.insertAdjacentHTML("afterbegin", `
			<div class="logo">
				<img src="./img/CSS3.svg.png" id="cssPic">
			</div>
			<div id="cssRules" class="rules"></div>
			<div id="btns">
				<button type="button" id="backBtn">Vissza a főoldalra</button>
				<button type="button" id="htmlBtn">HTML lista</button>
				<button type="button" id="jsBtn">Javascript lista</button>
			</div>
		`);

		let cssRules = document.getElementById("cssRules");

		for (note of cssNotes){
			cssRules.insertAdjacentHTML("beforeend", `
				<${note.tag}>${note.content}</${note.tag}>
			`);
			console.log(note.tag)
		};

		let backBtn = document.getElementById("backBtn");
		let htmlBtn = document.getElementById("htmlBtn");
		let cssBtn = document.getElementById("cssBtn");
		let jsBtn = document.getElementById("jsBtn");
	
		backBtn.addEventListener("click", function () {
			rootE.classList.remove("bigFadeIn");
			rootE.classList.add("bigFadeOut");
		});
		backBtn.addEventListener("click", function () {
			setTimeout(function () { mainPage() }, 1600);
		});

		htmlBtn.addEventListener("click", function () {
			rootE.classList.remove("bigFadeIn");
			rootE.classList.add("bigFadeOut");
		});
		htmlBtn.addEventListener("click", function () {
			setTimeout(function () { htmlList() }, 1600);
		});

		jsBtn.addEventListener("click", function () {
			rootE.classList.remove("bigFadeIn");
			rootE.classList.add("bigFadeOut");
		});
		jsBtn.addEventListener("click", function () {
			setTimeout(function () { jsList() }, 1600);
		});
	};

	//JS lista

	function jsList () {
		rootE.innerHTML = "";
		rootE.classList.remove("bigFadeOut");
		rootE.classList.add("bigFadeIn");
		rootE.insertAdjacentHTML("afterbegin", `
			<div class="logo">
				<img src="./img/JavaScript.png" id="jsPic">
			</div>
			<div id="jsRules" class="rules"></div>
			<div id="btns">
				<button type="button" id="backBtn">Vissza a főoldalra</button>
				<button type="button" id="htmlBtn">HTML lista</button>
				<button type="button" id="cssBtn">CSS lista</button>
			</div>
		`);
	
		let jsRules = document.getElementById("jsRules");
	
		for (note of jsNotes){
			jsRules.insertAdjacentHTML("beforeend", `
				<${note.tag}>${note.content}</${note.tag}>
			`);
			console.log(note.tag)
		};
	
		let backBtn = document.getElementById("backBtn");
		let htmlBtn = document.getElementById("htmlBtn");
		let cssBtn = document.getElementById("cssBtn");
		let jsBtn = document.getElementById("jsBtn");
		
		backBtn.addEventListener("click", function () {
			rootE.classList.remove("bigFadeIn");
			rootE.classList.add("bigFadeOut");
		});
		backBtn.addEventListener("click", function () {
			setTimeout(function () { mainPage() }, 1600);
		});

		htmlBtn.addEventListener("click", function () {
			rootE.classList.remove("bigFadeIn");
			rootE.classList.add("bigFadeOut");
		});
		htmlBtn.addEventListener("click", function () {
			setTimeout(function () { htmlList() }, 1600);
		});

		cssBtn.addEventListener("click", function () {
			rootE.classList.remove("bigFadeIn");
			rootE.classList.add("bigFadeOut");
		});
		cssBtn.addEventListener("click", function () {
			setTimeout(function () { cssList() }, 1600);
		});
	};


	setTimeout(function () { mainPage() }, 500);



	








}

window.addEventListener("load", pageLoad);