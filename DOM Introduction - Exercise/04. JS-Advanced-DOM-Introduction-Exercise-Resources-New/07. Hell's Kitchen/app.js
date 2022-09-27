function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const result = [];

      let data = JSON.parse(document.querySelector('textarea').value);

      const temp = [];
      const regex = / \- |, |\\s/gm;

      for (let i = 0; i < data.length; i++) {

         const resturant = {
            resturantName: '',
            employee: []
         };

         temp.push(data[i].split(regex));
         resturant.resturantName = temp[i][0];

         let isFinde = result.find(restName => restName.resturantName === temp[i][0]);

         let index = result.indexOf(isFinde);

         if (isFinde === undefined) {
            for (let e = 1; e < temp[i].length; e++) {

               let currEmployee = {};
               let employeeArray = temp[i][e].split(' ');
               currEmployee.employeeName = employeeArray[0];
               currEmployee.employeeSalary = Number(employeeArray[1]);

               resturant.employee.push(currEmployee);
            }

            result.push(resturant);

         } else {
            for (let e = 1; e < temp[i].length; e++) {

               let currEmployee = {};

               let employeeArray = temp[i][e].split(' ');
               currEmployee.employeeName = employeeArray[0];
               currEmployee.employeeSalary = Number(employeeArray[1]);

               let test = result[index].employee.some(eName => eName.employeeName == currEmployee.employeeName);
               if (test) {
                  continue;
               }
               result[index].employee.push(currEmployee);
            }
         }
      }

      let bestResturant = {
         resturantName: '',
         avgSalary: 0,
         bestSalary: 0,
         workers: ''
      };

      for (let i = 0; i < result.length; i++) {

         let currResturant = {
            currResturantName: '',
            currAvgSalary: 0,
            currBestSalary: 0,
            currWorkers: []
         };

         result[i].employee.sort((a, b) => b.employeeSalary - a.employeeSalary)

         currResturant.currResturantName = result[i].resturantName;

         for (const item of result[i].employee) {
            currResturant.currAvgSalary += item.employeeSalary
         }

         currResturant.currAvgSalary /= result[i].employee.length;

         for (const item of result[i].employee) {

            if (item.employeeSalary > currResturant.currBestSalary) {
               currResturant.currBestSalary = item.employeeSalary;
            }
            currResturant.currWorkers.push(`Name: ${item.employeeName} With Salary: ${item.employeeSalary}`);
         }

         if (currResturant.currAvgSalary > bestResturant.avgSalary) {
            bestResturant.resturantName = currResturant.currResturantName;

            bestResturant.avgSalary = currResturant.currAvgSalary;

            bestResturant.bestSalary = currResturant.currBestSalary;
            bestResturant.workers = currResturant.currWorkers.join(' ');
         } else {
            continue;
         }
      }

      let test2 = `Name: ${bestResturant.resturantName} Average Salary: ${bestResturant.avgSalary.toFixed(2)} Best Salary: ${bestResturant.bestSalary.toFixed(2)}`;

      // let expectedBestWorkers = "Name: Bob With Salary: 1300 Name: Joe With Salary: 780 Name: Jane With Salary: 660";

      // let assert =bestResturant.workers.localeCompare(expectedBestWorkers);
      // console.log(expectedBestWorkers);

      // console.log(bestResturant.workers);
      // console.log(assert);

      document.querySelector('#bestRestaurant p').textContent = test2

      document.querySelector('#workers p').textContent = `${bestResturant.workers}`;
   }
}