const canvas = document.getElementById('pong');
    const ctx = canvas.getContext('2d');

    const paddleHeight = 100;
    const paddleWidth = 10;
    const ballRadius = 5;

    const leftPaddle = {
      x: 0,
      y: canvas.height / 2 - paddleHeight / 2,
      width: paddleWidth,
      height: paddleHeight,
      dy: 4
    };

    const rightPaddle = {
      x: canvas.width - paddleWidth,
      y: canvas.height / 2 - paddleHeight / 2,
      width: paddleWidth,
      height: paddleHeight,
      dy: 4
    };

    const ball = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: ballRadius,
      dx: 4,
      dy: 2
    };

    function drawPaddle(paddle) {
      ctx.fillStyle = 'white';
      ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    }

    function drawBall() {
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.closePath();
    }

    function updatePaddle(paddle) {
      paddle.y += paddle.dy;

      if (paddle.y < 0) {
        paddle.y = 0;
      } else if (paddle.y + paddle.height > canvas.height) {
        paddle.y = canvas.height - paddle.height;
      }
    }

    function updateBall() {
      ball.x += ball.dx;
      ball.y += ball.dy;

      if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
        ball.dy = -ball.dy;
      }

      if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        ball.dx = -ball.dx;
      }

      if (ball.x - ball.radius < leftPaddle.x + leftPaddle.width &&
          ball.y > leftPaddle.y && ball.y < leftPaddle.y + leftPaddle.height) {
        ball.dx = -ball.dx;
      }

      if (ball.x + ball.radius > rightPaddle.x &&
          ball.y > rightPaddle.y && ball.y < rightPaddle.y + rightPaddle.height) {
        ball.dx = -ball.dx;
      }
    }

    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawPaddle(leftPaddle);
      drawPaddle(rightPaddle);
      drawBall();
      updatePaddle(leftPaddle);
      updatePaddle(rightPaddle);
      updateBall();
      requestAnimationFrame(update);
    }

    canvas.addEventListener('mousemove', (event) => {
      const rect = canvas.getBoundingClientRect();
      const root = document.documentElement;
      const mouseY = event.clientY - rect.top - root.scrollTop;
      leftPaddle.y = mouseY - leftPaddle.height / 2;
    });

    update();