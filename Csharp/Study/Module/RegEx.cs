using System;
using static System.Console;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace Study
{
    class RegEx
    {
        public static void Start()
        {
            WriteLine(@"Here is RegEx.Main");
            WriteLine("Please input a pattern:");
            string pattern = ReadLine();
            WriteLine("Please input test line:");
            string text = ReadLine();
            Regex regex = new Regex(pattern);
            MatchCollection result =Regex.Matches(text, pattern, RegexOptions.IgnoreCase);
            foreach (var item in result)
            {
                WriteLine(item);
            }
        }
    }
}
