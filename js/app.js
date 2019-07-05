"use stict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function shift(string) {
		if (string === "") {
			return "Input must not be empty";
		} else if (/[a-zA-Z]/.test(string)) {
			return "Input must contain at least one alphabetical character";
		} else {
			let newString = "";

			for (let i = 0; i < string.length; i++) {
				if (string.charCodeAt(i) > 64 && string.charCodeAt(i) < 78) {
					newString = newString + String.fromCharCode(string.charCodeAt(i) + 13);
				} else if (string.charCodeAt(i) > 77 && string.charCodeAt(i) < 91) {
					newString = newString + String.fromCharCode(string.charCodeAt(i) - 13);
				} else {
					newString = newString + string[i];
				}
			}

			return newString;
		}
	}

	function toggle(chevron) {
		let task = document.getElementById("task");

		if (Array.from(chevron.classList).indexOf("fa-chevron-up") === -1) {
			chevron.classList.remove("fa-chevron-down");
			chevron.classList.add("fa-chevron-up");

			task.classList.remove("hidden");
			task.classList.add("visible");
		} else {
			chevron.classList.remove("fa-chevron-up");
			chevron.classList.add("fa-chevron-down");

			task.classList.remove("visible");
			task.classList.add("hidden");
		}
	}

	let chevron = document.getElementById("chevron");
	chevron.addEventListener("click", function(event) {
		toggle(this);
	});

	chevron.addEventListener("keydown", function(event) {
		if (event.keyCode === 13 || event.keyCode === 32) {
			toggle(this);
		}
	});

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		shift(this.children[0].value);
	});
};