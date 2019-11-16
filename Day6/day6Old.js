let data = {        
    title : '利用V-for將資料呈現在畫面上，使用者可以自行輸入後，資料append在陣列上',
    index : 0,
    menu :[
        {type:'第一天', title:'取車，超市買東西，check in', link:'javacript:;'},
        {type:'第二天', title:'前往Hokitikka，遠離市區', link:'javacript:;'},
        {type:'第三天', title:'大約5點前往 Fox Gracier爬冰川', link:'javacript:;'},
        {type:'第四天', title:'Wanaka開飛機、Lavender Farm', link:'javacript:;'},
        {type:'第五天', title:'Queenstown sky line', link:'javacript:;'},
        {type:'第六天', title:'到Te Annu Cruise journey', link:'javacript:;'},
        {type:'第七天', title:'Dunedin Station', link:'javacript:;'},

    ]
 }

 let vm = new Vue({
    el:'#app',
    data: data
 
   
 })