
function lineas(){
	var grafico = document.querySelector('#dibujo1')
	var lineas = grafico.getContext('2d')
	lineas.beginPath()
	lineas.font = 'bold 40px Arial'
	lineas.textAling='start'
	lineas.fillStyle='Yellow'
	lineas.fill()
	lineas.fillText('BITCOIN PARA PRINCIPIANTES',100,300)
	lineas.closePath()
	var dimensiones=lineas.measureText('BITCOIN PARA PRINCIPIANTES')
	lineas.closePath()
	lineas.strokeStyle = '#f5fff8'
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(0,0)
	lineas.lineTo(50,4000)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(50,0)
	lineas.lineTo(100,4000)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(100,0)
	lineas.lineTo(150,4000)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(150,0)
	lineas.lineTo(200,4000)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(200,0)
	lineas.lineTo(250,4000)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(250,0)
	lineas.lineTo(300,4000)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(300,0)
	lineas.lineTo(350,4000)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(350,0)
	lineas.lineTo(400,4000)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(400,0)
	lineas.lineTo(450,4000)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(450,0)
	lineas.lineTo(500,4000)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(500,0)
	lineas.lineTo(550,4000)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(550,0)
	lineas.lineTo(600,4000)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(600,0)
	lineas.lineTo(650,4000)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(650,0)
	lineas.lineTo(700,4000)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(700,0)
	lineas.lineTo(750, 4000)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(750,0)
	lineas.lineTo(800,4000)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(800,0)
	lineas.lineTo(850,4000)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(850,0)
	lineas.lineTo(870,4000)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(0,0)
	lineas.lineTo(1000,0)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(0,50)
	lineas.lineTo(1000, 50)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(0,100)
	lineas.lineTo(1000, 100)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(0, 150)
	lineas.lineTo(1200, 150)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(0,200)
	lineas.lineTo(1400, 200)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(0, 250)
	lineas.lineTo(1600, 250)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(0, 300)
	lineas.lineTo(1800, 300)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(0, 350)
	lineas.lineTo(2000, 350)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(0, 400)
	lineas.lineTo(2200, 400)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(0,450)
	lineas.lineTo(2400, 450)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(0,500)
	lineas.lineTo(2600, 500)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(0,550)
	lineas.lineTo(2800,550)
	lineas.stroke()

	lineas.beginPath()
	lineas.moveTo(0,600)
	lineas.lineTo(3000,600)
	lineas.stroke()


	lineas.beginPath()
	lineas.arc(150,100,80,0,2*Math.PI)
	lineas.fillStyle='Pink'
	lineas.fill()
	lineas.strokeStyle='Pink'
	lineas.stroke()

	lineas.beginPath()
	lineas.arc(700,450,100,0,2*Math.PI)
	lineas.fillStyle='Blue'
	lineas.fill()
	lineas.stroke()


}
window.addEventListener('load',lineas)