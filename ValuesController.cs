using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebAPIMVCCrud;

namespace WebAPIMVCCrud.Controllers
{
    public class ValuesController : ApiController
    {
        EmployeeDBEntities db = new EmployeeDBEntities();
        // GET api/values
        public IEnumerable<Employee> Get()
        {
            return db.Employees.ToList();
        }

        // GET api/values/5
        public Employee Get(int id)
        {
            return db.Employees.Find(id);
        }

        // POST api/values

        // POST: api/Users/InsertUser
        //[ResponseType(typeof(User))]
        [HttpPost]
        public IHttpActionResult Post(Employee emp)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Employees.Add(emp);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = emp.EmployeeID }, emp);
        }

        // PUT api/values/5
        [HttpPost]
        public IHttpActionResult Update(Employee emp)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            //var dataupdate = db.UpdateRecord(user.Id, user.Name, user.PhoneNo, user.City);
            db.UpdateRecord(emp.EmployeeID, emp.Name, emp.City, emp.Email, emp.Phone);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = emp.EmployeeID }, emp);
        }
        // DELETE api/values/5
        public void Delete(int id)
        {
            Employee obj = db.Employees.Find(id);
            db.Employees.Remove(obj);
            db.SaveChanges();
        }

        private bool UserExists(int id)
        {
            return db.Employees.Count(e => e.EmployeeID == id) > 0;
        }
    }
}
