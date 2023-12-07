function ChangeTheme (theme) {
    document.querySelector(':root').style.setProperty('--theme', `${theme}`);
    localStorage.setItem('theme', document.querySelector(':root').style.getPropertyValue('--theme'))
    // console.log(document.querySelector(':root').style.getPropertyValue('--theme'))
}
let choosenTheme = localStorage.getItem('theme');
document.querySelector(':root').style.setProperty('--theme', choosenTheme);

let share_btn = document.querySelector('#share-area button')
let share_link = location.href;
share_btn.addEventListener('click', async () => {
    try {
        await navigator.share({
            url: share_link
        })
    } catch (error) {
        alert('Something Went Wrong In Sharing!')
    }
})
