using ITCompany.DAL;
using ITCompany.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ITCompany.BL
{
    public class EmployeeService
    {
        private EmployeeRepository employeeRepo = new EmployeeRepository();

        public IEnumerable<Employee> GetEmployeeList()
        {
            return this.employeeRepo.GetEmployeeList();
        }
    }
}
