const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
        } else {
            entry.target.classList.remove('revealed')
        }
    })
})

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed2')
        } else {
            entry.target.classList.remove('revealed2')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
const hiddenElements2 = document.querySelectorAll('.hidden2')
hiddenElements.forEach((el) => observer.observe(el))
hiddenElements2.forEach((el) => observer2.observe(el))