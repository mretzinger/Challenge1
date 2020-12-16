using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pcty_challenge.API.Discounts;
using pcty_challenge.API.Plugins;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pcty_challenge.API.Controllers
{
    [EnableCors]
    [ApiController]
    [Route("benefits")]
    public class BenefitsController : ControllerBase
    {
        private ProjectContext _context;
        private ICompanyCostCalculator _calc;

        public BenefitsController(ProjectContext context, ICompanyCostCalculator calc)
        {
            _context = context;
            _calc = calc;
        }

        [HttpGet]
        [Route("cost")]
        public BenefitsCost GetCost()
        {
            List<Employee> employees = _context.Employees.Include("Dependents").ToList();
            var discountCost = _calc.Calculate(employees);

            return new BenefitsCost(10, discountCost);
        }

    }
}
