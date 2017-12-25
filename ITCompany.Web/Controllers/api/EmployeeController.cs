using ITCompany.DAL;
using ITCompany.Entities;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Web.Http;

namespace ITCompany.Web.Controllers.api
{
    [RoutePrefix("api/employees")]
    public class EmployeeController : ApiController
    {
        private EmployeeRepository employeeRepository = new EmployeeRepository();

        [Route("")]
        [HttpGet]
        public IHttpActionResult GetEmployeeList()
        {
            IEnumerable<Employee> employees = this.employeeRepository.GetEmployeeList();
            string json = JsonConvert.SerializeObject(employees, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
            return Ok(json);
        }

        [Route("")]
        [HttpPost]
        public IHttpActionResult AddEmployee([FromBody]Employee employee)
        {
            int id = this.employeeRepository.AddEmployee(employee.FirstName, employee.LastName, new DateTime(1995, 7, 16), employee.Position.Id);
            if (id > 0)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        [Route("{id:int}")]
        [HttpDelete]
        public IHttpActionResult DeleteEmployee(int id)
        {
            try
            {
                this.employeeRepository.DeleteEmployeeById(id);
                return Ok();
            }
            catch(Exception ex)
            {
                return BadRequest();
            }
        }

        [Route("positions")]
        [HttpGet]
        public IHttpActionResult GetPositionsList()
        {
            IEnumerable<Position> positions = this.employeeRepository.GetPositionList();
            string json = JsonConvert.SerializeObject(positions, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
            return Ok(json);
        }
    }
}