let block_f = document.querySelector('.block_form')
let block_bg_active = document.querySelector('.block_bg')
let block_select = document.querySelector('.open_block')
let block_remove = document.querySelector('.close_block')
let bl_add = document.q

block_select.onclick = () => {
    block_f.classList.add("active")
    block_bg_active.style.display = "block"
    setTimeout(() => {
        block_bg_active.style.opacity = "1"
    }, 100)

}
block_remove.onclick = () => {
    block_f.classList.remove("active")
    block_bg_active.style.opacity = "0"
    setTimeout(() => {
        block_bg_active.style.display = "none"
    }, 100)
}
