<template>
 <canvas id="canvas1"></canvas>
</template>

<script>
export default {
    name: 'ParticlesBackground',
    methods: {
        createConnectedParticles(){
            const canvas = document.getElementById("canvas1")
            const ctx = canvas.getContext('2d')
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight

            let particlesArray


            class Particle{
                constructor(x, y, directionX, directionY, size, color){
                    this.x = x
                    this.y = y
                    this.directionX = directionX
                    this.directionY = directionY
                    this.size = size
                    this.color = color
                }

                draw(){
                    ctx.beginPath()
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
                    ctx.fillStyle = '#2f333a'
                    ctx.fill()
                }

                update(){
                    if(this.x > canvas.width || this.x < 0){
                        this.directionX = -this.directionX
                    }
                    if(this.y > canvas.height || this.y < 0){
                        this.directionY = -this.directionY
                    }
                    this.x += this.directionX
                    this.y += this.directionY
                    this.draw()
                }
            }

            function init(){
                particlesArray = []
                let numberOfParticles = (canvas.height * canvas.width) / 50000
                for(let i = 0; i < numberOfParticles; i++){
                    let size = 1
                    let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size *2)
                    let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size *2)
                    let directionX = (Math.random() * 4) - 1.5
                    let directionY = (Math.random() * 4) - 1.5
                    let color = '#2f333a'

                    particlesArray.push(new Particle(x, y, directionX, directionY, size, color))
                }
            }

            function connect(){
                let opacityValue = 1
                for(let a = 0; a < particlesArray.length; a++){
                    for(let b = a; b < particlesArray.length; b++){
                        let distance = ((particlesArray[a].x - particlesArray[b].x)
                        * (particlesArray[a].x - particlesArray[b].x))
                        + ((particlesArray[a].y - particlesArray[b].y) *
                        (particlesArray[a].y - particlesArray[b].y))
                        if(distance < (canvas.width/5) * (canvas.height/5)){
                            opacityValue = 1 - (distance/100000)
                            ctx.strokeStyle='rgba(70,70,79,' + opacityValue + ')'
                            ctx.lineWidth = 1
                            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
                            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
                            ctx.stroke()
                        }
                    } 
                }
            }

            function animate(){
                requestAnimationFrame(animate)
                ctx.clearRect(0,0,innerWidth, innerHeight)
                for(let i = 0; i < particlesArray.length; i++){
                    particlesArray[i].update()
                }
                connect()
            }

            window.addEventListener('resize', 
                function(){
                    canvas.width = innerWidth
                    canvas.height = innerHeight
                    
                    init()
                }
            )


            init()
            animate()
            }
    },
    mounted(){
        this.createConnectedParticles()
    }
}

</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #canvas1{
        position: absolute;
        top: 0; left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: #2f333a;
    }
</style>