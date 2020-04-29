import api from './api';

class RepoApp
{
  constructor()
  {
  this.repositories =[];
  this.listElement = document.querySelector('ul[class=repo-list]');
  this.formElement = document.querySelector('form[id=repo-form]')
  //this.btnExclude = document.getElementById('btn_exclude_repo');
  this.Input = document.querySelector('input[name=repository]');

  this.registerHandlers();
  }
 

  registerHandlers()
  {
    this.formElement.onsubmit = event => this.addRepository(event);
    //this.btnExclude.onclick = event => this.excludeRepository(event);
   
  }

  setLoading(loading=true)
  {
    if(loading===true)
    {
      let loadingEl = document.createElement('span');
      loadingEl.appendChild(document.createTextNode('Loading...'));
      loadingEl.setAttribute('id','loading');

      this.formElement.appendChild(loadingEl);
    }
    else if(loading===false)
    {
      document.getElementById('loading').removeChild();
    }
  }

   excludeRepository(event)
   {
    this.listElement.innerHTML=""
   }

 async addRepository(event)
  {
    //console.log(1)
    

    event.preventDefault();// this function disable
    // de common behavior of <form>  such as refreshing the page

    const repoInput = this.Input.value
    if( repoInput.length ===0)
    return
    
    //this.setLoading(true);
    
      
        const response = await api.get(`/${repoInput}`);
        
          const { owner:{login, id, avatar_url},name,full_name, html_url}=response.data;

        this.repositories.push({
          name,
          login,
          id,
          name,
          full_name,
          avatar_url,
          html_url
        });
        
     
        this.renderRepositories();
        

   
      


    
  
  }
  


   renderRepositories()
  {
    
    this.listElement.innerHTML ="";// blot out to render with elements anew
    this.repositories.forEach( (repo)=>{// we could put 'index' param too;
    //console.log(repo.id, repo.login, repo.avatar_url);




    //CRETING EACH ITEM OF A NEW REPO:: 
    //1) Creating the 'img' child
   
   let imgElement = document.createElement('img');
    imgElement.setAttribute('src', repo.avatar_url);
    
    
    //2)  Creating the 'Title - login'
    let titleElement = document.createElement('strong');
    titleElement.appendChild(document.createTextNode(`Name:  ${repo.name}`));
    let sub_title = document.createElement('p');
    sub_title.appendChild(document.createTextNode(`Full Name:  ${repo.full_name}`))

    //3) Creating the description 1, 2 and userLink
    let description1 = document.createElement('p');
    description1.appendChild(document.createTextNode(`ID:  ${repo.id}`));
    let description2 = document.createElement('p');
    description2.appendChild(document.createTextNode(` Login: ${repo.login}`));
    

    //4) Creating the userLink
    let userLink = document.createElement('a');
    userLink.setAttribute('target','blank');
    userLink.setAttribute('href', repo.html_url);
    userLink.appendChild(document.createTextNode('Acess Repository'));


    //4) appending all created items  into 'li'
    const listItem = document.createElement('li');
     listItem.appendChild(imgElement);
     listItem.appendChild(titleElement);
     listItem.appendChild(sub_title);
     listItem.appendChild(description1);
     listItem.appendChild(description2);
     listItem.appendChild(userLink);
     

     //5) appending 'li' into 'ul'
      this.listElement.appendChild(listItem);
      this.Input.value="";
      console.log('STATUS CODE -304 - NOT MODIFIED',response);
      this.setLoading(false);

      
    });

     
  }

}
 


  new RepoApp();
 //app = new RepoApp();
