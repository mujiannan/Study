using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Study.Testers
{
    public class TryCatch
    {
        public void Start()
        {
            try
            {
                dynamic x;
                x = "haha";
                int y = x;
                Console.WriteLine(y);
            }
            catch (Exception)
            {
                Console.WriteLine("出错了");
            }
            finally
            {
                Console.WriteLine("finally");
            }
            Console.WriteLine("尾部代码");//从这结果中，我知道，只要catch块没有Throw，后面的外部代码就会运行
        }
    }
}
