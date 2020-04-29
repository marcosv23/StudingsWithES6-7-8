//using axios
//1 - 'yarn add axios'//without  -D, cause it's no dependency

/*2*/ import axios from 'axios';

class API{
  static async getInfo(username)
  { try
    {
    const response= await axios.get(`https://api.github.com/users/${username}`);
    console.log(response);
    }
    //WITH AXIOS WE USE TRY AND CATCH
    catch(ERR)
    {
      console.warn("ERROR AT API")
    }
  }
}
API.getInfo('marGcosv23');