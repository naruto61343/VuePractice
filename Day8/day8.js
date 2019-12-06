let data = {  
   input: {
     type :null,
     title:null
   },

   menu:[
        {type:'Christchurch', title:'取車，超市買東西，check in', link:'https://drive.google.com/file/d/15CFhu-cg0UVyK6ynxrtR9vC1s-iKCE31/view?usp=sharing'},
        {type:'Hokitikka', title:'前往Hokitikka，遠離市區', link:'https://drive.google.com/file/d/1mueRyPyIUMdBV_hQm5ICwPMf8dQEeKZk/view?usp=sharing'},
        {type:'Fox Glacier', title:'大約5點前往 Fox Gracier爬冰川', link:'https://drive.google.com/file/d/1zIdars0o0Kote62ZXBmZ3PWnajf_QZ3p/view?usp=sharing'},
        {type:'Wanaka', title:'Wanaka開飛機、Lavender Farm', link:'https://drive.google.com/file/d/1kxxoOdphQLKLC6Wvk4uwI9ewLWYUo5My/view?usp=sharing'},
        {type:'Queenstown', title:'Queenstown sky line', link:'https://drive.google.com/file/d/1GAWMs7mjtBy58B_myVE6t1fwx_--PKmm/view?usp=sharing'},
        {type:'Te Annu', title:'到Te Annu Cruise journey', link:'https://drive.google.com/file/d/1hOjBn-6ClG7zZIzffT4lGbhtR7uoh9eG/view?usp=sharing'},
        {type:'Dunedin', title:'Dunedin Station', link:'https://drive.google.com/file/d/1wIKSoeZEbMeTvSe8ytav1GlTWCcNA_vK/view?usp=sharing'},
        {type:'Christchurch', title:'第一天', link:'javacript:;'},
        {type:'Christchurch', title:'Many sheep', link:'javacript:;'},
        {type:'Christchurch', title:'Airport', link:'javacript:;'},
        {type:'Fox Glacier', title:'爬冰川', link:'javacript:;'}

    ]
 }

 let vm = new Vue({
    el:'#app',
    data: data,
    computed :{
        typeList(){
            let obj = {
                sort : [],
                map :{}
            }
            // this.menu.array.forEach((item,index) => {
            //    let {type,title,link} = item
            // });
             this.menu.forEach(({type,title,link},index) => {
                //先在物件裡面判斷篩選過了沒
                //資料初始化
                if(!obj.map[type])
                {
                    obj.sort.push(type)
                    obj.map[type] = {
                        sort : [],
                        map :{}
                    }
                }
                obj.map[type].sort.push(title)
                obj.map[type].map[title] = {index, link}
            })
            return obj
        },
        titleList(){
            this.input.title = null
            if(this.input.type){
              return this.typeList.map[this.input.type]  
            }
            else{
                return []
            }
        },
        content(){
            if(this.input.title)
            {
                console.log(this.titleList.map[this.input.title])
                return this.titleList.map[this.input.title]
            }else{
                return null
            }

        }
    }  
 })