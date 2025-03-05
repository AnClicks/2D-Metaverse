ws1 = new WebSocket(WS_URL)
    ws2 = new WebSocket(WS_URL)

    await new Promise(r=>{
    ws1.onopen =r
    })
    await new Promise(r=>{
    ws2.onopen =r
    })