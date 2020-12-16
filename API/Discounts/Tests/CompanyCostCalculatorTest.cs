using System.Collections.Generic;
using Xunit;

namespace pcty_challenge.API.Discounts.Tests
{

    public class CompanyCostCalculatorTest
    {
        public static IEnumerable<object[]> Data =>
            new List<object[]>
            {
                    new object[] { new List<Employee>{
                        new Employee {FirstName = "Allan", LastName = "Ballen"},
                    }, 900.00 },
                    new object[] { new List<Employee>{
                        new Employee {FirstName = "Allan", LastName = "Ballen", Dependents =  new List<Dependent> {
                            new Dependent {FirstName = "Ben", LastName = "Bob"} }  },
                    }, 1400.00 },
                    new object[] { new List<Employee>{
                    }, 00.00 },
            };

        [Theory]
        [MemberData(nameof(Data))]
        public void Calculator_CalculatesBenefitCost(List<Employee> employees, double expected)
        {
            CompanyCostCalculator calc = new CompanyCostCalculator(new BenefitsCalculator());
            Assert.Equal(expected, calc.Calculate(employees));
        }
    }
}
