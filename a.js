function releaseConfetti() {
    const confettiCanvas = document.getElementById('confettiCanvas');
    const ctx = confettiCanvas.getContext('2d');
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    const confettiCount = 300;
    const confetti = [];

    for (let i = 0; i < confettiCount; i++) {
        confetti.push({
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height - confettiCanvas.height,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            size: Math.random() * 5 + 2,
            speed: Math.random() * 3 + 2,
            angle: Math.random() * 360,
            angularSpeed: Math.random() * 3
        });
    }

    function drawConfetti() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

        confetti.forEach((particle, index) => {
            ctx.save();
            ctx.translate(particle.x, particle.y);
            ctx.rotate((particle.angle * Math.PI) / 180);
            ctx.fillStyle = particle.color;
            ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
            ctx.restore();

            particle.y += particle.speed;
            particle.angle += particle.angularSpeed;

            if (particle.y > confettiCanvas.height) {
                confetti[index] = {
                    ...particle,
                    x: Math.random() * confettiCanvas.width,
                    y: -particle.size,
                    speed: Math.random() * 3 + 2,
                };
            }
        });

        requestAnimationFrame(drawConfetti);
    }

    drawConfetti();
}
