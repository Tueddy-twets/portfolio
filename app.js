const       express     =   require('express'),
            app         =   express();

// Include View engine, e.t.c.
app.set('view engine','ejs');
app.use(express.static('public'));

// Routes
app.get('/',(req,res)=>{
    res.render('home.ejs');
})
app.get('/projects/colorgame',(req,res)=>{
    res.render('./projects/colorgame.ejs');
});
app.get('/projects/todos',(req,res)=>{
    res.render('./projects/todos.ejs');
})

// app.listen(process.env.PORT ,process.env.IP);
app.listen(8080,()=>{
    console.log('Server started');
})