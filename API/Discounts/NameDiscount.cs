using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pcty_challenge.Discounts
{
    public class NameDiscount : IDiscount
    {
        private IPerson Person { get; set; }
        private double Discount = 0.10;

        public NameDiscount(IPerson person)
        {
            Person = person;
        }

        //<summary>Checkes if person has a discount</summary>
        public bool Applies()
        {
            //Assuming that First name gets "a" discount
            return Person.FirstName != ""
                    ? Person.FirstName.ToLower()[0] == 'a'
                        ? true
                        : false
                    : false;
        }


        public double CalculateDiscountAmount(double price)
        {
            if(Applies())
            {
                return price * (1 - Discount);
            }

            return price;
        }
    }
}
