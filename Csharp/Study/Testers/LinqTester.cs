using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Study.Testers
{
    class LinqTester
    {
        public static async void TestAsync()
        {
            int numsCount = 18;
            List<int> testInts = new List<int>(numsCount);
            for (int i = 0; i <numsCount; i++)
            {
                testInts.Add(i);
            }
            int groupSize = 5;
            int groupCount =(int)Math.Ceiling((float)numsCount / groupSize);
            List<List<int>> groups =testInts.GroupBy(x => (x / groupSize))
                .Select(group => group.ToList<int>())
                .ToList<List<int>>();
            PrintList(groups[3]);
            
        }
        private static void PrintList(List<int> list)
        {
            for (int i = 0; i < list.Count; i++)
            {
                Console.WriteLine(list[i]);
            }
        }
    }
}
