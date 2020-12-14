using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace pcty_challenge.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {

        //private readonly ILogger<EmployeeController> _logger;

        //public EmployeeController(ILogger<EmployeeController> logger)
        //{
        //    _logger = logger;
        //}

        //[HttpGet]
        //public Employee Get()
        //{
        //    var rng = new Random();
        //    return Enumerable.Range(1, 5).Select(index => new Employee
        //    {
        //        Date = DateTime.Now.AddDays(index),
        //        TemperatureC = rng.Next(-20, 55),
        //        Summary = Summaries[rng.Next(Summaries.Length)]
        //    })
        //    .ToArray();
        //}

        [HttpGet]
        public List<Employee> GetCostPreview(List<Employee> employees)
        {
            //return Enumerable.Range(1, 5).Select(index => new Employee
            //{
            //    Date = DateTime.Now.AddDays(index),
            //    TemperatureC = rng.Next(-20, 55),
            //    Summary = Summaries[rng.Next(Summaries.Length)]
            //})
            //.ToArray();

            var calculator = new DiscountCalculator();
            calculator.Calculate(employees);

            //Add discount to employees that meet the criteria
            //if(calculator.HasDiscount(employee.Person) == true || calculateDiscountemployee.Dependents.Any().HasDiscount == true)
            //{
            //    employee.FinalBenefitCost = ApplyDiscountCost(employee);
            //}
            //else
            //{
            //    employee.FinalBenefitCost = FinalCost(employee);
            //}

            return employees;
        }
    }
}
