Array.prototype.swap = function (x,y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
}

class Controller
	{
		constructor()
			{
				this.numbers = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15",0];
				this.positions = [];
				this.selected = false;
				this.timeText = document.getElementById("timeText");
				this.movesText = document.getElementById("movesText");
				this.time = 0;
				this.moves = 0;
				this.score = 0;
				this.win = false;
				this.generado = false;
			}
		randomSort()
			{
				this.random = this.numbers.sort(() => Math.random() - 1);
				this.random = this.random.sort(() => Math.random() - 0.8);
				this.random = this.random.sort(() => Math.random() - 0.6);
				this.random = this.random.sort(() => Math.random() - 0.4);
				this.random = this.random.sort(() => Math.random() - 0.2);
				this.random = this.random.sort(() => Math.random() - 0);
			}
		createBoxes()
			{
				this.random.map((item, index,i) => 
					{
						this.box = new Element(item,index);
						this.positions.push(this.box);
					});
				this.reload()
			}
		selectElementController(box)
			{
				if (this.selected)
					{
						this.selectedBox.element.style.opacity = '0.8';
						this.selectedBox = box;
						this.selectedBox.element.style.opacity = '1';
					}
				else
					{
						setInterval(this.timing.bind(this), 1000);
						this.selectedBox = box;
						this.selectedBox.element.style.opacity = '1';
						this.selected = true;
					}
				
			}
		reload()
		{
			document.getElementById("container").innerHTML = "";
			//debugger
			this.positions.forEach((item) => {
				item.show();
				if (this.positions.indexOf(item) == parseInt(item.number) - 1 && this.generado == false) 
				{
					item.element.style.color = 'green';
					this.score += 1;
				}
			});
			this.generado = true;
		}
		moveBox(box)
		{
			if ((this.positions.indexOf(this.selectedBox) == this.positions.indexOf(box) + 4 ||
				this.positions.indexOf(this.selectedBox) == this.positions.indexOf(box) + 1 ||
				this.positions.indexOf(this.selectedBox)  == this.positions.indexOf(box) - 4 ||
				this.positions.indexOf(this.selectedBox) == this.positions.indexOf(box) - 1 ) && this.positions.indexOf(this.selectedBox) != -1)
			{
				this.moves += 1;
				this.movesText.innerText = `Moves: ${this.moves}`;
				this.positions.swap(this.positions.indexOf(this.selectedBox),this.positions.indexOf(box))
				this.reload()
				this.scoreObserver()
			}
		}
		timing()
		{
			this.time += 1;
			this.timeText.innerText = `Time: ${this.time}`;
		}
		scoreObserver()
		{
			if (this.positions.indexOf(this.selectedBox) == parseInt(this.selectedBox.number) - 1)
				{
					this.selectedBox.element.style.color = 'green';
					this.score += 1;
				}
				else if (this.selectedBox.element.style.color == 'green')
				{
					this.selectedBox.element.style.color = 'black';
					this.score -= 1;
				}
			if (this.score == 15) 
			{
				clearInterval(this.timing);
				alert(`You Win!
Time: ${this.time}
Moves: ${this.moves}`);
				window.location.reload();
			}
		}

	}

class Element
	{
		constructor(number,position)
			{
				this.number = number;
				this.element = document.createElement("div");
				this.element.setAttribute("id", `box${this.number}`);
				if (typeof number == "string")
				{
					this.element.setAttribute("class", "box");
					this.text = document.createElement("p");
					this.text.setAttribute("class", "boxText")
					this.text.innerText = this.number;
					this.element.appendChild(this.text);
					this.element.addEventListener("click", this.select.bind(this));
				}
				else
				{
					this.element.setAttribute("id", `box${this.number}`);
					this.element.setAttribute("class", "nobox");
					this.element.addEventListener("click", this.move.bind(this));
				}
				
				document.getElementById("container").appendChild(this.element);
			}
		select()
			{
				controller.selectElementController(this);
			}
		show()
			{
				document.getElementById("container").appendChild(this.element);
			}
		move()
			{
				controller.moveBox(this)
			}
	}

controller = new Controller;
controller.randomSort()
controller.createBoxes()