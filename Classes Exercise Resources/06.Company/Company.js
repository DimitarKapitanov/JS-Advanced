class Company {
    constructor(params) {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if ([...arguments].some(p => p === null || p === undefined || p === '') || salary < 0) {
            throw Error('Invalid input!');
        }

        let employee = {
            employeeName: name,
            employeeSalary: Number(salary),
            employeePosition: position
        };

        if (!this.departments.hasOwnProperty(department)) {

            this.departments[department] = [];
            this.departments[department].avgSalarys = 0;
        }

        this.departments[department].push(employee);
        this.departments[department].avgSalarys += Number(employee.employeeSalary);

        return `New employee is hired. Name: ${employee.employeeName}. Position: ${employee.employeePosition}`;
    }

    bestDepartment() {
        for (const i in this.departments) {
            this.departments[i].avgSalarys = this.departments[i].avgSalarys / this.departments[i].length;
            this.departments[i]
                .sort((a, b) => b.employeeSalary - a.employeeSalary || a.employeeName.localeCompare(b.employeeName));

        }

        let sortable = Object.fromEntries(
            Object.entries(this.departments).sort(([, a], [, b]) => b.avgSalarys - a.avgSalarys)
        );

        let result = `Best Department is: ${Object.keys(sortable)[0]}`;
        result += `\nAverage salary: ${sortable[Object.keys(sortable)[0]].avgSalarys.toFixed(2)}`;

        this.departments[Object.keys(sortable)[0]].forEach(employee => {
            result += `\n${employee.employeeName} ${employee.employeeSalary} ${employee.employeePosition}`

        });

        return result;
    }
}

let c = new Company();

// console.log(c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing"));
// console.log(c.addEmployee("Pesho", 1000, "graphical designer", "Marketing"));
// console.log(c.addEmployee("Gosho", 1350, "HR", "Human resources"));
// console.log(c.addEmployee('Stanimir', 2000, "engineer", "Construction"));
// console.log(c.addEmployee("Pesho", 1500, "electrical engineer", "Construction"));
// console.log(c.addEmployee("Slavi", 500, "dyer", "Construction"));
// console.log(c.addEmployee("Stan", 2000, "architect", "Construction"));
// console.log(c.bestDepartment());

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
console.log(c.bestDepartment());
console.log(c.bestDepartment());

