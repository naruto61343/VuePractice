let data = {        
    input: {
        type :'全部',
        title:''
      },
   
      menu:[
           {type:'Christchurch', title:'取車，超市買東西，check in', link:'https://drive.google.com/file/d/15CFhu-cg0UVyK6ynxrtR9vC1s-iKCE31/view?usp=sharing'},
           {type:'Hokitikka', title:'前往Hokitikka，遠離市區', link:'https://drive.google.com/file/d/1mueRyPyIUMdBV_hQm5ICwPMf8dQEeKZk/view?usp=sharing'},
           {type:'Fox Glacier', title:'大約5點前往 Fox Gracier爬冰川', link:'https://drive.google.com/file/d/1zIdars0o0Kote62ZXBmZ3PWnajf_QZ3p/view?usp=sharing'},
           {type:'Wanaka', title:'Wanaka開飛機、Lavender Farm', link:'https://drive.google.com/file/d/1kxxoOdphQLKLC6Wvk4uwI9ewLWYUo5My/view?usp=sharing'},
           {type:'Queenstown', title:'Queenstown sky line', link:'https://drive.google.com/file/d/1GAWMs7mjtBy58B_myVE6t1fwx_--PKmm/view?usp=sharing'},
           {type:'Te Annu', title:'到Te Annu Cruise journey', link:'https://drive.google.com/file/d/1hOjBn-6ClG7zZIzffT4lGbhtR7uoh9eG/view?usp=sharing'},
           {type:'Dunedin', title:'Dunedin Station', link:'https://drive.google.com/file/d/1wIKSoeZEbMeTvSe8ytav1GlTWCcNA_vK/view?usp=sharing'},
           {type:'Christchurch', title:'christchurch airport', link:'https://drive.google.com/file/d/15CFhu-cg0UVyK6ynxrtR9vC1s-iKCE31/view?usp=sharing'},
           {type:'Christchurch', title:'many sheep', link:'https://drive.google.com/file/d/15CFhu-cg0UVyK6ynxrtR9vC1s-iKCE31/view?usp=sharing'},
           {type:'Christchurch', title:'supernmarket', link:'https://drive.google.com/file/d/15CFhu-cg0UVyK6ynxrtR9vC1s-iKCE31/view?usp=sharing'},
           {type:'Fox Glacier', title:'爬冰川', link:'javascript:;'},
           {type:'Te Annu', title:'94 road', link:'javascript:;'},
   
       ]
 }
new Vue({
    el:'#app',
    data: data,
    computed :{
        //第一層篩選
        typeMenu(){
            if(this.input.type !== '全部')
            {
                return this.menu.filter(item =>{
                    return item.type === this.input.type
                })
               
            }
            else
            {
                return this.menu
            }
        },
        //第二層篩選
        titleMenu(){
            if(this.input.title){
                return this.typeMenu.filter(item=>{
                    let content = item.title.toLowerCase() //menu 裡面的title
                    let keyword = this.input.title.toLowerCase()
                    return content.indexOf(keyword) !== -1                 
                })

            }else{
                return this.typeMenu
            }

        }
    }   
 })