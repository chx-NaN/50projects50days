const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

// classList.toggle('active')   如果classList中有active则删除，如果没有则添加
toggle.addEventListener('click', () => nav.classList.toggle('active'))
