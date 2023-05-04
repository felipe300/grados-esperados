let btn = document.getElementById("btn")

function calculate (value) {
	return Math.floor(((value - 32) / 1.8) * 10) / 10
}

function temperatureConverter (valNum) {
	valNum = parseFloat(valNum)
	let response = document.getElementById("response")
	const promise = new Promise(function (resolve, reject) {
		setTimeout(() => {
			resolve(calculate(valNum))
		}, 3000)
	})

	promise
		.then(function (value) {
			response.innerHTML = `${value}°C`
		})
		.catch(err => console.log(err))
}

btn.addEventListener("click", (e) => {
	e.preventDefault()
	let temp = document.getElementById("temp")
	temperatureConverter(temp.value)
})
