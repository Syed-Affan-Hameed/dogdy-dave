
const  callCloudflareOpenAi = async ()=>{
    const url ="https://openai-api-worker.syedaffanhameed.workers.dev/"
    const response = await fetch(url,{
        method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({"messageFromUser":"what is the meaning of life?"}) ,
    });
    const data = await response.json()
    console.log(data)
}

callCloudflareOpenAi();