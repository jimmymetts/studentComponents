// console.log("test")

const createStudentComponent = (student) => {
    return `
        <div class="student">
            <h1>${student.name}</h1>
            <section>${student.subject}</section>
            <aside>${student.info}</aside>
        </div>
    `
}

let studentContainer = document.querySelector("#container")

for (const student of students) {
    let studentComponent = ""
    if (student.score >= 60) {
        studentComponent = `
        <div class="student">
            <h1 class="xx-large passing">${student.name}</h1>
            <section class="bordered dashed section--padded">${student.subject}</section>
            <aside>${student.info}</aside>
        </div>`
    
    } else {
        studentComponent = 
        `<div class="student">
        <h1 class="xx-large failing">${student.name}</h1>
        <section class="bordered dashed section--padded">${student.subject}</section>
        <aside class="pushRight">${student.info}</aside>
    </div>`
        

} 
studentContainer.innerHTML += studentComponent
}



