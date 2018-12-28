module.exports = {
    apis: (app) => {
        app.get('/api/hello', (req, res, next) => {
            res.json(
                {
                    Users:[
                        {userId:'1',userName:'su',passWord:'123'},
                        {userId:'2',userName:'susu',passWord:'123'}
                    ],
                    Category:[
                        {cId:'001',cName:'cone'},
                        {cId:'002',cName:'ctwo'},
                        {cId:'003',cName:'cthree'}
                    ],
                    Products:[
                        {pId:'00001',pName:'p1',category:'cone'},
                        {pId:'00002',pName:'p2',category:'cone'},
                        {pId:'00003',pName:'p3',category:'ctwo'},
                        {pId:'00004',pName:'p4',category:'ctwo'},
                        {pId:'00005',pName:'p5',category:'cthree'},
                        {pId:'00006',pName:'p6',category:'cthree'}
                    ],
                    Pic:[
                        {name:'01',url:'../../assets/01.jpeg'},
                        {name:'02',url:'../../assets/02.jpeg'},
                        {name:'03',url:'../../assets/03.jpeg'},
                        {name:'04',url:'../../assets/04.jpeg'},
                        {name:'05',url:'../../assets/05.jpeg'}
                    ]
                }
            )
        })
    },

}
