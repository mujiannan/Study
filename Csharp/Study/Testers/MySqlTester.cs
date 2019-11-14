using System;
using static System.Console;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.Common;
using MySql.Data.MySqlClient;
using MySql.Data.Types;
using System.Data.Entity;

namespace Study.Testers
{
    class MySqlTester
    {
        public static void LogIn(string host,string user,string passWord,uint port=3306)
        {
            MySqlConnection mySqlConnection = new MySqlConnection($"server={host};port={port};user id={user};password={passWord}");
            try
            {
                mySqlConnection.Open();
                WriteLine("Success");
            }
            catch (Exception Ex)
            {
                WriteLine(Ex.Message);
            }
            MySqlCommand mySqlCommand = new MySqlCommand("Show databases;", mySqlConnection);
            MySqlDataReader mySqlDataReader = mySqlCommand.ExecuteReader();
            int i = 0;
            while (mySqlDataReader.Read())
            {
                WriteLine(mySqlDataReader[0]);
                i++;
            }

            ReadKey();
            mySqlConnection.Close();
        }
        [DbConfigurationType(typeof(MySql.Data.Entity.MySqlEFConfiguration))]
        public class MySqlContext:DbContext
        {
            public MySqlContext() : base("name=connstr")
            {

            }
        }
        public static void BuiltConnectionString(string host, string user, string passWord, uint port = 3306)
        {
            MySqlConnectionStringBuilder builder = new MySqlConnectionStringBuilder
            {
                Server = host,
                UserID = user,
                Password = passWord,
                Port = port
            };
            Console.WriteLine(builder.ConnectionString);
            
            
        }
    }

}
