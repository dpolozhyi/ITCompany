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

        public int AddEmployee(string firstName, string lastName, DateTime dob, int positionId)
        {
            try
            {
                SqlCommand sqlCommand = new SqlCommand("AddEmployee", this.connection);
                sqlCommand.CommandType = CommandType.StoredProcedure;
                sqlCommand.Parameters.Add("@firstName", SqlDbType.NVarChar).Value = firstName;
                sqlCommand.Parameters.Add("@lastName", SqlDbType.NVarChar).Value = lastName;
                sqlCommand.Parameters.Add("@dob", SqlDbType.DateTime).Value = dob;
                sqlCommand.Parameters.Add("@positionId", SqlDbType.Int).Value = positionId;
                return (int)sqlCommand.ExecuteScalar();
            }
            catch (Exception ex)
            {
                Debug.Write(ex);
                throw new StorageException(ex.Message, ex);
            }
        }

        public int DeleteEmployeeById(int id)
        {
            try
            {
                SqlCommand sqlCommand = new SqlCommand("DeleteEmployee", this.connection);
                sqlCommand.CommandType = CommandType.StoredProcedure;
                sqlCommand.Parameters.Add("@id", SqlDbType.Int).Value = id;
                return sqlCommand.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                Debug.Write(ex);
                throw new StorageException(ex.Message, ex);
            }
        }

        public IEnumerable<Position> GetPositionList()
        {
            try
            {
                IList<Position> positionList = new List<Position>();
                SqlCommand sqlCommand = new SqlCommand("GetPositionList", this.connection);
                sqlCommand.CommandType = CommandType.StoredProcedure;
                using (var sqlReader = sqlCommand.ExecuteReader())
                {
                    while (sqlReader.Read())
                    {
                        Position position = new Position();
                        position.Id = this.ParseInt(sqlReader[0].ToString());
                        position.Name = sqlReader[1].ToString();
                        positionList.Add(position);
                    }
                }
                return positionList;
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
