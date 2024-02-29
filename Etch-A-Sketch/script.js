const container = document.querySelector('.container');
const create = document.querySelector('#Create');
const remove = document.querySelector('#Remove');

function randomColor () {
    let colorArr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let colorValue = '#';

    for (i = 0; i < 6; i++) {
        let randomNum = Math.floor( Math.random() * colorArr.length);
        colorValue += colorArr[randomNum];
    }

    return colorValue;
}

function createBoard(size){
    for (i = 0; i < size; i++) {
        const row = document.createElement('div');
        container.appendChild(row).className = 'gridRow';
    }
    let rows = document.querySelectorAll('.gridRow');

    for (i = 0; i < rows.length; i++) {
        for ( j = 0; j < size; j++) {
            const col = document.createElement('div');
            rows[i].appendChild(col).className = 'rowCol';
        }
    }
    
    const trail = document.querySelectorAll('.rowCol');

    trail.forEach((node) => {
        node.addEventListener('mouseout', (e) => {
            
            e.target.style.backgroundColor = randomColor();
        });
    })

    console.log(trail);

    remove.addEventListener('click', () => {
        removeGrid(rows);
    });

}

function removeGrid( nodes) {
    nodes.forEach((cell) => {
        cell.remove()
    });
}


create.addEventListener('click', () => {
    let size = prompt("How many cells do you want? (Max 100):");

    if (parseInt(size) > 100) {
        alert("Too big of a board size!")
    }
    else {
        createBoard(parseInt(size));
    }

});


randomColor();










