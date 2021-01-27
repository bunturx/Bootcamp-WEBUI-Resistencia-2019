class Controller
{
	constructor()
		{
			this.screenText = document.getElementById("screenText")
			this.nunregx = /0-9/gi;
			this.errorRegx = /Error/gi;
			this.calc = [];
			this.button =
			{
				"zero": document.getElementById("button0"),
				"one": document.getElementById("button1"),
				"two": document.getElementById("button2"),
				"three": document.getElementById("button3"),
				"four": document.getElementById("button4"),
				"five": document.getElementById("button5"),
				"six": document.getElementById("button6"),
				"seven": document.getElementById("button7"),
				"eight": document.getElementById("button8"),
				"nine": document.getElementById("button9"),
				"equal": document.getElementById("buttonEqual"),
				"plus": document.getElementById("buttonPlus"),
				"minus": document.getElementById("buttonMinus"),
				"multiply": document.getElementById("buttonMultiply"),
				"divide": document.getElementById("buttonDivide"),
				"remove": document.getElementById("buttonRemove")
			}
			this.button.zero.addEventListener("click", () => {this.calcPush("0"); this.screenText.innerText += "0"});
			this.button.one.addEventListener("click", () => {this.calcPush("1"); this.screenText.innerText += "1"});
			this.button.two.addEventListener("click", () => {this.calcPush("2"); this.screenText.innerText += "2"});
			this.button.three.addEventListener("click", () => {this.calcPush("3"); this.screenText.innerText += "3"});
			this.button.four.addEventListener("click", () => {this.calcPush("4"); this.screenText.innerText += "4"});
			this.button.five.addEventListener("click", () => {this.calcPush("5"); this.screenText.innerText += "5"});
			this.button.six.addEventListener("click", () => {this.calcPush("6"); this.screenText.innerText += "6"});
			this.button.seven.addEventListener("click", () => {this.calcPush("7"); this.screenText.innerText += "7"});
			this.button.eight.addEventListener("click", () => {this.calcPush("8"); this.screenText.innerText += "8"});
			this.button.nine.addEventListener("click", () => {this.calcPush("9"); this.screenText.innerText += "9"});
			this.button.plus.addEventListener("click", () => {this.calcPush("+"); this.screenText.innerText += "+"});
			this.button.minus.addEventListener("click", () => {this.calcPush("-"); this.screenText.innerText += "-"});
			this.button.divide.addEventListener("click", () => {this.calcPush("/"); this.screenText.innerText += "/"});
			this.button.multiply.addEventListener("click", () => {this.calcPush("*"); this.screenText.innerText += "*"});
			this.button.remove.addEventListener("click", this.remove.bind(this));
			this.button.equal.addEventListener("click", this.equal.bind(this));
		}
	remove()
		{
			if (this.screenText.innerText == "Error") 
				{
					this.screenText.innerText = "";
				}
			else
				{
					this.calc.pop();
					this.text = this.screenText.innerText;
					this.screenText.innerText = this.text.slice(0, -1);
				}
		}
	calcPush(valor)
		{
			if (this.screenText.innerText == "Error") {this.screenText.innerText = ""}
			this.calc.push(valor)
		}
	equal()
		{
			if (this.screenText.innerText == "" || this.screenText.innerText == "Error")
				{
					this.screenText.innerText = "Error";
				}
			else
				{
					this.numberSelector = true;
					this.operator = "";
					this.number1 = "";
					this.number2 = "";
					this.result = "";
					this.calc.forEach((item) => 
						{
							if (item.match(/[0-9]/ig))
								{
									if (this.numberSelector) 
										{
											this.number1 += item;
										}
									else
										{
											this.number2 += item;
											this.result = this.makeCalc(this.operator);
											this.number1 = this.result;
											this.number2 = "";
										}
								}
							else
								{
									this.operator = item;
									if (this.numberSelector) {this.numberSelector = !this.numberSelector;}
								}
						})
					this.screenText.innerText = this.result
					this.calc = [this.screenText.innerText]
					if (this.calc == "NaN" || this.calc == "undefined" || this.calc == "infinity")
						{
							this.screenText.innerText = "Error";
							this.calc = [];
						}
				}
			
		}
	makeCalc(operator)
		{
			if (this.number2)
				{
					switch (operator)
						{
							case "+":
								return parseFloat(this.number1) + parseFloat(this.number2);
								break;
							case "-":
								return parseFloat(this.number1) - parseFloat(this.number2);
								break;
							case "*":
								return parseFloat(this.number1) * parseFloat(this.number2);
								break;
							case "/":
								return parseFloat(this.number1) / parseFloat(this.number2);
								break;
						}
				}
		}
}

const controller = new Controller;