const data = [
    {
        city: 'EKB',
        workshop: 'EKB-1',
        employee: 'Oleg',
        brigade: 1,
        shift: 1
    },
    {
        city: 'EKB',
        workshop: 'EKB-2',
        employee: 'Sergey',
        brigade: 1,
        shift: 1
    },
    {
        city: 'EKB',
        workshop: 'EKB-2',
        employee: 'Artem',
        brigade: 2,
        shift: 3
    },
    {
        city: 'MSK',
        workshop: 'MSK-1',
        employee: 'Sergey',
        brigade: 10,
        shift: 3
    },
    {
        city: 'MSK',
        workshop: 'MSK-2',
        employee: 'Vladislav',
        brigade: 10,
        shift: 3
    },
    {
        city: 'MSK',
        workshop: 'MSK-2',
        employee: 'Alexander',
        brigade: 5,
        shift: 2
    },
    {
        city: 'MSK',
        workshop: 'MSK-2',
        employee: 'Vladimir',
        brigade: 4,
        shift: 1
    },
    {
        city: 'MSK',
        workshop: 'MSK-2',
        employee: 'Andrey',
        brigade: 4,
        shift: 1
    },
    {
        city: 'MSK',
        workshop: 'MSK-3',
        employee: 'Mihail',
        brigade: 1,
        shift: 3
    },
]

let city = document.querySelector('#city')
let workshop = document.querySelector('#workshop')
let employee = document.querySelector('#employee')
let brigade = document.querySelector('#brigade')
let shift = document.querySelector('#shift')

window.onload = setDefaultUniqueOptions
city.onchange = citySelected
workshop.onchange = workshopSelected

employee.onchange = setCookies
brigade.onchange = setCookies
shift.onchange = setCookies

function citySelected(ev){
    setCookies()

    let workshopNewOptions = []

    employee.options.length = 1
    workshop.options.length = 1

    data.map(e => {
        if (!this.value || e.city === this.value) {
            if(!workshopNewOptions.includes(e.workshop)){
                workshopNewOptions.push(e.workshop)
                workshop.add(new Option(e.workshop))
            }

            employee.add(new Option(e.employee))
        }
    })
}

function workshopSelected(ev){
    setCookies()

    employee.options.length = 1

    data.map(e => {
        if (!this.value || e.workshop === this.value) {
            employee.add(new Option(e.employee))
        }
    })
}

function setDefaultUniqueOptions(ev) {
    let cityOptions = []
    let workshopOptions = []
    let employeeOptions = []
    let brigadeOptions = []
    let shiftOptions = []

    data.map(e => {
        if(!cityOptions.includes(e.city)){
            cityOptions.push(e.city)
            city.add(new Option(e.city))
        }
        if(!workshopOptions.includes(e.workshop)){
            workshopOptions.push(e.workshop)
            workshop.add(new Option(e.workshop))
        }
        if(!employeeOptions.includes(e.employee)){
            employeeOptions.push(e.employee)
            employee.add(new Option(e.employee))
        }
        if(!brigadeOptions.includes(e.brigade)){
            brigadeOptions.push(e.brigade)
            brigade.add(new Option(e.brigade))
        }
        if(!shiftOptions.includes(e.shift)){
            shiftOptions.push(e.shift)
            shift.add(new Option(e.shift))
        }
    })
}

function setCookies(){
    document.cookie = "selected_values=" + JSON.stringify({
        city: city.value,
        workshop: workshop.value,
        employee: employee.value,
        brigade: brigade.value,
        shift: shift.value,
    })
}