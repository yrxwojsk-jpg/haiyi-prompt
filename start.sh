#!/bin/bash
# 海一云商集团 - 网站自动启动脚本
cd /Users/wangzhuotan/WorkBuddy/2026-05-24-17-26-52/haiyi-prompt-master

# Kill any existing processes
pkill -f "node.*8080.*haiyi" 2>/dev/null
sleep 1

# Start HTTPS server
/Users/wangzhuotan/.workbuddy/binaries/node/versions/22.12.0/bin/node -e "
const http=require('http'),fs=require('fs'),path=require('path');
http.createServer((req,res)=>{
  let file=req.url==='/'?'/index.html':req.url.split('?')[0];
  let fp=path.join(__dirname,file);
  let types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png'};
  try{let d=fs.readFileSync(fp);res.writeHead(200,{'Content-Type':types[path.extname(fp)]||'text/plain','Access-Control-Allow-Origin':'*'});res.end(d)}
  catch(e){res.writeHead(404);res.end('404')}
}).listen(8080,'0.0.0.0');
" &

sleep 2

# Start serveo tunnel
while true; do
  echo "$(date): Starting tunnel..."
  ssh -T -o StrictHostKeyChecking=no -o ServerAliveInterval=30 -o ServerAliveCountMax=3 -R 80:localhost:8080 serveo.net 2>&1
  echo "$(date): Tunnel died, restarting in 5s..."
  sleep 5
done
