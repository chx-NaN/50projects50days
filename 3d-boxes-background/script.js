const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))
//classList.toggle: 如果classList中存在给定的值，删除它，否则，添加它

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div')   //添加div
      box.classList.add('box')                    //为div添加class='box'
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`  //每个div的位置
      boxesContainer.appendChild(box)             //将小div添加到大盒子里（boxes）
    }
  }
}

createBoxes()
