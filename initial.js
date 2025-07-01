    const board = document.getElementById("board");
    const size = 19;
    let currentPlayer = 'black';

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        
        cell.dataset.row = i;
        cell.dataset.col = j;
        
        cell.addEventListener("click", function () {
          if (cell.querySelector(".stone")) return; // 已有棋子不能再放

          const stone = document.createElement("img");
          stone.className = "stone ";
          stone.src = "Assets/" + currentPlayer + "stone.png"
          cell.appendChild(stone);

          // 換邊
          currentPlayer = (currentPlayer === "black") ? "white" : "black";
          
        });

        const h_line = document.createElement("div");
        const v_line = document.createElement("div");
        h_line.className = "center-line-horizontal"
        v_line.classList = "center-line-vertical"
        if (i < size - 1) cell.appendChild(v_line);
        if (j < size - 1) cell.appendChild(h_line);
        board.appendChild(cell);
      }
    }