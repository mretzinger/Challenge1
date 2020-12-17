using pcty_challenge.API.Discounts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pcty_challenge.API
{
    //<summary>The EmployeeViewModel contains the employee information accessible by the Controller.</summary>
    public class EmployeeViewModel
    {
        private IBenefitsCalculator _calc;
        private Employee _emp;

        public EmployeeViewModel(Employee employee, IBenefitsCalculator calc)
        {
            _emp = employee;
            _calc = calc;
        }

        public int Id
        {
            get { return _emp.Id; }
        }
        public List<Dependent> Dependents 
        {
            get { return _emp.Dependents; } 
        }
        public string FirstName
        {
            get { return _emp.FirstName; }
        }
        public string LastName
        {
            get { return _emp.LastName; }
        }

        public double FinalBenefitsCost
        {
            get { return _calc.Calculate(_emp); }
        }
    }
}
