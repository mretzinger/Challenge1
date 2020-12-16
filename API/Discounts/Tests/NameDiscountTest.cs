using pcty_challenge.Discounts;
using Xunit;

namespace pcty_challenge.API.Tests
{
    public class NameDiscountTest
    {
        [Theory]
        [InlineData("Allen", "Allan", true)]
        [InlineData("Steve","Stephenson", false)]
        [InlineData("Barry", "Allan", false)]
        [InlineData("", "", false)]
        public void NameDiscount_FirstNameNotStartWithA_ReturnFalse(string firstName, string lastName, bool expected)
        {
            Employee steve = new Employee();
            steve.FirstName = firstName;
            steve.LastName = lastName;

            var nameDiscount = new NameDiscount(steve);
            bool result = nameDiscount.Applies();

            Assert.Equal(expected, result);
        }
    }
}
