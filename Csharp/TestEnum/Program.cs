using System;
using System.Linq;

namespace TestEnum
{
    enum MyEnum
    {
        Monday,
        Tuesday,
        Wednesday
    }
    class Program
    {
        static void Main(string[] args)
        {
            string x = "monday";
            string y = "Monday";

            if (Enum.GetNames(typeof(MyEnum)).Contains(x))
            {
                Console.WriteLine(true);
            }
            else
            {
                Console.WriteLine(false);
            }
            if (Enum.GetNames(typeof(MyEnum)).Contains(y))
            {
                Console.WriteLine(true);
            }
            else
            {
                Console.WriteLine(false);
            }
            Console.ReadLine();
        }
    }
}
