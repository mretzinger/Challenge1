using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using pcty_challenge.API;
using pcty_challenge.API.Discounts;
using pcty_challenge.API.Plugins;

namespace pcty_challenge.Controllers
{
    [EnableCors]
    [ApiController]
    [Route("employee")]
    public class EmployeeController : ControllerBase
    {
        private ProjectContext _context;
        public IBenefitsCalculator  _calc;

        public EmployeeController(ProjectContext context, IBenefitsCalculator calc)
        {
            _calc = calc;
            _context = context;
        }

        [HttpGet]
        [Route("getall")]
        public List<EmployeeViewModel> GetAll()
        {
            return _context.Employees.Include("Dependents")
                .Select(x => new EmployeeViewModel(x, _calc))
                .ToList();
        }

        [HttpGet]
        public EmployeeViewModel Get(string id)
        {
            return _context.Employees.Where(x => x.Id == int.Parse(id))
                .Select(x => new EmployeeViewModel(x, _calc))
                .FirstOrDefault();
        }

        [HttpPost]
        [Route("create")]
        public EmployeeViewModel Create(Employee employee)
        {
            _context.Employees.Add(employee);
            _context.SaveChanges();

            return new EmployeeViewModel(employee, _calc);
        }

        [HttpPatch]
        [Route("{id:int}")]
        public EmployeeViewModel Update(Employee employee)
        {
            _context.Employees.Update(employee);
            _context.SaveChanges();
            return new EmployeeViewModel(employee, _calc);
        }

        [HttpDelete]
        [Route("delete/{id:int}")]
        public void Delete(string id)
        {
            Employee emp = _context.Employees
                .Where(x => x.Id == int.Parse(id)).FirstOrDefault();

            if(emp.Dependents.Any())
            {
                foreach(var dependent in emp.Dependents)
                {
                    _context.Dependents.Remove(dependent);
                    _context.SaveChanges();
                }
            }
            _context.Employees.Remove(emp);
            _context.SaveChanges();
        }

        [HttpDelete]
        [Route("deleteDependent/{id:int}")]
        public void DeleteDependent(string id)
        {
            Dependent dependent = _context.Dependents
                .Where(x => x.Id == int.Parse(id)).FirstOrDefault();
            _context.Dependents.Remove(dependent);
            _context.SaveChanges();
        }
    }
}
