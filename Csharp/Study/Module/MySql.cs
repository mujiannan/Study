using System;
using static System.Console;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.Common;
using MySql.Data.MySqlClient;
using MySql.Data.Types;

namespace Study
{
    class MySql
    {
        public static void LogIn()
        {
            string host = "13.88.14.236", user = "test", passWord = "test", port = "3306";
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
    }
}
