using System;
using static System.Console;
using System.Reflection;
namespace Study
{
    public class Progress
    {
        public static void Main()
        {
            string COE;
            do
            {
                BindingFlags bindingFlags = BindingFlags.Static | BindingFlags.NonPublic;
                var testMethods = typeof(Progress).GetMethods(bindingFlags);
                WriteLine($"请选择以下{testMethods.Length}个测试方法：");
                for (int i = 0; i < testMethods.Length; i++)
                {
                    Write($"{i}.{testMethods[i].Name}  ");
                    if (i > 0 & i % 4 == 0)
                    {
                        WriteLine();
                    }
                }
                WriteLine();
                string input = ReadLine();
                bool isNum=int.TryParse(input,out int select);
                if (isNum&select>=0&select<testMethods.Length)
                {
                    testMethods[select].Invoke(null, null);
                }
                else
                {
                    WriteLine("请输入合适的阿拉伯数字...");
                }
                WriteLine("Continue or End?");
                COE = ReadLine();
            } while (COE != "End");
        }
        private static void TestReflect()
        {
            Reflect reflect = new Reflect();
            reflect.StartAsync().Wait();
        }
        private static void TestRestClient()
        {
            RestClient restClient = new RestClient();
            var repositories = restClient.StartAsync().Result;
            foreach (var repo in repositories)
            {
                Console.WriteLine(repo.Name);
                Console.WriteLine(repo.Description);
                Console.WriteLine(repo.GitHubHomeUrl);
                Console.WriteLine(repo.Homepage);
                Console.WriteLine(repo.Watchers);
                Console.WriteLine(repo.LastPush);
            }
        }
        private static void TestMySql()
        {
            Testers.MySqlTester.LogIn(host :"13.88.14.236", user:"test", passWord: "test", port: 3306);
        }
        private static void TestException()
        {
            Testers.TryCatch tryCatch = new Testers.TryCatch();
            tryCatch.Start();
        }
        private static void TestBuildMysqlString()
        {
            Testers.MySqlTester.BuiltConnectionString(host: "13.88.14.236", user: "test", passWord: "test", port: 3306);
        }
    }
}