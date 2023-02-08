let searchbox = document.querySelector('#s');
        let searchMain = document.querySelector('#sb');
        let inputbox = document.querySelector('#ip');
        searchbox.onclick = function()
        {
          searchMain.style.width = '320px';
          x.style.opacity = '1';
          x.style.animation ='totheright 1s ease 0s';
          inputbox.style.opacity = '1';

        }
        let flashbox = document.querySelector('#flash');
        let x = document.querySelector('#x');
        x.onclick = function (e) {         
              if(e.target === x)
              {
                searchMain.style.width = '50px';
                x.style.opacity = '0';
                inputbox.style.opacity = '0';

              }   
          }
        
        let linebox = document.querySelector('#linex')
        let homebox = document.querySelector('#homeb')
        let aboutbox = document.querySelector('#aboutb')
        let servicebox = document.querySelector('#serviceb')
        let designbox = document.querySelector('#designb')
        let contactbox = document.querySelector('#contactb')
        homebox.onclick = function(e)
        {
         if(e.target === homebox)
         {
          homebox.appendChild(linebox);
          
          linebox.style.animation = 'linekf 1s both 0s';
         }
         else
         {
          homebox.removeChild(linebox);
         }
        }
        aboutbox.onclick = function(e)
        {
         if(e.target === aboutbox)
         {
          aboutbox.appendChild(linebox);
          linebox.style.animation = 'linekf 1s both 0s';
         }
         else
         {
          aboutbox.removeChild(linebox);
         }
        }
        servicebox.onclick = function(e)
        {
         if(e.target === servicebox)
         {
          servicebox.appendChild(linebox);
          linebox.style.animation = 'linekf 1s both 0s';
         }
         else
         {
          servicebox.removeChild(linebox);
         }
        }
        designbox.onclick = function(e)
        {
         if(e.target === designbox)
         {
          designbox.appendChild(linebox);
          linebox.style.animation = 'linekf 1s both 0s';
         }
         else
         {
          designbox.removeChild(linebox);
         }
        }
        contactbox.onclick = function(e)
        {
         if(e.target ===  contactbox)
         {
           contactbox.appendChild(linebox);
          linebox.style.animation = 'linekf 1s both 0s';
         }
         else
         {
           contactbox.removeChild(linebox);
         }
        }