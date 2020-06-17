const  http = require('http')
const express = require('express');
const chalk = require('chalk');//颜色工具

const app = express();

app.use(express.static('./public'));//设置静态文件目录, app.use(express.static(path.join(__dirname, 'public')));

//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
})

  /**
   * Create HTTP server.
   */
    const server = http.createServer(app);
    server.listen(3000, function() {
      console.log(chalk.green('Express server listening on port ' + server.address().port));
    });

