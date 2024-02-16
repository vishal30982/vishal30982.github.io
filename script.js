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

function slideRight (btn) {
    let active = document.querySelector('.active');
    let parent = document.querySelector('#social-icons')
    if(document.querySelector('#leftBtn') === null) {
        leftBtn = btn.cloneNode(false);
        leftBtn.innerHTML = '&lsaquo;';
        leftBtn.id = 'leftBtn'
        leftBtn.onclick =  function () {
            slideLeft(leftBtn)
        };
        parent.prepend(leftBtn);
    }
    if(active.nextElementSibling.classList.contains('group')) {
        active.classList.remove('active');
        active.nextElementSibling.classList.add('active');
        active = document.querySelector('.active')
        if(active.nextElementSibling.classList.contains('group') === false) {
            btn.style.display = 'none'
        }
    }
}
function slideLeft(btn) {
    let active = document.querySelector('.active');
    let parent = document.querySelector('#social-icons')
    document.querySelector('#rightBtn').style.display = 'inline';
    if(active.previousElementSibling.classList.contains('group')) {
        active.classList.remove('active');
        active.previousElementSibling.classList.add('active');
        active = document.querySelector('.active')
        if(active.previousElementSibling.classList.contains('group') === false) {
            parent.removeChild(btn)
        }
    }
}
