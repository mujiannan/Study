using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Reflection;

namespace Study
{
    class Reflect
    {
        public async Task StartAsync()
        {
            var test = typeof(SimpleClass);
            BindingFlags bindingFlags = BindingFlags.Public | BindingFlags.Instance | BindingFlags.Static |
                BindingFlags.NonPublic | BindingFlags.FlattenHierarchy;
            MemberInfo[] memberInfos = test.GetMembers(bindingFlags);
            foreach (var item in memberInfos)
            {
                Console.WriteLine(item.Name);
            }
        }

    }
    class SimpleClass
    {

    }
}
