using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.Serialization.Json;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Study
{
    public class RestClient
    {
        public async Task<List<Repository>> StartAsync()
        {
            HttpClient client = new HttpClient();
            client.DefaultRequestHeaders.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/vnd.github.v3+json"));
            client.DefaultRequestHeaders.Add("User-Agent", ".NET Foundation Repository Reporter");
            var content = client.GetStringAsync("https://api.github.com/orgs/dotnet/repos");
            //Console.WriteLine(await content);
            Task<System.IO.Stream> streamTask = client.GetStreamAsync("https://api.github.com/orgs/dotnet/repos");
            DataContractJsonSerializer dataContractJsonSerializer = new DataContractJsonSerializer(typeof(List<Repository>));
            var repositories = dataContractJsonSerializer.ReadObject(await streamTask) as List<Repository>;
            return repositories;
        }
        [DataContract(Name ="repo")]
        public class Repository
        {
            [DataMember(Name = "name")]
            public string Name { get => _name; set => _name = value; }
            private string _name;

            [DataMember(Name = "description")]
            public string Description { get; set; }

            [DataMember(Name = "html_url")]
            public Uri GitHubHomeUrl { get; set; }

            [DataMember(Name = "homepage")]
            public Uri Homepage { get; set; }

            [DataMember(Name = "watchers")]
            public int Watchers { get; set; }

            [DataMember(Name = "pushed_at")]
            private string JsonDate { get; set; }

            [IgnoreDataMember]
            public DateTime LastPush
            {
                get
                {
                    return DateTime.ParseExact(JsonDate, "yyyy-MM-ddTHH:mm:ssZ",System.Globalization.CultureInfo.CurrentCulture);
                }
            }
        }
    }

}
