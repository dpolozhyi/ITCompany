using ITCompany.DAL.Exceptions;
using ITCompany.Entities;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Diagnostics;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ITCompany.DAL
{
    public class EmployeeRepository : IDisposable
    {
        private SqlConnection connection;

        public EmployeeRepository() : this(ConfigurationManager.ConnectionStrings["ITCompanyConnection"].ConnectionString)
        {

        }

        public EmployeeRepository(string connectionString)
        {
            this.connection = new SqlConnection(connectionString);
            this.connection.Open();
        }

        public IEnumerable<Employee> GetEmployeeList()
        {
            try
            {
                IList<Employee> employeeList = new List<Employee>();
                SqlCommand sqlCommand = new SqlCommand("GetEmployeeList", this.connection);
                sqlCommand.CommandType = CommandType.StoredProcedure;
                using (var sqlReader = sqlCommand.ExecuteReader())
                {
                    while (sqlReader.Read())
                    {
                        Employee employee = new Employee();
                        employee.Id = this.ParseInt(sqlReader[0].ToString());
                        employee.FirstName = sqlReader[1].ToString();
                        employee.LastName = sqlReader[2].ToString();
                        employee.DateOfBirth = DateTime.Parse(sqlReader[3].ToString());
                        Position position = new Position();
                        position.Id = this.ParseInt(sqlReader[4].ToString());
                        position.Name = sqlReader[5].ToString();
                        employee.Position = position;
                        employeeList.Add(employee);
                    }
                }
                return employeeList;
            }
            catch (Exception ex)
            {
                Debug.Write(ex);
                throw new StorageException(ex.Message, ex);
            }
        }

        private int ParseInt(string value)
        {
            int num;
            Int32.TryParse(value, out num);
            return num;
        }

        public void Dispose()
        {
            this.connection.Close();
        }
    }
}
