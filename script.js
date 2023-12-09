function ChangeTheme (theme) {
    document.querySelector(':root').style.setProperty('--theme', `${theme}`);
    localStorage.setItem('theme', document.querySelector(':root').style.getPropertyValue('--theme'))
}
let choosenTheme = localStorage.getItem('theme');
document.querySelector(':root').style.setProperty('--theme', choosenTheme);

let share_btn = document.querySelector('#share-btn')
let share_link = location.href;
document.addEventListener('DOMContentLoaded', () => {
    share_btn.addEventListener('click', async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    url: share_link
                })

            } catch (error) {
                // Handle specific errors, e.g., if user cancels the sharing
                if (error.name === 'AbortError') {

                } else {
                    // Handle other errors
                    alert('Something went wrong in sharing!');
                }
            }
        }
        else {
            alert(`Your Browser Does't support built-in sharing feature. You Can Copy Link to share From here 👉🏻 ${share_link}`)
        }
    })
})
