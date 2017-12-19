using ITCompany.BL;
using ITCompany.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace ITCompany.Web.Controllers.api
{
    [RoutePrefix("api/employees")]
    public class EmployeeController : ApiController
    {
        private EmployeeService employeeService = new EmployeeService();

        [Route("")]
        [HttpGet]
        public IEnumerable<Employee> GetEmployeeList()
        {
            return this.employeeService.GetEmployeeList();
        }
    }
}